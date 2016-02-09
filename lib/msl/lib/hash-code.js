"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./at/at","./js","./math/Number","./Type/Poly"],(exports,_64_0,js_1,Number_2,Poly_3)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(_64_0),empty_63=_ms.get(_$0,"empty?"),_$1=_ms.getModule(js_1),defined_63=_ms.get(_$1,"defined?"),js_45bar=_ms.get(_$1,"js-bar"),_$2=_ms.getModule(Number_2),Int=_ms.get(_$2,"Int"),Poly=_ms.getDefaultExport(Poly_3),_$3=_ms.getModule(Poly_3),impl_33=_ms.get(_$3,"impl!");
		let _45_62int=exports["->int"]=_=>js_45bar(0,_);
		let hash_45code=exports.default=new (Poly)((()=>{
			let built={};
			built.name="hash-code";
			let args=built.args=[];
			let returns=built.returns=Int;
			let allow_45null_63=built["allow-null?"]=true;
			let _default=built.default=function _default(){
				let _this=this;
				return (()=>{
					switch(_this){
						case null:{
							return 108
						}
						case void 0:{
							return 109
						}
						default:
							let cached=hashes_45cache.get(_this);
							return (defined_63(cached)?cached:(()=>{
								hashes_45cache.set(_this,17);
								let hash=17;
								for(let key of Object.keys(_this)){
									let val=_this[key];
									let val_45hash=hash_45code(val);
									hash=_45_62int((hash*23));
									hash=_45_62int((hash+val_45hash))
								};
								hashes_45cache.set(_this,hash);
								return hash
							})())
					}
				})()
			};
			return built
		})());
		let hashes_45cache=new (WeakMap)();
		impl_33(hash_45code,Boolean,function(){
			let _this=this;
			return (_this?1:0)
		});
		impl_33(hash_45code,Function,function(){
			let _this=this;
			return hash_45code((()=>{
				let _=_this.name;
				if(empty_63(_)){
					return _this.toString()
				} else {
					return _
				}
			})())
		});
		impl_33(hash_45code,String,function(){
			let _this=this;
			let hash=13;
			let i=_this.length;
			for(;;){
				hash=_45_62int((hash+_this.charCodeAt(i)));
				hash=_45_62int((hash*31));
				if(_ms.eq(i,0)){
					break
				};
				i=(i-1)
			};
			return hash
		});
		impl_33(hash_45code,Symbol,()=>{
			return 42
		});
		impl_33(hash_45code,Number,function(){
			let _this=this;
			return _45_62int(_this)
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvaGFzaC1jb2RlLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBT0Esa0NBQVMsU0FBTyxFQUFFO0VBRWxCLGdDQUFXLEtBQUksTUFDSSxLQUFBOztjQUVsQjtHQUNBLG9CQUFNO0dBQ04sMEJBQVM7R0FDVCx5Q0FBYTtHQUNiLDJCQUNXLG1CQUFBOztXQUFIO1lBQUE7TUFDTixLQUFBLEtBQ0k7Y0FBSDtNQUFBO01BQ0QsS0FBQSxPQUNTO2NBQVI7TUFBQTtNQUVHO09BQ0gsV0FBUyxtQkFBaUI7Y0FDckIsQ0FBQyxXQUFTLFFBQVEsT0FDTSxLQUFBO1FBQzVCLG1CQUFpQixNQUFLO1FBQ3RCLFNBQU87UUFDSCxRQUFBLE9BQU8sWUFBWSxPQUNJO1NBQTFCLFFBQU0sTUFBRTtTQUNSLGVBQVcsWUFBVTtjQUNiLFVBQU0sQ0FBRSxLQUFLO2NBQ2IsVUFBTSxDQUFFLEtBQUs7UUFBQTtRQUN0QixtQkFBaUIsTUFBSztlQUN0QjtPQUFBO0tBQUE7SUFBQTtHQUFBOzs7RUFFTCxtQkFBZSxLQUFJO0VBR2xCLFFBQU0sWUFBVSxRQUNVLFVBQUE7O1VBQXBCLENBQUEsTUFBSyxFQUFFO0VBQUE7RUFFYixRQUFNLFlBQVUsU0FDVyxVQUFBOztVQUMxQixZQUFlO0lBQUEsTUFBQTtJQUNkLEdBQUEsU0FBTyxHQUNBO1lBQU47V0FFRztZQUFIO0lBQUE7R0FBQTtFQUFBO0VBR0gsUUFBTSxZQUFVLE9BQ1MsVUFBQTs7R0FBeEIsU0FBTztHQUNQLE1BQUk7R0FFRCxPQUFBO1NBQU0sVUFBTSxDQUFFLEtBQU0saUJBQVk7U0FDMUIsVUFBTSxDQUFFLEtBQUs7SUFFbEIsVUFBRyxFQUFFLEdBQ0M7S0FBUjtJQUFBO01BQ0ksQ0FBRSxFQUFFO0dBQUE7VUFDVjtFQUFBO0VBRUQsUUFBTSxZQUFVLE9BQ1EsSUFBQTtVQUV2QjtFQUFBO0VBR0QsUUFBTSxZQUFVLE9BQ1MsVUFBQTs7VUFBeEIsVUFBTTtFQUFBIiwiZmlsZSI6Imhhc2gtY29kZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
