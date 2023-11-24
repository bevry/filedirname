// external
import getCurrentLine, { getFileFromError } from 'get-current-line'
import fileURLToPathShim from '@bevry/file-url-to-path'

// builtin
import { fileURLToPath as fileURLToPathNode } from 'url'
import { dirname, sep } from 'path'

// types
export type Result = [file: string, directory: string]

/** If supported by our environment, ensure we have a filepath rather than a URL. */
function filepath(path: string): string {
	// if already a path, or if a URI that cannot be converted, return as is
	if (!path.startsWith('file:')) return path
	// otherwise convert file: to path
	if (typeof fileURLToPathNode !== 'undefined') {
		// Node.js v10+
		return fileURLToPathNode(path)
	} else {
		// Node.js <v10
		return fileURLToPathShim(path, sep)
	}
}

/** Fetch the file and directory paths from a path, uri, or `import.meta.url` */
export function filedirnameFromPath(path: string): Result {
	const file = filepath(path)
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
