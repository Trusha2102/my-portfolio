import { handle } from "hono/vercel";
import app from "../src/worker/index.ts";

export default handle(app);
