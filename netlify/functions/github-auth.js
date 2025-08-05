exports.handler = async (event, context) => {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };
  
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 200,
        headers,
        body: ''
      };
    }
  
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        access_token: 'dummy_token_for_testing',
        token_type: 'bearer',
        scope: 'repo'
      })
    };
  };