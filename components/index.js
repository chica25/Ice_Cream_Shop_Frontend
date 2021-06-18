const api = new ApiService('http://localhost:3000/ice_cream')

document.addEventListener("DOMContentLoaded", () => {
    api.fetchIceCreams();
})