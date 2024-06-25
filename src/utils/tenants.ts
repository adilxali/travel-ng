import axios from 'axios';
import { useAuthStore } from '@/stores/auth'


const authStore = useAuthStore();

const {user, token} = authStore;



export default axios.create({
  baseURL: `https://travelexicng.doon.org.in/api/${user?.tenant_id}/tenant`,
  headers: {
    Authorization: `Bearer ${token}` // Access computed value
  }
});

