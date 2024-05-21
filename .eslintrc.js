module.exports = {
	root: true,
	env: {
		node: true,
		browser: true
	},
	plugins: [
		'vue'
	],
	'extends': [
		'plugin:vue/essential',
		'eslint:recommended'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		/**
		 * * Lint Docs
		 * ~ eslint: https://eslint.org/docs/rules/
		 * ~ vue-eslint: https://eslint.vuejs.org/rules/
		 *
		 */
		// # OFF
		'arrow-parens': 'off',
		'prefer-const': 'off',
		'no-undef': 'off', // Compatibility
		'no-fallthrough': 'off',
		'no-extra-boolean-cast': 'off',
		'no-useless-catch': 'off',
		'no-irregular-whitespace': 'off',
		'no-prototype-builtins': 'off',
		'no-case-declarations': 'off',
		'no-unused-vars': ['off', {
			'vars': 'local',
			'args': 'none',
			'ignoreRestSiblings': true
		}],
		'no-async-promise-executor': 'off',
		'vue/no-unused-vars': ['off', {
			'ignorePattern': 'Regexp'
		}],
		'vue/no-unused-components': ['off', {
			'ignoreWhenBindingPresent': true
		}],
		// # Default
		'semi': ['error', 'always'],
		'indent': ['error', 'tab', {
			'SwitchCase': 1,
			'ObjectExpression': 1,
			'MemberExpression': 1,
			'ImportDeclaration': 1,
			'VariableDeclarator': 1,
			'ignoredNodes': [
				'CallExpression > FunctionExpression.callee > BlockStatement.body',
				'TemplateLiteral'
			],
			'ignoreComments': true
		}],
		'comma-style': ['error', 'last'],
		'comma-dangle': ['error', 'never'],
		'comma-spacing': ['error', {
			'before': false,
			'after': true
		}],
		'block-spacing': ['error', 'always'],
		// 'no-tabs': ['error', {
		//     'allowIndentationTabs': true
		// }],
		'no-empty': ['error', {
			'allowEmptyCatch': true
		}],
		'no-use-before-define': ['error', {
			'functions': false,
			'variables': false
		}],
		'no-trailing-spaces': ['error', {
			'skipBlankLines': true,
			'ignoreComments': true
		}],
		'arrow-spacing': ['error', {
			'before': true,
			'after': true
		}],
		'no-spaced-func': 'error',
		'no-mixed-spaces-and-tabs': 'off',
		'no-unexpected-multiline': 'error',
		'space-in-parens': ['error', 'never', {
			'exceptions': []
		}],
		'space-infix-ops': ['error', {
			'int32Hint': false
		}],
		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': ['error', {
			'anonymous': 'ignore',
			'named': 'never',
			'asyncArrow': 'always'
		}],
		'array-bracket-spacing': ['error', 'never'],
		'func-call-spacing': ['error', 'never'],
		'function-call-argument-newline': ['error', 'consistent'],
		'key-spacing': ['error', {
			'beforeColon': false,
			'afterColon': true
		}],
		'keyword-spacing': ['error', {
			'before': true,
			'after': true
		}],
		'template-curly-spacing' : ['warn', 'always'],
		'quotes': ['warn', 'single'],
		// ! Essential Check list
		// 'vue/no-arrow-functions-in-watch'
		// 'vue/no-async-in-computed-properties'
		// 'vue/no-dupe-keys'
		// 'vue/no-dupe-v-else-if'
		// 'vue/no-duplicate-attributes'
		// 'vue/no-mutating-props'
		// 'vue/no-parsing-error'
		// 'vue/no-reserved-keys'
		// 'vue/no-shared-component-data'
		// 'vue/no-side-effects-in-computed-properties'
		// 'vue/no-template-key'
		// 'vue/no-textarea-mustache'
		// 'vue/no-unused-components'
		// 'vue/no-unused-vars'
		// 'vue/no-use-v-if-with-v-for'
		// 'vue/require-component-is'
		// 'vue/require-prop-type-constructor'
		// 'vue/require-render-return'
		// 'vue/require-v-for-key'
		// 'vue/require-valid-default-prop'
		// 'vue/return-in-computed-property'
		// 'vue/use-v-on-exact'
		// 'vue/valid-template-root'
		// 'vue/valid-v-bind'
		// 'vue/valid-v-cloak'
		// 'vue/valid-v-else-if'
		// 'vue/valid-v-else'
		// 'vue/valid-v-for'
		// 'vue/valid-v-html'
		// 'vue/valid-v-if'
		// 'vue/valid-v-model'
		// 'vue/valid-v-on'
		// 'vue/valid-v-once'
		// 'vue/valid-v-pre'
		// 'vue/valid-v-show'
		// 'vue/valid-v-slot'
		// 'vue/valid-v-text'

		// & Exec (tba)
		// 'eqeqeq': ['error', 'always'],
		// 'vue/component-name-in-template-casing': ['error', 'PascalCase', {
		//     'registeredComponentsOnly': true,
		//     'ignores': []
		// }],
		'no-console': 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/multi-word-component-names': 'off',
		'vue/no-reserved-component-names': 'off',
		'vue/no-v-text-v-html-on-component': 'off',
		'vue/no-use-v-if-with-v-for': ['error'],
		// 'vue/no-child-content': 'off',
		// 'vue/valid-template-root': 'off',
		'vue/return-in-computed-property': 'error',
		"vue/no-parsing-error": [
			"error",
			{
				"invalid-first-character-of-tag-name": false,
			}
		],
	}
};