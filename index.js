let carsElement = document.querySelector('.cars')
let makeElement = document.querySelector('.make')
let colorElement = document.querySelector('.color')



axios
    .get("http://api-tutor.herokuapp.com/v1/colors")
    .then(function (res) {
        res.data.forEach(color => {


            const li = document.createElement('li')
            li.innerHTML = `<li>${color}</li>`
            colorElement.appendChild(li)
        });



    })

axios
    .get("http://api-tutor.herokuapp.com/v1/makes")
    .then(function (res) {
        res.data.forEach(make => {


            const li = document.createElement('li')
            li.innerHTML = `<li>${make}</li>`
            makeElement.appendChild(li)
        });

    })

axios
    .get("http://api-tutor.herokuapp.com/v1/cars")
    .then(function (res) {
        res.data.forEach(model => {

            console.log(res.data);
            const li = document.createElement('li')
            li.innerHTML = `<li>${data.model}</li>`
            carsElement.appendChild(li)
        });



    })