const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const msal = require('@azure/msal-node');


const app = express();
const port = 3000;

app.use(bodyParser.json());

const msalConfig = {
    auth: {
        clientId: '17a020bf-a2bf-402e-bbd6-8314a390ce59',
        authority: 'https://login.microsoftonline.com/553a7356-1ba0-4c4a-9260-854f236fd904',
        // clientSecret: 'YOUR_CLIENT_SECRET',
        redirectUri: "http://localhost:3000",
    },
};

const cca = new msal.ConfidentialClientApplication(msalConfig);

const tokenRequest = {
    scopes: ['https://graph.microsoft.com/.default'],
};


app.post('/submit', async (req, res) => {
    const { firstName, lastName, companyName, email, phone, state, beneficiaries, assets } = req.body;

    try {
        const authResult = await cca.acquireTokenByClientCredential(tokenRequest);
        const accessToken = authResult.accessToken;

        const graphClient = require('@microsoft/microsoft-graph-client').Client.init({
            authProvider: (done) => {
              done(null, accessToken);
            },
        });

        const workbookId = '25471C3B-078F-4BD7-BF27-4C0A73CDD0D8';
        const sheetName = 'ClientInfo'; 

        const range = `${sheetName}!A2:H2`;

        const res = await graphClient.api(`/me/drive/items/${workbookId}/workbook/worksheets('${sheetName}')/range(address='${range}')`)
            .patch({
            values: [[firstName, lastName, companyName, email, phone, state, beneficiaries, assets]],
        });

        res.status(200).send('Data submitted successfully!');
    } catch (error){
        console.error('Error submitting data to Excel:', error);
        res.status(500).send('An error occurred while submitting data.');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
