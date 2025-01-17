import express, { Request, Response } from 'express';
import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});
client.connect();

app.get('/projects', async (req: Request, res: Response) => {
  try {
    const result = await client.query('SELECT * FROM projects');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
