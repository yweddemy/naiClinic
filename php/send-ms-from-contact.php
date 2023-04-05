<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "5204320286:AAFLBpQqTxNp36NQ31FoUjuvxDF3nyNWjes";

//Сюда вставляем chat_id
$chat_id = "-641786773";

//Определяем переменные для передачи данных из нашей формы

$name = ($_POST['name']);
$email = ($_POST['email']);
$phone = ($_POST['phone']);
$text = ($_POST['text']);
$form = 'С главной формы'
// $doctor = ($_POST['doctor']);

//Собираем в массив то, что будет передаваться боту
$arr = array(
    'Откуда:' => $form,
    'Имя:' => $name,
    'Телефон:' => $phone,
    'Сообщение:' => $text
);

//Настраиваем внешний вид сообщения в телеграме
foreach($arr as $key => $value) {
    $txt .= "".$key." ".$value."%0A"."-----------"."%0A";
};

//Передаем данные боту
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$txt}", "r");

//Выводим сообщение об успешной отправке
if ($sendToTelegram) {
    header('Location: /');
    
    // echo 'The sel doc:'.$doctor;
}

//А здесь сообщение об ошибке при отправке
else {
    echo "Error";
}
?>