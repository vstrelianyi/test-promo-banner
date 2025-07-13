import { dirname, } from 'path';
import { fileURLToPath, } from 'url';

import { FlatCompat, } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';

const __filename = fileURLToPath( import.meta.url, );
const __dirname = dirname( __filename, );

const compat = new FlatCompat( {
  baseDirectory: __dirname,
}, );

const eslintConfig = [
  {
    plugins: {
      '@stylistic': stylistic,
      'import': importPlugin,
    },
    // custom rules
    rules: {
      // 'local/single-space-classname': 'error',
    },
  },
  {
    ignores: [
      // '**/*.*',
      // 'eslint.config.mjs',
    ],
  },
  ...compat.config( {
    extends: [ 'next/core-web-vitals', 'next/typescript', ],
    rules: {
      // Import sorting rules
      'import/order': [ 'error', {
        'groups': [ 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type', ],
        'pathGroups': [
          {
            'pattern': '@/interfaces{,/**}',
            'group': 'type',
            'position': 'after',
          },
          {
            'pattern': '@/types{,/**}',
            'group': 'type',
            'position': 'after',
          },
        ],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true,
        },
      }, ],
      // jsx style formatting
      'padding-line-between-statements': [
        'error',
        {
          'blankLine': 'always',
          'prev': '*',
          'next': 'function',
        },
        {
          'blankLine': 'always',
          'prev': '*',
          'next': 'return',
        },
      ],
      'space-before-blocks': [ 'error', 'always', ],
      'keyword-spacing': [ 'error', { 'after': true, }, ],

      'space-infix-ops': [ 'error', { 'int32Hint': false, }, ],
      'arrow-spacing': [ 'error', {
        'before': true,
        'after': true,
      }, ],
      '@stylistic/semi': 'error',
      'semi-spacing': [ 'error', {
        'before': false,
        'after': false,
      }, ],
      'template-curly-spacing': [ 'error', 'always', ],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/arrow-parens': [ 'error', 'always', ],
      '@stylistic/type-annotation-spacing': [
        'error',
        {
          'before': true,
          'after': true,
        },
      ],
      '@stylistic/indent': [ 'error', 2, ],
      '@stylistic/quotes': [ 'error', 'single', ],
      '@stylistic/jsx-quotes': [ 'error', 'prefer-double', ],
      '@stylistic/newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 2, }, ],
      '@stylistic/jsx-closing-bracket-location': [ 2, {
        'nonEmpty': 'tag-aligned',
        'selfClosing': 'tag-aligned',
      }, ],

      // 'custom/object-max-pairs-per-line': 'error',
      '@stylistic/max-len': [ 'error', {
        code: 220,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreTemplateLiterals: false,
      }, ],
      '@stylistic/jsx-curly-spacing': [
        'error',
        {
          when: 'always',
          children: true,
        },
      ],
      'react/jsx-first-prop-new-line': [ 1, 'multiline', ],
      '@stylistic/jsx-max-props-per-line': [ 'error', {
        'maximum': 1,
        'when': 'always',
      }, ],
      'react/jsx-wrap-multilines': [ 'error', {
        'declaration': 'parens',
        'assignment': 'parens',
        'return': 'parens-new-line',
        'arrow': 'parens',
        'condition': 'parens',
        'logical': 'parens',
        'prop': 'parens',
      }, ],

      // vars
      '@typescript-eslint/no-unused-vars': [ 'off', ],
      '@typescript-eslint/no-explicit-any': 'off',
      'no-unused-vars': 'off',
      // '@typescript-eslint/no-unused-vars': ['error'],
      // 'no-unused-vars': 'error',

      // arrays
      '@stylistic/array-bracket-spacing': [ 'error', 'always', ],
      '@stylistic/no-multi-spaces': [ 'error', ],
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/jsx-props-no-multi-spaces': [ 'error', ],
      '@stylistic/no-trailing-spaces': [ 'error', { 'skipBlankLines': false, }, ],
      '@stylistic/comma-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],

      // objects
      '@stylistic/object-curly-spacing': [ 'error', 'always', ],
      '@stylistic/object-curly-newline': [ 'error', {
        multiline: true, // Allow multiline objects
        consistent: true, // Ensure consistent behavior
      }, ],
      '@stylistic/object-property-newline': [ 'error', {
        allowAllPropertiesOnSameLine: false, // Each property on its own line
      }, ],
      '@stylistic/no-multiple-empty-lines': [ 'error', {
        max: 1, // Max 1 blank line anywhere
        maxEOF: 0, // No blank lines at end of file
      }, ],
      '@stylistic/padded-blocks': [ 'error', 'never', ],
      '@stylistic/comma-dangle': [
        'error',
        {
          arrays: 'always',
          objects: 'always',
          imports: 'always',
          exports: 'always',
          functions: 'always',
        },
      ],

      // func
      '@stylistic/space-in-parens': [ 2, 'always', ],
    },
  }, ),
];

export default eslintConfig;
