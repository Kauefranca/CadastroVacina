# Cadastro Vacina

Bot que se cadastra automaticamente no site de vacinas usando o modulo puppeteer do javascript.

# Requisitos
> git
> nodejs and npm

## Instalação de requisitos

```bash
> git clone https://github.com/Kauefranca/CadastroVacina
> cd CadastroVacina
> npm install
```

## Utilização

Atualmente existe 2 estilos diferentes para fazer o cadastro, com o puppeteer(headfull) ou com o fetch(axios).

### Puppeteer (mais lenta)

Recomendado caso esteja usando um computador e queira ver a página final do cadastro direto do site oficial.

Mude os dados do objeto credentials em puppeteer.js e depois execute o seguinte comando:

```bash
> node puppeteer.js
```

Agora é só aguardar até que o cadastro seja liberado :D

### Fetch (mais rápida)

Recomendado se estiver utilizando o termux ou qualquer plataforma não suportada pelo puppeteer ou se apenas deseja fazer multiplos cadastros.

Mude os dados do objeto credentials em fetch.js e depois execute o seguinte comando:

Para rodar o script execute:
```bash
> node fetch.js
```

Obs: Para essa opção você precisa esperar até o cadastro ser liberado e aí sim executar o script.

## Licença

[MIT](https://github.com/Kauefranca/CadastroVacina/blob/main/LICENSE)

## AVISOS

Esse programa foi criado com fins de apenas ajudar as pessoas no cadastro, tendo em vista que são vagas limitadas e que se esgotam em menos de 1 minuto.

O USO DESSE PROGRAMA É DE TOTAL RESPONSABILIDADE DO USUÁRIO.