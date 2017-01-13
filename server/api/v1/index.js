import book from './book/book.controller'
import user from './user/user.controller'
import express from 'express'
const router = express.Router()

router.get('/books/search', book.search)

router.post('/books', book.create)
router.get('/books', book.readAll)
router.get('/books/:id', book.read)
router.patch('/books/:id', book.update)   // check out a book by update 'custodyId'
router.delete('/books/:id', book.delete)

router.post('/users', user.create)
router.get('/users', user.readAll)
router.get('/users/:id', user.read)
router.patch('/users/:id', user.update)
router.delete('/users/:id', user.delete)

export default router
