let paginaActual = 1;

function fetchCharacters(page) {
    return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(response => response.json())
    .catch(error => {
       header.innerHTML = 'Error fectching data'; 
    });
}


function displayCharacters(characters) {
    const container = document.getElementById('character-list');
    container.innerHTML = '';
    characters.forEach(character => {
        const characterLi = document.createElement('li');
        characterLi.className = 'character';
        characterLi.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>Name: ${character.name}</h3>
            <p>Species: ${character.species}</p>
        `;
        container.appendChild(characterLi);
    });
}

function loadCharacters(page) {
    fetchCharacters(page).then(data => {
        if (data) {
            displayCharacters(data.results);
        }
    });
}

document.getElementById('prev-page').addEventListener('click',  () => {
    if (paginaActual > 1) {
        paginaActual--;
        loadCharacters(paginaActual);
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    paginaActual++;
    loadCharacters(paginaActual);
});

loadCharacters(paginaActual);