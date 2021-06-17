
const indexUrl = 'http://localhost:3000/ice_cream'

fetch(indexUrl)
.then(resp => resp.json())
.then(json => console.log(json));
