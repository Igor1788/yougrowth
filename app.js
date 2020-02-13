const Sequelize = require('sequelize');
const sequelize = new Sequelize('recei1', 'igor1', 'acd18apa', {
  host: 'mysql785.umbler.com',
  dialect: 'mysql',
  port: '41890',
});

sequelize
  .authenticate()
  .then(function() {
    console.log('Conectado com sucesso!');
  })
  .catch(function(erro) {
    console.log('Falha ao se conectar: ' + erro);
  });
