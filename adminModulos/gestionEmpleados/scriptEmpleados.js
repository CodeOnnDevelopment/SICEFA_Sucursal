/* global Swal */
// Codigo creado por el equipo de code onn development
var text = '{"empleados":[ ' +
        '{"codigo" : "23080014", "ingreso" : "2020-11-22", "puesto" : "Gerente", "salarioBruto" : "30,000", "estatus" : "Activo", ' +
        // objeto persona
        ' "persona" : {"nomEmpleado" : "Juan", "apellidoPaterno" : "Gómez", "apellidoMaterno" : "Hernández",   "genero": "Masculino", ' +
        ' "fechaNacimiento" : "1970-02-14", "rfc" : "GOHJ850515ABC", "curp" : "GOHJ850515HGNMNR03", "domicilio" : "Calle ABC", "codigoP" : "37150", ' +
        ' "ciudad" : "Leon", "estado" : "Gto", "foto" : "persona8.jpg" }, ' +
        // objeto usuario
        ' "usuario" : {"nombreUsuario" : "23080014", "contrasena" : "23080014", "rol" : "ADMS", "email": "juan.gomez@example.com", "telefono" : "4771234567"},' +
        // objeto sucursal
        ' "sucursal" : {"nombre" : "Centro" }' +
        '},' +
        // EMPLEADO 2 (Gerente)
        '{"codigo" : "23070014", "ingreso" : "2022-01-12", "puesto" : "Gerente", "salarioBruto" : "24,000", "estatus" : "Activo", ' +
        // objeto persona
        ' "persona": {"nomEmpleado" : "María", "apellidoPaterno" : "López", "apellidoMaterno" : "García", "genero": "Femenino", ' +
        ' "fechaNacimiento" : "1982-02-22", "rfc" : "LOMG901121XYZ", "curp" : "LOMG901121MFRSAR08", "domicilio" : "Calle del Sol", "codigoP" : "37000", ' +
        ' "ciudad" : "Leon", "estado" : "Gto",  "foto" : "persona7.jpg" }, ' +
        // objeto usuario
        ' "usuario" : {"nombreUsuario" : "23070014",   "contrasena" : "23070014",   "rol" : "ADMS", "email": "maria.lopez@example.com", "telefono" : "4772345678"},' +
        // objeto sucursal
        ' "sucursal" : {"nombre" : "Centro Max" }' +
        '},' +
        // EMPLEADO 3 (Gerente)
        '{"codigo" : "23030014", "ingreso" : "2021-07-06", "puesto" : "Gerente", "salarioBruto" : "15,000", "estatus" : "Activo", ' +
        // objeto persona
        ' "persona": {"nomEmpleado" : "Pedro", "apellidoPaterno" : "Ramírez", "apellidoMaterno" : "Sánchez", "genero": "Masculino", ' +
        ' "fechaNacimiento" : "1979-01-10", "rfc" : "RASP880903LMN", "curp" : "RASP880903HGRMDD09", "domicilio" : "Calle ABC", "codigoP" : "37200", ' +
        ' "ciudad" : "Leon", "estado" : "Gto",  "foto" : "persona5.jpg" }, ' +
        // objeto usuario
        ' "usuario" : {"nombreUsuario" : "23030014",   "contrasena" : "23030014",   "rol" : "ADMS", "email": "pedro.ramirez@example.com", "telefono" : "4773456789"},' +
        // objeto sucursal
        ' "sucursal" : {"nombre" : "Plaza Mayor" }' +
        '},' +
        // EMPLEADO 4 (Atención a clientes)
        '{"codigo" : "07290013", "ingreso" : "2023-07-30", "puesto" : "Atención a Clientes", "salarioBruto" : "22,000", "estatus" : "Activo", ' +
        // objeto persona
        ' "persona": {"nomEmpleado" : "Ana", "apellidoPaterno" : "Fernández", "apellidoMaterno" : "Martínez", "genero": "Femenino", ' +
        ' "fechaNacimiento" : "1988-07-01", "rfc" : "FEAM930712PQR", "curp" : "FEAM930712MGRNTN02", "domicilio" : "Calle ABC", "codigoP" : "37400", ' +
        ' "ciudad" : "Leon", "estado" : "Gto",  "foto" : "persona6.jpg" }, ' +
        // objeto usuario
        ' "usuario" : {"nombreUsuario" : "EAna",   "contrasena" : "EAna5785",   "rol" : "EMPS", "email": "ana.fernandez@example.com", "telefono" : "4774567890"},' +
        // objeto sucursal
        ' "sucursal" : {"nombre" : "Centro" }' +
        '},' +
        // EMPLEADO 5 (Atención a clientes)
        '{"codigo" : "2000011", "ingreso" : "2019-01-4", "puesto" : "Atención a Clientes", "salarioBruto" : "22,000", "estatus" : "Activo", ' +
        // objeto persona
        ' "persona": {"nomEmpleado" : "Laura", "apellidoPaterno" : "Ramírez", "apellidoMaterno" : "Hernández", "genero": "Femenino", ' +
        ' "fechaNacimiento" : "1997-11-25", "rfc" : "RAHL930725", "curp" : "RAHL930725MDFMNR05", "domicilio" : "Calle ABC", "codigoP" : "38118", ' +
        ' "ciudad" : "Leon", "estado" : "Gto",  "foto" : "personam10.jpg" }, ' +
        // objeto usuario
        ' "usuario" : {"nombreUsuario" : "ELaura",   "contrasena" : "ELaura5785",   "rol" : "EMPS", "email": "laura.ramirez@example.com", "telefono" : "4774567890"},' +
        // objeto sucursal
        ' "sucursal" : {"nombre" : "Centro" }' +
        '},' +
        // EMPLEADO 6 (Atención a clientes)
        '{"codigo" : "200021", "ingreso" : "2015-06-04", "puesto" : "Atención a Clientes", "salarioBruto" : "25,000", "estatus" : "Activo", ' +
        // objeto persona
        ' "persona": {"nomEmpleado" : "Pedro", "apellidoPaterno" : "Díaz", "apellidoMaterno" : "Gómez", "genero": "Masculino", ' +
        ' "fechaNacimiento" : "1995-11-30", "rfc" : "DIGP880820", "curp" : "DIGP880820HDFMMS06", "domicilio" : "Calle ABC", "codigoP" : "64000", ' +
        ' "ciudad" : "Leon", "estado" : "Gto",  "foto" : "persona11.jpg" }, ' +
        // objeto usuario
        ' "usuario" : {"nombreUsuario" : "EPedro",   "contrasena" : "EPedro5785",   "rol" : "EMPS", "email": "Pedro@example.com", "telefono" : "4774567890"},' +
        // objeto sucursal
        ' "sucursal" : {"nombre" : "Centro" }' +
        '},' +
        // EMPLEADO 7 (Atención a clientes)
        '{"codigo" : "2100041", "ingreso" : "2021-05-24", "puesto" : "Atención a Clientes", "salarioBruto" : "30,000", "estatus" : "Activo", ' +
        // objeto persona
        ' "persona": {"nomEmpleado" : "Carlos", "apellidoPaterno" : "Sánchez", "apellidoMaterno" : "López", "genero": "Masculino", ' +
        ' "fechaNacimiento" : "2000-12-13", "rfc" : "LOCS870512", "curp" : "LOCS870512HDFNCN04", "domicilio" : "Calle ABC", "codigoP" : "37321", ' +
        ' "ciudad" : "Leon", "estado" : "Gto",  "foto" : "persona12.jpg" }, ' +
        // objeto usuario
        ' "usuario" : {"nombreUsuario" : "ECarlos",   "contrasena" : "ECarlos5785",   "rol" : "EMPS", "email": "Carlos.lopez@example.com", "telefono" : "4774567890"},' +
        // objeto sucursal
        ' "sucursal" : {"nombre" : "Centro" }' +
        '},' +
        // EMPLEADO 8 (Atención a clientes)
        '{"codigo" : "2100124", "ingreso" : "2021-06-11", "puesto" : "Atención a Clientes", "salarioBruto" : "30,000", "estatus" : "Activo", ' +
        // objeto persona
        ' "persona": {"nomEmpleado" : "María", "apellidoPaterno" : "Martínez", "apellidoMaterno" : "Rodríguez", "genero": "Femenino", ' +
        ' "fechaNacimiento" : "1999-05-05", "rfc" : "MAMR901210", "curp" : "MAMR901210MDFDRO03", "domicilio" : "Calle ABC", "codigoP" : "472211", ' +
        ' "ciudad" : "Leon", "estado" : "Gto",  "foto" : "personam13.jpg" }, ' +
        // objeto usuario
        ' "usuario" : {"nombreUsuario" : "EMaría",   "contrasena" : "EMaría5785",   "rol" : "EMPS", "email": "María.martinez@example.com", "telefono" : "4774567810"},' +
        // objeto sucursal
        ' "sucursal" : {"nombre" : "Centro" }' +
        '},' +
        // EMPLEADO 9 (Atención a clientes)
        '{"codigo" : "214589", "ingreso" : "2023-05-08", "puesto" : "Atención a Clientes", "salarioBruto" : "30,000", "estatus" : "Activo", ' +
        // objeto persona
        ' "persona": {"nomEmpleado" : "Ricardo", "apellidoPaterno" : "Fernández", "apellidoMaterno" : "Díaz", "genero": "Masculino", ' +
        ' "fechaNacimiento" : "1990-11-12", "rfc" : "RADI930601", "curp" : "RADI930601HDFRMR09", "domicilio" : "Calle ABC", "codigoP" : "37112", ' +
        ' "ciudad" : "Leon", "estado" : "Gto",  "foto" : "persona14.jpg" }, ' +
        // objeto usuario
        ' "usuario" : {"nombreUsuario" : "EPedro",   "contrasena" : "EPedro5785",   "rol" : "EMPS", "email": "Ricardo.fernandez@example.com", "telefono" : "4774567890"},' +
        // objeto sucursal
        ' "sucursal" : {"nombre" : "Centro" }' +
        '},' +
        // EMPLEADO 10 (Atención a clientes)
        '{"codigo" : "08230013", "ingreso" : "2018-04-19", "puesto" : "Atención a Clientes", "salarioBruto" : "20,000", "estatus" : "Activo", ' +
        // objeto persona
        ' "persona": {"nomEmpleado" : "Luis", "apellidoPaterno" : "González", "apellidoMaterno" : "Ramírez", "genero": "Masculino", ' +
        ' "fechaNacimiento" : "1990-05-11", "rfc" : "GORL750215DEF", "curp" : "GORL750215MDFRMS05", "domicilio" : "Calle ABC", "codigoP" : "11285", ' +
        ' "ciudad" : "Leon", "estado" : "Gto",  "foto" : "persona4.jpg" }, ' +
        // objeto usuario
        ' "usuario" : {"nombreUsuario" : "ELuis",   "contrasena" : "ELuis5785",   "rol" : "EMPS", "email": "Luis.gonzales@example.com", "telefono" : "4775678901"},' +
        // objeto sucursal
        ' "sucursal" : {"nombre" : "Centro" }' +
        '}' +
        '] }';

