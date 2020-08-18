import { fileURLToPath } from 'url'
import { dirname } from 'path'
/** Fetch the `__filename` and `__dirname` from the `import.meta.url` */
export default function fetch(path: string) {
	const url = new URL(path)
	const __filename = url.protocol === 'file:' ? fileURLToPath(url) : url.href
	const __dirname = dirname(__filename)
	return { __filename, __dirname }
}
