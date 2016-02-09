"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./Type/primitive"],(exports,primitive_0)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(primitive_0),Str=_ms.get(_$0,"Str");
		let _45_62Error=exports["->Error"]=function _45_62Error(_){
			return (()=>{
				if(_ms.hasInstance(Error,_)){
					return _
				} else if(_ms.hasInstance(Str,_)){
					return new (Error)(_)
				} else throw new (Error)("No branch of `case` matches.")
			})()
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvRXJyb3IubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFHQSxtQ0FBVSxxQkFBQSxFQUFBO1VBQUE7SUFDVCxtQkFBQyxNQUFELEdBQ007WUFBTDtJQUFBLE9BQ0QsbUJBQUMsSUFBRCxHQUNJO1lBQUgsS0FBSSxPQUFNO0lBQUEiLCJmaWxlIjoiRXJyb3IuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
