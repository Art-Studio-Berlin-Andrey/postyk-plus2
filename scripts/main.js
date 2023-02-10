


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {

	document.getElementById("myDropdown").classList.toggle("show");

  }

function myFunction1() {

  document.getElementById("myDropdown1").classList.toggle("show1");
  
  }

function myFunction2() {
  
  document.getElementById("myDropdown2").classList.toggle("show2");
  
  }

function myFunction3() {
  
  document.getElementById("myDropdown3").classList.toggle("show3");
	
 }

function myFunction4() {
  
  document.getElementById("myDropdown4").classList.toggle("show4");
	  
 }

 function myFunction5() {
  
	document.getElementById("myDropdown5").classList.toggle("show5");
		
}


  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {

	if (!event.target.matches('.dropbtn')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];


		if (!openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

  
  // Close the dropdown menu if the user clicks outside of it
  /*window.onclick = function(event) {*/

	if (!event.target.matches('.dropbtn1')) {
	  var dropdowns1 = document.getElementsByClassName("dropdown-content1");
	  var i;
	  for (i = 0; i < dropdowns1.length; i++) {
		var openDropdown1 = dropdowns1[i];


		if (!openDropdown1.classList.contains('show1')) {
		  openDropdown1.classList.remove('show1');
		}
	  }
	}


  if (!event.target.matches('.dropbtn2')) {
	  var dropdowns2 = document.getElementsByClassName("dropdown-content2");
	  var i;
	  for (i = 0; i < dropdowns2.length; i++) {
		var openDropdown2 = dropdowns2[i];


		if (!openDropdown2.classList.contains('show2')) {
		  openDropdown2.classList.remove('show2');
		}
	  }
	}

 if (!event.target.matches('.dropbtn3')) {
		var dropdowns3 = document.getElementsByClassName("dropdown-content3");
		var i;
		for (i = 0; i < dropdowns3.length; i++) {
		  var openDropdown3 = dropdowns3[i];
  
  
		if (!openDropdown3.classList.contains('show3')) {
			openDropdown3.classList.remove('show3');
		  }
		}
	  }
	  
	  
	   if (!event.target.matches('.dropbtn4')) {
		var dropdowns4 = document.getElementsByClassName("dropdown-content4");
		var i;
		for (i = 0; i < dropdowns4.length; i++) {
		  var openDropdown4 = dropdowns4[i];
  
  
		if (!openDropdown4.classList.contains('show4')) {
			openDropdown4.classList.remove('show4');
		  }
		}
	  }
  

	  if (!event.target.matches('.dropbtn5')) {
		var dropdowns5 = document.getElementsByClassName("dropdown-content5");
		var i;
		for (i = 0; i < dropdowns5.length; i++) {
		  var openDropdown5 = dropdowns5[i];
  
  
		if (!openDropdown5.classList.contains('show5')) {
			openDropdown5.classList.remove('show5');
		  }
		}
	  }





  }







function createBodyBackground() {

    let outBackground = document.getElementById("outBackground").value;  

    let out = document.getElementById("out");

    out.style.background = outBackground;

}

function createText() {

    let text = document.getElementById("text").value;

	
    let inText = document.getElementById("inText");
    inText.innerHTML = text; 
	
	let svg = document.getElementById('svg').value;
	inText.innerHTML = svg;
	
	
    let textsize = document.getElementById("font size").value;
    inText.style.fontSize = textsize + "px";

   /* let poziciyaText = document.getElementById("poziciyaText").value;
    inText.style.paddingLeft = poziciyaText + 'px';*/

    let colorText = document.getElementById("colorText").value;
    inText.style.color = colorText;


}

function createText1() {

  

  let textsize = document.getElementById("font size").value;

    inText.style.fontSize = textsize + "px";


   /* let poziciyaText = document.getElementById("poziciyaText").value;
    inText.style.paddingLeft = poziciyaText + 'px';*/

    let colorText = document.getElementById("colorText").value;
    
    inText.style.color = colorText;
  
}

let saveFile = document.getElementById('save');
saveFile.onclick = download;

function download() {
    var link = document.createElement('a');
    var str = document.getElementById("text").value;
    str = str.split("\u000A").join("\u000D\u000A");
    bl = new Blob([str]);
    link.href = URL.createObjectURL(bl);
    if (document.getElementById("text").name != "") {
        link.download = document.getElementById("text").name;
    } else {
        link.download = "text.txt";
    }
    var e = new MouseEvent("click");
    link.dispatchEvent(e);
}
//Открыть файл
let text1 = document.getElementById('text1');
text1.onchange = function() { readfile(this.files) };

function readfile(files) {
    var text = files[0];
    document.getElementById("text1").name = text.name;
    console.dir(text);
    var reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("text").value = e.target.result;
    };
    reader.readAsText(text);
}


