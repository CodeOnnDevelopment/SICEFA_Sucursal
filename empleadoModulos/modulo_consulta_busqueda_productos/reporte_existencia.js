/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


//javascript para el reporte de existencia 
//objeto con datos json
var text = '{"medicinas":[ ' +
  '{"nombre" : "paracetamol", "Stock" : "2500 unid", "vendidos" : "vendidos: 1000"  },'+
  '{"nombre" : "ketorolaco", "Stock" : "6500 unid", "vendidos" : "vendidos: 2000"  },'+
  '{"nombre" : "metformina", "Stock" : "3500 unid", "vendidos" : "vendidos: 600"  },'+
  '{"nombre" : "Telmisartan", "Stock" : "2800 unid", "vendidos" : "vendidos: 700"  },'+
  '{"nombre" : "losartan", "Stock" : "3200 unid", "vendidos" : "vendidos: 200"  },'+
  '{"nombre" : "captopril", "Stock" : "5000 unid", "vendidos" : "vendidos: 1000"  },'+
  '{"nombre" : "aciclovir", "Stock" : "2800 unid", "vendidos" : "vendidos: 1000"  },'+
  '{"nombre" : "gentamicina", "Stock" : "6000 unid", "vendidos" : "vendidos: 1000"  },'+
  '{"nombre" : "ampicilina", "Stock" : "3200 unid", "vendidos" : "vendidos: 1000"  },'+
  '{"nombre" : "amoxicilina", "Stock" : "2500 unid", "vendidos" : "vendidos: 1000"  } ] }';
  
  //toma los datos del objeto y los pinta en el texto con el id selecccionaddo 
  obj = JSON.parse(text);

document.getElementById("text1").innerHTML=
    obj.medicinas[0].nombre + " - " + obj.medicinas[0].Stock;
    document.getElementById("text2").innerHTML=
        obj.medicinas[0].vendidos;
           

document.getElementById("text3").innerHTML=
    obj.medicinas[1].nombre + " - " + obj.medicinas[1].Stock;
    document.getElementById("text4").innerHTML=
        obj.medicinas[1].vendidos;
 
document.getElementById("text5").innerHTML=
    obj.medicinas[2].nombre + " - " + obj.medicinas[2].Stock;
    document.getElementById("text6").innerHTML=
        obj.medicinas[2].vendidos;

        document.getElementById("text7").innerHTML=
        obj.medicinas[3].nombre + " - " + obj.medicinas[3].Stock;
        document.getElementById("text8").innerHTML=
            obj.medicinas[3].vendidos;

            document.getElementById("text9").innerHTML=
    obj.medicinas[4].nombre + " - " + obj.medicinas[4].Stock;
    document.getElementById("text10").innerHTML=
        obj.medicinas[4].vendidos;

        document.getElementById("text11").innerHTML=
    obj.medicinas[5].nombre + " - " + obj.medicinas[5].Stock;
    document.getElementById("text12").innerHTML=
        obj.medicinas[5].vendidos;

        document.getElementById("text13").innerHTML=
    obj.medicinas[6].nombre + " - " + obj.medicinas[6].Stock;
    document.getElementById("text14").innerHTML=
        obj.medicinas[6].vendidos;

   document.getElementById("text15").innerHTML=
    obj.medicinas[7].nombre + " - " + obj.medicinas[7].Stock;
    document.getElementById("text16").innerHTML=
        obj.medicinas[7].vendidos;

   document.getElementById("text17").innerHTML=
    obj.medicinas[8].nombre + " - " + obj.medicinas[8].Stock;
    document.getElementById("text18").innerHTML=
        obj.medicinas[8].vendidos;

   document.getElementById("text19").innerHTML=
    obj.medicinas[9].nombre + " - " + obj.medicinas[9].Stock;
    document.getElementById("text20").innerHTML=
        obj.medicinas[9].vendidos;