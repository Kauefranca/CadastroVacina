const axios = require('axios')


axios
    .post('https://www7.marilia.sp.gov.br/agendacovid/insert.php', {
        name: 'Regiane Célia da Silva França',
        born_date: '15101979',
        cpf: '27639865875',
        tel: '14998031616',
        address: 'Ernesto Javurek, 25',
        hour: '10:00',
    })
    .then(res => {
        console.log(res.statusCode)
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })

