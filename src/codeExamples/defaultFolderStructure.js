import { js as Beautify } from 'js-beautify';

const code = {
  snippet : `
  ── APP
      ├── dist
      ├── src
      │   └── index.tsx
      ├── package.json
      ├── index.html
      ├── babel.config.js
      └── webpack.config.js
  `,
  beautyCode: () => Beautify(code.snippet, { indent_size: 2, space_in_empty_paren: true })
};

export default code;
