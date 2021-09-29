# React JS - CoderHouse

## Acetar del Proyecto:

Ecomerce de productos informaticos realizado mediante los desafios asignados a lo largo del curso.

![alt-text](https://giphy.com/embed/Qjv7qNLjBUXwmRCiBj.gif)

### Herramientas Utilizadas:

- React JS.
- JavaScript.
- BootsTrap.
- HTML5/CSS.
- FireBase.
- AppNetlify

### Instalación del Proyecto:

1. Debe clonar el repositorio utlizando git clone https://github.com/Enrique-N/My-Ecomerce.git
2. Luego deberá instalar todas las dependencias del proyecto, para eso deberá ejecutar npm install (también puede utilizar npm i)
3. Por último, puede ejecutar el proyecto y realizar las pruebas utilizando npm start. Si no desea instalar el proyecto, puede utilizarlo ingresando al siguiente enlace: https://enrique-ninapaytan-ecomerce.netlify.app/

## Funcionalidad del Proyecto: 

### NavBar:

- Puedes navegar a las distintas secciones en forma SPA.
- Secciones a mostrar: Home / Categoria / CartShop
- Muestra el carrito de compras con la cantidad de productos cuando este tenga algun producto dentro.

### Sección Home:

- Muestra todos los productos a vender del emprendedor.
- Muestra el filtrado de productos Ryzen y Intel por separado.
- Si los productos mostrados estan agotados aparecerá la imagen del producto griss con la palabra "unavailable".
- Si se intenta agregar un producto agotado aparecera un PopUp donde indica que el producto esta agotado.
- Al agotarse el stock de los productos, estos cambian a agotado automaticamente.

### Detalle del Producto:

- Al ingresar al detalle del producto se muestra:
  - Nombre
  - Precio
  - Stock
  - Caracteristica.
- Puede volver al Home a seguir comprando.
  
### CartShop:

- En el CartSop se muestra los productos agregados al carrito para visualizar la cantidad y el precio total de lo que se va comprar.
- Se puede eliminar los productos.
- Se puede volver a la pantalla de Home sin perder los objetos en el CartShop.
- Se puede limpiar el CartShop por completo.
- Finalizar la compra de productos.

### CheckOut:

- Pide llenar un formulario con los datos para el envio de la compra.
- El formulario no se puede enviar si no estan todos los campos llenos.
- Si la operación fue exitosa se le otorgara una orden de compra en codigo.
- Al finalizar la compra el CartShop queda vacio y puedes volver al Home a seguir comprando.
