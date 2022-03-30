let carsElement = document.querySelector('.cars')
let makeElement = document.querySelector('.make')
let colorElement = document.querySelector('.color')



axios
    .get("https://api-tutor.herokuapp.com/v1/colors")
    .then(function (res) {
        res.data.forEach(color => {


            const li = document.createElement('li')
            li.innerHTML = `<li>${color}</li>`
            colorElement.appendChild(li)
        });



    })

axios
    .get("https://api-tutor.herokuapp.com/v1/makes")
    .then(function (res) {
        res.data.forEach(make => {


            const li = document.createElement('li')
            li.innerHTML = `<li>${make}</li>`
            makeElement.appendChild(li)
        });

    })

axios
    .get("https://api-tutor.herokuapp.com/v1/cars")
    .then(function (res) {
        res.data.forEach(model => {

            console.log(model);
            const li = document.createElement('li')
            li.innerHTML = `<li>${model.make}</li>`
            carsElement.appendChild(li)
        });



    })