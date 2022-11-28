// Selectores Globales
const contenedorGraficas = document.querySelector('#contenedor-graficas')

// Variables Globales
let arrayNumeros = []

// Cargar documento
document.addEventListener('DOMContentLoaded',() => {
    consutarAPI()
})

const consutarAPI = async () => {
    const url = 'data.json'
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    generarGraficas(resultado)
}

function generarGraficas(datos){
    datos.forEach(grafica => {
        const {day, amount} = grafica
        numeroMayor(amount)
        
        const divBarra = document.createElement('DIV')
        divBarra.classList.add('barra')

        const divGrafica = document.createElement('DIV')
        divGrafica.style.height = `${amount * 2}px`
        divGrafica.id = amount

        const infoOculta = document.createElement('DIV')
        infoOculta.classList.add('infoOculta')
        infoOculta.textContent = amount
      
        const pGrafica = document.createElement('P')
        pGrafica.textContent = day
        pGrafica.classList.add('my-2','text-center')

        divBarra.appendChild(divGrafica)
        divBarra.appendChild(pGrafica)
        divGrafica.appendChild(infoOculta)
        contenedorGraficas.appendChild(divBarra)
    })
}

function numeroMayor(numeros){
    arrayNumeros.push(numeros)
    let mayor = 0;
        for(let i = 0; i < arrayNumeros.length; i++){
            if(arrayNumeros[i] > mayor){
                mayor = arrayNumeros[i];
            }
        }
    pintarGraficaMayor(mayor)
}

function pintarGraficaMayor(mayor){
    const graficas = document.querySelectorAll('.barra div')
    graficas.forEach(function(grafica){
        const pintar = grafica.id
        if(parseFloat(pintar) === mayor){
            grafica.classList.add('barraAzul')
        }
    })
}
