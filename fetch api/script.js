// when we fetch or get the api and we will intigrate the api like this way in frontend

let p = fetch("https://goweather.herokuapp.com/weather/Ny")
    p.then((response) => {
        return response.json()
    }).then((value2) => {
        console.log(value2)
    })

    


    // for check the response (status, ok, headers)

    // p.then((response) => {
    //     console.log(response.status)
    //     console.log(response.ok)
    //     console.log(response.headers)
    //     return response.json()
    // }).then((value2) => {
    //     console.log(value2)
    // });