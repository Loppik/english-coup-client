const production = {
  API_URL: 'https://english-coup-server.herokuapp.com'  
}

const develop = {
  API_URL: 'http://localhost:3006'
}

export default {
  production,
  develop
}[process.env.NODE_ENV || 'develop'];