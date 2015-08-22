"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../compare","./../Function","./../js","./../math/Number","./../math/methods","./../private/bootstrap","./../Type/Kind","./../Type/Method","./../Type/Pred-Type","./at","./at-Type","./Seq/Seq"],(exports,compare_0,Function_1,js_2,Number_3,methods_4,bootstrap_5,Kind_6,Method_7,Pred_45Type_8,_64_9,_64_45Type_10,Seq_11)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(compare_0),_60_63=_ms.get(_$0,"<?"),_60_61_63=_ms.get(_$0,"<=?"),_62_61_63=_ms.get(_$0,">=?"),same_63=_ms.get(_$0,"same?"),_$1=_ms.getModule(Function_1),thunk=_ms.get(_$1,"thunk"),_$2=_ms.getModule(js_2),defined_63=_ms.get(_$2,"defined?"),_$3=_ms.getModule(Number_3),Nat=_ms.get(_$3,"Nat"),remainder=_ms.get(_$3,"remainder"),_$4=_ms.getModule(methods_4),_43=_ms.get(_$4,"+"),_45=_ms.get(_$4,"-"),_42=_ms.get(_$4,"*"),_47=_ms.get(_$4,"/"),_$5=_ms.getModule(bootstrap_5),msDef=_ms.get(_$5,"msDef"),_$6=_ms.getModule(Kind_6),self_45kind_33=_ms.get(_$6,"self-kind!"),_$7=_ms.getModule(Method_7),self_45impl_33=_ms.get(_$7,"self-impl!"),_$8=_ms.getModule(Pred_45Type_8),Opt=_ms.get(_$8,"Opt"),_64=_ms.getDefaultExport(_64_9),_$9=_ms.getModule(_64_9),count=_ms.get(_$9,"count"),iterator=_ms.get(_$9,"iterator"),_64_45Type=_ms.getDefaultExport(_64_45Type_10),_$10=_ms.getModule(_64_45Type_10),empty=_ms.get(_$10,"empty"),from_45stream=_ms.get(_$10,"from-stream"),_$11=_ms.getModule(Seq_11),_63nth=_ms.get(_$11,"?nth"),_64reverse=_ms.get(_$11,"@reverse");
		let Range=exports.default=(()=>{
			let _=class Range{
				static [_ms.symbol(from_45stream)](_){
					let _this=this;
					return _
				}
				constructor(start,end,step){
					let _this=this;
					_ms.checkContains(Number,start,"start");
					_ms.checkContains(Number,end,"end");
					_ms.checkContains(_ms.sub(Opt,Number),step,"step");
					_ms.newProperty(_this,"start",start);
					_ms.newProperty(_this,"end",end);
					_ms.newProperty(_this,"step",(()=>{
						let _=step;
						if(defined_63(_)){
							_ms.assert(same_63,Math.sign,_,_45(end,start));
							return _
						} else {
							return Math.sign(_45(end,start))
						}
					})())
				}
				by(step){
					let _this=this;
					return new (Range)(_this.start,_this.end,step)
				}
				length(){
					let _this=this;
					return _45(_this.end,_this.start)
				}
				*[_ms.symbol(iterator)](){
					let _this=this;
					let cur=_this.start;
					for(;;){
						let break_45cond=(yield* function*(){
							if(_60_63(0,_this.step)){
								return _62_61_63(cur,_this.end)
							} else {
								return _60_61_63(cur,_this.end)
							}
						}());
						if(break_45cond){
							break
						};
						(yield cur);
						cur=_43(cur,_this.step)
					}
				}
				[_ms.symbol(_63nth)](n){
					let _this=this;
					_ms.checkContains(Nat,n,"n");
					let it=_43(_this.start,_42(_this.step,n));
					return (_60_63(it,_this.end)?_ms.some((()=>{
						return it
					})()):_ms.None)
				}
				[_ms.symbol(count)](){
					let _this=this;
					return Math.floor(_47(_this.length(),_this.step))
				}
				[_ms.symbol(_64reverse)](){
					let _this=this;
					let new_45step=_42(- 1,_this.step);
					let rem=remainder(_45(_this.end,_this.start),_this.step);
					return (()=>{
						switch(rem){
							case 0:{
								return new (Range)(_45(_this.end,_this.step),_45(_this.start,_this.step),new_45step)
							}
							default:return new (Range)(_45(_this.end,rem),_this.start,new_45step)
						}
					})()
				}
			};
			_ms.kindDo(_,_64);
			self_45kind_33(_,_64_45Type);
			self_45impl_33(empty,_,thunk(new (_)(0,0)));
			return _
		})();
		msDef("range",(start,end,exclusive_63)=>{
			if(! exclusive_63){
				end=_43(end,Math.sign(_45(end,start)))
			};
			return new (Range)(start,end)
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9SYW5nZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQWNBLDBCQUFhLEtBS1Y7O3VCQUtELGdCQUFjO1NBZ0RrQjtZQTdDOUI7SUFBQTtJQUVPLFlBQUEsTUFBYSxJQUFXO1NBMkNEO3VCQTNDakI7dUJBQVc7K0JBQVksSUFBSTtxQkEyQ1YsY0ExQ3ZCO3FCQTBDdUIsWUF6Q3pCO3FCQXlDeUIsYUF4Q25CO01BQUEsTUFBQTtNQUNaLEdBQUEsV0FBUyxHQUNBO2tCQUFELFFBQU0sVUFBVyxFQUFFLElBQUUsSUFBSTtjQUMvQjtNQUFBLE9BRUU7Y0FBSCxVQUFXLElBQUUsSUFBSTtNQUFBO0tBQUE7SUFBQTtPQUVmO1NBaUM0QjtZQWhDaEMsS0FBSSxPQWdDNEIsc0JBaENWO0lBQUE7O1NBZ0NVO1lBN0JoQyxJQTZCZ0M7O2lCQTNCakM7U0EyQmlDO0tBMUJoQyxRQTBCZ0M7S0F4QjdCLE9BQUE7TUFBRixpQkFDaUI7T0FBaEIsR0FBQSxPQUFHLEVBdUIyQixZQXRCcEI7ZUFBVCxVQUFJLElBc0J5QjtjQXBCMUI7ZUFBSCxVQUFJLElBb0J5Qjs7O01BbkI1QixHQUFBLGFBQ1U7T0FBWjtNQUFBO2FBRUs7VUFDQyxJQUFFLElBZXNCOzs7Z0JBWGpDLFNBQU07U0FXMkI7dUJBWHpCO0tBRVAsT0FBSyxJQVMyQixZQVRqQixJQVNpQixXQVRUO1lBQ3BCLENBQUEsT0FBRyxHQVEwQix5QkFQbkI7YUFBWjtLQUFBOztnQkFFRjtTQUtpQztZQUpoQyxXQUFZLElBSW9COztnQkFGakM7U0FFaUM7S0FEaEMsZUFBVyxJQUFFLElBQ21CO0tBQWhDLFFBQU0sVUFBVyxJQUFlO1lBQ3pCO2FBQUE7WUFDTixFQUNDO2VBQUEsS0FBSSxPQUFPLElBSG1CLHNCQUdKLElBSEksd0JBR1k7T0FBQTtzQkFFMUMsS0FBSSxPQUFPLElBTG1CLFVBS1osS0FMWSxZQUtBO01BQUE7S0FBQTtJQUFBO0dBQUE7Z0JBL0RoQjtHQUtoQixlQUFZLEVBQUM7R0FFYixlQUFXLE1BQU8sRUFBRSxNQUFPLEtBQUssR0FBQyxFQUFFOzs7RUEwRHJDLE1BQU8sUUFBTyxDQUFBLE1BQU0sSUFBSTtHQUNoQixLQUFBLGFBQ1U7UUFBVCxJQUFFLElBQUssVUFBVyxJQUFFLElBQUk7R0FBQTtVQUNoQyxLQUFJLE9BQU0sTUFBTTtFQUFBIiwiZmlsZSI6ImF0L1JhbmdlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
