const breakLines = () => {
    console.log('')
}

// 1 - Push sans push
// Créer la variable suivante:
// let fruits = ['Apple','Orange','Banana']
// Ajouter a la fin du tableau fruits un nouveau fruit: Raspberry. Sans utiliser la méthode push, seulement la notation es6

let fruits = ['Apple','Orange','Banana']

fruits = [
    ...fruits,
    "Raspberry"
]

console.log(fruits)

breakLines()

// 2 - Unshift sans unshift
// Créer la variable suivante:
// let fruits = ['Apple','Orange','Banana']
// Ajouter au début du tableau fruits un nouveau fruit: Raspberry. Sans utiliser la méthode unshift, seulement la notation es6

let fruits2 = ['Apple','Orange','Banana']

fruits2 = [
    "Raspberry",
    ...fruits2
]

console.log(fruits2)

breakLines()

// 3 - Array concatenation
// Créer les constantes suivantes:
// const arr1 = ['A', 'B', 'C']
// const arr2 = ['X', 'Y', 'Z']
// Concatener ces deux tableaux pour avoir le résultat suivant: ['A', 'B', 'C', 'X', 'Y', 'Z']

const arr1 = ['A', 'B', 'C']
const arr2 = ['X', 'Y', 'Z']

const arr3 = [
    ...arr1,
    ...arr2
]

console.log(arr3)

breakLines()

// 4 - Objects
// Créer la constante suivante:
// const user = {
//     age: 10,
//     eyes: "vert",
//     legs: 2,
//     arms: 2,
//     hair: "long",
//     caracterstique: "gras du bide",
//     nose: "petit nez",
//     ears: "grandes oreilles",
//     glasses: true,
//     sosie: "sarkozy"
//   }
// Créer une constante bobby qui sera un objet avec toutes les clés/valeurs de user, et en y ajoutant firstName: "bobby". Seulement avec la notation ES6

const user = {
    age: 10,
    eyes: "vert",
    legs: 2,
    arms: 2,
    hair: "long",
    caracterstique: "gras du bide",
    nose: "petit nez",
    ears: "grandes oreilles",
    glasses: true,
    sosie: "sarkozy"
  }

const bobby = {
    firsName: "bobby",
    ...user
}

console.log(bobby)

breakLines()

// 5 - forEach
// Créer la constante suivante:
// const numbers = [1, 2, 3, 4, 5, 6]
// Avec la notation es6, console log chaque element du tableau avec une boucle forEach

const numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(number => {
    console.log(number)
})

breakLines()

// 6 - filter
// Créer la constante suivante:
// const numbers = [1, 2, 3, 4, 5, 6]
// Avec la notation es6, créer un nouveau tableau contenant seulement les nombres impairs

const numbers2 = [1, 2, 3, 4, 5, 6]

const evenNumbers = numbers2.filter(element => {
        return element % 2 !== 0
})

console.log(evenNumbers)

breakLines()

// 7 - map
// Créer la constante suivante:
// const numbers = [1, 2, 3, 4, 5, 6]
// Avec la notation es6, créer un nouveau tableau contenant chaque element au carré

const numbers3 = [1, 2, 3, 4, 5, 6]

const numbersSquared = numbers3.map(e => {
            return e * e   
})

console.log(numbersSquared)

breakLines()