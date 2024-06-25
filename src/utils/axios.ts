import axios from 'axios';
import { useAuthStore } from '@/stores/auth'


const authStore = useAuthStore();

const {token} = authStore;
export default axios.create({
  baseURL: 'https://travelexicng.doon.org.in/api',
  headers: {
    Authorization: `Bearer ${token}` // Access computed value
  }
});

