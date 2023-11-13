import { fileURLToPath, URL } from 'url'
import { dirname } from 'path'
import getCurrentLine, { getFileFromError } from 'get-current-line'

export type Result = [file: string, directory: string]

/** Fetch the file and directory paths from a path, uri, or `import.meta.url` */
export function filedirnameFromPath(path: string): Result {
	let file
	if (path.includes('://')) {
		// is a url, e.g. file://, or https://
		const url = new URL(path)
		file = url.protocol === 'file:' ? fileURLToPath(url) : url.href
	} else {
		// is already a typical path
		file = path
	}
	const directory = dirname(file)
	return [file, directory]
}

/** Fetch the file and directory paths from an Error instance. */
export function filedirnameFromError(error: Error): Result {
	return filedirnameFromPath(getFileFromError(error))
}

/** Fetch the file and directory paths from the caller. */
export function filedirnameFromCaller(): Result {
	return filedirnameFromPath(
		getCurrentLine({
			method: 'filedirname',
			frames: 0,
			immediate: false,
		}).file
	)
}

/* eslint-disable no-redeclare */
/** Fetch the file and directory paths from the caller. */
function filedirname(): Result
/** Fetch the file and directory paths from the Error instance. */
function filedirname(arg: Error): Result
/** Fetch the file and directory paths from a path, uri, or `import.meta.url`. */
function filedirname(arg: string): Result
/** Fetch the file and directory paths from one of the overloads. */
function filedirname(arg?: Error | string): Result {
	// nothing
	if (arg == null) {
		return filedirnameFromCaller()
	}

	// string
	if (typeof arg === 'string') {
		return filedirnameFromPath(arg)
	}

	// error
	return filedirnameFromError(arg)
}

export default filedirname
