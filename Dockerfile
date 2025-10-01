# Etapa 1: build
FROM node:20-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar package.json e lock
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o projeto
COPY . .

# Build da aplicação
RUN npm run build

# Etapa 2: produção
FROM node:20-alpine AS runner
WORKDIR /app

# Copiar apenas arquivos necessários
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expor porta do Next.js
EXPOSE 3000

# Rodar em modo produção
CMD ["npm", "start"]
