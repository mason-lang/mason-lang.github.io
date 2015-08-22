"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../compare","./../control","./../js","./../Type/Method","./../Type/Pred-Type","./methods"],(exports,compare_0,control_1,js_2,Method_3,Pred_45Type_4,methods_5)=>{
	exports._get=_ms.lazy(()=>{
		let compare=_ms.getDefaultExport(compare_0),_$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_60_63=_ms.get(_$0,"<?"),_60_61_63=_ms.get(_$0,"<=?"),_62_63=_ms.get(_$0,">?"),_62_61_63=_ms.get(_$0,">=?"),_$1=_ms.getModule(control_1),opr=_ms.get(_$1,"opr"),_$2=_ms.getModule(js_2),id_61_63=_ms.get(_$2,"id=?"),js_60=_ms.get(_$2,"js<"),js_60_61=_ms.get(_$2,"js<="),js_62=_ms.get(_$2,"js>"),js_62_61=_ms.get(_$2,"js>="),js_43=_ms.get(_$2,"js+"),js_45=_ms.get(_$2,"js-"),js_42=_ms.get(_$2,"js*"),js_47=_ms.get(_$2,"js/"),js_45mod=_ms.get(_$2,"js-mod"),_$3=_ms.getModule(Method_3),impl_33=_ms.get(_$3,"impl!"),Pred_45Type=_ms.getDefaultExport(Pred_45Type_4),_$4=_ms.getModule(Pred_45Type_4),Opt=_ms.get(_$4,"Opt"),_$5=_ms.getModule(methods_5),_43=_ms.get(_$5,"+"),_45=_ms.get(_$5,"-"),_42=_ms.get(_$5,"*"),_47=_ms.get(_$5,"/");
		let Int=exports.Int=new (Pred_45Type)((()=>{
			let built={};
			built.name="Int";
			let predicate=built.predicate=Number.isSafeInteger;
			return built
		})());
		let Nat=exports.Nat=new (Pred_45Type)((()=>{
			let built={};
			built.name="Nat";
			let predicate=built.predicate=_=>(_ms.contains(Int,_)&&_62_61_63(_,0));
			return built
		})());
		impl_33(compare,Number,function(other){
			let _this=this;
			_ms.checkContains(Number,other,"other");
			return _45(_this,other)
		});
		impl_33(_61_63,Number,function(other){
			let _this=this;
			return id_61_63(_this,other)
		});
		impl_33(_60_63,Number,function(other){
			let _this=this;
			_ms.checkContains(Number,other,"other");
			return js_60(_this,other)
		});
		impl_33(_60_61_63,Number,function(other){
			let _this=this;
			_ms.checkContains(Number,other,"other");
			return js_60_61(_this,other)
		});
		impl_33(_62_63,Number,function(other){
			let _this=this;
			_ms.checkContains(Number,other,"other");
			return js_62(_this,other)
		});
		impl_33(_62_61_63,Number,function(other){
			let _this=this;
			_ms.checkContains(Number,other,"other");
			return js_62_61(_this,other)
		});
		impl_33(_43,Number,function(other){
			let _this=this;
			_ms.checkContains(Number,other,"other");
			return js_43(_this,other)
		});
		impl_33(_45,Number,function(other){
			let _this=this;
			_ms.checkContains(Number,other,"other");
			return js_45(_this,other)
		});
		impl_33(_42,Number,function(other){
			let _this=this;
			_ms.checkContains(Number,other,"other");
			return js_42(_this,other)
		});
		impl_33(_47,Number,function(other){
			let _this=this;
			_ms.checkContains(Number,other,"other");
			return js_47(_this,other)
		});
		let remainder=exports.remainder=function remainder(numerator,denominator){
			_ms.checkContains(Number,numerator,"numerator");
			_ms.checkContains(Number,denominator,"denominator");
			return js_45mod(numerator,denominator)
		};
		let modulo=exports.modulo=function modulo(numerator,denominator){
			_ms.checkContains(Number,numerator,"numerator");
			_ms.checkContains(Number,denominator,"denominator");
			return (()=>{
				if(_60_63(numerator,0)){
					return _43(Math.abs(denominator),remainder(numerator,denominator))
				} else {
					return remainder(numerator,denominator)
				}
			})()
		};
		let int_47=exports["int/"]=function int_47(a,b){
			_ms.checkContains(Number,a,"a");
			_ms.checkContains(Number,b,"b");
			return Math.floor(_47(a,b))
		};
		let divisible_63=exports["divisible?"]=function divisible_63(a,b){
			_ms.checkContains(Number,a,"a");
			_ms.checkContains(Number,b,"b");
			return _61_63(0,remainder(a,b))
		};
		let log_45base=exports["log-base"]=function log_45base(base,n){
			_ms.checkContains(Number,base,"base");
			_ms.checkContains(Number,n,"n");
			return _47(Math.log(n),Math.log(base))
		};
		let square=exports.square=function square(_){
			_ms.checkContains(Number,_,"_");
			return _42(_,_)
		};
		let nearest_45ceil=exports["nearest-ceil"]=function nearest_45ceil(_,step){
			_ms.checkContains(Number,_,"_");
			_ms.checkContains(Number,step,"step");
			return _42(step,Math.ceil(_47(_,step)))
		};
		let nearest_45floor=exports["nearest-floor"]=function nearest_45floor(_,step){
			_ms.checkContains(Number,_,"_");
			_ms.checkContains(Number,step,"step");
			return _42(step,Math.floor(_47(_,step)))
		};
		let nearest_45round=exports["nearest-round"]=function nearest_45round(_,step){
			_ms.checkContains(Number,_,"_");
			_ms.checkContains(Number,step,"step");
			return _42(step,Math.round(_47(_,step)))
		};
		let near_63=exports["near?"]=function near_63(a,b,sig_45figs){
			_ms.checkContains(Number,b,"b");
			_ms.checkContains(_ms.sub(Opt,Nat),sig_45figs,"sig-figs");
			sig_45figs=opr(sig_45figs,6);
			return (()=>{
				if(_61_63(a,0)){
					return near_450_63(b,sig_45figs)
				} else if(_61_63(b,0)){
					return near_450_63(a,sig_45figs)
				} else {
					let avg_45mag=_47(_43(Math.abs(a),Math.abs(b)),2);
					let n_45digits_45avg_45mag=Math.floor(Math.log10(avg_45mag));
					let scale=Math.pow(10,_42(- 1,n_45digits_45avg_45mag));
					let scaled_45diff=_45(_42(a,scale),_42(b,scale));
					let epsilon=Math.pow(10,_42(- 1,sig_45figs));
					return _60_63(Math.abs(scaled_45diff),epsilon)
				}
			})()
		};
		let near_450_63=exports["near-0?"]=function near_450_63(_,sig_45figs){
			_ms.checkContains(_ms.sub(Opt,Nat),sig_45figs,"sig-figs");
			sig_45figs=opr(sig_45figs,6);
			let max=Math.pow(10,_42(- 1,sig_45figs));
			return _60_63(Math.abs(_),max)
		};
		let mid=exports.mid=function mid(a,b){
			_ms.checkContains(Number,a,"a");
			_ms.checkContains(Number,b,"b");
			return _47(_43(a,b),2)
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvbWF0aC9OdW1iZXIubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFRQSxvQkFBSyxLQUFJLGFBQ1MsS0FBQTs7Y0FHakI7R0FDQSw4QkFBVzs7O0VBRVosb0JBQUssS0FBSSxhQUNTLEtBQUE7O2NBQ2pCO0dBQ0EsaUNBQWEsY0FBSyxJQUFELElBQU0sVUFBSyxFQUFDOzs7RUFJN0IsUUFBTSxRQUFRLE9BQVMsU0FBQTtPQW1CbEI7cUJBbkJ3QjtVQUM1QixJQWtCSSxNQWxCRztFQUFBO0VBQ1IsUUFBTSxPQUFHLE9BQVMsU0FBQTtPQWlCYjtVQWhCSixTQWdCSSxNQWhCTTtFQUFBO0VBQ1gsUUFBTSxPQUFHLE9BQVMsU0FBQTtPQWViO3FCQWZtQjtVQUN2QixNQWNJLE1BZEs7RUFBQTtFQUNWLFFBQU0sVUFBSSxPQUFTLFNBQUE7T0FhZDtxQkFib0I7VUFDeEIsU0FZSSxNQVpNO0VBQUE7RUFDWCxRQUFNLE9BQUcsT0FBUyxTQUFBO09BV2I7cUJBWG1CO1VBQ3ZCLE1BVUksTUFWSztFQUFBO0VBQ1YsUUFBTSxVQUFJLE9BQVMsU0FBQTtPQVNkO3FCQVRvQjtVQUN4QixTQVFJLE1BUk07RUFBQTtFQUNYLFFBQU0sSUFBRSxPQUFTLFNBQUE7T0FPWjtxQkFQa0I7VUFDdEIsTUFNSSxNQU5LO0VBQUE7RUFDVixRQUFNLElBQUUsT0FBUyxTQUFBO09BS1o7cUJBTGtCO1VBQ3RCLE1BSUksTUFKSztFQUFBO0VBQ1YsUUFBTSxJQUFFLE9BQVMsU0FBQTtPQUdaO3FCQUhrQjtVQUN0QixNQUVJLE1BRks7RUFBQTtFQUNWLFFBQU0sSUFBRSxPQUFTLFNBQUE7T0FDWjtxQkFEa0I7VUFDdEIsTUFBSSxNQUFLO0VBQUE7RUFHVixnQ0FBWSxtQkFBQSxVQUFpQjtxQkFBUDtxQkFBbUI7VUFHeEMsU0FBTyxVQUFVO0VBQUE7RUFFbEIsMEJBQVMsZ0JBQUEsVUFBaUI7cUJBQVA7cUJBQW1CO1VBSWpDO0lBQUgsR0FBQSxPQUFHLFVBQVUsR0FDQztZQUFiLElBQUcsU0FBUyxhQUFjLFVBQVUsVUFBVTtJQUFBLE9BRTNDO1lBQUgsVUFBVSxVQUFVO0lBQUE7R0FBQTtFQUFBO0VBRXZCLDJCQUFPLGdCQUFBLEVBQVM7cUJBQVA7cUJBQVM7VUFHakIsV0FBWSxJQUFFLEVBQUU7RUFBQTtFQUVqQix1Q0FBYSxzQkFBQSxFQUFTO3FCQUFQO3FCQUFTO1VBRXZCLE9BQUcsRUFBRyxVQUFVLEVBQUU7RUFBQTtFQUduQixtQ0FBVyxvQkFBQSxLQUFZO3FCQUFQO3FCQUFTO1VBRXhCLElBQUcsU0FBUyxHQUFJLFNBQVM7RUFBQTtFQUUxQiwwQkFBUyxnQkFBQTtxQkFBRTtVQUNWLElBQUcsRUFBRTtFQUFBO0VBRU4sMkNBQWUsd0JBQUEsRUFBUztxQkFBUDtxQkFBWTtVQUM1QixJQUFFLEtBQU0sVUFBVyxJQUFHLEVBQUM7RUFBQTtFQUV4Qiw2Q0FBZ0IseUJBQUEsRUFBUztxQkFBUDtxQkFBWTtVQUM3QixJQUFFLEtBQU0sV0FBWSxJQUFHLEVBQUM7RUFBQTtFQUV6Qiw2Q0FBZ0IseUJBQUEsRUFBUztxQkFBUDtxQkFBWTtVQUM3QixJQUFFLEtBQU0sV0FBWSxJQUFHLEVBQUM7RUFBQTtFQUd6Qiw2QkFBUSxpQkFBQSxFQUFFLEVBQVM7cUJBQVA7NkJBQWdCLElBQUk7Y0FFbkIsSUFBSSxXQUFTO1VBRXJCO0lBQUgsR0FBQSxPQUFHLEVBQUUsR0FDQztZQUFMLFlBQVEsRUFBRTtJQUFBLE9BQ1gsR0FBQSxPQUFHLEVBQUUsR0FDQztZQUFMLFlBQVEsRUFBRTtJQUFBLE9BRVA7S0FBSCxjQUFVLElBQUcsSUFBRyxTQUFTLEdBQUksU0FBUyxJQUFJO0tBQzFDLDJCQUFtQixXQUFZLFdBQVc7S0FDMUMsVUFBUSxTQUFTLEdBQUksSUFBRSxJQUFHO0tBQzFCLGtCQUFjLElBQUcsSUFBRSxFQUFFLE9BQVEsSUFBRSxFQUFFO0tBQ2pDLFlBQVUsU0FBUyxHQUFJLElBQUUsSUFBRztZQUM1QixPQUFJLFNBQVMsZUFBYTtJQUFBO0dBQUE7RUFBQTtFQUU3QixtQ0FBVyxxQkFBQSxFQUFDOzZCQUFTLElBQUk7Y0FHWixJQUFJLFdBQVM7R0FFekIsUUFBTSxTQUFTLEdBQUksSUFBRSxJQUFHO1VBQ3hCLE9BQUcsU0FBUyxHQUFDO0VBQUE7RUFHZCxvQkFBTSxhQUFBLEVBQVM7cUJBQVA7cUJBQVM7VUFFaEIsSUFBRyxJQUFFLEVBQUUsR0FBRztFQUFBIiwiZmlsZSI6Im1hdGgvTnVtYmVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
