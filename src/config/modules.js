module.exports = [
  '@nuxtjs/pwa',
  ['@nuxtjs/google-analytics', {
    id: 'aze',
    // id: 'UA-118470648-1',
  }],
  ['nuxt-sass-resources-loader', [
    '~/assets/scss/variables/_colors.scss',
  ]],
];
