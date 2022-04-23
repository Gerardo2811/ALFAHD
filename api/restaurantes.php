<?php
    header("Content-Type: application/json");
    include_once("../data/catalogo.json");
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'POST':
            # code...
        break;
        case 'GET':
            Restaurantes::obtenerRestaurantes();
        break;
        case 'PUT':
            # code...
        break;
        case 'DELETE':
            # code...
        break;
    }
