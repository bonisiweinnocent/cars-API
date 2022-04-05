let carsElement = document.querySelector('.cars')
let makeElement = document.querySelector('.make')
let colorElement = document.querySelector('.color')
let emptyElem = document.querySelector('.empty')




axios
    .get("https://api-tutor.herokuapp.com/v1/colors")
    .then(function (res) {
        res.data.forEach(color => {
            const li = document.createElement('tr')
            li.innerHTML = `<tr><td>${color}</td></tr>`
            colorElement.appendChild(li)
        });
    })

axios
    .get("https://api-tutor.herokuapp.com/v1/makes")
    .then(function (res) {
        res.data.forEach(make => {

            console.log(res);
            const li = document.createElement('tr')
            li.innerHTML = `<tr><td>${make}</td></tr>`
            makeElement.appendChild(li)
        });
    })

axios
    .get("https://api-tutor.herokuapp.com/v1/cars")
    .then(function (res) {
        res.data.forEach((model) => {

            const li = document.createElement('tr')
            li.innerHTML = `<tr><td>${model.make}</td><td> ${model.model}</td>  <td> ${model.color}</td>   <td> R${model.price}</td><td> ${model.reg_number}</td><tr>`
            carsElement.appendChild(li)

        });
    })



const enterElem = document.querySelector('.enter')
let brandsElem = document.getElementById('brands')
let coloursElem = document.getElementById('colours')
let displayElem = document.querySelector('.display')



enterElem.addEventListener('click', function () {

    displayElem.innerHTML = ''
    axios
        .get("https://api-tutor.herokuapp.com/v1/cars")
        .then(function (res) {
            res.data.forEach((car) => {


                if (brandsElem.value == car.make && coloursElem.value == car.color) {

                    const list = document.createElement('tr')
                    list.innerHTML = `<tr><td>${car.make}</td><td> ${car.model}</td>  <td> ${car.color}</td>   <td> R${car.price}</td><td> ${car.reg_number}</td><tr>`
                } else if (brandsElem.value == car.make) {
                    const list = document.createElement('tr')
                    list.innerHTML = `<tr><td>${car.make}</td><td> ${car.model}</td>  <td> ${car.color}</td>   <td> R${car.price}</td><td> ${car.reg_number}</td><tr>`

                    displayElem.appendChild(list)
                } else if (coloursElem.value == car.color) {
                    const list = document.createElement('tr')
                    list.innerHTML = `<tr><td>${car.make}</td><td> ${car.model}</td>  <td> ${car.color}</td>   <td> R${car.price}</td><td> ${car.reg_number}</td><tr>`

                    displayElem.appendChild(list)
                } else if (!brandsElem.value && !coloursElem.value) {
                    emptyElem.innerHTML = 'Please make a selection!'

                }

            });
            setTimeout(function () {
                emptyElem.innerHTML = '';


            }, 2000);

        })
})
