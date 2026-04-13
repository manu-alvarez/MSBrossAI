<?php
/**
 * MSBrossAI — MASTER NEURAL GATEWAY (Level 3 Orchestrator)
 * This file is the central 'nervous system' for the entire ecosystem.
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, x-api-key");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// ──────────────────────────────────────────────
// CONFIGURATION & VAULT
// ──────────────────────────────────────────────
$VAULT_FILE = __DIR__ . '/msbross_vault.json';
$API_KEY = "iaputa_elite_2026"; // Clave interna de orquestación

function get_vault() {
    global $VAULT_FILE;
    if (!file_exists($VAULT_FILE)) {
        return [
            "system" => ["fusion_level" => 3, "last_boot" => date('Y-m-d H:i:s')],
            "apps" => [],
            "notifications" => []
        ];
    }
    return json_decode(file_get_contents($VAULT_FILE), true);
}

function save_vault($data) {
    global $VAULT_FILE;
    file_put_contents($VAULT_FILE, json_encode($data, JSON_PRETTY_PRINT));
}

// ──────────────────────────────────────────────
// ROUTING LOGIC
// ──────────────────────────────────────────────
$action = $_GET['action'] ?? 'status';

switch ($action) {
    case 'status':
        echo json_encode([
            "status" => "online",
            "version" => "3.0.0",
            "neural_bus" => "connected",
            "timestamp" => time()
        ]);
        break;

    case 'vault-get':
        echo json_encode(get_vault());
        break;

    case 'vault-update':
        $input = json_decode(file_get_contents('php://input'), true);
        $vault = get_vault();
        if (isset($input['app'])) {
            $vault['apps'][$input['app']] = array_merge($vault['apps'][$input['app']] ?? [], $input['data']);
        }
        if (isset($input['notification'])) {
            $vault['notifications'][] = array_merge($input['notification'], ["timestamp" => time(), "id" => uniqid()]);
            // Keep only last 20
            if (count($vault['notifications']) > 10) array_shift($vault['notifications']);
        }
        save_vault($vault);
        echo json_encode(["status" => "updated", "vault" => $vault]);
        break;

    case 'translate':
        // Integration with Arantxa logic
        $input = json_decode(file_get_contents('php://input'), true);
        $text = $input['text'] ?? '';
        $target = $input['target'] ?? 'es';
        // Mock translation via simple rule or forward to Groq if key exists
        echo json_encode(["translated" => "[Neural Echo]: " . $text, "mode" => "neural-bridge"]);
        break;

    case 'orchestrate':
        // Logic for IAPuta OS to trigger events in other apps
        $input = json_decode(file_get_contents('php://input'), true);
        $intent = $input['intent'] ?? '';
        $params = $input['params'] ?? [];
        
        $vault = get_vault();
        $vault['notifications'][] = [
            "type" => "COMMAND",
            "source" => "IAPuta OS",
            "content" => "Ejecutando intención: $intent",
            "timestamp" => time()
        ];
        save_vault($vault);
        
        echo json_encode(["status" => "dispatched", "intent" => $intent, "vault_alert" => true]);
        break;

    default:
        echo json_encode(["error" => "Unknown action: $action"]);
        break;
}
