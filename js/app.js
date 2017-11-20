


var  inputadd = document.getElementsByClassName("js-add-list")[0].firstElementChild.children[1];
var buttonadd = document.getElementsByClassName("js-add-list")[0].firstElementChild.children[2].firstElementChild;

buttonadd.addEventListener('click',function(event){

if(inputadd.value == '') {
	alert("Por favor ingrese su lista esta vacio");
	inputadd.focus();
} 
else {


var  grandfather = document.getElementsByClassName("board")[0];
var  hijo1 = document.createElement("div");
var  hijo2 = document.createElement("div");
hijo1.setAttribute("class","red");
grandfather.appendChild(hijo1);
hijo2.setAttribute("class","green");
grandfather.appendChild(hijo2);
//var father = document.getElementsByClassName("green")[0];
var divhijo1 = document.createElement("div");
divhijo1.setAttribute("class","blue");
hijo1.appendChild(divhijo1);

var  divhijo11 = document.createElement("div");
divhijo11.setAttribute("class","classdiv"); 
divhijo1.appendChild(divhijo11);

var h2 = document.createElement("h2");
h2.setAttribute("class","classh2");
var texth2 = document.createTextNode(inputadd.value);
h2.appendChild(texth2);
divhijo1.appendChild(h2);

var textarea = document.createElement("textarea");
textarea.setAttribute("class","classtextarea");

//var texttextarea = document.createTextNode(inputadd.value);
//textarea.appendChild(texttextarea);
hijo2.appendChild(textarea);

var parraf = document.createElement("p");
parraf.setAttribute("class","classp");
hijo2.appendChild(parraf);

var divhijo12 = document.createElement("div");
divhijo12.setAttribute("class","classdivhijo12");
divhijo1.appendChild(divhijo12);

var span1 = document.createElement("span");
span1.setAttribute("class","classspan1");
var span11= document.createElement("span");
span1.setAttribute("class","classspan11");
span1.appendChild(span11);

divhijo12.appendChild(span1);
var ancor = document.createElement("a");
ancor.setAttribute("class","classancor");
var textancor = document.createTextNode("...");
ancor.appendChild(textancor);
var spanancor = document.createElement("a");

ancor.appendChild(spanancor);
divhijo1.appendChild(ancor);

var divhijo2 = document.createElement("div");
var ancodivhijo1 = document.createElement("a");
var textancodivhijo1 = document.createTextNode("añadir una tarjeta...");

ancodivhijo1.appendChild(textancodivhijo1);
ancodivhijo1.setAttribute("class","classancodivhijo1");

hijo2.appendChild(divhijo2);
hijo2.appendChild(ancodivhijo1);

var divadd = document.createElement("div");
var divadd1 = document.createElement("div");
var divadd2 =  document.createElement("div");
divadd.setAttribute("class","red");
divadd1.setAttribute("class","green");
divadd2.setAttribute("class","blue");
grandfather.appendChild(divadd);
divadd.appendChild(divadd1);
divadd.appendChild(divadd2);
var input = document.createElement("input");
var ancoradd1 = document.createElement("a");
var ancoradd2 = document.createElement("a");
var textancoradd2 = document.createTextNode("X");
ancoradd2.appendChild(textancoradd2);
ancoradd2.setAttribute("href","#");
input.setAttribute("type","submit");
input.setAttribute("value","Añadir");
input.setAttribute("id","list-card");

divadd1.appendChild(input);
divadd1.appendChild(ancoradd1);
divadd2.appendChild(ancoradd2);

//agregar un texto 
	inputadd.value = '';
	}

	});


/*
window.addEventListener('DOMContentLoaded', function(){


 var  textarea1 = document.getElementsByClassName("board")[0].children[2].firstElementChild;
	var buttonaddCard = document.getElementsByClassName("board")[0].children[3].firstElementChild.firstElementChild;

		buttonaddCard.addEventListener('click',function(e){
		alert("Por favor ingrese su tarjeta esta vacio");
		});
 	



var  divCardfather = document.getElementsByClassName("board")[0].children[3].firstElementChild;
                     
var ancorCard = document.createElement("a");
ancorCard.setAttribute("class","classancorCard");
ancorCard.setAttribute("href","/c/kp2JE5f1/8-tarjeta2");
divCardfather.appendChild(ancorCard);

var spanEdit = document.createElement("span");
spanEdit.setAttribute("class","fa fa-pencil fa-1x");
ancorCard.appendChild(spanEdit);

var listDiv = document.createElement("div");
listDiv.setAttribute("class","classlistDiv");
ancorCard.appendChild(listDiv);
var span1 = document.createElement("span");
var textspan1 = document.createTextNode("tarjeta 8");
span1.appendChild(textspan1);
listDiv.appendChild(span1);
var span2 = document.createElement("span");
span1.appendChild(span2);

//agregar un texto 
inputadd.value = '';


}); */


