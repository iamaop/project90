function login(){
    var player1_name=document.getElementById("player1").value;
var player2_name=document.getElementById("player2").value;
    window.location="game_page.html";
    localStorage.setItem("player1",player1_name);
    localStorage.setItem("player2",player2_name);

}