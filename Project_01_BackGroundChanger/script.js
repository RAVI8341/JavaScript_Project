const button = document.querySelector("button")
const body = document.querySelector("body")
const colorCodes = [
    "#FF0000", // Red
    "#00FF00", // Lime
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#800000", // Maroon
    "#008000", // Green
    "#000080", // Navy
    "#808000", // Olive
    "#800080", // Purple
    "#008080", // Teal
    "#C0C0C0", // Silver
    "#808080", // Gray
    "#FFFFFF"  // White
  ];
  
  body.style.backgroundColor = "#008000"
  button.addEventListener('click', changeBG)
  function changeBG(){
    const colorIndex = parseInt(Math.random()*colorCodes.length)
    body.style.backgroundColor = colorCodes[colorIndex]
  }

  