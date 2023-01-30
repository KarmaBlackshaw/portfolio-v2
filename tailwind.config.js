import plugin from 'tailwindcss/plugin'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addVariant, matchUtilities, theme }) {
      addVariant('not-last', '&:not(:last-child)')

      addVariant('last', '&:last-child')

      matchUtilities(
        {
          'exact-w': value => ({
            'min-width': value,
            width: value,
            'max-width': value
          })
        },
        { values: theme('spacing') }
      )

      matchUtilities(
        {
          'exact-h': value => ({
            'min-height': value,
            height: value,
            'max-height': value
          })
        },
        { values: theme('spacing') }
      )

      matchUtilities(
        {
          'wh': value => ({
            width: value,
            height: value
          })
        },
        { values: theme('spacing') }
      )

      matchUtilities(
        {
          'exact-wh': value => ({
            'min-width': value,
            'max-width': value,
            width: value,
            'min-height': value,
            'max-height': value,
            height: value
          })
        },
        { values: theme('spacing') }
      )
    })
  ]
}
