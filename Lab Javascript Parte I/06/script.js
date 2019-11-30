function chamar(){
	let valueb = 0;
	let b = document.querySelector('input[name="bs"]:checked').value;
	switch(b)
       {
       	case "Suco":
       		valueb = 4.00;
       		break;
       	case "Refrigerante":
       		valueb = 2.50;
       		break;
       	case "Água":
       		valueb = 1.50;
       		break;
       	default:
       		valueb = 0;
  		}

	
	let c = "";
	let valuec = 0;
	var inputElements = document.getElementsByClassName('ds');
	for(var i=0; inputElements[i]; ++i){
	      if(inputElements[i].checked){
	           c = c + " " + inputElements[i].value;
	           if(inputElements[i].value == "Bolo")
	           		valuec = valuec + 3.50;
	           	else if(inputElements[i].value == "Pastel")
	           		valuec = valuec + 3.00;
	           	else if(inputElements[i].value == "Torta")
	           		valuec = valuec + 4.00;
	      }
	}
	
	
	let nome = "Nome do cliente: " + document.querySelector("#nome").value;
	let bebida = "Bebida: " + b;
	let comidas = "Comidas: " + c;
	let valor = (valueb + valuec);


	alert(nome + "\n" + bebida + "\n" + comidas + " \nValor Total: " + valor);
}
