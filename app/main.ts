import Fastify from "fastify";
import path from 'path'
const app = Fastify({logger: true})
app.register(require('@fastify/formbody'))

app.register(require('@fastify/static'), {
    root: path.join(__dirname, 'res'),
    prefix: '/res/', // optional: default '/'
  })



app.get('/', (request, res:any) => {
    res.sendFile('/home/lurker/Documents/JavaScript/leni/dist/index.html')
  })


app.listen({ port: 9000 }, (err, address) => {
if (err) throw err
// Server is now listening on ${address}
})