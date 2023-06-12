//Ejercicio 1
for (let i = 0; i < 50; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}
//Ejercicio 2
var pokemons =
    ['bulbasaur',
        'ivysaur',
        'venusaur',
        'charmander',
        'charmeleon',
        'charizard',
        'squirtle',
        'wartortle',
        'blastoise',
        'caterpie',
        'metapod',
        'butterfree',
        'weedle',
        'kakuna',
        'beedrill',
        'pidgey',
        'pidgeotto',
        'pidgeot',
        'rattata',
        'raticate',
        'spearow',
        'fearow',
        'ekans',
        'arbok',
        'pikachu',
        'raichu',
        'sandshrew',
        'sandslash',
        'nidoran-f',
        'nidorina',
        'nidoqueen',
        'nidoran-m',
        'nidorino',
        'nidoking',
        'clefairy',
        'clefable',
        'vulpix',
        'ninetales',
        'jigglypuff',
        'wigglytuff',
        'zubat',
        'golbat',
        'oddish',
        'gloom',
        'vileplume',
        'paras',
        'parasect',
        'venonat',
        'venomoth',
        'diglett',
        'dugtrio',
        'meowth',
        'persian',
        'psyduck',
        'golduck',
        'mankey',
        'primeape',
        'growlithe',
        'arcanine',
        'poliwag',
        'poliwhirl',
        'poliwrath',
        'abra',
        'kadabra',
        'alakazam',
        'machop',
        'machoke',
        'machamp',
        'bellsprout',
        'weepinbell',
        'victreebel',
        'tentacool',
        'tentacruel',
        'geodude',
        'graveler',
        'golem',
        'ponyta',
        'rapidash',
        'slowpoke',
        'slowbro',
        'magnemite',
        'magneton',
        'farfetchd',
        'doduo',
        'dodrio',
        'seel',
        'dewgong',
        'grimer',
        'muk',
        'shellder',
        'cloyster',
        'gastly',
        'haunter',
        'gengar',
        'onix',
        'drowzee',
        'hypno',
        'krabby',
        'kingler',
        'voltorb']
let num = parseInt(prompt("Ingrese un número, Si no es un número estará en un bucle infinito"))
while (isNaN(num)) {
    num = parseInt(prompt("Ingrese un número, Si no es un número estará en un bucle infinito"))
}
if (num < 5) {
    alert("El número es menor que 5 así que no se puede encontrar nada")
} else {
    let multiplos = [];
    for (let index = 0; index < num; index++) {
        if ((index+1) % 5 == 0) {
            multiplos.push(pokemons[index]);
        }
    }
    alert(`Los pokemones son: ${multiplos}`)
}
//Ejercicio 3
const array = [4, "dos", 8, "tres", 5, 9, 1, "cero"];
for (let i = 0; i < array.length; i++) {
    if (typeof (array[i]) === 'number') {
        console.log(array[i])
    }
}