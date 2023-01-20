import { Request, Response, Router } from 'express';
import myDataSource from './app-data-source';
import { User } from './entity/user.entity';

const router = Router();

// register routes
router.get('/users', async function (req: Request, res: Response) {
    const users = await myDataSource.getRepository(User).find();
    res.json(users);
});

router.get('/users/:id', async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(User).findOneBy({
        id: parseInt(req.params.id)
    });
    return res.send(results);
});

router.post('/users', async function (req: Request, res: Response) {
    const user = await myDataSource.getRepository(User).create(req.body);
    const results = await myDataSource.getRepository(User).save(user);
    return res.send(results);
});

router.put('/users/:id', async function (req: Request, res: Response) {
    const user = await myDataSource.getRepository(User).findOneBy({
        id: parseInt(req.params.id)
    });
    myDataSource.getRepository(User).merge(user!, req.body);
    const results = await myDataSource.getRepository(User).save(user!);
    return res.send(results);
});

router.delete('/users/:id', async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(User).delete(req.params.id);
    return res.send(results);
});

export default router;
