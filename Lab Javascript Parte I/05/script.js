
 document.addEventListener("DOMContentLoaded", function(){
                document.getElementById("btnSubmit").addEventListener("click", function(){
                    let data = document.getElementById("data").value.split('-');
                    let mes = "";
                                                            
                    switch(data[1])
                    {
                    	case "01":
                    		mes = "janeiro";
                    		break;
                    	case "02":
                    		mes = "fevereiro";
                    		break;
                    	case "03":
                    		mes = "março";
                    		break;
						case "04":
                    		mes = "abril";
                    		break;
                    	case "05":
                    		mes = "maio";
                    		break;
						case "06":
                    		mes = "junho";
                    		break;
						case "07":
                    		mes = "julho";
                    		break;
						case "08":
                    		mes = "agosto";
                    		break;
                    	case "09":
                    		mes = "setembro";
                    		break;
						case "10":
                    		mes = "outubro";
                    		break;
						case "11":
                    		mes = "novembro";
                    		break;
						case "12":
                    		mes = "dezembro";
                    		break;
                    	default:
                    		alert("Verifique a data");
                    		break;
                     }
                    document.write("Data formatada: " + data[2] + " de " + mes + " de " + data[0]);
                }, false);
            }, false);