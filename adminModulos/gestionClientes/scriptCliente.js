/* global Swal, ruta, nombreFoto, index */

var text = '{"cliente":[ ' +
        '{"nomCliente" : "Venta", "apellidoPaterno" : "al", "apellidoMaterno" : "publico", "genero" : "Masculino", "fechaNacimiento" : "1998-11-22", "rfc" : "GMCR120615OG1", ' +
        ' "curp" : "RIMA770826MTCSND62", "domicilio" : "Lácteos Rodríguez",  "codigoP" : "37000", "ciudad" : "Leon",  "estado" : "Gto", ' +
        // objeto sucursal
        ' "sucursal" : {"telefono" : "4772558896", "email": "Cliente@example.com", "registro" : "2020-11-22", "foto" : "persona8.jpg", "estatus" : "Activo"}' +
        '},' +
        // Cliente 2
        '{"nomCliente" : "Sarahah", "apellidoPaterno" : "Jiménez", "apellidoMaterno" : "Lopez", "genero" : "Femenino", "fechaNacimiento" : "2000-12-15", "rfc" : "WKDD230523BGA", ' +
        ' "curp" : "SAFA770826MSLRLR13", "domicilio" : "Sta. Margarita 303",  "codigoP" : "37550", "ciudad" : "Leon",  "estado" : "Gto", ' +
        // objeto sucursal
        ' "sucursal" : {"telefono" : "4772568910", "email": "Sarahah@example.com", "registro" : "2022-01-22", "foto" : "clientem2.jpg", "estatus" : "Activo"}' +
        '},' +
        // Cliente 3
        '{"nomCliente" : "Elizabeth", "apellidoPaterno" : "Gomez", "apellidoMaterno" : "Alvarez", "genero" : "Femenino", "fechaNacimiento" : "1982-11-30", "rfc" : "LLBR380305NW9", ' +
        ' "curp" : "VAVM770826MCHSSR88", "domicilio" : "Villas del Maurel 77-15",  "codigoP" : "37478", "ciudad" : "Leon",  "estado" : "Gto", ' +
        // objeto sucursal
        ' "sucursal" : {"telefono" : "4775525612", "email": "Elizabeth@example.com", "registro" : "2015-05-22", "foto" : "clientem3.jpg", "estatus" : "Activo"}' +
        '},' +
        // Cliente 4
        '{"nomCliente" : "Francisco", "apellidoPaterno" : "Garza", "apellidoMaterno" : "Fernandez", "genero" : "Masculino", "fechaNacimiento" : "2001-12-13", "rfc" : "TCJV030719VA1", ' +
        ' "curp" : "ROPJ770826HTLMRS52", "domicilio" : "Blvrd Francisco Villa 1205",  "codigoP" : "37238", "ciudad" : "Leon",  "estado" : "Gto", ' +
        // objeto sucursal
        ' "sucursal" : {"telefono" : "4771148596", "email": "Francisco@example.com", "registro" : "2020-11-22", "foto" : "cliente1.jpg", "estatus" : "Activo"}' +
        '},' +
        // Cliente 5
        '{"nomCliente" : "Diego", "apellidoPaterno" : "Salazar", "apellidoMaterno" : "rodriguez", "genero" : "Masculino", "fechaNacimiento" : "2022-11-08", "rfc" : "HNGR830327NS0", ' +
        ' "curp" : "SARM770826HYNLDR24", "domicilio" : "Malinalco 726",  "codigoP" : "37520", "ciudad" : "Leon",  "estado" : "Gto", ' +
        // objeto sucursal
        ' "sucursal" : {"telefono" : "4775778963", "email": "Diego@example.com", "registro" : "2020-11-22", "foto" : "cliente4.jpg", "estatus" : "Activo"}' +
        '},' +
        // Cliente 6
        '{"nomCliente" : "María", "apellidoPaterno" : "Ramírez", "apellidoMaterno" : "Sánchez", "genero" : "Femenino", "fechaNacimiento" : "1995-06-10", "rfc" : "RAMS950610ABC", ' +
        ' "curp" : "RASM950610MEXXYZ01", "domicilio" : "Calle del Sol 123",  "codigoP" : "37650", "ciudad" : "León",  "estado" : "Guanajuato", ' +
        // objeto sucursal
        ' "sucursal" : {"telefono" : "4771234567", "email": "maria@example.com", "registro" : "2018-09-15", "foto" : "clientem7.jpg", "estatus" : "Activo"}' +
        '}, ' +
        // Cliente 7
        '{"nomCliente" : "Carlos", "apellidoPaterno" : "Vargas", "apellidoMaterno" : "García", "genero" : "Masculino", "fechaNacimiento" : "1988-03-25", "rfc" : "VAGC880325DEF", ' +
        ' "curp" : "CAGV880325MEXXYZ02", "domicilio" : "Av. de los Pinos 456",  "codigoP" : "37020", "ciudad" : "León",  "estado" : "Guanajuato", ' +
        // objeto sucursal
        ' "sucursal" : {"telefono" : "4779876543", "email": "carlos@example.com", "registro" : "2016-05-02", "foto" : "cliente6.jpg", "estatus" : "Activo"}' +
        '}, ' +
        // Cliente 8
        '{"nomCliente" : "Ana", "apellidoPaterno" : "López", "apellidoMaterno" : "Martínez", "genero" : "Femenino", "fechaNacimiento" : "2002-09-18", "rfc" : "LOMA020918GHI", ' +
        ' "curp" : "ALMA020918MEXXYZ03", "domicilio" : "Calle Primavera 789",  "codigoP" : "37210", "ciudad" : "León",  "estado" : "Guanajuato", ' +
        // objeto sucursal
        ' "sucursal" : {"telefono" : "4777890123", "email": "ana@example.com", "registro" : "2021-11-10", "foto" : "clientem8.jpg", "estatus" : "Activo"}' +
        '},' +
        // Cliente 9
        '{"nomCliente" : "Javier", "apellidoPaterno" : "Gutiérrez", "apellidoMaterno" : "Rodríguez", "genero" : "Masculino", "fechaNacimiento" : "1990-12-02", "rfc" : "GUJR901202JKL", ' +
        ' "curp" : "JUGR901202MEXXYZ04", "domicilio" : "Col. San Rafael 567",  "codigoP" : "37640", "ciudad" : "León",  "estado" : "Guanajuato", ' +
        // objeto sucursal
        ' "sucursal" : {"telefono" : "4773456789", "email": "javier@example.com", "registro" : "2017-08-22", "foto" : "cliente9.jpg", "estatus" : "Activo"}' +
        '},' +
        // Cliente 10
        '{"nomCliente" : "Laura", "apellidoPaterno" : "Hernández", "apellidoMaterno" : "Pérez", "genero" : "Femenino", "fechaNacimiento" : "1987-07-12", "rfc" : "HEPL870712MNO", ' +
        ' "curp" : "LAHE870712MEXXYZ05", "domicilio" : "Blvrd Revolución 987",  "codigoP" : "37030", "ciudad" : "León",  "estado" : "Guanajuato", ' +
        // objeto sucursal
        ' "sucursal" : {"telefono" : "4772345678", "email": "laura@example.com", "registro" : "2019-04-25", "foto" : "clientem10.jpg", "estatus" : "Activo"}' +
        '}' +
        ']}';

