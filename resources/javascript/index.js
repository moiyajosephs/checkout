// resources/javascript/index.js
function myFunction(){
    var ship =document.getElementById("ship-addr");
    if (ship.checked){
        var hide = document.getElementById('ship');
        hide.style.display = "none";
    }
    else{ //when not clicked make required
        var show = document.getElementById('ship');
        show.style.display = "block";
        var shipvalidate = document.getElementById('ship-address').value;
        if (shipvalidate==""){
            
        }
        
    }
    
}