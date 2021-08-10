const axios = require('axios');
const qs = require('qs');
const fs = require('fs')

const phpLink = 'https://www7.marilia.sp.gov.br/ag2/insert_1_Dose.php';

const credentials = { 
    0: {
        'name': 'Kauê França',
        'born_date': '00/00/0000',
        'cpf': '00000000000',
        'tel': '(14) 99000-000',
        'address': 'Rua xx, N° xx',
        'email': 'email@gmail.com',
        'hour': '15:00'
    },
    1: {
        'name': 'Kauê França',
        'born_date': '00/00/0000',
        'cpf': '00000000000',
        'tel': '(14) 99000-000',
        'address': 'Rua xx, N° xx',
        'email': 'email@gmail.com',
        'hour': '15:00'
    }
};

for (i in credentials) {
    var nome = credentials[i].name.split(' ')[0];
    axios({
        method: 'post',
        url: phpLink,
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : qs.stringify(credentials[i])
    })
    .then(function (response) {
        if (!fs.existsSync(`./cadastros/${nome}.html`)) {
            fs.writeFileSync(`./cadastros/${nome}.html`, response.data);
            var path = `./cadastros/${nome}.html`
            console.log(`O cadastro do(a) ${nome}, foi feito com sucesso!\nHTML salvo em: ${path}`);
        } else {
            for (i = 0; i < 100; i++) {
                if (!fs.existsSync(`./cadastros/${nome + String(i)}.html`)) {
                    fs.writeFileSync(`./cadastros/${nome + String(i)}.html`, response.data);
                    var path = `./cadastros/${nome + String(i)}.html`
                    console.log(`O cadastro do(a) ${nome}, foi feito com sucesso!\nHTML salvo em: ${path}`);
                    break   
                }
            }
        }
    })
    .catch(function (error) {
        console.log(`Ocorreu um erro ao cadastrar o(a) ${nome}!\nInfo do erro: ${error}`);
    });
}