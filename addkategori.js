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

const inputnama = driver.findElement({css: '#nama'});
inputnama.input('coba1');

const inputdescripsi = driver.findElement({css: '#deskripsi'});
inputdescripsi.click('harusdicoba');

const simpan = driver.findElement({css: '.chakra-button'});
simpan.click();

driver.quit();
