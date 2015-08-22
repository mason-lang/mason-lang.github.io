"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./Boolean","./compare","./js","./Type/Kind","./Type/Type","./at/at","./at/q","./at/Map/Map","./at/Set/Id-Set"],(exports,Boolean_0,compare_1,js_2,Kind_3,Type_4,_64_5,_63_6,Map_7,Id_45Set_8)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(Boolean_0),xor=_ms.get(_$0,"xor"),_$1=_ms.getModule(compare_1),_61_63=_ms.get(_$1,"=?"),_$2=_ms.getModule(js_2),defined_63=_ms.get(_$2,"defined?"),exists_63=_ms.get(_$2,"exists?"),id_61_63=_ms.get(_$2,"id=?"),js_45delete=_ms.get(_$2,"js-delete"),js_45set=_ms.get(_$2,"js-set"),js_45sub=_ms.get(_$2,"js-sub"),js_45typeof=_ms.get(_$2,"js-typeof"),Kind=_ms.getDefaultExport(Kind_3),_$3=_ms.getModule(Type_4),_61_62=_ms.get(_$3,"=>"),_$4=_ms.lazyGetModule(_64_5),_43_43=_ms.lazyProp(_$4,"++"),all_63=_ms.lazyProp(_$4,"all?"),count=_ms.lazyProp(_$4,"count"),empty_63=_ms.lazyProp(_$4,"empty?"),_64keep=_ms.lazyProp(_$4,"@keep"),_$5=_ms.lazyGetModule(_63_6),_63_45or=_ms.lazyProp(_$5,"?-or"),Opt_45_62_63=_ms.lazyProp(_$5,"Opt->?"),_63None=_ms.lazyProp(_$5,"?None"),Map=_ms.lazy(()=>_ms.getDefaultExport(Map_7)),_$6=_ms.lazyGetModule(Map_7),make_45map=_ms.lazyProp(_$6,"make-map"),Id_45Set=_ms.lazy(()=>_ms.getDefaultExport(Id_45Set_8));
		let Object_45Key=exports["Object-Key"]=new (Kind)((()=>{
			let built={};
			built.name="Object-Key";
			let implementors=built.implementors=[String,Symbol];
			return built
		})());
		let flag_63=exports["flag?"]=function flag_63(obj,flag){
			_ms.checkContains(Object_45Key,flag,"flag");
			return _ms.checkContains(Boolean,_ms.unlazy(_63_45or)(_63property(obj,flag),false),"returned value")
		};
		let forbidden_45fun_45props=_ms.lazy(()=>_61_62(_ms.unlazy(Id_45Set),["arguments","caller"]));
		let _64all_45properties=exports["@all-properties"]=function _64all_45properties(_){
			let props=Object.getOwnPropertyNames(_);
			let own_45names=(_ms.contains(Function,_)?_ms.unlazy(_64keep)(props,_=>! _ms.contains(_ms.unlazy(forbidden_45fun_45props),_)):props);
			return _ms.unlazy(_43_43)(own_45names,Object.getOwnPropertySymbols(_))
		};
		let _64properties=exports["@properties"]=function _64properties(_){
			return (exists_63(_)?Object.keys(_):[])
		};
		let _63property=exports["?property"]=function _63property(_,prop_45name){
			_ms.checkContains(Object_45Key,prop_45name,"prop-name");
			return (property_63(_,prop_45name)?_ms.some((()=>{
				return js_45sub(_,prop_45name)
			})()):_ms.None)
		};
		let _63property_45with_45proto=exports["?property-with-proto"]=function _63property_45with_45proto(_,prop_45name){
			_ms.checkContains(Object_45Key,prop_45name,"prop-name");
			return (exists_63(_)?_ms.unlazy(Opt_45_62_63)(js_45sub(_,prop_45name)):_ms.unlazy(_63None))
		};
		let property_63=exports["property?"]=function property_63(_,prop_45name){
			_ms.checkContains(Object_45Key,prop_45name,"prop-name");
			return (exists_63(_)&&Object.prototype.hasOwnProperty.call(_,prop_45name))
		};
		let property_45with_45proto_63=exports["property-with-proto?"]=function property_45with_45proto_63(_,prop_45name){
			_ms.checkContains(Object_45Key,prop_45name,"prop-name");
			return (exists_63(_)&&defined_63(js_45sub(_,prop_45name)))
		};
		let object_61_63=exports["object=?"]=function object_61_63(a,b){
			let obj_45a=(! id_61_63(a,null)&&id_61_63(js_45typeof(a),"object"));
			let obj_45b=(! id_61_63(b,null)&&id_61_63(js_45typeof(b),"object"));
			return (()=>{
				if(! (obj_45a||obj_45b)){
					return id_61_63(a,b)
				} else if(xor(obj_45a,obj_45b)){
					return false
				} else {
					let same_45type=id_61_63(Object.getPrototypeOf(a),Object.getPrototypeOf(b));
					return (same_45type&&(()=>{
						let ak=Object.getOwnPropertyNames(a);
						let bk=Object.getOwnPropertyNames(b);
						return (_61_63(_ms.unlazy(count)(ak),_ms.unlazy(count)(bk))&&(()=>{
							return _ms.unlazy(all_63)(ak,k=>{
								return _61_63(js_45sub(a,k),js_45sub(b,k))
							})
						})())
					})())
				}
			})()
		};
		let empty_45Object=exports["empty-Object"]=Object.freeze(new (Object)());
		let empty_45Object_63=exports["empty-Object?"]=function empty_45Object_63(_){
			_ms.checkContains(Object,_,"_");
			return _ms.unlazy(empty_63)(_64all_45properties(_))
		};
		let Object_45_62Map=exports["Object->Map"]=function Object_45_62Map(_){
			return _ms.unlazy(make_45map)(_64all_45properties(_),_ms.sub(js_45sub,_))
		};
		let Map_45_62Object=exports["Map->Object"]=function Map_45_62Object(_){
			_ms.checkContains(_ms.unlazy(Map),_,"_");
			return (()=>{
				let obj=new (Object)();
				for(let elem of _){
					js_45set(obj,_ms.sub(elem,0),_ms.sub(elem,1))
				};
				return obj
			})()
		};
		let delete_45property_33=exports["delete-property!"]=function delete_45property_33(_,prop_45name){
			_ms.checkContains(Object,_,"_");
			_ms.checkContains(Object_45Key,prop_45name,"prop-name");
			_ms.assert(property_63,_,prop_45name);
			js_45delete(_,prop_45name)
		};
		let object_45merge=exports["object-merge"]=function object_45merge(){
			let objects=[].slice.call(arguments,0);
			return Object.assign(new (Object)(),...objects)
		};
		let object_45select=exports["object-select"]=function object_45select(obj){
			let _64keys=[].slice.call(arguments,1);
			_ms.checkContains(Object,obj,"obj");
			return (()=>{
				let kept=new (Object)();
				for(let key of _64keys){
					js_45set(kept,key,js_45sub(obj,key))
				};
				return kept
			})()
		};
		let map_45object_45values=exports["map-object-values"]=function map_45object_45values(obj,mapper){
			_ms.checkContains(Object,obj,"obj");
			_ms.checkContains(Function,mapper,"mapper");
			return (()=>{
				let mapped=new (Object)();
				for(let key of _64properties(obj)){
					js_45set(mapped,key,mapper(js_45sub(obj,key)))
				};
				return mapped
			})()
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvT2JqZWN0Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBWUEsdUNBQVksS0FBSSxNQUNJLEtBQUE7O2NBQ25CO0dBQ0Esb0NBQWMsQ0FBQyxPQUFPOzs7RUFFdkIsNkJBQVEsaUJBQVMsSUFBSTtxQkFBSzs0QkFBakIsNkJBRUYsWUFBVSxJQUFJLE1BQU07O0VBRTNCLHlDQUF1Qiw0QkFBVSxDQUFFLFlBQVc7RUFDOUMsbURBQW1CLDZCQUFBO0dBSWxCLFVBQVEsMkJBQTJCO0dBQ25DLGdCQUFpQixjQUFDLFNBQUQsdUJBQWlCLFNBQVEsbURBQUksSUFBdUI7NkJBQ2xFLFlBQVUsNkJBQTZCO0VBQUE7RUFFM0MseUNBQWUsdUJBQUE7VUFFVCxDQUFBLFVBQVEsR0FBQyxZQUFZLEdBQUM7RUFBQTtFQUU1QixxQ0FBYSxxQkFBQSxFQUFDO3FCQUFVO1VBRXBCLENBQUEsWUFBVyxFQUFDLDJCQUNTO1dBQXZCLFNBQVEsRUFBQztHQUFBOztFQUVYLCtEQUF3QixvQ0FBQSxFQUFDO3FCQUFVO1VBRTdCLENBQUEsVUFBUSw0QkFBVSxTQUFRLEVBQUM7O0VBRWpDLHFDQUFhLHFCQUFBLEVBQUM7cUJBQVU7VUFFdkIsQ0FBSSxVQUFRLElBQUUscUNBQXNDLEVBQUM7RUFBQTtFQUV0RCwrREFBd0Isb0NBQUEsRUFBQztxQkFBVTtVQUVsQyxDQUFJLFVBQVEsSUFBRSxXQUFVLFNBQVEsRUFBQztFQUFBO0VBR2xDLHFDQUFXLHNCQUFBLEVBQUU7R0FJWixZQUFRLENBQUssRUFBSyxTQUFLLEVBQUUsT0FBUSxTQUFNLFlBQVUsR0FBSTtHQUNyRCxZQUFRLENBQUssRUFBSyxTQUFLLEVBQUUsT0FBUSxTQUFNLFlBQVUsR0FBSTtVQUVqRDtJQUFILEdBQUEsRUFBSSxDQUFHLFNBQU0sU0FDSztZQUFqQixTQUFLLEVBQUU7SUFBQSxPQUNSLEdBQUEsSUFBSSxRQUFNLFNBQ0s7WUFBZDtJQUFBLE9BRUc7S0FBSCxnQkFBWSxTQUFNLHNCQUFzQixHQUFJLHNCQUFzQjtZQUNsRSxDQUFJLGFBQ1MsS0FBQTtNQUFaLE9BQUssMkJBQTJCO01BQ2hDLE9BQUssMkJBQTJCO2FBQ2hDLENBQUsseUJBQVUsc0JBQVcsTUFDSSxLQUFBO2lDQUF4QixHQUFJO2VBQ1IsT0FBSSxTQUFPLEVBQUUsR0FBSSxTQUFPLEVBQUU7T0FBQTtNQUFBO0tBQUE7SUFBQTtHQUFBO0VBQUE7RUFFaEMsMkNBQWMsY0FBZSxLQUFJO0VBRWpDLCtDQUFnQiwyQkFBQTtxQkFBRTsrQkFFVixvQkFBZ0I7RUFBQTtFQUV4QiwyQ0FBZSx5QkFBQTtpQ0FFTCxvQkFBZ0IsV0FBQyxTQUFRO0VBQUE7RUFFbkMsMkNBQWMseUJBQUE7O1VBRVIsS0FDaUI7WUFEakIsS0FBSTtJQUNKLFFBQUEsUUFBUyxFQUNBO0tBQ1osU0FBTyxZQUFJLEtBQUssV0FBRyxLQUFLO0lBQUE7Ozs7RUFHMUIscURBQW9CLDhCQUFBLEVBQVM7cUJBQVA7cUJBQWlCO2NBQy9CLFlBQVcsRUFBQztHQUNuQixZQUFXLEVBQUM7RUFBQTtFQUVkLDJDQUFlOztVQUNkLGNBQWUsS0FBSSxVQUFRLEdBQUc7RUFBQTtFQUUvQiw2Q0FBZ0IseUJBQUE7O3FCQUFJO1VBQ2QsS0FDa0I7YUFEbEIsS0FBSTtJQUNKLFFBQUEsT0FBTyxRQUNLO0tBQWYsU0FBTyxLQUFLLElBQUssU0FBTyxJQUFJO0lBQUE7Ozs7RUFFL0IsdURBQW9CLCtCQUFBLElBQVc7cUJBQVA7cUJBQWM7VUFDaEMsS0FDb0I7ZUFEcEIsS0FBSTtJQUNKLFFBQUEsT0FBTyxjQUFZLEtBQ0c7S0FBekIsU0FBTyxPQUFPLElBQUssT0FBUSxTQUFPLElBQUk7SUFBQSIsImZpbGUiOiJPYmplY3QuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
