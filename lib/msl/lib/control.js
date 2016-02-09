"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./js","./Type/Pred-Type","./at/Seq/Seq"],(exports,js_0,Pred_45Type_1,Seq_2)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(js_0),defined_63=_ms.get(_$0,"defined?"),_$1=_ms.getModule(Pred_45Type_1),Opt=_ms.get(_$1,"Opt"),_$2=_ms.lazyGetModule(Seq_2),_43_43_62_33=_ms.lazyProp(_$2,"++>!");
		let do_45times_33=exports["do-times!"]=function do_45times_33(n_45times,action){
			if(! (n_45times>=0))throw new (Error)("Assertion failed.");
			for(;;){
				if(_ms.eq(n_45times,0)){
					break
				};
				action();
				n_45times=(n_45times-1)
			}
		};
		let opr=exports.opr=function opr(_,_default){
			_ms.checkInstance(Opt,_,"_");
			return (defined_63(_)?_:_ms.unlazy(_default))
		};
		let build=exports.build=function build(calls_45build){
			_ms.checkInstance(Function,calls_45build,"calls-build");
			return (()=>{
				let arr=[];
				calls_45build(_=>{
					_ms.unlazy(_43_43_62_33)(arr,[_])
				});
				return arr
			})()
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvY29udHJvbC5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQU1BLHVDQUFhLHVCQUFBLFVBQVEsT0FDTTtHQUVuQixLQUFBLENBQUksV0FBUTtHQUdoQixPQUFBO0lBQUMsVUFBRyxVQUFRLEdBQ0M7S0FBZDtJQUFBO0lBQ0Q7Y0FDVyxDQUFFLFVBQVE7R0FBQTtFQUFBO0VBRXZCLG9CQUFNLGFBQUEsRUFBTSxTQUNRO3FCQURaO1VBRUYsQ0FBQSxXQUFTLEdBQUM7O0VBR2hCLHdCQUFRLGVBQUEsY0FDb0I7cUJBRFI7VUFHZCxLQUNTO1lBRFQ7SUFDSixjQUFjLEdBQ0M7OEJBQVQsSUFBSSxDQUFDO0lBQUEiLCJmaWxlIjoiY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
