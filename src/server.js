// src/server.js
import 'dotenv/config'; // <--- OBRIGATÓRIO SER A LINHA 1
import app from './app.js';
import './database/index.js';

const port = process.env.PORT || 3001;



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});