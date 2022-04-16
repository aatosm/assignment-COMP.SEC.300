import axios from 'axios';

const client = axios.create({
  timeout: 20000
});

export default client;