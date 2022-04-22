<?php
    header("Content-type: application/json");
    include_once("../class/class-usuarios.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'), true);
            $usuario = new Usuarios($_POST['nombre'], $_POST['email'], $_POST['password']);
            $usuario->guardarUsuarios();
            $resultado["Mensaje"] = "Guardar el usuario, informacion: ". json_encode($_POST);
            echo json_encode($resultado);
        break;
        
        case 'GET':
            //..   
         break;
        case 'PUT':
           //...
        break;

        case 'DELETE':
            //..
    }