'use strict'

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},

    start: function(){
        appData.asking()
        // appData.addPrice()
        appData.getFullPrice(appData.screenPrice, appData.allServicePrices)
        appData.getServicePercentPrices()
        appData.getTitle() 
        appData.getRollbackMessage()
        appData.screenPrices()
        
        appData.logger()
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },

    asking: function () {
    
        do{
            appData.title = prompt("Как называется ваш проект?", "da");
        }while(isNaN(appData.title) === false)
    
    for (let i = 0; i < 2; i++){
        let name
        do{
            name = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
        }while(isNaN(name) === false)

        let price = 0

        do{
            price = prompt("Сколько будет стоить данная работа?", "1000");
        }while(!appData.isNumber(price));

        appData.screens.push({ id: i, name: name, price: price })
        
    }



    for (let i = 0; i < 2; i++){
        let name

        do{
            name = prompt("Какой дополнительный тип услуги нужен?", "все");
        }while(isNaN(name) === false)

        let boba = 0;

        do {
            boba = +prompt("Сколько это будет стоить?", "2000");
        } while (!appData.isNumber(boba))

        appData.services[i] = [name, +boba]
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    screenPrices: function() {
        appData.screens.filter(function(price){

        })
    },

    // addPrice: function () {
    //     for ( let screen of appData.screens){
    //         appData.screenPrice += +screen.price
    //     }
    //     for(let key in appData.services) {
    //         appData.allServicePrices += appData.services[key]
    //     }
    // },

    getRollbackMessage: function(price){
        if (price >= 30000) {
            return "Даем скидку в 10%"
        }else if(price >= 15000 && price< 30000) {
            return"Даем скидку в 5%"
        }else if (price >= 0 && price < 15000) {
            return"Скидка не предусмотрена"
        }else{
            return"Что-то пошло не так"
        }
    },
    
    getFullPrice: function(scr, allServ){
        appData.fullPrice = scr + allServ;
    },

    getServicePercentPrices: function(){
        appData.servicePercentPrice  = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)) ;
    },

    getTitle: function() {
        appData.title =  appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
    },

    logger: function(){
        // for (const key in appData) {
        //     console.log(appData[key]);
        // }
        // console.log(appData.screens);
        console.log(appData.screens);
        
    },
}


appData.start()