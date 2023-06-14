let vez = 1;
let fim = false;
function alternar(casa) {

    const figura = `url('.img/figura${vez}.jpg')`;
    const casaVez = document.getElementById(casa);
    let imagemFundo = casaVez.style.backgroundImage;

    if (imagemFundo === "" && !fim) {
        casaVez.style.backgroundImage = figura;
        fim = verificar();
        if (fim) {
          alert(`o jogador ${vez} venceu`);
          reiniciar();
        } else {
          vez = vez === 1 ? 2 : 1;
        }
    } /*else if (fim) {
        let reinicia = confirm("reinicia?");
        if (reinicia) {
            reiniciar();
        }
    }*/
}

function casasIguais (a, b, c) {

    const casaA = document.getElementById(`casa${a}`);
    const casaB = document.getElementById(`casa${b}`);
    const casaC = document.getElementById(`casa${c}`);

    const fundoA = casaA.style.backgroundImage;
    const fundoB = casaB.style.backgroundImage;
    const fundoC = casaC.style.backgroundImage;

    if (fundoA === fundoB && fundoB === fundoC && fundoA != "") {
        return true;
    } else {
        return false;
    }
}

function verificar() {
    if (casasIguais(1,2,3) ||
       casasIguais(4,5,6) ||
       casasIguais(7,8,9) ||
       casasIguais(1,4,7) ||
       casasIguais(2,5,8) ||
       casasIguais(3,6,9) ||
       casasIguais(1,5,9) ||
       casasIguais(3,5,7)) {
        return true;
       } else {
        return false;
       }
}

function reiniciar() {
    let num = 1;
    while (num <= 9) {
        let casa = document.getElementById(`casa${num}`);
        casa.style.backgroundImage = "";
        num++;
    }
    vez = 1;
    fim = false;
}