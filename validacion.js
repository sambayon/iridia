window.addEventListener('load', ()=> {
    const form = document.querySelector('formBasico')
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('email')
    const asunto = document.getElementById('asunto')
    const apellido = document.getElementById('apellido')
    const mensaje = document.getElementById('mensaje')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    const validaCampos = ()=> {
        const nombreValor = nombre.value.trim()
        const apellidoValor = apellido.value.trim()
        const mensajeValor = mensaje.value.trim()
        const asuntoValor = mensaje.value.trim()
        const emailValor = email.value.trim();

        //validando campo email
        if(!emailValor){
            validaFalla(email, 'Campo vacío')            
        }else if(!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido')
        }else {
            validaOk(email)
        }
    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

})