const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
	host: 'redis-server',
	port: 6379
});
client.set('visits',0)

app.get('/',(req, res) => {
	client.get('visits',(err,visits) => {
		var v = parseInt(visits)
		res.send('Number of visits are: ' + v)
		client.set('visits', v + 1)
		console.log(v)
	});
});

app.listen(8090,() =>
{
	console.log('Listenign to Port 8090')
});
