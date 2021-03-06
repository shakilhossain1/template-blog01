module.exports = {
  mode: 'jit',
  purge: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       backgroundColor: {
         skin: {
           primary: '#fe4f70',
           lightblue: '#F1F8FF'
         }
       },
       textColor: {
         skin: {
          //  muted: '#ffffff99',
          muted: '#8F9BAD',
          light: '#fff',
          dark: '#203656',
          primary: '#fe4f70'
         }
       },
       borderColor: {
         skin: {
           muted: '#EBEBEB',
           primary: '#fe4f70'
         }
       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }