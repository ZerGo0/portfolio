#!/bin/sh
set -e


echo "======================================"
echo "Portfolio Development Environment Setup"
echo "======================================"

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check tools
echo "\n[1/7] Checking required tools..."
TOOLS_OK=true
for tool in node npm bun; do
    if command_exists $tool; then
        case $tool in
            node) echo "✓ Node.js $(node --version)" ;;
            npm) echo "✓ npm v$(npm --version 2>/dev/null | head -1)" ;;
            bun) echo "✓ Bun v$(bun --version)" ;;
        esac
    else
        echo "✗ $tool not found"
        TOOLS_OK=false
    fi
done

# Install pnpm if not available
if ! command_exists pnpm; then
    echo "\n[2/7] Installing pnpm..."
    npm install -g pnpm
    echo "✓ pnpm v$(pnpm --version) installed"
else
    echo "✓ pnpm v$(pnpm --version)"
fi

# Frontend dependencies
echo "\n[3/7] Installing frontend dependencies..."
cd frontend
pnpm install
cd ..
echo "✓ Frontend dependencies installed"

echo "\n======================================"
echo "Setup complete!"
echo "======================================"