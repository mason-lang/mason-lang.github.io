"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../compare","./../control","./../Type/Poly","./../Type/Pred-Type","./../Type/primitive"],(exports,compare_0,control_1,Poly_2,Pred_45Type_3,primitive_4)=>{
	exports._get=_ms.lazy(()=>{
		let compare=_ms.getDefaultExport(compare_0),_$0=_ms.getModule(control_1),opr=_ms.get(_$0,"opr"),_$1=_ms.getModule(Poly_2),impl_33=_ms.get(_$1,"impl!"),Pred_45Type=_ms.getDefaultExport(Pred_45Type_3),_$2=_ms.getModule(Pred_45Type_3),Opt=_ms.get(_$2,"Opt"),_$3=_ms.getModule(primitive_4),Num=_ms.get(_$3,"Num");
		let Int=exports.Int=new (Pred_45Type)((()=>{
			let built={};
			built.name="Int";
			let predicate=built.predicate=Number.isSafeInteger;
			return built
		})());
		let Nat=exports.Nat=new (Pred_45Type)((()=>{
			let built={};
			built.name="Nat";
			let predicate=built.predicate=_=>(_ms.hasInstance(Int,_)&&(_>=0));
			return built
		})());
		impl_33(compare,Number,function(other){
			let _this=this;
			_ms.checkInstance(Num,other,"other");
			return (_this-other)
		});
		let modulo=exports.modulo=function modulo(numerator,denominator){
			_ms.checkInstance(Num,numerator,"numerator");
			_ms.checkInstance(Num,denominator,"denominator");
			return (()=>{
				if((numerator<0)){
					return (Math.abs(denominator)+(numerator%denominator))
				} else {
					return (numerator%denominator)
				}
			})()
		};
		let int_47=exports["int/"]=function int_47(a,b){
			_ms.checkInstance(Num,a,"a");
			_ms.checkInstance(Num,b,"b");
			return Math.floor((a/b))
		};
		let divisible_63=exports["divisible?"]=function divisible_63(a,b){
			_ms.checkInstance(Num,a,"a");
			_ms.checkInstance(Num,b,"b");
			return _ms.eq(0,(a%b))
		};
		let log_45base=exports["log-base"]=function log_45base(base,n){
			_ms.checkInstance(Num,base,"base");
			_ms.checkInstance(Num,n,"n");
			return (Math.log(n)/Math.log(base))
		};
		let nearest_45ceil=exports["nearest-ceil"]=function nearest_45ceil(_,step){
			_ms.checkInstance(Num,_,"_");
			_ms.checkInstance(Num,step,"step");
			return (step*Math.ceil((_/step)))
		};
		let nearest_45floor=exports["nearest-floor"]=function nearest_45floor(_,step){
			_ms.checkInstance(Num,_,"_");
			_ms.checkInstance(Num,step,"step");
			return (step*Math.floor((_/step)))
		};
		let nearest_45round=exports["nearest-round"]=function nearest_45round(_,step){
			_ms.checkInstance(Num,_,"_");
			_ms.checkInstance(Num,step,"step");
			return (step*Math.round((_/step)))
		};
		let near_63=exports["near?"]=function near_63(a,b,sig_45figs){
			_ms.checkInstance(Num,b,"b");
			_ms.checkInstance(_ms.sub(Opt,Nat),sig_45figs,"sig-figs");
			sig_45figs=opr(sig_45figs,6);
			return (()=>{
				if(_ms.eq(a,0)){
					return near_450_63(b,sig_45figs)
				} else if(_ms.eq(b,0)){
					return near_450_63(a,sig_45figs)
				} else {
					let avg_45mag=((Math.abs(a)+Math.abs(b))/2);
					let n_45digits_45avg_45mag=Math.floor(Math.log10(avg_45mag));
					let scale=Math.pow(10,- n_45digits_45avg_45mag);
					let scaled_45diff=((a*scale)-(b*scale));
					let epsilon=Math.pow(10,- sig_45figs);
					return (Math.abs(scaled_45diff)<epsilon)
				}
			})()
		};
		let near_450_63=exports["near-0?"]=function near_450_63(_,sig_45figs){
			_ms.checkInstance(_ms.sub(Opt,Nat),sig_45figs,"sig-figs");
			sig_45figs=opr(sig_45figs,6);
			let max=Math.pow(10,(- 1*sig_45figs));
			return (Math.abs(_)<max)
		};
		let mid=exports.mid=function mid(a,b){
			_ms.checkInstance(Num,a,"a");
			_ms.checkInstance(Num,b,"b");
			return ((a+b)/2)
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvbWF0aC9OdW1iZXIubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFPQSxvQkFBSyxLQUFJLGFBQ1MsS0FBQTs7Y0FHakI7R0FDQSw4QkFBVzs7O0VBRVosb0JBQUssS0FBSSxhQUNTLEtBQUE7O2NBQ2pCO0dBQ0EsaUNBQWEsaUJBQUssSUFBRCxJQUFLLENBQUksR0FBRTs7O0VBSTVCLFFBQU0sUUFBUSxPQUFTLFNBQUEsTUFDUzs7cUJBREg7VUFDNUIsQ0FBRSxNQUFLO0VBQUE7RUFHUiwwQkFBUyxnQkFBQSxVQUFjLFlBQ2U7cUJBRG5CO3FCQUFnQjtVQUk5QjtJQUFILEdBQUEsQ0FBRyxVQUFVLEdBQ0M7WUFBYixDQUFHLFNBQVMsYUFBYSxDQUFFLFVBQVU7SUFBQSxPQUVsQztZQUFILENBQUUsVUFBVTtJQUFBO0dBQUE7RUFBQTtFQUVmLDJCQUFPLGdCQUFBLEVBQU0sRUFDSztxQkFEVDtxQkFBTTtVQUdkLFdBQVcsQ0FBRSxFQUFFO0VBQUE7RUFFaEIsdUNBQWEsc0JBQUEsRUFBTSxFQUNLO3FCQURUO3FCQUFNO2lCQUVqQixFQUFFLENBQUUsRUFBRTtFQUFBO0VBR1YsbUNBQVcsb0JBQUEsS0FBUyxFQUNLO3FCQURUO3FCQUFNO1VBRXJCLENBQUcsU0FBUyxHQUFJLFNBQVM7RUFBQTtFQUUxQiwyQ0FBZSx3QkFBQSxFQUFNLEtBQ1E7cUJBRFo7cUJBQVM7VUFDekIsQ0FBRSxLQUFNLFVBQVUsQ0FBRSxFQUFFO0VBQUE7RUFFdkIsNkNBQWdCLHlCQUFBLEVBQU0sS0FDUTtxQkFEWjtxQkFBUztVQUMxQixDQUFFLEtBQU0sV0FBVyxDQUFFLEVBQUU7RUFBQTtFQUV4Qiw2Q0FBZ0IseUJBQUEsRUFBTSxLQUNRO3FCQURaO3FCQUFTO1VBQzFCLENBQUUsS0FBTSxXQUFXLENBQUUsRUFBRTtFQUFBO0VBR3hCLDZCQUFRLGlCQUFBLEVBQUUsRUFBTSxXQUNpQjtxQkFEckI7NkJBQWEsSUFBSTtjQUVoQixJQUFJLFdBQVM7VUFFckI7SUFBSCxVQUFHLEVBQUUsR0FDQztZQUFMLFlBQVEsRUFBRTtJQUFBLE9BQ1gsVUFBRyxFQUFFLEdBQ0M7WUFBTCxZQUFRLEVBQUU7SUFBQSxPQUVQO0tBQUgsY0FBVSxDQUFHLENBQUcsU0FBUyxHQUFJLFNBQVMsSUFBSTtLQUMxQywyQkFBbUIsV0FBWSxXQUFXO0tBQzFDLFVBQVEsU0FBUyxHQUFHLEVBQUk7S0FDeEIsa0JBQWMsQ0FBRyxDQUFFLEVBQUUsT0FBTyxDQUFFLEVBQUU7S0FDaEMsWUFBVSxTQUFTLEdBQUcsRUFBSTtZQUMxQixDQUFJLFNBQVMsZUFBYTtJQUFBO0dBQUE7RUFBQTtFQUU3QixtQ0FBVSxxQkFBQSxFQUFFLFdBQ2lCOzZCQURSLElBQUk7Y0FHWixJQUFJLFdBQVM7R0FFekIsUUFBTSxTQUFTLEdBQUcsQ0FBRSxJQUFHO1VBQ3ZCLENBQUcsU0FBUyxHQUFDO0VBQUE7RUFHZCxvQkFBTSxhQUFBLEVBQU0sRUFDSztxQkFEVDtxQkFBTTtVQUViLENBQUcsQ0FBRSxFQUFFLEdBQUc7RUFBQSIsImZpbGUiOiJtYXRoL051bWJlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
