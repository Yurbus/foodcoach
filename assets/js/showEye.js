let button2 = document.getElementById("showEye2");
button2.onclick = showEye2;

let input2 = document.getElementById("show2");
let icon = document.getElementById("i");

function showEye2 () {
    if(input2.getAttribute('type') == 'password') {
        input2.removeAttribute('type');
        input2.setAttribute('type', 'text')
        button2.innerHTML='<i id="i" class="far fa-eye-slash">';
    } else {
        input2.removeAttribute('type');
        input2.setAttribute('type', 'password');
        button2.innerHTML='<i id="i" class="far fa-eye">';
    }
}