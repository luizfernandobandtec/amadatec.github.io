var nome_s;
var nickname_s;
var email_;
var email_c_s;
var senha_s;
var senha_s_c;

function cadastrar(){
  email_s = email.value;
  email_c_s = email_c.value;
  senha_s = senha.value;
  senha_s_c = senha_c.value;
  if(email_s != email_c_s){
    alert("E-mails não conferem, por favor, corrija-os.")
    nickname_s = null;
  }
  if (senha_s != senha_s_c){
    alert("Senhas não conferem, por favor, corrija-as.")
    nickname_s = null;
  }
  if ((nome.value == "") || (nickname.value == "") || (email.value == "") || (email_c.value == "") || (senha.value == "") || (senha_c.value == "")){
    alert("Falha ao cadastrar, um ou mais itens em branco.")
  }else if((email_s == email_c_s) && (senha_s == senha_s_c)){
    nome_s = nome.value;
    nickname_s = nickname.value;
    email_s = email.value;
    email_c_s = email_c.value;
    senha_s = senha.value;
    senha_s_c = senha_c.value;
    alert("Cadastrado com sucesso!")
  }
}
function logar(){
  if(nickname_login.value == nickname_s && senha_login.value == senha_s){
    alert("Logado com sucesso!");
  }else{
    alert("Falhar ao logar, nickname ou senha incorretos.");
  }
}
