import { Router } from 'express';
import { JWTGuard } from './my.guard';

import { CallLogCtrl } from './controllers/call-log';

export const router = Router();

router.use('/api/callLog', CallLogCtrl);
