import express from "express"
import { 
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser 
} from "../controllers/UserController.js"

const router = express.Router()

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser)
router.patch('/users/:id', updateUser)
router.patch('/users/:id', deleteUser)

export default router;