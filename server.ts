import * as express from 'express';
import * as next from 'next';

const port = process.env.PORT || '8888';
const portNumber = parseInt(port, 10);

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
export default app;

const handle = app.getRequestHandler();
const routes = require('./routes/router');

app.prepare()
    .then(() => {
        const server = express();

        server.use('/', routes);

        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(portNumber, (err: any) => {
            if (err) throw err
            console.log(`Server is runing on port ${portNumber}`);
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
    