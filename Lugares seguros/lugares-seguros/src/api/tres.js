/* eslint-disable no-undef */
import  axios from 'axios';

const cors=require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.listen(5173, () => {
    console.log('Server started');
}); 

export default axios.create({
    baseURL: 'https://sfwit-c3-t3-back.onrender.com/'
});