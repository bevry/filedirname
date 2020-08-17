import { fileURLToPath } from 'url'
import { dirname } from 'path'
/** Fetch the `__filename` and `__dirname` from the `import.meta.url` */
export default function fetch(path: string | URL) {
	const __filename = fileURLToPath(path)
	const __dirname = dirname(__filename)
	return { __filename, __dirname }
}
