// 1 - Declara una función getRandomPokemon que retorne un pokemon aleatorio.
async function getRandomPokemon() {
    try {
        const randomId = Math.floor(Math.random() * 1025) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        if (!response.ok) {
            throw new Error("No se pudo obtener el Pokémon");
        }
        const pokemon = await response.json();
        return pokemon;
    } catch (error) {
        console.error("Error:", error);
    }
}
getRandomPokemon().then(data => {
    console.log(`Tu Pokémon aleatorio es: ${data.name}`);
});

//2 - Declara una funcion getImageAndName que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})
async function getImageAndName(pokemonNameOrId) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);
        if (!response.ok) {
            throw new Error("Pokémon no encontrado");
        }
        const data = await response.json();
        return {
            name: data.name,
            img: data.sprites.front_default
        };
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}
getImageAndName('pikachu').then(pokemon => {
    console.log(pokemon);
});