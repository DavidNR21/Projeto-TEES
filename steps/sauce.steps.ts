import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('que eu estou na página de login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

When('eu digito o usuário {string} e a senha {string}', async ({ page }, user, pass) => {
  await page.locator('[data-test="username"]').fill(user);
  await page.locator('[data-test="password"]').fill(pass);
});

When('clico no botão de login', async ({ page }) => {
  await page.locator('[data-test="login-button"]').click();
});

Then('eu devo ver a página de produtos', async ({ page }) => {
  await expect(page).toHaveURL(/inventory.html/);
});

// Helper para pular etapas repetitivas
Given('que eu realizei o login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

When('eu clico em {string} no primeiro produto', async ({ page }) => {
  await page.locator('.inventory_item button').first().click();
});

Then('o ícone do carrinho deve mostrar {string} item', async ({ page }, qtd) => {
  await expect(page.locator('.shopping_cart_badge')).toHaveText(qtd);
});

Given('que eu tenho um item no carrinho', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('.inventory_item button').first().click();
});

When('eu clico em "Remove"', async ({ page }) => {
  await page.locator('[data-test^="remove"]').click();
});

Then('o ícone do carrinho não deve mostrar nenhum número', async ({ page }) => {
  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
});

When('eu sigo para a página de Checkout', async ({ page }) => {
  await page.locator('.shopping_cart_link').click();
  await page.locator('[data-test="checkout"]').click();
});

When('eu preencho as informações: {string}, {string} e {string}', async ({ page }, fName, lName, zip) => {
  await page.locator('[data-test="firstName"]').fill(fName);
  await page.locator('[data-test="lastName"]').fill(lName);
  await page.locator('[data-test="postalCode"]').fill(zip);
  await page.locator('[data-test="continue"]').click();
});

When('clico em "Finish"', async ({ page }) => {
  await page.locator('[data-test="finish"]').click();
});

Then('eu devo ver a mensagem de agradecimento {string}', async ({ page }, msg) => {
  await expect(page.locator('.complete-header')).toHaveText(msg);
});


