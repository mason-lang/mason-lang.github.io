"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../Generator","./../../Type/Kind","./../at","./../at-Type","./Seq"],(exports,Generator_0,Kind_1,_64_2,_64_45Type_3,Seq_4)=>{
	exports._get=_ms.lazy(()=>{
		let Generator=_ms.getDefaultExport(Generator_0),_$0=_ms.getModule(Kind_1),self_45kind_33=_ms.get(_$0,"self-kind!"),_$1=_ms.getModule(_64_2),iterator=_ms.get(_$1,"iterator"),_64_45Type=_ms.getDefaultExport(_64_45Type_3),_$2=_ms.getModule(_64_45Type_3),empty=_ms.get(_$2,"empty"),from_45stream=_ms.get(_$2,"from-stream"),Seq=_ms.getDefaultExport(Seq_4);
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
					_ms.checkContains(_ms.sub(Function,Generator),make_45iterator,"make-iterator");
					Object.defineProperty(_this,Symbol.iterator,(()=>{
						let built={};
						let value=built.value=make_45iterator;
						return built
					})())
				}
			};
			_ms.kindDo(_,Seq);
			self_45kind_33(_,_64_45Type);
			return _
		})();
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9TZXEvU3RyZWFtLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBT0EsMkJBQWMsS0FLWDs7dUJBR0Q7U0FTc0I7WUFSckIsS0FBSSxRQUNVOzt1QkFFZixnQkFBYztTQUtRO1lBSnJCLEtBSXFCLE9BSFg7YUFBVCxTQUFTO0tBQUE7SUFBQTtJQUVGLFlBQUE7U0FDYTsrQkFEQyxTQUFTO0tBQ2hDLHNCQUFzQixNQUFLLGdCQUNlLEtBQUE7O01BQXpDLHNCQUFPOzs7OztnQkFsQlM7R0FLakIsZUFBWSxFQUFDIiwiZmlsZSI6ImF0L1NlcS9TdHJlYW0uanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
