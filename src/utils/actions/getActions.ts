import db from '../db'

const modifyProducts = (products) => {
    return products.map(({ category, images, product_types, ...product }) => ({
        ...product,
        category: category.name,
        images: images.map(image => ({ id: image.id, link: image.image_link })),
        characteristics: product_types.products_x_characteristics.map(productCharacteristic => ({
            id: productCharacteristic.id,
            characteristic: productCharacteristic.characteristics.name,
            unit_type: productCharacteristic.characteristics.unit_type,
            value: productCharacteristic.value
        }))
    }));
}

export const getProducts = async () => {
    try {
        const products = await db.products.findMany({
            include: {
                category: true,
                images: true,
                product_types: {
                    include: {
                        products_x_characteristics: {
                            include: {
                                characteristics: true
                            }
                        }
                    }
                }
            }
        });

        return modifyProducts(products);
    } catch (e) {
        return { message: `get all products error: ${e}` };
    } finally {
        await db.$disconnect();
    }
}

export const getProductsByCategory = async (categoryId: number) => {
    try {
        const products = await db.products.findMany({
            where: {
                category: {
                    id: categoryId
                }
            },
            include: {
                category: true,
                images: true,
                product_types: {
                    include: {
                        products_x_characteristics: {
                            include: {
                                characteristics: true
                            }
                        }
                    }
                }
            }
        });

        return modifyProducts(products);
    } catch (e) {
        return { message: `get all products error: ${e}` };
    } finally {
        await db.$disconnect();
    }
}

export const getProductById = async (id: number) => {
    try {
        const product = await db.products.findUnique({
            where: {
                id: id
            },
            include: {
                category: true,
                images: true,
                product_types: {
                    include: {
                        products_x_characteristics: {
                            include: {
                                characteristics: true
                            }
                        }
                    }
                }
            }
        });

        return modifyProducts([product])[0];
    } catch (e) {
        return { message: `get all products error: ${e}` };
    } finally {
        await db.$disconnect();
    }
}