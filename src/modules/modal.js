const modal = () => {
    const modal = document.querySelector('.popup')
    const modalContent = document.querySelector('.popup-content')
    let count = -100 
    let intervalId
    let open = false
    modalContent.style.transform = `translateX(${count}%)`

    const counter = (open) => {
        if (open) {
            count += 5
        } else {
            count -= 5
        }
    }
    
    const modalOpen = (open) => {
        counter(open)
        modalContent.style.transform = `translateX(${count}%)`
        if(count >= 0){
            clearInterval(intervalId)
            open = false
        } else if(count <= -100){
            clearInterval(intervalId)
            open = false
            modal.style.display = ''
        }
    
    }
    
    document.addEventListener('click', (e) => {
        if (e.target.closest('.popup-close') || e.target.classList.contains('popup')) {
            open = !open
            intervalId = setInterval(() => {
                modalOpen(open)
            }, 20)
            
        } else if (e.target.closest('.popup-btn')) {
            open = !open
            modal.style.display = 'block'
            intervalId = setInterval(() => {
                modalOpen(open)
            }, 20)
        }
    })

}

export default modal 

