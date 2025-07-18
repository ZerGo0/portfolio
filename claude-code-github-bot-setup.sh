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
for tool in node npm pnpm bun; do
    if command_exists $tool; then
        case $tool in
            node) echo "✓ Node.js $(node --version)" ;;
            npm) echo "✓ npm v$(npm --version 2>/dev/null | head -1)" ;;
            pnpm) echo "✓ pnpm v$(pnpm --version)" ;;
            bun) echo "✓ Bun v$(bun --version)" ;;
        esac
    else
        echo "✗ $tool not found"
        TOOLS_OK=false
    fi
done

# Frontend dependencies
echo "\nInstalling frontend dependencies..."
cd frontend
pnpm install
cd ..
echo "✓ Frontend dependencies installed"

echo "\n======================================"
echo "Setup complete!"
echo "======================================"