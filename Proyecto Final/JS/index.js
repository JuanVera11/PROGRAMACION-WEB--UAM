window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.barra-navegacion');
    const searchItems = document.querySelectorAll('.search-item');
    
    if (window.scrollY > 50) { 
        navbar.classList.add('barra-reducida');


        searchItems[0].querySelector('.fw-bold').textContent = 'En cualquier lugar del mundo';
        searchItems[0].querySelector('.text-muted').textContent = '';
        
        searchItems[1].querySelector('.fw-bold').textContent = 'Cualquier semana';
        searchItems[1].querySelector('.text-muted').textContent = '';
        
        searchItems[2].querySelector('.fw-bold').textContent = '¿Cuántos?';
        searchItems[2].querySelector('.text-muted').textContent = '';

    } else {
        navbar.classList.remove('barra-reducida');

        searchItems[0].querySelector('.fw-bold').textContent = 'Dónde';
        searchItems[0].querySelector('.text-muted').textContent = 'Explora destinos';
        
        searchItems[1].querySelector('.fw-bold').textContent = 'Llegada';
        searchItems[1].querySelector('.text-muted').textContent = 'Agrega fecha...';
        
        searchItems[2].querySelector('.fw-bold').textContent = 'Salida';
        searchItems[2].querySelector('.text-muted').textContent = 'Agrega fecha...';
    }
});