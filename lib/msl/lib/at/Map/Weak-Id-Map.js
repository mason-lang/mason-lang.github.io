"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../polys","./../at","./../q","./Map"],(exports,polys_0,_64_1,_63_2,Map_3)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(polys_0),del_45sub_33=_ms.get(_$0,"del-sub!"),set_45sub_33=_ms.get(_$0,"set-sub!"),_$1=_ms.getModule(_64_1),empty_33=_ms.get(_$1,"empty!"),_$2=_ms.getModule(_63_2),Opt_45_62_63=_ms.get(_$2,"Opt->?"),Map=_ms.getDefaultExport(Map_3),_$3=_ms.getModule(Map_3),_63get=_ms.get(_$3,"?get"),has_45key_63=_ms.get(_$3,"has-key?"),_64keys=_ms.get(_$3,"@keys");
		let Weak_45Id_45Map=exports.default=(()=>{
			return WeakMap
		})();
		_ms.traitWithDefs(Weak_45Id_45Map,Map,{},{
			[_ms.symbol(_63get)](key){
				let _this=this;
				return Opt_45_62_63(_this.get(key))
			},
			[_ms.symbol(has_45key_63)](key){
				let _this=this;
				return _this.has(key)
			},
			[_ms.symbol(set_45sub_33)](key,val){
				let _this=this;
				_this.set(key,val)
			},
			[_ms.symbol(del_45sub_33)](key){
				let _this=this;
				return (()=>{
					let _=_63get(_this,key);
					_this.delete(key);
					return _
				})()
			},
			[_ms.symbol(_64keys)](){
				let _this=this;
				throw new (Error)(`Weak-Id-Map does not support \`keys\`.`)
			},
			[_ms.symbol(empty_33)](){
				let _this=this;
				throw new (Error)(`Weak-Id-Map does not support \`empty!\`.`)
			}
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9NYXAvV2Vhay1JZC1NYXAubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFPQSxvQ0FDWSxLQUFBO1VBR1g7RUFBQTtvQkFFTSxnQkFBWTtHQUNsQixZQUFDLFNBQU8sSUFDRzs7V0FBVixhQUFRLFVBQUs7R0FBQTtHQUVkLFlBQUMsZUFBVyxJQUNHOztXQUFkLFVBQUs7R0FBQTtHQUVOLFlBQUMsZUFBWSxJQUFJLElBQ0c7O0lBQW5CLFVBQUssSUFBSTtHQUFBO0dBRVYsWUFBQyxlQUFXLElBQ0c7O1dBQVQsS0FDYTtXQURiLE9BQUssTUFBSztLQUNkLGFBQVE7Ozs7R0FHVixZQUFDLFdBQ1M7O0lBQVQsa0JBQU87O0dBRVIsWUFBQyxZQUNVOztJQUFWLGtCQUFPIiwiZmlsZSI6ImF0L01hcC9XZWFrLUlkLU1hcC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
