export default (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' })
      return
    }

    const newMessage = { id: Date.now().toString(), name, email, message }

    res
      .status(201)
      .json({ message: 'Successfully send your message!', message: newMessage })
  }
}
