import { equal, gte } from 'assert-helpers'
import kava from 'kava'
import filedirname from './index.js'

function verify(file: string, dir: string) {
	console.log({ file, dir })
	equal(typeof file, 'string', 'file is a string')
	equal(typeof dir, 'string', 'dir is a string')
	gte(file.length, 1, 'file has a length')
	gte(dir.length, 1, 'dir has a length')
}

kava.suite('filedirname', function (suite, test) {
	test('caller', function () {
		const [file, dir] = filedirname()
		verify(file, dir)
	})
	test('error', function () {
		const [file, dir] = filedirname(new Error())
		verify(file, dir)
	})
	test('/dir/file.js', function () {
		const [file, dir] = filedirname('/dir/file.js')
		verify(file, dir)
	})
	test('file:///dir/file.js', function () {
		const [file, dir] = filedirname('file:///dir/file.js')
		verify(file, dir)
	})
	test('https://dir/file.js', function () {
		const [file, dir] = filedirname('https://dir/file.js')
		verify(file, dir)
	})
})
