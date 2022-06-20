function converteTemperatura(temperatura, escalaOrigem) {
    //convert the fahrenheit and kelvin values
    if (escalaOrigem === "celsius") {
        return {
            conversionF: (temperatura * 9 / 5) + 32,
            conversionK: temperatura + 273.15
        }
        //convert the celsius and kelvin values
    } else if (escalaOrigem === "fahrenheit") {
        return {
            conversionC: (temperatura - 32) * 5 / 9,
            conversionK: temperatura + 273.15
        }
        //convert the celsius and fahrenheit values
    } else if (escalaOrigem === "kelvin") {
        return {
            conversionC: temperatura - 273.15,
            conversionF: (temperatura - 273.15) * 9 / 5 + 32
        }
    } else {
        return ' Erro. Parâmetro inválido'
    }
}

console.log(converteTemperatura(30, 'celsius'))
console.log(converteTemperatura(30, 'fahrenheit'))
console.log(converteTemperatura(30, 'kelvin'))
console.log(converteTemperatura(30, 'fah', 'celsius'))