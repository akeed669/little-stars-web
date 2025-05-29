import axios from 'axios';

const BASE_ID = 'appvjid8h3mhngkaw';
const API_KEY = 'patbqAp1PPwa1RxMK.3cb307e251a83aea32d3db6bbe88495f37052194515ad3cc2bb8c060e52e706c';
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
                filterByFormula: '{Active} = TRUE()',
                sort: [{ field: 'Title', direction: 'asc' }]
            }
        });

        const text = response.data.records?.map(record => ({
            title: record.fields.Title?.trim() || '',
            date: record.fields.Date || '',
            description: record.fields.Description || ''
        })) || [];

        return text;
    } catch (error) {
        console.error('Error fetching announcements:', error);
        return [];
    }
}

export async function fetchNewsletter() {
    try {
        const response = await airtableClient.get('/Newsletter', {
            params: {
                sort: [{ field: 'Name', direction: 'asc' }]
            }
        });

        let pdf = '';

        for (const record of response.data.records) {
            const fields = record.fields;

            if (fields.Name === 'Newsletter' && fields.Valid) {
                pdf = fields.Attachments?.[0]?.url || '';
            }
        }

        return { pdf };
    } catch (error) {
        console.error('Error fetching newsletter:', error);
        return { pdf: '' };
    }
}

export async function fetchEvents() {
    try {
        const response = await airtableClient.get('/Events', {
            params: {
                filterByFormula: '{Active} = TRUE()',
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

export async function fetchGallery() {
    try {
        const response = await airtableClient.get('/Gallery', {
            params: {
                filterByFormula: '{Active} = TRUE()',
                sort: [{ field: 'Caption', direction: 'asc' }]
            }
        });

        return response.data.records?.map(record => ({
            imageUrl: record.fields.Image?.[0]?.url || '',
            caption: record.fields.Caption || ''
        })) || [];
    } catch (error) {
        console.error('Error fetching gallery:', error);
        return [];
    }
}

export async function fetchArticle() {
    try {
        const response = await airtableClient.get('/Article', {
            params: {
                filterByFormula: '{Active} = TRUE()',
                maxRecords: 1
            }
        });

        const record = response.data.records?.[0]?.fields || {};
        return {
            title: record.Title || '',
            content: record.Content || ''
        };
    } catch (error) {
        console.error('Error fetching article:', error);
        return { title: '', content: '' };
    }
}