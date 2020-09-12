// 
import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const MONGO_URL = `mongodb+srv://spartan07:velammal@cluster.4i7pe.mongodb.net/notes?retryWrites=true&w=majority` 
const client = new MongoClient();
client.connectWithUri(MONGO_URL);

const db = client.database('notes');

export default db;