"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports"],exports=>{
	exports._get=_ms.lazy(()=>{
		let implies=exports.implies=function implies(if_63,then_63){
			_ms.checkContains(Boolean,if_63,"if?");
			return (if_63?_ms.unlazy(then_63):true)
		};
		let xor=exports.xor=function xor(a,b){
			_ms.checkContains(Boolean,a,"a");
			_ms.checkContains(Boolean,b,"b");
			return (a?! b:b)
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQm9vbGVhbi5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0VBQUEsNEJBQVUsaUJBQUEsTUFBWTtxQkFBUjtVQUdSLENBQUEsMEJBQVU7RUFBQTtFQUVoQixvQkFBTSxhQUFBLEVBQVU7cUJBQVI7cUJBQVU7VUFFWixDQUFBLEVBQUcsRUFBSSxFQUFHO0VBQUEiLCJmaWxlIjoiQm9vbGVhbi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
