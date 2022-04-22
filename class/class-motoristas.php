<?php

class Motoristas{
    private $nombreCompleto;
    private $correoElectronico;
    private $numeroCelular;
    private $fechaNacimiento;
    private $departamentoLaboral;
    private $contrasena;

    public function __construct(
        $nombreCompleto,
        $correoElectronico,
        $numeroCelular,
        $fechaNacimiento,
        $departamentoLaboral,
        $contrasena

    ){
        $this->nombreCompleto=$nombreCompleto;
        $this->correoElectronico=$correoElectronico;
        $this->numeroCelular=$numeroCelular;
        $this->fechaNacimiento=$fechaNacimiento;
        $this->departamentoLaboral=$departamentoLaboral;
        $this->contrasena=$contrasena;
    }

    /**
     * Get the value of nombreCompleto
     */ 
    public function getNombreCompleto()
    {
        return $this->nombreCompleto;
    }

    /**
     * Set the value of nombreCompleto
     *
     * @return  self
     */ 
    public function setNombreCompleto($nombreCompleto)
    {
        $this->nombreCompleto = $nombreCompleto;

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

    /**
     * Get the value of numeroCelular
     */ 
    public function getNumeroCelular()
    {
        return $this->numeroCelular;
    }

    /**
     * Set the value of numeroCelular
     *
     * @return  self
     */ 
    public function setNumeroCelular($numeroCelular)
    {
        $this->numeroCelular = $numeroCelular;

        return $this;
    }

    /**
     * Get the value of fechaNacimiento
     */ 
    public function getFechaNacimiento()
    {
        return $this->fechaNacimiento;
    }

    /**
     * Set the value of fechaNacimiento
     *
     * @return  self
     */ 
    public function setFechaNacimiento($fechaNacimiento)
    {
        $this->fechaNacimiento = $fechaNacimiento;

        return $this;
    }

    /**
     * Get the value of departamentoLaboral
     */ 
    public function getDepartamentoLaboral()
    {
        return $this->departamentoLaboral;
    }

    /**
     * Set the value of departamentoLaboral
     *
     * @return  self
     */ 
    public function setDepartamentoLaboral($departamentoLaboral)
    {
        $this->departamentoLaboral = $departamentoLaboral;

        return $this;
    }

    /**
     * Get the value of contrasena
     */ 
    public function getContrasena()
    {
        return $this->contrasena;
    }

    /**
     * Set the value of contrasena
     *
     * @return  self
     */ 
    public function setContrasena($contrasena)
    {
        $this->contrasena = $contrasena;

        return $this;
    }


    public function guardarMotorista(){
        $contenidoArchivo= file_get_contents("../data/motoristas.json");
        $motoristas = json_decode($contenidoArchivo, true);
        $motoristas[]=array(
            "nombreCompleto"=>$this->nombreCompleto,
            "correoElectronico"=>$this->correoElectronico,
            "numeroCelular"=>$this->numeroCelular,
            "fechaNacimiento"=>$this->fechaNacimiento,
            "departamentoLaboral"=>$this->departamentoLaboral,
            "contrasena"=>$this->contrasena
            
        );
        $archivo = fopen("../data/motoristas.json", "w"); //w para sustituir el contenido
        fwrite($archivo, json_encode($motoristas));
}
}

?>