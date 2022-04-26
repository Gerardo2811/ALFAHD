<?php
class Administradores{
    private $email;
    private $password;

    public function __construct(
        $email,
        $password
    ){
        
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

   /* public function guardarAdmininistrador(){
        $contenidoArchivo= file_get_contents("../data/administradores.json");
        $administradores = json_decode($contenidoArchivo, true);
        $administradores[]=array(
            "email"=>$this->email,
            "password"=>$this->password,
        );
        $archivo = fopen("../data/administradores.json", "w"); //w para sustituir el contenido
        fwrite($archivo, json_encode($administradores));
}*/

public static function verificarAdmin($email, $password){
    $contenidoArchivoAdmins = file_get_contents('../data/administradores.json');
    $administradores = json_decode($contenidoArchivoAdmins, true);
    for($i=0;$i<sizeof($administradores);$i++){
        if ($administradores[$i]["email"]==$email && $administradores[$i]["password"] == sha1($password)){
            return $administradores[$i];
        }
    }
    return null;
}
}
?>