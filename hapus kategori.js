const webdriverio = require('webdriverio');

const driver = webdriverio.remote({
  desiredCapabilities: {
    browserName: 'chrome',
  },
});

driver.get('www.kasirdemo.belajarqa.com');

const inputemail = driver.findElement({css: '#email'});
inputemail.input('mas123@gmail.com');

const inputpassword = driver.findElement({css: '#password'});
inputpassword.input('tokomas');

const button = driver.findElement({css: '.chakra-button'});
button.click();

const pilihkategori = driver.findElement({css: '[href="/categories'});
pilihkategori.click();

const pilihtitik3 = driver.findElement({css: '#menu-button-19'});
pilihtitik3.click();

const pilihdata = driver.findElement({css: '#menu-list-19-menuitem-17'});
pilihdata.click('');

const hapus = driver.findElement({css: '.css-n45e6f'});
hapus.click();

driver.quit();