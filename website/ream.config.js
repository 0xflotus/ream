/** @type {import('ream').ReamConfig} */
module.exports = {
  plugins: [
    [
      '@ream/plugin-google-analytics',
      {
        trackingId: 'UA-54857209-24',
      },
    ],
  ],
  css: [
    'prismjs/themes/prism-tomorrow.css',
    '@/css/tailwind.css',
    '@/css/main.css'
  ]
}
