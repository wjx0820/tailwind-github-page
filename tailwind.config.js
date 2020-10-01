module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    content: [
      './**/*.vue',
    ],
  },
  theme: {
    // typography: (theme) => ({
    //   default: {
    //     css: {
    //       a: {
    //         color: theme('colors.blue.600'),
    //         textDecoration: false
    //       },
    //       img: {
    //         display: 'inline-block'
    //       },
    //       h1: {
    //         fontSize: '2em',
    //         marginTop: '0',
    //         marginBottom: '0',
    //         lineHeight: '1',
    //         fontWeight: '700',
    //       },
    //       code: {
    //         backgroundColor: theme('colors.gray.200'),
    //         padding: '.2em .4em',
    //         borderRadius: '6px',
    //         fontWeight: '300',
    //       },
    //       'code::before': {
    //         content: '',
    //       },
    //       'code::after': {
    //         content: '',
    //       },
    //     }
    //   }
    // }),
    extend: {
      colors: {
        'gray-700-github': '#404448',
      },
      spacing: {
        '14': '3.5rem',
        '22': '5.5rem',
        '72': '18rem',
        '200': '50rem',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        'source-sans-pro': [
          'Source Sans Pro',
          'Roboto',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: [
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
  ],
}
