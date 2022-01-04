document.addEventListener('DOMContentLoaded', () => {

    const tela = document.querySelector('#tela');
    const context = tela.getContext('2d');

    const pincel = {
        ativo: false,
        movimento: false,
        pos: { x: 0, y: 0 },
        posAnterior: { x: 0, y: 0 },
    }

    tela.width = 700;
    tela.height = 500;

    context.lineWidth = 5;
    context.strokeStyle = 'red';

    const desenharLinha = (linha) => {
        context.beginPath();
        context.moveTo( linha.posAnterior.x, linha.posAnterior.y );
        context.lineTo( linha.pos.x, linha.pos.y );
        context.stroke();
    } 

    tela.onmousedown = (e) => { pincel.ativo = true }
    tela.onmouseup = (e) => { pincel.ativo = false }

    tela.onmousemove = (e) => { 
        pincel.pos.x = e.clientX;
        pincel.pos.y = e.clientY;
        pincel.movimento = true;
    }

    const ciclo = () => {
        if ( pincel.ativo && pincel.movimento && pincel.posAnterior ) {
            desenharLinha({ pos: pincel.pos, posAnterior: pincel.posAnterior });
            pincel.movendo = false;
        }
        pincel.posAnterior = { x: pincel.pos.x, y: pincel.pos.y }

        setTimeout(ciclo, 20);
    }

    ciclo();

});