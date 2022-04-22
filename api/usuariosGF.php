<?php
    header("Content-type: application/json");
    include_once("../class/class-usuariosGF.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'), true);
            $usuario = new UsuariosGF($_POST['email'], $_POST['password']);
            $usuario->guardarUsuariosGF();
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

?>