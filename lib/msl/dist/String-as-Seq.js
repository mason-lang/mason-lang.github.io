"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./at/at","./at/at-Type","./at/Seq/Seq","./compare","./control","./Function","./to-string","./Type/Impl-Type","./Type/Kind","./Type/Method","./Type/Pred-Type","./Type/Type"],(exports,_64_0,_64_45Type_1,Seq_2,compare_3,control_4,Function_5,to_45string_6,Impl_45Type_7,Kind_8,Method_9,Pred_45Type_10,Type_11)=>{
	exports._get=_ms.lazy(()=>{
		let _64=_ms.getDefaultExport(_64_0),_$0=_ms.getModule(_64_0),count=_ms.get(_$0,"count"),empty_63=_ms.get(_$0,"empty?"),_64map=_ms.get(_$0,"@map"),_64_45Type=_ms.getDefaultExport(_64_45Type_1),_$1=_ms.getModule(_64_45Type_1),empty=_ms.get(_$1,"empty"),from_45stream=_ms.get(_$1,"from-stream"),Seq=_ms.getDefaultExport(Seq_2),_$2=_ms.getModule(compare_3),_61_63=_ms.get(_$2,"=?"),sort=_ms.get(_$2,"sort"),_$3=_ms.getModule(control_4),opr=_ms.get(_$3,"opr"),_$4=_ms.getModule(Function_5),thunk=_ms.get(_$4,"thunk"),to_45string=_ms.getDefaultExport(to_45string_6),_$5=_ms.getModule(Impl_45Type_7),Self_45Type=_ms.get(_$5,"Self-Type"),_$6=_ms.getModule(Kind_8),kind_33=_ms.get(_$6,"kind!"),self_45kind_33=_ms.get(_$6,"self-kind!"),_$7=_ms.getModule(Method_9),impl_45double_33=_ms.get(_$7,"impl-double!"),_$8=_ms.getModule(Pred_45Type_10),Opt=_ms.get(_$8,"Opt"),_$9=_ms.getModule(Type_11),_61_62=_ms.get(_$9,"=>");
		self_45kind_33(String,_64_45Type,(()=>{
			let built=new (global.Map)();
			_ms.setSub(built,empty,thunk(""));
			_ms.setSub(built,from_45stream,_=>{
				return from_45stream(Array,_)
			});
			return built
		})());
		impl_45double_33(_61_62,new (Self_45Type)(String),_64,(vals,joiner)=>{
			_ms.checkContains(_ms.sub(Opt,String),joiner,"joiner");
			joiner=opr(joiner,"");
			return _61_62(Array,_64map(vals,to_45string)).join(joiner)
		});
		exports.default=kind_33(String,Seq,(()=>{
			let built=new (global.Map)();
			_ms.setSub(built,count,function(){
				let _this=this;
				return _this.length
			});
			_ms.setSub(built,empty_63,function(){
				let _this=this;
				return _61_63(0,_this.length)
			});
			_ms.setSub(built,sort,function(_63sort_45by){
				let _this=this;
				_ms.checkContains(_ms.sub(Opt,Function),_63sort_45by,"?sort-by");
				return sort.default.call(_this,_63sort_45by).join("")
			});
			return built
		})());
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvU3RyaW5nLWFzLVNlcS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQWdCQSxlQUFXLE9BQU8sV0FDTSxLQUFBOztvQkFBdkIsTUFBUyxNQWtCZ0M7b0JBaEJ6QyxjQUFpQjtXQUNoQixjQUFZLE1BQU87R0FBQTs7O0VBR3JCLGlCQUFhLE9BQUksS0FBSSxhQUFVLFFBQVEsSUFBRyxDQUFBLEtBQUs7NkJBQU8sSUFBSTtVQUMvQyxJQUFJLE9BVzJCO1VBVHhDLE9BQUcsTUFBTyxPQUFLLEtBQUssbUJBQWlCO0VBQUE7a0JBRXZDLFFBQU0sT0FBTyxJQUNHLEtBQUE7O29CQUFmLE1BQ1c7UUFLUztXQUFBOztvQkFKcEIsU0FDWTtRQUdRO1dBSG5CLE9BQUcsRUFHZ0I7O29CQURwQixLQUFVLFNBQUE7UUFDVTs4QkFERCxJQUFJO1dBQ3JCLGtCQUFrQixNQUFLLG1CQUFnQjtHQUFBIiwiZmlsZSI6IlN0cmluZy1hcy1TZXEuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
