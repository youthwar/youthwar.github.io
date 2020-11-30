import { js as Beautify } from 'js-beautify';

const code = {
  snippet : `
  yarn add react react-loadable \\
  webpack webpack-dev-server \\
  webpack-cli clean-webpack-plugin \\
  webpack-bundle-analyzer html-webpack-plugin \\
  html-webpack-harddisk-plugin @babel/core \\
  @babel/plugin-proposal-class-properties \\ 
  @babel/plugin-proposal-export-default-from \\
  @babel/plugin-proposal-export-namespace-from  \\
  @babel/plugin-proposal-object-rest-spread \\
  @babel/plugin-syntax-dynamic-import \\
  @babel/preset-env @babel/preset-react \\
  @babel/preset-typescript \\
  babel-loader babel-plugin-lodash \\
  babel-plugin-transform-react-remove-prop-types\\ 
  core-js \\
  `,
  beautyCode: () => Beautify(code.snippet, { indent_size: 2, space_in_empty_paren: true })
};

export default code;