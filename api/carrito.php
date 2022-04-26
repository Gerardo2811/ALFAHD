<?php
    header("Content-type: application/json");
    include_once("../class/class-carrito.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            
        break;
        
        case 'GET':
            if(isset($_GET['id'])){
                Carrito::obtenerProducto($_GET['id']);
            }else{
                Carrito::obtenerProductos();
            }
         break;
         
         case 'PUT':
           //..
            break;

        case 'DELETE':
            Carrito::eliminarProducto($_GET["id"]);
            $resultado["mensaje"]= "Eliminar un producto con el id: ". $_GET['id'];
            echo json_encode($resultado);
            break;
    }

?>