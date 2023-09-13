const inputss = document.getElementById("idk")
inputss.addEventListener("submit",function(e) {
e.preventDefault()
    const sport1 = document.getElementById("primo")
    const sport2 = document.getElementById('secondo')
    const sport3 = document.getElementById('terzo')
    const sport4 = document.getElementById('quarto')
    const sport5 = document.getElementById("quinto")

    
}
)
const newsport = {
    primo: sport1.value,
    secondo: sport2.value,
    terzo: sport3.value,
    quarto: sport4.value,
    quinto: sport5.value,
}
console.log("newport", newsport)


const newContactCard = document.createElement('div') 
newContactCard.classList.add('contact-card')
newContactCard.innerHTML = `
<p>${newContact.primo} ${newContact.secondo}</p>
<p>${newContact.terzo}</p>
<p>${newContact.quarto}</p>
<p>${newContact.quinto}</p>
<button onclick="deleteCard(event)">ELIMINA</button>
`
const sectionForCards = document.getElementById('newdiv')
  sectionForCards.appendChild(newContactCard)

  const deleteCard = function (e) {
    const clickedButton = e.target}
