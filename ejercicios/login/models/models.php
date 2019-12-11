<?php
require_once('models/models.php');

class Model {
  public function getLogin(){
    if(isset($_REQUEST['username']) && isset($_REQUEST['password'])){
        // Se forzan los valores simulando un llamado a una base de datos
        $strJsonFileContents = file_get_contents("datos/data.json");
        // Convert to array 
        $array = json_decode($strJsonFileContents, true);
        if($_REQUEST['username']==$array["usuario"] && $_REQUEST['password']==$array["password"]){
            return 'login';
        } else {
            return '<span class="error">USUARIO NO REGISTRADO</span>';
        }
    }
  }
}
?>