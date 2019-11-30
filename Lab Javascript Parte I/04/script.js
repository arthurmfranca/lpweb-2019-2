
function calculaItem(){
	let cod = Number(document.querySelector("#codigo").value);
	let qtd = Number(document.querySelector("#qtd").value);
	let txt = "";
	let sum = 0;
	
	switch(cod){
		case 100:
			sum = qtd*1.2;
			txt = "Cachorro quente: " + qtd + " X R$1,20 = R$" + sum;
			break;
		case 101:
			sum = qtd*1.3;
			txt = "Bauru simples: " + qtd + " X R$1,30 = R$" + sum;
			break;
		case 102:
			sum = qtd*1.5;
			txt = "Bauru com ovo: " + qtd + " X R$1,50 = R$" + sum;
			break;
		case 103:
			sum = qtd*1.2;
			txt = "Hambúrger: " + qtd + " X R$1,20 = R$" + sum;
			break;
		case 104:
			sum = qtd*1.3;
			txt = "Cheeseburger: " + qtd + " X R$1,30 = R$" + sum;
			break;
		case 105:
			sum = qtd*1;
			txt = "Refrigerante: " + qtd + " X R$1,00 = R$" + sum;
			break;
		default:
			txt = "Verifique o código digitado";
	}
	alert(txt);
}
