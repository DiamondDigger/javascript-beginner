let currentDate = new Date()

//alternative way
// document.write(currentDate.getDay() + '.'
//     + currentDate.getMonth() + '.'
//     + currentDate.getFullYear())

const stringDate = () => {
    return format('day') + '.'
        + format('month') + '.'
        + format()
}

let format = (objectOfDate) => {
    switch (objectOfDate){
        case 'day':
            return currentDate.getDay() < 10 ? '0' + currentDate.getDay() : currentDate.getDay()
        case 'month':
            return currentDate.getMonth() < 10 ? '0' + currentDate.getMonth() : currentDate.getMonth()
        default :
            return currentDate.getFullYear()
    }
}

document.getElementById('currentDate').innerHTML = stringDate()