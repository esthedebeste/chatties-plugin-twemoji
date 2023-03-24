import type { Plugin } from "chatties/src/lib/plugins/plugin-api.js"
import type { Emote } from "chatties/src/lib/types/message.js"
import { parse } from "twemoji-parser"

export const plugin: Plugin = {
	id: "chatties-plugin-twemoji",
	message(message) {
		const emojis: Emote[] = parse(message.message_text, {
			buildUrl: codepoints =>
				`https://cdn.jsdelivr.net/gh/twitter/twemoji@~14/assets/svg/${codepoints}.svg`,
		}).map(({ text, indices, url }) => ({
			code: text,
			char_range: { start: indices[0], end: indices[1] },
			url,
			info: "Twemoji",
		}))
		message.emotes.push(...emojis)
	},
}
