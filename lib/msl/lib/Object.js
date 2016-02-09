"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./Boolean","./js","./Type/primitive","./Type/Trait","./Type/Type","./at/at","./at/q","./at/Map/Map","./at/Set/Id-Set"],(exports,Boolean_0,js_1,primitive_2,Trait_3,Type_4,_64_5,_63_6,Map_7,Id_45Set_8)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(Boolean_0),xor=_ms.get(_$0,"xor"),_$1=_ms.getModule(js_1),defined_63=_ms.get(_$1,"defined?"),exists_63=_ms.get(_$1,"exists?"),js_45delete=_ms.get(_$1,"js-delete"),_$2=_ms.getModule(primitive_2),Bool=_ms.get(_$2,"Bool"),Trait=_ms.getDefaultExport(Trait_3),_$3=_ms.getModule(Type_4),_61_62=_ms.get(_$3,"=>"),_$4=_ms.lazyGetModule(_64_5),_43_43=_ms.lazyProp(_$4,"++"),all_63=_ms.lazyProp(_$4,"all?"),count=_ms.lazyProp(_$4,"count"),empty_63=_ms.lazyProp(_$4,"empty?"),_64keep=_ms.lazyProp(_$4,"@keep"),_$5=_ms.lazyGetModule(_63_6),_63_45or=_ms.lazyProp(_$5,"?-or"),Opt_45_62_63=_ms.lazyProp(_$5,"Opt->?"),_63None=_ms.lazyProp(_$5,"?None"),Map=_ms.lazy(()=>_ms.getDefaultExport(Map_7)),_$6=_ms.lazyGetModule(Map_7),make_45map=_ms.lazyProp(_$6,"make-map"),Id_45Set=_ms.lazy(()=>_ms.getDefaultExport(Id_45Set_8));
		let Object_45Key=exports["Object-Key"]=new (Trait)((()=>{
			let built={};
			built.name="Object-Key";
			let implementors=built.implementors=[String,Symbol];
			return built
		})());
		let flag_63=exports["flag?"]=function flag_63(obj,flag){
			_ms.checkInstance(Object_45Key,flag,"flag");
			return _ms.checkInstance(Bool,_ms.unlazy(_63_45or)(_63property(obj,flag),false),"returned value")
		};
		let forbidden_45fun_45props=_ms.lazy(()=>_61_62(_ms.unlazy(Id_45Set),["arguments","caller"]));
		let _64all_45properties=exports["@all-properties"]=function _64all_45properties(_){
			let props=Object.getOwnPropertyNames(_);
			let own_45names=(_ms.hasInstance(Function,_)?_ms.unlazy(_64keep)(props,_=>! _ms.hasInstance(_ms.unlazy(forbidden_45fun_45props),_)):props);
			return _ms.unlazy(_43_43)(own_45names,Object.getOwnPropertySymbols(_))
		};
		let _64properties=exports["@properties"]=function _64properties(_){
			return (exists_63(_)?Object.keys(_):[])
		};
		let _63property=exports["?property"]=function _63property(_,prop_45name){
			_ms.checkInstance(Object_45Key,prop_45name,"prop-name");
			return (property_63(_,prop_45name)?_ms.some((()=>{
				return _[prop_45name]
			})()):_ms.None)
		};
		let _63property_45with_45proto=exports["?property-with-proto"]=function _63property_45with_45proto(_,prop_45name){
			_ms.checkInstance(Object_45Key,prop_45name,"prop-name");
			return (exists_63(_)?_ms.unlazy(Opt_45_62_63)(_[prop_45name]):_ms.unlazy(_63None))
		};
		let property_63=exports["property?"]=function property_63(_,prop_45name){
			_ms.checkInstance(Object_45Key,prop_45name,"prop-name");
			return (exists_63(_)&&Object.prototype.hasOwnProperty.call(_,prop_45name))
		};
		let property_45with_45proto_63=exports["property-with-proto?"]=function property_45with_45proto_63(_,prop_45name){
			_ms.checkInstance(Object_45Key,prop_45name,"prop-name");
			return (exists_63(_)&&defined_63(_[prop_45name]))
		};
		let object_61_63=exports["object=?"]=function object_61_63(a,b){
			return (()=>{
				if(! (_ms.hasInstance(Object,a)||_ms.hasInstance(Object,b))){
					return Object.is(a,b)
				} else if(xor(_ms.hasInstance(Object,a),_ms.hasInstance(Object,b))){
					return false
				} else {
					let same_45type=Object.is(Object.getPrototypeOf(a),Object.getPrototypeOf(b));
					return (same_45type&&(()=>{
						let ak=Object.getOwnPropertyNames(a);
						let bk=Object.getOwnPropertyNames(b);
						return (_ms.eq(_ms.unlazy(count)(ak),_ms.unlazy(count)(bk))&&(()=>{
							return _ms.unlazy(all_63)(ak,k=>{
								return _ms.eq(a[k],b[k])
							})
						})())
					})())
				}
			})()
		};
		let empty_45Object=exports["empty-Object"]=Object.freeze({});
		let empty_45Object_63=exports["empty-Object?"]=function empty_45Object_63(_){
			_ms.checkInstance(Object,_,"_");
			return _ms.unlazy(empty_63)(_64all_45properties(_))
		};
		let Object_45_62Map=exports["Object->Map"]=function Object_45_62Map(obj){
			return _ms.unlazy(make_45map)(_64all_45properties(obj),_=>obj[_])
		};
		let Map_45_62Object=exports["Map->Object"]=function Map_45_62Object(_){
			_ms.checkInstance(_ms.unlazy(Map),_,"_");
			return (()=>{
				let obj={};
				for(let elem of _){
					obj[_ms.sub(elem,0)]=_ms.sub(elem,1)
				};
				return obj
			})()
		};
		let delete_45property_33=exports["delete-property!"]=function delete_45property_33(_,prop_45name){
			_ms.checkInstance(Object,_,"_");
			_ms.checkInstance(Object_45Key,prop_45name,"prop-name");
			_ms.assert(property_63,_,prop_45name);
			js_45delete(_,prop_45name)
		};
		let object_45merge=exports["object-merge"]=function object_45merge(){
			let objects=[].slice.call(arguments,0);
			return Object.assign({},...objects)
		};
		let object_45select=exports["object-select"]=function object_45select(obj){
			let _64keys=[].slice.call(arguments,1);
			_ms.checkInstance(Object,obj,"obj");
			return (()=>{
				let kept={};
				for(let key of _64keys){
					kept[key]=obj[key]
				};
				return kept
			})()
		};
		let map_45object_45values=exports["map-object-values"]=function map_45object_45values(obj,mapper){
			_ms.checkInstance(Object,obj,"obj");
			_ms.checkInstance(Function,mapper,"mapper");
			return (()=>{
				let mapped={};
				for(let key of _64properties(obj)){
					mapped[key]=mapper(obj[key])
				};
				return mapped
			})()
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvT2JqZWN0Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBWUEsdUNBQVksS0FBSSxPQUNLLEtBQUE7O2NBQ3BCO0dBQ0Esb0NBQWMsQ0FBQyxPQUFPOzs7RUFFdkIsNkJBQVEsaUJBQU0sSUFBSSxLQUNlO3FCQURWOzRCQUFkLDBCQUVGLFlBQVUsSUFBSSxNQUFNOztFQUUzQix5Q0FBdUIsNEJBQVUsQ0FBRSxZQUFXO0VBQzlDLG1EQUFrQiw2QkFBQSxFQUNDO0dBR2xCLFVBQVEsMkJBQTJCO0dBQ25DLGdCQUFpQixpQkFBQyxTQUFELHVCQUFpQixTQUFRLHNEQUFJLElBQXVCOzZCQUNsRSxZQUFVLDZCQUE2QjtFQUFBO0VBRTNDLHlDQUFjLHVCQUFBLEVBQ0M7VUFDVCxDQUFBLFVBQVEsR0FBQyxZQUFZLEdBQUM7RUFBQTtFQUU1QixxQ0FBWSxxQkFBQSxFQUFFLFlBQ29CO3FCQURWO1VBRXBCLENBQUEsWUFBVSxFQUFFLDJCQUNTO1dBQXZCLEVBQUc7R0FBQTs7RUFFTCwrREFBdUIsb0NBQUEsRUFBRSxZQUNvQjtxQkFEVjtVQUU3QixDQUFBLFVBQVEsNEJBQVMsRUFBRzs7RUFFMUIscUNBQVkscUJBQUEsRUFBRSxZQUNvQjtxQkFEVjtVQUV2QixDQUFJLFVBQVEsSUFBRSxxQ0FBcUMsRUFBRTtFQUFBO0VBRXRELCtEQUF1QixvQ0FBQSxFQUFFLFlBQ29CO3FCQURWO1VBRWxDLENBQUksVUFBUSxJQUFFLFdBQVMsRUFBRztFQUFBO0VBRzNCLHFDQUFXLHNCQUFBLEVBQUUsRUFDQztVQUdUO0lBQUgsR0FBQSxFQUFJLGlCQUFLLE9BQUYsb0JBQVcsT0FBRixJQUNRO3NCQUFuQixFQUFFO0lBQUEsT0FDUCxHQUFBLG9CQUFNLE9BQUYsbUJBQVcsT0FBRixJQUNRO1lBQXBCO0lBQUEsT0FFRztLQUFILDBCQUFpQixzQkFBc0IsR0FBSSxzQkFBc0I7WUFDakUsQ0FBSSxhQUNTLEtBQUE7TUFBWixPQUFLLDJCQUEyQjtNQUNoQyxPQUFLLDJCQUEyQjthQUNoQywwQkFBZSxzQkFBVyxNQUNJLEtBQUE7aUNBQXhCLEdBQUksR0FDQztzQkFBTixFQUFHLEdBQUcsRUFBRztPQUFBO01BQUE7S0FBQTtJQUFBO0dBQUE7RUFBQTtFQUVsQiwyQ0FBYyxjQUFjO0VBRTVCLCtDQUFnQiwyQkFBQSxFQUNRO3FCQUROOytCQUVWLG9CQUFnQjtFQUFBO0VBRXhCLDJDQUFjLHlCQUFBLElBQ0c7aUNBQ04sb0JBQWdCLFFBQU8sSUFBSztFQUFBO0VBRXZDLDJDQUFjLHlCQUFBLEVBQ0s7O1VBQ2IsS0FDUztZQURUO0lBQ0EsUUFBQSxRQUFRLEVBQ0M7S0FDWixZQUFLLEtBQUssWUFBTyxLQUFLO0lBQUE7Ozs7RUFHeEIscURBQW9CLDhCQUFBLEVBQVMsWUFDb0I7cUJBRDNCO3FCQUFpQjtjQUMvQixZQUFVLEVBQUU7R0FDbkIsWUFBVSxFQUFFO0VBQUE7RUFFZCwyQ0FBZSx5QkFDVTs7VUFBeEIsY0FBYyxNQUFNO0VBQUE7RUFFckIsNkNBQWdCLHlCQUFBLElBQ21COztxQkFEZjtVQUNkLEtBQ1U7YUFEVjtJQUNBLFFBQUEsT0FBTyxRQUNLO0tBQWYsS0FBTSxLQUFRLElBQUs7SUFBQTs7OztFQUV0Qix1REFBb0IsK0JBQUEsSUFBVyxPQUNlO3FCQUR0QjtxQkFBYztVQUNoQyxLQUNZO2VBRFo7SUFDQSxRQUFBLE9BQU8sY0FBWSxLQUNHO0tBQXpCLE9BQVEsS0FBUSxPQUFPLElBQUs7SUFBQSIsImZpbGUiOiJPYmplY3QuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
