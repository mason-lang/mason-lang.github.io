"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../Type/Type","./../at","./Set"],(exports,Type_0,_64_1,Set_2)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(Type_0),has_45instance_63=_ms.get(_$0,"has-instance?"),_$1=_ms.getModule(_64_1),_43_43_33=_ms.get(_$1,"++!"),_45_45_33=_ms.get(_$1,"--!"),count=_ms.get(_$1,"count"),each_33=_ms.get(_$1,"each!"),empty_33=_ms.get(_$1,"empty!"),Set=_ms.getDefaultExport(Set_2);
		let Id_45Set=exports.default=global.Set;
		_ms.traitWithDefs(Id_45Set,Set,{},{
			[_ms.symbol(count)](){
				let _this=this;
				return _this.size
			},
			[_ms.symbol(_43_43_33)](_64added){
				let _this=this;
				each_33(_64added,_ms.methodBound(_this,"add"))
			},
			[_ms.symbol(empty_33)](){
				let _this=this;
				_this.clear()
			},
			[_ms.symbol(_45_45_33)](_64deleted){
				let _this=this;
				each_33(_64deleted,_ms.methodBound(_this,"delete"))
			},
			[_ms.symbol(has_45instance_63)](_){
				let _this=this;
				return _this.has(_)
			}
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9TZXQvSWQtU2V0Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBT0EsNkJBQVE7b0JBRUQsU0FBTztHQUNiLFlBQUMsU0FDUTs7V0FBUjs7R0FHRCxZQUFDLFlBQU8sU0FDTTs7SUFBYixRQUFNLHlCQUFROztHQUVmLFlBQUMsWUFDVTs7SUFBVjs7R0FHRCxZQUFDLFlBQU8sV0FDUTs7SUFBZixRQUFNLDJCQUFVOztHQUVqQixZQUFDLG9CQUFnQixFQUNDOztXQUFqQixVQUFLO0dBQUE7RUFBQSIsImZpbGUiOiJhdC9TZXQvSWQtU2V0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
