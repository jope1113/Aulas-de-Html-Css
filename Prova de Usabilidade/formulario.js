
function recebernome() {
    // Receber dados do campo "form_turma_usuario" do formulario quando usuario digitar valor no campo
    var nomeUsuario = document.getElementById("form_nome_usuario").value;
    //console.log(nomeUsuario);

    // Enviar os dados para o formulario do arquivo destino.html utilizando o atributo ID
    document.getElementById("receber_nome_usuario").value = nomeUsuario;

    // Enviar os dados para o arquivo destino.html utilizando o atributo ID
    document.getElementById("valor_nome_usuario").innerHTML = nomeUsuario;
}
