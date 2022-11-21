const sexo = document.getElementById('sexo');
const dtNascimento = document.getElementById('dtNascimento');
const idade = document.getElementById('idade');
const residencia = document.getElementById('residencia');
const convenioMedico = document.getElementById('convenioMedico');
const carteirinha = document.getElementById('carteirinha');
const sus = document.getElementById('sus');
const alergias = document.getElementById('alergias');
const doencas = document.getElementById('doencas');
const tipoSanguineo = document.getElementById('tipoSanguineo');

function calculaIdade() {
    const dataNascimento = new Date();
    const dataAtual = new Date();
    
    let anos = dataAtual.getFullYear() - dataNascimento.getFullYear();

    if(dataAtual.getMonth() !== dataNascimento.getMonth()){
        if(dataAtual.getMonth() < dataNascimento.getMonth()){
            anos --;
        }
    }
    else {
        if(dataAtual.getDate() < dataNascimento.getDate) {
            anos --;
        }
    }

    dtNascimento.innerText = '';
    idade.innerText = '- ' + anos + ' anos';
}

onload = () => {

    sexo.innerText = '';

    calculaIdade();

    residencia.innerText = '';
    convenioMedico.innerText = '';
    carteirinha.innerText = '';
    sus.innerText = '';
    alergias.innerText = '';
    doencas.innerText = '';
    tipoSanguineo.innerText = '';
}

