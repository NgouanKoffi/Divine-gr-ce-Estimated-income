const dotenv = require("dotenv");
const express = require("express")
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

dotenv.config();

const server = express();

const port = process.env.PORT || 3000; // Port par défaut
const uri = process.env.STRING_URI;

// Declare client outside the function
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

server.use(express.json());
server.use(cors());

async function connectToMongoDB() {
  try {
    // Connect the client to the server  (optional starting in v4.7)
    await client.connect();
    console.log("MongoDB connecté");
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Ping effectué sur votre déploiement. Vous vous êtes connecté avec succès à MongoDB !"
    );
  } catch (error) {
    console.error("Erreur lors de la connexion à MongoDB :", error);
    throw error; // Propagez l'erreur pour que le serveur ne démarre pas si la connexion échoue
  }
}

server.get("/", (req, res) => {
  res.send("Bonjour le monde !");
});

server.get("/cities", async (req, res) => {
  try {
    const collection = client.db("dg_data").collection("city");
    const documents = await collection.find({}, { projection: { _id: 0, cityName: 1} }).toArray();

    res.json(documents);
  } catch (error) {
    console.error("Erreur lors de la récupération des villes :", error);
    res.status(500).send("Erreur interne du serveur");
  }
});


async function startServer() {
  try {
    await connectToMongoDB();
    server.listen(port, () => {
      console.log(`Le serveur est en marche sur le port ${port}`);
    });
  } catch (error) {
    console.error("Erreur lors du démarrage du serveur :", error);
    process.exit(1); // Quittez le processus avec un code d'erreur
  }
}

startServer();
