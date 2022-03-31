import clientPromise from "../utility/mongodb";

const userInfo = ({ users }) => {
  console.log(users)
  return (
    <div className="container">
      <div>
        <h3>Users from DB</h3>
        <div>
          {users.map((user, index) => (
            <div key={index}>
              <div>User Name: {user.name}</div>
              <div>User Kt.: {user.kt}</div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("schoolbase");

  let users = await db.collection("user").find({}).toArray();
  users = JSON.parse(JSON.stringify(users));

  return {
    props: { users },
  };
}

export default userInfo;
