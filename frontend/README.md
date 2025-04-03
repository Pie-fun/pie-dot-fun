# 🥧 Pie.fun

"Easy as Pie, Sweeter Gains"
One click to the best memecoins, zero hassle. Creators bake the perfect mix of top memes, you just grab a slice with SOL or stables.

## 🚀 Getting Started

### Prerequisites

- Ensure you have `pnpm` installed on your machine.
  - If you do not have `pnpm`, install it with `brew install pnpm`.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Pie-fun/pie-dot-fun
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. The client is a Next.js application, which you can run using the following commands:

   ```bash
   pnpm dev
   ```

4. (optional) If you downloaded the code directly without git clone, additional configuration is required:

   ```bash
   git init
   ```

5. (optional) If you want to set `NPM_TOKEN` for private npm repository:

   ```
   vim ~/.zshrc
   i
   export NPM_TOKEN="..."
   ESC
   :wq!
   source ~/.zshrc
   ```

### Build and Serve

- Setup environment variables and build:

  For the .env file, you need to set the `envs/.env.*` files.
  which you can run using the following commands:

  ```bash
  pnpm build:dev
  or
  pnpm build:qa
  or
  pnpm build:stg
  or
  pnpm build:prod

  pnpm start
  ```

### GraphQL Codegen

- Use the following command to automatically create a type when writing Graphql Query.

```
pnpm codegen
```
