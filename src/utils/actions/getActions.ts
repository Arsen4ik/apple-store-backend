import { ProuductCategories } from '../../types/types';
import db from '../db'

export const getAllGadgets = async () => {
    try {
        const gadgets = await db.gadget.findMany({
            include: {
                category: true,
                images: true,
                gadgetSpecialCharacteristics: {
                    include: {
                        characteristics: true
                    }
                }
            }
        });

        const changedGadgets = gadgets.map(gadget => {
            const transformedCharacteristics = gadget.gadgetSpecialCharacteristics.map(characteristic => ({
                id: characteristic.id,
                characteristics: characteristic.characteristics.name,
                value: characteristic.value,
                unitType: characteristic.characteristics.unitType
            }))

            const transformedImages = gadget.images.map(image => ({
                id: image.id,
                imageLink: image.imageLink
            }))

            return {
                ...gadget,
                images: transformedImages,
                gadgetSpecialCharacteristics: transformedCharacteristics
            };
        });

        return changedGadgets;
    } catch (e) {
        return { message: `get all products error: ${e}` };
    } finally {
        await db.$disconnect();
    }
}

export const getAllProcuctsByCategory = async (category: ProuductCategories) => {
    try {
        const products = await db.gadget.findMany({
            where: {
                category: {
                    name: category
                }
            },
            include: {
                category: true,
                images: true,
                gadgetSpecialCharacteristics: {
                    include: {
                        characteristics: true
                    }
                }
            }
        })

        const changedProducts = products.map(product => {
            const transformedCharacteristics = product.gadgetSpecialCharacteristics.map(characteristic => ({
                id: characteristic.id,
                characteristics: characteristic.characteristics.name,
                value: characteristic.value,
                unitType: characteristic.characteristics.unitType
            }))

            const transformedImages = product.images.map(image => ({
                id: image.id,
                imageLink: image.imageLink
            }))

            return {
                ...product,
                images: transformedImages,
                gadgetSpecialCharacteristics: transformedCharacteristics
            };
        });

        return changedProducts;
    } catch (e) {
        return { message: `get all products with ${category} category error: ${e}` };
    } finally {
        await db.$disconnect();
    }
}

export const getProcuctById = async (id: number) => {
    try {
        const product = await db.gadget.findUnique({
            where: {
                id
            },
            include: {
                category: true,
                images: true,
                gadgetSpecialCharacteristics: {
                    include: {
                        characteristics: true
                    }
                }
            }
        })

        const transformedCharacteristics = product.gadgetSpecialCharacteristics.map(characteristic => ({
            id: characteristic.id,
            characteristics: characteristic.characteristics.name,
            value: characteristic.value,
            unitType: characteristic.characteristics.unitType
        }))

        const transformedImages = product.images.map(image => ({
            id: image.id,
            imageLink: image.imageLink
        }))

        return {
            ...product,
            images: transformedImages,
            gadgetSpecialCharacteristics: transformedCharacteristics
        };
    } catch (e) {
        return { message: `get products with ${id} id error: ${e}` };
    } finally {
        await db.$disconnect();
    }
}