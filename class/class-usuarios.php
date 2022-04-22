<?php
class Usuarios{
    private $nombre;
    private $email;
    private $password;

    public function __construct(
        $nombre,
        $email,
        $password
    ){
        $this->nombre=$nombre;
        $this->email=$email;
        $this->password=$password;
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
    public function guardarUsuarios(){
        $contenidoArchivo= file_get_contents("../data/usuarios.json");
        $usuarios = json_decode($contenidoArchivo, true);
        $usuarios[]=array(
            "nombre"=>$this->nombre,
            "email"=>$this->email,
            "password"=>$this->password,
        );
        $archivo = fopen("../data/usuarios.json", "w"); //w para sustituir el contenido
        fwrite($archivo, json_encode($usuarios));
}

    /**
     * Get the value of nombre
     */ 
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set the value of nombre
     *
     * @return  self
     */ 
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }
}
?>