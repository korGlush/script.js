const modal = () => {
    const modal = document.querySelector('.popup')

    const modalClose = () => {
        modal.style.display = 'none'
    }
    const modalOpen = () => {
        modal.style.display = 'block'
        modal.style.left = 0
    }
    
    document.addEventListener('click', (e) => {
        if (e.target.closest('.popup-close') || e.target.classList.contains('popup')) {
            modalClose()
        } else if (e.target.closest('.popup-btn')) {
            modalOpen()
        }
    })
}

export default modal 

