function pesquisarUsuario(event) {

    event.preventDefault()

    var usuario = document.getElementById("usuario").value
    console.log(usuario)

    fetch("https://api.github.com/users/" + usuario).then(function (response){
    response.json().then(function(dados){
            document.getElementById("nome").textContent = dados.login
            document.getElementById("repositorios").textContent = "Repositórios: " + dados.public_repos
            document.getElementById("seguindo").textContent = "Seguindo: " + dados.following
            document.getElementById("seguidores").textContent = "Seguidores: " + dados.followers
            document.getElementById("imagem").src = dados.avatar_url
    })
})

}