"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../compare","./../../Type/Type","./../at","./Hash-Set"],(exports,compare_0,Type_1,_64_2,Hash_45Set_3)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(compare_0),binary_61_63=_ms.get(_$0,"binary=?"),same_63=_ms.get(_$0,"same?"),_$1=_ms.getModule(Type_1),_61_62=_ms.get(_$1,"=>"),has_45instance_63=_ms.get(_$1,"has-instance?"),type_45of=_ms.get(_$1,"type-of"),_64=_ms.getDefaultExport(_64_2),_$2=_ms.getModule(_64_2),all_63=_ms.get(_$2,"all?"),count=_ms.get(_$2,"count"),empty=_ms.get(_$2,"empty"),_64keep=_ms.get(_$2,"@keep"),Hash_45Set=_ms.lazy(()=>_ms.getDefaultExport(Hash_45Set_3));
		let Set=exports.default=_ms.trait("Set",[_64],{
			[_ms.symbol(empty)](){
				let _this=this;
				return empty(_ms.unlazy(Hash_45Set))
			}
		},{
			[_ms.symbol(binary_61_63)](other){
				let _this=this;
				return (same_63(type_45of,_this,other)&&set_61_63(_this,other))
			}
		});
		let intersect=exports.intersect=_ms.method("intersect",["@intersect-with"],function(_64intersect_45with){
			let _this=this;
			return _64keep(_this,_ms.sub(has_45instance_63,_61_62(Set,_64intersect_45with)))
		});
		let set_61_63=exports["set=?"]=function set_61_63(a,b){
			_ms.checkInstance(_64,a,"a");
			_ms.checkInstance(_64,b,"b");
			let a_45set=_61_62(Set,a);
			let b_45set=_61_62(Set,b);
			return (same_63(count,a_45set,b_45set)&&all_63(a,_=>_ms.hasInstance(b_45set,_)))
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9TZXQvU2V0Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBT0EseUNBQVc7R0FLVCxZQUFDLFNBQ1E7O1dBQVI7OztHQUVGLFlBQUMsZUFBVyxNQUNLOztXQUNoQixDQUFLLFFBQU0sVUFBUSxNQUFLLFFBQVEsVUFBTSxNQUFLO0dBQUE7RUFBQTtFQUU3QywyRUFBaUIsU0FBQSxvQkFDZTs7VUFDL0IsUUFBTSxjQUFLLGtCQUFlLE9BQUcsSUFBSTtFQUFBO0VBRWxDLCtCQUFRLG1CQUFBLEVBQUksRUFDRztxQkFETDtxQkFBSTtHQUViLFlBQVEsT0FBRyxJQUFJO0dBQ2YsWUFBUSxPQUFHLElBQUk7VUFDZixDQUFLLFFBQU0sTUFBTSxRQUFNLFVBQVEsT0FBSyxxQkFBSyxRQUFEO0VBQUEiLCJmaWxlIjoiYXQvU2V0L1NldC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
