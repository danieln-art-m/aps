<?php

require('vendor/autoload.php');

class Converter{

    private $freecurrencyapi;

    public function __construct(){

           $this->freecurrencyapi = new \FreeCurrencyApi\FreeCurrencyApi\FreeCurrencyApiClient('fca_live_N7le7zZ19RP080HibBba4NSTb8bUYvOjYXQ5G2KN'); 
    }

    public function convert($from, $to){

        $result =  $this->freecurrencyapi->latest([
            'base_currency' => $from,
            'currencies' => $to,
        ]);
        
        return "1 ".$from ." beträgt ".$result['data'][$to]." ". $to;

    }

    public function getCurrencies(){

        return $this->freecurrencyapi->currencies();


    }

}

//-------------------------------------------------
//$test = new Converter();
//echo json_encode($test->getCurrencies());