import express from 'express';

const router = express.Router();

router.get('/me', async (req, res) => {
    const accessToken = req.session.accessToken;
    const userEmail = 'chen.yukai@bestated.ai';
    const itemId = 'ITEM_ID';

    if (!accessToken) {
        return res.status(401).send('Unauthorized');
    }

    try {
        const fetch = await import('node-fetch');
        const response = await fetch.default(`https://graph.microsoft.com/v1.0/users/${userEmail}/drive/items/${itemId}/content`, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });

        if (!response.ok) {
            throw new Error(`Error fetching item content: ${response.statusText}`);
        }
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.toString() });
    }
});

export default router;