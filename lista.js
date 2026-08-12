import express from 'express'

const app = express() 

const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'lista-01'
  })
})


const server = app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`A porta ${PORT} já está em uso`)
    process.exit(1)
  }
})