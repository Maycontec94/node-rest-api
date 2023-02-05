const { Router } = require ('express')

const router = Router ()

router.get ('/', (req, res) =>{
  res.status(200).send('Hello World!')
  } )

 router.get ('/:name', (req, res) => {
  const name = req.params.name
  res.status(200).send(' Hello ${name}! ' )
  })

  module.exports = router
