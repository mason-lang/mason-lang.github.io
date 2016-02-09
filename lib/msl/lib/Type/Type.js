"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../private/bootstrap","./../to-string","./Impl-Type","./Poly","./Trait","./../at/q","./../Object","./../to-string"],(exports,bootstrap_0,to_45string_1,Impl_45Type_2,Poly_3,Trait_4,_63_5,Object_6,to_45string_7)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(bootstrap_0),containsImplSymbol=_ms.get(_$0,"containsImplSymbol"),msDef=_ms.get(_$0,"msDef"),to_45string=_ms.getDefaultExport(to_45string_1),Impl_45Type=_ms.getDefaultExport(Impl_45Type_2),Poly=_ms.getDefaultExport(Poly_3),_$1=_ms.getModule(Poly_3),impl_33=_ms.get(_$1,"impl!"),Trait=_ms.getDefaultExport(Trait_4),_$2=_ms.lazyGetModule(_63_5),_63_45or=_ms.lazyProp(_$2,"?-or"),_$3=_ms.lazyGetModule(Object_6),_63property_45with_45proto=_ms.lazyProp(_$3,"?property-with-proto"),_$4=_ms.lazyGetModule(to_45string_7),inspect=_ms.lazyProp(_$4,"inspect");
		let Type=exports.default=_ms.trait("Type",[],{},{
			[_ms.symbol(to_45string)](){
				let _this=this;
				return _this.name
			}
		});
		impl_33(to_45string,Trait,function(){
			let _this=this;
			return _this.name
		});
		let has_45instance_63=exports["has-instance?"]=new (Poly)((()=>{
			let built={};
			built.name="has-instance?";
			let args=built.args=["instance"];
			let impl_45symbol=built["impl-symbol"]=containsImplSymbol;
			return built
		})());
		msDef("hasInstance",has_45instance_63);
		let extract=exports.extract=_ms.method("extract",["candidate","num-extracteds"]);
		msDef("extract",extract);
		msDef("checkInstance",(expected_45type,value,value_45name)=>{
			if(! _ms.hasInstance(expected_45type,value))throw new (TypeError)((()=>{
				return `${value_45name} is no ${expected_45type.name}, is a ${type_45of(value).name}: ${_ms.unlazy(inspect)(value)}`
			})());
			return value
		});
		let _61_62=exports["=>"]=new (Poly)((()=>{
			let built={};
			built.name="=>";
			let wrap=built.wrap=function wrap(impl,convert_45to_45type,converted,opts){
				return (()=>{
					let _=converted;
					if(_ms.hasInstance(convert_45to_45type,_)){
						return _
					} else {
						return impl.call(convert_45to_45type,_,opts)
					}
				})()
			};
			return built
		})());
		let type_45of=exports["type-of"]=function type_45of(_){
			return _ms.checkInstance(Impl_45Type,_ms.unlazy(_63_45or)(_ms.unlazy(_63property_45with_45proto)(_,"constructor"),Object),"returned value")
		};
		_ms.traitWithDefs(Impl_45Type,Type,{},{});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvVHlwZS9UeXBlLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBWUE7R0FHQyxZQUFDLGVBQ1k7O1dBQVo7OztFQUdGLFFBQU0sWUFBVSxNQUNRLFVBQUE7O1VBQXZCOztFQUVELCtDQUFlLEtBQUksTUFDSSxLQUFBOztjQUN0QjtHQUNBLG9CQUFNLENBQUU7R0FDUix1Q0FBYTs7O0VBQ2QsTUFBTyxjQUFZO0VBR25CO0VBU0EsTUFBTyxVQUFRO0VBRWYsTUFBTyxnQkFBZSxDQUFBLGdCQUFjLE1BQU0sZUFDVTtHQUE1QyxxQkFBTSxnQkFBTixhQUEwQixLQUFJLFdBQ1MsS0FBQTtXQUE1QyxHQUFDLHNCQUFtQiw4QkFBNkIsVUFBUSxvQ0FBd0I7O1VBQ25GO0VBQUE7RUFFRCx5QkFBSSxLQUFJLE1BQ0ksS0FBQTs7Y0FHWDtHQUNBLG9CQUFPLGNBQUEsS0FBSyxvQkFBZ0IsVUFBVSxLQUNJO1dBQXBDO0tBQUEsTUFBQTtLQUNKLG1CQUFDLG9CQUFELEdBQ2dCO2FBQWY7S0FBQSxPQUVHO2FBQUgsVUFBVSxvQkFBZ0IsRUFBRTtLQUFBO0lBQUE7R0FBQTs7O0VBR2hDLGlDQUFVLG1CQUFXLEVBQ0M7NEJBRFgsd0VBRWlCLEVBQUcsZUFBYTs7b0JBSXJDLFlBQVUiLCJmaWxlIjoiVHlwZS9UeXBlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
