<?php

    require('convert.php');
    if(isset($_POST['from']) && isset($_POST['to'])){
        $converter = new Converter();
        $result =  $converter->convert($_POST['from'],$_POST['to']);
        echo $result; 
    }
    
    if (isset($_POST['currencies'])){
        $converter = new Converter();
        $result = $converter->getCurrencies();
        echo json_encode($result);
    }