let $modalButton    = document.querySelector('.container .btn');
let $modalOverlay   = document.querySelector('.container .overlay');

let hideModal       = -120;
let showModal       = 0;

$modalButton.addEventListener('click', function () {
    $modalOverlay.style.top = showModal;
});
$modalOverlay.addEventListener('click', function () {
    $modalOverlay.style.top = hideModal + '%';
});