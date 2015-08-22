"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../methods","./Type"],(exports,methods_0,Type_1)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(methods_0),sub=_ms.get(_$0,"sub"),Type=_ms.getDefaultExport(Type_1),_$1=_ms.getModule(Type_1),contains_63=_ms.get(_$1,"contains?");
		let Alias_45Type=exports.default=(()=>{
			let _=class Alias_45Type{
				constructor(params){
					let _this=this;
					Object.assign(_this,params);
					_ms.assert(_ms.contains,String,_this.name);
					_ms.assert(_ms.contains,Type,_this["alias-of"])
				}
				[_ms.symbol(contains_63)](value){
					let _this=this;
					return _ms.contains(_this["alias-of"],value)
				}
				[_ms.symbol(sub)](){
					let args=[].slice.call(arguments,0);
					let _this=this;
					return sub(_this["alias-of"],...args)
				}
			};
			_ms.kindDo(_,Type);
			return _
		})();
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvVHlwZS9BbGlhcy1UeXBlLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBSUEsaUNBQWtCOztJQUdQLFlBQUE7U0FTTDtLQVJKLGNBUUksTUFSZTs2QkFDTixPQU9UOzZCQU5hLEtBTWI7O2dCQUpMLGNBQVc7U0FJTjt5QkFBQSxrQkFISjtJQUFBO2dCQUVEOztTQUNLO1lBQUosSUFBSSxrQkFBVSxHQUFHO0lBQUE7R0FBQTtnQkFaSSIsImZpbGUiOiJUeXBlL0FsaWFzLVR5cGUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
