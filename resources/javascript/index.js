// resources/javascript/index.js
function myFunction(){
    var ship =document.getElementById("ship-addr");
    if (ship.checked){
        var hide = document.getElementById('ship');
        hide.style.display = "none";
    }
    else{
        var show = document.getElementById('ship');
        show.style.display = "block";
    }
    
}