let indexClienteSeleccionado;
let obj = [];

obj = JSON.parse(text);
console.log(obj);
actualizaTabla();

function actualizaTabla() {
    let cuerpo = "";
    obj.cliente.forEach(function (clientes) {
        let registro =
                '<tr onclick="selectCliente(' + obj.cliente.indexOf(clientes) + ');">' +
                '<td>' + obj.cliente.indexOf(clientes) + '</td>' +
                '<td>' + clientes.nomCliente + " " + clientes.apellidoPaterno + " " + clientes.apellidoMaterno + '</td>' +
                '<td>' + clientes.genero + '</td>' +
                '<td>' + clientes.fechaNacimiento + '</td>' +
                '<td>' + clientes.sucursal.registro + '</td>' +
                '<td> <img src="./../../Imagenes/clientes/' + clientes.sucursal.foto + '" width="100" > </td>' +
                '<td>' + clientes.sucursal.estatus + '</td></tr>';
        cuerpo += registro;
    });
    document.getElementById("tblClientes").innerHTML = cuerpo;
}

function selectCliente(index) {
    document.getElementById("txtnombre").value = obj.cliente[index].nomCliente;
    document.getElementById("txtapellidop").value = obj.cliente[index].apellidoPaterno;
    document.getElementById("txtapellidom").value = obj.cliente[index].apellidoMaterno;
    document.getElementById("txtgenero").value = obj.cliente[index].genero;
    document.getElementById("txtfechaN").value = obj.cliente[index].fechaNacimiento;
    document.getElementById("txtrfc").value = obj.cliente[index].rfc;
    document.getElementById("txtcurp").value = obj.cliente[index].curp;
    document.getElementById("txtdomicilio").value = obj.cliente[index].domicilio;
    document.getElementById("txtcodigop").value = obj.cliente[index].codigoP;
    document.getElementById("txtCiudad").value = obj.cliente[index].ciudad;
    document.getElementById("txtestado").value = obj.cliente[index].estado;
    document.getElementById("txtTelefono").value = obj.cliente[index].sucursal.telefono;
    document.getElementById("txtEmail").value = obj.cliente[index].sucursal.email;
    document.getElementById("txtfechaR").value = obj.cliente[index].sucursal.registro;
    let ruta = './../../Imagenes/clientes/';
    document.getElementById("txtFoto").src = ruta + obj.cliente[index].sucursal.foto;
    document.getElementById("txtFotoRuta").value = "";

    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");
    indexClienteSeleccionado = index;

}

