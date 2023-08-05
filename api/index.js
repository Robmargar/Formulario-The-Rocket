import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { v4 as uuid } from "uuid";

const persons = [
  {
    id: "9c5c7835-ad24-4abb-9aed-c5ffe9a88351",
    Nombre: "Roberto",
    ApellidoPaterno: "Martinez",
    ApellidoMaterno: "Garcia",
    fechaNacimiento: "21 Diciembre 1987",
    Correo: "roberto.mar.garc@gmail.com ",
    Telefono: "2222624541",
  },
];

const typeDefs = ` 
  type Person{
    id:ID!
    Nombre: String!
    SegundoNombre: String
    ApellidoPaterno: String!
    ApellidoMaterno:String!
    fechaNacimiento: String!
    Correo:String!
    Telefono:String!
  }

  type Query{
 
    allPersons:[Person]!
 
    findPerson(
      Nombre: String!
      SegundoNombre: String
      ApellidoPaterno: String!
      ):Person
  }

  type Mutation{
    addPerson(
    Nombre: String!
    SegundoNombre: String
    ApellidoPaterno: String!
    ApellidoMaterno:String!
    fechaNacimiento: String!
    Correo:String!
    Telefono:String!
    ):Person
  }
`;

const resolvers = {
  Query: {
    allPersons: () => persons,
    findPerson: (root, args) => {
      const { Nombre } = args;
      return persons.find(
        (person) =>
          person.Nombre === Nombre &&
          person.ApellidoPaterno === args.ApellidoPaterno &&
          person.ApellidoMaterno === args.ApellidoMaterno
      );
    },
  },

  Mutation: {
    addPerson(root, args) {
      if (
        persons.find(
          (p) =>
            p.Nombre === args.Nombre &&
            p.ApellidoPaterno === args.ApellidoPaterno &&
            p.ApellidoMaterno === args.ApellidoMaterno
        )
      ) {
        throw new Error(
          `El usuario: ${args.Nombre} ${args.ApellidoPaterno} ${args.ApellidoMaterno} ya se encuentra registrado`
        );
      }
      const person = { ...args, id: uuid() };
      persons.push(person); // update with new person
      return person;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4005 },
});

console.log(`Server ready 🚀 at: ${url}`);
