"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../compare","./../../Type/Type","./../../Type/Kind","./../at","./../at-Type","./Hash-Set"],(exports,compare_0,Type_1,Kind_2,_64_3,_64_45Type_4,Hash_45Set_5)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),same_63=_ms.get(_$0,"same?"),_$1=_ms.getModule(Type_1),_61_62=_ms.get(_$1,"=>"),contains_63=_ms.get(_$1,"contains?"),type_45of=_ms.get(_$1,"type-of"),_$2=_ms.getModule(Kind_2),self_45kind_33=_ms.get(_$2,"self-kind!"),_64=_ms.getDefaultExport(_64_3),_$3=_ms.getModule(_64_3),all_63=_ms.get(_$3,"all?"),count=_ms.get(_$3,"count"),_64keep=_ms.get(_$3,"@keep"),_64_45Type=_ms.getDefaultExport(_64_45Type_4),_$4=_ms.getModule(_64_45Type_4),empty=_ms.get(_$4,"empty"),Hash_45Set=_ms.lazy(()=>_ms.getDefaultExport(Hash_45Set_5));
		let Set=exports.default=(()=>{
			let _=_ms.kind("Set",[_64],{
				[_ms.symbol(empty)](){
					let _this=this;
					return empty(_ms.unlazy(Hash_45Set))
				}
			},{
				[_ms.symbol(_61_63)](other){
					let _this=this;
					return ((same_63(type_45of,_this,other)&&same_63(count,_this,other))&&all_63(_this,_=>{
						return _ms.contains(other,_)
					}))
				}
			});
			self_45kind_33(_,_64_45Type);
			return _
		})();
		let intersect=exports.intersect=_ms.method("intersect",["@intersect-with"],function(_64intersect_45with){
			let _this=this;
			return _64keep(_this,_ms.sub(contains_63,_61_62(Set,_64intersect_45with)))
		});
		let set_61_63=exports["set=?"]=function set_61_63(a,b){
			_ms.checkContains(_64,a,"a");
			_ms.checkContains(_64,b,"b");
			return _61_63(_61_62(Set,a),_61_62(Set,b))
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9TZXQvU2V0Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBU0Esd0JBQVUsS0FLUDt5QkFMTztnQkFRUjtTQVVLO1lBVEo7OztnQkFFRixTQUFJO1NBT0U7WUFMTCxFQUFLLFFBQU0sVUFLTixNQUxtQixRQUFRLFFBQU0sTUFLakMsTUFMNEMsU0FBUSxPQUtwRCxNQUxnRTswQkFDbkUsTUFBRDtLQUFBO0lBQUE7R0FBQTtHQVRELGVBQVksRUFBQzs7O0VBV2YsMkVBQW1CLFNBQUE7T0FFWjtVQUFOLFFBQU0sY0FBSyxZQUFXLE9BQUcsSUFBSTtFQUFBO0VBRTlCLCtCQUFRLG1CQUFBLEVBQUk7cUJBQUY7cUJBQUk7VUFFYixPQUFJLE9BQUcsSUFBSSxHQUFJLE9BQUcsSUFBSTtFQUFBIiwiZmlsZSI6ImF0L1NldC9TZXQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
