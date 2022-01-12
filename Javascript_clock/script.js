setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

const setClock = ()=>{
    const currentDate = new Date()
    const secondsRation = currentDate.getSeconds() /60;
    const minutesRation = (secondsRation + currentDate.getMinutes()) /60
    const hoursRation = currentDate.getHours() /60;
}

const setRotation = ()=>{
    Element.style.setProperty('--rotation', rotationRatio * 360)
}