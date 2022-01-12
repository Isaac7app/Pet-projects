setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

const setClock = ()=>{
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() /60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) /60
    const hoursRatio = (secondsRatio + currentDate.getHours()) /12;
}

const setRotation = ()=>{
    Element.style.setProperty('--rotation', rotationRatio * 360)
}