let indexEmpleadoSeleccionado;
let obj = [];
let ultimoCodigo;

obj = JSON.parse(text);
console.log(obj);
actualizaTabla();

function actualizaTabla() {
    let cuerpo = "";
    obj.empleados.forEach(function (empleado) {
        let registro =
                '<tr onclick="selectEmpleado(' + obj.empleados.indexOf(empleado) + ');">' +
                '<td>' + obj.empleados.indexOf(empleado) + '</td>' +
                '<td>' + empleado.codigo + '</td>' +
                '<td>' + empleado.persona.nomEmpleado + " " + empleado.persona.apellidoPaterno + " " + empleado.persona.apellidoMaterno + '</td>' +
                '<td>' + empleado.puesto + '</td>' +
                '<td>' + empleado.usuario.rol + '</td>' +
                '<td> <img src="./../../Imagenes/empleados/' + empleado.persona.foto + ' " width="100" > </td>' +
                '<td>' + empleado.estatus + '</td></tr>';
        ultimoCodigo = empleado.codigo;
        cuerpo += registro;
    });
    document.getElementById("tblEmpleados").innerHTML = cuerpo;
}

function selectEmpleado(index) {
    document.getElementById("txtCodigo").value = obj.empleados[index].codigo;
    document.getElementById("txtfechaI").value = obj.empleados[index].ingreso;
    document.getElementById("txtpuesto").value = obj.empleados[index].puesto;
    document.getElementById("txtSalario").value = obj.empleados[index].salarioBruto;

    document.getElementById("txtnombre").value = obj.empleados[index].persona.nomEmpleado;
    document.getElementById("txtapellidop").value = obj.empleados[index].persona.apellidoPaterno;
    document.getElementById("txtapellidom").value = obj.empleados[index].persona.apellidoMaterno;
    document.getElementById("txtgenero").value = obj.empleados[index].persona.genero;
    document.getElementById("txtfechaN").value = obj.empleados[index].persona.fechaNacimiento;
    document.getElementById("txtrfc").value = obj.empleados[index].persona.rfc;
    document.getElementById("txtcurp").value = obj.empleados[index].persona.curp;
    document.getElementById("txtdomicilio").value = obj.empleados[index].persona.domicilio;
    document.getElementById("txtcodigop").value = obj.empleados[index].persona.codigoP;
    document.getElementById("txtCiudad").value = obj.empleados[index].persona.ciudad;
    document.getElementById("txtestado").value = obj.empleados[index].persona.estado;
    let ruta = './../../Imagenes/empleados/';
    document.getElementById("txtFoto").src = ruta + obj.empleados[index].persona.foto;
    document.getElementById("txtFotoRuta").value = "";

    document.getElementById("txtNomUsuario").value = obj.empleados[index].usuario.nombreUsuario;
    document.getElementById("txtContrasena").value = obj.empleados[index].usuario.contrasena;
    document.getElementById("txtRol").value = obj.empleados[index].usuario.rol;
    document.getElementById("txtEmail").value = obj.empleados[index].usuario.email;
    document.getElementById("txtTelefono").value = obj.empleados[index].usuario.telefono;

    document.getElementById("txtSucursal").value = obj.empleados[index].sucursal.nombre;

    indexEmpleadoSeleccionado = index;
}

