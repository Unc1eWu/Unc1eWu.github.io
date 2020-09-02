function change_pic(){
	
    var button = document.getElementById("button");
    var picts = document.getElementById("pics");

    button.onclick = function(){
        if(picts.getAttribute("src",2) == "../img/sofa.jpg"){
            
            picts.setAttribute("src","../img/IMG_8668.jpg");
        }else{
            picts.setAttribute("src","../img/sofa.jpg");
        };
    }
}
change_pic();