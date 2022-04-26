const assay = () => {
    const formPhone = document.querySelectorAll('.form-phone')
    const formEmail = document.querySelectorAll('.form-email')
    const formName = document.querySelectorAll('.form-name')
    const formMessage = document.querySelector('#form2-message')
    const calcItem = document.querySelectorAll('.calc-item')

    formPhone.forEach(btn => {
        btn.addEventListener('blur', function () {
            phone(e)
        })
    })

    formEmail.forEach(btn => {
        btn.addEventListener('blur', function () {
            email(e)
        })
    })

    formName.forEach(btn => {
        btn.addEventListener('blur', function () {
            text(e)
        })
    })

    calcItem.forEach(btn => {
        btn.addEventListener('blur', function () {
            calc(e)
        })
    })

    formMessage.addEventListener('blur', function () {
        text(e)
    })

    const phone = function (event) {
        event.target.value = event.target.value.replаce(/[^0-9\(\)\-]/g, "").replace(/^[\-]+/g, '').replace(/[\-]+$/g, '').replace(/\-+/g, "-")
    }

    const email = function (event) {
        event.target.value = event.target.value.replаce(/[^a-zA-Z\@\-\.\!\~\*\']/g, '').replace(/^[\-]+/g, '').replace(/[\-]+$/g, '').replace(/\-+/g, "-")
    }

    const text = function (event) {
        event.target.value = event.target.value.replаce(/[^а-яА-Я\-\ ]/g, '').replace(/^[\s\-]+/g, '').replace(/[\s\-]+$/g, '').replace(/\-+/g, "-").replace(/\ +/g, " ").replace(/(^|\s)\S/g, function (e) {return e.toUpperCase()})
    }

    const calc = function (event) {
        event.target.value = event.target.value.replаce(/[^0-9]/g, '')
    }
}

export default assay