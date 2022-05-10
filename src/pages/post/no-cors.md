# Mengatasi Error CORS Tanpa Setting Server

Bagi developer frontend, tentu sudah nggak asing dengan error CORS seperti ini:

> Access to fetch at 'https://google.com/' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

Jadi, intinya itu kita ingin menghubungkan ke API tapi nggak bisa-bisa karena ditolak sama server.

Bagaimana cara mengatasinya?

Caranya adalah menambahkan salah satu dari link berikut di depan link APImu:

- https://scrappy-php.herokuapp.com/?url=
- https://api.allorigins.win/raw?url=
- https://cors.eu.org/
- https://cors-proxy.tk/?url=

Nah, dicoba aja ya...