function limpiar() {
    document.getElementById("txtnombre").value = "";
    document.getElementById("txtapellidop").value = "";
    document.getElementById("txtapellidom").value = "";
    document.getElementById("txtgenero").value = "";
    document.getElementById("txtfechaN").value = "";
    document.getElementById("txtrfc").value = "";
    document.getElementById("txtcurp").value = "";
    document.getElementById("txtdomicilio").value = "";
    document.getElementById("txtcodigop").value = "";
    document.getElementById("txtCiudad").value = "";
    document.getElementById("txtestado").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtfechaR").value = "";
    document.getElementById("txtFoto").src = "./../../Imagenes/fotovacia.png";
    document.getElementById("txtFotoRuta").value = "";

    document.getElementById("btnModificar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    indexClienteSeleccionado = 0;
}

function obtenerNombreFoto() {
    let nombreFoto;
    nombreFoto = document.getElementById("txtFotoRuta").value;
    nombreFoto = nombreFoto.substring(nombreFoto.lastIndexOf("\\") + 1);
    return nombreFoto;
}

function despliegaFoto(inputValue) {
    const vistaPrevia = document.getElementById('txtFoto');
    const archivoSeleccionado = document.getElementById('txtFotoRuta').files[0];

    if (archivoSeleccionado) {
        const lector = new FileReader();

        lector.onload = function(e) {
            vistaPrevia.src = e.target.result;
        }

        lector.readAsDataURL(archivoSeleccionado);
    } else {
        vistaPrevia.src = './../../Imagenes/fotovacia.png'; // Ruta de la imagen predeterminada
    }
}


function agregarCliente() {
    let nomCliente, apellidoPaterno, apellidoMaterno, genero, fechaNacimiento, rfc, curp, domicilio, codigoP, ciudad, estado, telefono, email, registro, foto;

    nomCliente = document.getElementById("txtnombre").value;
    apellidoPaterno = document.getElementById("txtapellidop").value;
    apellidoMaterno = document.getElementById("txtapellidom").value;
    genero = document.getElementById("txtgenero").value;
    fechaNacimiento = document.getElementById("txtfechaN").value;
    rfc = document.getElementById("txtrfc").value;
    curp = document.getElementById("txtcurp").value;
    domicilio = document.getElementById("txtdomicilio").value;
    codigoP = document.getElementById("txtcodigop").value;
    ciudad = document.getElementById("txtCiudad").value;
    estado = document.getElementById("txtestado").value;
    telefono = document.getElementById("txtTelefono").value;
    email = document.getElementById("txtEmail").value;
    registro = document.getElementById("txtfechaR").value;
    foto = obtenerNombreFoto();

    // Validar que los campos obligatorios no estén vacíos
    if (!nomCliente || !apellidoPaterno || !apellidoMaterno || !genero || !rfc || !curp || !domicilio || !codigoP || !ciudad || !estado || !telefono || !email || !registro) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos obligatorios.'
        });
        return;
    }

    function formatoABC(cadena) {
        const lettersPattern = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
        return cadena.match(lettersPattern);
    }
    function formato123(texto) {
        const patron = /^[0-9]+$/;
        return patron.test(texto);
    }
    function formatoCorreo(correo) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(correo);
    }
    // Validar que los campos de Código Postal, Teléfono solo contengan números
    if (!formato123(codigoP) || !formato123(telefono)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingresa solo números en los campos de Código Postal y Teléfono.'
        });
        return;
    }
    // Validar campos que deben contener solo letras
    if (!formatoABC(nomCliente) || !formatoABC(apellidoPaterno) || !formatoABC(apellidoMaterno) || !formatoABC(ciudad) || !formatoABC(estado)) {
        // Mostrar mensaje de error con SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Los campos de nombre, apellidos, ciudad y estado deben contener solo letras.'
        });
        return;
    }
    // Validar el formato del correo electrónico
    if (!formatoCorreo(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingresa un correo electrónico válido.'
        });
        return;
    }

    // Obtener la fecha actual
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate();
    const mesActual = fechaActual.getMonth() + 1; // Los meses van de 0 a 11
    const anioActual = fechaActual.getFullYear();

    // Convertir las fechas de nacimiento y registro en objetos Date
    const fechaNac = new Date(fechaNacimiento);
    const fechaReg = new Date(registro);

    // Obtener el año, mes y día de las fechas
    const anioNac = fechaNac.getFullYear();
    const mesNac = fechaNac.getMonth() + 1;
    const diaNac = fechaNac.getDate();

    const anioReg = fechaReg.getFullYear();
    const mesReg = fechaReg.getMonth() + 1;
    const diaReg = fechaReg.getDate();

    // Comparar con la fecha actual
    if (anioNac > anioActual || (anioNac === anioActual && mesNac > mesActual) || (anioNac === anioActual && mesNac === mesActual && diaNac > diaActual)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La fecha de nacimiento no puede ser una fecha futura.'
        });
        return;
    }

    if (anioReg > anioActual || (anioReg === anioActual && mesReg > mesActual) || (anioReg === anioActual && mesReg === mesActual && diaReg > diaActual)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La fecha de registro no puede ser una fecha futura.'
        });
        return;
    }

    let newCliente = {};
    newCliente.nomCliente = nomCliente;
    newCliente.apellidoPaterno = apellidoPaterno;
    newCliente.apellidoMaterno = apellidoMaterno;
    newCliente.genero = genero;
    newCliente.fechaNacimiento = fechaNacimiento;
    newCliente.rfc = rfc;
    newCliente.curp = curp;
    newCliente.domicilio = domicilio;
    newCliente.codigoP = codigoP;
    newCliente.ciudad = ciudad;
    newCliente.estado = estado;


    // creamos objeto anidado sucursal
    newCliente.sucursal = {};
    newCliente.sucursal.telefono = telefono;
    newCliente.sucursal.email = email;
    newCliente.sucursal.registro = registro;
    newCliente.sucursal.foto = foto;
    newCliente.sucursal.estatus = "Activo";

    obj.cliente.push(newCliente);

    let jsonData = JSON.stringify(obj.cliente);
    console.log(jsonData);
    console.log(typeof (jsonData));

    // Alerta de que el cliente se agrego con exito
    Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success'
        },
        showConfirmButton: true,
        confirmButtonText: 'Aceptar'
    }).fire({
        icon: 'success',
        title: '¡Cliente agregado!',
        text: 'El cliente ha sido agregado con éxito.'
    });

    limpiar();
    actualizaTabla();
}

