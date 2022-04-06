
import { Router } from 'express';
import { signin, signup, currentUser} from '../controllers/auth';
import { adminCheck, checkAuth } from '../middlewares/checkAuth';
const router = Router();

router.post("/signup", checkAuth, signup);
router.post("/signin",checkAuth, signin);
router.post('/current-user', checkAuth, currentUser);
router.post('/current-admin', checkAuth, adminCheck, currentUser);

export default router;