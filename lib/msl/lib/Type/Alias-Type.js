"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../polys","./primitive","./Type"],(exports,polys_0,primitive_1,Type_2)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(polys_0),sub=_ms.get(_$0,"sub"),_$1=_ms.getModule(primitive_1),Str=_ms.get(_$1,"Str"),Type=_ms.getDefaultExport(Type_2),_$2=_ms.getModule(Type_2),has_45instance_63=_ms.get(_$2,"has-instance?");
		let Alias_45Type=exports.default=(()=>{
			let _=class Alias_45Type{
				constructor(params){
					let _this=this;
					Object.assign(_this,params);
					if(! _ms.hasInstance(Str,_this.name))throw new (Error)("Assertion failed.");
					if(! _ms.hasInstance(Type,_this["alias-of"]))throw new (Error)("Assertion failed.")
				}
				[_ms.symbol(has_45instance_63)](value){
					let _this=this;
					return _ms.hasInstance(_this["alias-of"],value)
				}
				[_ms.symbol(sub)](){
					let args=[].slice.call(arguments,0);
					let _this=this;
					return sub(_this["alias-of"],...args)
				}
			};
			_ms.traitDo(_,Type);
			return _
		})();
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvVHlwZS9BbGlhcy1UeXBlLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBS0EsaUNBQWtCOztJQUdQLFlBQUEsT0FDTTs7S0FBZixjQUFjLE1BQUs7S0FDWixxQkFBTSxJQUFOO0tBQ0EscUJBQVUsS0FBVjs7SUFFUixZQUFDLG9CQUFnQixNQUNLOzs0QkFBZixrQkFBTjtJQUFBO0lBRUQsWUFBQyxPQUNhOzs7WUFBYixJQUFJLHFCQUFhO0lBQUE7R0FBQTtpQkFaSyIsImZpbGUiOiJUeXBlL0FsaWFzLVR5cGUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
