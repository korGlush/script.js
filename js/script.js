'use strict'

const title = document.getElementsByTagName('h1')[0]
const buttonPlus = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')

const inputRange = document.querySelector('.rollback input')
const inputRangeValue = document.querySelector('.rollback .range-value')

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicePercent: {},
    serviceNumber: {},
    init: function () {
        appData.addTitle()

        startBtn.addEventListener('click' , appData.start)
        buttonPlus.addEventListener('click' , appData.addScreenBlock)
    },
    addTitle: function (){
        document.title = title.textContent
    },
    start: function () {
        appData.addScreens()
        appData.addServices()

        appData.addPrices()
        // appData.getServicePercentPrice()

        // appData.logger()
        console.log(appData);
        appData.showResult()
    },
    showResult: function () {
        total.value = appData.screenPrice
        totalCountOther.value = appData.servicePricesPersent + appData.servicePricesNumber
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen')

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            })
        })

        console.log(appData.screens);
},
addServices: function () {
    otherItemsPercent.forEach(function (item) {
        const check = item.querySelector('input[type=checkbox')
        const label = item.querySelector('label')
        const input = item.querySelector('input[type=text')
        
        if (check.checked) {
            appData.servicesPercent[label.textContent.Content] = +input.value
        }

    })

    console.log(appData);
},
addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true)

    screens[screens.length - 1].after(cloneScreen)
},
addPrices: function () {
    for (let screen pf appData.screens) {
        appData.screenPrice += +screen.price
    }

    for (let key in appData.serviceNymber) {
        appData.servicePricesNumber += appData.serviceNumber[key]
    }
},
getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices
},
getServicePercentPrice: function () {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback))
},
getTitle: function () {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).to
},
getRollbackMessage: function (price) {
    
}