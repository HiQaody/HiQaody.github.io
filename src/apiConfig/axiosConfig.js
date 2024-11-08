import axios from 'axios';

// Décommmenter ce code avant de pusher CI/CD
const axiosConfig = axios.create({
    baseURL: typeof window !== 'undefined' && window.location.origin.includes('192.168.88.')
        ? 'http://192.168.88.136:8081/api/'
        : 'https://apigateway.hiqaody.me/api/',
});


// // A utiliser lorsque cabler lors du dev
// const axiosConfig = axios.create({
//     baseURL: 'http://192.168.88.136:8081/api/',
// });

export default axiosConfig;