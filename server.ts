import * as express from 'express';
import * as next from 'next';

const port: string | number = process.env.PORT || 8888;
const portNumber = Number(port);

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('/', (req, res) => {
            const actualPage = '/'
            app.render(req, res, actualPage);
        });

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