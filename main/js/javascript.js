var campoNome = document.querySelector("#name")
var campoEmail = document.querySelector("#email")
var campoDocumentation = document.querySelector("#documentation")
var campoLocalizacao = document.querySelector("#localizacao")


function validarInputs(event) {

    event.preventDefault()

    if (campoNome.value.length == 0) {
        document.querySelector("#erroName").style.display = "flex"

        campoNome.style.border = "1px solid red"

    } else {
        document.querySelector("#erroName").style.display = "none"

        campoNome.style.border = "1px solid green"

    }

    if (campoEmail.value.length == 0) {

        document.querySelector("#erroEmail").style.display = "flex"

        campoEmail.style.border = "1px solid red"

    } else {

        document.querySelector("#erroEmail").style.display = "none"

        campoEmail.style.border = "1px solid green"

    }

    if (campoDocumentation.value.length == 0) {

        document.querySelector("#erroDocumentation").style.display = "flex"

        campoDocumentation.style.border = "1px solid red"

    } else {

        document.querySelector("#erroDocumentation").style.display = "none"

        campoDocumentation.style.border = "1px solid green"

    }

    if (campoLocalizacao.value.length == 0) {

        document.querySelector("#erroLocalizacao").style.display = "flex"

        campoLocalizacao.style.border = "1px solid red"

    } else {

        document.querySelector("#erroLocalizacao").style.display = "none"

        campoLocalizacao.style.border = "1px solid green"

    }

}