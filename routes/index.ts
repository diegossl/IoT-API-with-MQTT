import express, { Router } from 'express'
import Gateway from '../api/Gateway'

const router: Router = express.Router()

router.get('/subscriber/message/:topic', Gateway.getMessage)
router.post('/subscriber/register', Gateway.registerSubscribed)
router.post('/subscriber/delete', Gateway.removeSubscribed)

export default router
