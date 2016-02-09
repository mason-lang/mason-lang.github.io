"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../math/Number","./../at","./Seq","./Stream"],(exports,Number_0,_64_1,Seq_2,Stream_3)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(Number_0),Nat=_ms.get(_$0,"Nat"),_$1=_ms.getModule(_64_1),count=_ms.get(_$1,"count"),empty=_ms.get(_$1,"empty"),empty_63=_ms.get(_$1,"empty?"),from_45stream=_ms.get(_$1,"from-stream"),iterator=_ms.get(_$1,"iterator"),Seq=_ms.getDefaultExport(Seq_2),_$2=_ms.getModule(Seq_2),_63nth=_ms.get(_$2,"?nth"),Stream=_ms.getDefaultExport(Stream_3);
		let Lazy_45Stream=exports.default=(()=>{
			let _=class Lazy_45Stream{
				static [_ms.symbol(empty)](){
					let _this=this;
					return new (_this)(function*(){})
				}
				static [_ms.symbol(from_45stream)](_){
					let _this=this;
					return new (_this)(()=>{
						return iterator(_)
					})
				}
				constructor(stream){
					let _this=this;
					_ms.checkInstance(Function,stream,"stream");
					_this.cache=[];
					let strm=new (Stream)(stream);
					let self=_this;
					let get_45caching_45iterator=function* get_45caching_45iterator(){
						for(let _ of strm){
							self.cache.push(_);
							(yield _)
						}
					};
					_this["caching-iterator"]=get_45caching_45iterator()
				}
				*[_ms.symbol(iterator)](){
					let _this=this;
					(yield* iterator(_this.cache));
					(yield* _this["caching-iterator"])
				}
				[_ms.symbol(_63nth)](n){
					let _this=this;
					_ms.checkInstance(Nat,n,"n");
					return (()=>{
						let _=_63nth(_this.cache,n);
						if(empty_63(_)){
							let n_45left=(n-count(_this.cache));
							return _63nth(Stream(_this["caching-iterator"]),n_45left)
						} else {
							return _
						}
					})()
				}
			};
			_ms.traitDo(_,Seq);
			return _
		})();
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9TZXEvTGF6eS1TdHJlYW0ubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFNQSxrQ0FBbUI7O0lBS2pCLG1CQUFDLFNBQ1E7O1lBQVIsS0FBSSxPQUNRLFdBQUE7SUFBQTtJQUViLG1CQUFDLGdCQUFjLEVBQ0M7O1lBQWYsS0FBSSxPQUNNLElBQUE7YUFBVCxTQUFTO0tBQUE7SUFBQTtJQUVGLFlBQUEsT0FDZTs7dUJBRFI7S0FFaEIsWUFBVTtLQUlWLFNBQU8sS0FBSSxRQUFPO0tBRWxCLFNBQU87S0FFUCw2QkFDMEIsb0NBQUE7TUFBckIsUUFBQSxLQUFBLEtBQ0k7T0FDUCxnQkFBZ0I7Y0FDVjtNQUFBO0tBQUE7S0FDUiwwQkFBcUI7SUFBQTtJQUV0QixhQUFDLFlBQ2E7O2FBQU4sU0FBUzthQUNUOztJQUVSLFlBQUMsU0FBTyxFQUNLOzt1QkFESDtZQUVKO01BQUEsTUFBQSxPQUFLLFlBQU87TUFDaEIsR0FBQSxTQUFPLEdBQ0E7T0FBTixhQUFTLENBQUUsRUFBRyxNQUFNO2NBQ3BCLE9BQU0sT0FBTywyQkFBbUI7TUFBQSxPQUU3QjtjQUFIO01BQUE7S0FBQTtJQUFBO0dBQUE7aUJBekNxQiIsImZpbGUiOiJhdC9TZXEvTGF6eS1TdHJlYW0uanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
