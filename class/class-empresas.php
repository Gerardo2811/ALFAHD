<?php
class Empresas{
    private $nombreEmpresa;
    private $tiempo;
    private $direccion;
    private $numeroTelefono;
    private $correoElectronico;

    public function __construct(
        $nombreEmpresa,
        $tiempo,
        $direccion,
        $numeroTelefono,
        $correoElectronico

    ){
        $this->nombreEmpresa=$nombreEmpresa;
        $this->tiempo=$tiempo;
        $this->direccion=$direccion;
        $this->numeroTelefono=$numeroTelefono;
        $this->correoElectronico=$correoElectronico;
    }

    /**
     * Get the value of nombreEmpresa
     */ 
    public function getNombreEmpresa()
    {
        return $this->nombreEmpresa;
    }

    /**
     * Set the value of nombreEmpresa
     *
     * @return  self
     */ 
    public function setNombreEmpresa($nombreEmpresa)
    {
        $this->nombreEmpresa = $nombreEmpresa;

        return $this;
    }

    /**
     * Get the value of tiempo
     */ 
    public function getTiempo()
    {
        return $this->tiempo;
    }

    /**
     * Set the value of tiempo
     *
     * @return  self
     */ 
    public function setTiempo($tiempo)
    {
        $this->tiempo = $tiempo;

        return $this;
    }

    /**
     * Get the value of direccion
     */ 
    public function getDireccion()
    {
        return $this->direccion;
    }

    /**
     * Set the value of direccion
     *
     * @return  self
     */ 
    public function setDireccion($direccion)
    {
        $this->direccion = $direccion;

        return $this;
    }

    /**
     * Get the value of numeroTelefono
     */ 
    public function getNumeroTelefono()
    {
        return $this->numeroTelefono;
    }

    /**
     * Set the value of numeroTelefono
     *
     * @return  self
     */ 
    public function setNumeroTelefono($numeroTelefono)
    {
        $this->numeroTelefono = $numeroTelefono;

        return $this;
    }

    /**
     * Get the value of correoElectronico
     */ 
    public function getCorreoElectronico()
    {
        return $this->correoElectronico;
    }

    /**
     * Set the value of correoElectronico
     *
     * @return  self
     */ 
    public function setCorreoElectronico($correoElectronico)
    {
        $this->correoElectronico = $correoElectronico;

        return $this;
    }


    public function guardarEmpresas(){
        $contenidoArchivo= file_get_contents("../data/empresas.json");
        $empresas = json_decode($contenidoArchivo, true);
        $empresas[]=array(
            "nombreEmpresa"=>$this->nombreEmpresa,
            "tiempo"=>$this->tiempo,
            "direccion"=>$this->direccion,
            "numeroTelefono"=>$this->numeroTelefono,
            "correoElectronico"=>$this->correoElectronico,
            
        );

        $archivo = fopen("../data/empresas.json", "w"); //w para sustituir el contenido
        fwrite($archivo, json_encode($empresas));
}
    public static function obtenerEmpresas(){
        $contenidoArchivo = file_get_contents("../data/empresas.json");
        echo $contenidoArchivo;
}

public static function obtenerEmpresa($indice){
    $contenidoArchivo =  file_get_contents("../data/empresas.json");
    $empresas= json_decode($contenidoArchivo,true);
    echo json_encode($empresas[$indice]);
}   

public static function eliminarEmpresas($indice){
    $contenidoArchivo =  file_get_contents("../data/empresas.json");
    $empresas= json_decode($contenidoArchivo,true);
    array_splice($empresas,$indice,1);
    $archivo= fopen("../data/empresas.json","w");
    fwrite($archivo,json_encode($empresas));
    fclose($archivo);

}

public function actualizarEmpresa($indice){

    $contenidoArchivo =  file_get_contents("../data/empresas.json");
    $empresas= json_decode($contenidoArchivo,true);
    $empresa = array (
        'nombreEmpresa'=>$this->nombreEmpresa,
            'tiempo'=>$this->tiempo,
            'direccion'=>$this->direccion,
            'numeroTelefono'=>$this->numeroTelefono,
            'correoElectronico'=>$this->correoElectronico,
    );

    $empresas[$indice] = $empresa;
        $archivo= fopen("../data/empresas.json","w");
       fwrite($archivo,json_encode($empresas));
       fclose($archivo);
}



}

?>