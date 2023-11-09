const http = require('http');
const server = http.createServer((req, res) => {
  // Log the request details
  console.log(req.url, req.method, req.headers);

  // Set the content type to HTML
  res.setHeader('Content-Type', 'text/html');

  // Check the URL and send custom responses
  if (req.url === '/home') {
    res.write('<html><body><h1>Welcome home</h1></body></html>');
  } else if (req.url === '/about') {
    res.write('<html><body><h1>Welcome to About Us page</h1></body></html>');
  } else if (req.url === '/node') {
    res.write('<html><body><h1>Welcome to my Node.js project</h1></body></html>');
  } else {
    // Default response for unknown URLs
    res.write('<html><body><h1>Page not found</h1></body></html>');
  }

  // End the response
  res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
