"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../Function","./../../math/Number","./../../math/methods","./../../Type/Kind","./../../Type/Method","./../at","./../at-Type","./Seq","./Stream"],(exports,Function_0,Number_1,methods_2,Kind_3,Method_4,_64_5,_64_45Type_6,Seq_7,Stream_8)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(Function_0),thunk=_ms.get(_$0,"thunk"),_$1=_ms.getModule(Number_1),Nat=_ms.get(_$1,"Nat"),_$2=_ms.getModule(methods_2),_45=_ms.get(_$2,"-"),_$3=_ms.getModule(Kind_3),self_45kind_33=_ms.get(_$3,"self-kind!"),_$4=_ms.getModule(Method_4),impl_33=_ms.get(_$4,"impl!"),self_45impl_33=_ms.get(_$4,"self-impl!"),_$5=_ms.getModule(_64_5),count=_ms.get(_$5,"count"),empty_63=_ms.get(_$5,"empty?"),iterator=_ms.get(_$5,"iterator"),_64_45Type=_ms.getDefaultExport(_64_45Type_6),_$6=_ms.getModule(_64_45Type_6),empty=_ms.get(_$6,"empty"),from_45stream=_ms.get(_$6,"from-stream"),Seq=_ms.getDefaultExport(Seq_7),_$7=_ms.getModule(Seq_7),_63nth=_ms.get(_$7,"?nth"),Stream=_ms.getDefaultExport(Stream_8);
		let Lazy_45Stream=exports.default=(()=>{
			let _=class Lazy_45Stream{
				static [_ms.symbol(from_45stream)](_){
					let _this=this;
					return new (_this)(()=>{
						return iterator(_)
					})
				}
				constructor(stream){
					let _this=this;
					_ms.checkContains(Function,stream,"stream");
					_ms.newProperty(_this,"cache",[]);
					let strm=new (Stream)(stream);
					let self=_this;
					let get_45caching_45iterator=function* get_45caching_45iterator(){
						for(let _ of strm){
							self.cache.push(_);
							(yield _)
						}
					};
					_ms.newProperty(_this,"caching-iterator",get_45caching_45iterator())
				}
				[_ms.symbol(_63nth)](n){
					let _this=this;
					_ms.checkContains(Nat,n,"n");
					return (()=>{
						let _=_63nth(_this.cache,n);
						if(empty_63(_)){
							let n_45left=_45(n,count(_this.cache));
							return _63nth(Stream(_this["caching-iterator"]),n_45left)
						} else {
							return _
						}
					})()
				}
			};
			_ms.kindDo(_,Seq);
			self_45kind_33(_,_64_45Type);
			self_45impl_33(empty,_,thunk(new (_)(function*(){})));
			return _
		})();
		impl_33(iterator,Lazy_45Stream,function*(){
			let _this=this;
			(yield* iterator(_this.cache));
			(yield* _this["caching-iterator"])
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9TZXEvTGF6eS1TdHJlYW0ubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFXQSxrQ0FBbUIsS0FNaEI7O3VCQU1ELGdCQUFjO1NBaUNSO1lBaENMLEtBZ0NLLE9BL0JLO2FBQVQsU0FBUztLQUFBO0lBQUE7SUFFRixZQUFBO1NBNkJIO3VCQTdCVTtxQkE2QlYsY0EzQkc7S0FJVCxTQUFPLEtBQUksUUFBTztLQUVsQixTQXFCTTtLQW5CTiw2QkFDMEI7TUFBckIsUUFBQSxLQUFBLEtBQ0k7T0FDUCxnQkFBaUI7Y0FDVjtNQUFBO0tBQUE7cUJBZUgseUJBZGM7SUFBQTtnQkFFckIsU0FBTTtTQVlDO3VCQVpDO1lBRUY7TUFBQSxNQUFBLE9BVUMsWUFWVztNQUNoQixHQUFBLFNBQU8sR0FDQTtPQUFOLGFBQVMsSUFBRSxFQUFHLE1BUVY7Y0FQSixPQUFNLE9BT0YsMkJBUDRCO01BQUEsT0FFN0I7Y0FBRjtNQUFBO0tBQUE7SUFBQTtHQUFBO2dCQXhDbUI7R0FNdEIsZUFBWSxFQUFDO0dBRWIsZUFBVyxNQUFPLEVBQUUsTUFBTyxLQUFLLEdBQ0k7OztFQWtDdEMsUUFBTSxTQUFTLGNBQ2dCO09BQ3ZCO1dBREEsU0FDQTtXQUFBIiwiZmlsZSI6ImF0L1NlcS9MYXp5LVN0cmVhbS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