//funcion para eliminar con sweet alert
function eliminarCliente() {
    Swal.fire({
        customClass: {
            confirmButton: 'btn btn-danger',
            cancelButton: 'btn btn-secondary'
        },
        icon: 'warning',
        title: '¿Estás seguro?',
        text: '¿Quieres eliminar el cliente seleccionado?',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Sí, eliminar',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            // Código para eliminar el cliente
            obj.cliente[indexClienteSeleccionado].sucursal.estatus = 'Inactivo';
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            limpiar();
            actualizaTabla();
            Swal.fire({
                customClass: {
                    confirmButton: 'btn btn-success'
                },
                icon: 'success',
                title: '¡Cliente eliminado!',
                text: 'El cliente ha sido eliminado con éxito.',
                confirmButtonText: 'Aceptar'
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // No es necesario mostrar una alerta si el usuario cancela la operación.
        }
    });
}

//funcion para modificar cliente con sweet alert
function modificaCliente() {
    Swal.fire({
        customClass: {
            confirmButton: 'btn btn-warning',
            cancelButton: 'btn btn-secondary'
        },
        icon: 'question',
        title: '¿Estás seguro?',
        text: '¿Quieres modificar el cliente seleccionado?',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Sí, modificar',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            // Código para modificar el cliente
            modificarRegistro();
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            actualizaTabla();
            limpiar();
            Swal.fire({
                customClass: {
                    confirmButton: 'btn btn-success'
                },
                icon: 'success',
                title: '¡Cliente modificado!',
                text: 'El cliente ha sido modificado con éxito.',
                confirmButtonText: 'Aceptar'
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        }
    });
}

function modificarRegistro() {
    let nomCliente, apellidoPaterno, apellidoMaterno, genero, fechaNacimiento, rfc, curp, domicilio, codigoP, ciudad, estado, telefono, email, registro, foto;

    nomCliente = document.getElementById("txtnombre").value;
    apellidoPaterno = document.getElementById("txtapellidop").value;
    apellidoMaterno = document.getElementById("txtapellidom").value;
    genero = document.getElementById("txtgenero").value;
    fechaNacimiento = document.getElementById("txtfechaN").value;
    rfc = document.getElementById("txtrfc").value;
    curp = document.getElementById("txtcurp").value;
    domicilio = document.getElementById("txtdomicilio").value;
    codigoP = document.getElementById("txtcodigop").value;
    ciudad = document.getElementById("txtCiudad").value;
    estado = document.getElementById("txtestado").value;
    telefono = document.getElementById("txtTelefono").value;
    email = document.getElementById("txtEmail").value;
    registro = document.getElementById("txtfechaR").value;
    foto = obtenerNombreFoto();

    // Validar que los campos obligatorios no estén vacíos
    if (!nomCliente || !apellidoPaterno || !apellidoMaterno || !genero || !rfc || !curp || !domicilio || !codigoP || !ciudad || !estado || !telefono || !email || !registro) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos obligatorios.'
        });
        return;
    }
    let newCliente = {};
    newCliente.nomCliente = nomCliente;
    newCliente.apellidoPaterno = apellidoPaterno;
    newCliente.apellidoMaterno = apellidoMaterno;
    newCliente.genero = genero;
    newCliente.fechaNacimiento = fechaNacimiento;
    newCliente.rfc = rfc;
    newCliente.curp = curp;
    newCliente.domicilio = domicilio;
    newCliente.codigoP = codigoP;
    newCliente.ciudad = ciudad;
    newCliente.estado = estado;

    // creamos objeto anidado sucursal
    newCliente.sucursal = {};
    newCliente.sucursal.telefono = telefono;
    newCliente.sucursal.email = email;
    newCliente.sucursal.registro = registro;

    // Verificar si se ha seleccionado una nueva foto
    let nuevaFoto = obtenerNombreFoto();
    if (nuevaFoto !== "") {
        newCliente.sucursal.foto = nuevaFoto; // Actualizar la foto con la nueva foto
    } else {
        newCliente.sucursal.foto = obj.cliente[indexClienteSeleccionado].sucursal.foto; // Mantener la foto original
    }
    newCliente.sucursal.estatus = "Activo";


    obj.cliente[indexClienteSeleccionado] = newCliente;
}


