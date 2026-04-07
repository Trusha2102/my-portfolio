import { Hono } from "hono";

type Env = {};

const app = new Hono<{ Bindings: Env }>();

export default app;
