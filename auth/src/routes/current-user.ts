import express from 'express';
import { currentUser } from '@gbticketing/common';

const router = express.Router();

// @ts-ignore
router.get('/api/users/currentuser', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
