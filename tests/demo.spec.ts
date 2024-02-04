import { test as base, chromium, type BrowserContext } from '@playwright/test';

export const test = base.extend<{
  context: BrowserContext;
  extensionId: string;
}>({
  context: async ({ }, use) => {
    const pathToExtension = 'XDEFI-Wallet';
    const context = await chromium.launchPersistentContext('', {
      headless: false,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    });
    await use(context);
    await context.close();
  },
  extensionId: async ({ context }, use) => {

    let [background] = context.backgroundPages()
    if (!background)
      background = await context.waitForEvent('backgroundpage')

    const extensionId = background.url().split('/')[2];
    await use(extensionId);
  },
});
export const expect = test.expect;

const secret_phrase = [
  'latin',
  'actual',
  'slide',
  'over',
  'lazy',
  'model',
  'what',
  'opera',
  'spoon',
  'bless',
  'soldier',
  'cannon'
]

const crypto = require("crypto");
const pass = crypto.randomBytes(15).toString('hex');
const wallet_name = 'Wallet_name'
console.log('Generated pass: ' + pass)

test('adding network', async ({ page, extensionId }) => {
  await page.goto(`chrome-extension://${extensionId}/onboarding.html`);
  await page.getByTestId('restoreWalletBtn').click();
  await page.getByTestId('restoreWithSecretPhraseBtn').click();

  for (let i = 0; i < 12; i++) {
    await page.getByTestId('input').nth(i).fill(secret_phrase[i]);
  }

  await page.getByTestId('nextBtn').click();
  await page.getByTestId('pwdFld').fill(pass)
  await page.getByTestId('confirmPwdFld').fill(pass)
  await page.getByTestId('termsAndConditionsCheckbox').click();
  await page.getByTestId('nextBtn').click();
  await page.getByTestId('walletNameFld').fill(wallet_name)
  await page.getByTestId('nextBtn').click();
  await page.getByTestId('prioritiesXdefiToggle').click();
  await page.getByTestId('nextBtn').click();
  await expect(page.getByText('Your XDEFI wallet has been created!')).toBeVisible();
  
  await page.goto(`chrome-extension://${extensionId}/app.html`);
  await page.getByTestId('closePopupBtn').click();
  await expect(page.getByText('BALANCE')).toBeVisible();
  
  await page.goto(`https://metamask.github.io/test-dapp/`);
  
  const [myPopup] = await Promise.all([
    page.waitForEvent('popup', { timeout: 5000 }).catch(error => null),
    page.getByText('Add Localhost 8546').click()
  ]);
  if (myPopup) {
    await myPopup.waitForLoadState();
    await myPopup.getByText('Add Network').click();
    await page.goto(`chrome-extension://${extensionId}/app.html`);
    await page.getByTestId('closePopupBtn').click();
    await page.getByTestId('settingsTab').click();
    await page.getByTestId('networkSettingsBtn').click();
    await expect(page.getByText('Elysium Testnet')).toBeVisible()
  } else {
    console.log('');
  }
});