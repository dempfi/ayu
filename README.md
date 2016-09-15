![ayu](http://i.imgur.com/HYZcBYW.png)

`ayu` is a successor them to Neka and supports all the features of Neka.

# Font

`ayu` uses [__Roboto Mono__](https://www.google.com/fonts/specimen/Roboto+Mono) as main font and it's highly recommended to install it to get monospaced font in filetree. But if you don't have it then the UI theme will downgrade to standard UI font used in Sublime Text.


# Settings

```json
"ui_separator":       "true" // separators between panels
"ui_font_size_small": "true" // smaller UI font size(sidebar, statusbar etc)
```

# Installation

You can install `ayu` via [Package Control](https://packagecontrol.io/).

1. Press <kbd>cmd/ctrl</kbd> + <kbd>shift</kbd> + <kbd>p</kbd> to open the command palette.
2. Type *"install package"* and press enter. Then search for `ayu`

# Manual installation

1. Download the [latest release](https://github.com/dempfi/ayu/releases/latest), extract and rename the directory to `ayu`.
2. Move the directory inside your sublime `Packages` directory. **(Preferences > Browse packages...)**

# Activate
Add this lines to your user settings *Preferences > Setting - User*:

For dark theme:
```json
"theme": "ayu.sublime-theme",
"color_scheme": "Packages/ayu/ayu.tmTheme",
```

For light theme:
```json
"theme": "ayu-light.sublime-theme",
"color_scheme": "Packages/ayu/ayu-light.tmTheme",
```

**NOTE:** Restart Sublime Text after activating the theme.
