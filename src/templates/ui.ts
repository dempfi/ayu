import { Scheme } from 'ayu'

export default (scheme: Scheme, kind: string) => [
  // WINDOWS
  {
    "class": "title_bar",
    "bg": scheme.ui.bg.hex(),
    "fg": scheme.ui.fg.hex()
  },
  {
    "class": "title_bar",
    "settings": ["ui_native_titlebar"],
    "bg": "",
    "fg": ""
  },
  {
    "class": "title_bar",
    "settings": ["ui_separator"],
    "bg": scheme.ui.bg.hex()
  },



  // SIDEBAR
  {
    "class": "sidebar_container",
    "content_margin": [0, 6, 0, 0],
    "layer0.opacity": 1,
    "layer0.tint": scheme.ui.bg.hex()
  },
  {
    "class": "sidebar_container",
    "settings": ["ui_separator"],
    "layer0.tint": scheme.ui.bg.hex(),
    "layer1.texture": "ayu/assets/separator-sidebar.png",
    "layer1.inner_margin": [0, 34, 2, 1],
    "layer1.opacity": 1,
    "layer1.tint": scheme.ui.line.hex()
  },


  {
    "class": "sidebar_tree",
    "indent_top_level": false,
    "row_padding": [20, 5],
    "dark_content": false,
    "spacer_rows": true,
    "indent_offset": 2,
    "indent": 8
  },


  {
    "class": "sidebar_heading",
    "color": scheme.ui.fg.hex(),
    "font.bold": true,
    "font.size": 11,
  },


  {
    "class": "tree_row",
    "layer0.texture": "ayu/assets/tree-highlight.png",
    "layer0.tint": scheme.ui.selection.active.alpha(0).hex(),
    "layer0.inner_margin": [8, 4],
    "layer0.opacity": 1,

    "layer1.texture": "ayu/assets/tree-highlight-border.png",
    "layer1.tint": scheme.ui.selection.active.hex(),
    "layer1.inner_margin": [8, 4],
    "layer1.opacity": 0
  },
  {
    "class": "tree_row",
    "attributes": ["selectable", "hover"],
    "layer0.tint": scheme.ui.selection.active.hex(),
    "layer1.opacity": 1
  },
  {
    "class": "tree_row",
    "attributes": ["selectable", "selected"],
    "layer0.tint": scheme.ui.selection.normal.hex(),
  },
  {
    "class": "tree_row",
    "attributes": ["selectable", "selected", "hover"],
    "layer0.tint": scheme.ui.selection.active.hex(),
  },


  {
    "class": "sidebar_label",
    "fg": scheme.ui.fg.hex(),
    "font.size": 12
  },
  {
    "class": "sidebar_label",
    "parents": [{ "class": "tree_row", "attributes": ["hover"] }],
    "fg": scheme.editor.fg.hex()
  },
  {
    "class": "sidebar_label",
    "parents": [{ "class": "tree_row", "attributes": ["selected"] }],
    "fg": scheme.editor.fg.hex()
  },
  {
    "class": "sidebar_label",
    "parents": [{ "class": "tree_row", "attributes": ["expandable"] }],
    "fg": scheme.ui.fg.hex(),
    "font.bold": false
  },
  {
    "class": "sidebar_label",
    "parents": [{ "class": "tree_row", "attributes": ["expandable"] }],
    "settings": ["bold_folder_labels"],
    "font.bold": true
  },
  {
    "class": "sidebar_label",
    "parents": [{ "class": "tree_row", "attributes": ["expandable", "hover"] }],
    "fg": scheme.editor.fg.hex()
  },
  {
    "class": "sidebar_label",
    "parents": [{ "class": "tree_row", "attributes": ["expanded"] }],
    "fg": scheme.editor.fg.hex()
  },
  {
    "class": "sidebar_label",
    "parents": [{ "class": "tree_row", "attributes": ["expanded"] }],
    "settings": ["bold_folder_labels"],
    "font.bold": true
  },
  {
    "class": "sidebar_label",
    "attributes": ["transient"],
    "font.italic": false
  },
  // {
  //  "class": "sidebar_label",
  //  "parents": [{"class": "tree_row", "attributes": ["expanded", "selected"]}],
  //  "color": scheme.editor.fg.hex()
  // },
  {
    "class": "sidebar_label",
    "parents": [{ "class": "file_system_entry", "attributes": ["ignored"] }],
    "fg": scheme.ui.fg.alpha(.5).hex()
  },


  {
    "class": "disclosure_button_control",
    "content_margin": [0, 0, 0, 0]
  },


  {
    "class": "close_button",
    "content_margin": [6, 8],
    "layer0.texture": "ayu/assets/close.png",
    "layer0.opacity": 0,
    "layer0.inner_margin": [0, 0],
    "layer0.tint": scheme.ui.fg.hex()
  },
  {
    "class": "close_button",
    "parents": [{ "class": "tree_row", "attributes": ["hover"] }],
    "layer0.opacity": 1
  },
  {
    "class": "close_button",
    "attributes": ["dirty"],
    "layer0.texture": "ayu/assets/dirty.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0
  },
  {
    "class": "close_button",
    "attributes": ["hover"],
    "layer0.opacity": 1.0,
    "layer0.tint": scheme.common.accent.hex()
  },


  {
    "class": "icon_folder",
    "content_margin": [9, 9],
    "layer0.tint": scheme.ui.bg.hex(),
    "layer0.opacity": 0,

    "layer1.texture": "ayu/assets/folder.png",
    "layer1.tint": scheme.ui.fg.alpha(.75).hex(),
    "layer1.opacity": 1,

    "layer2.texture": "ayu/assets/folder-open.png",
    "layer2.tint": scheme.common.accent.hex(),
    "layer2.opacity": 0.0
  },
  {
    "class": "icon_folder",
    "parents": [{ "class": "tree_row", "attributes": ["expanded"] }],
    "layer1.opacity": 0.0,
    "layer2.opacity": 1.0
  },
  {
    "class": "icon_folder",
    "parents": [{ "class": "tree_row", "attributes": ["hover"] }],
    "layer1.tint": scheme.common.accent.hex()
  },
  {
    "class": "icon_folder",
    "parents": [{ "class": "tree_row", "attributes": ["expanded", "hover"] }],
    "layer2.texture": {
      "keyframes": [
        "ayu/assets/folder-open-1.png",
        "ayu/assets/folder-open-1.png",
        "ayu/assets/folder-open-2.png",
        "ayu/assets/folder-open-3.png",
        "ayu/assets/folder-open-4.png",
        "ayu/assets/folder-open-5.png",
        "ayu/assets/folder-open-5.png",
        "ayu/assets/folder-open-5.png",
        "ayu/assets/folder-open-6.png",
        "ayu/assets/folder-open-6.png",
        "ayu/assets/folder-open-6.png",
        "ayu/assets/folder-open-6.png",
        "ayu/assets/folder-open.png"
      ],
      "loop": false,
      "frame_time": 0.020
    },
    "layer1.opacity": 0.0,
    "layer2.opacity": 1.0
  },
  {
    "class": "icon_folder",
    "parents": [{ "class": "tree_row", "attributes": ["selected"] }],
    "layer1.tint": scheme.common.accent.hex()
  },


  {
    "class": "icon_folder_loading",
    "layer1.texture": {
      "keyframes": [
        "ayu/assets/spinner11.png",
        "ayu/assets/spinner10.png",
        "ayu/assets/spinner9.png",
        "ayu/assets/spinner8.png",
        "ayu/assets/spinner7.png",
        "ayu/assets/spinner6.png",
        "ayu/assets/spinner5.png",
        "ayu/assets/spinner4.png",
        "ayu/assets/spinner3.png",
        "ayu/assets/spinner2.png",
        "ayu/assets/spinner1.png",
        "ayu/assets/spinner.png"
      ],
      "loop": true,
      "frame_time": 0.075
    },
    "layer1.tint": scheme.common.accent.hex(),

    "layer0.opacity": 0.0,
    "content_margin": [8, 8]
  },


  {
    "class": "icon_folder_dup",
    "content_margin": [9, 9],
    "layer0.texture": "ayu/assets/folder.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0,

    "layer1.texture": "ayu/assets/folder-symlink.png",
    "layer1.tint": scheme.ui.fg.hex(),
    "layer1.opacity": 0.3
  },
  {
    "class": "icon_folder_dup",
    "parents": [{ "class": "tree_row", "attributes": ["hover"] }],
    "layer0.tint": scheme.common.accent.hex()
  },
  {
    "class": "icon_folder_dup",
    "parents": [{ "class": "tree_row", "attributes": ["expanded"] }],
    "layer0.tint": scheme.common.accent.hex()
  },


  {
    "class": "icon_file_type",
    "content_margin": [8, 8]
  },

  {
    "class": "vcs_status_badge",
    "attributes": ["ignored"],
    "layer0.tint": scheme.ui.fg.alpha(.3).hex(),
  },
  {
    "class": "vcs_status_badge",
    "attributes": ["added"],
    "layer0.tint": scheme.vcs.added.alpha(.4).hex(),
  },
  {
    "class": "vcs_status_badge",
    "attributes": ["modified"],
    "layer0.tint": scheme.vcs.modified.alpha(.4).hex(),
  },
  {
    "class": "vcs_status_badge",
    "attributes": ["deleted"],
    "layer0.tint": scheme.vcs.removed.alpha(.4).hex(),
  },


// >>>>>
/*
  // Tabset
  {
    "class": "tabset_control",
    "layer0.opacity": 1.0,
    "content_margin": [0, 0, 0, 0],
    "tab_height": 34,
  },
  {
    "class": "tabset_control",
    "settings": { "file_tab_style": ["", "rounded"] },
    "tab_overlap": 10,
    "tab_height": 32,
    "connector_height": 2,
  },
  {
    "class": "tabset_control",
    "settings": ["mouse_wheel_switches_tabs", "!enable_tab_scrolling"],
    "mouse_wheel_switch": true
  },
  {
    "class": "tabset_control",
    "settings": { "file_tab_style": ["", "rounded", "square"] },
    "parents": [{ "class": "edit_window", "attributes": ["file_dark"] }],
    "layer0.tint": "var(tabset_dark_bg)"
  },
  {
    "class": "tabset_control",
    "settings": { "file_tab_style": ["", "rounded", "square"] },
    "parents": [{ "class": "edit_window", "attributes": ["file_medium_dark"] }],
    "layer0.tint": "var(tabset_medium_dark_bg)"
  },
  {
    "class": "tabset_control",
    "settings": { "file_tab_style": ["", "rounded", "square"] },
    "parents": [{ "class": "edit_window", "attributes": ["file_medium"] }],
    "layer0.tint": "var(tabset_medium_bg)"
  },
  {
    "class": "tabset_control",
    "settings": { "file_tab_style": ["", "rounded", "square"] },
    "parents": [{ "class": "edit_window", "attributes": ["file_light"] }],
    "layer0.tint": "var(tabset_light_bg)"
  },
  {
    "class": "tab_connector",
    "layer0.texture": "",
    "layer0.opacity": 1.0,
    "tint_index": 0,
  },
  {
    "class": "tab_connector",
    "settings": { "file_tab_style": ["", "rounded"] },
    "attributes": ["left_overhang"],
    "layer0.texture": "Theme - Default/common/tab_connector_rounded_left_overhang.png",
    "layer0.inner_margin": [12, 0, 0, 0],
  },
  {
    "class": "tab_connector",
    "settings": { "file_tab_style": ["", "rounded"] },
    "attributes": ["right_overhang"],
    "layer0.texture": "Theme - Default/common/tab_connector_rounded_right_overhang.png",
    "layer0.inner_margin": [0, 0, 12, 0],
  },
  // Tabs
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded"] },
    "layer0.texture": "Theme - Default/common/tab_rounded_inverse.png",
    "layer0.inner_margin": [12, 0, 12, 0],
    "layer0.opacity": 1.0,
    "layer1.texture": "Theme - Default/common/tab_rounded.png",
    "layer1.inner_margin": [12, 0, 12, 0],
    "layer1.opacity": 1.0,
    "layer2.texture": "Theme - Default/common/tab_rounded_highlight.png",
    "layer2.inner_margin": [12, 0, 12, 0],
    "layer2.opacity": 0.0,
    "layer3.texture": "Theme - Default/common/tab_rounded_divider.png",
    "layer3.inner_margin": [7, 0, 7, 0],
    "layer3.opacity": { "target": 0.0, "speed": 5.0, "interpolation": "smoothstep" },
    "tint_index": 1,
    "tint_modifier": "transparent",
    "accent_tint_index": 2,
    "content_margin": [16, 5, 11, 4],
    "hit_test_level": 0.3
  },
  // Tabs - background

  // These rules prevent the opacity of un-highlighted sheets from
  // stacking, which results in the rounded corners being dark
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded", "square"] },
    "parents": [{ "class": "edit_window", "attributes": ["file_dark"] }],
    "layer0.tint": "var(tabset_dark_bg)",
  },
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded", "square"] },
    "parents": [{ "class": "edit_window", "attributes": ["file_medium_dark"] }],
    "layer0.tint": "var(tabset_medium_dark_bg)",
  },
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded", "square"] },
    "parents": [{ "class": "edit_window", "attributes": ["file_medium"] }],
    "layer0.tint": "var(tabset_medium_bg)",
  },
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded", "square"] },
    "parents": [{ "class": "edit_window", "attributes": ["file_light"] }],
    "layer0.tint": "var(tabset_light_bg)",
  },
  // The following rules prevent aliasing in the tab corner between two
  // selected tabs
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded"] },
    "attributes": ["selected"],
    "layer0.opacity": 0,
  },
  // We don't use animation for the selected tab opacity changed due
  // to the hover state syncing with the hover state of the
  // sheet_contents, which has the background_modifier that can not
  // be animated
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded", "square"] },
    "attributes": ["selected"],
    "layer1.opacity": 1.0,
  },
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded", "square"] },
    "attributes": ["!selected"],
    "layer1.opacity": { "target": 0.0, "speed": 5.0, "interpolation": "smoothstep" },
  },
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded", "square"] },
    "attributes": ["!selected", "hover"],
    "layer1.opacity": { "target": 0.7, "speed": 5.0, "interpolation": "smoothstep" },
  },
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded", "square"] },
    "attributes": ["!selected", "hover", "file_light"],
    "layer1.opacity": { "target": 0.7, "speed": 5.0, "interpolation": "smoothstep" },
  },
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded"] },
    "attributes": ["selected", "left_overhang"],
    "layer0.texture": "Theme - Default/common/tab_rounded_left_overhang.png",
    "layer1.texture": "Theme - Default/common/tab_rounded_left_overhang.png",
  },
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded"] },
    "attributes": ["selected", "right_overhang"],
    "layer0.texture": "Theme - Default/common/tab_rounded_right_overhang.png",
    "layer1.texture": "Theme - Default/common/tab_rounded_right_overhang.png",
  },
  // Tabs - modified highlight
  {
    "class": "tab_control",
    "attributes": ["dirty"],
    "settings": {
      "file_tab_style": ["", "rounded", "square"],
      "highlight_modified_tabs": true
    },
    "layer2.opacity": 0.8
  },
  {
    "class": "tab_control",
    "attributes": ["dirty", "selected"],
    "settings": ["highlight_modified_tabs"],
    "layer2.opacity": 1.0
  },
  {
    "class": "tab_control",
    "attributes": ["dirty", "!selected"],
    "settings": {
      "file_tab_style": ["", "rounded"],
      "highlight_modified_tabs": true
    },
    "layer2.texture": "Theme - Default/common/tab_rounded_pinstripe.png",
    "layer2.inner_margin": [12, 0, 12, 0],
  },
  {
    "class": "tab_control",
    "attributes": ["added"],
    "layer2.tint": "var(--greenish)",
  },
  {
    "class": "tab_control",
    "attributes": ["deleted"],
    "layer2.tint": "var(--redish)",
  },
  // Tabs - dividers
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded", "square"] },
    "parents": [{ "class": "edit_window", "attributes": ["file_light"] }],
    "layer3.tint": "var(file_tab_unselected_light_label_color)",
  },
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded"] },
    "attributes": ["right", "!left"],
    "layer3.texture": "Theme - Default/common/tab_rounded_divider_right.png",
  },
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded"] },
    "attributes": ["left_of_selected", "!left", "!right_of_selected", "!right_of_hover", "!selected", "!hover"],
    "layer3.texture": "Theme - Default/common/tab_rounded_divider_right.png",
    "layer3.opacity": { "target": 0.3, "speed": 5.0, "interpolation": "smoothstep" },
  },
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded"] },
    "attributes": ["left_of_hover", "!left", "!right_of_selected", "!right_of_hover", "!selected", "!hover"],
    "layer3.texture": "Theme - Default/common/tab_rounded_divider_right.png",
    "layer3.opacity": { "target": 0.3, "speed": 5.0, "interpolation": "smoothstep" },
  },
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded"] },
    "attributes": ["left", "!right"],
    "layer3.texture": "Theme - Default/common/tab_rounded_divider_left.png",
  },
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded"] },
    "attributes": ["right_of_selected", "!right", "!left_of_selected", "!left_of_hover", "!selected", "!hover"],
    "layer3.texture": "Theme - Default/common/tab_rounded_divider_left.png",
    "layer3.opacity": { "target": 0.3, "speed": 5.0, "interpolation": "smoothstep" },
  },
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded"] },
    "attributes": ["right_of_hover", "!right", "!left_of_selected", "!left_of_hover", "!selected", "!hover"],
    "layer3.texture": "Theme - Default/common/tab_rounded_divider_left.png",
    "layer3.opacity": { "target": 0.3, "speed": 5.0, "interpolation": "smoothstep" },
  },
  {
    "class": "tab_control",
    "settings": { "file_tab_style": ["", "rounded"] },
    "attributes": ["!highlighted", "!selected", "!hover", "!left_of_selected", "!right_of_selected", "!left_of_hover", "!right_of_hover"],
    "layer3.opacity": { "target": 0.3, "speed": 5.0, "interpolation": "smoothstep" },
  },
  */
// <<<<<


  // Sheets
  {
    "class": "sheet_contents",
    "background_modifier": ""
  },
  {
    "class": "sheet_contents",
    "settings": {
      "inactive_sheet_dimming": true,
    },
    "attributes": ["!highlighted"],
    "background_modifier": `blend(${scheme.ui.bg.hex()} 0%)`
  },

  // TABS
  {
    "class": "tabset_control",
    "mouse_wheel_switch": false,
    "tab_min_width": 50,
    "tab_overlap": 0,
    "tab_height": 34,
    "tab_width": 100,

    "layer0.tint": scheme.ui.bg.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [10, 0]
  },
  {
    "class": "tabset_control",
    "settings": ["mouse_wheel_switches_tabs", "!enable_tab_scrolling"],
    "mouse_wheel_switch": true
  },
  {
    "class": "tabset_control",
    "settings": ["ui_separator"],
    "tab_overlap": 6,
    "connector_height": 2,
    "content_margin": [0, 0, 0, 0],
    "layer0.tint": scheme.ui.bg.hex(),

    "layer1.texture": "ayu/assets/tabset-border.png",
    "layer1.tint": scheme.ui.line.hex(),
    "layer1.inner_margin": [1, 1, 1, 6],
    "layer1.opacity": 1,
  },

  {
    "class": "tab_connector",
    "layer0.texture": "",
    "layer0.opacity": 1.0,
    "tint_index": 0,
  },

  // {
  //   "class": "tab_connector",
  //   "settings": { "file_tab_style": ["", "rounded"] },
  //   "attributes": ["left_overhang"],
  //   "layer0.texture": "Theme - Default/common/tab_connector_rounded_left_overhang.png",
  //   "layer0.inner_margin": [12, 0, 0, 0],
  // },
  // {
  //   "class": "tab_connector",
  //   "settings": { "file_tab_style": ["", "rounded"] },
  //   "attributes": ["right_overhang"],
  //   "layer0.texture": "Theme - Default/common/tab_connector_rounded_right_overhang.png",
  //   "layer0.inner_margin": [0, 0, 12, 0],
  // },

  {
    "class": "tab_control",
    "settings": ["!ui_separator"],

    "layer0.tint": scheme.ui.bg.hex(),
    "layer0.opacity": 1.0,

    // Top
    "layer1.texture": "ayu/assets/separator-top.png",
    "layer1.tint": scheme.ui.line.hex(),
    "layer1.inner_margin": [0, 1, 0, 0],
    "layer1.opacity": 0.0,

    // Right
    "layer2.texture": "ayu/assets/separator-right.png",
    "layer2.tint": scheme.ui.line.hex(),
    "layer2.inner_margin": [0, 0, 1, 0],
    "layer2.opacity": 0.0,

    // Bottom
    "layer3.texture": "ayu/assets/separator-bottom.png",
    "layer3.tint": scheme.ui.line.hex(),
    "layer3.inner_margin": [0, 0, 0, 1],
    "layer3.opacity": 0.0,

    "content_margin": [15, -2, 15, 0],
    "max_margin_trim": 12
  },
  {
    "class": "tab_control",
    "settings": ["ui_separator"],

    "layer0.texture": "ayu/assets/tab-shadow.png",
    "layer0.inner_margin": [8, 0, 8, 0],
    "layer0.tint": scheme.ui.panel.shadow.hex(),
    "layer0.opacity": 0,

    "layer1.texture": "ayu/assets/tab.png",
    "layer1.inner_margin": [8, 0, 8, 0],
    "layer1.opacity": 0,

    "layer2.texture": "ayu/assets/tab-border.png",
    "layer2.inner_margin": [8, 0, 8, 0],
    "layer2.tint": scheme.ui.line.hex(),
    "layer2.opacity": 0,

    "layer3.texture": "Theme - Default/common/tab_rounded_divider.png",
    "layer3.inner_margin": [7, 0, 7, 0],
    "layer3.opacity": { "target": 0.0, "speed": 1.0, "interpolation": "smoothstep" },

    "content_margin": [16, 5, 11, 4],
    "hit_test_level": 0
  },

  // Selected current tab
  {
    "class": "tab_control", "attributes": ["selected"],
    "settings": ["!ui_separator"],
    "layer3.tint": scheme.common.accent.hex(),
    "layer3.opacity": 1.0
  },
  {
    "class": "tab_control", "attributes": ["selected"],
    "settings": ["ui_separator"],
    "layer0.opacity": { "target": 1, "speed": 1.0, "interpolation": "smoothstep" },
    "layer1.opacity": { "target": 1, "speed": 1.0, "interpolation": "smoothstep" },
    "layer1.tint": scheme.editor.bg.hex(),
    "layer2.opacity": 1,
  },
  {
    "class": "tab_control", "attributes": ["selected", "!highlighted"],
    "settings": ["ui_separator"],
    "layer0.opacity": 0,
    "layer1.opacity": 1,
    "layer1.tint": scheme.ui.bg.hex(),
    "layer2.opacity": 1,
  },

  // Hovered current tab
  {
    "class": "tab_control", "attributes": ["hover"],
    "settings": ["!ui_separator"],
    "layer3.tint": scheme.common.accent.hex(),
    "layer3.opacity": 0.3
  },
  {
    "class": "tab_control", "attributes": ["hover"],
    "settings": ["ui_separator"],
    // "layer0.tint": scheme.ui.bg.hex(),
  },

  // Selected current tab
  {
    "class": "tab_control", "attributes": ["selected", "hover"],
    "settings": ["!ui_separator"],
    "layer3.opacity": 1.0
  },
  {
    "class": "tab_control", "attributes": ["selected", "hover"],
    "settings": ["ui_separator"],
    // "layer0.tint": scheme.ui.bg.hex()
  },


  {
    "class": "tab_label",
    "fg": scheme.ui.fg.hex(),
    "font.italic": false,
    "font.bold": false,
    "font.size": 12
  },
  {
    "class": "tab_label",
    "settings": ["highlight_modified_tabs"],
    "font.italic": true,
    "attributes": ["dirty"],
    "fg": scheme.common.accent.hex()
  },
  // Tab selected label color
  {
    "class": "tab_label",
    "parents": [{ "class": "tab_control", "attributes": ["selected"] }],
    "fg": scheme.editor.fg.hex()
  },
  {
    "class": "tab_label",
    "parents": [{ "class": "tab_control", "attributes": ["hover"] }],
    "fg": scheme.editor.fg.hex()
  },
  {
    "class": "tab_label",
    "attributes": ["transient"],
    "font.italic": true
  },


  {
    "class": "tab_close_button",
    "content_margin": [0, 0],

    // Close Icon
    "layer0.texture": "ayu/assets/close.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0,

    // Dirty Icon
    "layer1.texture": "ayu/assets/dirty.png",
    "layer1.tint": scheme.ui.fg.hex(),
    "layer1.opacity": 0,
  },
  // Default
  {
    "class": "tab_close_button",
    "settings": ["show_tab_close_buttons"],
    "content_margin": [6, 8]
  },
  // Hover
  {
    "class": "tab_close_button",
    "settings": ["show_tab_close_buttons", "highlight_modified_tabs"],
    "attributes": ["hover"],
    "layer0.tint": scheme.common.accent.hex()
  },
  // Dirty tab
  {
    "class": "tab_close_button",
    "parents": [{ "class": "tab_control", "attributes": ["dirty"] }],
    "layer0.opacity": 0, // Close Icon
    "layer1.opacity": 1.0, // dirty Icon
    "content_margin": [6, 8]
  },
  // Dirty tab on hover
  {
    "class": "tab_close_button",
    "parents": [{ "class": "tab_control", "attributes": ["dirty"] }],
    "attributes": ["hover"],
    "layer0.opacity": 1.0, // Close Icon
    "layer1.opacity": 0 // Close Icon
  },
  // Selected dirty tab
  {
    "class": "tab_close_button",
    "parents": [{ "class": "tab_control", "attributes": ["selected", "dirty"] }],
    "layer0.opacity": 0, // Close Icon
    "layer1.opacity": 1.0, // Dirty Icon
    "layer1.tint": scheme.common.accent.hex()
  },
  // Selected dirty tab on hover
  {
    "class": "tab_close_button",
    "parents": [{ "class": "tab_control", "attributes": ["selected", "dirty"] }],
    "attributes": ["hover"],
    "layer0.opacity": 1.0,
    "layer1.opacity": 0
  },


  {
    "class": "scroll_tabs_left_button",
    "content_margin": [12, 15],
    "layer0.texture": "ayu/assets/arrow-left.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0
  },
  {
    "class": "scroll_tabs_left_button",
    "attributes": ["hover"],
    "layer0.tint": scheme.common.accent.hex()
  },


  {
    "class": "scroll_tabs_right_button",
    "content_margin": [12, 15],
    "layer0.texture": "ayu/assets/arrow-right.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0
  },
  {
    "class": "scroll_tabs_right_button",
    "attributes": ["hover"],
    "layer0.tint": scheme.common.accent.hex()
  },

  {
    "class": "show_tabs_dropdown_button",
    "content_margin": [12, 12],
    "layer0.texture": "ayu/assets/overflow-menu.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0,
    "layer0.inner_margin": [0, 0]
  },
  {
    "class": "show_tabs_dropdown_button",
    "attributes": ["hover"],
    "layer0.tint": scheme.common.accent.hex()
  },



  // QUICK PANEL
  {
    "class": "overlay_control",
    "layer0.texture": "ayu/assets/overlay-shadow.png",
    "layer0.inner_margin": [15, 35, 15, 25],
    "layer0.opacity": 0.6,
    "layer0.tint": scheme.ui.panel.shadow.hex(),

    "layer1.texture": "ayu/assets/overlay-border.png",
    "layer1.inner_margin": [15, 35, 15, 25],
    "layer1.opacity": 1.0,
    "layer1.tint": scheme.ui.line.hex(),

    "layer2.texture": "ayu/assets/overlay-bg.png",
    "layer2.inner_margin": [15, 35, 15, 25],
    "layer2.opacity": 1.0,
    "layer2.tint": scheme.ui.panel.bg.hex(),

    "content_margin": [10, 35, 10, 20]
  },


  {
    "class": "quick_panel",
    "row_padding": [32, 12],
    "layer0.tint": scheme.ui.panel.bg.hex(),
    "layer0.opacity": 1.0
  },
  {
    "class": "quick_panel",
    "parents": [{ "class": "overlay_control" }],
    "row_padding": [24, 8],
    "layer0.tint": scheme.ui.panel.bg.hex(),
    "layer0.opacity": 1.0
  },


  {
    "class": "mini_quick_panel_row",
    "layer0.tint": scheme.ui.panel.bg.hex(),
    "layer0.inner_margin": [2, 2, 2, 2],
    "layer0.opacity": 1.0
  },
  {
    "class": "mini_quick_panel_row",
    "attributes": ["selected"],
    "layer0.tint": scheme.ui.line.hex()
  },


  {
    "class": "quick_panel_row",
    "layer0.texture": "",
    "layer0.tint": scheme.ui.panel.bg.hex(),
    "layer0.inner_margin": 0,
    "layer0.opacity": 1.0
  },
  {
    "class": "quick_panel_row",
    "parents": [{ "class": "overlay_control" }],
    "layer0.tint": scheme.ui.panel.bg.hex(),
    "layer0.opacity": 1.0
  },
  {
    "class": "quick_panel_row",
    "attributes": ["selected"],
    "layer0.tint": scheme.ui.line.hex()
  },


  {
    "class": "quick_panel_label",
    "fg": scheme.ui.fg.hex(),
    "match_fg": scheme.common.accent.hex(),
    "selected_fg": scheme.editor.fg.hex(),
    "selected_match_fg": scheme.common.accent.hex()
  },
  {
    "class": "quick_panel_label",
    "parents": [{ "class": "overlay_control" }],
    "fg": scheme.ui.fg.hex(),
    "match_fg": scheme.common.accent.hex(),
    "selected_fg": scheme.editor.fg.hex(),
    "selected_match_fg": scheme.common.accent.hex()
  },


  {
    "class": "quick_panel_path_label",
    "fg": scheme.ui.fg.fade(0.3).hex(),
    "match_fg": scheme.editor.fg.fade(0.2).hex(),
    "selected_fg": scheme.ui.fg.fade(0.3).hex(),
    "selected_match_fg": scheme.editor.fg.fade(0.2).hex()
  },



  // VIEWS
  {
    "class": "grid_layout_control",
    "border_size": 0,
    "border_color": scheme.ui.line.hex('blend')
  },
  {
    "class": "grid_layout_control",
    "settings": ["ui_separator"],
    "border_size": 1
  },


  {
    "class": "minimap_control",
    "settings": ["always_show_minimap_viewport"],
    "viewport_color": scheme.ui.fg.hex(),
    "viewport_opacity": 0.3
  },
  {
    "class": "minimap_control",
    "settings": ["!always_show_minimap_viewport"],
    "viewport_color": scheme.ui.fg.hex(),
    "viewport_opacity": { "target": 0, "speed": 4.0, "interpolation": "smoothstep" }
  },
  {
    "class": "minimap_control",
    "attributes": ["hover"],
    "settings": ["!always_show_minimap_viewport"],
    "viewport_opacity": { "target": 0.3, "speed": 4.0, "interpolation": "smoothstep" }
  },


  {
    "class": "fold_button_control",
    "layer0.texture": "ayu/assets/unfold.png",
    "layer0.opacity": 1.0,
    "layer0.inner_margin": 0,
    "layer0.tint": scheme.ui.fg.hex(),
    "content_margin": [8, 6, 8, 6]
  },
  {
    "class": "fold_button_control",
    "attributes": ["hover"],
    "layer0.tint": scheme.common.accent.hex(),
  },
  {
    "class": "fold_button_control",
    "attributes": ["expanded"],
    "layer0.texture": "ayu/assets/fold.png"
  },


  {
    "class": "popup_control",
    "layer0.tint": scheme.ui.panel.bg.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [0, 0]
  },


  {
    "class": "auto_complete",
    "row_padding": [12, 6],
    "layer0.tint": scheme.ui.panel.bg.hex(),
    "layer0.opacity": 1.0
  },


  {
    "class": "table_row",
    "layer0.tint": scheme.ui.line.hex(),
    "layer0.opacity": 0.0
  },
  {
    "class": "table_row",
    "attributes": ["selected"],
    "layer0.opacity": 1.0
  },


  {
    "class": "auto_complete_label",
    "fg": scheme.ui.fg.hex(),
    "match_fg": scheme.common.accent.hex(),
    "selected_fg": scheme.editor.fg.hex(),
    "selected_match_fg": scheme.common.accent.hex(),
    "fg_blend": true
  },



  // PANELS
  {
    "class": "panel_control",
    "layer0.tint": scheme.ui.bg.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [0, 5]
  },
  {
    "class": "panel_control",
    "settings": ["ui_separator"],
    "layer0.tint": scheme.ui.bg.darken(0.05).hex(),
    "layer1.texture": "ayu/assets/separator-top.png",
    "layer1.tint": scheme.ui.line.hex(),
    "layer1.inner_margin": [1, 2, 1, 0],
    "layer1.opacity": 1
  },


  {
    "class": "panel_grid_control"
  },


  {
    "class": "panel_close_button",
    "layer0.texture": "ayu/assets/close.png",
    "layer0.opacity": 1.0,
    "layer0.tint": scheme.ui.fg.hex(),
    "content_margin": [0, 0] // 8,8 to show
  },
  {
    "class": "panel_close_button",
    "attributes": ["hover"],
    "layer0.tint": scheme.common.accent.hex()
  },



  // STATUS BAR
  {
    "class": "status_bar",
    "layer0.texture": "",
    "layer0.tint": scheme.ui.bg.hex(),
    "layer0.opacity": 1,
    "layer1.texture": "ayu/assets/separator-top.png",
    "layer1.tint": scheme.ui.line.hex(),
    "layer1.inner_margin": [1, 2, 1, 0],
    "content_margin": [16, 2]
  },
  {
    "class": "status_bar",
    "settings": ["ui_separator"],
    "layer0.tint": scheme.ui.bg.darken(0.05).hex(),
    "layer1.opacity": 1
  },


  {
    "class": "panel_button_control",
    "layer0.texture": "ayu/assets/switch-panel.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0
  },
  {
    "class": "panel_button_control",
    "attributes": ["hover"],
    "layer0.tint": scheme.common.accent.hex()
  },


  {
    "class": "status_container",
    "content_margin": [0, 5]
  },


  {
    "class": "status_button",
    "min_size": [100, 0]
  },


  {
    "class": "vcs_branch_icon",
    "layer0.tint": scheme.ui.fg.alpha(0.7).hex()
  },


  {
    "class": "vcs_changes_annotation",
    "border_color": scheme.ui.fg.alpha(0.7).hex()
  },



  // DIALOGS
  {
    "class": "dialog",
    "layer0.tint": scheme.ui.bg.hex(),
    "layer0.opacity": 1.0
  },


  {
    "class": "progress_bar_control",
    "layer0.tint": scheme.ui.bg.hex(),
    "layer0.opacity": 1.0
  },


  {
    "class": "progress_gauge_control",
    "layer0.tint": scheme.common.accent.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [0, 6]
  },



  // SCROLL BARS
  {
    "class": "scroll_area_control",
    "settings": ["overlay_scroll_bars"],
    "overlay": true
  },
  {
    "class": "scroll_area_control",
    "settings": ["!overlay_scroll_bars"],
    "overlay": false
  },


  {
    "class": "scroll_bar_control",
    "layer0.tint": scheme.ui.bg.hex(),
    "layer0.opacity": 1.0,

    "layer1.texture": "ayu/assets/scrollbar-vertical-wide.png",
    "layer1.tint": scheme.ui.fg.hex(),
    "layer1.opacity": 0.1,
    "layer1.inner_margin": [0, 10]
  },
  {
    "class": "scroll_bar_control",
    "parents": [{ "class": "overlay_control" }],
    "layer0.tint": scheme.ui.panel.bg.hex()
  },
  {
    "class": "scroll_bar_control",
    "attributes": ["horizontal"],
    "layer1.texture": "ayu/assets/scrollbar-horizontal-wide.png",
    "layer1.inner_margin": [10, 0]
  },
  {
    "class": "scroll_bar_control",
    "settings": ["overlay_scroll_bars"],
    "layer0.opacity": 0,
    "layer1.texture": "ayu/assets/scrollbar-vertical.png",
    "layer1.inner_margin": [4, 6, 6, 6]
  },
  {
    "class": "scroll_bar_control",
    "settings": ["overlay_scroll_bars", "ui_wide_scrollbars"],
    "layer0.texture": "ayu/assets/scrollbar-vertical-wide.png"
  },
  {
    "class": "scroll_bar_control",
    "settings": ["overlay_scroll_bars"],
    "attributes": ["horizontal"],
    "layer0.opacity": 0,
    "layer1.texture": "ayu/assets/scrollbar-horizontal.png",
    "layer1.inner_margin": [6, 4, 6, 6]
  },
  {
    "class": "scroll_bar_control",
    "attributes": ["horizontal"],
    "settings": ["overlay_scroll_bars", "ui_wide_scrollbars"],
    "layer0.texture": "ayu/assets/scrollbar-horizontal-wide.png"
  },


  {
    "class": "scroll_track_control",
    "layer0.tint": scheme.ui.bg.hex(),
    "layer0.opacity": 1.0
  },


  {
    "class": "scroll_corner_control",
    "layer0.tint": scheme.ui.bg.hex(),
    "layer0.opacity": 1.0
  },


  {
    "class": "puck_control",
    "layer0.texture": "ayu/assets/scrollbar-vertical-wide.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 0.3,
    "layer0.inner_margin": [0, 10],
    "content_margin": [6, 12]
  },
  {
    "class": "puck_control",
    "attributes": ["horizontal"],
    "layer0.texture": "ayu/assets/scrollbar-horizontal-wide.png",
    "layer0.inner_margin": [10, 0],
    "content_margin": [12, 6]
  },
  {
    "class": "puck_control",
    "settings": ["overlay_scroll_bars"],
    "layer0.texture": "ayu/assets/scrollbar-vertical.png",
    "layer0.inner_margin": [4, 6, 6, 6],
    "content_margin": [5, 20]
  },
  {
    "class": "puck_control",
    "settings": ["overlay_scroll_bars", "ui_wide_scrollbars"],
    "layer0.texture": "ayu/assets/scrollbar-vertical-wide.png"
  },
  {
    "class": "puck_control",
    "settings": ["overlay_scroll_bars"],
    "attributes": ["horizontal"],
    "layer0.texture": "ayu/assets/scrollbar-horizontal.png",
    "layer0.inner_margin": [6, 4, 6, 6],
    "content_margin": [20, 5]
  },
  {
    "class": "puck_control",
    "attributes": ["horizontal"],
    "settings": ["overlay_scroll_bars", "ui_wide_scrollbars"],
    "layer0.texture": "ayu/assets/scrollbar-horizontal-wide.png"
  },



  // INPUTS
  {
    "class": "text_line_control",
    "layer0.texture": "ayu/assets/input-bg.png",
    "layer0.opacity": 1,
    "layer0.inner_margin": [10, 8],
    "layer0.tint": scheme.ui.panel.bg.hex(),

    "layer1.texture": "ayu/assets/input-border.png",
    "layer1.opacity": 1,
    "layer1.inner_margin": [10, 8],
    "layer1.tint": scheme.ui.line.hex(),
    "content_margin": [10, 7, 10, 5]
  },
  // Textline input inside overlay panels
  {
    "class": "text_line_control",
    "parents": [{ "class": "overlay_control" }],
    "layer0.texture": "",
    "layer0.opacity": 0,
    "layer1.texture": "ayu/assets/input-search.png",
    "layer1.opacity": 1,
    "layer1.tint": scheme.ui.fg.hex(),
    "layer1.inner_margin": [60, 0, 0, 0],
    "content_margin": [50, 7, 10, 4]
  },


  {
    "class": "dropdown_button_control",
    "content_margin": [12, 12],
    "layer0.texture": "ayu/assets/overflow-menu.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0
  },
  {
    "class": "dropdown_button_control",
    "attributes": ["hover"],
    "layer0.tint": scheme.common.accent.hex()
  },



  // BUTTONS
  {
    "class": "button_control",
    "content_margin": [15, 9, 15, 10],
    "min_size": [60, 0],
    "layer0.tint": scheme.common.accent.alpha(0.1).hex(),
    "layer0.texture": "ayu/assets/input-bg.png",
    "layer0.inner_margin": [10, 8],
    "layer0.opacity": 0
  },
  {
    "class": "button_control",
    "attributes": ["hover"],
    "layer0.opacity": 1
  },


  {
    "class": "icon_button_control",
    "layer0.tint": [0, 0, 0],
    "layer0.opacity": 0,
    "layer2.tint": scheme.editor.fg.hex(),
    "layer2.opacity": { "target": 0.0, "speed": 10.0, "interpolation": "smoothstep" },
    "content_margin": [10, 5]
  },


  {
    "class": "icon_regex",
    "layer0.texture": "ayu/assets/regex.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [12, 12]
  },
  {
    "class": "icon_regex",
    "parents": [{ "class": "icon_button_control", "attributes": ["selected"] }],
    "layer0.tint": scheme.common.accent.hex()
  },


  {
    "class": "icon_case",
    "layer0.texture": "ayu/assets/matchcase.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [12, 12]
  },
  {
    "class": "icon_case",
    "parents": [{ "class": "icon_button_control", "attributes": ["selected"] }],
    "layer0.tint": scheme.common.accent.hex()
  },


  {
    "class": "icon_whole_word",
    "layer0.texture": "ayu/assets/word.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [12, 12]
  },
  {
    "class": "icon_whole_word",
    "parents": [{ "class": "icon_button_control", "attributes": ["selected"] }],
    "layer0.tint": scheme.common.accent.hex()
  },


  {
    "class": "icon_wrap",
    "layer0.texture": "ayu/assets/wrap.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [12, 12]
  },
  {
    "class": "icon_wrap",
    "parents": [{ "class": "icon_button_control", "attributes": ["selected"] }],
    "layer0.tint": scheme.common.accent.hex()
  },


  {
    "class": "icon_in_selection",
    "layer0.texture": "ayu/assets/inselection.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [12, 12]
  },
  {
    "class": "icon_in_selection",
    "parents": [{ "class": "icon_button_control", "attributes": ["selected"] }],
    "layer0.tint": scheme.common.accent.hex()
  },


  {
    "class": "icon_highlight",
    "layer0.texture": "ayu/assets/highlight.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [12, 12]
  },
  {
    "class": "icon_highlight",
    "parents": [{ "class": "icon_button_control", "attributes": ["selected"] }],
    "layer0.tint": scheme.common.accent.hex()
  },


  {
    "class": "icon_preserve_case",
    "layer0.texture": "ayu/assets/replace-preserve-case.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [12, 12]
  },
  {
    "class": "icon_preserve_case",
    "parents": [{ "class": "icon_button_control", "attributes": ["selected"] }],
    "layer0.tint": scheme.common.accent.hex()
  },


  {
    "class": "icon_context",
    "layer0.texture": "ayu/assets/context.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [12, 12]
  },
  {
    "class": "icon_context",
    "parents": [{ "class": "icon_button_control", "attributes": ["selected"] }],
    "layer0.tint": scheme.common.accent.hex()
  },


  {
    "class": "icon_use_buffer",
    "layer0.texture": "ayu/assets/buffer.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [12, 12]
  },
  {
    "class": "icon_use_buffer",
    "parents": [{ "class": "icon_button_control", "attributes": ["selected"] }],
    "layer0.tint": scheme.common.accent.hex()
  },

  {
    "class": "icon_use_gitignore",
    "layer0.texture": "ayu/assets/gitignore.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [12, 12]
  },
  {
    "class": "icon_use_gitignore",
    "parents": [{ "class": "icon_button_control", "attributes": ["selected"] }],
    "layer0.tint": scheme.common.accent.hex()
  },

  {
    "class": "sidebar_button_control",
    "layer0.texture": "ayu/assets/sidebar.png",
    "layer0.tint": scheme.ui.fg.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [12, 12]
  },
  {
    "class": "sidebar_button_control",
    "attributes": ["hover"],
    "layer0.tint": scheme.common.accent.hex(),
  },


  // LABELS
  {
    "class": "label_control",
    "color": scheme.ui.fg.hex(),
    "shadow_color": [0, 0, 0, 0],
    "shadow_offset": [0, 0],
    "font.bold": false,
    "font.size": 12
  },
  {
    "class": "label_control",
    "parents": [{ "class": "status_bar" }],
    "color": scheme.ui.fg.hex(),
    "font.bold": false
  },
  {
    "class": "label_control",
    "parents": [{ "class": "button_control" }],
    "color": scheme.ui.fg.hex()
  },
  {
    "class": "label_control",
    "parents": [{ "class": "button_control", "attributes": ["hover"] }],
    "color": scheme.common.accent.hex()
  },


  {
    "class": "title_label_control",
    "color": scheme.common.accent.hex()
  },



  // TOOL TIPS
  {
    "class": "tool_tip_control",
    "layer0.tint": scheme.ui.bg.hex(),
    "layer0.inner_margin": [0, 0],
    "layer0.opacity": 1.0,
    "content_margin": [10, 6]
  },


  {
    "class": "tool_tip_label_control",
    "color": scheme.ui.fg.hex(),
    "font.size": 13
  },
]
