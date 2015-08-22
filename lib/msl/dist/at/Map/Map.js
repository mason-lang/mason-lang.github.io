"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../compare","./../../methods","./../../to-string","./../../Type/Type","./../at","./../at-Type","./../q","./Id-Map"],(exports,compare_0,methods_1,to_45string_2,Type_3,_64_4,_64_45Type_5,_63_6,Id_45Map_7)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_$1=_ms.getModule(methods_1),sub=_ms.get(_$1,"sub"),to_45string=_ms.getDefaultExport(to_45string_2),_$2=_ms.getModule(to_45string_2),inspect=_ms.get(_$2,"inspect"),_$3=_ms.getModule(Type_3),_61_62=_ms.get(_$3,"=>"),type_45of=_ms.get(_$3,"type-of"),_64=_ms.getDefaultExport(_64_4),_$4=_ms.getModule(_64_4),all_63=_ms.get(_$4,"all?"),count=_ms.get(_$4,"count"),empty_63=_ms.get(_$4,"empty?"),_64map_126=_ms.get(_$4,"@map~"),_$5=_ms.getModule(_64_45Type_5),empty=_ms.get(_$5,"empty"),_$6=_ms.getModule(_63_6),_63_45or=_ms.get(_$6,"?-or"),un_45_63=_ms.get(_$6,"un-?"),Id_45Map=_ms.lazy(()=>_ms.getDefaultExport(Id_45Map_7));
		let Map=exports.default=_ms.kind("Map",[_64],{},{
			[_ms.symbol(to_45string)](){
				let _this=this;
				return inspect(_this)
			},
			[_ms.symbol(inspect)](){
				let _this=this;
				let parts=_64map_126(_this,pair=>{
					return `${inspect(_ms.sub(pair,0))} -> ${inspect(_ms.sub(pair,1))}`
				});
				return `${_this.constructor.name}
	${_61_62(String,parts,`\n\t`)}`
			},
			[_ms.symbol(_61_63)](other){
				let _this=this;
				return (_61_63(type_45of(_this),type_45of(other))&&map_61_63(_this,other))
			},
			[_ms.symbol(sub)](key){
				let _this=this;
				return un_45_63(_63get(_this,key),_ms.lazy(()=>`${_this} does not contain ${key}.`))
			}
		});
		let _63get=exports["?get"]=_ms.method("?get",["key"]);
		let has_45key_63=exports["has-key?"]=_ms.method("has-key?",["key"],function(key){
			let _this=this;
			return ! empty_63(_63get(_this,key))
		});
		let _64keys=exports["@keys"]=_ms.method("@keys",[],function(){
			let _this=this;
			return _61_62(Array,_64map_126(_this,pair=>{
				return _ms.sub(pair,0)
			}))
		});
		let _64values=exports["@values"]=_ms.method("@values",[],function(){
			let _this=this;
			return _61_62(Array,_64map_126(_this,pair=>{
				return _ms.sub(pair,1)
			}))
		});
		let make_45map=exports["make-map"]=function make_45map(_64key,get_45value){
			_ms.checkContains(_64,_64key,"@key");
			_ms.checkContains(Function,get_45value,"get-value");
			let map=empty(_ms.unlazy(Id_45Map));
			for(let _ of _64key){
				_ms.setSub(map,_,get_45value(_),"init")
			};
			return map
		};
		let map_61_63=exports["map=?"]=function map_61_63(a,b){
			_ms.checkContains(Map,a,"a");
			_ms.checkContains(Map,b,"b");
			return (_61_63(count(a),count(b))&&(()=>{
				return all_63(a,pair=>{
					let key=_ms.sub(pair,0);
					let val=_ms.sub(pair,1);
					let _63bk=_63get(b,key);
					return (! empty_63(_63bk)&&_61_63(val,_63bk.val))
				})
			})())
		};
		let get_45or_45add_33=exports["get-or-add!"]=_ms.method("get-or-add!",["key","default-val"],function(key,default_45val){
			let _this=this;
			return _63_45or(_63get(_this,key),_ms.lazy(()=>(()=>{
				_ms.setSub(_this,key,_ms.unlazy(default_45val),"init");
				return _ms.unlazy(default_45val)
			})()))
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9NYXAvTWFwLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBV0Esd0NBQVU7ZUFHVDtRQStERTtXQTlERCxRQThEQztHQUFBO2VBNURGO1FBNERFO0lBeERELFVBQVEsV0F3RFAsTUF4RG1CO1lBQ2xCLEdBQUUsZ0JBQVEsS0FBSyxVQUFTLGdCQUFRLEtBQUs7O1dBRXRDLEdBcURBLDJCQXBERyxPQUFHLE9BQU8sTUFBTzs7ZUFFdEIsU0FBSTtRQWtERjtXQWpERCxDQUFLLE9BQUksVUFpRFIsT0FqRHVCLFVBQVEsU0FBUyxVQWlEeEMsTUFqRG1EO0dBQUE7ZUFFckQsTUFBSztRQStDSDtXQTlDRCxTQUFNLE9BOENMLE1BOUNlLGtCQUFPLEdBOEN0QiwwQkE5QzhDOzs7RUFHaEQ7RUFJQSxtRUFBa0IsU0FBQTtPQXVDaEI7VUFyQ0QsRUFBSyxTQUFRLE9BcUNaLE1BckNzQjtFQUFBO0VBRXhCLG1EQUNlO09Ba0NiO1VBaENELE9BQUcsTUFBTyxXQWdDVCxNQWhDcUI7bUJBQ3JCLEtBQUs7R0FBQTtFQUFBO0VBRVAseURBQ2lCO09BNEJmO1VBMUJELE9BQUcsTUFBTyxXQTBCVCxNQTFCcUI7bUJBQ3JCLEtBQUs7R0FBQTtFQUFBO0VBR1AsbUNBQVcsb0JBQUEsT0FBTztxQkFBRjtxQkFBWTtHQUczQixRQUFNO0dBQ0YsUUFBQSxLQUFBLE9BQ0k7ZUFBUCxJQUFLLEVBQUksWUFBVTs7VUFDcEI7RUFBQTtFQUVELCtCQUFRLG1CQUFBLEVBQU07cUJBQUo7cUJBQU07VUFFZixDQUFLLE9BQUksTUFBTSxHQUFJLE1BQU0sS0FDRyxLQUFBO1dBQTNCLE9BQUssRUFBRztLQUVQLGdCQUFNLEtBQUs7S0FDWCxnQkFBTSxLQUFLO0tBQ1gsVUFBTSxPQUFLLEVBQUU7WUFDYixDQUFLLEVBQUksU0FBTyxRQUFNLE9BQUcsSUFBSTs7OztFQUdoQyw0RkFBcUIsU0FBQSxJQUFJO09BR3ZCO1VBREQsU0FBTSxPQUNMLE1BRGUsa0JBQ00sS0FBQTtlQUFyQixNQUFLIiwiZmlsZSI6ImF0L01hcC9NYXAuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
