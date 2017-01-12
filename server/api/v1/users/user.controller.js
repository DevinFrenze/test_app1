import { User } from '../../../models'

exports.create = async function (req, res) {
  const username = req.body.username;
  const user = await User.create({ username })
  res.status(201).send(user)
}

exports.readAll = async function (req, res) {
  const users = await User.findAll()
  res.status(200).send(users)
}

exports.read = async function (req, res) {
  const userId = req.params.id
  const user = await User.findById(userId)
  res.status(200).send(user)
}

exports.update = async function (req, res) {
  const userId = req.params.id;
  const username = req.body.username;
  const user = await User.findById(userId);
  await user.update({ username })
  res.status(200).send(user)
}

exports.delete = async function (req, res) {
  const userId = req.params.id
  const user = await User.findById(userId)
  user.destroy()
  res.status(200).send('user destroyed')
}