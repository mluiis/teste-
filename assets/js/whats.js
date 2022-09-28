$(document).ready(function () {
    $('#tel').mask('(00) 00000-0000');
})

function tel(tel) {
    if (mascaraInteiro(tel) == false) {
        event.returnValue = false; 
    }

    return formataCampo(tel, '(00) 00000-0000', event);
}

// WhatsApp
function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0)
            return true;
    return false;
}

// isso identifica o elemento no formulario.html
const $form = document.querySelector('#form');
// Enviar
const buttonSubmit = document.querySelector('#submit');
// Para Desktop
const urlDesktop = 'https://web.whatsapp.com/';
// Para Celular
const urlMobile = 'whatsapp://';
// Aqui coloque o número do WhatsApp que precisa funcionar.
const phone = '557192032468';


let tiposDeBolo = '';

// Aqui mande os dados que estão lá no formulario.html
$form.addEventListener('submit', (event) => {
    let checkboxes = document.querySelectorAll(".checkboxes");

    for(let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            tiposDeBolo = ' '+ checkboxes[i].value
        } 
    }
    
    setTimeout(() => {
        let nome = document.querySelector('#nome').value
        let tel = document.querySelector('#tel').value
        let endereco = document.querySelector('#endereco').value
        let data = document.querySelector('#data').value
        let horario = document.querySelector('#horario').value
        let qnt = document.querySelector('#qnt').value
        
        let chantininho = document.querySelector('#chantininho').value
        let pastaAmericana = document.querySelector('#pasta').value
        let pastaBoloDeCasamento = document.querySelector('#torta').value

        let mensagem = document.querySelector('#mensagem').value
        // Aqui cria os dados para identificar cada elemento e envia uma mensagem via WhatsApp
        let message = 'send?phone=' + phone + '&text=*_Meu Pedido_*%0A*Contato*%0A%0A*Meu Dados:*%0A' + '%0A*Nome*%0A' + nome + '%0A*Telefone*%0A' + tel + '%0A*Endereço*%0A' + endereco + '%0A*data*%0A' + data +'%0A*horario*%0A'+ horario + '%0A *Quantidade de Pessoas*%0A' + qnt + '%0A*Tipo de bolo*%0A' + tiposDeBolo + '%0A*Mensagem*%0A' + mensagem + ''

        if (isMobile()) {
            window.open(urlMobile + message)
        } else {
            window.open(urlDesktop + message)
        }
    }
    );
    event.preventDefault()
}
);
