const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
	res.send('hello from behind');
});
app.get('/news-categories', (req, res) => {
	res.send(categories);
});

app.get('/news/:id', (req, res) => {
	const id = req.params.id;
	const selectedNews = news.find((news) => news._id === id);
	res.send(selectedNews);
});
app.get('/category/:id', (req, res) => {
	const id = req.params.id;
	if (id === '08') {
		res.send(news);
	} else {
		const selectedCategory = news.filter((news) => news.category_id === id);
		res.send(selectedCategory);
	}
});

app.listen(port, () => {
	console.log(`server running at ${port}`);
});
// hello ther
