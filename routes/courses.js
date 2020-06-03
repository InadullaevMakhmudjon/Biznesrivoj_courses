import { Router } from 'express';
import courses from '../controller/courses';

const router = Router();

router.get('/', courses.getAll);

export default router;
