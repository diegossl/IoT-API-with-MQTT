import express, { Router } from 'express'
import Gateway from '../api/Gateway'

const router: Router = express.Router()

router.get('/subscriber/message/:topic', Gateway.getMessage)
router.post('/subscriber/register/:topic', Gateway.registerSubscribed)
router.post('/subscriber/delete/:topic', Gateway.removeSubscribed)

export default router
