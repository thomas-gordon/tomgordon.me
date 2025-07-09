import js from '@eslint/js'
import { globalIgnores } from 'eslint/config'
import prettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import react from 'eslint-plugin-react'
export default tseslint.config(
  js.configs.recommended,
  prettier,

  tseslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  globalIgnores([
    '**/node_modules',
    '**/dist',
    '.tanstack/**/*',
    '.nitro/**/*',
    '.output/**/*',
    '.yarn/**/*',
    'node_modules',
    '.netlify/**/*',
    './eslint.config.ts',
    './vite.config.ts',
  ]),
  {
    plugins: {
      react,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },

    files: ['./src/**/*.{js,ts,jsx,tsx}'],
  },
)
