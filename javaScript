// ===============================
// MENSAGEM DO FORMULÁRIO
// ===============================

const formulario = document.getElementById("formContato");

if (formulario) {

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Obrigada pelo contato! 💕 Em breve retornarei sua mensagem.");

        formulario.reset();

    });

}

// ===============================
// ROLAGEM SUAVE
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.id = "topo";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        botaoTopo.style.display = "block";

    }else{

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// ANO AUTOMÁTICO NO RODAPÉ
// ===============================

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML = `© ${new Date().getFullYear()} Lívia Gregoski Beauty`;

}
