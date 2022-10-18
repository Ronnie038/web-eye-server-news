const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
	res.send('hello from behind');
});
app.get('/news-categories', (req, res) => {
	res.send(categories);
});

app.listen(port, () => {
	console.log(`server running at ${port}`);
});
// hello ther
