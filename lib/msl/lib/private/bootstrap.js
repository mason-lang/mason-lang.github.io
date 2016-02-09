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
	exports.msDef = msDef;
	exports.implContains = implContains;
	if (typeof global === 'undefined') window.global = window;

	function addHiddenProperty(object, key, value) {
		Object.defineProperty(object, key, {
			value,
			writable: false,
			enumerable: false,
			configurable: false
		});
	}

	function msDef(name, fun) {
		addHiddenProperty(ms, name, fun);
	}

	const ms = {};
	addHiddenProperty(global, '_ms', ms);
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
		addHiddenProperty(type.prototype, containsImplSymbol, impl);
	}

	ms.hasInstance = (type, val) => type[containsImplSymbol](val);

	ms.checkInstance = (_type, val) => val;

	implContains(Function, function (_) {
		return _ instanceof this;
	});
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhdGUvYm9vdHN0cmFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQVlnQixLQUFLLEdBQUwsS0FBSztTQXdLTCxZQUFZLEdBQVosWUFBWTs7Ozs7Ozs7Ozs7O1VBeEtaLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXVLUixrQkFBa0IsV0FBbEIsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7VUFDckMsWUFBWSIsImZpbGUiOiJwcml2YXRlL2Jvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmICh0eXBlb2YgZ2xvYmFsID09PSAndW5kZWZpbmVkJylcblx0d2luZG93Lmdsb2JhbCA9IHdpbmRvd1xuXG5mdW5jdGlvbiBhZGRIaWRkZW5Qcm9wZXJ0eShvYmplY3QsIGtleSwgdmFsdWUpIHtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG5cdFx0dmFsdWUsXG5cdFx0d3JpdGFibGU6IGZhbHNlLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdGNvbmZpZ3VyYWJsZTogZmFsc2Vcblx0fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1zRGVmKG5hbWUsIGZ1bikge1xuXHRhZGRIaWRkZW5Qcm9wZXJ0eShtcywgbmFtZSwgZnVuKVxufVxuXG4vLyBUaGlzIG9iamVjdCBjb250YWlucyBmdW5jdGlvbnMgY2FsbGVkIHVwb24gYnkgY29tcGlsZWQgY29kZS5cbmNvbnN0IG1zID0geyB9XG5hZGRIaWRkZW5Qcm9wZXJ0eShnbG9iYWwsICdfbXMnLCBtcylcblxuY29uc3QgbXNEZWZzID0ge1xuXHQvLyBUT0RPOiB1c2UgKyEgbWV0aG9kXG5cdGFkZChiYWcsIHZhbHVlKSB7XG5cdFx0YmFnLnB1c2godmFsdWUpXG5cdH0sXG5cblx0YWRkTWFueShiYWcsIHZhbHVlcykge1xuXHRcdGZvciAoY29uc3QgXyBvZiB2YWx1ZXMpXG5cdFx0XHRtcy5hZGQoYmFnLCBfKVxuXHR9LFxuXG5cdGFzc2VydChmdW4pIHtcblx0XHQvLyBUT0RPOkVTNiBTcGxhdFxuXHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cdFx0aWYgKCFmdW4oLi4uYXJncykpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYXNzZXJ0RXJyb3JNZXNzYWdlKGBhc3NlcnQgJHtmdW4ubmFtZX1gLCBhcmdzKSlcblx0fSxcblxuXHRhc3NlcnROb3QoZnVuKSB7XG5cdFx0Ly8gVE9ETzpFUzYgU3BsYXRcblx0XHRjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXHRcdGlmIChmdW4oLi4uYXJncykpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYXNzZXJ0RXJyb3JNZXNzYWdlKGBmb3JiaWQgJHtmdW4ubmFtZX1gLCBhcmdzKSlcblx0fSxcblxuXHRhc3NlcnRNZW1iZXIob2JqLCBtZW1iZXIpIHtcblx0XHQvLyBUT0RPOkVTNiBTcGxhdFxuXHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpXG5cdFx0aWYgKCFvYmpbbWVtYmVyXSguLi5hcmdzKSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihhc3NlcnRFcnJvck1lc3NhZ2UoYGFzc2VydCAke21zLmluc3BlY3Qob2JqKX0uJHttZW1iZXJ9YCwgYXJncykpXG5cdH0sXG5cblx0YXNzZXJ0Tm90TWVtYmVyKG9iaiwgbWVtYmVyKSB7XG5cdFx0Y29uc3QgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMilcblx0XHRpZiAob2JqW21lbWJlcl0oLi4uYXJncykpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYXNzZXJ0RXJyb3JNZXNzYWdlKGBhc3NlcnQgJHttcy5pbnNwZWN0KG9iail9LiR7bWVtYmVyfWAsIGFyZ3MpKVxuXHR9LFxuXG5cdGFzeW5jKGdlbmVyYXRvckZ1bmN0aW9uKSB7XG5cdFx0Y29uc3QgZ2VuZXJhdG9yID0gZ2VuZXJhdG9yRnVuY3Rpb24oKVxuXHRcdC8vIFRPRE86RVM3IEp1c3QgdXNlIG5hdGl2ZSBhc3luYyBmdW5jdGlvbnNcblx0XHRjb25zdCBjb250aW51ZXIgPSB2ZXJiID0+IGFyZyA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXN1bHQgPSBnZW5lcmF0b3JbdmVyYl0oYXJnKVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBUT0RPOkVTNiBjb25zdCB7dmFsdWUsIGRvbmV9ID0gcmVzdWx0XG5cdFx0XHRjb25zdCB2YWx1ZSA9IHJlc3VsdC52YWx1ZSwgZG9uZSA9IHJlc3VsdC5kb25lXG5cdFx0XHRyZXR1cm4gZG9uZSA/IHZhbHVlIDogUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuXHRcdH1cblx0XHRjb25zdCBvbkZ1bGZpbGxlZCA9IGNvbnRpbnVlcignbmV4dCcpXG5cdFx0Y29uc3Qgb25SZWplY3RlZCA9IGNvbnRpbnVlcigndGhyb3cnKVxuXHRcdHJldHVybiBvbkZ1bGZpbGxlZCgpXG5cdH0sXG5cblx0JGZvcihjb2xsZWN0aW9uLCBnZW5lcmF0b3JGdW5jKSB7XG5cdFx0Y29uc3QgcHJvbWlzZXMgPSBbXVxuXHRcdGZvciAoY29uc3QgZWxlbSBvZiBjb2xsZWN0aW9uKVxuXHRcdFx0cHJvbWlzZXMucHVzaChtcy5hc3luYygoKSA9PiBnZW5lcmF0b3JGdW5jKGVsZW0pKSlcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpXG5cdH0sXG5cblx0Z2V0KG9iamVjdCwga2V5KSB7XG5cdFx0Ly8gVE9ETzpFUzYganVzdCB1c2UgYGltcG9ydGAgc3RhdGVtZW5qdFxuXHRcdGNvbnN0IF8gPSBvYmplY3Rba2V5XVxuXHRcdGlmIChfID09PSB1bmRlZmluZWQpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1vZHVsZSAke29iamVjdC5uYW1lfSBkb2VzIG5vdCBoYXZlICR7a2V5fWApXG5cdFx0cmV0dXJuIF9cblx0fSxcblxuXHRnZXRNb2R1bGUobW9kdWxlKSB7XG5cdFx0Ly8gVE9ETzpFUzYganVzdCB1c2UgYGltcG9ydGAgc3RhdGVtZW5qdFxuXHRcdHJldHVybiAobW9kdWxlICE9PSBudWxsICYmIG1vZHVsZSAhPT0gdW5kZWZpbmVkICYmIG1vZHVsZS5fZ2V0IGluc3RhbmNlb2YgTGF6eSkgP1xuXHRcdFx0bW9kdWxlLl9nZXQuZ2V0KCkgOlxuXHRcdFx0bW9kdWxlXG5cdH0sXG5cblx0Z2V0RGVmYXVsdEV4cG9ydChtb2R1bGUpIHtcblx0XHQvLyBUT0RPOkVTNiBqdXN0IHVzZSBgaW1wb3J0YCBzdGF0ZW1lbmp0XG5cdFx0aWYgKG1vZHVsZSA9PT0gdW5kZWZpbmVkKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNb2R1bGUgdW5kZWZpbmVkLicpXG5cdFx0Y29uc3QgbW9kID0gbXMuZ2V0TW9kdWxlKG1vZHVsZSlcblx0XHRyZXR1cm4gbW9kLmRlZmF1bHQgPT09IHVuZGVmaW5lZCA/IG1vZCA6IG1vZC5kZWZhdWx0XG5cdH0sXG5cblx0bGF6eShfKSB7XG5cdFx0cmV0dXJuIG5ldyBMYXp5KF8pXG5cdH0sXG5cblx0bGF6eUdldE1vZHVsZShtb2R1bGUpIHtcblx0XHQvLyBUT0RPOkVTNiBTaG91bGRuJ3QgbmVlZFxuXHRcdGlmIChtb2R1bGUgPT09IHVuZGVmaW5lZClcblx0XHRcdHRocm93IG5ldyBFcnJvcignTW9kdWxlIHVuZGVmaW5lZC4nKVxuXHRcdHJldHVybiBtb2R1bGUuX2dldCBpbnN0YW5jZW9mIExhenkgPyBtb2R1bGUuX2dldCA6IG5ldyBMYXp5KCgpID0+IG1vZHVsZSlcblx0fSxcblxuXHRsYXp5UHJvcChsYXp5T2JqZWN0LCBrZXkpIHtcblx0XHRpZiAoIShsYXp5T2JqZWN0IGluc3RhbmNlb2YgTGF6eSkpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGEgTGF6eSwgZ290OiAke2xhenlPYmplY3R9YClcblx0XHRyZXR1cm4gbmV3IExhenkoKCkgPT4gbGF6eU9iamVjdC5nZXQoKVtrZXldKVxuXHR9LFxuXG5cdG1ldGhvZEJvdW5kKG9iamVjdCwgbmFtZSkge1xuXHRcdHJldHVybiBvYmplY3RbbmFtZV0uYmluZChvYmplY3QpXG5cdH0sXG5cblx0bWV0aG9kVW5ib3VuZChuYW1lKSB7XG5cdFx0Ly8gVE9ETzpFUzYgKG9iamVjdCwgLi4uYXJncykgPT4gb2JqZWN0W25hbWVdKC4uLmFyZ3MpXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuXHRcdFx0cmV0dXJuIG9iamVjdFtuYW1lXSguLi5BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKVxuXHRcdH1cblx0fSxcblxuXHRyZWdleHAocGFydHMsIGZsYWdzKSB7XG5cdFx0cGFydHMgPSBwYXJ0cy5tYXAoXyA9PiBfIGluc3RhbmNlb2YgUmVnRXhwID8gXy5zb3VyY2UgOiBTdHJpbmcoXykpXG5cdFx0cmV0dXJuIG5ldyBSZWdFeHAocGFydHMuam9pbignJyksIGZsYWdzKVxuXHR9LFxuXG5cdHNldExhenkodmFsdWUsIG5hbWUsIGxhenkpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsdWUsIG5hbWUsIHtnZXQ6IGxhenkuZ2V0LCBlbnVtZXJhYmxlOiB0cnVlfSlcblx0fSxcblxuXHRzeW1ib2wodmFsdWUpIHtcblx0XHRjb25zdCBzeW1ib2wgPSB2YWx1ZVsnaW1wbC1zeW1ib2wnXVxuXHRcdHJldHVybiBzeW1ib2wgPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogc3ltYm9sXG5cdH0sXG5cblx0dW5sYXp5KF8pIHtcblx0XHRyZXR1cm4gXyBpbnN0YW5jZW9mIExhenkgPyBfLmdldCgpIDogX1xuXHR9XG59XG5mb3IgKGNvbnN0IGRlZiBpbiBtc0RlZnMpXG5cdG1zRGVmKGRlZiwgbXNEZWZzW2RlZl0pXG5cbmZ1bmN0aW9uIGFzc2VydEVycm9yTWVzc2FnZShsZWFkLCBhcmdzKSB7XG5cdGNvbnN0IHNob3dBcmdzID0gYXJncy5tYXAobXMuaW5zcGVjdCkuam9pbignXFxuJylcblx0cmV0dXJuIGAke2xlYWR9XFxuXFx0JHtpbmRlbnQoc2hvd0FyZ3MpfWBcbn1cbmZ1bmN0aW9uIGluZGVudChzdHIpIHtcblx0cmV0dXJuIHN0ci5yZXBsYWNlKC9cXG4vZywgJ1xcblxcdCcpXG59XG5cbmNsYXNzIExhenkge1xuXHRjb25zdHJ1Y3RvcihnZXQpIHtcblx0XHR0aGlzLmdldCA9ICgpID0+IHtcblx0XHRcdHRoaXMuZ2V0ID0gKCkgPT4ge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYExhenkgdmFsdWUgZGVwZW5kcyBvbiBpdHNlbGYuIFRodW5rOiAke2dldH1gKVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgXyA9IGdldCgpXG5cdFx0XHR0aGlzLmdldCA9ICgpID0+IF9cblx0XHRcdHJldHVybiBfXG5cdFx0fVxuXHR9XG59XG5cbi8vIFNvbWUgVHlwZXMgd2FudCB0byBpbXBsZW1lbnQgY29udGFpbnM/IGJlZm9yZSBpdCBpcyBvZmZpY2lhbGx5IGRlZmluZWQuXG5leHBvcnQgY29uc3QgY29udGFpbnNJbXBsU3ltYm9sID0gU3ltYm9sKCdjb250YWlucz8nKVxuZXhwb3J0IGZ1bmN0aW9uIGltcGxDb250YWlucyh0eXBlLCBpbXBsKSB7XG5cdGFkZEhpZGRlblByb3BlcnR5KHR5cGUucHJvdG90eXBlLCBjb250YWluc0ltcGxTeW1ib2wsIGltcGwpXG59XG5cbi8vIFRoZXNlIGFyZSBvdmVyd3JpdHRlbiBieSBUeXBlLm1zLlxubXMuaGFzSW5zdGFuY2UgPSAodHlwZSwgdmFsKSA9PiB0eXBlW2NvbnRhaW5zSW1wbFN5bWJvbF0odmFsKVxubXMuY2hlY2tJbnN0YW5jZSA9IChfdHlwZSwgdmFsKSA9PiB2YWxcblxuLy8gVE9ETzpFUzYgVXNlIGBpbnN0YW5jZW9mYCBpbnN0ZWFkIG9mIGBjb250YWlucz9gIG1ldGhvZCBhbmQgaW1wbGVtZW50IHdpdGggYFN5bWJvbC5oYXNJbnN0YW5jZWBcbmltcGxDb250YWlucyhGdW5jdGlvbiwgZnVuY3Rpb24oXykge1xuXHRyZXR1cm4gXyBpbnN0YW5jZW9mIHRoaXNcbn0pXG4iXSwic291cmNlUm9vdCI6Ii9zcmMifQ==
