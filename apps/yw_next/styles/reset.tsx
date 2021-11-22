const reset = {
  "html:": { lineHeight: 1.15, WebkitTextSizeAdjust: "100%" },
  body: { margin: "0" },
  main: { display: "block" },
  h1: { fontSize: "2em", margin: "0.67em 0" },
  hr: { boxSizing: "content-box", height: "0", overflow: "visible" },
  pre: { fontFamily: "monospace, monospace", fontSize: "1em" },
  a: { backgroundColor: "transparent" },
  "abbr[title]": {
    borderBottom: "none",
    textDecoration: ["underline", "underline dotted"]
  },
  "b,\nstrong": { fontWeight: "bolder" },
  "code,\nkbd,\nsamp": { fontFamily: "monospace, monospace", fontSize: "1em" },
  small: { fontSize: "80%" },
  "sub,\nsup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline"
  },
  sub: { bottom: "-0.25em" },
  sup: { top: "-0.5em" },
  img: { borderStyle: "none" },
  "button,\ninput,\noptgroup,\nselect,\ntextarea": {
    fontFamily: "inherit",
    fontSize: "100%",
    lineHeight: 1.15,
    margin: "0"
  },
  "button,\ninput": { overflow: "visible" },
  "button,\nselect": { textTransform: "none" },
  "button,\n[type='button'],\n[type='reset'],\n[type='submit']": {
    WebkitAppearance: "button"
  },
  "button::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner": {
    borderStyle: "none",
    padding: "0"
  },
  "button:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring": {
    outline: "1px dotted ButtonText"
  },
  fieldset: { padding: "0.35em 0.75em 0.625em" },
  legend: {
    boxSizing: "border-box",
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    padding: "0",
    whiteSpace: "normal"
  },
  progress: { verticalAlign: "baseline" },
  textarea: { overflow: "auto" },
  "[type='checkbox'],\n[type='radio']": {
    boxSizing: "border-box",
    padding: "0"
  },
  "[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button": {
    height: "auto"
  },
  "[type='search']": { WebkitAppearance: "textfield", outlineOffset: "-2px" },
  "[type='search']::-webkit-search-decoration": { WebkitAppearance: "none" },
  "::-webkit-file-upload-button": {
    WebkitAppearance: "button",
    font: "inherit"
  },
  details: { display: "block" },
  summary: { display: "list-item" },
  template: { display: "none" },
  "[hidden]": { display: "none" }
}

export default reset;
