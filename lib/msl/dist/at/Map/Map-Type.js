"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../Type/Kind","./../../Type/Method","./../at-Type","./Map","./Id-Map"],(exports,Kind_0,Method_1,_64_45Type_2,Map_3,Id_45Map_4)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(Kind_0),self_45kind_33=_ms.get(_$0,"self-kind!"),_$1=_ms.getModule(Method_1),self_45impl_33=_ms.get(_$1,"self-impl!"),_64_45Type=_ms.getDefaultExport(_64_45Type_2),_$2=_ms.getModule(_64_45Type_2),empty=_ms.get(_$2,"empty"),from_45stream=_ms.get(_$2,"from-stream"),Map=_ms.getDefaultExport(Map_3),Id_45Map=_ms.lazy(()=>_ms.getDefaultExport(Id_45Map_4));
		let Map_45Type=exports.default=(()=>{
			let _=_ms.kind("Map-Type",[_64_45Type],{
				[_ms.symbol(empty)](){
					let _this=this;
					return empty(_ms.unlazy(Id_45Map))
				}
			},{
				[_ms.symbol(from_45stream)](stream){
					let _this=this;
					let map=empty(_this);
					for(let _ of stream){
						_ms.setSub(map,_ms.sub(_,0),_ms.sub(_,1),"init")
					};
					return map
				}
			});
			self_45kind_33(Map,_);
			return _
		})();
		self_45impl_33(empty,Map,()=>{
			return empty(_ms.unlazy(Id_45Map))
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9NYXAvTWFwLVR5cGUubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFRQSwrQkFBZSxLQUlaOzhCQUpZO2dCQVFiO1NBSVk7WUFIWDs7O2dCQUVGLGdCQUFhO1NBQ0E7S0FBWixRQUFNLE1BQU07S0FDUixRQUFBLEtBQUEsT0FDTTtpQkFDVCxZQUFLLEVBQUMsV0FBTyxFQUFDOztZQUNmO0lBQUE7R0FBQTtHQVhBLGVBQVcsSUFBSzs7O0VBZWxCLGVBQVcsTUFBTSxJQUNLO1VBQXJCIiwiZmlsZSI6ImF0L01hcC9NYXAtVHlwZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
