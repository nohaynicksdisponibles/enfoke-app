import axios from 'axios';
// Configuración global de Axios
export const api = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  params: {
    api_key: 'c8fe2f69accb051f436de7c46cb033b4',
    language: 'es'
  },
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 15000
});

// Interceptor para mostrar un loader durante las peticiones
axios.interceptors.request.use((config) => {
  // Agrega aquí la lógica para mostrar el loader
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Interceptor para manejar errores comunes de la API
axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  // Agrega aquí la lógica para manejar los errores
  return Promise.reject(error);
});
