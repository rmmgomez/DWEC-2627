const form = document.getElementById("formPersona");
const imgPreview = document.getElementById("imgPreview");
const avatar = document.getElementById("avatar");
const userTemplate = document.getElementById("templateRow");
const usersTable = document.getElementById("users");

form.elements.namedItem("avatar").addEventListener('change', event => {

    const archivo = avatar.files[0];

    // Si no hay archivo, no hay error personalizado (el atributo required se encargará) 
    if (!archivo) {
        avatar.setCustomValidity("");
        return;
    }

    if (!archivo.type.startsWith("image")) {
        avatar.setCustomValidity("El archivo debe ser de tipo imagen");
    } else if (archivo.size > 100000) {
        avatar.setCustomValidity("No puedes seleccionar imágenes de más de 100KB");
    } else {
        avatar.setCustomValidity(""); // No hay error
        
        let file = event.target.files[0];
        let reader = new FileReader();
        if (file) reader.readAsDataURL(file); // Serializar en base64
        reader.addEventListener('load', e => { // Serialización terminada
            imgPreview.src = reader.result; // Datos en Base64
        });
    }
    avatar.reportValidity();
});

form.addEventListener('submit', e => { // Evento de envío del formulario
    e.preventDefault(); // Impedimos que se recargue la página

    let obJSON = {
        nombre: form.elements.namedItem("nombre").value,
        aficiones: Array.from(form.elements.namedItem("hobbies"))
            .filter((input) => input.checked)
            .map((input) => input.value),
        avatar: imgPreview.src, // Sería el más correcto pero el más largo también,
    };
    // cloneTemplateDOM(obJSON);
    campeones(obJSON);

});

function campeones(objSON){
    let tr = document.createElement("tr");

    let tdImg = document.createElement("td");
    tdImg.classList.add("fila1");
    let img = document.createElement("img");
    img.src= objSON.avatar;
    tdImg.append(img);
    let tdNombre = document.createElement("td");
    tdNombre.textContent =objSON.nombre;
    let tdAficiones = document.createElement("td");
    
    const formatter = new Intl.ListFormat('es', { style: 'long', type: 'conjunction' });
    tdAficiones.textContent = formatter.format(objSON.aficiones);
   
    tr.append(tdImg, tdNombre, tdAficiones);
    usersTable.querySelector("tbody").append(tr);
}

function cloneTemplateDOM(objetoClonar) {

     const tr = userTemplate.content.cloneNode(true).firstElementChild;
     tr.querySelector("img").src = objetoClonar.avatar;
     tr.querySelector(".fila2").textContent = objetoClonar.nombre;
     tr.querySelector(".fila3").textContent = objetoClonar.aficiones;
    usersTable.querySelector("tbody").append(tr);

    form.reset(); // Limpia los campos del formulario
    imgPreview.src = "";
}
