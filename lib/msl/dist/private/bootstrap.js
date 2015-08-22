'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.bootstrap = mod.exports;
	}
})(this, function (exports) {
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.addProperty = addProperty;
	exports.msDef = msDef;
	exports.implContains = implContains;
	if (typeof global === 'undefined') window.global = window;

	function addProperty(object, key, value) {
		Object.defineProperty(object, key, {
			value,
			writable: false,
			enumerable: false,
			configurable: false
		});
	}

	function msDef(name, fun) {
		addProperty(ms, name, fun);
	}

	const ms = {};
	addProperty(global, '_ms', ms);
	const msDefs = {
		add(bag, value) {
			bag.push(value);
		},

		addMany(bag, values) {
			for (const _ of values) ms.add(bag, _);
		},

		assert(fun) {
			const args = Array.prototype.slice.call(arguments, 1);
			if (!fun(...args)) throw new Error(assertErrorMessage(`assert ${ fun.name }`, args));
		},

		assertNot(fun) {
			const args = Array.prototype.slice.call(arguments, 1);
			if (fun(...args)) throw new Error(assertErrorMessage(`forbid ${ fun.name }`, args));
		},

		assertMember(obj, member) {
			const args = Array.prototype.slice.call(arguments, 2);
			if (!obj[member](...args)) throw new Error(assertErrorMessage(`assert ${ ms.inspect(obj) }.${ member }`, args));
		},

		assertNotMember(obj, member) {
			const args = Array.prototype.slice.call(arguments, 2);
			if (obj[member](...args)) throw new Error(assertErrorMessage(`assert ${ ms.inspect(obj) }.${ member }`, args));
		},

		async(generatorFunction) {
			const generator = generatorFunction();

			const continuer = verb => arg => {
				let result;

				try {
					result = generator[verb](arg);
				} catch (error) {
					return Promise.reject(error);
				}

				const value = result.value,
				      done = result.done;
				return done ? value : Promise.resolve(value).then(onFulfilled, onRejected);
			};

			const onFulfilled = continuer('next');
			const onRejected = continuer('throw');
			return onFulfilled();
		},

		$for(collection, generatorFunc) {
			const promises = [];

			for (const elem of collection) promises.push(ms.async(() => generatorFunc(elem)));

			return Promise.all(promises);
		},

		get(object, key) {
			const _ = object[key];
			if (_ === undefined) throw new Error(`Module ${ object.name } does not have ${ key }`);
			return _;
		},

		getModule(module) {
			return module !== null && module !== undefined && module._get instanceof Lazy ? module._get.get() : module;
		},

		getDefaultExport(module) {
			if (module === undefined) throw new Error('Module undefined.');
			const mod = ms.getModule(module);
			return mod.default === undefined ? mod : mod.default;
		},

		lazy(_) {
			return new Lazy(_);
		},

		lazyGetModule(module) {
			if (module === undefined) throw new Error('Module undefined.');
			return module._get instanceof Lazy ? module._get : new Lazy(() => module);
		},

		lazyProp(lazyObject, key) {
			if (!(lazyObject instanceof Lazy)) throw new Error(`Expected a Lazy, got: ${ lazyObject }`);
			return new Lazy(() => lazyObject.get()[key]);
		},

		methodBound(object, name) {
			return object[name].bind(object);
		},

		methodUnbound(name) {
			return function (object) {
				return object[name](...Array.prototype.slice.call(arguments, 1));
			};
		},

		newProperty(object, name, value) {
			if (Object.prototype.hasOwnProperty.call(object, name)) throw new Error(`Property ${ name } already exists.`);
			object[name] = value;
		},

		regexp(parts, flags) {
			parts = parts.map(_ => _ instanceof RegExp ? _.source : String(_));
			return new RegExp(parts.join(''), flags);
		},

		setLazy(value, name, lazy) {
			Object.defineProperty(value, name, {
				get: lazy.get,
				enumerable: true
			});
		},

		symbol(value) {
			const symbol = value['impl-symbol'];
			return symbol === undefined ? value : symbol;
		},

		unlazy(_) {
			return _ instanceof Lazy ? _.get() : _;
		}

	};

	for (const def in msDefs) msDef(def, msDefs[def]);

	function assertErrorMessage(lead, args) {
		const showArgs = args.map(ms.inspect).join('\n');
		return `${ lead }\n\t${ indent(showArgs) }`;
	}

	function indent(str) {
		return str.replace(/\n/g, '\n\t');
	}

	class Lazy {
		constructor(get) {
			this.get = () => {
				this.get = () => {
					throw new Error(`Lazy value depends on itself. Thunk: ${ get }`);
				};

				const _ = get();

				this.get = () => _;

				return _;
			};
		}

	}

	const containsImplSymbol = exports.containsImplSymbol = Symbol('contains?');

	function implContains(type, impl) {
		addProperty(type.prototype, containsImplSymbol, impl);
	}

	ms.contains = (type, val) => type[containsImplSymbol](val);

	ms.checkContains = (_type, val) => val;

	for (const type of [Boolean, String, Symbol, Number]) {
		const src = `return typeof _ === "${ type.name.toLowerCase() }"`;
		addProperty(type, containsImplSymbol, Function('_', src));
	}

	implContains(Function, function (_) {
		return _ instanceof this;
	});
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhdGUvYm9vdHN0cmFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUdnQixXQUFXLEdBQVgsV0FBVztTQVNYLEtBQUssR0FBTCxLQUFLO1NBNEtMLFlBQVksR0FBWixZQUFZOzs7VUFyTFosV0FBVzs7Ozs7Ozs7O1VBU1gsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0EyS1Isa0JBQWtCLFdBQWxCLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7O1VBQ3JDLFlBQVkiLCJmaWxlIjoicHJpdmF0ZS9ib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAodHlwZW9mIGdsb2JhbCA9PT0gJ3VuZGVmaW5lZCcpXG5cdHdpbmRvdy5nbG9iYWwgPSB3aW5kb3dcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb3BlcnR5KG9iamVjdCwga2V5LCB2YWx1ZSkge1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcblx0XHR2YWx1ZSxcblx0XHR3cml0YWJsZTogZmFsc2UsXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0Y29uZmlndXJhYmxlOiBmYWxzZVxuXHR9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbXNEZWYobmFtZSwgZnVuKSB7XG5cdGFkZFByb3BlcnR5KG1zLCBuYW1lLCBmdW4pXG59XG5cbi8vIFRoaXMgb2JqZWN0IGNvbnRhaW5zIGZ1bmN0aW9ucyBjYWxsZWQgdXBvbiBieSBjb21waWxlZCBjb2RlLlxuY29uc3QgbXMgPSB7IH1cbmFkZFByb3BlcnR5KGdsb2JhbCwgJ19tcycsIG1zKVxuXG5jb25zdCBtc0RlZnMgPSB7XG5cdC8vIFRPRE86IHVzZSArISBtZXRob2Rcblx0YWRkKGJhZywgdmFsdWUpIHtcblx0XHRiYWcucHVzaCh2YWx1ZSlcblx0fSxcblxuXHRhZGRNYW55KGJhZywgdmFsdWVzKSB7XG5cdFx0Zm9yIChjb25zdCBfIG9mIHZhbHVlcylcblx0XHRcdG1zLmFkZChiYWcsIF8pXG5cdH0sXG5cblx0YXNzZXJ0KGZ1bikge1xuXHRcdC8vIFRPRE86RVM2IFNwbGF0XG5cdFx0Y29uc3QgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblx0XHRpZiAoIWZ1biguLi5hcmdzKSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihhc3NlcnRFcnJvck1lc3NhZ2UoYGFzc2VydCAke2Z1bi5uYW1lfWAsIGFyZ3MpKVxuXHR9LFxuXG5cdGFzc2VydE5vdChmdW4pIHtcblx0XHQvLyBUT0RPOkVTNiBTcGxhdFxuXHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cdFx0aWYgKGZ1biguLi5hcmdzKSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihhc3NlcnRFcnJvck1lc3NhZ2UoYGZvcmJpZCAke2Z1bi5uYW1lfWAsIGFyZ3MpKVxuXHR9LFxuXG5cdGFzc2VydE1lbWJlcihvYmosIG1lbWJlcikge1xuXHRcdC8vIFRPRE86RVM2IFNwbGF0XG5cdFx0Y29uc3QgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMilcblx0XHRpZiAoIW9ialttZW1iZXJdKC4uLmFyZ3MpKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGFzc2VydEVycm9yTWVzc2FnZShgYXNzZXJ0ICR7bXMuaW5zcGVjdChvYmopfS4ke21lbWJlcn1gLCBhcmdzKSlcblx0fSxcblxuXHRhc3NlcnROb3RNZW1iZXIob2JqLCBtZW1iZXIpIHtcblx0XHRjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKVxuXHRcdGlmIChvYmpbbWVtYmVyXSguLi5hcmdzKSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihhc3NlcnRFcnJvck1lc3NhZ2UoYGFzc2VydCAke21zLmluc3BlY3Qob2JqKX0uJHttZW1iZXJ9YCwgYXJncykpXG5cdH0sXG5cblx0YXN5bmMoZ2VuZXJhdG9yRnVuY3Rpb24pIHtcblx0XHRjb25zdCBnZW5lcmF0b3IgPSBnZW5lcmF0b3JGdW5jdGlvbigpXG5cdFx0Ly8gVE9ETzpFUzcgSnVzdCB1c2UgbmF0aXZlIGFzeW5jIGZ1bmN0aW9uc1xuXHRcdGNvbnN0IGNvbnRpbnVlciA9IHZlcmIgPT4gYXJnID0+IHtcblx0XHRcdGxldCByZXN1bHRcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlc3VsdCA9IGdlbmVyYXRvclt2ZXJiXShhcmcpXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG5cdFx0XHR9XG5cblx0XHRcdC8vIFRPRE86RVM2IGNvbnN0IHt2YWx1ZSwgZG9uZX0gPSByZXN1bHRcblx0XHRcdGNvbnN0IHZhbHVlID0gcmVzdWx0LnZhbHVlLCBkb25lID0gcmVzdWx0LmRvbmVcblx0XHRcdHJldHVybiBkb25lID8gdmFsdWUgOiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG5cdFx0fVxuXHRcdGNvbnN0IG9uRnVsZmlsbGVkID0gY29udGludWVyKCduZXh0Jylcblx0XHRjb25zdCBvblJlamVjdGVkID0gY29udGludWVyKCd0aHJvdycpXG5cdFx0cmV0dXJuIG9uRnVsZmlsbGVkKClcblx0fSxcblxuXHQkZm9yKGNvbGxlY3Rpb24sIGdlbmVyYXRvckZ1bmMpIHtcblx0XHRjb25zdCBwcm9taXNlcyA9IFtdXG5cdFx0Zm9yIChjb25zdCBlbGVtIG9mIGNvbGxlY3Rpb24pXG5cdFx0XHRwcm9taXNlcy5wdXNoKG1zLmFzeW5jKCgpID0+IGdlbmVyYXRvckZ1bmMoZWxlbSkpKVxuXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcylcblx0fSxcblxuXHRnZXQob2JqZWN0LCBrZXkpIHtcblx0XHQvLyBUT0RPOkVTNiBqdXN0IHVzZSBgaW1wb3J0YCBzdGF0ZW1lbmp0XG5cdFx0Y29uc3QgXyA9IG9iamVjdFtrZXldXG5cdFx0aWYgKF8gPT09IHVuZGVmaW5lZClcblx0XHRcdHRocm93IG5ldyBFcnJvcihgTW9kdWxlICR7b2JqZWN0Lm5hbWV9IGRvZXMgbm90IGhhdmUgJHtrZXl9YClcblx0XHRyZXR1cm4gX1xuXHR9LFxuXG5cdGdldE1vZHVsZShtb2R1bGUpIHtcblx0XHQvLyBUT0RPOkVTNiBqdXN0IHVzZSBgaW1wb3J0YCBzdGF0ZW1lbmp0XG5cdFx0cmV0dXJuIChtb2R1bGUgIT09IG51bGwgJiYgbW9kdWxlICE9PSB1bmRlZmluZWQgJiYgbW9kdWxlLl9nZXQgaW5zdGFuY2VvZiBMYXp5KSA/XG5cdFx0XHRtb2R1bGUuX2dldC5nZXQoKSA6XG5cdFx0XHRtb2R1bGVcblx0fSxcblxuXHRnZXREZWZhdWx0RXhwb3J0KG1vZHVsZSkge1xuXHRcdC8vIFRPRE86RVM2IGp1c3QgdXNlIGBpbXBvcnRgIHN0YXRlbWVuanRcblx0XHRpZiAobW9kdWxlID09PSB1bmRlZmluZWQpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01vZHVsZSB1bmRlZmluZWQuJylcblx0XHRjb25zdCBtb2QgPSBtcy5nZXRNb2R1bGUobW9kdWxlKVxuXHRcdHJldHVybiBtb2QuZGVmYXVsdCA9PT0gdW5kZWZpbmVkID8gbW9kIDogbW9kLmRlZmF1bHRcblx0fSxcblxuXHRsYXp5KF8pIHtcblx0XHRyZXR1cm4gbmV3IExhenkoXylcblx0fSxcblxuXHRsYXp5R2V0TW9kdWxlKG1vZHVsZSkge1xuXHRcdC8vIFRPRE86RVM2IFNob3VsZG4ndCBuZWVkXG5cdFx0aWYgKG1vZHVsZSA9PT0gdW5kZWZpbmVkKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNb2R1bGUgdW5kZWZpbmVkLicpXG5cdFx0cmV0dXJuIG1vZHVsZS5fZ2V0IGluc3RhbmNlb2YgTGF6eSA/IG1vZHVsZS5fZ2V0IDogbmV3IExhenkoKCkgPT4gbW9kdWxlKVxuXHR9LFxuXG5cdGxhenlQcm9wKGxhenlPYmplY3QsIGtleSkge1xuXHRcdGlmICghKGxhenlPYmplY3QgaW5zdGFuY2VvZiBMYXp5KSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYSBMYXp5LCBnb3Q6ICR7bGF6eU9iamVjdH1gKVxuXHRcdHJldHVybiBuZXcgTGF6eSgoKSA9PiBsYXp5T2JqZWN0LmdldCgpW2tleV0pXG5cdH0sXG5cblx0bWV0aG9kQm91bmQob2JqZWN0LCBuYW1lKSB7XG5cdFx0cmV0dXJuIG9iamVjdFtuYW1lXS5iaW5kKG9iamVjdClcblx0fSxcblxuXHRtZXRob2RVbmJvdW5kKG5hbWUpIHtcblx0XHQvLyBUT0RPOkVTNiAob2JqZWN0LCAuLi5hcmdzKSA9PiBvYmplY3RbbmFtZV0oLi4uYXJncylcblx0XHRyZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7IHJldHVybiBvYmplY3RbbmFtZV0oLi4uQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSkgfVxuXHR9LFxuXG5cdG5ld1Byb3BlcnR5KG9iamVjdCwgbmFtZSwgdmFsdWUpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgbmFtZSkpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFByb3BlcnR5ICR7bmFtZX0gYWxyZWFkeSBleGlzdHMuYClcblx0XHRvYmplY3RbbmFtZV0gPSB2YWx1ZVxuXHR9LFxuXG5cdHJlZ2V4cChwYXJ0cywgZmxhZ3MpIHtcblx0XHRwYXJ0cyA9IHBhcnRzLm1hcChfID0+IF8gaW5zdGFuY2VvZiBSZWdFeHAgPyBfLnNvdXJjZSA6IFN0cmluZyhfKSlcblx0XHRyZXR1cm4gbmV3IFJlZ0V4cChwYXJ0cy5qb2luKCcnKSwgZmxhZ3MpXG5cdH0sXG5cblx0c2V0TGF6eSh2YWx1ZSwgbmFtZSwgbGF6eSkge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgbmFtZSwge2dldDogbGF6eS5nZXQsIGVudW1lcmFibGU6IHRydWV9KVxuXHR9LFxuXG5cdHN5bWJvbCh2YWx1ZSkge1xuXHRcdGNvbnN0IHN5bWJvbCA9IHZhbHVlWydpbXBsLXN5bWJvbCddXG5cdFx0cmV0dXJuIHN5bWJvbCA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiBzeW1ib2xcblx0fSxcblxuXHR1bmxhenkoXykge1xuXHRcdHJldHVybiBfIGluc3RhbmNlb2YgTGF6eSA/IF8uZ2V0KCkgOiBfXG5cdH1cbn1cbmZvciAoY29uc3QgZGVmIGluIG1zRGVmcylcblx0bXNEZWYoZGVmLCBtc0RlZnNbZGVmXSlcblxuZnVuY3Rpb24gYXNzZXJ0RXJyb3JNZXNzYWdlKGxlYWQsIGFyZ3MpIHtcblx0Y29uc3Qgc2hvd0FyZ3MgPSBhcmdzLm1hcChtcy5pbnNwZWN0KS5qb2luKCdcXG4nKVxuXHRyZXR1cm4gYCR7bGVhZH1cXG5cXHQke2luZGVudChzaG93QXJncyl9YFxufVxuZnVuY3Rpb24gaW5kZW50KHN0cikge1xuXHRyZXR1cm4gc3RyLnJlcGxhY2UoL1xcbi9nLCAnXFxuXFx0Jylcbn1cblxuY2xhc3MgTGF6eSB7XG5cdGNvbnN0cnVjdG9yKGdldCkge1xuXHRcdHRoaXMuZ2V0ID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5nZXQgPSAoKSA9PiB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgTGF6eSB2YWx1ZSBkZXBlbmRzIG9uIGl0c2VsZi4gVGh1bms6ICR7Z2V0fWApXG5cdFx0XHR9XG5cdFx0XHRjb25zdCBfID0gZ2V0KClcblx0XHRcdHRoaXMuZ2V0ID0gKCkgPT4gX1xuXHRcdFx0cmV0dXJuIF9cblx0XHR9XG5cdH1cbn1cblxuLy8gU29tZSBUeXBlcyB3YW50IHRvIGltcGxlbWVudCBjb250YWlucz8gYmVmb3JlIGl0IGlzIG9mZmljaWFsbHkgZGVmaW5lZC5cbmV4cG9ydCBjb25zdCBjb250YWluc0ltcGxTeW1ib2wgPSBTeW1ib2woJ2NvbnRhaW5zPycpXG5leHBvcnQgZnVuY3Rpb24gaW1wbENvbnRhaW5zKHR5cGUsIGltcGwpIHtcblx0YWRkUHJvcGVydHkodHlwZS5wcm90b3R5cGUsIGNvbnRhaW5zSW1wbFN5bWJvbCwgaW1wbClcbn1cblxuLy8gVGhlc2UgYXJlIG92ZXJ3cml0dGVuIGJ5IFR5cGUubXMuXG5tcy5jb250YWlucyA9ICh0eXBlLCB2YWwpID0+IHR5cGVbY29udGFpbnNJbXBsU3ltYm9sXSh2YWwpXG5tcy5jaGVja0NvbnRhaW5zID0gKF90eXBlLCB2YWwpID0+IHZhbFxuXG4vLyBTaW5jZSB0aGVzZSBhcmUgcHJpbWl0aXZlcywgd2UgY2FuJ3QgdXNlIGBpbnN0YW5jZW9mYC5cbmZvciAoY29uc3QgdHlwZSBvZiBbQm9vbGVhbiwgU3RyaW5nLCBTeW1ib2wsIE51bWJlcl0pIHtcblx0Ly8gR2VuZXJhdGVkIGNvZGUgaXMgZmFzdGVyIHRoYW4gdXNpbmcgYSBjbG9zdXJlLlxuXHRjb25zdCBzcmMgPSBgcmV0dXJuIHR5cGVvZiBfID09PSBcIiR7dHlwZS5uYW1lLnRvTG93ZXJDYXNlKCl9XCJgXG5cdGFkZFByb3BlcnR5KHR5cGUsIGNvbnRhaW5zSW1wbFN5bWJvbCwgRnVuY3Rpb24oJ18nLCBzcmMpKVxufVxuXG5pbXBsQ29udGFpbnMoRnVuY3Rpb24sIGZ1bmN0aW9uKF8pIHtcblx0cmV0dXJuIF8gaW5zdGFuY2VvZiB0aGlzXG59KVxuIl0sInNvdXJjZVJvb3QiOiIvc3JjIn0=
