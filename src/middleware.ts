import { defineMiddleware } from "astro:middleware";
import { getSession } from "auth-astro/server";

export const onRequest = defineMiddleware(
	async ({ url, request, redirect }, next) => {
		const session = await getSession(request);

		if (url.pathname.includes("/my-files") && !session) return redirect("/");

		return next();
	}
);
