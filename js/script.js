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
    const dataNascimento = new Date(1993,2,23);
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

    dtNascimento.innerText = '23/03/1993';
    idade.innerText = '- ' + anos + ' anos';
}

onload = () => {

    sexo.innerText = 'Masculino';

    calculaIdade();

    residencia.innerText = 'São Bernardo do Campo - SP';
    convenioMedico.innerText = 'Unimed';
    carteirinha.innerText = '0 994 8628 50282400-7';
    sus.innerText = '898002941323505';
    alergias.innerText = 'Não';
    doencas.innerText = 'Rinite Alérgica';
    tipoSanguineo.innerText = 'O+';
}

