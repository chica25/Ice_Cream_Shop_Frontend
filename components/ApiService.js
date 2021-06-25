// class ApiService {
//     constructor(baseUrl) {
//         this.baseUrl = baseUrl;
//     }


// fetchIceCreams = () => {
//     const url = new URL(this.baseUrl + "/ice_creams")
//     fetch(url).then(resp => resp.json())
//     .then(data => IceCream.createIceCream(data));

//     }

// }

fetch('http://localhost:3000/ice_cream').then((response) => {
    console.log('resolved', response);
       return response.json();
    }).then(data => {
        console.log(data)
    }).catch((err) => {
        console.log('rejected', err);
});
