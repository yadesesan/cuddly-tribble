/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      blue: {
        700: '#001A29',
      },
      orange: {
        100: '#FFF8ED',
        200: '#FFE4B9',
        600: '#FE776A',
        700: '#FFBB4F',
      },
      grey: {
        200: '#E1E7EC',
        600: '#5F6B7A',
      },
      white: '#FFFFFF'
    },
    fontFamily: {
      larken: 'Larken, serif',
      satoshi: 'Satoshi, san-serif'
    },
    fontSize: {
      xs: ['14px', '18px'],
      sm: ['16px', '21px'],
      md: ['18px', '24px'],
      lg: ['24px', '32px'],
      xl: ['36px', '46px'],
      '2xl': ['42px', '54px'],
      '3xl': ['56px', '72px'],
    },
    extend: {},
    
    
  },
  plugins: [],
}
