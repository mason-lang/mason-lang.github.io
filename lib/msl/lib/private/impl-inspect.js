"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../at/Set/Id-Set","./../Object","./../String","./../to-string","./../Type/Poly","./../Type/Type"],(exports,Id_45Set_0,Object_1,String_2,to_45string_3,Poly_4,Type_5)=>{
	exports._get=_ms.lazy(()=>{
		let Id_45Set=_ms.getDefaultExport(Id_45Set_0),_$0=_ms.getModule(Object_1),_64properties=_ms.get(_$0,"@properties"),_64all_45properties=_ms.get(_$0,"@all-properties"),_$1=_ms.getModule(String_2),indent=_ms.get(_$1,"indent"),_$2=_ms.getModule(to_45string_3),inspect=_ms.get(_$2,"inspect"),_$3=_ms.getModule(Poly_4),impl_33=_ms.get(_$3,"impl!"),_$4=_ms.getModule(Type_5),_61_62=_ms.get(_$4,"=>");
		impl_33(inspect,Object,function(){
			let _this=this;
			return (()=>{
				switch(_this.toString){
					case Object.prototype.toString:{
						let _64props=_64all_45properties(_this);
						let enumerable_45props=_61_62(Id_45Set,_64properties(_this));
						let s=`${_this.constructor.name}`;
						for(let _ of _64props){
							s=`${s}\n\t${indent(inspect_45property(_this,_,_ms.hasInstance(enumerable_45props,_)))}`
						};
						return s
					}
					default:return _this.toString()
				}
			})()
		});
		let inspect_45property=function inspect_45property(obj,key,enumerable_63){
			let desc=Object.getOwnPropertyDescriptor(obj,key);
			let prop_45name=(enumerable_63?key:`[${key.toString()}]`);
			let str=(()=>{
				if((desc.get&&desc.set)){
					return `[Getter/Setter]`
				} else if(desc.get){
					return `[Getter]`
				} else if(desc.set){
					return `[Setter]`
				} else {
					return inspect(desc.value)
				}
			})();
			return `${prop_45name}. ${str}`
		};
		let inspect_45primitive=function inspect_45primitive(){
			let _this=this;
			return (_ms.hasInstance(Object,_this)?`[${_this.constructor.name} ${_this}]`:`${_this}`)
		};
		impl_33(inspect,Boolean,inspect_45primitive);
		impl_33(inspect,Number,inspect_45primitive);
		impl_33(inspect,String,function(){
			let _this=this;
			let str=JSON.stringify(_this);
			return (_ms.hasInstance(Object,_this)?`[String ${str}]`:str)
		});
		exports.default=impl_33(inspect,Symbol,function(){
			let _this=this;
			return (_ms.hasInstance(Object,_this)?`[Symbol ${inspect(_this.valueOf())}]`:_this.toString())
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvcHJpdmF0ZS9pbXBsLWluc3BlY3QubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFVQSxRQUFNLFFBQVEsT0FDUyxVQUFBOztVQUFmO1dBQUE7S0FDTixLQUFBLDBCQUN5QjtNQUF4QixhQUFTLG9CQUFnQjtNQUN6Qix1QkFBbUIsT0FBRyxTQUFRLGNBQVk7TUFDMUMsTUFBSyxHQUFFO01BQ0gsUUFBQSxLQUFBLFNBQ007U0FBSCxHQUFDLFFBQU8sT0FBUSxtQkFBaUIsTUFBSyxrQkFBRyxtQkFBRDs7YUFDL0M7S0FBQTtLQUVHLGVBQUg7Ozs7RUFFSCx1QkFBb0IsNEJBQUEsSUFBSSxJQUFJLGNBQ1c7R0FBdEMsU0FBTyxnQ0FBZ0MsSUFBSTtHQUUzQyxnQkFBaUIsQ0FBQSxjQUFZLElBQUssSUFBRztHQUVyQyxRQUNVO0lBQVQsR0FBQSxDQUFJLFVBQVMsVUFDUTtZQUFuQjtXQUNGLEdBQUEsU0FDUTtZQUFOO1dBQ0YsR0FBQSxTQUNRO1lBQU47V0FFRTtZQUFILFFBQVE7OztVQUVULEdBQUMsZ0JBQVk7O0VBRWYsd0JBQ3NCLDhCQUFBOztVQUFoQixpQkFBSyxPQUFMLE9BQWEsSUFBRywwQkFBb0IsU0FBUSxHQUFDOztFQUVuRCxRQUFNLFFBQVEsUUFBUTtFQUN0QixRQUFNLFFBQVEsT0FBTztFQUNyQixRQUFNLFFBQVEsT0FDUyxVQUFBOztHQUF0QixRQUFNLGVBQWU7VUFDaEIsaUJBQUssT0FBTCxPQUFhLFdBQVMsT0FBTTtFQUFBO2tCQUNsQyxRQUFNLFFBQVEsT0FDUyxVQUFBOztVQUFqQixpQkFBSyxPQUFMLE9BQWEsV0FBVSxRQUFRLG9CQUFjIiwiZmlsZSI6InByaXZhdGUvaW1wbC1pbnNwZWN0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
