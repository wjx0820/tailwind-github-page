import mdPlugin from 'vite-plugin-markdown'

export default {
  base: './',
  assetsDir: 'assets',
  plugins: [mdPlugin({ mode: ['html'] })]
}