function limpiar() {
    document.getElementById("txtCodigo").value = "";
    document.getElementById("txtfechaI").value = "";
    document.getElementById("txtpuesto").value = "";
    document.getElementById("txtSalario").value = "";

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
    document.getElementById("txtFoto").src = "./../../Imagenes/fotovacia.png";
    document.getElementById("txtFotoRuta").value = "";

    document.getElementById("txtNomUsuario").value = "";
    document.getElementById("txtContrasena").value = "";
    document.getElementById("txtRol").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtTelefono").value = "";

    document.getElementById("txtSucursal").value = "";

    document.getElementById("btnModificar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    indexEmpleadoSeleccionado = 0;
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

        lector.onload = function (e) {
            vistaPrevia.src = e.target.result;
        }

        lector.readAsDataURL(archivoSeleccionado);
    } else {
        vistaPrevia.src = './../../Imagenes/fotovacia.png';
    }
}

function agregarEmpleado() {
    let codigo, ingreso, puesto, salarioBruto, nomEmpleado, apellidoPaterno, apellidoMaterno, genero, fechaNacimiento, rfc,
            curp, domicilio, codigoP, ciudad, estado, foto, nombreUsuario, contrasena, rol, email, telefono, nombre;

    codigo = document.getElementById("txtCodigo").value;
    ingreso = document.getElementById("txtfechaI").value;
    puesto = document.getElementById("txtpuesto").value;
    salarioBruto = document.getElementById("txtSalario").value;

    nomEmpleado = document.getElementById("txtnombre").value;
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
    foto = obtenerNombreFoto();

    nombreUsuario = document.getElementById("txtNomUsuario").value;
    contrasena = document.getElementById("txtContrasena").value;
    rol = document.getElementById("txtRol").value;
    email = document.getElementById("txtEmail").value;
    telefono = document.getElementById("txtTelefono").value;

    nombre = document.getElementById("txtSucursal").value;

    function formatoABC(texto) {
        const patron = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
        return patron.test(texto);
    }
    function formato123(texto) {
        const patron = /^[0-9]+$/;
        return patron.test(texto);
    }

    function formatoCorreo(correo) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(correo);
    }

    // Validar que los campos obligatorios no estén vacíos
    if (!nomEmpleado || !apellidoPaterno || !apellidoMaterno || !genero || !rfc || !curp || !domicilio || !codigoP || !ciudad || !estado || !telefono || !ingreso || !salarioBruto || !email || !puesto || !nombreUsuario || !contrasena) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos obligatorios.'
        });
        return;
    }
    // Validar que los campos de Nombre, Apellido Paterno, Apellido Materno, Ciudad y Estado solo contengan letras
    if (!formatoABC(nomEmpleado) || !formatoABC(apellidoPaterno) || !formatoABC(apellidoMaterno) || !formatoABC(ciudad) || !formatoABC(estado)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingresa solo letras en los campos de Nombre, Apellido Paterno, Apellido Materno, Ciudad y Estado.'
        });
        return;
    }
    // Validar que los campos de Código Postal, Teléfono y Salario Bruto solo contengan números
    if (!formato123(codigoP) || !formato123(telefono)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingresa solo números en los campos de Código Postal y Teléfono.'
        });
        return;
    }
    salarioBruto = salarioBruto.replace(',', '');
    if (!formato123(salarioBruto)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingresa solo números en el campo de Salario Bruto.'
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

    // Convertir las fechas de ingreso y fecha de nacimiento en objetos Date
    const fechaIngreso = new Date(ingreso);
    const fechaNac = new Date(fechaNacimiento);

    // Obtener el año, mes y día de las fechas
    const anioIngreso = fechaIngreso.getFullYear();
    const mesIngreso = fechaIngreso.getMonth() + 1;
    const diaIngreso = fechaIngreso.getDate();

    const anioNac = fechaNac.getFullYear();
    const mesNac = fechaNac.getMonth() + 1;
    const diaNac = fechaNac.getDate();

    // Comparar con la fecha actual
    if (anioIngreso > anioActual || (anioIngreso === anioActual && mesIngreso > mesActual) || (anioIngreso === anioActual && mesIngreso === mesActual && diaIngreso > diaActual)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La fecha de ingreso no puede ser una fecha futura.'
        });
        return;
    }

    if (anioNac > anioActual || (anioNac === anioActual && mesNac > mesActual) || (anioNac === anioActual && mesNac === mesActual && diaNac > diaActual)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La fecha de nacimiento no puede ser una fecha futura.'
        });
        return;
    }

    let newEmpleado = {};

    newEmpleado.codigo = codigo;
    newEmpleado.ingreso = ingreso;
    newEmpleado.puesto = puesto;
    newEmpleado.salarioBruto = salarioBruto;
    newEmpleado.estatus = "Activo";

    newEmpleado.persona = {}; // creamos objeto anidado persona
    newEmpleado.persona.nomEmpleado = nomEmpleado;
    newEmpleado.persona.apellidoPaterno = apellidoPaterno;
    newEmpleado.persona.apellidoMaterno = apellidoMaterno;
    newEmpleado.persona.genero = genero;
    newEmpleado.persona.fechaNacimiento = fechaNacimiento;
    newEmpleado.persona.rfc = rfc;
    newEmpleado.persona.curp = curp;
    newEmpleado.persona.domicilio = domicilio;
    newEmpleado.persona.codigoP = codigoP;
    newEmpleado.persona.ciudad = ciudad;
    newEmpleado.persona.estado = estado;
    newEmpleado.persona.foto = foto;

    newEmpleado.usuario = {};
    newEmpleado.usuario.nombreUsuario = nombreUsuario;
    newEmpleado.usuario.contrasena = contrasena;
    newEmpleado.usuario.rol = rol;
    newEmpleado.usuario.email = email;
    newEmpleado.usuario.telefono = telefono;

    newEmpleado.sucursal = {};
    newEmpleado.sucursal.nombre = nombre;

    obj.empleados.push(newEmpleado);

    let jsonData = JSON.stringify(obj.empleados);
    console.log(jsonData);
    console.log(typeof (jsonData));

    // Mostrar mensaje de éxito personalizado
    Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success'
        },
        showConfirmButton: true,
        confirmButtonText: 'Aceptar'
    }).fire({
        icon: 'success',
        title: '¡Empleado agregado!',
        text: 'El empleado ha sido agregado con éxito.'
    });

    limpiar();
    actualizaTabla();
}

