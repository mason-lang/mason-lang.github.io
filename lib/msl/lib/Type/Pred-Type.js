"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../js","./../polys","./Poly","./Trait","./Type","./../at/at"],(exports,js_0,polys_1,Poly_2,Trait_3,Type_4,_64_5)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(js_0),defined_63=_ms.get(_$0,"defined?"),_$1=_ms.getModule(polys_1),sub=_ms.get(_$1,"sub"),_$2=_ms.getModule(Poly_2),self_45impl_33=_ms.get(_$2,"self-impl!"),Trait=_ms.getDefaultExport(Trait_3),_$3=_ms.getModule(Trait_3),has_45trait_63=_ms.get(_$3,"has-trait?"),Type=_ms.getDefaultExport(Type_4),_$4=_ms.getModule(Type_4),_61_62=_ms.get(_$4,"=>"),has_45instance_63=_ms.get(_$4,"has-instance?"),_$5=_ms.lazyGetModule(_64_5),any_63=_ms.lazyProp(_$5,"any?"),_64map=_ms.lazyProp(_$5,"@map");
		let Pred=Function;
		let Pred_45Type=exports.default=(()=>{
			let _=class Pred_45Type{
				constructor(params){
					let _this=this;
					Object.assign(_this,params);
					if(! _ms.hasInstance(Pred,_this.predicate))throw new (Error)("Assertion failed.")
				}
				[_ms.symbol(has_45instance_63)](value){
					let _this=this;
					return _this.predicate(value)
				}
			};
			_ms.traitDo(_,Type);
			return _
		})();
		let Opt=exports.Opt=new (Pred_45Type)((()=>{
			let built={};
			built.name="Opt";
			let predicate=built.predicate=function predicate(){
				return true
			};
			return built
		})());
		self_45impl_33(sub,Opt,(()=>{
			return Exists_45Type=>{
				_ms.checkInstance(Type,Exists_45Type,"Exists-Type");
				let ET=Exists_45Type;
				return new (Opt_45Sub)(ET)
			}
		})());
		let Opt_45Sub=(()=>{
			let _=class Opt_45Sub{
				constructor(Exists_45Type){
					let _this=this;
					_ms.checkInstance(Type,Exists_45Type,"Exists-Type");
					this["Exists-Type"]=Exists_45Type
				}
				get name(){
					let _this=this;
					return `Opt[${_this["Exists-Type"].name}]`
				}
				[_ms.symbol(has_45instance_63)](_){
					let _this=this;
					return (! defined_63(_)||_ms.hasInstance(_this["Exists-Type"],_))
				}
			};
			_ms.traitDo(_,Type);
			return _
		})();
		let Any=exports.Any=new (Pred_45Type)((()=>{
			let built={};
			built.name="Any";
			let predicate=built.predicate=defined_63;
			return built
		})());
		let ObjLit=exports.ObjLit=new (Pred_45Type)((()=>{
			let built={};
			built.name="ObjLit";
			let predicate=built.predicate=function predicate(_){
				return (_ms.hasInstance(Object,_)&&Object.is(Object.getPrototypeOf(_),Object.prototype))
			};
			return built
		})());
		let Union=exports.Union=(()=>{
			let built={};
			built.name="Union";
			return built
		})();
		self_45impl_33(sub,Union,function(){
			let types=[].slice.call(arguments,0);
			return new (Pred_45Type)((()=>{
				let built={};
				built.name=(()=>{
					let names=_ms.unlazy(_64map)(types,_=>_.name);
					return `Union[${_61_62(String,names,` `)}]`
				})();
				let predicate=built.predicate=function predicate(_){
					return _ms.unlazy(any_63)(types,possible_45type=>{
						return _ms.hasInstance(possible_45type,_)
					})
				};
				return built
			})())
		});
		let Class=exports.Class=(()=>{
			let built={};
			built.name="Class";
			return built
		})();
		self_45impl_33(sub,Class,typ=>{
			return new (Pred_45Type)((()=>{
				let built={};
				built.name=`Class[${typ.name}]`;
				let predicate=built.predicate=function predicate(_){
					return (()=>{
						if(_ms.hasInstance(Function,_)){
							return _ms.hasInstance(typ,_.prototype)
						} else if(_ms.hasInstance(Trait,_)){
							return (_ms.hasInstance(Trait,typ)&&has_45trait_63(_,typ))
						} else {
							return false
						}
					})()
				};
				return built
			})())
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvVHlwZS9QcmVkLVR5cGUubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFVQSxTQUFPO0VBRVAsZ0NBQWlCOztJQUVOLFlBQUEsT0FDTTs7S0FBZixjQUFjLE1BQUs7S0FFWixxQkFBVyxLQUFYOztJQUVSLFlBQUMsb0JBQWdCLE1BQ0s7O1lBQXJCLGdCQUFXO0lBQUE7R0FBQTtpQkFSVTs7O0VBV3RCLG9CQUFLLEtBQUksYUFDUyxLQUFBOztjQUNqQjtHQUNBLDhCQUNZLG9CQUFBO1dBQVg7R0FBQTs7O0VBRUYsZUFBVyxJQUFJLElBQ0csS0FBQTtVQUNoQixlQUNnQjtzQkFESjtJQUNaLE9BQUs7V0FDTCxLQUFJLFdBQVE7R0FBQTtFQUFBO0VBRWQsY0FBZ0I7O0lBRUwsWUFBQSxjQUNpQjs7dUJBREo7OztJQUd2QixVQUNROztZQUFOLE9BQU07O0lBRVIsWUFBQyxvQkFBZ0IsRUFDQzs7WUFBakIsQ0FBSSxFQUFJLFdBQVMsb0JBQUcscUJBQUQ7SUFBQTtHQUFBO2lCQVRDOzs7RUFXdkIsb0JBQUssS0FBSSxhQUNTLEtBQUE7O2NBQ2pCO0dBQ0EsOEJBQVc7OztFQUVaLDBCQUFRLEtBQUksYUFDUyxLQUFBOztjQUNwQjtHQUNBLDhCQUFZLG1CQUFBLEVBQ0M7V0FBWixpQkFBSyxPQUFELGNBQVksc0JBQXNCLEdBQUM7Ozs7RUFHekMsd0JBQ00sS0FBQTs7Y0FDTDs7O0VBRUQsZUFBVyxJQUFJLE1BQU8sVUFDUTs7VUFBN0IsS0FBSSxhQUNTLEtBQUE7O2VBQ1AsS0FBQTtLQUFKLDZCQUFhO1lBQ1osU0FBUSxPQUFHLE9BQU8sTUFBTzs7SUFDM0IsOEJBQVksbUJBQUEsRUFDQzsrQkFBUCxNQUFPLGlCQUNhOzZCQUF2QixnQkFBRDtLQUFBO0lBQUE7Ozs7RUFHSix3QkFDTSxLQUFBOztjQUNMOzs7RUFFRCxlQUFXLElBQUksTUFBTyxLQUNHO1VBQXhCLEtBQUksYUFDUyxLQUFBOztlQUFMLFNBQVE7SUFDZiw4QkFBWSxtQkFBQSxFQUFBO1lBQUE7TUFDWCxtQkFBQyxTQUFELEdBQ1M7OEJBQUksSUFBWjthQUNELG1CQUFDLE1BQUQsR0FDTTtjQUFMLGlCQUFRLE1BQUosTUFBVyxlQUFXLEVBQUU7TUFBQSxPQUV6QjtjQUFIO01BQUE7S0FBQTtJQUFBIiwiZmlsZSI6IlR5cGUvUHJlZC1UeXBlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
