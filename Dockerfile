# Build frontend
FROM node:alpine AS app-builder

WORKDIR /frontend
COPY ./frontend ./

# Install pnpm
RUN npm install -g pnpm

RUN pnpm install
RUN pnpm run build

# Build golang binary
FROM golang:1.23-alpine AS builder

WORKDIR /build

COPY ./backend/ /build/backend/
RUN rm -rf /build/backend/frontend

WORKDIR /build/backend/

RUN go mod download
RUN go build -o /out/main /build/backend/cmd/api/main.go

FROM alpine AS deployment

WORKDIR /app

# Copy frontend build to deployment
RUN rm -rf /app/*
COPY --from=app-builder /frontend/build /app/frontend
COPY --from=builder /out/main /app/main

EXPOSE 3000

CMD ["/app/main"]
