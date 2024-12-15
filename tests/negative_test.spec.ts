const { test, expect } = require('@playwright/test');

test.describe('Test Cases', () => {

  // Test Case 1: Verify error message for blank username and password
test('TC_N_01: Verify error message for leaving fields blank during login', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://wiley.scienceconnect.io/login');

    // Ensure the email field is blank
    await page.fill('input#email-input', ''); 

    // Click the login button
    await page.click('button#sign-in-btn'); 

    // Wait for and validate the error message
    const errorMessage = page.locator('text = Please enter an email.'); 
    await expect(errorMessage).toBeVisible({ timeout: 10000 }); 
});


  // Test Case 2: Verify invalid email format during login
  test('TC_N_02: Verify user cannot login with invalid email format', async ({ page }) => {
    //navigate to login page
    await page.goto('https://wiley.scienceconnect.io/login');

    //fill email field with invalid email
    await page.fill('input#email-input','invalid-email');

    //click the continue button
    await page.click('button#sign-in-btn');

    //wait for and validate the error message
    const errorMessage = await page.locator('text=Please enter a valid e-mail address.');
    await expect(errorMessage).toBeVisible();
  });


});
