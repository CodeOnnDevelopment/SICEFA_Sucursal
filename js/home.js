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

function mostrarModuloAdmin() {
    Swal.fire({
        title: "Alerta",
        text: "Este módulo solo se encuentra para administradores",
        icon: "info",
        confirmButtonText: "Aceptar"
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
