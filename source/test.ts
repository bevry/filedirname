import { equal, gte } from 'assert-helpers'
import kava from 'kava'
import filedirname from './index.js'

function verify(__filename: string, __dirname: string) {
	console.log({ __filename, __dirname })
	equal(typeof __filename, 'string', 'filename is a string')
	equal(typeof __dirname, 'string', 'dirname is a string')
	gte(__filename.length, 1, 'filename has a length')
	gte(__dirname.length, 1, 'dirname has a length')
}

kava.suite('filedirname', function (suite, test) {
	test('import.meta.url', function () {
		console.log('import.meta.url:', import.meta.url)
		const { __filename, __dirname } = filedirname(import.meta.url)
		verify(__filename, __dirname)
	})
	// test('/dir/file.js', function () {
	// 	const { __filename, __dirname } = filedirname('/dir/file.js')
	// 	verify(__filename, __dirname)
	// })
	test('file:///dir/file.js', function () {
		const { __filename, __dirname } = filedirname('file:///dir/file.js')
		verify(__filename, __dirname)
	})
	test('https://dir/file.js', function () {
		const { __filename, __dirname } = filedirname('https://dir/file.js')
		verify(__filename, __dirname)
	})
})
