function start() {

    const btn = document.getElementById('ok')
    btn.onclick = validarSenha
  }

function validarSenha() {
    const usuario1 = 'admin'
    var usuario2 = document.getElementById('usuario').value
    const senha1 = 'abc123'
    var senha2 = document.getElementById('password').value

    if (usuario1 === usuario2 && senha1 === senha2) {
        document.getElementById('result').style.color = 'green'
        document.getElementById('result').innerHTML = 'Usuario e senha estão corretos'
        pagina()

    } else if (usuario2 === '' && senha2 === '') {
        document.getElementById('result').style.color = 'yellow'
        document.getElementById('result').innerHTML = 'Inserir usuario e senha, por favor'
        
    } else {
        document.getElementById('result').style.color = 'red'
        document.getElementById('result').innerHTML = 'Usuario e/ou senha estão incorretos'

    }
}

function pagina() {
    const pag = document.getElementById('login').onclick
    location.href = 'pag.html'
}

start()






