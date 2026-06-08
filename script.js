const contadores = document.querySelectorAll(".contador");

contadores.forEach(contador => {

    const atualizar = () => {

        const alvo = +contador.getAttribute("data-target");
        const atual = +contador.innerText;

        const incremento = alvo / 100;

        if(atual < alvo){

            contador.innerText =
            Math.ceil(atual + incremento);

            setTimeout(atualizar, 20);

        }else{

            contador.innerText = alvo;
        }
    }

    atualizar();
});

window.addEventListener("scroll", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const posicao = card.getBoundingClientRect().top;

        if(posicao < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".card").forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";
});