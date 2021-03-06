//========================
//Puerto
process.env.PORT = process.env.PORT || 3000;
//========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//Conexion
let urlDB;
if ( process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
} 
process.env.urlDB = urlDB;
//========================
//Vencimiento del token
//========================
//60 segundos
//60 minutos
//24 horas
//30 dias
process.env.CADUCIDAD_TOKEN=60 * 60 * 24 * 30;

//========================
//SEED de autenticacion
//========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';
//====================
//Google client ID
//====================
process.env.CLIENT_ID = process.env.CLIENT_ID || '1061197065411-90odftq1dofg2kl6993ebdm6d800a2rs.apps.googleusercontent.com';