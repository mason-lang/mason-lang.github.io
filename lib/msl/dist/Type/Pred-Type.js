"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../Function","./../js","./../methods","./Method","./Type","./../at/at"],(exports,Function_0,js_1,methods_2,Method_3,Type_4,_64_5)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(Function_0),Pred=_ms.get(_$0,"Pred"),_$1=_ms.getModule(js_1),defined_63=_ms.get(_$1,"defined?"),id_61_63=_ms.get(_$1,"id=?"),_$2=_ms.getModule(methods_2),sub=_ms.get(_$2,"sub"),_$3=_ms.getModule(Method_3),self_45impl_33=_ms.get(_$3,"self-impl!"),Type=_ms.getDefaultExport(Type_4),_$4=_ms.getModule(Type_4),_61_62=_ms.get(_$4,"=>"),contains_63=_ms.get(_$4,"contains?"),_$5=_ms.lazyGetModule(_64_5),any_63=_ms.lazyProp(_$5,"any?"),_64map=_ms.lazyProp(_$5,"@map");
		let Pred_45Type=exports.default=(()=>{
			let _=class Pred_45Type{
				constructor(params){
					let _this=this;
					Object.assign(_this,params);
					_ms.assert(_ms.contains,String,_this.name);
					_ms.assert(_ms.contains,Pred,_this.predicate)
				}
				[_ms.symbol(contains_63)](value){
					let _this=this;
					return _this.predicate(value)
				}
			};
			_ms.kindDo(_,Type);
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
				_ms.checkContains(Type,Exists_45Type,"Exists-Type");
				let ET=Exists_45Type;
				return new (Opt_45Sub)(ET)
			}
		})());
		let Opt_45Sub=(()=>{
			let _=class Opt_45Sub{
				constructor(Exists_45Type){
					let _this=this;
					_ms.checkContains(Type,Exists_45Type,"Exists-Type");
					_ms.newProperty(this,"Exists-Type",Exists_45Type)
				}
				[_ms.symbol(contains_63)](_){
					let _this=this;
					return (! defined_63(_)||_ms.contains(_this["Exists-Type"],_))
				}
			};
			_ms.kindDo(_,Type);
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
				return (_ms.contains(Object,_)&&id_61_63(Object.getPrototypeOf(_),Object.prototype))
			};
			return built
		})());
		let Union=exports.Union=(()=>{
			return new (Object)()
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
						return _ms.contains(possible_45type,_)
					})
				};
				return built
			})())
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvVHlwZS9QcmVkLVR5cGUubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFTQSxnQ0FBaUI7O0lBRU4sWUFBQTtTQTJCWTtLQTFCckIsY0EwQnFCLE1BMUJGOzZCQUNOLE9BeUJROzZCQXhCSCxLQXdCRzs7Z0JBdEJ0QixjQUFXO1NBc0JXO1lBQUEsZ0JBckJWO0lBQUE7R0FBQTtnQkFSUzs7O0VBV3JCLG9CQUFLLEtBQUksYUFDUyxLQUFBOztjQUNqQjtHQUNBLDhCQUNZO1dBQVg7R0FBQTs7O0VBRUYsZUFBVyxJQUFJLElBQ0csS0FBQTtVQUNoQjtzQkFBWTtJQUNaLE9BQUs7V0FDTCxLQUFJLFdBQVE7R0FBQTtFQUFBO0VBRWQsY0FBZ0I7O0lBRUwsWUFBQTtTQUlXO3VCQUpFOzs7Z0JBR3ZCLGNBQVk7U0FDUztZQUFwQixDQUFJLEVBQUksV0FBUyxpQkFBRyxxQkFBRDtJQUFBO0dBQUE7Z0JBTkE7OztFQVF0QixvQkFBSyxLQUFJLGFBQ1MsS0FBQTs7Y0FDakI7R0FDQSw4QkFBVzs7O0VBRVosMEJBQVEsS0FBSSxhQUNTLEtBQUE7O2NBQ3BCO0dBQ0EsOEJBQWEsbUJBQUE7V0FDWixjQUFLLE9BQUQsSUFBUyxTQUFLLHNCQUFzQixHQUFDOzs7O0VBRTNDLHdCQUNNLEtBQUE7VUFDTCxLQUFJO0VBQUE7RUFFTCxlQUFXLElBQUksTUFBTzs7VUFDckIsS0FBSSxhQUNTLEtBQUE7O2VBQ1AsS0FBQTtLQUFKLDZCQUFhO1lBQ1osU0FBUSxPQUFHLE9BQU8sTUFBTzs7SUFDM0IsOEJBQWEsbUJBQUE7K0JBQ1AsTUFBTzswQkFDVixnQkFBRDtLQUFBO0lBQUEiLCJmaWxlIjoiVHlwZS9QcmVkLVR5cGUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
