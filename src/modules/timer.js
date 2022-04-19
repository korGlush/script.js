const timer = (deadline) => {
    let timerDays = document.querySelector('#timer-days')
    let timerHours = document.querySelector('#timer-hours')
    let timerMinutes = document.querySelector('#timer-minutes')
    let timerSeconds = document.querySelector('#timer-seconds')

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return{timeRemaining, days, hours, minutes, seconds}
    }
    const updateClock = () => {
        let getTime = getTimeRemaining()

        timerDays.textContent = getTime.days
        timerHours.textContent = getTime.hours
        timerMinutes.textContent = getTime.minutes
        timerSeconds.textContent = getTime.seconds

        if (getTime.timeRemaining > 0){
            setTimeout(updateClock, 1000)
        }
    }
    updateClock()
}

export default timer