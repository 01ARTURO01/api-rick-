const url = window.location.search
const urlParams = new URLSearchParams(url)
const id = urlParams.get('id')
const urlAPI = "https://rickandmortyapi.com/api"

fetch(urlAPI + "/character/" + id)
.then(Response => Response.json())
.then(character => { // traemos toda la informacion de la api the rick and morty
        const characterTemplate = `
    <div id="character">
        <img src="${character.image}" alt="">
        <div class="detail style=">
        background-color: rebeccapurple;
    text-align: center;
            <h1>${character.name}</h1>
            <h2>${character.status} - ${character.species}</h2>
            <p>Last known location:</p>
            <p>${character.origin.name}</p>
            <p>First seen in:</p>
            <p>${character.location.name}</p>
        </div>   
    </div>`
    characterContainer.innerHTML += characterTemplate
}) 
