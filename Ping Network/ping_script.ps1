# Load environment variables from .env file
if (Test-Path .env) {
    Get-Content .env | ForEach-Object { $envvar = $_.Split('='); [System.Environment]::SetEnvironmentVariable($envvar[0], $envvar[1], [System.EnvironmentVariableTarget]::Process) }
}

# Your existing script logic
while ($true) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $pingResult = "[$timestamp] Pinging $env:DECO_M5_IP"
    Add-Content -Value $pingResult -Path ping_log.txt
    $pingResult
    $pingOutput = ping $env:DECO_M5_IP
    Add-Content -Value $pingOutput -Path ping_log.txt
    Start-Sleep -Seconds 10
}
