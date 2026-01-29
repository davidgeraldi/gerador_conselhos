const botaoMudarConselho = document.querySelector('.dado');
const idDoConselho = document.querySelector('.titulo-conselho');
const conselho = document.querySelector('.texto-conselho');

// botaoMudarConselho.addEventListener('click', () => {
//     mudarConselhoEId();
// })
botaoMudarConselho.addEventListener('click', mudarConselhoEId);//simplificando


async function criarConselhosAleatorios() {
    try {
        const url = "https://api.adviceslip.com/advice";
        const resposta = await fetch(url);
        if (!resposta.ok){
            throw new Error("Erro ao tentar buscar as informações da API")
        }
        return await resposta.json();
    } catch (err) {
        console.log(err);
    }
}

async function mudarConselhoEId() {
    try{
        objetoConselho = await criarConselhosAleatorios();
        idDoConselho.innerText = `CONSELHO #${objetoConselho.slip.id}`;
        conselho.innerText = `${objetoConselho.slip.advice}`;
    }catch(err){
        console.log(err);
    }
}