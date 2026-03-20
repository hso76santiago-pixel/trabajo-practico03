// Clase para representar un Superhéroe
import fs from 'fs'; // 
class Superheroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, 
                planetaOrigen, debilidad, poder, habilidadEspecial, aliado, 
                enemigo) {
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
}
 export function leerSuperheroes(ruta) {
    const datos = fs.readFileSync(ruta, 'utf8');
    
    // Usamos el mismo nombre en ambas líneas:
    const superheroesArray = JSON.parse(datos); 
    
    const superheroes = superheroesArray.map(hero => new Superheroe(
        hero.id, hero.nombreSuperheroe, hero.nombreReal,
        hero.nombreSociedad, hero.edad, hero.planetaOrigen, 
        hero.debilidad, hero.poder, hero.habilidadEspecial, 
        hero.aliado, hero.enemigo
    ));

    superheroes.sort((a, b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));
    return superheroes;
} 

// AGREGA ESTO AL FINAL:

const miRuta = './superheroes.json';
const lista = leerSuperheroes(miRuta);

console.log("--- Lista de Superhéroes Ordenada ---");
console.log(lista);