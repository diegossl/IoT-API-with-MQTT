import express, { Router } from 'express'
import Gateway from '../api/Gateway'

const router: Router = express.Router()

router.get('/subscriber/message/:subscriberName', Gateway.getMessages)
router.post('/register', Gateway.registerSubscribedAndTopic)
router.post('/subscriber/delete', Gateway.removeSubscribed)
router.post('/topic/delete', Gateway.removeTopic)

export default router
