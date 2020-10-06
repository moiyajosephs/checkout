// resources/javascript/index.js
function myFunction(){
    var ship = document.getElementById("shipaddr");
    if (ship.checked){
        var hide = document.getElementById('ship');
        hide.style.display = "none";
        /*
        var shipvalidate = document.querySelector('#shipaddr');
        var countryvalidate = document.querySelector('#shipcountry');
        var statevalidate= document.querySelector('#shipstate');
        var zipvalidate= document.querySelector('#shipzip');

        countryvalidate.setAttribute('required','required');
        shipvalidate.setAttribute('required','required');
        statevalidate.setAttribute('required','required');
        zipvalidate.setAttribute('required','required');
        */
    }
    else{ //when not clicked make required
        var show = document.getElementById('ship');
        show.style.display = "block";

        
        var shipvalidate = document.querySelector('#shippaddr');
        var countryvalidate = document.querySelector('#shipcountry');
        var statevalidate= document.querySelector('#shipstate');
        var zipvalidate= document.querySelector('#shipzip');

        countryvalidate.setAttribute('required','required');
        shipvalidate.setAttribute('required','required');
        statevalidate.setAttribute('required','required');
        zipvalidate.setAttribute('required','required');
        
      
    }
    
}