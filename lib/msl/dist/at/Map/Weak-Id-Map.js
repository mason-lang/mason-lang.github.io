"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../methods","./../../Type/Kind","./../at","./../at-Type","./../q","./Map","./Map-Type"],(exports,methods_0,Kind_1,_64_2,_64_45Type_3,_63_4,Map_5,Map_45Type_6)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(methods_0),del_45sub_33=_ms.get(_$0,"del-sub!"),set_45sub_33=_ms.get(_$0,"set-sub!"),_$1=_ms.getModule(Kind_1),kind_33=_ms.get(_$1,"kind!"),self_45kind_33=_ms.get(_$1,"self-kind!"),_$2=_ms.getModule(_64_2),empty_33=_ms.get(_$2,"empty!"),_$3=_ms.getModule(_64_45Type_3),empty=_ms.get(_$3,"empty"),_$4=_ms.getModule(_63_4),Opt_45_62_63=_ms.get(_$4,"Opt->?"),Map=_ms.getDefaultExport(Map_5),_$5=_ms.getModule(Map_5),_63get=_ms.get(_$5,"?get"),has_45key_63=_ms.get(_$5,"has-key?"),_64keys=_ms.get(_$5,"@keys"),Map_45Type=_ms.getDefaultExport(Map_45Type_6);
		let Weak_45Id_45Map=exports.default=(()=>{
			return WeakMap
		})();
		self_45kind_33(Weak_45Id_45Map,Map_45Type,(()=>{
			let built=new (global.Map)();
			_ms.setSub(built,empty,()=>{
				return new (Weak_45Id_45Map)()
			});
			return built
		})());
		kind_33(Weak_45Id_45Map,Map,(()=>{
			let built=new (global.Map)();
			_ms.setSub(built,_63get,function(key){
				let _this=this;
				return Opt_45_62_63(_this.get(key))
			});
			_ms.setSub(built,has_45key_63,function(key){
				let _this=this;
				return _this.has(key)
			});
			_ms.setSub(built,set_45sub_33,function(key,val){
				let _this=this;
				_this.set(key,val)
			});
			_ms.setSub(built,del_45sub_33,function(key){
				let _this=this;
				return (()=>{
					let _=_63get(_this,key);
					_this.delete(key);
					return _
				})()
			});
			_ms.setSub(built,_64keys,()=>{
				throw new (Error)(`Weak-Id-Map does not support \`keys\`.`)
			});
			_ms.setSub(built,empty_33,()=>{
				throw new (Error)(`Weak-Id-Map does not support \`empty!\`.`)
			});
			return built
		})());
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9NYXAvV2Vhay1JZC1NYXAubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFVQSxvQ0FDWSxLQUFBO1VBR1g7RUFBQTtFQUVELGVBQVcsZ0JBQVksV0FDUSxLQUFBOztvQkFBOUIsTUFDVTtXQUFULEtBQUk7R0FBQTs7O0VBRU4sUUFBTSxnQkFBWSxJQUNHLEtBQUE7O29CQUFwQixPQUFVLFNBQUE7UUFXUjtXQVZELGFBVUMsVUFWWTtHQUFBO29CQUVkLGFBQWMsU0FBQTtRQVFaO1dBQUEsVUFQSTtHQUFBO29CQUVOLGFBQWUsU0FBQSxJQUFJO1FBS2pCO0lBQUEsVUFKSSxJQUFJO0dBQUE7b0JBRVYsYUFBYyxTQUFBO1FBRVo7V0FESSxLQUNhO1dBRGIsT0FDSixNQURjO0tBQ2QsYUFBUTs7OztvQkFHVixRQUNXO0lBQVYsa0JBQU87O29CQUVSLFNBQ1k7SUFBWCxrQkFBTyIsImZpbGUiOiJhdC9NYXAvV2Vhay1JZC1NYXAuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
