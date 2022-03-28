import { MongoClient } from 'mongodb'

const children = ({ users }) => {

  return (
    <div className="container">
      <div>
        <h3>Umsóknir</h3>
    
          {users.map(user => (
            <a className="ButtonTertiary" > "this is button" {user.kt}</a>
          )) 
          };
    
      </div>
    </div>
  );
};


export async function getServerSideProps(context)  {

const uri = "mongodb+srv://skolahljomsveit:nxmNbN0V0DAWJHWB@cluster0.bgcqq.mongodb.net/schoolbase?retryWrites=true&w=majority" 

  const client = new MongoClient(uri)
  const db = client.db()
  await client.connect();

let users =  await db.collection('user').find({}).toArray();

users = JSON.parse(JSON.stringify(users));


console.log(users)

return {
  props: { users },
};

} 

export default children;
