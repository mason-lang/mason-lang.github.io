if (typeof global === 'undefined')
	window.global = window

function addHiddenProperty(object, key, value) {
	Object.defineProperty(object, key, {
		value,
		writable: false,
		enumerable: false,
		configurable: false
	})
}

export function msDef(name, fun) {
	addHiddenProperty(ms, name, fun)
}

// This object contains functions called upon by compiled code.
const ms = { }
addHiddenProperty(global, '_ms', ms)

const msDefs = {
	// TODO: use +! method
	add(bag, value) {
		bag.push(value)
	},

	addMany(bag, values) {
		for (const _ of values)
			ms.add(bag, _)
	},

	assert(fun) {
		// TODO:ES6 Splat
		const args = Array.prototype.slice.call(arguments, 1)
		if (!fun(...args))
			throw new Error(assertErrorMessage(`assert ${fun.name}`, args))
	},

	assertNot(fun) {
		// TODO:ES6 Splat
		const args = Array.prototype.slice.call(arguments, 1)
		if (fun(...args))
			throw new Error(assertErrorMessage(`forbid ${fun.name}`, args))
	},

	assertMember(obj, member) {
		// TODO:ES6 Splat
		const args = Array.prototype.slice.call(arguments, 2)
		if (!obj[member](...args))
			throw new Error(assertErrorMessage(`assert ${ms.inspect(obj)}.${member}`, args))
	},

	assertNotMember(obj, member) {
		const args = Array.prototype.slice.call(arguments, 2)
		if (obj[member](...args))
			throw new Error(assertErrorMessage(`assert ${ms.inspect(obj)}.${member}`, args))
	},

	async(generatorFunction) {
		const generator = generatorFunction()
		// TODO:ES7 Just use native async functions
		const continuer = verb => arg => {
			let result
			try {
				result = generator[verb](arg)
			} catch (error) {
				return Promise.reject(error)
			}

			// TODO:ES6 const {value, done} = result
			const value = result.value, done = result.done
			return done ? value : Promise.resolve(value).then(onFulfilled, onRejected)
		}
		const onFulfilled = continuer('next')
		const onRejected = continuer('throw')
		return onFulfilled()
	},

	$for(collection, generatorFunc) {
		const promises = []
		for (const elem of collection)
			promises.push(ms.async(() => generatorFunc(elem)))
		return Promise.all(promises)
	},

	get(object, key) {
		// TODO:ES6 just use `import` statemenjt
		const _ = object[key]
		if (_ === undefined)
			throw new Error(`Module ${object.name} does not have ${key}`)
		return _
	},

	getModule(module) {
		// TODO:ES6 just use `import` statemenjt
		return (module !== null && module !== undefined && module._get instanceof Lazy) ?
			module._get.get() :
			module
	},

	getDefaultExport(module) {
		// TODO:ES6 just use `import` statemenjt
		if (module === undefined)
			throw new Error('Module undefined.')
		const mod = ms.getModule(module)
		return mod.default === undefined ? mod : mod.default
	},

	lazy(_) {
		return new Lazy(_)
	},

	lazyGetModule(module) {
		// TODO:ES6 Shouldn't need
		if (module === undefined)
			throw new Error('Module undefined.')
		return module._get instanceof Lazy ? module._get : new Lazy(() => module)
	},

	lazyProp(lazyObject, key) {
		if (!(lazyObject instanceof Lazy))
			throw new Error(`Expected a Lazy, got: ${lazyObject}`)
		return new Lazy(() => lazyObject.get()[key])
	},

	methodBound(object, name) {
		return object[name].bind(object)
	},

	methodUnbound(name) {
		// TODO:ES6 (object, ...args) => object[name](...args)
		return function(object) {
			return object[name](...Array.prototype.slice.call(arguments, 1))
		}
	},

	regexp(parts, flags) {
		parts = parts.map(_ => _ instanceof RegExp ? _.source : String(_))
		return new RegExp(parts.join(''), flags)
	},

	setLazy(value, name, lazy) {
		Object.defineProperty(value, name, {get: lazy.get, enumerable: true})
	},

	symbol(value) {
		const symbol = value['impl-symbol']
		return symbol === undefined ? value : symbol
	},

	unlazy(_) {
		return _ instanceof Lazy ? _.get() : _
	}
}
for (const def in msDefs)
	msDef(def, msDefs[def])

function assertErrorMessage(lead, args) {
	const showArgs = args.map(ms.inspect).join('\n')
	return `${lead}\n\t${indent(showArgs)}`
}
function indent(str) {
	return str.replace(/\n/g, '\n\t')
}

class Lazy {
	constructor(get) {
		this.get = () => {
			this.get = () => {
				throw new Error(`Lazy value depends on itself. Thunk: ${get}`)
			}
			const _ = get()
			this.get = () => _
			return _
		}
	}
}

// Some Types want to implement contains? before it is officially defined.
export const containsImplSymbol = Symbol('contains?')
export function implContains(type, impl) {
	addHiddenProperty(type.prototype, containsImplSymbol, impl)
}

// These are overwritten by Type.ms.
ms.hasInstance = (type, val) => type[containsImplSymbol](val)
ms.checkInstance = (_type, val) => val

// TODO:ES6 Use `instanceof` instead of `contains?` method and implement with `Symbol.hasInstance`
implContains(Function, function(_) {
	return _ instanceof this
})
