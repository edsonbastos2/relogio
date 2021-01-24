function criarHoraDosSegundos(segendos) {
    const data = new Date(segendos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

console.log(criarHoraDosSegundos(20))

const relogio = document.querySelector('.relogio');
let timer;
let segundos = 0;

function iniciaRelogio() {
    timer = setInterval(() => {
        segundos++
        relogio.innerHTML = criarHoraDosSegundos(segundos)
    }, 1000);
}

document.addEventListener('click', (e) => {
    let el = e.target;
    if (el.classList.contains('zera')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        relogio.classList.remove('pausado')
    }
    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio()
    }
    if (el.classList.contains('pausa')) {
        relogio.classList.add('pausado')
        clearInterval(timer)
    }

})
