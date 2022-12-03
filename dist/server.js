"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const poi_1 = __importDefault(require("./routes/poi"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = process.env.PORT;
app.get("/", (_, res) => {
    res.send("ok");
});
app.use("/v1", poi_1.default);
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
