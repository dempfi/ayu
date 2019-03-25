import { Scheme } from 'ayu'

export default (scheme: Scheme) => ({
  name: "ayu",

  globals: {
    background: scheme.common.bg.hex(),
    foreground: scheme.common.fg.hex(),
    invisibles: scheme.common.fg.alpha(.3).hex(),
    caret: scheme.common.accent.hex(),
    block_caret: scheme.common.accent.alpha(.3).hex(),
    line_highlight: scheme.ui.line.hex(),

    // misspelling: ,
    // fold_marker: ,
    // minimap_border: ,
    accent: scheme.common.accent.hex(),

    popup_css: `
      html, body {
        background-color: ${scheme.ui.panel.bg.hex()};
        color: ${scheme.common.fg.hex()};
      }
      body {
        padding: 1px 3px;
      }
      a {
        color: rgba(${scheme.syntax.tag.rgb()}, .7);
      }
    `,

    gutter: scheme.common.bg.hex(),
    gutter_foreground: scheme.ui.gutter.normal.hex(),

    line_diff_width: "2",
    line_diff_added: scheme.vcs.added.hex(),
    line_diff_modified: scheme.vcs.modified.hex(),
    line_diff_deleted: scheme.vcs.removed.hex(),

    selection: scheme.ui.selection.bg.hex(),
    // selection_foreground: scheme.ui.selection.bg.hex(),
    selection_border: scheme.ui.selection.border.hex(),
    selection_border_width: "1",
    inactive_selection: scheme.ui.selection.inactive.hex(),
    inactive_selection_foreground: scheme.common.fg.alpha(.3).hex(),
    selection_corner_style: "round",
    selection_corner_radius: "3",

    highlight: scheme.common.accent.alpha(.4).hex(),
    find_highlight: scheme.common.accent.hex(),
    find_highlight_foreground: scheme.common.bg.hex(),

    guide: scheme.ui.guide.normal.hex(),
    active_guide: scheme.ui.guide.active.hex(),
    stack_guide: scheme.ui.guide.normal.alpha(.4).hex(),

    shadow: scheme.common.bg.alpha(0.3).hex(),
    shadow_width: "0",
  },

  rules: [
    {
      name: 'Comment',
      scope: 'comment',
      font_style: 'italic',
      foreground: scheme.syntax.comment.hex()
    },

    {
      name: 'String',
      scope: 'string, constant.other.symbol',
      foreground: scheme.syntax.string.hex()
    },
    {
      name: 'Regular Expressions and Escape Characters',
      scope: 'string.regexp, constant.character, constant.other',
      foreground: scheme.syntax.regexp.hex()
    },


    {
      name: 'Number',
      scope: 'constant.numeric',
      foreground: scheme.common.accent.hex()
    },
    {
      name: 'Built-in constants',
      scope: 'constant.language',
      foreground: scheme.common.accent.hex()
    },
    {
      name: 'Constants',
      scope: 'meta.constant, entity.name.constant',
      foreground: scheme.syntax.constant.hex()
    },


    {
      name: 'Variable',
      scope: 'variable',
      foreground: scheme.common.fg.hex()
    },
    {
      name: 'Member Variable',
      scope: 'variable.member',
      foreground: scheme.syntax.markup.hex()
    },
    {
      name: 'Language variable',
      scope: 'variable.language',
      font_style: 'italic',
      foreground: scheme.syntax.tag.hex()
    },


    // ------
    // Keywords
    {
      name: 'Storage',
      scope: 'storage, storage.type.keyword',
      foreground: scheme.syntax.keyword.hex()
    },
    {
      name: 'Keyword',
      scope: 'keyword',
      foreground: scheme.syntax.keyword.hex()
    },
    {
      name: 'Java keyword fixes',
      scope: 'source.java meta.class.java meta.class.identifier.java storage.type.java',
      foreground: scheme.syntax.keyword.hex()
    },


    // ------
    // Operators
    {
      name: 'Operators',
      scope: 'keyword.operator',
      foreground: scheme.syntax.operator.hex()
    },


    // ------
    // Punctuation
    {
      name: 'Separators like ; or ,',
      scope: 'punctuation.separator, punctuation.terminator',
      foreground: scheme.common.fg.alpha(.7).hex()
    },
    {
      name: 'Punctuation',
      scope: 'punctuation.section',
      foreground: scheme.common.fg.hex()
    },
    {
      name: 'Accessor',
      scope: 'punctuation.accessor',
      foreground: scheme.syntax.operator.hex()
    },


    // ------
    // Types
    {
      name: 'Types fixes',
      scope: 'source.java storage.type, source.haskell storage.type, source.c storage.type',
      foreground: scheme.syntax.entity.hex()
    },
    {
      name: 'Inherited class type',
      scope: 'entity.other.inherited-class',
      foreground: scheme.syntax.tag.hex()
    },
    // Fixes
    {
      name: 'Lambda arrow',
      scope: 'storage.type.function',
      foreground: scheme.syntax.keyword.hex()
    },
    {
      name: 'Java primitive variable types',
      scope: 'source.java storage.type.primitive',
      foreground: scheme.syntax.tag.hex()
    },


    // ------
    // Function/method names in definitions
    // and calls
    {
      name: 'Function name',
      scope: 'entity.name.function',
      foreground: scheme.syntax.func.hex()
    },
    {
      name: 'Function arguments',
      scope: 'variable.parameter, meta.parameter',
      foreground: scheme.syntax.constant.hex()
    },
    {
      name: 'Function call',
      scope: 'variable.function, variable.annotation, meta.function-call.generic, support.function.go',
      foreground: scheme.syntax.func.hex()
    },
    {
      name: 'Library function',
      scope: 'support.function, support.macro',
      foreground: scheme.syntax.markup.hex()
    },


    {
      name: 'Imports and packages',
      scope: 'entity.name.import, entity.name.package',
      foreground: scheme.syntax.string.hex()
    },


    {
      name: 'Entity name',
      scope: 'entity.name, source.js meta.function-call.constructor variable.type',
      foreground: scheme.syntax.entity.hex()
    },


    // Tag and their attributes
    {
      name: 'Tag',
      scope: 'entity.name.tag, meta.tag.sgml',
      foreground: scheme.syntax.tag.hex()
    },
    {
      name: 'Tag start/end',
      scope: 'punctuation.definition.tag.end, punctuation.definition.tag.begin, punctuation.definition.tag',
      foreground: scheme.syntax.tag.alpha(.5).hex()
    },
    {
      name: 'Tag attribute',
      scope: 'entity.other.attribute-name',
      foreground: scheme.syntax.func.hex()
    },


    {
      name: 'Library constant',
      scope: 'support.constant',
      font_style: 'italic',
      foreground: scheme.syntax.operator.hex()
    },
    {
      name: 'Library class/type',
      scope: 'support.type, support.class, source.go storage.type',
      foreground: scheme.syntax.tag.hex()
    },


    {
      name: 'Decorators/annotation',
      scope: 'meta.decorator variable.other, meta.decorator punctuation.decorator, storage.type.annotation, variable.annotation, punctuation.definition.annotation',
      foreground: scheme.syntax.special.hex()
    },

    {
      name: 'Invalid',
      scope: 'invalid',
      foreground: scheme.syntax.error.hex()
    },
    {
      name: 'diff.header',
      scope: 'meta.diff, meta.diff.header',
      foreground: '#c594c5'
    },
    {
      name: 'Ruby class methods',
      scope: 'source.ruby variable.other.readwrite',
      foreground: scheme.syntax.func.hex()
    },
    {
      name: 'CSS tag names',
      scope: 'source.css entity.name.tag, source.sass entity.name.tag, source.scss entity.name.tag, source.less entity.name.tag, source.stylus entity.name.tag',
      foreground: scheme.syntax.entity.hex()
    },
    {
      name: 'CSS browser prefix',
      scope: 'source.css support.type, source.sass support.type, source.scss support.type, source.less support.type, source.stylus support.type',
      foreground: scheme.syntax.comment.hex()
    },
    {
      name: 'CSS Properties',
      scope: 'support.type.property-name',
      font_style: 'normal',
      foreground: scheme.syntax.tag.hex()
    },
    {
      name: 'Search Results Nums',
      scope: 'constant.numeric.line-number.find-in-files - match',
      foreground: scheme.syntax.comment.hex()
    },
    {
      name: 'Search Results Match Nums',
      scope: 'constant.numeric.line-number.match',
      foreground: scheme.syntax.keyword.hex()
    },
    {
      name: 'Search Results Lines',
      scope: 'entity.name.filename.find-in-files',
      foreground: scheme.syntax.string.hex()
    },
    {
      scope: 'message.error',
      foreground: scheme.syntax.error.hex()
    },
    {
      name: 'Markup heading',
      scope: 'markup.heading, markup.heading entity.name',
      font_style: 'bold',
      foreground: scheme.syntax.string.hex()
    },
    {
      name: 'Markup links',
      scope: 'markup.underline.link, string.other.link',
      foreground: scheme.syntax.tag.hex()
    },
    {
      name: 'Markup Italic',
      scope: 'markup.italic',
      font_style: 'italic',
      foreground: scheme.syntax.markup.hex()
    },
    {
      name: 'Markup Bold',
      scope: 'markup.bold',
      font_style: 'bold',
      foreground: scheme.syntax.markup.hex()
    },
    {
      name: 'Markup Bold/italic',
      scope: 'markup.italic markup.bold, markup.bold markup.italic',
      font_style: 'bold italic'
    },
    {
      name: 'Markup Code',
      scope: 'markup.raw',
      background: scheme.common.fg.alpha(.02).hex()
    },
    {
      name: 'Markup Code Inline',
      scope: 'markup.raw.inline',
      background: scheme.common.fg.alpha(.06).hex()
    },
    {
      name: 'Markdown Separator',
      scope: 'meta.separator',
      font_style: 'bold',
      background: scheme.common.fg.alpha(.06).hex(),
      foreground: scheme.syntax.comment.hex()
    },
    {
      name: 'Markup Blockquote',
      scope: 'markup.quote',
      foreground: scheme.syntax.regexp.hex(),
      font_style: 'italic'
    },
    {
      name: 'Markup List Bullet',
      scope: 'markup.list punctuation.definition.list.begin',
      foreground: scheme.syntax.func.hex()
    },
    {
      name: 'Markup added',
      scope: 'markup.inserted',
      foreground: scheme.vcs.added.hex()
    },
    {
      name: 'Markup modified',
      scope: 'markup.changed',
      foreground: scheme.vcs.modified.hex()
    },
    {
      name: 'Markup removed',
      scope: 'markup.deleted',
      foreground: scheme.vcs.removed.hex()
    },
    {
      name: 'Markup Strike',
      scope: 'markup.strike',
      foreground: scheme.syntax.special.hex()
    },
    {
      name: 'Markup Table',
      scope: 'markup.table',
      background: scheme.common.fg.alpha(.06).hex(),
      foreground: scheme.syntax.tag.hex()
    },
    {
      name: 'Markup Raw Inline',
      scope: 'text.html.markdown markup.inline.raw',
      foreground: scheme.syntax.operator.hex()
    },
    {
      name: 'Markdown - Line Break',
      scope: 'text.html.markdown meta.dummy.line-break',
      background: scheme.syntax.comment.hex(),
      foreground: scheme.syntax.comment.hex()
    },
    {
      name: 'Markdown - Raw Block Fenced',
      scope: 'punctuation.definition.markdown',
      background: scheme.common.fg.hex(),
      foreground: scheme.syntax.comment.hex()
    }
  ]
})
