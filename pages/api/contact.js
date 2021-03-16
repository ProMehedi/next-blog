import { Db, MongoClient, MongoError } from 'mongodb'

export default async (req, res) => {
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

    const newMessage = { name, email, message }
    let client

    try {
      client = await MongoClient.connect(
        'mongodb+srv://mehedi:Mehedi2020@cluster0.wrrej.mongodb.net/nextBlog?authSource=admin&replicaSet=atlas-2kzvot-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true'
      )
      console.log('MongoDB Connected!')
    } catch (error) {
      res.status(500).json({
        message: error.message ? error.message : 'Cound not connect to MongoDB',
      })
      return
    }

    const db = client.db()
    try {
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      res.status(500).json({
        message: error.message ? error.message : 'Failed to submit contact',
      })
      return
    }

    client.close()

    res
      .status(201)
      .json({ message: 'Successfully send your message!', message: newMessage })
  }
}
