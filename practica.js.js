const productos = [
     { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
    { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
     { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
     {id: 4, nombre: 'Pantalla', precio: 67000, categoria: 'Pantallas', stock: 0 },
     {id: 5, nombre: 'Pc', precio: 560000, categoria: 'Perifericos', stock: 0 },
    {id: 6, nombre: 'Cascos', precio: 90999, categoria: 'Perifericos', stock: 6 },
    {id: 7, nombre: 'Microfono', precio: 48000, categoria: 'Perifericos', stock: 7},
    {id: 8, nombre: 'Play', precio: 780900, categoria: 'Perifericos', stock: 8 },
    {id: 9, nombre: 'Luces', precio: 30000, categoria: 'Perifericos', stock: 67 },
    {id: 10, nombre: 'Almoadilla', precio: 10000, categoria: 'Perifericos', stock: 9 },
   
    ]; 
console.log(productos);

productos.forEach((productos,) =>
     { console.log(` ${productos.nombre}. ${productos.precio}. ${productos.stock}`);
 });
 const precio = productos.map(productos => productos.precio );
  console.log(precio)* 1.19 ; 

   const resumen = productos.map(productos => ` ${productos.nombre} -Cuesta: ${productos.precio}` );
  console.log(resumen); 

  const disponibles = productos.filter(productos => productos.categoria = 'Pantallas' );

 
   console.log (disponibles,);




const hayAgotados = productos.some(producto => producto.stock === 0);
const preciosValidos = productos.every(producto => producto.precio > 0);
const valorInventario = productos.reduce(
 (total, producto) => total + producto.precio * producto.stock,
 0
);
console.log("¿Hay productos agotados?:", hayAgotados);
console.log("¿Todos los precios son > 0?:", preciosValidos);
console.log("Valor total del inventario:", valorInventario);

console.log(`El producto ${productos[0].nombre} cuesta $${productos[0].precio}`);

const { nombre, precios, stock } = productos[0];
console.log(nombre, precios, stock);

const productoActualizado = {
  ...productos[0],
  stock: 8
};

const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';
console.log(estado);

const copia = { ...productos[2], precio: 50000, stock: 4 };

console.log(
  `El producto ${copia.nombre} cuesta $${copia.precio} (${copia.stock > 0 ? "Disponible" : "Agotado"})`
);

