module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ['standard', 'prettier', 'prettier/standard', 'prettier/react'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: false,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
	},
};
