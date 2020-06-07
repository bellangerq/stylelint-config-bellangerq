module.exports = {
	plugins: ['stylelint-order'],
	extends: 'stylelint-config-recommended',
	rules: {
		'order/properties-alphabetical-order': true,
		'order/order': [
			'custom-properties',
			'dollar-variables',
			'declarations',
			{
				type: 'at-rule',
				hasBlock: false
			},
			'rules',
			{
				type: 'at-rule',
				hasBlock: true
			}
		],
		'at-rule-no-unknown': null,
		'declaration-block-no-duplicate-properties': true,
		'rule-empty-line-before': [
			'always',
			{
				except: ['first-nested', 'after-single-line-comment']
			}
		]
	}
}
