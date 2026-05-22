<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, x-api-key");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Master Configuration
$GEMINI_API_KEY = "AIzaSyAXuH24H9_K617kyY1BP2e4uVKn7keTrVo";
// Using the IAPuta Cloudflare Tunnel
$MASTER_BUS_URL = "https://imperial-writes-instantly-looks.trycloudflare.com";

$input = file_get_contents("php://input");
$data = json_decode($input, true);

// 1. Check if it's a direct Gemini request (Legacy/Dashboard support)
if (isset($data['contents'])) {
    $ch = curl_init("https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" . $GEMINI_API_KEY);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $input);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    http_response_code($httpCode);
    echo $response;
    exit;
}

// 2. Otherwise, route to the Master Neural Bus (Local Backend via Tunnel)
$path = $_SERVER['REQUEST_URI'];
$target_url = $MASTER_BUS_URL . str_replace("/app/iaputa/api.php", "", $path);

$ch = curl_init($target_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $_SERVER['REQUEST_METHOD']);
curl_setopt($ch, CURLOPT_POSTFIELDS, $input);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'x-api-key: MSB_IAPUTA_STABLE_v10'
]);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    http_response_code(502);
    echo json_encode(["error" => "Master Neural Bus Offline", "details" => curl_error($ch)]);
} else {
    http_response_code($httpCode);
    echo $response;
}
curl_close($ch);
?>
