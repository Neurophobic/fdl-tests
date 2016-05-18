'use strict';


$(document).ready(function()


{

function getRandomClass()
{
    //Store available css classe
    var classes = new Array('blue', 'green', 'purple', 'orange');

    //Get a random number from 0 to 4
    var randomNumber = Math.floor(Math.random()*4);

    return classes[randomNumber];
}


    $('a').hover(function(e)
    {
        var randomClass = getRandomClass();
        
              $(e.target).attr('class', randomClass);
      
      
      
    });
});
