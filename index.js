const puppeteer = require('puppeteer');

const credentials = { 
    name: 'Kauê França',
    bornDate: '16042004',
    cpf: '00000000000',
    tel: '00000000000',
    address: 'street name, number',
    email: 'email@gmail.com',
    hour: '17:00'
};


;(async () => {
    const browser = await puppeteer.launch({ defaultViewport: null, headless: false});
    const page = await browser.newPage();
    await page.goto('https://www7.marilia.sp.gov.br/agendacovid');
    //await page.goto('file:///home/kaue/Projetos/30-Puppeeter/index.html');
    while (true) {
        try{
            await page.waitForSelector('input[name=name]', { timeout: 300 })
            break
        }
        catch{
            await page.reload({ waitUntil: 'networkidle0' })
        }
    }
    const startTime = new Date().getTime()
    await page.click('input[name=name]');
    await page.keyboard.type(credentials.name);
    await page.click('input[name=born_date]');
    await page.keyboard.type(credentials.bornDate);
    await page.click('input[name=cpf]');
    await page.keyboard.type(credentials.cpf);
    await page.click('input[name=tel]');
    await page.keyboard.type(credentials.tel);
    await page.click('input[name=address]');
    await page.keyboard.type(credentials.address);
    await page.click('input[name=email]');
    await page.keyboard.type(credentials.email);
    await page.select('select[name=hour]', credentials.hour)

    await page.click('button#submit')
    const endTime = new Date().getTime()
    console.log(`Cadastro concluido em: ${(endTime - startTime) / 1000} segundos.`)    
//   await browser.close();
})();
