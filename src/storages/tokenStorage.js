export const getTokens = () => JSON.parse(localStorage.getItem('tokens'));
export const setTokens = tokens => localStorage.setItem('tokens', JSON.stringify(tokens));