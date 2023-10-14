<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   
    $name = $_POST['name'];
    $contact = $_POST['contact'];
    $order = $_POST['order'];
    $extras = $_POST['extras'];
    $quantity = $_POST['quantity'];
    $datetime = $_POST['datetime'];
    $address = $_POST['address'];
    $message = $_POST['message'];

    
    echo "Name: $name<br>";
    echo "Contact No.: $contact<br>";
    echo "Order: $order<br>";
    echo "Extras: $extras<br>";
    echo "Quantity: $quantity<br>";
    echo "Date and Time: $datetime<br>";
    echo "Address: $address<br>";
    echo "Message: $message<br>";
} else {
    
    echo "Form submission error.";
}
?>