document.getElementById("buscarInput").addEventListener("input", buscarCliente);

document.getElementById("buscarInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        buscarCliente();
    }
});

function buscarCliente() {
    let buscarValor = document.getElementById("buscarInput").value.trim().toLowerCase();

    if (buscarValor.trim() === "") {
        actualizaTabla();
        return;
    }

    let clientesFiltrados = obj.cliente.filter((cliente) => {
        return Object.values(cliente).some((value) => {
            if (typeof value === "string") {
                return value.toLowerCase().includes(buscarValor);
            } else if (typeof value === "object" && value !== null) {
                return Object.values(value).some((nestedValue) =>
                    nestedValue.toString().toLowerCase().includes(buscarValor)
                );
            }
            return false;
        });
    });

    let cuerpo = "";
    clientesFiltrados.forEach(function (cliente) {
        let registro =
            '<tr onclick="selectCliente(' + obj.cliente.indexOf(cliente) + ');">' +
            '<td>' + obj.cliente.indexOf(cliente) + '</td>' +
            '<td>' + cliente.nomCliente + " " + cliente.apellidoPaterno + " " + cliente.apellidoMaterno + '</td>' +
            '<td>' + cliente.genero + '</td>' +
            '<td>' + cliente.fechaNacimiento + '</td>' +
            '<td>' + cliente.sucursal.registro + '</td>' +
            '<td> <img src="./../../Imagenes/clientes/' + cliente.sucursal.foto + '" width="100" > </td>' +
            '<td>' + cliente.sucursal.estatus + '</td></tr>';

        cuerpo += registro;
    });

    document.getElementById("tblClientes").innerHTML = cuerpo;
}



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
        showConfirmButton: false
    });
}

const usuarioCookie = getCookie('usuario');
const empleadoCookie = getCookie('empleado');

if (usuarioCookie) {
    const usuario = JSON.parse(usuarioCookie);
    document.getElementById('nombreAdmin').textContent = usuario.nombre;
    document.getElementById('sucursalAdmin').textContent = usuario.Sucursal;
} else if (empleadoCookie) {
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