const datos = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];


const dia = document.querySelectorAll('.dia-semana')

dia.forEach(dias => {
  
  dias.addEventListener('click', e => {
   
    datos.map(cantidad => {
      if(dias.children[1].textContent === cantidad.day){

        const newDiv = document.createElement('DIV')
        const newP = document.createElement('P')

          newDiv.style.backgroundColor = 'black'
          newDiv.style.borderRadius = '.3rem'
          newDiv.style.padding = '.6rem .5rem'
          newDiv.style.textAlign = 'left'
          newDiv.classList.add('mostrar')
          newP.style.fontSize = '1.1rem'
          newP.style.color = 'white'
          newDiv.appendChild(newP)
          newP.textContent = `$${cantidad.amount}`
          // dias.children[0].style.height = `${cantidad.amount}px`
          dias.prepend(newDiv)

      }
    })
   })
})

dia.forEach(dias => {
  
  document.addEventListener('DOMContentLoaded', e => {
    datos.map(cantidad => {
      if(dias.children[1].textContent === cantidad.day){
        let big = 3;
        big = big * cantidad.amount
          dias.children[0].style.height = `${big}px`
      }
    })
   })
})