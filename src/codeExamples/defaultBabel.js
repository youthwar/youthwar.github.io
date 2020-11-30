import { js as Beautify } from 'js-beautify';

const code = {
  snippet : `
  module.exports = api => ({
    env: {
      production: {
        plugins: [
          [
            'transform-react-remove-prop-types',
            {
              removeImport: true,
            },
          ],
        ],
      },
    },
    plugins: [
      'lodash',
      'react-loadable/babel',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-export-namespace-from',
    ],
    presets: [
      '@babel/preset-react',
      '@babel/preset-typescript',
      [
        '@babel/preset-env',
        {
          corejs: 3,
          modules: api.env('test') ? undefined : false,
          targets: {
            browsers: ['> 4%', 'ie 11'],
            node: 'current',
          },
          useBuiltIns: 'usage',
        },
      ],
      ['@emotion/babel-preset-css-prop', { autoLabel: true }],
    ],
  });
  `,
  beautyCode: () => Beautify(code.snippet, { indent_size: 2, space_in_empty_paren: true })
};

export default code;