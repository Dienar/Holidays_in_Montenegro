<?php
require_once __DIR__ . "/conn.php";

class SendForm extends conn
{
    private $username;
    private $useremail;
    private $userdatestart;
    private $userdateend;
    private $countusers;

    public function SendToBase() 
{
    $mysqli = $this->Mysqli();
    $this->username = $_POST['name'];    
    $this->useremail = $_POST['email'];    
    $this->userdatestart = $_POST['date_start'];  
    $this->userdateend = $_POST['date_end'];    
    $this->countusers = $_POST['count']; 

    // Подготовка запроса для проверки пересечения дат
    $select = $mysqli->prepare("
    SELECT * 
    FROM booking_table
    WHERE (book_date_start <= ? AND book_date_end >= ?)  -- новый период начинается до конца существующего и заканчивается после его начала
    OR (book_date_start < ? AND book_date_end > ?)    -- новый период заканчивается после начала существующего и начинается до его конца
    OR (? BETWEEN book_date_start AND book_date_end)  -- новый период полностью включает существующий
    OR (? BETWEEN book_date_start AND book_date_end)  -- новый период полностью включает существующий
");
$select->bind_param("ssssss", $this->userdatestart, $this->userdateend, $this->userdatestart, $this->userdateend, $this->userdatestart, $this->userdateend);
$select->execute();
$select->store_result();

    // Если пересечение найдено, блокируем бронирование
    if ($select->num_rows > 0) {
        
        echo "<script>
                alert('This date is already booked! =(');
                window.location.replace('../');
              </script>";
        exit(); // Завершаем выполнение функции
    }else{
        echo "dawn";
    // Если даты не пересекаются, записываем данные в базу
    $stmt = $mysqli->prepare("INSERT INTO booking_table (name, email, book_date_start, book_date_end, count_people) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $this->username, $this->useremail, $this->userdatestart, $this->userdateend, $this->countusers);
    $stmt->execute();
    }
}
    
}
$sendform = new SendForm();
$sendform->SendToBase();