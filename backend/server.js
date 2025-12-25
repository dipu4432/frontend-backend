import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is running');
})

// get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'Why did the scarecrow win an award? Because he was outstanding in his field!'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'Why don\'t scientists trust atoms? Because they make up everything!'
        },
        {
            id: 3,
            title: 'A third joke',
            content: 'What do you call a fake noodle? An impasta!'
        },
        {
            id: 4,
            title: 'A fourth joke',
            content: 'Why did the bicycle fall over? Because it was two tired!'
        },
        {
            id: 5,
            title: 'A fifth joke',
            content: 'What do you call a bear with no teeth? A gummy bear!'
        }
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
}) 