// Crea un nuevo objeto Notification con el mensaje "Curso terminado".

function Notification(type) {
    this.display = function () {
        console.log(type);
    }
}

const not1 = new Notification("Curso terminado");

not1.display();