<?php
session_start();
    header("Content-type: application/json");
    include_once("../class/class-administradores.php");

 /*   if(!isset($_SESSION["token"])){
        echo '{"mensaje":"Acceso no autorizado"}';
        exit;
    }
    
    if(!isset($COOKIE["token"])){
        echo '{"mensaje":"Acceso no autorizado"}';
        exit;
    }
    
    if($_SESSION["token"] != $COOKIE["token"] ){
        echo '{"mensaje":"Acceso no autorizado"}';
        exit;
    }*/
    
    $_POST = json_decode(file_get_contents('php://input'), true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
          //  $_POST = json_decode(file_get_contents('php://input'), true);
            /*
            $administrador = new Administradores($_POST['email'], $_POST['password']);
            $administrador->guardarAdministrador();
            $resultado["Mensaje"] = "Guardar el usuario, informacion: ". json_encode($_POST);*/
           $administrador = Administradores::verificarAdmin($_POST['email'], $_POST['password']);
           if($administrador){
            //   echo '{"codigoResultado":1,"mensaje": "Usuario autenticado", "token":"'.sha1(uniquid(rand(),true)).'}';
            $resultado = array(
                "codigoResultado"=>1,
                "mensaje"=>"Usuario autenticado",
                "token"=>sha1(uniqid(rand(),true)),
            );
            $_SESSION["token"] = $resultado["token"];
            setcookie("token",$resultado["token"], time() + (60*60*24*31), "/");
            echo json_encode($resultado);
        }else{
            setcookie("token","", time()-1 , "/");
                echo '{"codigoResultado":0,"mensaje": "Usuario/Password incorrectos"}';
        }
           // echo json_encode($_POST);
        break;
    }

?>