import express from "express";
import cors from "cors";
import routerproductos from "./router/routerProducto.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())

//router productos llama las 5 funcines desde aca//
app.use("/productos",routerproductos)

app.use((req, res) => {
    res.status(404).json({error: "Ruta no encontrada"});
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

/*app.use((req, res, next) => {
    console.log("Petición recibida");
    const usuariologeado = true;
    if(usuariologeado){
        next();
    }else{
        res.status(401).json({error: "No autorizado"});
    }       
});


app.get("/productos/:id", (req, res) => {
    try{
        const id = req.params.id;
        const producto = productos.find((producto) => producto.id === id);
        console.log(producto);
        if(!producto){
            res.status(400).json({error: "Producto no encontrado"});
        }else{
            res.status(200).json(producto);
        }
    }catch(error){
        res.status(500).json({error: "Error en el servidor"});
    }
})

/*app.post("/productos", (req, res) => {
    try{
        const {nombre, precio} = req.body;
        if (!nombre || !precio){
            res.status(400).json({error: "Faltan campos requeridos"});
        }
        const producto = {
                id: productos.length + 1,
                nombre: nombre,
                precio: precio,
                ishabilitado: true,
            };
            productos.push(producto);
            res.status(201).json(producto);
        }
     catch(error){
        res.status(500).json({error: "Error en el Servidor"});  
     }   
})*/
/*app.put("/productos/:id", (req, res) => {
    try{
        const {nombre,precio} = req.body;
        const id = (req.params.id);
        const producto = productos.find(producto => producto.id === id);
        if (!nombre && !precio){
            res.status(400).json({error: "Faltan campos requeridos"});
        }else if(!nombre){
                if(!producto){
                    res.status(400).json({error: "Producto no encontrado"});
                }else {
                    producto.precio = precio;
                    res.status(200).json(producto);
                }
        } else if (!precio){
            if(!producto){
                res.status(400).json({error: "Producto no encontrado"});
            }else {
                producto.nombre = nombre;
                res.status(200).json(producto);
            }

        }else{
            if (!producto){
                res.status(400).json({error: "Producto no encontrado"});
            }else {
                producto.nombre = nombre;
                producto.precio = precio;
                res.status(200).json(producto);
            }
        }
    }catch(error){
        res.status(500).json({error: "Error en el Servidor"});
    }
})*/

/*app.delete("/productos/:id", (req, res) => {
    try{
        const id = (req.params.id);
        const producto = productos.find(producto => producto.id === id);
        if(!producto){    
            res.status(400).json({error: "Producto no encontrado"});    
        }else{
            productos.ishabilitado = false;
            res.status(200).json(producto);
        }
    }catch(error){    
        res.status(500).json({error: "Error en el Servidor"});
    }    
})*/
/*app.delete("/productos/definitivo/:id", (req, res) => {
    try{
        const id = (req.params.id);
        productos = productos.filter(producto => producto.id != id);
        console.log(productos.filter(producto => producto.id != id));
        res.status(200).json(producto);
        }catch(error){    
            res.status(500).json({error: "Error en el Servidor"});
    }
    
})*/

