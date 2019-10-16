import axios from 'axios';
import { store } from './store.service';

export const fetchUsers = async () => {
    const resp = await axios.get(`http://jsonplaceholder.typicode.com/users`)
    return store.next(resp.data);
}
