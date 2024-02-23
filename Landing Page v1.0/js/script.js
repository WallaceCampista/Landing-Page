// Configurando funcionalidade do icone olho (revelhar senha)
const forms= document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon");

    

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if(password.type === "password"){   
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})

// Configurando avanço automatico de imagens
// let count = 1;
// document.getElementById("radio1").checked = true

// setInterval( function(){
//     nextImage();
// }, 5000)

// function nextImage(){
//     count++;
//     if(count>4){
//         count = 1;
//     }

//     document.getElementById("radio"+count).checked = true;

// }

//Mudança para o modo claro
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o botão de alternância de modo claro
    var btnLightMode = document.getElementById('btn-lightmode');

    // Adiciona um ouvinte de evento de clique ao botão
    btnLightMode.addEventListener('click', function () {
        // Seleciona o elemnto que deseja alterar a classe
        var container = document.querySelector('.darkmode-container');
        var title = document.querySelector('.darkmode-titulo');
        var textos = document.querySelector('.darkmode-form-link');

        //Alterando classes do container
        container.classList.remove('darkmode-container');
        container.classList.add('lightmode-container');
        
        //Alterando classes do Titulo
        title.classList.remove('darkmode-titulo');
        title.classList.add('lightmode-titulo');
        
        //Alterando classes dos textos
        textos.classList.remove('darkmode-form-link');
        textos.classList.add('lightmode-form-link');
    });
});

//Mudança para o modo escuro
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o botão de alternância de modo claro
    var btnDarkMode = document.getElementById('btn-darkmode');

    // Adiciona um ouvinte de evento de clique ao botão
    btnDarkMode.addEventListener('click', function () {
        // Seleciona o elemnto que deseja alterar a classe
        var container = document.querySelector('.lightmode-container');
        var title = document.querySelector('.lightmode-titulo');
        var textos = document.querySelector('.lightmode-form-link');

        //Alterando classes do container
        container.classList.remove('lightmode-container');
        container.classList.add('darkmode-container');

        //Alterando classes do Titulo
        title.classList.remove('lightmode-titulo');
        title.classList.add('darkmode-titulo');

        //Alterando classes dos textos
        textos.classList.remove('lightmode-form-link');
        textos.classList.add('darkmode-form-link');
    });
});