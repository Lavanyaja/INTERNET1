import  {createServer} from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
    console.log('received request...', req.url, req.method);

    if(req.url == '/'){
        if(req.method == 'get'){
            res.setHeader('content-type, text/plain');
            res.setHeader('acces-control-allow-origin', "*");

            res.end("athish");

        }
        if(req.method == 'OPTIONS'){
            res.statusCode = 200;
            res.setheader('content-type', 'application/json');
            res.setheader('acces-control-allow-origin', 'http://127.0.0.1.5500');
            res.setheader('acces-control-allow-methods', "post, get, options");
            res.setheader('acces-control-allow-headers', "*");
            res.end('ok');
         }
         if(req.method == 'post'){
            console.log('post method...')
            res.setheader('content-type', 'text/plain');
            res.setheader('acces-control-allow-origin', "*");

            res.end(json.stringify({surname: "jr"}));

         }
    }
  
});

server.listen(port , hostname, () => {
    console.log('server running at http')
})