import { test, expect } from '@playwright/test';

test.describe('Test Cases', () => {
test('TC_F_01: verify new user can create an account', async ({ page }) => {
  // Step 1: Navigate to the Wiley Online Library homepage
  await page.goto('https://wiley.scienceconnect.io/register');

  // Step 3: Fill in all required fields
  await page.fill('input[name="email"]', 'jennaadams647@gmail.com');

  // Step 4: Click the "Register" button
  await page.click('button#sign-up-btn');

  // Step 5: Verify the user is redirected to the verification page
  await expect(page).toHaveURL('https://wiley.scienceconnect.io/verify/code');

  console.log('Test passed: Account was created successfully, and redirected to the verification page.');
});

test('TC_F_02: verify user can login system giving valied credentials', async ({ page }) => {
    // Step 1: Navigate to the Wiley Online Library homepage
    await page.goto('https://wiley.scienceconnect.io/login');
  
    // Step 3: Fill in all required fields
    await page.fill('input[name="email"]', 'dhananjanikirinda@gmail.com');
  
    // Step 4: Click the "continue" button
    await page.click('button#sign-in-btn');

    // Step 5: Verify the user is redirected to the password page
    await expect(page).toHaveURL('https://wiley.scienceconnect.io/login/password');

    // Step 6: Fill in all required fields
    await page.fill('input[name="password"]', 'thakshila123');

    // Step 7: Click the "continue" button
    await page.click('button#password-sign-in-btn');
  
    // Step 8: Verify the user is redirected to the dashboard page
    await expect(page).toHaveURL('https://wiley.scienceconnect.io/dashboard');

    console.log('Test passed: Account was created successfully, and redirected to the verification page.');
  });


  test('TC_F_04: verify user can browse content by category', async ({ page }) => {
    // Step 1: Navigate to the Wiley Online Library homepage
    await page.goto('https://onlinelibrary.wiley.com/');
  
    // Step 2: Click on "Subjects" and select "Architecture & Planning"
    

    await page.getByRole('button', { name: 'Architecture & Planning' }).click();
    await page.getByRole('link', { name: 'Architecture' }).click();
  
    // Step 3: Verify content specific to the selected category is displayed
    await expect(page).toHaveURL('https://onlinelibrary.wiley.com/topic/browse/000024');
  
    console.log('Test passed: Content specific to the selected category is displayed.');
  });

});
