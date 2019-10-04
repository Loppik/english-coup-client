const production = {
  API_URL: 'https://english-coup-server.herokuapp.com'  
}

const development = {
  API_URL: 'http://localhost:3006'
}

export default {
  production,
}[process.env.NODE_ENV || 'development'];