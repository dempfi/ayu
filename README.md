![ayu](https://i.imgur.com/zDJHi5D.png)

`ayu` is a simple theme with bright colors and comes in three versions — *dark*, *mirage* and *light* for all day long comfortable work.

### Font

`ayu` uses [__Roboto Mono__](https://www.google.com/fonts/specimen/Roboto+Mono) as main font and it's highly recommended to install it to get monospaced font in filetree. But if you don't have it then the UI theme will downgrade to standard UI font used in Sublime Text.

### File Icons

`ayu` from version `3.0.0` supports customization via [A File Icon](https://github.com/ihodev/a-file-icon) package. Please install it and restart Sublime for better expereince.

### Screenshots

<h6 align='center'>Light with <code>ui_separator</code> option on</h6>

![Light with separators on](https://i.imgur.com/xiiPGbC.png)

---


<h6 align='center'>Mirage with <code>ui_separator</code> option off</h6>

![Mirage with separators off](https://i.imgur.com/IYmV8Wb.png)

---

<h6 align='center'>Dark with <code>ui_separator</code> option on</h6>

![Dark with separators on](https://i.imgur.com/YrNneOD.png)

### Settings

```js
"ui_native_titlebar":       true, // use native titlebars on macOs
"ui_separator":             true, // separators between panels
"ui_font_size_small":       true, // smaller UI font size(sidebar, statusbar etc)
"ui_big_tabs":              true, // increased tab height
"ui_fix_tab_labels":        true, // to fix tab labels if they look not right
"ui_font_source_code_pro":  true, // use Source Code Pro (https://fonts.google.com/specimen/Source+Code+Pro) as UI font
"ui_font_default":          true, // use Sublime's default UI font
"ui_wide_scrollbars":       true, // wider scrollbars
```

---

### Installation

###### Recommended

You can install `ayu` via [Package Control](https://packagecontrol.io/).

1. Press <kbd>cmd/ctrl</kbd> + <kbd>shift</kbd> + <kbd>p</kbd> to open the command palette.
2. Type `install package` and press enter. Then search for `ayu`

###### Manual

1. Download the [latest release](https://github.com/dempfi/ayu/releases/latest), extract and rename the directory to `ayu`.
2. Move the directory inside your sublime `/Packages` directory. *(Preferences > Browse packages...)*

---

### Activation

###### Recommended

Open command palette via `Tools > Command Palette` (or <kbd>cmd/ctrl</kbd> + <kbd>shift</kbd> + <kbd>p</kbd>) and type `ayu: Activate theme`.


###### With Skins package

[Skins](https://packagecontrol.io/packages/Skins) provides a simple and efficient way to change themes, save your own presets and quickly try out new looks. Activation is as simple as opening up the command palette, running `Select Skin` and choosing `Ayu - Dark` or `Ayu - Light` from the list.


###### Via Preferences

Add these lines to your user settings *Preferences > Setting - User*:

For light theme:

```js
"theme": "ayu-light.sublime-theme",
"color_scheme": "Packages/ayu/ayu-light.tmTheme",
```

For mirage theme:

```js
"theme": "ayu-mirage.sublime-theme",
"color_scheme": "Packages/ayu/ayu-mirage.tmTheme",
```

For dark theme:

```js
"theme": "ayu-dark.sublime-theme",
"color_scheme": "Packages/ayu/ayu-dark.tmTheme",
```

### Sublime Text 2

_Sublime Text 2 version may have some glitches, if you notice something, please file an issue._

Add this lines to your user settings *Preferences > Setting - User*:

For light theme:

```js
"theme": "ayu-light2.sublime-theme",
"color_scheme": "Packages/ayu/ayu-light.tmTheme",
```

For mirage theme:

```js
"theme": "ayu-mirage2.sublime-theme",
"color_scheme": "Packages/ayu/ayu-mirage.tmTheme",
```

For dark theme:

```js
"theme": "ayu-dark2.sublime-theme",
"color_scheme": "Packages/ayu/ayu-dark.tmTheme",
```

**NOTE:** Restart Sublime Text after activation of the theme to avoid any glitches.

### Related projects and ports

- `ayu` for Ace: https://github.com/ayu-theme/ayu-ace
- `ayu` colors as NPM package: https://github.com/ayu-theme/ayu-colors
- `ayu` for VSCode: https://github.com/teabyii/vscode-ayu

<div align="right"><sup>
  made with ❤️ by <a href="https://github.com/dempfi">@dempfi</a>
</sup></div>
