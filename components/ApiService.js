class ApiService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }



fetchIceCreams = () => {
    const url = new URL(this.baseUrl + "/ice_creams")
    fetch(url).then(resp => resp.json())
    .then(data => IceCream.createIceCream(data));


}