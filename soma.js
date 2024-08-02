import express from 'express'
const servidor = express()

servidor.listen(100,() => console.log(`API SUBIU`))

servidor.get('/calculadora/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let soma = n1 + n2

   resp.send(`A soma desses dois numéros é pedro esteve aqui!!!!` + soma)
})

