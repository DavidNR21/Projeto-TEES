# Projeto de Automação: Playwright + BDD (Gherkin)

Este repositório contém a automação de testes para o e-commerce **SauceDemo (Swag Labs)**, desenvolvida como requisito para a disciplina de TEES. O projeto utiliza **Playwright** com a extensão **playwright-bdd** para suporte a cenários escritos em Gherkin.

## 🚀 Tecnologias Utilizadas

* **Linguagem:** TypeScript
* **Framework de Teste:** Playwright
* **BDD:** playwright-bdd (Gherkin)
* **CI/CD:** GitHub Actions

## 📋 Funcionalidades Testadas (100% de Cobertura)

O projeto cobre os 4 fluxos principais do site:
1.  **Login:** Validação de acesso com credenciais válidas.
2.  **Carrinho (Adicionar):** Inclusão de produtos no carrinho de compras.
3.  **Carrinho (Remover):** Exclusão de itens do carrinho.
4.  **Checkout:** Fluxo completo de finalização de compra com sucesso.

## 📁 Estrutura do Projeto

Os arquivos de especificação estão organizados em subdiretórios conforme solicitado:
* `tests/features/`: Arquivos `.feature` contendo os cenários em Gherkin.
* `tests/steps/`: Definições dos passos (Step Definitions) em TypeScript.
* `.github/workflows/`: Configuração da esteira de CI/CD.

## 🛠️ Como Executar Localmente

1. **Instale as dependências:**
   ```bash
   npm install

2. **Instale os navegadores do Playwright:**
    ```bash
    npx playwright install --with-deps

3. **Gere os arquivos de teste a partir do BDD:**
    ```bash
    npx bddgen

4. **Execute os testes:**
    ```bash
    npx playwright test

