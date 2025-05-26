import axios from 'axios';

const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_URL = `https://api.airtable.com/v0/${BASE_ID}`;

const airtableClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    }
});

export async function fetchAnnouncements() {
    try {
        const response = await airtableClient.get('/Announcements', {
            params: {
                sort: [{ field: 'Name', direction: 'asc' }]
            }
        });

        let pdf = '';
        const text = [];

        for (const record of response.data.records) {
            const fields = record.fields;

            // If this is the Newsletter and it's valid, extract the attachment
            if (fields.Name === 'Newsletter' && fields.Valid) {
                pdf = fields.Attachments?.[0]?.url || '';
            }
            // Otherwise, treat it as a regular announcement
            else {
                if (fields.Name?.trim()) {
                    text.push({ item: fields.Name.trim() });
                }
            }
        }

        return { pdf, text };
    } catch (error) {
        console.error('Error fetching announcements:', error);
        return { pdf: '', text: [] };
    }
}



export async function fetchEvents() {
    try {
        const response = await airtableClient.get('/Events', {
            params: {
                // filterByFormula: '{Active} = TRUE()',
                sort: [{ field: 'Date', direction: 'asc' }]
            }
        });

        return response.data.records?.map(record => ({
            title: record.fields.Title || '',
            date: record.fields.Date || '',
            description: record.fields.Description || ''
        })) || [];
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
}