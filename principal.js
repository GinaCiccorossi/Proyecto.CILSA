

function muestra(){
  var elemento = document.getElementById("adicional"),
      elemento2 = document.getElementById("leerMenos");
  
  elemento.className="visible";
  elemento2.className="visible";
  
  var enlace = document.getElementById("enlace");
  enlace.className="oculto";  
  
}

function ocultarSpan() {
  var leerMenos = document.getElementById("adicional"),
      elemento2 = document.getElementById("leerMenos");
  
      leerMenos.className="oculto";
      elemento2.className="oculto";
  
  var enlace = document.getElementById("enlace");
  enlace.className="visible"; 
}


        
        var nuevoalumno = prompt("Añadir su nombre");
        var lastname = prompt("Ingresa su apellido");
                
        listaalumnos = ["Sofía", "Lucía", "Pablo", "Sergio", "Catalina"]

        if(listaalumnos.includes(nuevoalumno)){
            alert("Ya esta en la lista")    
            } else {listaalumnos.push(nuevoalumno)}


        
        var primerP = document.getElementById("primerParrafo");
        
        primerP.innerHTML += (("<br>")+listaalumnos.join("<br>"));
        
                

        
        window.onload = function() {           
            var info = document.getElementById("infopag");
            info.innerHTML = "¡Gracias!" +" "+ nuevoalumno +" "+ "¡Saludos!";
                      
         
           
            var docuLinks = document.links.length;

            var contLinks = document.createElement("p");

            contLinks.innerHTML = "La cantidad de enlaces que hay son: " + docuLinks;
            
            const contenedor= document.getElementById("infopag");
            contenedor.appendChild(contLinks);            
        }
        

        
        function añadirNombre(){
            var newList = document.createElement("li"),
                newName = document.createTextNode(nuevoalumno + " " + lastname);
            
            newList.appendChild(newName);
            
            var padre = document.getElementById("alumnos");
            padre.appendChild(newList);

            document.getElementById("bot1").style.display = "none";
            document.getElementById("bot2").style.display = "block";
        }
              
        

        function retirarNombre() {
            var remoList = document.getElementsByTagName("li")[5].parentNode,
                remoName = document.getElementsByTagName("li")[5];
            remoList.removeChild(remoName);

            document.getElementById("bot2").style.display = "none";
            document.getElementById("bot1").style.display = "block"
        }



        $(function(){
            $('#btn').on('click', function(){
              $('img').attr('src','w.jpg');
            });
        
            $('#btn').on('click', function(){
              $('img').attr('y.jpg','uuu.jpg');
            });   
        
        });  
        
        


        function pro(ori){
          
            alert("Seleccionó la provincia de: " + ori)
        }

        function prob(orib){
          
            alert(" No está su provincia")
        }





        function Compara(){
            let a = parseInt(document.getElementById ("n1").value);
            let b = parseInt(document.getElementById("n2").value);
        
            if(a== ""|| b ==""){
                alert("Debes ingresar ambos números")
            }else{ 
        
            if(a> b) {
                
                alert ("El número" +" "+ a + " es mayor al número" +" "+ b)
                
            }else if(b > a){
                alert("El número " + " " + b + " es mayor al número " +" "+ a)
        
            }
            
            else{alert("Los números son iguales")}
        }}
        
              

        function Suma(){   
            let c = document.getElementById("v1").value;
            let d = document.getElementById("v2").value;
            
        if(c == "" || d == ""){
                alert('Debes ingresar ambos números para sumar');
            }else{  
                    alert('La suma es: '+ (parseFloat(c)+parseFloat(d)));
            }}



            function Resta(){   
                let c = document.getElementById("r1").value;
                let d = document.getElementById("r2").value;
                
            if(c == "" || d == ""){
                    alert('Debe ingresar ambos números para restar');
                }else{  
                        alert('La resta es: '+ (parseFloat(c)-parseFloat(d)));
                }
            }           

 
            window.addEventListener('load', ()=> {
                const form = document.querySelector('#formulario')
                const usuario = document.getElementById('usuario')
                const email = document.getElementById('email')
                const pass = document.getElementById('pass')
                const passConfirma = document.getElementById('passConfirma')
            
                form.addEventListener('submit', (e) => {
                    e.preventDefault()
                    validaCampos()
                })
            
                const validaCampos = ()=> {
                  
                    const usuarioValor = usuario.value.trim()
                    const emailValor = email.value.trim()
                    const passValor = pass.value.trim()
                    const passConfirmaValor = passConfirma.value.trim();
            
                    
                    if(!usuarioValor){
                      
                        validaFalla(usuario, 'Campo vacío')
                    }else{
                        validaOk(usuario)
                    }
            
                    
                    if(!emailValor){
                        validaFalla(email, 'Campo vacío')            
                    }else if(!validaEmail(emailValor)) {
                        validaFalla(email, 'El e-mail no es válido')
                    }else {
                        validaOk(email)
                    }
                    
                     const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/          
                     if(!passValor) {
                         validaFalla(pass, 'Campo vacío')
                     } else if (passValor.length < 8) {             
                         validaFalla(pass, 'Debe tener 8 caracteres cómo mínimo')
                     } else if (!passValor.match(er)) {
                         validaFalla(pass, 'Debe tener al menos una mail y un núm')
                     } else {
                         validaOk(pass)
                     }
            
                    
                     if(!passConfirmaValor){
                         validaFalla(passConfirma, 'Confirme su password')
                     } else if(passValor !== passConfirmaValor) {
                         validaFalla(passConfirma, 'La password no coincide')
                     } else {
                         validaOk(passConfirma)
                     }
            
            
                }
            
                const validaFalla = (input, msje) => {
                    const formControl = input.parentElement
                    const aviso = formControl.querySelector('p')
                    aviso.innerText = msje
            
                    formControl.className = 'form-control falla'
                }
                const validaOk = (input, msje) => {
                    const formControl = input.parentElement
                    formControl.className = 'form-control ok'
                }
            
                const validaEmail = (email) => {
                    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
                }
            
            })


            





