window.onload = () => {
    mostrar_pant()

}
const card=document.querySelector('#card_user')


function mostrar_pant(){
    const recoverUser=JSON.parse(localStorage.getItem('usuario'))
    const listUser=[]
    listUser.push(recoverUser)
    listUser.forEach(element =>{
        const div=document.createElement('div')
        div.innerHTML = `
        <p>${element.name_user}</p>
        <p>${element.email_user}</p> `
        card.appendChild(div)

        
        console.log(listUser)

    })
}













