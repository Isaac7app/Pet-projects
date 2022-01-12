setInterval(setClock, 1000)

const setClock = ()=>{
    const currentDate = new Date()
    const secondsRation = currentDate.getSeconds() /60;
    const minutesRation = (secondsRation + currentDate.getMinutes() /60)
    const hoursRation = currentDate.getHours() /60;
}