

// window.addEventListener('scroll', function() {
//     const $alfonso = document.querySelector('#alfonso');
//     const $posicion = $alfonso.getBoundingClientRect().top;
//     console.log($posicion);
//     const $tamañodp = window.innerHeight;

//     $alfonso.style.animation = 'mover 1s fade-up'
// })

const $parrafo1 = document.querySelector('#parrafo1')
const $parrafo2 = document.querySelector('#parrafo2')
const $parrafo3 = document.querySelector('#parrafo3')
const $parrafo4 = document.querySelector('#parrafo4')

$parrafo1.addEventListener('click', hover)
function hover() {
    $parrafo2.hidden = false
    $parrafo1.hidden = true
    $parrafo3.hidden = true
    $parrafo4.hidden = true
    $parrafo2.style.animation = 'opacidad 3s'
    console.log('Texto 2 aparece')
}

$parrafo2.addEventListener('click', hover2)
function hover2() {
    $parrafo2.hidden = true
    $parrafo1.hidden = true
    $parrafo3.hidden = false
    $parrafo4.hidden = true
    $parrafo3.style.animation = 'opacidad 3s'
    console.log('Texto 3 aparece')
}
$parrafo3.addEventListener('click', hover3)
function hover3() {
    $parrafo2.hidden = true
    $parrafo1.hidden = true
    $parrafo3.hidden = true
    $parrafo4.hidden = false
    $parrafo4.style.animation = 'opacidad 3s'
    console.log('Texto 4 aparece')
}
$parrafo4.addEventListener('click', hover4)
function hover4() {
    $parrafo2.hidden = true
    $parrafo1.hidden = false
    $parrafo3.hidden = true
    $parrafo4.hidden = true
    $parrafo1.style.animation = 'opacidad 3s'
    console.log('Texto 1 aparece')
}