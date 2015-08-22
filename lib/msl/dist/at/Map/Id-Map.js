"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../methods","./../../Type/Method","./../../Type/Kind","./../at","./../at-Type","./../q","./../Seq/Stream","./Map","./Map-Type"],(exports,methods_0,Method_1,Kind_2,_64_3,_64_45Type_4,_63_5,Stream_6,Map_7,Map_45Type_8)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(methods_0),del_45sub_33=_ms.get(_$0,"del-sub!"),set_45sub_33=_ms.get(_$0,"set-sub!"),_$1=_ms.getModule(Method_1),impl_33=_ms.get(_$1,"impl!"),_$2=_ms.getModule(Kind_2),kind_33=_ms.get(_$2,"kind!"),self_45kind_33=_ms.get(_$2,"self-kind!"),_$3=_ms.getModule(_64_3),count=_ms.get(_$3,"count"),empty_33=_ms.get(_$3,"empty!"),_$4=_ms.getModule(_64_45Type_4),empty=_ms.get(_$4,"empty"),_$5=_ms.getModule(_63_5),Opt_45_62_63=_ms.get(_$5,"Opt->?"),Stream=_ms.getDefaultExport(Stream_6),Map=_ms.getDefaultExport(Map_7),_$6=_ms.getModule(Map_7),_63get=_ms.get(_$6,"?get"),has_45key_63=_ms.get(_$6,"has-key?"),_64keys=_ms.get(_$6,"@keys"),_64values=_ms.get(_$6,"@values"),Map_45Type=_ms.getDefaultExport(Map_45Type_8);
		let Id_45Map=exports.default=(()=>{
			return global.Map
		})();
		impl_33(set_45sub_33,Id_45Map,function(key,val){
			let _this=this;
			_this.set(key,val)
		});
		self_45kind_33(Id_45Map,Map_45Type,(()=>{
			let built=new (global.Map)();
			_ms.setSub(built,empty,()=>{
				return new (Id_45Map)()
			});
			return built
		})());
		kind_33(Id_45Map,Map,(()=>{
			let built=new (global.Map)();
			_ms.setSub(built,count,function(){
				let _this=this;
				return _this.size
			});
			_ms.setSub(built,_63get,function(key){
				let _this=this;
				return Opt_45_62_63(_this.get(key))
			});
			_ms.setSub(built,has_45key_63,function(key){
				let _this=this;
				return _this.has(key)
			});
			_ms.setSub(built,_64keys,function(){
				let _this=this;
				return new (Stream)(()=>{
					return _this.keys()
				})
			});
			_ms.setSub(built,_64values,function(){
				let _this=this;
				return new (Stream)(()=>{
					return _this.values()
				})
			});
			_ms.setSub(built,empty_33,function(){
				let _this=this;
				_this.clear()
			});
			_ms.setSub(built,del_45sub_33,function(key){
				let _this=this;
				return (()=>{
					let _=_63get(_this,key);
					_this.delete(key);
					return _
				})()
			});
			return built
		})());
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9NYXAvSWQtTWFwLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBYUEsNkJBQ08sS0FBQTtVQUVOOztFQUdELFFBQU0sYUFBUyxTQUFVLFNBQUEsSUFBSTtPQThCMUI7R0FBQSxVQTdCRyxJQUFJO0VBQUE7RUFFVixlQUFXLFNBQU8sV0FDUSxLQUFBOztvQkFBekIsTUFDVTtXQUFULEtBQUk7R0FBQTs7O0VBRU4sUUFBTSxTQUFPLElBQ0csS0FBQTs7b0JBQWYsTUFDVztRQXFCVDtXQUFBOztvQkFuQkYsT0FBVSxTQUFBO1FBbUJSO1dBbEJELGFBa0JDLFVBbEJZO0dBQUE7b0JBRWQsYUFBYyxTQUFBO1FBZ0JaO1dBQUEsVUFmSTtHQUFBO29CQUVOLFFBQ1c7UUFZVDtXQVpELEtBQUksUUFDUTtZQVdYOzs7b0JBVEYsVUFDYTtRQVFYO1dBUkQsS0FBSSxRQUNRO1lBT1g7OztvQkFMRixTQUNhO1FBSVg7SUFBQTs7b0JBRkYsYUFBYyxTQUFBO1FBRVo7V0FESSxLQUNhO1dBRGIsT0FDSixNQURjO0tBQ2QsYUFBUSIsImZpbGUiOiJhdC9NYXAvSWQtTWFwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
