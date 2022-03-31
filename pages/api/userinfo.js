// import { MongoClient } from 'mongodb'
import clientPromise from "../../utility/mongodb";

export default async function handler (req, res) {
  const client = await clientPromise;
  const db = client.db('schoolbase');

  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let newUser = await db.collection("user").insertOne(bodyObject);
      res.json(newUser.ops[0]);
      break;
    case "GET":
      const user = await db.collection("user").find({}).toArray();
      res.json({ status: 200, data: user });
      break;
  }
};

export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/api/userinfo", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let users = await res.json();

  return {
    props: { users },
  };
}

