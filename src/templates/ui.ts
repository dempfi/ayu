import { Scheme } from 'ayu'

export default (scheme: Scheme, kind: string) => [
  // WINDOWS
  {
    "class": "title_bar",
    "bg": scheme.common.bg.hex(),
    "fg": scheme.common.fg.hex()
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
    "bg": scheme.common.bg.darken(0.05).hex()
  },



  // SIDEBAR
  {
    "class": "sidebar_container",
    "content_margin": [0, 6, 0, 0],
    "layer0.opacity": 1,
    "layer0.tint": scheme.common.bg.hex()
  },
  {
    "class": "sidebar_container",
    "settings": ["ui_separator"],
    "layer0.tint": scheme.common.bg.darken(0.05).hex(),
    "layer1.texture": "ayu/assets/separator-right.png",
    "layer1.inner_margin": [0, 1, 2, 1],
    "layer1.opacity": 1,
    "layer1.tint": scheme.ui.line.hex()
  },


  {
    "class": "sidebar_tree",
    "indent_top_level": false,
    "row_padding": [20, 6],
    "dark_content": false,
    "spacer_rows": true,
    "indent_offset": 2,
    "indent": 10
  },


  {
    "class": "sidebar_heading",
    "color": scheme.common.ui.fade(0.4).hex(),
    "font.bold": true,
    "font.size": 11,
  },


  {
    "class": "tree_row",
    "layer0.texture": "ayu/assets/tree-highlight.png",
    "layer0.tint": scheme.ui.line.hex(),
    "layer0.inner_margin": [8, 4, 8, 4],
    "layer0.opacity": 0
  },
  {
    "class": "tree_row",
    "layer0.texture": "ayu/assets/tree-highlight-separators.png",
    "settings": ["ui_separator"]
  },
  {
    "class": "tree_row",
    "attributes": ["selectable", "hover"],
    "layer0.opacity": 0.5
  },
  {
    "class": "tree_row",
    "attributes": ["selectable", "selected"],
    "layer0.opacity": 1
  },
  {
    "class": "tree_row",
    "attributes": ["selectable", "selected", "hover"],
    "layer0.opacity": 1
  },


  {
    "class": "sidebar_label",
    "fg": scheme.common.ui.hex(),
    "font.size": 12
  },
  {
    "class": "sidebar_label",
    "parents": [{ "class": "tree_row", "attributes": ["hover"] }],
    "fg": scheme.common.fg.hex()
  },
  {
    "class": "sidebar_label",
    "parents": [{ "class": "tree_row", "attributes": ["selected"] }],
    "fg": scheme.common.fg.hex()
  },
  {
    "class": "sidebar_label",
    "parents": [{ "class": "tree_row", "attributes": ["expandable"] }],
    "fg": scheme.common.ui.hex(),
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
    "fg": scheme.common.fg.hex()
  },
  {
    "class": "sidebar_label",
    "parents": [{ "class": "tree_row", "attributes": ["expanded"] }],
    "fg": scheme.common.fg.hex()
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
  //  "color": scheme.common.fg.hex()
  // },
  {
    "class": "sidebar_label",
    "parents": [{ "class": "file_system_entry", "attributes": ["ignored"] }],
    "fg": scheme.common.ui.alpha(.5).hex()
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
    "layer0.tint": scheme.common.ui.hex()
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
    "layer0.tint": scheme.common.ui.hex(),
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
    "layer0.tint": scheme.common.bg.hex(),
    "layer0.opacity": 0,

    "layer1.texture": "ayu/assets/folder.png",
    "layer1.tint": scheme.common.ui.alpha(.75).hex(),
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
    "layer0.tint": scheme.common.ui.hex(),
    "layer0.opacity": 1.0,

    "layer1.texture": "ayu/assets/folder-symlink.png",
    "layer1.tint": scheme.common.ui.hex(),
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
    "layer0.tint": scheme.common.ui.alpha(.3).hex(),
  },
  {
    "class": "vcs_status_badge",
    "attributes": ["added"],
    "layer0.tint": scheme.vcs.added.hex(),
  },
  {
    "class": "vcs_status_badge",
    "attributes": ["modified"],
    "layer0.tint": scheme.vcs.modified.hex(),
  },
  {
    "class": "vcs_status_badge",
    "attributes": ["deleted"],
    "layer0.tint": scheme.vcs.removed.hex(),
  },



  // TABS
  {
    "class": "tabset_control",
    "mouse_wheel_switch": false,
    "tab_min_width": 50,
    "tab_overlap": 0,
    "tab_height": 36,
    "tab_width": 50,

    "layer0.tint": scheme.common.bg.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [10, 0]
  },
  {
    "class": "tabset_control",
    "settings": ["!enable_tab_scrolling"],
    "mouse_wheel_switch": true
  },
  {
    "class": "tabset_control",
    "settings": ["ui_separator"],
    "content_margin": [0, 0, 0, 0],
    "layer0.tint": scheme.common.bg.darken(0.05).hex(),
    "layer1.opacity": 1,
    "layer1.texture": "ayu/assets/separator-bottom.png",
    "layer1.tint": scheme.ui.line.hex(),
    "layer1.inner_margin": [1, 0, 1, 2]
  },
  {
    "class": "tabset_control",
    "platforms": ["osx"],
    "settings": ["ui_separator", "!ui_native_titlebar"],
    "layer2.opacity": 1,
    "layer2.texture": "ayu/assets/separator-top.png",
    "layer2.tint": scheme.ui.line.hex(),
    "layer2.inner_margin": [1, 2, 1, 0]
  },


  {
    "class": "tab_control",
    // Background
    "layer0.tint": scheme.common.bg.hex(),
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

    "layer0.tint": scheme.common.bg.darken(0.05).hex(),

    "layer1.opacity": 1.0,

    "layer2.opacity": 1.0,

    "layer3.opacity": 1.0
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
    "layer0.tint": scheme.common.bg.hex(),
    "layer1.tint": scheme.common.accent.hex(),
    "layer3.opacity": 0.0
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
    "layer0.tint": scheme.common.bg.hex(),
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
    "layer0.tint": scheme.common.bg.hex()
  },


  {
    "class": "tab_label",
    "fg": scheme.common.ui.hex(),
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
    "fg": scheme.common.fg.hex()
  },
  {
    "class": "tab_label",
    "parents": [{ "class": "tab_control", "attributes": ["hover"] }],
    "fg": scheme.common.fg.hex()
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
    "layer0.tint": scheme.common.ui.hex(),
    "layer0.opacity": 1.0,

    // Dirty Icon
    "layer1.texture": "ayu/assets/dirty.png",
    "layer1.tint": scheme.common.ui.hex(),
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
    "layer0.tint": scheme.common.ui.hex(),
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
    "layer0.tint": scheme.common.ui.hex(),
    "layer0.opacity": 1.0
  },
  {
    "class": "scroll_tabs_right_button",
    "attributes": ["hover"],
    "layer0.tint": scheme.common.accent.hex()
  },
  {
    "class": "scroll_tabs_right_button",
    "settings": ["ui_separator"],
    "layer2.texture": "ayu/assets/separator-right.png",
    "layer2.tint": scheme.ui.line.hex(),
    "layer2.opacity": 1,
    "layer2.inner_margin": [0, 1, 2, 1]
  },


  {
    "class": "show_tabs_dropdown_button",
    "content_margin": [12, 12],
    "layer0.texture": "ayu/assets/overflow-menu.png",
    "layer0.tint": scheme.common.ui.hex(),
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
    "layer1.tint": scheme.ui.panel.border.hex(),

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
    "fg": scheme.common.ui.hex(),
    "match_fg": scheme.common.accent.hex(),
    "selected_fg": scheme.common.fg.hex(),
    "selected_match_fg": scheme.common.accent.hex()
  },
  {
    "class": "quick_panel_label",
    "parents": [{ "class": "overlay_control" }],
    "fg": scheme.common.ui.hex(),
    "match_fg": scheme.common.accent.hex(),
    "selected_fg": scheme.common.fg.hex(),
    "selected_match_fg": scheme.common.accent.hex()
  },


  {
    "class": "quick_panel_path_label",
    "fg": scheme.common.ui.fade(0.3).hex(),
    "match_fg": scheme.common.fg.fade(0.2).hex(),
    "selected_fg": scheme.common.ui.fade(0.3).hex(),
    "selected_match_fg": scheme.common.fg.fade(0.2).hex()
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
    "viewport_color": scheme.common.ui.hex(),
    "viewport_opacity": 0.3
  },
  {
    "class": "minimap_control",
    "settings": ["!always_show_minimap_viewport"],
    "viewport_color": scheme.common.ui.hex(),
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
    "layer0.tint": scheme.common.ui.hex(),
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
    "fg": scheme.common.ui.hex(),
    "match_fg": scheme.common.accent.hex(),
    "selected_fg": scheme.common.fg.hex(),
    "selected_match_fg": scheme.common.accent.hex(),
    "fg_blend": true
  },



  // PANELS
  {
    "class": "panel_control",
    "layer0.tint": scheme.common.bg.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [0, 5]
  },
  {
    "class": "panel_control",
    "settings": ["ui_separator"],
    "layer0.tint": scheme.common.bg.darken(0.05).hex(),
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
    "layer0.tint": scheme.common.ui.hex(),
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
    "layer0.tint": scheme.common.bg.hex(),
    "layer0.opacity": 1,
    "layer1.texture": "ayu/assets/separator-top.png",
    "layer1.tint": scheme.ui.line.hex(),
    "layer1.inner_margin": [1, 2, 1, 0],
    "content_margin": [16, 2]
  },
  {
    "class": "status_bar",
    "settings": ["ui_separator"],
    "layer0.tint": scheme.common.bg.darken(0.05).hex(),
    "layer1.opacity": 1
  },


  {
    "class": "panel_button_control",
    "layer0.texture": "ayu/assets/switch-panel.png",
    "layer0.tint": scheme.common.ui.hex(),
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
    "layer0.tint": scheme.common.ui.alpha(0.7).hex()
  },


  {
    "class": "vcs_changes_annotation",
    "border_color": scheme.common.ui.alpha(0.7).hex()
  },



  // DIALOGS
  {
    "class": "dialog",
    "layer0.tint": scheme.common.bg.hex(),
    "layer0.opacity": 1.0
  },


  {
    "class": "progress_bar_control",
    "layer0.tint": scheme.common.bg.hex(),
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
    "layer0.tint": scheme.common.bg.hex(),
    "layer0.opacity": 1.0,

    "layer1.texture": "ayu/assets/scrollbar-vertical-wide.png",
    "layer1.tint": scheme.common.ui.hex(),
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
    "layer0.tint": scheme.common.bg.hex(),
    "layer0.opacity": 1.0
  },


  {
    "class": "scroll_corner_control",
    "layer0.tint": scheme.common.bg.hex(),
    "layer0.opacity": 1.0
  },


  {
    "class": "puck_control",
    "layer0.texture": "ayu/assets/scrollbar-vertical-wide.png",
    "layer0.tint": scheme.common.ui.hex(),
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
    "layer1.tint": scheme.common.ui.hex(),
    "layer1.inner_margin": [60, 0, 0, 0],
    "content_margin": [50, 7, 10, 4]
  },


  {
    "class": "dropdown_button_control",
    "content_margin": [12, 12],
    "layer0.texture": "ayu/assets/overflow-menu.png",
    "layer0.tint": scheme.common.ui.hex(),
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
    "layer2.tint": scheme.common.fg.hex(),
    "layer2.opacity": { "target": 0.0, "speed": 10.0, "interpolation": "smoothstep" },
    "content_margin": [10, 5]
  },


  {
    "class": "icon_regex",
    "layer0.texture": "ayu/assets/regex.png",
    "layer0.tint": scheme.common.ui.hex(),
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
    "layer0.tint": scheme.common.ui.hex(),
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
    "layer0.tint": scheme.common.ui.hex(),
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
    "layer0.tint": scheme.common.ui.hex(),
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
    "layer0.tint": scheme.common.ui.hex(),
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
    "layer0.tint": scheme.common.ui.hex(),
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
    "layer0.tint": scheme.common.ui.hex(),
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
    "layer0.tint": scheme.common.ui.hex(),
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
    "layer0.tint": scheme.common.ui.hex(),
    "layer0.opacity": 1.0,
    "content_margin": [12, 12]
  },
  {
    "class": "icon_use_buffer",
    "parents": [{ "class": "icon_button_control", "attributes": ["selected"] }],
    "layer0.tint": scheme.common.accent.hex()
  },



  // LABELS
  {
    "class": "label_control",
    "color": scheme.common.ui.hex(),
    "shadow_color": [0, 0, 0, 0],
    "shadow_offset": [0, 0],
    "font.bold": false,
    "font.size": 12
  },
  {
    "class": "label_control",
    "parents": [{ "class": "status_bar" }],
    "color": scheme.common.ui.hex(),
    "font.bold": false
  },
  {
    "class": "label_control",
    "parents": [{ "class": "button_control" }],
    "color": scheme.common.ui.hex()
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
    "layer0.tint": scheme.common.bg.hex(),
    "layer0.inner_margin": [0, 0],
    "layer0.opacity": 1.0,
    "content_margin": [10, 6]
  },


  {
    "class": "tool_tip_label_control",
    "color": scheme.common.ui.hex(),
    "font.size": 13
  },
]
