"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var actions_1 = require("./utils/actions");
// import { createCategory, createCharacteristic, createGadget, createGadgetSpecialCharacteristics, createImage, getAllGadgets, getAllProcuctsByCategory, getProcuctById } from './utils/actions'
var router = (0, express_1.Router)();
router.get('/', function (_, res) {
    res.json({ 'project name': 'apple store backend' });
});
router.get('/products', function (_, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, actions_1.getProducts)()];
            case 1:
                data = _a.sent();
                res.json(data);
                return [2 /*return*/];
        }
    });
}); });
router.get('/category/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var categoryId, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                categoryId = +req.params.id;
                if (categoryId <= 0 || !Number.isInteger(categoryId)) {
                    res.send('category ID is invalid');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, actions_1.getProductsByCategory)(categoryId)];
            case 1:
                data = _a.sent();
                res.json(data);
                return [2 /*return*/];
        }
    });
}); });
router.get('/products/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productId = +req.params.id;
                if (productId <= 0 || !Number.isInteger(productId)) {
                    res.send('product ID is invalid');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, actions_1.getProductById)(productId)];
            case 1:
                data = _a.sent();
                res.json(data);
                return [2 /*return*/];
        }
    });
}); });
router.get('/subcategory', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var categoryId, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                categoryId = +req.query.category;
                if (categoryId <= 0 || !Number.isInteger(categoryId)) {
                    res.send('category ID is invalid');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, actions_1.getSubcategoriesByCategory)(categoryId)];
            case 1:
                data = _a.sent();
                res.json(data);
                return [2 /*return*/];
        }
    });
}); });
router.get('/subcategory/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var subcategoryId, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                subcategoryId = +req.params.id;
                if (subcategoryId <= 0 || !Number.isInteger(subcategoryId)) {
                    res.send('subcategory ID is invalid');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, actions_1.getProductsBySubcategory)(subcategoryId)];
            case 1:
                data = _a.sent();
                res.json(data);
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;
//# sourceMappingURL=router.js.map