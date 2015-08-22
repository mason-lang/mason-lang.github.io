"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./methods","./Type/Alias-Type","./Type/Method","./at/at","./at/at-Type","./at/Map/Hash-Map","./at/Map/Map","./at/Map/Weak-Id-Map","./at/Seq/Seq","./Object","./Type/Pred-Type","./Type/Type"],(exports,methods_0,Alias_45Type_1,Method_2,_64_3,_64_45Type_4,Hash_45Map_5,Map_6,Weak_45Id_45Map_7,Seq_8,Object_9,Pred_45Type_10,Type_11)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(methods_0),sub=_ms.get(_$0,"sub"),Alias_45Type=_ms.getDefaultExport(Alias_45Type_1),_$1=_ms.getModule(Method_2),impl_33=_ms.get(_$1,"impl!"),self_45impl_33=_ms.get(_$1,"self-impl!"),_64=_ms.lazy(()=>_ms.getDefaultExport(_64_3)),_$2=_ms.lazyGetModule(_64_3),_43_43=_ms.lazyProp(_$2,"++"),_$3=_ms.lazyGetModule(_64_45Type_4),empty=_ms.lazyProp(_$3,"empty"),Hash_45Map=_ms.lazy(()=>_ms.getDefaultExport(Hash_45Map_5)),Map=_ms.lazy(()=>_ms.getDefaultExport(Map_6)),_$4=_ms.lazyGetModule(Map_6),get_45or_45add_33=_ms.lazyProp(_$4,"get-or-add!"),Weak_45Id_45Map=_ms.lazy(()=>_ms.getDefaultExport(Weak_45Id_45Map_7)),_$5=_ms.lazyGetModule(Seq_8),_64rtail=_ms.lazyProp(_$5,"@rtail"),last=_ms.lazyProp(_$5,"last"),_$6=_ms.lazyGetModule(Object_9),Object_45_62Map=_ms.lazyProp(_$6,"Object->Map"),_$7=_ms.lazyGetModule(Pred_45Type_10),ObjLit=_ms.lazyProp(_$7,"ObjLit"),_$8=_ms.lazyGetModule(Type_11),_61_62=_ms.lazyProp(_$8,"=>");
		let Action=exports.Action=new (Alias_45Type)((()=>{
			let built={};
			built.name="Action";
			let alias_45of=built["alias-of"]=Function;
			return built
		})());
		let Pred=exports.Pred=new (Alias_45Type)((()=>{
			let built={};
			built.name="Pred";
			let alias_45of=built["alias-of"]=Function;
			return built
		})());
		let identity=exports.identity=function identity(_){
			return _
		};
		let id_45memoize=exports["id-memoize"]=function id_45memoize(_){
			_ms.checkContains(Function,_,"_");
			let wm=_ms.unlazy(empty)(_ms.unlazy(Weak_45Id_45Map));
			return arg=>{
				_ms.checkContains(Object,arg,"arg");
				return _ms.unlazy(get_45or_45add_33)(wm,arg,_ms.lazy(()=>_(arg)))
			}
		};
		let hash_45memoize=exports["hash-memoize"]=function hash_45memoize(_){
			_ms.checkContains(Function,_,"_");
			let hm=_ms.unlazy(empty)(_ms.unlazy(Hash_45Map));
			return arg=>{
				_ms.checkContains(Object,arg,"arg");
				return _ms.unlazy(get_45or_45add_33)(hm,arg,_ms.lazy(()=>_(arg)))
			}
		};
		let spread=exports.spread=function spread(fun){
			let args=[].slice.call(arguments,1);
			_ms.checkContains(Function,fun,"fun");
			let init_45args=_ms.unlazy(_64rtail)(args);
			let last_45arg=_ms.unlazy(last)(args);
			let _64spreaded=(()=>{
				let _=last_45arg;
				if(_ms.contains(_ms.unlazy(Map),_)){
					return _ms.unlazy(_61_62)(Array,_)
				} else if(_ms.contains(_ms.unlazy(_64),_)){
					return (()=>{
						let built=[];
						for(let elem of _){
							_ms.add(built,[elem])
						};
						return built
					})()
				} else if(_ms.contains(_ms.unlazy(ObjLit),_)){
					return _ms.unlazy(_61_62)(Array,_ms.unlazy(Object_45_62Map)(_))
				} else {
					throw new (Error)(`Can only spread a @, Map, or ObjLit, not ${_}`)
				}
			})();
			return _ms.checkContains(_ms.unlazy(_64),(()=>{
				let built=[];
				for(let _ of _64spreaded){
					let all_45args=_ms.unlazy(_43_43)(init_45args,_);
					_ms.add(built,fun(...all_45args))
				};
				return built
			})(),"returned value")
		};
		let spread_33=exports["spread!"]=function spread_33(fun){
			let args=[].slice.call(arguments,1);
			spread(fun,...args)
		};
		let thunk=exports.thunk=function thunk(_){
			return ()=>{
				return _
			}
		};
		impl_33(sub,Function,function(){
			let args=[].slice.call(arguments,0);
			let _this=this;
			return _this.bind(null,...args)
		});
		self_45impl_33(sub,Function,()=>{
			return Function
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvRnVuY3Rpb24ubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFlQSwwQkFBUSxLQUFJLGNBQ1UsS0FBQTs7Y0FHckI7R0FDQSxpQ0FBVTs7O0VBRVgsc0JBQU0sS0FBSSxjQUNVLEtBQUE7O2NBQ25CO0dBQ0EsaUNBQVU7OztFQUVYLDhCQUFZLGtCQUFBO1VBRVY7RUFBQTtFQUlELHVDQUFhLHNCQUFBO3FCQUFFO0dBR2Q7VUFDQztzQkFBSTt5Q0FDUSxHQUFHLGlCQUFPLEVBQUM7R0FBQTtFQUFBO0VBRXpCLDJDQUFlLHdCQUFBO3FCQUFFO0dBSWhCO1VBQ0M7c0JBQUk7eUNBQ1EsR0FBRyxpQkFBTyxFQUFDO0dBQUE7RUFBQTtFQUUxQiwwQkFBUyxnQkFBRzs7cUJBQUk7R0FJZixxQ0FBbUI7R0FDbkIsZ0NBQWdCO0dBQ2hCLGdCQUFpQjtJQUFBLE1BQUE7SUFDaEIsZ0NBQUEsR0FDSTsrQkFDQSxNQUFPO0lBQUEsT0FDWCxnQ0FBQSxHQUNFO1lBQUk7O2NBQUEsUUFBUyxFQUNBO3FCQUFYLENBQUM7TUFBQTs7O1dBQ0wsbUNBQUEsR0FDTzsrQkFBSCxrQ0FBa0I7SUFBQSxPQUVsQjtLQUFILGtCQUFPLDRDQUEyQzs7OzRDQUUvQzs7WUFBQSxLQUFBLFlBQ1M7S0FBYixrQ0FBYyxZQUFXO21CQUN2QixJQUFJLEdBQUc7SUFBQTs7OztFQUVYLGlDQUFXLG1CQUFBOztHQUVWLE9BQU8sSUFBSSxHQUFHO0VBQUE7RUFFZix3QkFBUyxlQUFBO1VBR1A7V0FBQztHQUFBO0VBQUE7RUFFSCxRQUFNLElBQUksU0FBVzs7T0FFcEI7VUFBQSxXQUFNLEtBQUssR0FBRztFQUFBO0VBRWYsZUFBVyxJQUFJLFNBQ1U7VUFLeEI7RUFBQSIsImZpbGUiOiJGdW5jdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
