const mypokemon = document.getElementById('POKEMON')
let template = document.getElementById('data')

fetch('https://pokeapi.co/api/v2/pokemon/?limit=1000')
.then(respone =>{
    if (!respone.ok){
        throw new Error('Network respone not work_1')
    }
    return respone.json()
})

.then(data =>{
    const daftar_pokemon = data.results;
    for (let i = 1; i <= 40; i++) {
        const data_pokemon = daftar_pokemon[i];

        fetch(data_pokemon.url)
        .then(res => {
            if (!res.ok){
                throw new Error('Network respone not work_2')
            }
            return res.json()
})

.then(pokemon => {
    const getData = document.importNode (template.content, true);

    getData.querySelector('img').src = pokemon.sprites.front_shiny;
    getData.querySelector('img').alt = pokemon.name;
    getData.querySelector('h3').textContent = pokemon.name;
    getData.querySelector('#tipe').textContent = pokemon.types.map(type => type.type.name);
    getData.querySelector('h4').textContent = pokemon.abilities.ability;

    mypokemon.appendChild(getData);
})

.catch((error) => {
    console.log('Error Fetching data1',error);
})
()};
})
.catch((error) => {
    console.log ('Error Fetching data2',error);
})