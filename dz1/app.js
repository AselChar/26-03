var month = prompt(' Введите Ваш месяц рождения')
var day = prompt('Введите Ваш день рождения')

var yourSign = 'Ваш знак зодиака:'
if ((month === 'январь' && day >=20 && day <=31) || (month === 'февраль' && day >=1 &&  day <=19)) {
    console.log(yourSign + 'Водолей' )

}else if ((month === 'февраль' && day >=21 && day <=29) || (month === 'март' && day >=1 &&  day <=20)) {
    console.log(yourSign + 'Рыбы')

}else if ((month === 'март' && day >=21 && day <=31) || (month === 'апрель' && day >=1 &&  day <=19)) {
    console.log(yourSign + 'Овен')

}else if ((month === 'апрель' && day >=20 && day <=30) || (month === 'май' && day >=1 &&  day <=20)) {
    console.log(yourSign + 'Телец')

}else if ((month === 'май' && day >=21 && day <=31) || (month === 'июнь' && day >=1 &&  day <=20)) {
    console.log(yourSign + 'Близнецы')

}else if ((month === 'июнь' && day >=21 && day <=30) || (month === 'июль' && day >=1 &&  day <=22)) {
    console.log(yourSign + 'Рак')

}else if ((month === 'июль' && day >=23 && day <=31) || (month === 'август' && day >=1 &&  day <=22)) {
    console.log(yourSign + 'Лев')
}else if ((month === 'август' && day >=23 && day <=31) || (month === 'сентябрь' && day >=1 &&  day <=22)) {
    console.log(yourSign + 'Дева')
}else if ((month === 'сентябрь' && day >=23 && day <=30) || (month === 'октябрь' && day >=1 &&  day <=23)) {
    console.log(yourSign + 'Весы')
}else if ((month === 'октябрь' && day >=24 && day <=31) || (month === 'ноябрь' && day >=1 &&  day <=22)) {
    console.log(yourSign + 'Скорпион')
}else if ((month === 'ноябрь' && day >=23 && day <=30) || (month === 'декабрь' && day >=1 &&  day <=21)) {
    console.log(yourSign + 'Стрелец')
}else if ((month === 'декабрь' && day >=21 && day <=31) || (month === 'январь' && day >=1 && day <=19)) {
    console.log(yourSign + 'Козерог')
}
else {
    console.error('Ошибка')}
