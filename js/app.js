window.addEventListener('load', begin);

var  inputadd = document.getElementsByClassName("js-add-list")[0].firstElementChild.children[1];
var buttonadd = document.getElementsByClassName("js-add-list")[0].firstElementChild.children[2].firstElementChild;

function addList(event){
event.preventDefault();
if(event.target.parentElement.previousElementSibling.value) {
	    
		var  grandfather = event.target.parentElement.parentElement.parentElement.parentElement;
		var  hijo1 = document.createElement("div");
		var  hijo2 = document.createElement("div");
		hijo1.setAttribute("class","red");
		grandfather.appendChild(hijo1);
		grandfather.insertBefore(hijo1,grandfather.firstElementChild);
		hijo2.setAttribute("class","green");
		grandfather.appendChild(hijo2);
		grandfather.insertBefore(hijo2,grandfather.firstElementChild);
		//var father = document.getElementsByClassName("green")[0];
		var divhijo1 = document.createElement("div");
		divhijo1.setAttribute("class","blue");
		hijo1.appendChild(divhijo1);
        
		var  divhijo11 = document.createElement("div");
		divhijo11.setAttribute("class","classdiv"); 
		divhijo1.appendChild(divhijo11);

		var h2 = document.createElement("h2");
		h2.setAttribute("class","classh2");
		var texth2 = document.createTextNode(event.target.parentElement.previousElementSibling.value);
		h2.appendChild(texth2);
		divhijo1.appendChild(h2);
		//-----------------------*----------------------------
		var divadd = document.createElement("div");
		divadd.setAttribute("id","div-add");
	    grandfather.appendChild(divadd); 
	    grandfather.insertBefore(divadd,grandfather.firstElementChild);
       //------------------------*----------------------------
		var textarea = document.createElement("textarea");
		textarea.setAttribute("class","classtextarea");
		textarea.setAttribute("id","text-card");
          
		//var texttextarea = document.createTextNode(inputadd.value);
		//textarea.appendChild(texttextarea);
		divadd.appendChild(textarea);

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

		
		var divadd1 = document.createElement("div");
		var divadd2 =  document.createElement("div");
		
		divadd1.setAttribute("class","green");
		divadd2.setAttribute("class","blue");
		
		divadd.appendChild(divadd1);
		divadd.appendChild(divadd2);
		var input = document.createElement("input");
		var ancoradd1 = document.createElement("a");
		var ancoradd2 = document.createElement("a");
		//var textancoradd2 = document.createTextNode("X");
		//ancoradd2.appendChild(textancoradd2);
		ancoradd2.setAttribute("href","#");
		ancoradd2.setAttribute("class","fa fa-window-close-o");
		input.setAttribute("type","submit");
		input.setAttribute("value","Añadir");
		input.setAttribute("id","add-card");

		divadd1.appendChild(input);
		divadd1.appendChild(ancoradd1);
		divadd2.appendChild(ancoradd2);
         input.addEventListener("click", newTask);
		//agregar un texto 
			inputadd.value = '';

//crear una nueva tarjeta 
	
//var  textarea1 = document.getElementsByClassName("board")[0].children[2].firstElementChild;
	//var buttonaddCard = document.getElementsByClassName("board")[0].children[3].firstElementChild.firstElementChild;
    
	 	}
 }

 function begin() {
  
  buttonadd.addEventListener('click', addList);
}


//var  textarea1 = document.getElementById("text-card");
function newTask(e){
   e.preventDefault();
 
	  if(e.target.parentElement.parentElement.firstElementChild.value) {
				
//var  divCardfather = document.getElementsByClassName("board")[0].children[3].firstElementChild;
        var divCardfather = e.target.parentElement.parentElement;               
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
		var textspan1 = document.createTextNode(e.target.parentElement.parentElement.firstElementChild.value);
		span1.appendChild(textspan1);
		listDiv.appendChild(span1);
		var span2 = document.createElement("span");
		span1.appendChild(span2);

		//agregar un texto 
		e.target.parentElement.parentElement.firstElementChild.value = '';
          } 
   }

  