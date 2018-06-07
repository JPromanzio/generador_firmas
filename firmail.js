//ejecutor de script
function ejecutar(){
	//constructor
	function firma(nombre, mail, puesto, num_cel, loc, car) {
				this.nombre= nombre;
				this.mail= mail + "@arbusta.net";
				this.puesto= puesto;
				this.num_cel= num_cel;
				this.loc = loc;
				this.car = car;

				this.ofi = function(){
				//método asignación de oficina
					if(this.loc == "R"){
						this.loc = "ROS";
					}else if(this.loc == "BA"){
						this.loc == "BA";
					}else if(this.loc == "CM"){
						this.loc = "COL";
					}

				};

				this.carTel = function(){
				//método asignación de característica telefónica
					if(this.car == "R"){
						this.num_cel = "+54341" + this.num_cel;
					}else if(this.car == "BA"){
						this.num_cel = "+54911" + this.num_cel;
					}else if (this.car == "CM"){
						this.num_cel = "+57300" + this.num_cel;
					}
				};

				//método consulta y formato de firma.
				this.generar = function(){ 
					//consula por campos vacíos
					if((this.puesto == "Seleccionar")|(this.mail == "")|(this.nombre == "") | (this.num_cel == "") | (this.loc =="Seleccionar") | (this.car == "Seleccionar")){
      				alert("Debe completar todos los campos");
      			}else{ 
      				//formato de firma
					document.getElementById("firma").innerHTML = "<font size='1'><table><tr><img src='https://pbs.twimg.com/profile_images/834857735992799232/8MGrZOv9_400x400.jpg' width='70' height='70' style='float:left'><tr><td><b>" + this.nombre +"</b>" + " / " + this.puesto +"</td></tr><tr><td>" + this.mail + " / " + this.num_cel + 
	      				"</td></tr><tr><td><a href='https://www.arbusta.net' target='_blank'>Arbusta</a> / <b>"+ this.loc +"</b></td></tr>" +
	      				"<tr><td><a href='https://es-la.facebook.com/arbustait/' target= '_blank'><img src='https://cdn.icon-icons.com/icons2/413/PNG/256/Facebook_41212.png' width='16' height='16'></a>" +
	      				"<a href='https://twitter.com/arbustait' target='_blank'><img src='https://icon-icons.com/icons2/122/PNG/32/twitter_socialnetwork_20007.png' width='16' height='16'</a>" +
	      				"<a href='https://www.linkedin.com/company/arbusta' target='_blank'><img src='https://icon-icons.com/icons2/99/PNG/32/linkedin_socialnetwork_17441.png' width='12' height='12'></a>"+
	      				"<a href='https://www.instagram.com/arbustait/' target='_blank'><img src='https://icon-icons.com/icons2/1488/PNG/32/5301-instagram_102510.png' width='16' height='16'></a></td></tr></tr></table></font>";
      				}
				};
			}

		//creación de objetos tomando datos del formulario.
		var firma = new firma(document.getElementById('nombre').value,
							  document.getElementById('mail').value,
		  					  document.getElementById('puesto').value,
		   					  document.getElementById('num_cel').value,
		    				  document.getElementById('loc').value,
		     				  document.getElementById('car').value);
		//ejecución de métodos del objeto.
		firma.ofi();
		firma.carTel();
		firma.generar();
	}
