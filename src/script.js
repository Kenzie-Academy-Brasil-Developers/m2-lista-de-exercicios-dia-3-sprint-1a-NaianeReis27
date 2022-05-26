
//Faça uma função **aboveAverageGrades** que recebe um array de notas como parâmetro e retorna um array que possui apenas as notas acima da média

let grades = [9, 10, 8, 2, 1, 9, 0, 6, 7, 3, 8]

function media(array){
    let soma = 0
    array.forEach(element =>
        soma = soma + element
    )
    let mediaNotas = soma/array.length
    return mediaNotas
}

console.log(media(grades))
//---------------------------------------------------------------------------------
function aboveAverageGrades(array, media) {

    let filter = array.filter(element => element > media);
    return filter
}

console.log(aboveAverageGrades(grades, media(grades)))
//---------------------------------------------------------------------------------

function averageGrades(array,media){
    let filter = array.filter(element => element = media) 
    return filter
}
console.log(averageGrades(grades,media(grades)));

//---------------------------------------------------------------------------------

function belowAverageGrades(array, media) {
    let filtered = array.filter(element => element < media)
    return filtered
}
console.log(belowAverageGrades(grades, media(grades)));

//---------------------------------------------------------------------------------

function sumOfAllGrades(array) {
    let soma = 0
    array.forEach(element => soma = soma + element )
    return soma;
}
console.log(sumOfAllGrades(grades))

//---------------------------------------------------------------------------------

function averageOfGrades(array) {
    let soma = 0
    array.forEach(element =>
        soma = soma + element
    )
    let mediaNotas = soma/array.length
    return mediaNotas
}
console.log(averageOfGrades(grades))
//---------------------------------------------------------------------------------

function maxGrade(array) {
let maior = array[0];
    for (let i = 0; i<array.length ; i++){
        if(maior > array[i]){
            maior = maior;
        }else if(maior == array[i]){
            maior = array[i];
        }else if(array[i] > maior){
            maior = array[i];
        }
    }
    return maior
}
console.log(maxGrade(grades));


//---------------------------------------------------------------------------------

function minGrade(array) {
let menor = array[0];
const menorElement = (element) => menor >= element[index] ? menor = element[index]: menor = menor;
array.forEach(element , menorElement);
return menor;
}
console.log(minGrade(grades))




//---------------------------------------------------------------------------------