  function generar(){

    var mail= document.getElementById('mail').value;

    mail= mail + "@arbusta.net";

    var nombre= document.getElementById("nombre").value

    var puesto = document.getElementById("puesto").value;

    var num_cel = document.getElementById("num_cel").value;

    var car = document.getElementById("car").value;

    var loc = document.getElementById("loc").value;

    var aux;


    if (car == "R"){
      num_cel= "+549341" + num_cel;
    }else if(car == "BA"){
      num_cel= "+54911" + num_cel;
    } else if (car == "CM"){
      num_cel= "+57300" + num_cel;
    };
    
    if (loc == "R"){
      aux = "ROS";
    }else if(loc == "BA"){
      aux = "BA";
    } else if (loc == "CM"){
      aux = "COL";
    };

    if((puesto == "Seleccionar")|(mail == "")|(nombre == "") | (num_cel == "")){
      alert("Debe completar todos los campos");
    }else{

      document.getElementById("firma").innerHTML = "<font size='1'><table><tr><img src='https://pbs.twimg.com/profile_images/834857735992799232/8MGrZOv9_400x400.jpg' width='70' height='70' style='float:left'><tr><td><b>" + nombre +"</b>" + " / " + puesto +"</td></tr><tr><td>" + mail + " / " + num_cel + 
      "</td></tr><tr><td><a href='https://www.arbusta.net' target='_blank'>Arbusta</a> / <b>"+aux +"</b></td></tr>" +
      "<tr><td><a href='https://es-la.facebook.com/arbustait/' target= '_blank'><img src='https://cdn.icon-icons.com/icons2/413/PNG/256/Facebook_41212.png' width='16' height='16'></a>" +
      "<a href='https://twitter.com/arbustait' target='_blank'><img src='https://icon-icons.com/icons2/122/PNG/32/twitter_socialnetwork_20007.png' width='16' height='16'</a>" +
      "<a href='https://www.linkedin.com/company/arbusta' target='_blank'><img src='https://icon-icons.com/icons2/99/PNG/32/linkedin_socialnetwork_17441.png' width='12' height='12'></a></td></tr></tr></table></font>";
    };

  };
