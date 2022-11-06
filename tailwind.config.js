/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
    colors: {
      backgroundColor:"#EFF0F5",
      headerColor: "#3A4562",
      textColor: "#878D9D",
      shadу: "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)",
      arrowColor: "#7D859C",
      buttonColor: "#70778B",
      link:'#55699E',
      button:"#384564",
      time: 'rgba(56, 65, 93, 0.355988)',
      emptype: '#55699E',
      bcEmptype: "rgba(161, 177, 219, 0.317343)",
      textBenefits: '#988B49',
      bcBenefits: 'rgba(255, 207, 0, 0.15)',
      borderColor: 'rgba(85, 105, 158, 0.3)', 
      borderColorYel:'rgba(255, 207, 0, 0.15)',
      goBackButton: '#D8D8D8',
      mapColor: '#2A3047',
      mapText: '#E7EAF0'
     

           
    },
    backgroundImage: {
      'location': "url('../img/location.svg')",
      'post': "url('../img/post.svg')",
      'rate':  "url('../img/star.svg')",
      'mobileRate':  "url('../img/mobileStar.svg')",
      'separator':  "url('../img/separator.svg')",
      'dots': "url('../img/dots.svg')",
      'list': "url('../img/detailList.svg')",
      'listItem': "url('../img/list.svg')",
      'arrow':"url('../img/Arrow.svg')",
      'circle': "url('../img/circle.png')"
      
   },
   fontSize: {
    job: '28px',
    
  },
  fontFamily: {
    'sans':'Roboto',
  },
  listStyleType: {
    square: 'square',
    
  },
  }
  },
  plugins: [],
}
