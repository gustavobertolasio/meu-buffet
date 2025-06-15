# 🎉 Buffet Manager

SaaS para gerenciamento de buffets com múltiplas marcas, unidades e funcionalidades administrativas como controle de fornecedores, eventos, calendários, propostas e mais.

## 🧠 Tecnologias Utilizadas

- **Vue 3** (Composition API)
- **TypeScript**
- **Vite** – build tool leve e moderna
- **TailwindCSS** – com temas personalizados via `@theme` e o uso de `oklch`
- **Pinia** – gerenciamento global de estado
- **Vue Router** – rotas aninhadas e controle de exibição via `showInMenu`
- **Componentização** – estrutura baseada em componentes reutilizáveis

---

## 📁 Estrutura de Pastas Recomendada

```
src/
│
├── components/                      # Componentes reutilizáveis
│   └── DefaultRegisterContent.vue  
│
├── constants/
│   ├── app-routes.ts               # Rotas centralizadas com suporte a menu
│   └── types/
│       └── route.ts                # Interface personalizada para rotas
│
├── pages/
│
├── router/
│   └── index.ts                    # Setup do Vue Router
│
├── store/
│   └── index.ts                    # Setup do Pinia
│
├── assets/                         # Estilos e imagens globais
└── main.ts                         # Ponto de entrada da aplicação
```

## 🛠️ Como Rodar o Projeto

```bash
# Instalar dependências
npm install

# Rodar o ambiente de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

---

## 🧭 Rotas e Menus

As rotas são centralizadas no arquivo `app-routes.ts`, e apenas rotas com `showInMenu: true` aparecem no menu lateral.

Além disso, a propriedade `headRoute: true` pode ser usada para marcar agrupadores de rotas que **não devem aparecer no menu**.

Exemplo de definição:

```ts
{
  path: "/administracao",
  name: "Administração",
  component: Administration,
  headRoute: true,
  showInMenu: false,
  children: [
    {
      path: "/dashboard",
      name: "Dashboard",
      showInMenu: true,
      component: Dashboard,
      children: [...]
    }
  ]
}
```

## 📄 Licença

Projeto em desenvolvimento. Todos os direitos reservados © 2025.
