import { Router } from 'express'
import { createCategory, createCharacteristic, createGadget, createGadgetSpecialCharacteristics, createImage, getAllGadgets } from './utils/actions'

const router = Router()

router.get('/', (_, res) => {
    res.json({ 'msg': 'gg lol' })
})

router.post('/category', async (req, res) => {
    const { category } = req.body
    const data = await createCategory(category)
    res.json(data)
})

router.post('/characteristic', async (req, res) => {
    const { characteristic, unitType } = req.body
    const data = await createCharacteristic(characteristic, unitType)
    res.json(data)
})

router.post('/gadget', async (req, res) => {
    const { gadget, categoryId } = req.body
    const data = await createGadget(gadget, categoryId)
    res.json(data)
})

router.post('/gadget', async (req, res) => {
    const { gadget, categoryId } = req.body
    const data = await createGadget(gadget, categoryId)
    res.json(data)
})

router.post('/image', async (req, res) => {
    const { imageLink, gadgetId } = req.body
    const data = await createImage(imageLink, gadgetId)
    res.json(data)
})

router.post('/gadgetSpecialCharacteristics', async (req, res) => {
    const { value, gadgetId, characteristicId } = req.body
    const data = await createGadgetSpecialCharacteristics(value, gadgetId, characteristicId)
    res.json(data)
})

router.get('/allGadgets', async (_, res) => {
    const data = await getAllGadgets()
    res.json(data)
})

export default router;