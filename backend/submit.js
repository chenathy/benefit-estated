import express from 'express';
import fetch from 'node-fetch';
import getAccessToken from './auth.js';
import dotenv from 'dotenv';
dotenv.config();


const router = express.Router();

router.post('/submit', async (req, res) => {

    const accessToken = await getAccessToken();

    try {
        
        if (!accessToken) {
            return res.status(401).send('Unauthorized');
        }

        const { firstName, lastName, companyName, email, phone, state, beneficiaries, assets } = req.body;

        const endPoint_url = `https://graph.microsoft.com/v1.0/drives/${process.env.DRIVE_ID}/items/${process.env.DRIVE_ITEM_ID}/workbook/tables/${process.env.TABLE_ID}/rows/add`;
        
        try {
            const response = await fetch(endPoint_url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({values: [[firstName, lastName, companyName, email, phone, state, beneficiaries, assets]]})
            });
    
            console.log(`POST response: ${JSON.stringify(response)}`)
            if (!response.ok) {
                throw new Error(`Error adding row to Excel sheet: ${response.statusText}`);
            }
    
            const data = await response.json();
            res.json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.toString() });
        }
        

    } catch (error) {
        res.status(500).send(error.message);
    }
});

export default router;