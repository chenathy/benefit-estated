import dotenv from 'dotenv';
dotenv.config();


const getAccessToken = async () => {
    
    const tokenUrl = `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`;

    const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: process.env.GRANT_TYPE,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            scope: process.env.SCOPE,
        })
    });

    const tokenResponse = await response.json();
    return tokenResponse.access_token;

};

export default getAccessToken;
