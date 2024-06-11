"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsBySubcategory = exports.getSubcategoriesByCategory = exports.getProductById = exports.getProductsByCategory = exports.getProducts = void 0;
var db_1 = __importDefault(require("../db"));
var modifyProducts = function (products) {
    return products.map(function (_a) {
        var category = _a.category, images = _a.images, product_types = _a.product_types, product_type_id = _a.product_type_id, category_id = _a.category_id, product = __rest(_a, ["category", "images", "product_types", "product_type_id", "category_id"]);
        return (__assign(__assign({}, product), { category: category.name, name: product_types.product_name, images: images.map(function (image) { return "image/".concat(image.image_link, ".jpg"); }), characteristics: product_types.products_x_characteristics.map(function (productCharacteristic) { return ({
                characteristic: productCharacteristic.characteristics.name,
                unit_type: productCharacteristic.characteristics.unit_type,
                value: productCharacteristic.value
            }); }) }));
    });
};
var modifyProductTypes = function (productTypes) {
    return productTypes.map(function (productType) { return ({ id: productType.id, name: productType.product_name }); });
};
var getProducts = function () { return __awaiter(void 0, void 0, void 0, function () {
    var products, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, 3, 5]);
                return [4 /*yield*/, db_1.default.products.findMany({
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
                    })];
            case 1:
                products = _a.sent();
                return [2 /*return*/, modifyProducts(products)];
            case 2:
                e_1 = _a.sent();
                return [2 /*return*/, { message: "get all products error: ".concat(e_1) }];
            case 3: return [4 /*yield*/, db_1.default.$disconnect()];
            case 4:
                _a.sent();
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getProducts = getProducts;
var getProductsByCategory = function (categoryId) { return __awaiter(void 0, void 0, void 0, function () {
    var products, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, 3, 5]);
                return [4 /*yield*/, db_1.default.products.findMany({
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
                    })];
            case 1:
                products = _a.sent();
                return [2 /*return*/, modifyProducts(products)];
            case 2:
                e_2 = _a.sent();
                return [2 /*return*/, { message: "get all products by category error: ".concat(e_2) }];
            case 3: return [4 /*yield*/, db_1.default.$disconnect()];
            case 4:
                _a.sent();
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getProductsByCategory = getProductsByCategory;
var getProductById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var product, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, 3, 5]);
                return [4 /*yield*/, db_1.default.products.findUnique({
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
                    })];
            case 1:
                product = _a.sent();
                return [2 /*return*/, modifyProducts([product])[0]];
            case 2:
                e_3 = _a.sent();
                return [2 /*return*/, { message: "get product by id error: ".concat(e_3) }];
            case 3: return [4 /*yield*/, db_1.default.$disconnect()];
            case 4:
                _a.sent();
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getProductById = getProductById;
var getSubcategoriesByCategory = function (categoryId) { return __awaiter(void 0, void 0, void 0, function () {
    var productTypes, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, 3, 5]);
                return [4 /*yield*/, db_1.default.product_types.findMany({
                        where: {
                            products: {
                                some: {
                                    category_id: categoryId
                                }
                            }
                        },
                        include: {
                            products_x_characteristics: {
                                include: {
                                    characteristics: true
                                }
                            }
                        }
                    })];
            case 1:
                productTypes = _a.sent();
                return [2 /*return*/, modifyProductTypes(productTypes)];
            case 2:
                e_4 = _a.sent();
                return [2 /*return*/, { message: "get subcategories by category error: ".concat(e_4) }];
            case 3: return [4 /*yield*/, db_1.default.$disconnect()];
            case 4:
                _a.sent();
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getSubcategoriesByCategory = getSubcategoriesByCategory;
var getProductsBySubcategory = function (subcategoryId) { return __awaiter(void 0, void 0, void 0, function () {
    var products, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, 3, 5]);
                return [4 /*yield*/, db_1.default.products.findMany({
                        where: {
                            product_type_id: subcategoryId
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
                    })];
            case 1:
                products = _a.sent();
                return [2 /*return*/, modifyProducts(products)];
            case 2:
                e_5 = _a.sent();
                return [2 /*return*/, { message: "get products by subcategory error: ".concat(e_5) }];
            case 3: return [4 /*yield*/, db_1.default.$disconnect()];
            case 4:
                _a.sent();
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getProductsBySubcategory = getProductsBySubcategory;
//# sourceMappingURL=getActions.js.map