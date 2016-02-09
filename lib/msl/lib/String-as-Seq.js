"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./at/at","./at/Seq/Seq","./compare","./control","./to-string","./Type/Impl-Type","./Type/Poly","./Type/Pred-Type","./Type/primitive","./Type/Type"],(exports,_64_0,Seq_1,compare_2,control_3,to_45string_4,Impl_45Type_5,Poly_6,Pred_45Type_7,primitive_8,Type_9)=>{
	exports._get=_ms.lazy(()=>{
		let _64=_ms.getDefaultExport(_64_0),_$0=_ms.getModule(_64_0),count=_ms.get(_$0,"count"),empty=_ms.get(_$0,"empty"),empty_63=_ms.get(_$0,"empty?"),from_45stream=_ms.get(_$0,"from-stream"),_64map=_ms.get(_$0,"@map"),Seq=_ms.getDefaultExport(Seq_1),_$1=_ms.getModule(compare_2),binary_61_63=_ms.get(_$1,"binary=?"),sort=_ms.get(_$1,"sort"),_$2=_ms.getModule(control_3),opr=_ms.get(_$2,"opr"),to_45string=_ms.getDefaultExport(to_45string_4),_$3=_ms.getModule(Impl_45Type_5),Self_45Type=_ms.get(_$3,"Self-Type"),_$4=_ms.getModule(Poly_6),impl_45double_33=_ms.get(_$4,"impl-double!"),_$5=_ms.getModule(Pred_45Type_7),Opt=_ms.get(_$5,"Opt"),_$6=_ms.getModule(primitive_8),Str=_ms.get(_$6,"Str"),_$7=_ms.getModule(Type_9),_61_62=_ms.get(_$7,"=>");
		impl_45double_33(_61_62,new (Self_45Type)(String),_64,(vals,joiner)=>{
			_ms.checkInstance(_ms.sub(Opt,Str),joiner,"joiner");
			joiner=opr(joiner,``);
			return _61_62(Array,_64map(vals,to_45string)).join(joiner)
		});
		_ms.traitWithDefs(String,Seq,{
			[_ms.symbol(empty)](){
				let _this=this;
				return ``
			},
			[_ms.symbol(from_45stream)](_){
				let _this=this;
				return from_45stream(Array,_)
			}
		},{
			[_ms.symbol(count)](){
				let _this=this;
				return _this.length
			},
			[_ms.symbol(empty_63)](){
				let _this=this;
				return _ms.eq(0,_this.length)
			},
			[_ms.symbol(binary_61_63)](other){
				let _this=this;
				return Object.is(_this,other)
			},
			[_ms.symbol(sort)](_63sort_45by){
				let _this=this;
				_ms.checkInstance(_ms.sub(Opt,Function),_63sort_45by,"?sort-by");
				return sort.default.call(_this,_63sort_45by).join(``)
			}
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvU3RyaW5nLWFzLVNlcS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQWVBLGlCQUFhLE9BQUksS0FBSSxhQUFVLFFBQVEsSUFBRyxDQUFBLEtBQUssU0FDZTs2QkFEUixJQUFJO1VBQy9DLElBQUksT0FBUTtVQUVyQixPQUFHLE1BQU8sT0FBSyxLQUFLLG1CQUFpQjtFQUFBO29CQUVoQyxPQUFPO0dBRVosWUFBQyxTQUNROztXQUFQOztHQUVGLFlBQUMsZ0JBQWMsRUFDQzs7V0FDZixjQUFZLE1BQU07R0FBQTtFQUFBO0dBRXBCLFlBQUMsU0FDUTs7V0FBUjs7R0FFRCxZQUFDLFlBQ1M7O2tCQUFOLEVBQUU7O0dBR04sWUFBQyxlQUFXLE1BQ0s7O3FCQUFaLE1BQUs7R0FBQTtHQUdWLFlBQUMsT0FBTyxhQUNzQjs7OEJBRGIsSUFBSTtXQUNuQixrQkFBa0IsTUFBSyxtQkFBZ0IiLCJmaWxlIjoiU3RyaW5nLWFzLVNlcS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
