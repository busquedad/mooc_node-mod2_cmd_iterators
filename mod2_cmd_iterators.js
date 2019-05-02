/* 1. Primero	debe	mostrar	una	 línea	 en	blanco	 seguida	de	 las	rutas	 al	 interprete	de	node.js	 y	 al
 fichero	mod2_cmd_iterators.js	(que	con<ene	el	programa)	y	de	otra	línea	en	blanco */

let [fristArgv, seconArgv, ...rest] = process.argv;


function printRoutes (){
    console.log();
    console.log(`Route to node.js: ${fristArgv}`);
    console.log(`Route to this file: ${seconArgv}`);
    console.log();
}

printRoutes();

/* 2. A	 con<nuación	 debe	 mostrar	 los	 parámetros	 en	 orden	 alfabé<co,	 cada	 uno	 en	 una	 línea,
   seguido	 del	 string	 “:	 “	 y	 del	 número	 de	 veces	 que	 esta	 repe<do.	 	 Si	 se	 añade	 la	 opción	 -r
 delante	de	un	parámetro	este	se	elimina	y	no	aparece	en	el	listado. */

rest.push("uno", "-r", "dos", "uno", "dos", "tres", "tres", "dos", "tres", "-r");

console.log(`${rest}`);

function clearArray(array) {
    for (let index = 0 ; index <= array.length ; index++){
        let discard = rest.indexOf('-r');
        if (discard >= 0){
            rest.splice(discard,1);
        }
    }
    return rest.sort();
}

clearArray(rest);

console.log(`${rest}`);

function arrayDictionary(array) {
    let dictionary = [];
    dictionary = array.reduce((countElement, element) => {
        dictionary[element] = (dictionary[element] || 0) + 1;
        return dictionary;
    },1);
    return console.log(`${dictionary}`)
}
arrayDictionary(rest);

/*
let discard = rest.indexOf('-r');

rest.splice(discard,0);

rest.sort();

let Dictionary = [];

Dictionary = rest.reduce((countElement, element) => {
    Dictionary[element] = (Dictionary[element] || 0) + 1;
    return Dictionary;
},1);

console.log(Dictionary);

function arrayDictionary(array) {
    let dictionary = [];
    dictionary = rest.reduce((countElement, element) => {
        dictionary[element] = (dictionary[element] || 0) + 1;
        return dictionary;
    },1);
    return console.log(`${dictionary}`)
}
arrayDictionary(rest);
*/