import os

appName = os.environ.get("APP_VERSION", "unknown")
environment = os.environ.get("ENVIRONMENT", "unknown")

print(f"Running {appName} in {environment} environment")
