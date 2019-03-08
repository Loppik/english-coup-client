import axios from 'axios';
import { API_URL } from './configs/config';

export default axios.create({ baseURL: API_URL });