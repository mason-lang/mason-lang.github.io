"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../private/bootstrap","./Type"],(exports,bootstrap_0,Type_1)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(bootstrap_0),msDef=_ms.get(_$0,"msDef"),_$1=_ms.getModule(Type_1),extract=_ms.get(_$1,"extract");
		let Record=exports.default=_ms.trait("Record",[],{
			[_ms.symbol(extract)](_){
				let _this=this;
				return (_ms.hasInstance(_this,_)?field_45values(_this,_):null)
			}
		},{
			toString(){
				let _this=this;
				return `(${_this.constructor.name} ${field_45values(_this.constructor,_this).join(` `)})`
			}
		});
		let field_45values=function field_45values(cls,instance){
			return cls["field-names"].map(_=>instance[_])
		};
		msDef("beRecord",(_,field_45names)=>{
			_["field-names"]=field_45names;
			_ms.traitWithDefs(_,Record,{},{})
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvVHlwZS9SZWNvcmQubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFJQTtHQUtFLFlBQUMsVUFBVSxFQUNDOztXQUFOLGlCQUFFLE1BQUYsR0FBUSxlQUFhLE1BQUssR0FBRztHQUFBO0VBQUE7YUFHMUI7O1dBQVIsSUFBRywwQkFBc0IsZUFBYSxrQkFBYSxZQUFZOzs7RUFFbEUsbUJBQWdCLHdCQUFBLElBQUksU0FDUTtVQUEzQiwwQkFBc0IsU0FBVTtFQUFBO0VBRWpDLE1BQU8sV0FBVyxDQUFBLEVBQUUsZ0JBQ1c7R0FBOUIsaUJBQWlCO3FCQUNWLEVBQUUiLCJmaWxlIjoiVHlwZS9SZWNvcmQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
