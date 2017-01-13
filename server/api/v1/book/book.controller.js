import { Book, User } from '../../../models'

exports.create = async function (req, res) {
  const isbn = req.body.isbn
  const ownerId = parseInt(req.body.userId, 10)
  const book = await Book.create({ isbn, ownerId, custodyId: ownerId })
  res.status(201).send(book)
}

exports.readAll = async function (req, res) {
  const books = await Book.findAll()
  res.status(200).send(books)
}

exports.read = async function (req, res) {
  const bookId = req.params.id
  const book = await Book.findById(bookId)
  res.status(200).send(book)
}

exports.update = async function (req, res) {
  const bookId = req.params.id
  const custodyId = req.body.custodyId
  const book = await Book.findById(bookId)
  await book.update({ custodyId })
  res.status(200).send(book)
}

exports.delete = async function (req, res) {
  const bookId = req.params.id
  const book = await Book.findById(bookId)
  book.destroy()
  res.status(200).send('book destroyed')
}

exports.search = async function(req, res) {
  const isbn = req.query.isbn
  const books = await Book.findAll({ where: { isbn } })
  return res.status(200).send(books)
}
