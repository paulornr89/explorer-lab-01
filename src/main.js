import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")
console.log(ccLogo)
setCardType("default")
//console.log(ccBgColor01)
function setCardType(typeCard) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    default: ["black", "gray"],
  }

  ccBgColor01.setAttribute("fill", colors[typeCard][0])
  ccBgColor02.setAttribute("fill", colors[typeCard][1])
  ccLogo.setAttribute("src", `/cc-${typeCard}.svg`)
}

globalThis.setCardType = setCardType
