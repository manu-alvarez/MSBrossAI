<?php
/**
 * IAPuta OS — Serverless PHP API Gateway for msbross.me
 * Handles text commands via Groq API when the FastAPI backend is not available.
 */
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, x-api-key');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$action = $_GET['action'] ?? '';
$GROQ_KEY = getenv('GROQ_API_KEY') ?: 'gsk_placeholder';

// Health / status endpoint
if ($action === 'status' || $_SERVER['REQUEST_URI'] === '/app/iaputa/api.php?action=status') {
    echo json_encode([
        'status' => 'online',
        'mode' => 'serverless',
        'version' => 'v9.0-php',
        'tools' => ['chat', 'vision-placeholder', 'search-placeholder'],
        'uptime' => time()
    ]);
    exit;
}

// Text command
if ($action === 'text-command' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $text = $input['text'] ?? '';
    
    if (empty(trim($text))) {
        http_response_code(400);
        echo json_encode(['error' => 'Texto vacío']);
        exit;
    }

    $system = "Eres IAPuta OS, un asistente IA de élite creado por MSB Solutions. " .
              "Eres inteligente, directo, profesional y con personalidad. " .
              "Respondes siempre en el idioma en que te hablen. " .
              "Tienes acceso a herramientas de visión, búsqueda web, shell y calendario (aunque en modo serverless algunas no están disponibles). " .
              "Sé conciso pero completo. Usa emojis cuando sea apropiado.";

    $response = callGroq($GROQ_KEY, $system, $text);
    echo json_encode(['response' => $response]);
    exit;
}

// Default
http_response_code(404);
echo json_encode(['error' => 'Endpoint no encontrado', 'available' => ['status', 'text-command']]);

function callGroq($apiKey, $system, $userMessage) {
    $url = 'https://api.groq.com/openai/v1/chat/completions';
    $payload = json_encode([
        'model' => 'llama-3.3-70b-versatile',
        'temperature' => 0.7,
        'max_tokens' => 1024,
        'messages' => [
            ['role' => 'system', 'content' => $system],
            ['role' => 'user', 'content' => $userMessage]
        ]
    ]);

    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $payload,
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json',
            'Authorization: Bearer ' . $apiKey
        ],
        CURLOPT_TIMEOUT => 30
    ]);

    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode !== 200) {
        return "⚠️ Error conectando con el modelo IA (HTTP $httpCode). Modo offline activo.";
    }

    $data = json_decode($result, true);
    return $data['choices'][0]['message']['content'] ?? 'Sin respuesta del modelo.';
}
