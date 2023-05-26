import express from 'express';
import { MongoClient, MongoClientOptions } from 'mongodb';

const app = express();

async function connectToMongoDB() {
    const uri = "mongodb://ac-jkbiojs-shard-00-00.oftjqib.mongodb.net:27017,ac-jkbiojs-shard-00-01.oftjqib.mongodb.net:27017,ac-jkbiojs-shard-00-02.oftjqib.mongodb.net:27017/?ssl=true&replicaSet=atlas-c7brez-shard-0&authSource=admin&retryWrites=true&w=majority";
    const options: MongoClientOptions = { auth: { username: 'superadmin', password: 'k2wYP9zd66WNoig7' } };

  try {
    const client = await MongoClient.connect(uri, options);
    const collection = client.db('develop').collection('users');

    console.log(collection, 'COLLECTION');
    console.log('All OK');
  } catch (error) {
    console.log(error);
    console.log('************* ERROR');
  }

  }
  
  // Llama a la función para establecer la conexión a MongoDB
connectToMongoDB();

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
  });

  const port = 3000; // Puerto en el que escuchará el servidor

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
