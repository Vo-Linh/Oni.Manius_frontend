"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var work_controllers_1 = __importDefault(require("../controllers/work.controllers"));
var router = express_1.Router();
router.get('/', work_controllers_1.default.display);
exports.default = router;
//# sourceMappingURL=work.routes.js.map