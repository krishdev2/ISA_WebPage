// JavaScript Document
function btnUniv(){
		document.getElementById("isaTxt").style.display="none";
		document.getElementById("univTxt").style.display="block";
		
	
	}
function btnIsa(){
		document.getElementById("univTxt").style.display="none";
		document.getElementById("isaTxt").style.display="block";
		
	}
function slide(){
	var slides = document.getElementById("myimage");
	if (slides.src.match("col1")) {
        slides.src = "col2.jpg";
		$("#myimage").fadeOut()
		 $("#myimage").fadeIn()
    } 
	else if (slides.src.match("col2")) {
        slides.src = "col3.jpg";
		$("#myimage").fadeOut()
		 $("#myimage").fadeIn()
    } else {
        slides.src = "col1.jpg";
		$("#myimage").fadeOut()
		 $("#myimage").fadeIn()
    }
	/*for(var i=1; i<3;i++){
		slides.style.backgroundImage="url(col1.jpg)";
		}*/
		setTimeout(slide, 5000);
	}
slide();

function change(getId){
	var idToChange = document.getElementById(getId);
	var slides = document.getElementById("myimage");
	if(getId=="changeImgPrev"){
	if (slides.src.match("col1")) {
        slides.src = "col3.jpg";
    } 
	else if (slides.src.match("col2")) {
        slides.src = "col1.jpg";
    } else {
        slides.src = "col2.jpg";
    }
	}
	if(getId=="changeImgNext"){
	if (slides.src.match("col1")) {
        
		/*$("#myimage").animate({
          height: 'toggle'
        },"slow");*/
		$("#myimage").animate({width: '100%', opacity: '1'}, "slow");
    slides.src = "col2.jpg";
	} 
	else if (slides.src.match("col2")) {
		/*$("#myimage").animate({
          height: 'toggle'
        },"slow");
		$("#myimage").animate({
          height: 'toggle'
        },"slow");*/
        slides.src = "col3.jpg";
    } else { 
		/*$("#myimage").animate({
          height: 'toggle'
        },"slow");
		$("#myimage").animate({
          height: 'toggle'
        },"slow");*/
        slides.src = "col1.jpg";
    }
	}
	}