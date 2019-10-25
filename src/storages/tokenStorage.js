exports.getTokens = () => JSON.parse(localStorage.getItem('tokens'));
exports.setTokens = tokens => localStorage.setItem('tokens', JSON.stringify(tokens));
exports.removeTokens = () => localStorage.removeItem('tokens');
