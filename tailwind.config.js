/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors:{
        'richBlack': '#00040F',
        'richBlackLessOpacity': '#00040FB3',
        'charlestonGreen': '#27272777',
        'maximumBlueGreen': '#33BBCF',
        'mediumSkyBlue': '#7DE7EB',
        'diamond': '#BEF3F5',
        'crayola': '#5CE1E6',
        'paleViolet': '#BCA5FF',
        'metallicBlue': '#214D76',
        'paoloVeroneseGreen': '#09977C22',
        'chineseBlack': '#14101D',
        'whiteWith33': '#FFFFFF33',
        'whiteWith66': '#FFFFFF66',
        'whiteWith88': '#FFFFFF88',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      transitionProperty: {
        'menuButtonTransition': 'width, transform',
        'section': 'opacity, transform',
      },
      rotate: {
        '30': '30deg',
        '135': '135deg',
      },
      screens: {
        'xsm': '340px',
        'bwmd&lg': '820px',
        '1AndHalfXl': '1400px',
      },
      spacing: {
        '30': '7.5rem',
      },
      blur: {
        '8xl': '225px',
      },
      aspectRatio: {
        '1/2': '1 / 2',
      },
      gridTemplateColumns: {
        'layout': '1fr 5fr',
      },
      animation: {
        'slideIn': 'slideIn 500ms ease forwards',
      },
      keyframes: {
        'slideIn': {
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0%)'},
        },
      },
    },
  },
  plugins: [],
}

