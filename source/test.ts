import { equal, gte } from 'assert-helpers'
import kava from 'kava'
import filedirname from './index.js'

kava.suite('filedirname', function (suite, test) {
	test('works', function () {
		const { __filename, __dirname } = filedirname(import.meta.url)
		console.log({ __filename, __dirname })
		equal(typeof __filename, 'string', 'filename is a string')
		equal(typeof __dirname, 'string', 'dirname is a string')
		gte(__filename.length, 1, 'filename has a length')
		gte(__dirname.length, 1, 'dirname has a length')
	})
})
