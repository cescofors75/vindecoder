function makeid(length) {
   var result           = '';
   var salida = '' ;      
   //var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var characters       = '0123456789ABCDEFGHJKLMNPRSTUVWXYZ';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
     
   return result;
   
    }
    
    
function sub(vin){

var xmlhttp = new XMLHttpRequest();
var url = "https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/ "+ vin + "?format=json";


xmlhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
               var myArr = JSON.parse(this.responseText);
               console.log(myArr);
              
               
               
               
               
               
               
               myFunction(myArr,vin);  
        }
 };

xmlhttp.open("GET", url, true);
xmlhttp.send();
//console.log (xmlhttp);
}




function myFunction(array,vin) {
		
	document.getElementById("vin_texte").innerHTML = vin;
	document.getElementById("vin_total").innerHTML = 'Generando numeros aleatorios VIN';
	var salida = "";
     salida += array.Results[0].Variable  +": "+array.Results[0].Value +"<br/>";
 if ( array.Results[6].Value != null) {
 	
      document.getElementById("vin_OK").innerHTML = vin + '       Correcto !!'+"<br/>";
    
        for(var i = 6; i < array.Results.length; i++) {
        	
             if (array.Results[i].Value != null)  { 
         
                     if (array.Results[i].Value != 'Not Applicable'){
                     	    
                            salida += array.Results[i].Variable  +": "+array.Results[i].Value +"<br/>";
                             //console.log(array.Results[i].value);
                        }                                          
             }

         }
   
      document.getElementById("elements").innerHTML += salida +"<br/>";
     }
} // fin function myFunction.




function Random(){

 for ( var j = 0; j < 99; j++ ) {  
 	
     for ( var i = 0; i < 9999; i++ ) {
           //console.log(makeid(17));  
           sub(makeid(17));
     }
           sleep(2);
 }
 

}