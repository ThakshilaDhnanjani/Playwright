# Playwright Test Suite for Wiley Online Library

This repository contains automated test cases for verifying the functionality of the Wiley Online Library system using [Playwright](https://playwright.dev/).

## Table of Contents
- [Setup and Installation](#setup-and-installation)
- [Test Cases](#test-cases)
- [How to Run the Tests](#how-to-run-the-tests)
- [Test Descriptions](#test-descriptions)
- [Dependencies](#dependencies)
- [License](#license)

---

## Setup and Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/ThakshilaDhnanjani/Test-automation-With-Playwright-Online-library
   ```

2. Navigate to the project directory:
   ```bash
   cd Test-automation-With-Playwright-Online-library
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Ensure Playwright is installed and dependencies are configured:
   ```bash
   npx playwright install
   ```

---

## Test Cases

The following test cases are included in this test suite:

### Functional Test Cases
- **TC_F_01**: Verify new user can create an account.
- **TC_F_02**: Verify user can log in with valid credentials.
- **TC_F_04**: Verify user can browse content by category.

### Negative Test Cases
- **TC_N_01**: Verify error message for leaving fields blank during login.
- **TC_N_02**: Verify user cannot log in with an invalid email format.

---

## How to Run the Tests

1. Execute all test cases:
   ```bash
   npx playwright test
   ```

2. Run a specific test file:
   ```bash
   npx playwright test <test-file-name>
   ```

3. View the test report:
   ```bash
   npx playwright show-report
   ```

---

## Test Descriptions

### Functional Test Cases

#### **TC_F_01: Verify New User Can Create an Account**
- **Steps:**
  1. Navigate to the registration page.
  2. Fill in the required fields.
  3. Click the "Register" button.
  4. Verify the user is redirected to the verification page.

- **Expected Result:**
  The user should be successfully registered and redirected to the verification page.

#### **TC_F_02: Verify User Can Log in with Valid Credentials**
- **Steps:**
  1. Navigate to the login page.
  2. Enter valid email and click "Continue."
  3. Enter the password and click "Continue."
  4. Verify the user is redirected to the dashboard.

- **Expected Result:**
  The user should be able to log in and view the dashboard.

#### **TC_F_04: Verify User Can Browse Content by Category**
- **Steps:**
  1. Navigate to the homepage.
  2. Select a category from the "Subjects" dropdown.
  3. Verify the content specific to the selected category is displayed.

- **Expected Result:**
  Content specific to the selected category should be displayed.

### Negative Test Cases

#### **TC_N_01: Verify Error Message for Leaving Fields Blank During Login**
- **Steps:**
  1. Navigate to the login page.
  2. Leave the email field blank.
  3. Click the login button.
  4. Verify the error message is displayed.

- **Expected Result:**
  An error message stating "Please enter an email" should be displayed.

#### **TC_N_02: Verify User Cannot Log in with Invalid Email Format**
- **Steps:**
  1. Navigate to the login page.
  2. Enter an invalid email format.
  3. Click the login button.
  4. Verify the error message is displayed.

- **Expected Result:**
  An error message stating "Please enter a valid e-mail address" should be displayed.

---

## Dependencies

- Node.js
- Playwright
- Browser dependencies (installed via `npx playwright install`)

---

## License

This project is licensed under the MIT License.

