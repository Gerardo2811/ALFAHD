<?php
class Restaurantes{

private $tipoRestaurante;

public function __construct(
    $tipoRestaurante
){
    $this->tipoRestaurante=$tipoRestaurante;
}

function obtenerRestaurantes(){
    $contenidoArchivo=file_get_contents('../data/catalogo.json');
    $restaurantes=json_decode($contenidoArchivo, true);
    $restaurante= null;
    for ($i=0; $i <sizeof($restaurantes) ; $i++) { 
        if ($restaurantes[$i]["tipoRestaurante"]==$tipoRestaurante) {
            $restaurante=$restaurantes[$i];
            break;
        }
    }
    echo json_encode($restaurante["tipoRestaurante"]);
}



/**
 * Get the value of tipoRestaurante
 */ 
public function getTipoRestaurante()
{
return $this->tipoRestaurante;
}

/**
 * Set the value of tipoRestaurante
 *
 * @return  self
 */ 
public function setTipoRestaurante($tipoRestaurante)
{
$this->tipoRestaurante = $tipoRestaurante;

return $this;
}
}


?>