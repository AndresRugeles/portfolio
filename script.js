// Mostrar u Ocultar icono de Menú
const menuIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelector('.nav-links')

// Ocultar menú cuando se de clic en un enlace
const navItems = document.querySelectorAll('.nav-links li a')

// Función para mostrar/ocultar menú
menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

// Función para ocultar menú al hacer clic en cualquier enlace
navItems.forEach(item => {
    item.onclick = () => {
        navLinks.classList.remove('active')
    }
})