<?php
    header("Content-type: application/json");
    include_once("../class/class-motoristas-oficiales.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'), true);
            $motorista = new MotoristasOficiales($_POST['nombreCompleto'], $_POST['correoElectronico'], $_POST['numeroCelular'], $_POST['fechaNacimiento'], $_POST['departamentoLaboral'],$_POST['contrasena']);
            $motorista->guardarMotoristaOficial();
            $resultado["Mensaje"] = "Guardar el motorista, informacion: ". json_encode($_POST);
            echo json_encode($resultado);
        break;
        
        // case 'GET':
        //     if(isset($_GET['id'])){
        //         Motoristas::obteneMotoristaOficial($_GET['id']);
        //     }else{
        //         Motoristas::obtenerMotoristasOficiales();
        //     }
        //  break;
        case 'PUT':
           //...
        break;

        case 'DELETE':
            Motoristas::eliminarMotoristaOficial($_GET["id"]);
            $resultado["mensaje"]= "Eliminar un usuario con el id: ". $_GET['id'];
            echo json_encode($resultado);
            break;
    }

?>