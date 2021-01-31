var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function inputtest() {
    var inputnam=document.getElementById("username").value;
    var passwordtest=document.getElementById("password").value;



    if(inputnam=="mahdi"  && passwordtest=="1995" ){
      
        window.location.replace("home-page.html");
    }
    else{
        alert("أعد المحاولة");
      
    }
    console.log(username);
}
