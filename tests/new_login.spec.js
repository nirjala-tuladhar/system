import {test} from '@playwright/test';
import  {LoginPage} from '../objects/login.po';
const testData = require('../fixtures/loginFixture.json');

test.beforeEach(async ({page}) => {
    await page.goto('/');
}   )

test.describe('Valid Login Tests', () => {    
    test('Login using Valid username and password', async ({page}) => {
        const login= new LoginPage(page);
        await login.login('nirjala.tuladhar098@gmail.com', 'nirjala12345');
        await login.verifyValidLogin();
    }
    );
})

test.describe('Invalid Login Tests', () => {
    
    test('Login using Invalid username and password', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login(testData.invalidUser.userName, testData.invalidUser.password); // Using an invalid username
        await login.verifyInvalidLogin();
    });

    test('Login with no username and no password', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login('', ''); // Passing empty strings
        await login.verifyInvalidLogin(); // This should verify appropriate error message
    });

});


