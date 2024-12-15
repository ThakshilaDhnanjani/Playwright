const { test, expect } = require('@playwright/test');

test.describe('Test Cases', () => {

  // Test Case 1: Verify error message for blank username and password
test('TC_N_01: Verify error message for leaving fields blank during login', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://wiley.scienceconnect.io/login'); // Replace with your actual login page URL

    // Ensure the email field is blank
    await page.fill('input#email-input', ''); // Replace 'input#email-input' with the correct email field selector if necessary

    // Click the login button
    await page.click('button#sign-in-btn'); // Replace 'button#sign-in-btn' with the correct login button selector if necessary

    // Wait for and validate the error message
    const errorMessage = page.locator('text = Please enter an email.'); // Adjust text to match the actual error message on the page
    await expect(errorMessage).toBeVisible({ timeout: 10000 }); // Assert that the error message is visible
});


  // Test Case 2: Verify invalid email format during login
  test('TC_N_02: Verify user cannot login with invalid email format', async ({ page }) => {
    await page.goto('https://wiley.scienceconnect.io/login'); // Replace with your registration page URL
    await page.fill('input#email-input','invalid-email'); // Replace with your email input selector
    await page.click('button#sign-in-btn'); // Replace with your register button selector
    const errorMessage = await page.locator('text=Please enter a valid e-mail address.');
    await expect(errorMessage).toBeVisible();
  });

 
   // Test Case 3: Verify the user can access a premium content page after subscription
   test('TC_N_03: Ensure page is loaded over HTTPS', async ({ page }) => {
    await page.goto('https://onlinelibrary.wiley.com');
    
    // Check if the page URL starts with HTTPS
    const url = page.url();
    await expect(url.startsWith('https://')).toBe(true);
  });

});
