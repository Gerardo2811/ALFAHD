<?php
    header("Content-type: application/json");
    include_once("../class/class-empresas.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'), true);
            $empresas = new Empresas($_POST["nombreEmpresa"], $_POST["tiempo"], $_POST["direccion"], $_POST["numeroTelefono"], $_POST["correoElectronico"]);
            $empresas->guardarEmpresas();
            $resultado["Mensaje"] = "Guardar el empresas, informacion: ". json_encode($_POST);
            echo json_encode($resultado);
        break;
        
        case 'GET':
            if(isset($_GET['id'])){
                Empresas::obtenerEmpresa($_GET['id']);
            }else{
                Empresas::obtenerEmpresas();
            }
         break;
         
         case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input') , true);
            $empresas = new Empresas($_PUT['nombreEmpresa'],$_PUT['tiempo'],$_PUT['direccion'],$_PUT['numeroTelefono'], $_PUT['correoElectronico']);
            $empresas->actualizarEmpresa($_GET['id']);
    
          $resultado["mensaje"]= "actualizar un usuario con el id: ". $_GET['id']." , "."Informacion a actualizar: ". json_encode($_PUT);
            echo json_encode($resultado);
            break;

        case 'DELETE':
            Empresas::eliminarEmpresas($_GET["id"]);
            $resultado["mensaje"]= "Eliminar un usuario con el id: ". $_GET['id'];
            echo json_encode($resultado);
            break;
    }

?>