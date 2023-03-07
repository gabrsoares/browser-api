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