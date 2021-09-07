const jsonServer = require('json-server')//consumo de json server
const server = jsonServer.create()    //creacion de servidor
const router = jsonServer.router('bdSprint.json') 
const middlewares = jsonServer.defaults() //recursos


server.use(middlewares)
server.use(router)
const port = process.env.PORT || 4000;  // Creacion del Puerto dinamico. 
server.listen(port,()=>{
    console.log('Json Server is running')
})