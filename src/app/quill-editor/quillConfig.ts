
export const TOOLBAR_OPTIONS = {
  FONT_STYLES: ['bold', 'italic', 'underline', 'strike'],
  FONT_FORMATS: ['blockquote', 'code-block'],

  HTML_TEXT_FORMATS: [{ 'header': 1 }, { 'header': 2 }],
  LIST_FORMATS: [{ 'list': 'ordered' }, { 'list': 'bullet' }],

  SUPER_SUB_SCRIPT: [{ 'script': 'sub' }, { 'script': 'super' }],
  TEXT_INDENT: [{ 'indent': '-1' }, { 'indent': '+1' }],
  TEXT_DIRECTION: [{ 'direction': 'rtl' }],

  FONT_SIZE: [{ 'size': ['small', false, 'large', 'huge'] }],
  HTML_TEXT_FORMAT_DROPDOWN: [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  COLORS: [{ 'color': [] }, { 'background': [] }],
  FONT_FAMILY: [{ 'font': [] }],
  TEXT_ALIGN: [{ 'align': [] }],

  CLEAR: ['clean'],
  HYPERLINK: ['link'],
  IMAGE: ['image'],
  VIDEO: ['video'],
};

export enum TOOLBAR_BUTTONS {
  BOLD = 'ql-bold',
  ITALIC = 'ql-italic',
  UNDERLINE = 'ql-underline',
  STRIKE = 'ql-strike'

}

export const DEFAULT_QUILL_CONFIG = {
  toolbar: [
    TOOLBAR_OPTIONS.FONT_STYLES,
    TOOLBAR_OPTIONS.LIST_FORMATS,
    TOOLBAR_OPTIONS.FONT_SIZE,
    TOOLBAR_OPTIONS.HTML_TEXT_FORMAT_DROPDOWN,
    TOOLBAR_OPTIONS.COLORS,
    TOOLBAR_OPTIONS.TEXT_ALIGN,
    TOOLBAR_OPTIONS.HYPERLINK,
  ],
};

export const DEFAULT_QUILL_TOOLBAR = [
  TOOLBAR_BUTTONS.BOLD,
  TOOLBAR_BUTTONS.ITALIC,
  TOOLBAR_BUTTONS.UNDERLINE
];

export const CUSTOM_VARIABLE_BUTTONS = [
  { type: 'Jon Snow', label: 'Jon' },
  { type: 'Daenerys Targaryen', label: 'Dany' },
  { type: 'Cersei Lannister', label: 'Cersei' },
]
