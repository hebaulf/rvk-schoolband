import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Your user name" },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) => {
        // Database lookup
        if (
          credentials.username === "ragga" && 
          credentials.password === "vefskoli"
        ) {
          return {
            id: 1,
            ssn: "030484-4556",
            firstname: "Ragnheiður Margrét",
            lastname: "Jónsdóttir",
            address: "Leynimel 48",
            postalcode: "107",
            email: "ragnheidur@snjoark.is",
            phone: "6984050",
            partner: {
              id: 2,
              ssn: "010184-6789",
              firstname: "Magnús",
              lastname: "Björnsson",
              address: "Leynimel 48",
              postalcode: "107",
              email: "magbjo46@hi.is",
              phone: "6978792",
            },
            children: [
              {
                id: 3,
                name: "Rögnvaldur Björn Magnússon",
                ssn: "030412-5476",
                birthyear: "2021",
              },
              {
                id: 4,
                name: "Sigurður Már Magnússon",
                ssn: "130816-5476",
                birthyear: "2016",
              }
            ]
          };
        }

        // Login failed
        return null;
      },
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      // First time jwt callback is run, user object will be available
      if(user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if(token) {
        session.id = token.id;
      }
      return session;
    }
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
  },
})
