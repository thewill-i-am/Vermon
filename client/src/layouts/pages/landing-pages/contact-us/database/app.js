import React from 'react';
import db from './database/conexion';
import Formulario from './index'

function App() {
    return(
        <div className="container mt-5"> 
        <Formulario/>
        </div>
    );
};
// console.log("Hello world, This is an app to connect to sql server.");
// var config = {
//         "user": "Alienware-PC\Alienware", //default is sa
//         // "password": "yourStrong(!)Password",
//         "server": "(localdb)\MSSQLLocalDB", // for local machine
//         "database": "expotec", // name of database
//         "options": {
//             "encrypt": true
//         }
//       }

// sql.connect(config, err => { 
//     if(err){
//         throw err ;
//     }
//     console.log("Connection Successful !");

//     new sql.Request().query('select 1 as number', (err, result) => {
//         //handle err
//         console.dir(result)
//         // This example uses callbacks strategy for getting results.
//     })
        
// });

// sql.on('error', err => {
//     // ... error handler 
//     console.log("Sql database connection error " ,err);
// })