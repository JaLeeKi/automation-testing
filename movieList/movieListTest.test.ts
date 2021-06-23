import { Builder, Capabilities, By, WebDriver } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/')
})

afterAll(async () => {
    await driver.quit()
})

test('Adding a movie', async () => {
    let movieBar = await driver.findElement(By.name('add-movie'))
    await movieBar.sendKeys('Inception')
    await driver.findElement(By.name('button')).click();
    await driver.sleep(500);

    await movieBar.sendKeys('Eyes Wide Shut')
    await driver.findElement(By.name('button')).click();
    await driver.sleep(500);

    await movieBar.sendKeys('No Country For Old Men')
    await driver.findElement(By.name('button')).click();
    await driver.sleep(500);

    await movieBar.sendKeys('Clockwork Orange')
    await driver.findElement(By.name('button')).click();
    await driver.sleep(500);

    await movieBar.sendKeys('Burn After Reading')
    await driver.findElement(By.name('button')).click();
    await driver.sleep(500);

    await movieBar.sendKeys('Tropic Thunder')
    await driver.findElement(By.name('button')).click();
    await driver.sleep(500);

    await movieBar.sendKeys('Pulp Fiction')
    await driver.findElement(By.name('button')).click();
    await driver.sleep(500);

    await movieBar.sendKeys('50/50')
    await driver.findElement(By.name('button')).click();
    await driver.sleep(500);

    await movieBar.sendKeys('Pineapple Express')
    await driver.findElement(By.name('button')).click();
    await driver.sleep(500);

    await movieBar.sendKeys('Fight Club')
    await driver.findElement(By.name('button')).click();
    await driver.sleep(1000);

    await driver.findElement(By.xpath('//span[contains(text(), "Clockwork Orange")]')).click()
    await driver.sleep(1000);

    await driver.findElement(By.xpath('//span[contains(text(), "Fight Club")]')).click()
    await driver.sleep(1000);

    await driver.findElement(By.xpath('//span[contains(text(), "Eyes Wide Shut")]')).click()
    await driver.sleep(1500);
})