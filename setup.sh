#!/bin/bash

# Setup script for Portfolio repository
# This script installs dependencies and verifies the setup

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[✓]${NC} $1"
}

print_error() {
    echo -e "${RED}[✗]${NC} $1"
}

print_info() {
    echo -e "${YELLOW}[i]${NC} $1"
}

# Check if pnpm is installed
check_pnpm() {
    if ! command -v pnpm &> /dev/null; then
        print_error "pnpm is not installed. Please install pnpm first:"
        print_info "npm install -g pnpm"
        exit 1
    fi
    print_status "pnpm is installed"
}

# Install dependencies
install_dependencies() {
    print_info "Installing dependencies..."
    cd frontend
    pnpm install
    if [ $? -eq 0 ]; then
        print_status "Dependencies installed successfully"
    else
        print_error "Failed to install dependencies"
        exit 1
    fi
    cd ..
}

# Run type checking
run_type_check() {
    print_info "Running type checking..."
    cd frontend
    pnpm check
    if [ $? -eq 0 ]; then
        print_status "Type checking passed"
    else
        print_error "Type checking failed"
        exit 1
    fi
    cd ..
}

# Run linting
run_lint() {
    print_info "Running linting..."
    cd frontend
    pnpm lint
    if [ $? -eq 0 ]; then
        print_status "Linting passed"
    else
        print_error "Linting failed"
        exit 1
    fi
    cd ..
}

# Test build
test_build() {
    print_info "Testing production build..."
    cd frontend
    pnpm build
    if [ $? -eq 0 ]; then
        print_status "Production build successful"
    else
        print_error "Production build failed"
        exit 1
    fi
    cd ..
}

# Main execution
main() {
    echo "========================================="
    echo "   Portfolio Repository Setup Script"
    echo "========================================="
    echo ""

    # Check prerequisites
    check_pnpm

    # Install and verify
    install_dependencies
    run_type_check
    run_lint
    test_build

    echo ""
    echo "========================================="
    print_status "Setup completed successfully! 🎉"
    echo ""
    print_info "You can now run the following commands:"
    echo "  - cd frontend && pnpm dev        # Start development server"
    echo "  - cd frontend && pnpm build      # Build for production"
    echo "  - cd frontend && pnpm preview    # Preview production build"
    echo "  - cd frontend && pnpm deploy:production # Deploy to Cloudflare"
    echo ""
}

# Run main function
main