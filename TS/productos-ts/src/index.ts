import type { Product } from "./interfaces/product.js";
import { ProductoService } from "./productos.class.js";
const plantilla = document.getElementById("card-template") as HTMLTemplateElement;
const gridContainer = document.querySelector(".grid-container");
const formulario = document.getElementById("formProducto") as HTMLFormElement;
const imgPreview = document.getElementById("imgPreview") as HTMLImageElement;
const pService = new ProductoService();
getProductos();

async function getProductos() {
  const productos = await pService.getProductos();
  productos.forEach(p =>  mostrarProducto(p));
}

function mostrarProducto(producto: Product) {
  const card = (plantilla.content.cloneNode(true)as DocumentFragment).firstElementChild ;
  (card!.querySelector("img") as HTMLImageElement).src=producto.imageUrl;
  (card!.querySelector(".card-price") as HTMLElement).append(new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(producto.price));
  (card!.querySelector(".card-description") as HTMLElement).append(producto.description);
  (card!.querySelector(".card-footer.card-available") as HTMLElement).append(new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(producto.available!)));
  
  (card!.querySelector(".btn.btn-danger") as HTMLButtonElement).addEventListener("click", async (e: Event) => {
    e.preventDefault();
    try {
      await pService.delete(producto.id!);
      card!.remove();
    } catch (error) {
      console.error("No se pudo borrar el producto:", error);
      alert("No se pudo borrar el producto.");
    }
  });
  gridContainer!.append(card!);
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  addProducto();
});

async function addProducto() {
  const producto: Product = {
      description: formulario.description.value,
      price: +formulario.price.value,
      imageUrl: imgPreview.src
    };

  try {
    const p = await pService.add(producto);
    mostrarProducto(p);
    formulario.reset();
    imgPreview.src = "";
  } catch (error) {
    console.error("No se pudo añadir el producto:", error);
    alert("No se pudo añadir el producto.");
  }
}

formulario.image.addEventListener("change", (e: Event) => {
  const file = formulario.image.files[0];
  const reader = new FileReader();

  if (file) {
    // Si se ha seleccionado un archivo válido (convertir a Base64)
    reader.readAsDataURL(file);
  }

  reader.addEventListener("load", () => {
    // Evento de conversión a Base64 completa (asíncrono)
    imgPreview.src = reader.result as string; // Mostramos la imagen cargada en un elemento <img> (previsualización)
  });
});
