import * as express from 'express';
import app from '../server';

const router = express.Router();

router.get('/:id', (req, res) => {
    return app.render(req, res, '/', req.params.id)
})

module.exports = router;