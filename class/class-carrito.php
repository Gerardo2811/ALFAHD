<?php

class Carrito{
    
        private $nombreProducto;
        private $idProducto;
        private $descripcion;
        private $precio;
        private $cantidad;
    
        public function __construct(
            $nombreProducto,
            $idProducto,
            $descripcion,
            $precio,
            $cantidad
        ){
            $this->nombreProducto=$nombreProducto;
            $this->idProducto=$idProducto;
            $this->descripcion=$descripcion;
            $this->precio=$precio;
            $this->cantidad=$cantidad;
        }


        public static function obtenerProductos(){
            $contenidoArchivo = file_get_contents("../data/productos.json");
            echo $contenidoArchivo;
    }
    
    public static function obtenerProducto($indice){
        $contenidoArchivo =  file_get_contents("../data/productos.json");
        $producto= json_decode($contenidoArchivo,true);
        echo json_encode($producto[$indice]);
    }   
    
    public static function eliminarProducto($indice){
        $contenidoArchivo =  file_get_contents("../data/productos.json");
        $producto= json_decode($contenidoArchivo,true);
        array_splice($producto,$indice,1);
        $archivo= fopen("../data/productos.json","w");
        fwrite($archivo,json_encode($producto));
        fclose($archivo);
    
    }

        /**
         * Get the value of nombreProducto
         */ 
        public function getNombreProducto()
        {
                return $this->nombreProducto;
        }

        /**
         * Set the value of nombreProducto
         *
         * @return  self
         */ 
        public function setNombreProducto($nombreProducto)
        {
                $this->nombreProducto = $nombreProducto;

                return $this;
        }

        /**
         * Get the value of idProducto
         */ 
        public function getIdProducto()
        {
                return $this->idProducto;
        }

        /**
         * Set the value of idProducto
         *
         * @return  self
         */ 
        public function setIdProducto($idProducto)
        {
                $this->idProducto = $idProducto;

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

        
        public function getCantidad()
        {
                return $this->cantidad;
        }

        /**
         * Set the value of cantidad
         *
         * @return  self
         */ 
        public function setCantidad($cantidad)
        {
                $this->cantidad = $cantidad;

                return $this;
        }
}
?>