<?php
$GEMINI_API_KEY = getenv('GEMINI_API_KEY') ?: "REPLACE_ME_SECRETS";
$system_prompt = "Eres un asistente.";
$user_text = "hola";
$parts = [["text" => $user_text]];

$ch = curl_init("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" . $GEMINI_API_KEY);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json'
    ],
    CURLOPT_POSTFIELDS => json_encode([
        "system_instruction" => ["parts" => [["text" => $system_prompt]]],
        "contents" => [["role" => "user", "parts" => $parts]],
        "generationConfig" => ["temperature" => 0.3, "maxOutputTokens" => 1024]
    ]),
    CURLOPT_TIMEOUT => 60
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
echo "HTTP: $httpCode\n";
echo "Response: $response\n";
