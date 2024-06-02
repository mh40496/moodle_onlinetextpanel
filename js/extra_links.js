document.addEventListener("DOMContentLoaded", function() 
{
    var text = document.getElementById( "extraLinks" );
    var linksArr = links.split( " " );
    text.innerHTML = "<div id='assign-header'>Additional Links:</div>";

    for( var i = 0; i < linksArr.length; i++ ) {
        if( i != 0 )
            text.innerHTML += "<br />";
        text.innerHTML += '<a href="'+linksArr[i]+'" target="_blank" rel="noopener noreferrer"></tab>'+linksArr[i]+'</a>';
    }
});
