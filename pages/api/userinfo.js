//import { MongoClient } from 'mongodb'


// //This works now we break it down to server side Props

// const uri = "mongodb+srv://skolahljomsveit:nxmNbN0V0DAWJHWB@cluster0.bgcqq.mongodb.net/schoolbase?retryWrites=true&w=majority" 

// export default async function getStaticProps() {
//   const client = new MongoClient(uri)
//   const db = client.db()
//   await client.connect();

// const collection =  await db.collection('user').find().toArray();

// return collection

// };


/* 

export default async function getServerSideProps() {
  const client = await MongoClient.connect('mongodb+srv://skolahljomsveit:nxmNbN0V0DAWJHWB@cluster0.bgcqq.mongodb.net/schoolbase?retryWrites=true&w=majority');

  const db = client.db();

  const userCollection = db.collection('user');

  const user = await userCollection.find().toArray()
  console.log(user)


  return { props:user }

}
*/



