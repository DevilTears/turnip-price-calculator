module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-html',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-property-sort-order-smacss'
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ]
}