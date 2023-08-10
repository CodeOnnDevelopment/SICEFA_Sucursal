//function para el evento del boton el onclick
function irAReporteExistencia() {
    window.location.href = "reporte_existencia.html";
}

//objeto arreglo
var text = '{"medicamentos":[ ' +
        '{"nomProd" : "paracetamol",    "nomGen" : "acetaminofén","fofa" : "tableta 500mg ","coBa" : "codigo.png" ,"foto" : "para.png" ,"cantidad" : "2500 unid","precio" : "$34 pesos", "estatus" : "Activo"   },' +
        '{"nomProd" : "ketorolaco",    "nomGen" : " trometamina","fofa" :  "tableta 10mg ","coBa" : "codigo.png" ,"foto" : "keto.png" ,"cantidad" : "6500 unid","precio" : "$65 pesos", "estatus" : "Activo"   },' +
        '{"nomProd" : "metformina",    "nomGen" : "metformina","fofa" : "solucion 500ml ","coBa" : "codigo.png" ,"foto" : "metfor.png" ,"cantidad" : "3500 unid","precio" : "$64 pesos", "estatus" : "Activo"   },' +
        '{"nomProd" : "Telmisartan Teva",    "nomGen" : "telmisartan","fofa" : "comprimidos 20mg ","coBa" : "codigo.png" ,"foto" : "telmi.png" ,"cantidad" : "2800 unid","precio" : "$239 pesos", "estatus" : "Activo"   },' +
        '{"nomProd" : "losartan",    "nomGen" : "Hidroclorotiazida","fofa" : "comprimidos 100mg ","coBa" : "codigo.png" ,"foto" : "losar.png" ,"cantidad" : "3200 unid","precio" : "$60 pesos", "estatus" : "Activo"   },' +
        '{"nomProd" : "captopril",    "nomGen" : "captopril","fofa" : "tableta 50mg ","coBa" : "codigo.png" ,"foto" : "capto.png" ,"cantidad" : "5000 unid","precio" : "$19 pesos", "estatus" : "Activo"   },' +
        '{"nomProd" : "aciclovir",    "nomGen" : "aciclovir","fofa" : "comprimidos 200mg ","coBa" : "codigo.png" ,"foto" : "aciclo.png" ,"cantidad" : "2800 unid","precio" : "$42 pesos", "estatus" : "Activo"   },' +
        '{"nomProd" : "gentamicina ",    "nomGen" : "aminoglucósido","fofa" : "inyectable 80mg ","coBa" : "codigo.png" ,"foto" : "genta.png" ,"cantidad" : "6000 unid","precio" : "$21 pesos", "estatus" : "Activo"   },' +
        '{"nomProd" : "ampicilina",    "nomGen" : "ampicilina","fofa" : "suspencion 5ml ","coBa" : "codigo.png" ,"foto" : "ampi.png" ,"cantidad" : "3200 unid","precio" : "$24 pesos", "estatus" : "Activo"   },' +
        '{"nomProd" : "amoxicilina",    "nomGen" : "amoxicilina","fofa" : "capsula 500mg ","coBa" : "codigo.png" ,"foto" : "amo.png" ,"cantidad" : "2500 unid","precio" : "$34 pesos" , "estatus" : "Activo"  } ] }';


let indexMedicamentoSeleccionado; // es el índice del arreglo
let obj = [];

obj = JSON.parse(text);
console.log(obj);//para ver en consola si esta tomando los datos del objeto
filtrarTabla();


function filtrarTabla() {
    let input = document.getElementById("buscar").value.trim().toLowerCase();
    let palabras = input.split(/\s+/); // Separa la cadena en palabras 

    let medicamentosFiltrados = obj.medicamentos.filter(function (medicamento) {
        //  verifica si alguna palabra coincide en alguna columna con filter
        //   se encargaria de filtrar
        return palabras.some(function (palabra) {
            return (
                    medicamento.nomProd.toLowerCase().includes(palabra) ||
                    medicamento.nomGen.toLowerCase().includes(palabra) ||
                    medicamento.fofa.toLowerCase().includes(palabra) ||
                    medicamento.cantidad.toLowerCase().includes(palabra) ||
                    medicamento.precio.toLowerCase().includes(palabra) ||
                    medicamento.estatus.toLowerCase().includes(palabra)
                    );
        });
    });

    let cuerpo = "";
    medicamentosFiltrados.forEach(function (elemento) {
        let registro =
                '<tr onclick="selectMedicamento(' + obj.medicamentos.indexOf(elemento) + ');">' +
                '<td>' + obj.medicamentos.indexOf(elemento) + '</td>' +
                '<td>' + elemento.nomProd + '</td>' +
                '<td>' + elemento.nomGen + '</td>' +
                '<td>' + elemento.fofa + '</td>' +
                '<td> <img src="imagenes/' + elemento.coBa + ' " width="100" > </td>' +
                '<td> <img src="imagenes/' + elemento.foto + ' " width="100" > </td>' +
                '<td>' + elemento.cantidad + '</td>' +
                '<td>' + elemento.precio + '</td>' +
                '<td>' + elemento.estatus + '</td></tr>';
        // suma al cuerpo de la tabla ose añade añ cuerpo los datos ya tomados
        cuerpo += registro;
    });
    //toma lo que hay en el cuerpo y con inner lo introduce en donde esta el id
    document.getElementById("tblmedicamentos").innerHTML = cuerpo;
}

// toma el dato ingresado para que lo busque dentro de la funcion que se asigno la de filtrar tabla 
document.getElementById("buscar").addEventListener("input", filtrarTabla);


// mensajes de error o otros
function mostrarModuloEnDesarrollo() {
    Swal.fire({
        icon: 'warning',
        title: '¡Atención!',
        text: 'El siguiente módulo se encuentra actualmente en desarrollo.',
        confirmButtonText: 'Entendido',
        timer: 5000, // Cerrar automáticamente después de 5 segundos
        timerProgressBar: true,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
    });
}

const empleadoCookie = getCookie('empleado');

if (empleadoCookie) {
    const empleado = JSON.parse(empleadoCookie);
    document.getElementById('nombreEmpleado').textContent = empleado.nombre;
    document.getElementById('sucursalEmpleado').textContent = empleado.Sucursal;
}

function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2)
        return parts.pop().split(";").shift();
}

function mostrarModuloAdmin() {
    Swal.fire({
        title: "Alerta",
        text: "Este módulo solo se encuentra para administradores",
        icon: "info",
        confirmButtonText: "Aceptar"
    });
}