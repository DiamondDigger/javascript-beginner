let currentDate = new Date()

//alternative way
// document.write(currentDate.getDay() + '.'
//     + currentDate.getMonth() + '.'
//     + currentDate.getFullYear())

const stringDate = () => {
    return currentDate.getDay() + '.'
        + currentDate.getMonth() + '.'
        + currentDate.getFullYear()
}

document.getElementById('currentDate').innerHTML = stringDate()