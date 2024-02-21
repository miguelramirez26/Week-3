const url = 'https://pokeapi.co/api/v2/pokemon';
let results = null;
async function getPokemon(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        doStuff(data);
    }
}
function doStuff(data) {
    results = data;
    const list = results.results;
    list.forEach((item)=>{
        const div = document.createElement('div');
        div.innerHTML = item.name;
        console.log(document.querySelector('#pokemon-list'))
        document.querySelector('#pokemon-list').appendChild(div);
    })
    console.log("first: ", results);

}
getPokemon(url);
console.log("second: ", results)
