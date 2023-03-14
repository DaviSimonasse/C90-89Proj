function addUser() {
    let player1 = document.getElementById("player1").value
    let player2 = document.getElementById("player2").value
    localStorage.setItem("player1-nome",player1)
    localStorage.setItem("player2-nome",player2)
    window.location = "game_page.html"
}