function eliminarEmpleado() {
    Swal.fire({
        customClass: {
            confirmButton: 'btn btn-danger',
            cancelButton: 'btn btn-secondary'
        },
        icon: 'warning',
        title: '¿Estás seguro?',
        text: '¿Quieres eliminar el empleado seleccionado?',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Sí, eliminar',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            obj.empleados[indexEmpleadoSeleccionado].estatus = 'Inactivo';
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            actualizaTabla();
            Swal.fire({
                customClass: {
                    confirmButton: 'btn btn-success'
                },
                icon: 'success',
                title: '¡Empleado eliminado!',
                text: 'El empleado ha sido eliminado con éxito.',
                confirmButtonText: 'Aceptar'
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        }
    });
}

//funcion para modificar cliente con sweet alert
function modificaEmpleado() {
    Swal.fire({
        customClass: {
            confirmButton: 'btn btn-warning',
            cancelButton: 'btn btn-secondary'
        },
        icon: 'question',
        title: '¿Estás seguro?',
        text: '¿Quieres modificar el empleado seleccionado?',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Sí, modificar',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            // Código para modificar el empleado
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
                title: '¡Empleado modificado!',
                text: 'El empleado ha sido modificado con éxito.',
                confirmButtonText: 'Aceptar'
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        }
    });
}

