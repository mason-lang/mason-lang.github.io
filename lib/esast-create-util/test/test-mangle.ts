import * as assert from 'assert'
import mangle, {unmangle} from '../lib/mangle-identifier'

const tests = new Map([
	['x-y', 'x_45y'],
	['x!?', 'x_33_63'],
	['default', '_default']
])

describe('mangle', () => {
	for (let [unmangled, mangled] of tests)
		it(unmangled, () => {
			assert.equal(mangled, mangle(unmangled))
			assert.equal(unmangled, unmangle(mangled))
		})
})
