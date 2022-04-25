<?php
class MotoristasOficiales{
    private $nombreCompleto;
    private $email;
    private $numeroCelular;
    private $fechaNacimiento;
    private $departamentoLaboral;
    private $password;

    public function __construct(
        $nombreCompleto,
        $email,
        $numeroCelular,
        $fechaNacimiento,
        $departamentoLaboral,
        $password

    ){
        $this->nombreCompleto=$nombreCompleto;
        $this->email=$email;
        $this->numeroCelular=$numeroCelular;
        $this->fechaNacimiento=$fechaNacimiento;
        $this->departamentoLaboral=$departamentoLaboral;
        $this->password=$password;
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
     * Get the value of email
     */ 
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */ 
    public function setEmail($email)
    {
        $this->email = $email;

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
     * Get the value of password
     */ 
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set the value of password
     *
     * @return  self
     */ 
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }



    public function guardarMotoristaOficial(){
        $contenidoArchivo= file_get_contents("../data/empresas.json");
        $empresas = json_decode($contenidoArchivo, true);
        $empresas[]=array(
            "nombreCompleto"=>$this->nombreEmpresa,
            "email"=>$this->email,
            "fechaNacimiento"=>$this->fechaNacimiento,
            "departamentoLaboral"=>$this->departamentoLaboral,
            "numeroCelular"=>$this->numeroCelular,
            "password"=>$this->password,
            
        );

        $archivo = fopen("../data/motoristasOficiales.json", "w"); //w para sustituir el contenido
        fwrite($archivo, json_encode($empresas));
}
    public static function obtenerMotoristas(){
        $contenidoArchivo = file_get_contents("../data/motoristasOficiales.json");
        echo $contenidoArchivo;
}

public static function obtenerMotorista($indice){
    $contenidoArchivo =  file_get_contents("../data/motoristasOficiales.json");
    $motoristas= json_decode($contenidoArchivo,true);
    echo json_encode($motoristas[$indice]);
}   

public static function eliminarMotorista($indice){
    $contenidoArchivo =  file_get_contents("../data/motoristasOficiales.json");
    $motoristas= json_decode($contenidoArchivo,true);
    array_splice($motoristas,$indice,1);
    $archivo= fopen("../data/motoristasOficiales.json","w");
    fwrite($archivo,json_encode($motoristas));
    fclose($archivo);

}

public function actualizarMotoristaOficial($indice){
    $contenidoArchivo =  file_get_contents("../data/motoristasOficiales.json");
    $motoristas= json_decode($contenidoArchivo,true);
    $motorista = array (
            'nombreCompleto'=>$this->nombreCompleto,
            'email'=>$this->email,
            'numeroCelular'=>$this->numeroCelular,
            'fechaNacimiento'=>$this->fechaNacimiento,
            'departamentoLaboral'=>$this->departamentoLaboral,
            'password'=>$this->password,
    );
    $motoristas[$indice] = $motorista;
        $archivo= fopen("../data/motoristasOficiales.json","w");
       fwrite($archivo,json_encode($motoristas));
       fclose($archivo);
}
}

?>