function modificarRegistro() {
    let codigo, ingreso, puesto, salarioBruto, nomEmpleado, apellidoPaterno, apellidoMaterno, genero, fechaNacimiento, rfc,
            curp, domicilio, codigoP, ciudad, estado, foto, nombreUsuario, contrasena, rol, email, telefono, nombre;

    codigo = document.getElementById("txtCodigo").value;
    ingreso = document.getElementById("txtfechaI").value;
    puesto = document.getElementById("txtpuesto").value;
    salarioBruto = document.getElementById("txtSalario").value;

    nomEmpleado = document.getElementById("txtnombre").value;
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
    foto = obtenerNombreFoto();

    nombreUsuario = document.getElementById("txtNomUsuario").value;
    contrasena = document.getElementById("txtContrasena").value;
    rol = document.getElementById("txtRol").value;
    email = document.getElementById("txtEmail").value;
    telefono = document.getElementById("txtTelefono").value;

    nombre = document.getElementById("txtSucursal").value;


    // Validar que los campos obligatorios no estén vacíos
    if (!nomEmpleado || !apellidoPaterno || !apellidoMaterno || !genero || !rfc || !curp || !domicilio || !codigoP || !ciudad || !estado || !telefono || !ingreso || !salarioBruto || !email || !puesto || !nombreUsuario || !contrasena) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos obligatorios.'
        });
        return;
    }

    let newEmpleado = {};

    newEmpleado.codigo = codigo;
    newEmpleado.ingreso = ingreso;
    newEmpleado.puesto = puesto;
    newEmpleado.salarioBruto = salarioBruto;
    newEmpleado.estatus = "Activo";

    newEmpleado.persona = {}; // creamos objeto anidado persona
    newEmpleado.persona.nomEmpleado = nomEmpleado;
    newEmpleado.persona.apellidoPaterno = apellidoPaterno;
    newEmpleado.persona.apellidoMaterno = apellidoMaterno;
    newEmpleado.persona.genero = genero;
    newEmpleado.persona.fechaNacimiento = fechaNacimiento;
    newEmpleado.persona.rfc = rfc;
    newEmpleado.persona.curp = curp;
    newEmpleado.persona.domicilio = domicilio;
    newEmpleado.persona.codigoP = codigoP;
    newEmpleado.persona.ciudad = ciudad;
    newEmpleado.persona.estado = estado;
    // Verificar si se ha seleccionado una nueva foto
    let nuevaFoto = obtenerNombreFoto();
    if (nuevaFoto !== "") {
        newEmpleado.persona.foto = nuevaFoto; // Actualizar la foto con la nueva foto
    } else {
        newEmpleado.persona.foto = obj.empleados[indexEmpleadoSeleccionado].persona.foto; // Mantener la foto original
    }

    newEmpleado.usuario = {};
    newEmpleado.usuario.nombreUsuario = nombreUsuario;
    newEmpleado.usuario.contrasena = contrasena;
    newEmpleado.usuario.rol = rol;
    newEmpleado.usuario.email = email;
    newEmpleado.usuario.telefono = telefono;

    newEmpleado.sucursal = {};
    newEmpleado.sucursal.nombre = nombre;

    obj.empleados[indexEmpleadoSeleccionado] = newEmpleado;
}

