const conexaoDoCarlao = require ('./dataBase/postgresql')

conexaoDoCarlao.pool.connect((err, client, release) => {

    if(err){
        return console.error("Deu erro =C ", err.stack)
    }

    client.query('SELECT * FROM users', (err, result) => {
        release()

        if(err){
            return console.error('Deu outro erro :c to triste ', err.stack)
        }
        console.log(result.rows)

    })


})