import { MongoClient } from 'mongodb'
 //This works now we break it down to server side Props

const uri = "mongodb+srv://skolahljomsveit:nxmNbN0V0DAWJHWB@cluster0.bgcqq.mongodb.net/schoolbase?retryWrites=true&w=majority" 

export default async (req, res) => {
  const client = new MongoClient(uri)
  const db = client.db()
  await client.connect();

const collection =  await db.collection('user').find({}).toArray();

return res.json(collection);

};