//Contato de clientes
function pegarEmail() {
    var quebraDeLinha = '%0D%0A';

    var nome = document.getElementById('id_nome')
    var telefone = document.getElementById('id_telefone')
    var mensagem = document.getElementById('id_mensagem')

    if (nome || telefone || mensagem == '') {
        window.alert('Preencha os campos!')
    } else {
        var body = 'Nome: ' + escape(nome.value) + quebraDeLinha +
            'Telefone: ' + escape(telefone.value) + quebraDeLinha +
            'Mensagem: ' + escape(mensagem.value);

        var link = "mailto:wesley.santos140300@gmail.com" +
            "?cc=" + // Para add mais e-mails
            "&subject=" + escape("Contato de Cliente Website") + // Assunto do e-mail
            "&body=" + body; // Texto do e-mail

        window.location.href = link;
    }


}