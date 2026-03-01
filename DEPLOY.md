# Deploy no Vercel - Portfolio Xand

## ✅ Build Completo

O projeto foi buildado com sucesso e está pronto para deploy!

## 🚀 Passos para Deploy

### Opção 1: Deploy via Vercel CLI

```bash
# Instalar Vercel CLI (se ainda não tiver)
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel
```

### Opção 2: Deploy via GitHub + Vercel Dashboard (Recomendado)

1. **Fazer commit e push para o GitHub:**
   ```bash
   git add .
   git commit -m "feat: portfolio completo com projetos, jogos e tangíveis"
   git push origin master
   ```

2. **Conectar no Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "Add New Project"
   - Importe o repositório `xandeco024/portfolio`
   - Vercel detectará automaticamente que é Next.js
   - Clique em "Deploy"

## 📦 O que está incluído

- ✅ 2 projetos digitais (Gabriel Pastel, Modelando o Futuro)
- ✅ 3 jogos (Manirius, Cat Rescue, Qyron)
- ✅ 3 projetos tangíveis (Estante de Plantas, Bancada, Arranhador)
- ✅ Modal de visualização de imagens e vídeos
- ✅ Design responsivo e minimalista
- ✅ Páginas estáticas pré-renderizadas (SSG)
- ✅ Otimizado para produção

## ⚙️ Configurações do Vercel

Não é necessário configurar nada - o Vercel detectará automaticamente:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## 🌐 Domínio

Após o deploy, você receberá:
- Um domínio automático: `portfolio-xandeco024.vercel.app`
- Pode adicionar domínio customizado nas configurações

## 📝 Notas

- Todas as imagens estão em `/public`
- Vídeos do Modelando o Futuro (.mp4) funcionam no modal
- Site 100% estático, super rápido
- Modo escuro/claro respeitado automaticamente

## 🔄 Atualizações Futuras

Sempre que fizer push para `master`, o Vercel fará deploy automático!
