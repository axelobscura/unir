<?php require_once('inc/header.php'); ?>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Logotipo -->
        <div class="fadeIn first pt-3 pb-3">
          <img src="https://cdn-mexico.unir.net/wp-content/uploads/2018/07/logo.png" id="icon" alt="Logotipo" />
        </div>
        <?php
          echo $reslt;
        ?>
        <!-- FORMA DE LOGIN -->
        <form action="" method="POST">
          <input type="text" id="username" class="fadeIn second" name="username" placeholder="Usuario" required="required">
          <input type="password" id="password" class="fadeIn third" name="password" placeholder="Contraseña" required="required">
          <input type="submit" class="fadeIn fourth" value="Ingresar">
        </form>
        <!-- INFORMACIÓN -->
        <div id="formFooter">
            <p class="p-0 m-0">COMPUTACIÓN EN EL SERVIDOR WEB</p>
            <p class="p-0 m-0">EJERCICIO UNIR MÉXICO</p>
            <p class="p-0 m-0"><small>Axel Laurent Obscura Sarzotti</small></p>
        </div>
      </div>
    </div>
<?php require_once('inc/footer.php'); ?>