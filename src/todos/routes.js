const { Router } = require('express')
const {TodosRepository} = require('./repository')

const todosRepository = TodosRepository ()

const NotFound = {
  error: 'Not Found',
  message: 'Resouce not found',
}

const router = Router()

//router.use (logger())

router.get('/:id', async (req, res) => {
const id = parseInt(req.params.id)
const todo = await todosRepository.get(id)
if (!todo) {
  res.status(404).send({ })
return
}
res.status(200).send(todo)
return
})

router.post('/', async (req, res) =>{
  const todo = req.body
  const inserted = await todosRepository.insert(todo)
 res
 .status(201)
 .header('Location', '/${inserted.id}')
 .send(inserted)

})
router.put('/:id' , async (req, res) => {
 const id = parseInt(req.params.id)
 const todo = { ...req.body, id }

 const found = await todosRepository.get(id)
 if (!found) {
  res.status(404).send({ })
  return
 }
const updated = await todosRepository.update(todo)
res.status(200).send(updated)

})

router.delete('/:id', async (req, res) => {
 const id = parseInt(req.params.id)
 const found = await todosRepository.get(id)
 if (!found) {
  res.status(404).send({ })
  return
 }
 await todosRepository.del(id)
 res.status(204).send()

})

router.get('/' , async ( _req, res) =>{
todosRepository
.list()
.then (todos => res.status(200).send({ todos }))
})

module.exports = router
