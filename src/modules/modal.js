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

// import { animate } from "./helper";

// const modal = () => {
//     const modal = document.querySelector('.popup')
//     const buttons = document.querySelectorAll('.popup-btn')
//     const closeBtn = modal.querySelector('.popup-close')
//     const popupContent = document.querySelector(".popup-content");

//     buttons.forEach(btn => {
//         btn.addEventListener('click', () => {
//             modal.style.display = 'block';
//             animate({
//                 duration: 500,
//                 timing(timeFraction) {
//                     return timeFraction;
//                 },
//                 draw(progress) {
//                     popupContent.style.opacity = progress;
//                     popupContent.style.top = 20 * progress + "%";
//                 },
//             });
//         })
//     })

//     closeBtn.addEventListener('click', () => {
//         modal.style.display = 'none'
//     })
//     modal.addEventListener('click', (e) => {
//         if (
//             !e.target.closest(".popup-content") ||
//             e.target.classList.contains("popup-close")
//         ) {
//             modal.style.display = "none";
//         }
//     })
// };

// export default modal
