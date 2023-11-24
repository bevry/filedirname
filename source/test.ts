// external
import { equal, contains } from 'assert-helpers'
import kava from 'kava'

// local
import filedirname from './index.js'
import { sep } from 'path'

kava.suite('filedirname', function (suite, test) {
	test('caller', function () {
		const [file, dir] = filedirname()
		console.log({ file, dir })
		contains(file, 'test.js')
		contains(dir, 'filedirname')
	})
	test('error', function () {
		const [file, dir] = filedirname(new Error())
		console.log({ file, dir })
		contains(file, 'test.js')
		contains(dir, 'filedirname')
	})
	if (sep === '\\') {
		test(`c:\\dir\\file.txt`, function () {
			const [file, dir] = filedirname(`c:\\dir\\file.txt`)
			console.log({ file, dir })
			equal(file, `c:\\dir\\file.txt`)
			equal(dir, `c:\\dir`)
		})
		test(`\\\\hostname\\dir\\file.txt`, function () {
			const [file, dir] = filedirname(`\\\\hostname\\dir\\file.txt`)
			console.log({ file, dir })
			equal(file, `\\\\hostname\\dir\\file.txt`)
			equal(dir, `\\\\hostname\\dir\\`) // the trailing backslash seems a bug with Node.js, we aren't going to argue
		})
		// file: URLs
		test('file:/c:/dir/file.txt', function () {
			const [file, dir] = filedirname('file:/c:/dir/file.txt')
			console.log({ file, dir })
			equal(file, `c:\\dir\\file.txt`)
			equal(dir, `c:\\dir`)
		})
		test('file://localhost/c:/dir/file.txt', function () {
			const [file, dir] = filedirname('file://localhost/c:/dir/file.txt')
			console.log({ file, dir })
			equal(file, `c:\\dir\\file.txt`)
			equal(dir, `c:\\dir`)
		})
		test('file://hostname/dir/file.txt', function () {
			const [file, dir] = filedirname('file://hostname/dir/file.txt')
			console.log({ file, dir })
			equal(file, `\\\\hostname\\dir\\file.txt`)
			equal(dir, `\\\\hostname\\dir\\`) // the trailing backslash seems a bug with Node.js, we aren't going to argue
		})
	} else if (sep === '/') {
		test(`/dir/file.txt`, function () {
			const [file, dir] = filedirname(`/dir/file.txt`)
			console.log({ file, dir })
			equal(file, `/dir/file.txt`)
			equal(dir, `/dir`)
		})
		test('file:/dir/file.txt', function () {
			const [file, dir] = filedirname('file:/dir/file.txt')
			console.log({ file, dir })
			equal(file, `/dir/file.txt`)
			equal(dir, `/dir`)
		})
		test('file:///dir/file.txt', function () {
			const [file, dir] = filedirname('file:///dir/file.txt')
			console.log({ file, dir })
			equal(file, `/dir/file.txt`)
			equal(dir, `/dir`)
		})
		test('file://localhost/dir/file.txt', function () {
			const [file, dir] = filedirname('file://localhost/dir/file.txt')
			console.log({ file, dir })
			equal(file, `/dir/file.txt`)
			equal(dir, `/dir`)
		})
	}
	test('https://dir/file.txt', function () {
		const [file, dir] = filedirname('https://dir/file.txt')
		console.log({ file, dir })
		equal(file, 'https://dir/file.txt')
		equal(dir, 'https://dir')
	})
})
