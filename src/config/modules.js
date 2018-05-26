import env from './env';

module.exports = [
  '@nuxtjs/pwa',
  ['@nuxtjs/google-analytics', {
    id: env.GOOGLE.ANALYTICS.ID,
  }],
  ['nuxt-sass-resources-loader', [
    '~/assets/scss/variables/_colors.scss',
  ]],
];
