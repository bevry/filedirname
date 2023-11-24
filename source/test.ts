// external
import { equal, contains } from 'assert-helpers'
import kava from 'kava'

// local
import filedirname from './index.js'
import { resolve } from 'path'

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
	test('/dir/file.js', function () {
		const [file, dir] = filedirname('/dir/file.js')
		console.log({ file, dir })
		equal(file, resolve('/dir/file.js'))
		equal(dir, resolve('/dir'))
	})
	test('file:/dir/file.js', function () {
		const [file, dir] = filedirname('file:/dir/file.js')
		console.log({ file, dir })
		equal(file, resolve('/dir/file.js'))
		equal(dir, resolve('/dir'))
	})
	test('file://localhost/dir/file.js', function () {
		const [file, dir] = filedirname('file://localhost/dir/file.js')
		console.log({ file, dir })
		equal(file, resolve('/dir/file.js'))
		equal(dir, resolve('/dir'))
	})
	test('https://dir/file.js', function () {
		const [file, dir] = filedirname('https://dir/file.js')
		console.log({ file, dir })
		equal(file, 'https://dir/file.js')
		equal(dir, 'https://dir')
	})
})
