<?php
    class Categoria{
        Private $nombreCategoria;
        Private $idCategoria;
        Private $descripcion;
        Private $color;
        Private $icono;
        Private $empresas;
        
        public function __construct(
            $nombreCategoria,
            $idCategoria,
            $descripcion,
            $color,
            $icono,
            $empresas

        ){
            $this->nombreCategoria=$nombreCategoria;
            $this->idCategoria=$idCategoria;
            $this->descripcion=$descripcion;
            $this->color=$color;
            $this->icono=$icono;
            $this->empresas=$empresas;
        }
        public static function obtenerCategorias(){
            $contenidoArchivo=file_get_contents('../data/categorias.json');
            echo $contenidoArchivo;
        }
        public static function obtenerCategoria($id){
                $contenidoArchivo=file_get_contents('../data/categorias.json');
                $categorias=json_decode($contenidoArchivo, true);
                $categoria=null;
                for ($i=0; $i <sizeof( $categorias) ; $i++) {
                        if ($categorias[$i]["idCategoria"]==$id) {
                                $categoria=$categorias[$i];
                                break;
                        } 
                       
                }

               echo json_encode($categoria);
        }
        public function guardarCategoria(){
                $contenidoArchivoCategorias=file_get_contents('../data/categorias.json');
                $categorias= json_decode($contenidoArchivoCategorias, true);
                $categorias[]=array(
                        "nombreCategoria"=>$this->nombreCategoria,
                        "idCategoria"=>$this->idCategoria,
                        "descripcion"=>$this->descripcion,
                        "color"=>$this->color,
                        "icono"=>$this->icono,
                        "empresas"=>$this->empresas
                );
                $archivo=fopen('../data/categorias.json' , 'w');
                fwrite($archivo, json_encode($categorias));
                fclose($archivo);
                echo '{"codigoResultado":1, "mensaje":"Categoria guardada con exito"}';
        }

        
        /**
         * Get the value of nombreCategoria
         */ 
        public function getNombreCategoria()
        {
                return $this->nombreCategoria;
        }

        /**
         * Set the value of nombreCategoria
         *
         * @return  self
         */ 
        public function setNombreCategoria($nombreCategoria)
        {
                $this->nombreCategoria = $nombreCategoria;

                return $this;
        }

        /**
         * Get the value of descripcion
         */ 
        public function getDescripcion()
        {
                return $this->descripcion;
        }

        /**
         * Set the value of descripcion
         *
         * @return  self
         */ 
        public function setDescripcion($descripcion)
        {
                $this->descripcion = $descripcion;

                return $this;
        }

        /**
         * Get the value of color
         */ 
        public function getColor()
        {
                return $this->color;
        }

        /**
         * Set the value of color
         *
         * @return  self
         */ 
        public function setColor($color)
        {
                $this->color = $color;

                return $this;
        }

        /**
         * Get the value of icono
         */ 
        public function getIcono()
        {
                return $this->icono;
        }

        /**
         * Set the value of icono
         *
         * @return  self
         */ 
        public function setIcono($icono)
        {
                $this->icono = $icono;

                return $this;
        }

        /**
         * Get the value of empresas
         */ 
        public function getEmpresas()
        {
                return $this->empresas;
        }

        /**
         * Set the value of empresas
         *
         * @return  self
         */ 
        public function setEmpresas($empresas)
        {
                $this->empresas = $empresas;

                return $this;
        }

        /**
         * Get the value of idCategoria
         */ 
        public function getIdCategoria()
        {
                return $this->idCategoria;
        }

        /**
         * Set the value of idCategoria
         *
         * @return  self
         */ 
        public function setIdCategoria($idCategoria)
        {
                $this->idCategoria = $idCategoria;

                return $this;
        }
    }

?>