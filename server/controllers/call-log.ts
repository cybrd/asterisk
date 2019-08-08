import { Router } from 'express';
import { adminGuard } from '../my.guard';

import { test } from '../services/call-log';

const router = Router();

router.get('/test', async (req, res) => {
  res.send(await test());
});

export const CallLogCtrl = router;
