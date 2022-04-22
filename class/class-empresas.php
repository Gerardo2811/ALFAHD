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
        $this->direc$direccion=$direccion;
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
}

?>