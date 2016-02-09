"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./at/q","./js","./Type/Poly","./Type/primitive","./Type/Type"],(exports,_63_0,js_1,Poly_2,primitive_3,Type_4)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(_63_0),_63_45_62nullable=_ms.get(_$0,"?->nullable"),_$1=_ms.getModule(js_1),null_63=_ms.get(_$1,"null?"),_$2=_ms.getModule(Poly_2),impl_33=_ms.get(_$2,"impl!"),_$3=_ms.getModule(primitive_3),Str=_ms.get(_$3,"Str"),_$4=_ms.getModule(Type_4),has_45instance_63=_ms.get(_$4,"has-instance?"),extract=_ms.get(_$4,"extract");
		impl_33(has_45instance_63,RegExp,function(_){
			let _this=this;
			return _this.test(_)
		});
		exports.default=impl_33(extract,RegExp,function(_,num_45extracteds){
			let _this=this;
			return _63_45_62nullable((_ms.hasInstance(Str,_)?_ms.some((()=>{
				let match=_this.exec(_);
				_this.lastIndex=0;
				return _63_45_62nullable(((! null_63(match)&&_ms.eq(match.length,(1+num_45extracteds)))?_ms.some((()=>{
					match.shift();
					return match
				})()):_ms.None))
			})()):_ms.None))
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvUmVnRXhwLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBT0EsUUFBTSxrQkFBYyxPQUFTLFNBQUEsRUFDQzs7VUFBN0IsV0FBTTtFQUFBO2tCQUVQLFFBQU0sUUFBUSxPQUFTLFNBQUEsRUFBRSxpQkFDYzs7VUFBdEMsa0JBQWUsaUJBQUMsSUFBRCxpQkFDSTtJQUFsQixVQUFRLFdBQU07SUFFZCxnQkFBYztXQUNkLGtCQUFlLENBQUEsQ0FBSyxFQUFJLFFBQU0sZUFBVSxhQUFhLENBQUUsRUFBRSxrQ0FDYztLQUF0RTtZQUNBO0lBQUEiLCJmaWxlIjoiUmVnRXhwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
