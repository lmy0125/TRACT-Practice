const express = require('express');
const app = express();
const port = 3001;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Middleware to parse JSON request bodies
app.use(express.json());

const profile = {
	Name: 'John Doe',
	'Title Description': 'SWE',
	Location: 'San Diego',
	About: 'A Software engineer.',
	Experiences: '2 years',
	Education: 'University of California',
	Recommendation: 'Skillful',
};

app.get('/profile', (req, res) => {
	res.json(profile);
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