function generaCodigo(fecha) {
    let codigo = 0;

    console.log("fecha", fecha);

    let anio = fecha.substring(2, 4);
    console.log("año", anio);

    let mes = fecha.substring(5, 7);
    console.log("mes", mes);

    ultimoCodigo = Number(ultimoCodigo.substring(4, 8)) + 1;
    console.log("ultimoCodigo", ultimoCodigo);

    if (ultimoCodigo < 10)
        codigo = anio + mes + "000" + ultimoCodigo;
    else if (ultimoCodigo < 100)
        codigo = anio + mes + "00" + ultimoCodigo;
    else if (ultimoCodigo < 1000)
        codigo = anio + mes + "0" + ultimoCodigo;
    else
        codigo = anio + mes + ultimoCodigo;

    console.log("codigo", codigo);

    document.getElementById("txtCodigo").value = codigo;

}


document.getElementById("buscarInput").addEventListener("input", buscarEmpleado);

document.getElementById("buscarInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        buscarEmpleado();
    }
});

function buscarEmpleado() {
    let buscarValor = document.getElementById("buscarInput").value.trim().toLowerCase();

    if (buscarValor === "") {
        actualizaTabla();
        return;
    }

    let empleadosFiltrados = obj.empleados.filter((empleado) => {
        return Object.values(empleado).some((value) => {
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
    empleadosFiltrados.forEach(function (empleado) {
        let registro =
            '<tr onclick="selectEmpleado(' + obj.empleados.indexOf(empleado) + ');">' +
            '<td>' + obj.empleados.indexOf(empleado) + '</td>' +
            '<td>' + empleado.codigo + '</td>' +
            '<td>' + empleado.persona.nomEmpleado + " " + empleado.persona.apellidoPaterno + " " + empleado.persona.apellidoMaterno + '</td>' +
            '<td>' + empleado.puesto + '</td>' +
            '<td>' + empleado.usuario.rol + '</td>' +
            '<td> <img src="./../../Imagenes/empleados/' + empleado.persona.foto + '" width="100" > </td>' +
            '<td>' + empleado.estatus + '</td></tr>';

        cuerpo += registro;
    });

    document.getElementById("tblEmpleados").innerHTML = cuerpo;
}

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
        showConfirmButton: false
    });
}


// funcion para mostrar la sucursal y el admin/empleado
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