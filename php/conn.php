<?php
class conn
{
    private $mysqli;

    public function __construct()
    {
        $this->mysqli = new mysqli('localhost','root','','camping_balkans');
        if($this->mysqli->connect_error){
            echo "connect lost";

        }
    }
    public function Mysqli()
    {
        return $this->mysqli;
    }
    public function close()
    {
        $this->mysqli->close();
    }
}