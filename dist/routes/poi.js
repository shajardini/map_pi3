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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const poi_controller_1 = __importDefault(require("../controllers/poi-controller"));
const router = express_1.default.Router();
router.post("/poi", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const poi = req.body;
    try {
        const updated = yield poi_controller_1.default.save(poi);
        return res.json({ updated });
    }
    catch (e) {
        console.log("poi post", e);
        res
            .status(500).json({ message: "Não foi possível salvar ponto de interesse." });
    }
}));
router.put("/poi", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const poi = req.body;
    try {
        const updated = yield poi_controller_1.default.save(poi);
        return res.json(updated);
    }
    catch (e) {
        console.log("poi post", e);
        res
            .status(500)
            .json({ message: "Não foi possível salvar ponto de interesse." });
    }
}));
router.get("/poi", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pois = yield poi_controller_1.default.fetch();
        return res.json({ pois });
    }
    catch (e) {
        console.log("Poit get", e);
        res
            .status(500).json({ message: "Não foi possível obter os pontos de interesse." });
    }
}));
exports.default = router;
