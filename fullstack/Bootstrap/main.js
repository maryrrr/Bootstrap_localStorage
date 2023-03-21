const name_user=document.querySelector('#usuario')
const email_user= document.querySelector('#exampleInputEmail1')
const passw1=document.querySelector('#pass1')
const passw2=document.querySelector('#pass2')
const botton=document.querySelector('#login')
const msg=document.querySelector('#msg')
const myForm=document.querySelector('#my-form')
//const inputs = document.querySelectorAll('#my-form input')

console.log(myForm)

const valid_email={
        passw1: /^.{4,12}$/i, 
        email_user: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i
    }



function sendForm(e){
    e.preventDefault()
    const user={
        name_user:name_user.value,
        email_user:email_user.value,
        passw1:passw1.value,
        passw2:passw2.value,
    }

    localStorage.setItem('usuario',JSON.stringify(user))
    validarFormulario()
    mostrar_pant()
    setTimeout(() => {
        location.href='users.html'
    }, 3000);
}




function validarFormulario(){
    const recoverUser=JSON.parse(localStorage.getItem('usuario')) 
    if (recoverUser.name_user==="" || recoverUser.email_user==="" || recoverUser.passw1==="" || recoverUser.passw2===""){
        msg.innerHTML='<p>Tienes que rellenar todos los campos</p>'
    
    }else{
        msg.innerHTML='<p>Corecto</p>'
        myForm.reset()
    }


    if (valid_email.email_user.test(recoverUser.email_user)){
        msg.innerHTML='<p>invalido</p>'
        console.log('corecto')
    }else{
         msg.innerHTML='<p>Corecto</p>'
         console.log('error')
    }


    if (recoverUser.passw1 !== recoverUser.passw2){
        document.getElementById("error").classList.add("mostrar")
        console.log('son diferentes')
        

    }else {
    document.getElementById("ok").classList.remove("ocultar");
    console.log('iguales contr')
    
}
    setTimeout(function(){
        msg.innerHTML="";
    },3000);
}


myForm.addEventListener('submit', sendForm)