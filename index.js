import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import typeDefs from "./types/typeDefs.js";
import resolvers from "./resolvers/resolvers.js";
import connectToDb from "./config/db.js";

const app = express();
dotenv.config();
connectToDb();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000/",
    methods: "GET, POST, PUT, DELETE, PATCH",
  })
);

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log("url", url);
console.log(`Server running on port`, 4000);
