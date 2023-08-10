/* global Swal */

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    const usuarios = [
        {"usuario": "Admin1", "contrasena": "Admin1", "Sucursal": "Sucursal Centro", "nombre": "Carlos"},
        {"usuario": "Admin2", "contrasena": "Admin2", "Sucursal": "Sucursal Centro Max", "nombre": "Alejandro"},
        {"usuario": "Admin3", "contrasena": "Admin3", "Sucursal": "Sucursal Plaza Mayor", "nombre": "Fernanda"}
    ];

    const empleados = [
        {"usuario": "23080014", "contrasena": "23080014", "Sucursal": "Sucursal Centro", "nombre": "Juan"},
        {"usuario": "23070014", "contrasena": "23070014", "Sucursal": "Sucursal Centro Max", "nombre": "María"},
        {"usuario": "23030014", "contrasena": "23030014", "Sucursal": "Sucursal Plaza Mayor", "nombre": "Pedro"}
    ];


    const usuario = usuarios.find(user => user.usuario === username && user.contrasena === password);
    const empleado = empleados.find(emp => emp.usuario === username && emp.contrasena === password);

    if (usuario) {
        // Almacenar usuario en una cookie
        document.cookie = `usuario=${JSON.stringify(usuario)}; path=/`;

        // Redireccionar a la página principal de usuario tipo admin
        window.location.href = "./adminModulos/home.html";

    } else if (empleado) {
        // Almacenar empleado en una cookie
        document.cookie = `empleado=${JSON.stringify(empleado)}; path=/`;

        // Redireccionar a la página principal de empleado
        window.location.href = "./empleadoModulos/home.html";
    } else {
        // Mostrar mensaje de error
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, verifica tus datos.'
        });
    }
});

