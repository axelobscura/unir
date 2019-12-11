<?php
// Se requieren los models de datos
require_once('models/models.php');
// Se crea la clase/objeto controllador
class Controller {
  // Se crea una variable pública en la que se guardara el modelo a exportar
  public $model;
  // Se crea un constructor para inicializar
  public function __construct(){
    // Se crea un objeto de tipo Modelo
    $this->models = new Model();
  }
  public function invoke(){
    // Se guarda en variable el resultado del llamado al módelo
    $reslt = $this->models->getlogin();
    // Llama a la función getLogin() del objeto modelos y guarda el valor regresado
    // Revisa el valor y toma una acción en función del mismo
    if($reslt == 'login'){
      include 'views/afterlogin.php';
    } else {
      include 'views/login.php';
    }
  }
}
?>