import { Binder } from './binder'
import { Dialog } from './dialog'
import { Channel } from './channel'
import { UserMessage } from './types'

type Matcher = { match: (message: UserMessage) => boolean }

type DialogHandler<T extends Bot> = Matcher & {
  handler: (dialog: Dialog<T>, bot: T) => any
}

type PerformerHandler<T> = Matcher & {
  handler: (message: UserMessage, bot: T) => any
}

export abstract class Bot<BotMessage = any> extends OtherClass {
  /** @internal */
  _dialogHandlers: DialogHandler<this>[] = []
  /** @internal */
  _performerHandlers: PerformerHandler<this>[] = []

  when = Binder.for(this)

  _: { BotMessage: BotMessage }
  private _channels = new Map<string, Channel>()

  abstract listen(arg?: any): this
  abstract say(channel: string, message: BotMessage): Promise<any>

  /** @internal */
  _channelFor(channelId: string) {
    const channel = this._channels.get(channelId) || new Channel()
    this._channels.set(channelId, channel)
    return channel
  }

  dialog(channel: string, users: string[]) {
    return new Dialog(this, channel, users)
  }

  abortDialog(channel: string, user: string) {
    this._channelFor(channel).abort(user)
  }

  protected onMessage(message: UserMessage): any {
    const performer = this._performerHandlers.find(c => c.match(message))
    if (performer) return performer.handler(message, this)

    const channel = this._channelFor(message.channel)
    const hasActions = channel.hasFor(message.user)
    if (hasActions) return channel.processMessage(message)

    const dialog = this._dialogHandlers.find(c => c.match(message))
    if (dialog) {
      const obj = this.dialog(message.channel, [message.user])
      obj._manager.perform(message)
      dialog.handler(obj, this)
    }
  }
}
