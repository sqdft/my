const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { code } = JSON.parse(event.body);
  
  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'xiaoblog-netlify-cms'
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code
      })
    });

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error_description || 'GitHub OAuth failed');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        access_token: data.access_token,
        token_type: data.token_type,
        scope: data.scope
      })
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message })
    };
  }
};