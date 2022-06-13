import path from 'path';
import express from 'express';
const appp = express();

appp.use(express.static('www'));

appp.listen('3000', () => {
    console.log('server is running on port 3000');
})