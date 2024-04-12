/// <reference types="astro/client" />
import type { R2Bucket, D1Database } from "@cloudflare/workers-types";
import type { Runtime } from "@astrojs/cloudflare";

interface ImportMetaEnv {
	readonly GITHUB_CLIENT_ID: string;
	readonly GITHUB_CLIENT_SECRET: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

export interface Env {
	BUCKET: R2Bucket;
	DB: D1Database;
}

declare global {
	namespace App {
		interface Locals extends Runtime<Env> {}
	}
}
