'use strict'

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10;
// let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100))

const showTypeOf = function (variable){
    console.log(variable, typeof variable);
}

const getRollbackMessage = function(price){
    if (price >= 30000) {
        return "Даем скидку в 10%"
    }else if(price >= 15000 && price< 30000) {
        return"Даем скидку в 5%"
    }else if (price >= 0 && price < 15000) {
        return"Скидка не предусмотрена"
    }else{
        return"Что-то пошло не так"
    }
}

const getAllServicePrices = function (serv1, serv2){
    return serv1 + serv2;
}
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

const getFullPrice = function(scr, allServ){
    return scr + allServ;
}
const fullPrice = getFullPrice(screenPrice, allServicePrices);

const getServicePercentPrices = function(fullP, rollb){
    return fullP - (fullP * (rollb / 100)) ;
}
const servicePercentPrice  = getServicePercentPrices(fullPrice, rollback);

const getTitle = function(title) {
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()
}

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(getTitle(title));
console.log(allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(screens.split(", "));
