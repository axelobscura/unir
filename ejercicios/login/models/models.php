<?php
require_once('models/models.php');

class Model {
  public function getLogin(){
    if(isset($_REQUEST['username']) && isset($_REQUEST['password'])){
      // Se forzan los valores simulando un llamado a una base de datos
      if($_REQUEST['username']=='admin' && $_REQUEST['password']=='unir'){
        return 'login';
      } else {
        return 'invalid user';
      }
    }
  }
}
?>