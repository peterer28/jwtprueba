const mysql = require('mysql')
//Entorno a la BD
const conexion = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_DATABASE,
})
//Verificar que la BD se conecte sin errores
conexion.connect( (error)=> {
    if(error){
        console.log('El error de conexión es: '+error) //Si exite el error muestra cual es el error
        return
    }
    console.log('¡Conexión exitos  datos MySQL Reto Analisis!') //Muestra que ya se conecto la BD
})

module.exports = conexion