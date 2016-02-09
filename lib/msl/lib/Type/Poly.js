"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../js","./../private/bootstrap","./../at/q","./Impl-Type","./Trait","./../Object"],(exports,js_0,bootstrap_1,_63_2,Impl_45Type_3,Trait_4,Object_5)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(js_0),defined_63=_ms.get(_$0,"defined?"),js_45delete=_ms.get(_$0,"js-delete"),js_45typeof=_ms.get(_$0,"js-typeof"),_$1=_ms.getModule(bootstrap_1),implContains=_ms.get(_$1,"implContains"),msDef=_ms.get(_$1,"msDef"),_$2=_ms.lazyGetModule(_63_2),un_45_63=_ms.lazyProp(_$2,"un-?"),Impl_45Type=_ms.lazy(()=>_ms.getDefaultExport(Impl_45Type_3)),_$3=_ms.lazyGetModule(Impl_45Type_3),Self_45Type=_ms.lazyProp(_$3,"Self-Type"),Trait=_ms.lazy(()=>_ms.getDefaultExport(Trait_4)),_$4=_ms.lazyGetModule(Object_5),_63property=_ms.lazyProp(_$4,"?property"),property_45with_45proto_63=_ms.lazyProp(_$4,"property-with-proto?");
		let flag_63=function flag_63(_){
			return (defined_63(_)&&_)
		};
		let random_45digits=function random_45digits(){
			return Math.random().toString().slice(2)
		};
		let build_45str=function build_45str(builder){
			let built_45str=``;
			builder(part=>{
				built_45str=`${built_45str}${part}\n`
			});
			return built_45str
		};
		let str_45lit=function str_45lit(str){
			return JSON.stringify(str)
		};
		let Poly=exports.default=class Poly extends Function{
			constructor(params){
				let _this;
				let method_45name=params.name;
				if(! defined_63(method_45name))throw new (Error)(`Must provide method name.`);
				let default_63=defined_63(params.default);
				let wrap_63=defined_63(params.wrap);
				let allow_45null_63=flag_63(params["allow-null?"]);
				if(! (! allow_45null_63||default_63))throw new (Error)(`Poly with \`allow-null?\` must have \`default.`);
				let secret_45name=`__method_${method_45name}_${random_45digits()}`;
				let impl_45symbol=(()=>{
					let _=params["impl-symbol"];
					if(defined_63(_)){
						return _
					} else {
						return Symbol(method_45name)
					}
				})();
				let has_45args_63=defined_63(params.args);
				let num_45args=(()=>{
					let _=params.args;
					if(_ms.hasInstance(Array,_)){
						return _.length
					} else if(! defined_63(_)){
						return - 1
					} else throw new (Error)("No branch of `case` matches.")
				})();
				let src=build_45str(add_33=>{
					let access_45method=`global[${str_45lit(secret_45name)}]`;
					let impl=(()=>{
						switch(js_45typeof(impl_45symbol)){
							case "symbol":{
								return `a[${access_45method}["impl-symbol"]]`
							}
							case "string":{
								return `a[${str_45lit(impl_45symbol)}]`
							}
							default:throw new (Error)("No branch of `switch` matches.")
						}
					})();
					if(default_63){
						let no_45impl=(()=>{
							if(allow_45null_63){
								return `a == null || ${impl} === undefined`
							} else {
								return `${impl} === undefined`
							}
						})();
						let call=(()=>{
							if(wrap_63){
								return `${access_45method}.wrap.apply(null, [${access_45method}.default].concat(Array.prototype.slice.call(arguments)))`
							} else {
								return `${access_45method}.default.apply(a, Array.prototype.slice.call(arguments, 1))`
							}
						})();
						add_33(`if (${no_45impl}) return ${call}`)
					};
					let wrap=`${access_45method}.wrap`;
					return add_33((()=>{
						if(has_45args_63){
							let args=(()=>{
								switch(num_45args){
									case 0:{
										return "a"
									}
									case 1:{
										return `a, b`
									}
									case 2:{
										return `a, b, c`
									}
									default:throw new (Error)("No branch of `switch` matches.")
								}
							})();
							return (()=>{
								if(wrap_63){
									return `return ${wrap}(${impl}, ${args})`
								} else {
									return `return ${impl}(${args.slice(3)})`
								}
							})()
						} else if(wrap_63){
							return `switch (arguments.length) \{
	case 1: return ${wrap}(${impl}, a)
	case 2: return ${wrap}(${impl}, a, b)
	case 3: return ${wrap}(${impl}, a, b, c)
	case 4: return ${wrap}(${impl}, a, b, c, d)
	default: throw new Error(\`Code not generated to handle $\{arguments.length} arguments.\`)
}`
						} else {
							return `switch (arguments.length) \{
	case 1: return ${impl}()
	case 2: return ${impl}(b)
	case 3: return ${impl}(b, c)
	case 4: return ${impl}(b, c, d)
	default: throw new Error(\`Code not generated to handle $\{arguments.length} args.\`)
}`
						}
					})())
				});
				switch(num_45args){
					case 0:{
						super("a",src);
						_this=this;
						break
					}
					case 1:{
						super("a","b",src);
						_this=this;
						break
					}
					case 2:{
						super("a","b","c",src);
						_this=this;
						break
					}
					default:
						super("a","b","c","d",src);
						_this=this
				};
				Object.setPrototypeOf(_this,Poly.prototype);
				add_45hidden_45property_33(global,secret_45name,_this);
				js_45delete(params,"name");
				js_45delete(params,"impl-symbol");
				Object.assign(_this,params);
				_this["impl-symbol"]=impl_45symbol;
				Object.defineProperty(_this,"name",(()=>{
					let built={};
					let value=built.value=method_45name;
					return built
				})())
			}
			toString(){
				let _this=this;
				return _this.name
			}
		};
		msDef("method",(_45name,args,_default)=>{
			return new (Poly)((()=>{
				let built={};
				built.name=_45name;
				built.args=args;
				if(defined_63(_default)){
					built.default=_default
				};
				return built
			})())
		});
		let impl_33=exports["impl!"]=function impl_33(_,implementor,implementation){
			_ms.checkInstance(Poly,_,"_");
			_ms.checkInstance(_ms.unlazy(Impl_45Type),implementor,"implementor");
			_ms.checkInstance(Function,implementation,"implementation");
			do_45impl_33(_,implementor,implementation)
		};
		let impl_45double_33=exports["impl-double!"]=function impl_45double_33(_,implementor_450,implementor_451,implementation){
			_ms.checkInstance(Poly,_,"_");
			_ms.checkInstance(_ms.unlazy(Impl_45Type),implementor_450,"implementor-0");
			_ms.checkInstance(_ms.unlazy(Impl_45Type),implementor_451,"implementor-1");
			_ms.checkInstance(Function,implementation,"implementation");
			let dispatcher=(()=>{
				if(writable_63(implementor_450.prototype,_["impl-symbol"])){
					return (()=>{
						let dd=new (Double_45Dispatcher)(_);
						do_45impl_33(_,implementor_450,dd);
						return dd
					})()
				} else {
					return (()=>{
						let impl=implementor_450.prototype[_["impl-symbol"]];
						if(! _ms.hasInstance(Double_45Dispatcher,impl))throw new (Error)(`Can't define double dispatch of ${_} for ${implementor_450}.
A single-dispatch implementation already exists: ${impl}.`);
						return impl
					})()
				}
			})();
			do_45impl_33(dispatcher,implementor_451,implementation)
		};
		let self_45impl_33=exports["self-impl!"]=function self_45impl_33(_,implementor,implementation){
			_ms.checkInstance(Poly,_,"_");
			_ms.checkInstance(Object,implementor,"implementor");
			_ms.checkInstance(Function,implementation,"implementation");
			impl_33(_,new (_ms.unlazy(Self_45Type))(implementor),implementation)
		};
		let _63impl_45for=exports["?impl-for"]=function _63impl_45for(_,implementor){
			_ms.checkInstance(Poly,_,"_");
			_ms.checkInstance(_ms.unlazy(Impl_45Type),implementor,"implementor");
			return _63self_45impl_45for(_,implementor.prototype)
		};
		let impl_45for=exports["impl-for"]=function impl_45for(_,implementor){
			_ms.checkInstance(Poly,_,"_");
			_ms.checkInstance(_ms.unlazy(Impl_45Type),implementor,"implementor");
			return _ms.unlazy(un_45_63)(_63impl_45for(_,implementor),_ms.lazy(()=>`${_} not implemented for ${implementor}.`))
		};
		let _63self_45impl_45for=exports["?self-impl-for"]=function _63self_45impl_45for(_,obj){
			_ms.checkInstance(Poly,_,"_");
			return _ms.unlazy(_63property)(obj,_["impl-symbol"])
		};
		let self_45impl_45for=exports["self-impl-for"]=function self_45impl_45for(_,obj){
			_ms.checkInstance(Poly,_,"_");
			return _ms.unlazy(un_45_63)(_63self_45impl_45for(_,obj),_ms.lazy(()=>`${_} not implemented on ${obj}.`))
		};
		let writable_63=function writable_63(obj,property){
			let desc=Object.getOwnPropertyDescriptor(obj,property);
			return (! defined_63(desc)||desc.writable)
		};
		let propagate_45method_45down_33=exports["propagate-method-down!"]=function propagate_45method_45down_33(implementor,method_45symbol,implementation){
			if(! Object.prototype.hasOwnProperty.call(implementor.prototype,method_45symbol)){
				{
					let _=implementor;
					if(_ms.hasInstance(_ms.unlazy(Trait),_)){
						for(let sub_45implementor of _.implementors){
							propagate_45method_45down_33(sub_45implementor,method_45symbol,implementation)
						}
					} else {
						Object.defineProperty(_.prototype,method_45symbol,(()=>{
							let built={};
							let value=built.value=implementation;
							let writable=built.writable=true;
							let configurable=built.configurable=true;
							let enumerable=built.enumerable=false;
							return built
						})())
					}
				}
			}
		};
		let propagate_45static_45down_33=exports["propagate-static-down!"]=function propagate_45static_45down_33(implementor,method_45symbol,implementation){
			if(! Object.prototype.hasOwnProperty.call(implementor,method_45symbol)){
				def_45inherited_33(implementor,method_45symbol,implementation);
				if(_ms.hasInstance(_ms.unlazy(Trait),implementor)){
					for(let sub_45implementor of implementor.implementors){
						propagate_45static_45down_33(sub_45implementor,method_45symbol,implementation)
					}
				}
			}
		};
		let def_45inherited_33=function def_45inherited_33(_,sym,value){
			Object.defineProperty(_,sym,(()=>{
				let built={};
				built.value=value;
				let writable=built.writable=true;
				let configurable=built.configurable=true;
				let enumerable=built.enumerable=false;
				return built
			})())
		};
		let do_45impl_33=function do_45impl_33(_,implementor,implementation){
			if(! writable_63(implementor.prototype,_["impl-symbol"]))throw (()=>{
				return `Can not redefine method ${_} for ${implementor}.`
			})();
			Object.defineProperty(implementor.prototype,_["impl-symbol"],(()=>{
				let built={};
				let value=built.value=implementation;
				let writable=built.writable=false;
				let configurable=built.configurable=false;
				let enumerable=built.enumerable=false;
				return built
			})());
			if(_ms.hasInstance(_ms.unlazy(Trait),implementor)){
				for(let sub_45impl of implementor.implementors){
					propagate_45method_45down_33(sub_45impl,_["impl-symbol"],implementation)
				}
			}
		};
		let Double_45Dispatcher=class Double_45Dispatcher extends Function{
			constructor(meth){
				let _this;
				let impl_45symbol=Symbol(`${meth.name}_double_dispatch`);
				let secret_45name=`__double_dispatch_${random_45digits()}`;
				add_45hidden_45property_33(global,secret_45name,impl_45symbol);
				super(`target2 = arguments[0]
if (target2 === undefined)
	throw new Error("Can't double-dispatch ${meth.name} for undefined.")
impl = target2[global.${secret_45name}]
if (impl === undefined)
	throw new Error(\`Can't double-dispatch ${meth.name} for $\{this} on $\{target2}.\`)
return impl.apply(this, arguments)`);
				_this=this;
				Object.setPrototypeOf(_this,Double_45Dispatcher.prototype);
				_this.method=meth;
				_this["impl-symbol"]=impl_45symbol;
				Object.defineProperty(_this,"name",(()=>{
					let built={};
					let value=built.value=`${meth.name}__double-dispatcher`;
					return built
				})())
			}
		};
		implContains(Poly,function(_){
			let _this=this;
			return _ms.unlazy(property_45with_45proto_63)(_,_this["impl-symbol"])
		});
		let add_45hidden_45property_33=function add_45hidden_45property_33(obj,key,value){
			Object.defineProperty(obj,key,(()=>{
				let built={};
				built.value=value;
				let writable=built.writable=false;
				let enumerable=built.enumerable=false;
				let configurable=built.configurable=false;
				return built
			})())
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvVHlwZS9Qb2x5Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBVUEsWUFBUyxpQkFBQSxFQUNDO1VBQVQsQ0FBSSxXQUFTLElBQUM7RUFBQTtFQUVmLG9CQUNpQiwwQkFBQTtVQUFoQiwrQkFBK0I7RUFBQTtFQUVoQyxnQkFBYSxxQkFBQSxRQUNPO0dBQW5CLGdCQUFhO0dBQ2IsUUFBVSxNQUNJO2dCQUFDLEdBQUMsY0FBVTs7VUFDMUI7RUFBQTtFQUVELGNBQVcsbUJBQUEsSUFDRztVQUFiLGVBQWU7RUFBQTtFQUVoQix5QkFBWSxtQkFBUTtHQUdULFlBQUEsT0FDTTs7SUFBZixrQkFBYztJQUVQLEtBQUEsV0FBUyxpQ0FBbUI7SUFFbkMsZUFBVyxXQUFTO0lBQ3BCLFlBQVEsV0FBUztJQUNqQixvQkFBYyxRQUFNO0lBQ2IsS0FBQSxDQUFJLEVBQUksaUJBQWEsOEJBQWdCO0lBRTVDLGtCQUFlLFlBQVcsaUJBQWU7SUFFekMsa0JBQW1CO0tBQU0sTUFBTjtLQUNsQixHQUFBLFdBQVMsR0FDQTthQUFSO0tBQUEsT0FFRzthQUFILE9BQU87S0FBQTtJQUFBO0lBRVQsa0JBQVksV0FBUztJQUNyQixlQUFnQjtLQUFNLE1BQU47S0FDZixtQkFBQyxNQUFELEdBQ007YUFBTDtZQUNELEdBQUEsRUFBSSxXQUFTLEdBQ0E7YUFBWjs7O0lBRUYsUUFBTSxZQUFXLFFBQ0k7S0FBcEIsb0JBQWlCLFVBQVMsVUFBUTtLQUVsQyxTQUFjO2FBQUEsWUFBVTtPQUN2QixLQUFDLFNBQ007ZUFBTCxLQUFHOztPQUNMLEtBQUMsU0FDTTtlQUFMLEtBQUksVUFBUTs7Ozs7S0FFWixHQUFBLFdBQ1E7TUFBVixjQUNjO09BQWIsR0FBQSxnQkFDVztlQUFULGdCQUFjO2NBRVo7ZUFDRixHQUFDOzs7TUFDSixTQUNXO09BQVYsR0FBQSxRQUNLO2VBQUgsR0FBQyxxQ0FBaUM7Y0FFaEM7ZUFBRixHQUFDOzs7TUFDSixP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
