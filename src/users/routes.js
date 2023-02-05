const  { Router } = require('express')

const withasyncErrorHandler = require('../middlewares/async-error')


const router = Router()

const createUser = async (req, res)=> {
  res.status(201).header('Location', '/users/???').send({})
  }

router.post ('/users', withasyncErrorHandler(createUser) )

router.get ('/', withasyncErrorHandler ( async (req, res)=> {
  res.status(200).send ({ users : {}})
}))
  router.get ('/:id', withasyncErrorHandler( async (req, res)=> {
    res.status(200).send ({})
    }))

    router.put ('/:id', withasyncErrorHandler( async (req, res)=> {
      res.status(200).send()
      }))

      router.delete ('/', withasyncErrorHandler( async (req, res)=> {
        res.status(204).send()
        }))
module.exports = router
