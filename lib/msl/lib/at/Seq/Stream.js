"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../Generator","./../at","./Seq"],(exports,Generator_0,_64_1,Seq_2)=>{
	exports._get=_ms.lazy(()=>{
		let Generator=_ms.getDefaultExport(Generator_0),_$0=_ms.getModule(_64_1),empty=_ms.get(_$0,"empty"),from_45stream=_ms.get(_$0,"from-stream"),iterator=_ms.get(_$0,"iterator"),Seq=_ms.getDefaultExport(Seq_2);
		let Stream=exports.default=(()=>{
			let _=class Stream{
				static [_ms.symbol(empty)](){
					let _this=this;
					return new (Stream)(function*(){})
				}
				static [_ms.symbol(from_45stream)](_){
					let _this=this;
					return new (_this)(()=>{
						return iterator(_)
					})
				}
				constructor(make_45iterator){
					let _this=this;
					_ms.checkInstance(_ms.sub(Function,Generator),make_45iterator,"make-iterator");
					Object.defineProperty(_this,Symbol.iterator,(()=>{
						let built={};
						let value=built.value=make_45iterator;
						return built
					})())
				}
			};
			_ms.traitDo(_,Seq);
			return _
		})();
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9TZXEvU3RyZWFtLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBS0EsMkJBQWM7O0lBSVosbUJBQUMsU0FDUTs7WUFBUixLQUFJLFFBQ1UsV0FBQTtJQUFBO0lBRWYsbUJBQUMsZ0JBQWMsRUFDQzs7WUFBZixLQUFJLE9BQ00sSUFBQTthQUFULFNBQVM7S0FBQTtJQUFBO0lBRUYsWUFBQSxnQkFDaUM7OytCQURuQixTQUFTO0tBQ2hDLHNCQUFzQixNQUFLLGdCQUNlLEtBQUE7O01BQXpDLHNCQUFPOzs7OztpQkFkVSIsImZpbGUiOiJhdC9TZXEvU3RyZWFtLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
