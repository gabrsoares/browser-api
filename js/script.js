if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation);
}

function showLocation (position) {
    const long = position.coords.longitude
    const lat = position.coords.latitude

    const url = `https://maps.google.com/maps?q=${lat},${long}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    window.open(url, 'map')
}

function getNotification() {
    if (Notification.permission === "granted") {

        const notify = new Notification ('Olá, seja bem vindo(a) de volta ao nosso site!');

    } else if (Notification.permission !== "denied") {

        Notification.requestPermission (function(perm){
            if (perm === "granted") {
                const notify = new Notification('Seja bem vindo ao nosso site!')
            }
        })
    }
}

function dragStart(e) {
    console.log(e.dataTransfer);

    e.dataTransfer.setData('text/plain', e.target.id);

    e.currentTarget.style.backgroundColor = 'gray'
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    const id = e.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = e.target;

    dropzone.appendChild(draggableElement);

    e.dataTransfer.clearData();
}