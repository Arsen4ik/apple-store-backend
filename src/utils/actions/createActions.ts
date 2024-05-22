// import { Gadget } from '../../types/types';
// import db from '../db'


// export const createCategory = async (category: string) => {
//     try {
//         const newCategory = await db.categories.create({
//             data: {
//                 name: category,
//             }
//         })
//         return newCategory
//     } catch (e) {
//         return { message: `create category error: ${e}` };
//     } finally {
//         await db.$disconnect();
//     }
// }

// export const createCharacteristic = async (characteristic: string, unitType: string) => {
//     try {
//         const newCharacteristic = await db.characteristics.create({
//             data: {
//                 name: characteristic,
//                 unitType,
//             }
//         })
//         return newCharacteristic
//     } catch (e) {
//         return { message: `create characteristic error: ${e}` };
//     } finally {
//         await db.$disconnect();
//     }
// }

// export const createGadget = async (gadget: Gadget, categoryId: number) => {
//     try {
//         const categoryToFind = await db.categories.findUnique({
//             where: {
//                 id: categoryId
//             }
//         })
//         if (!categoryToFind) return { message: 'category with this id was not found!' }
//         const newGadget = await db.gadget.create({
//             data: {
//                 ...gadget,
//                 category: {
//                     connect: { id: categoryToFind.id }
//                 }
//             }
//         })
//         return newGadget
//     } catch (e) {
//         return { message: `create gadget error: ${e}` };
//     } finally {
//         await db.$disconnect();
//     }
// }

// export const createImage = async (imageLink: string, gadgetId: number) => {
//     try {
//         const gadgetToFind = await db.gadget.findUnique({
//             where: {
//                 id: gadgetId
//             }
//         })
//         if (!gadgetToFind) return { message: 'gadget with this id was not found!' }
//         const newImage = await db.images.create({
//             data: {
//                 imageLink,
//                 gadget: {
//                     connect: { id: gadgetToFind.id }
//                 }
//             }
//         })
//         return newImage
//     } catch (e) {
//         return { message: `create image error: ${e}` };
//     } finally {
//         await db.$disconnect();
//     }
// }

// export const createGadgetSpecialCharacteristics = async (value: string, gadgetId: number, characteristicId) => {
//     try {
//         const gadgetToFind = await db.gadget.findUnique({
//             where: {
//                 id: gadgetId
//             }
//         })
//         if (!gadgetToFind) return { message: 'gadget with this id was not found!' }
//         const characteristicToFind = await db.characteristics.findUnique({
//             where: {
//                 id: characteristicId
//             }
//         })
//         if (!characteristicToFind) return { message: 'characteristic with this id was not found!' }
//         const newGadgetSpecialCharacteristics = await db.gadgetSpecialCharacteristics.create({
//             data: {
//                 value,
//                 gadget: {
//                     connect: { id: gadgetToFind.id }
//                 },
//                 characteristics: {
//                     connect: { id: characteristicToFind.id }
//                 }
//             }
//         })
//         return newGadgetSpecialCharacteristics
//     } catch (e) {
//         return { message: `create gadgetSpecialCharacteristics error: ${e}` };
//     } finally {
//         await db.$disconnect();
//     }
// }