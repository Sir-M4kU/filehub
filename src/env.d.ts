/// <reference types="astro/client" />
import type { R2Bucket, D1Database } from "@cloudflare/workers-types";
import type { Runtime } from "@astrojs/cloudflare";

export interface Env {
	BUCKET: R2Bucket;
	DB: D1Database;
}

declare global {
	namespace App {
		interface Locals extends Runtime<Env> {}
	}
}
