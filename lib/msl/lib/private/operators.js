"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../at/at","./../compare","./bootstrap"],(exports,_64_0,compare_1,bootstrap_2)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(_64_0),all_63=_ms.get(_$0,"all?"),any_63=_ms.get(_$0,"any?"),fold=_ms.get(_$0,"fold"),_$1=_ms.getModule(compare_1),binary_61_63=_ms.get(_$1,"binary=?"),_$2=_ms.getModule(bootstrap_2),msDef=_ms.get(_$2,"msDef");
		let operator_43=function operator_43(){
			let args=[].slice.call(arguments,0);
			return fold(args,(a,b)=>{
				return (a+b)
			})
		};
		msDef("plus",operator_43);
		let operator_45=function operator_45(){
			let args=[].slice.call(arguments,0);
			return fold(args,(a,b)=>{
				return (a-b)
			})
		};
		msDef("minus",operator_45);
		let operator_42=function operator_42(){
			let args=[].slice.call(arguments,0);
			return fold(args,(a,b)=>{
				return (a*b)
			})
		};
		msDef("times",operator_42);
		let operator_47=function operator_47(){
			let args=[].slice.call(arguments,0);
			return fold(args,(a,b)=>{
				return (a/b)
			})
		};
		msDef("div",operator_47);
		let operator_37=function operator_37(){
			let args=[].slice.call(arguments,0);
			return fold(args,(a,b)=>{
				return (a%b)
			})
		};
		msDef("remainder",operator_37);
		let operator_42_42=function operator_42_42(){
			let args=[].slice.call(arguments,0);
			return fold(args,(a,b)=>{
				return Math.pow(a,b)
			})
		};
		msDef("exponent",operator_42_42);
		let compare_45many=function compare_45many(args,op){
			let res=op(_ms.sub(args,0),_ms.sub(args,1));
			for(let i of _ms.range(2,args.length,true)){
				if(! op(_ms.sub(args,(i-1)),_ms.sub(args,i))){
					res=false;
					break
				}
			};
			return res
		};
		let operator_61_63=function operator_61_63(){
			let args=[].slice.call(arguments,0);
			return compare_45many(args,binary_61_63)
		};
		msDef("eqMany",operator_61_63);
		let operator_61_61_63=function operator_61_61_63(){
			let args=[].slice.call(arguments,0);
			return compare_45many(args,Object.is)
		};
		msDef("eqExact",operator_61_61_63);
		let operator_60_63=function operator_60_63(){
			let args=[].slice.call(arguments,0);
			return compare_45many(args,(a,b)=>{
				return (a<b)
			})
		};
		msDef("lt",operator_60_63);
		let operator_60_61_63=function operator_60_61_63(){
			let args=[].slice.call(arguments,0);
			return compare_45many(args,(a,b)=>{
				return (a<=b)
			})
		};
		msDef("lte",operator_60_61_63);
		let operator_62_63=function operator_62_63(){
			let args=[].slice.call(arguments,0);
			return compare_45many(args,(a,b)=>{
				return (a>b)
			})
		};
		msDef("gt",operator_62_63);
		let operator_62_61_63=function operator_62_61_63(){
			let args=[].slice.call(arguments,0);
			return compare_45many(args,(a,b)=>{
				return (a>=b)
			})
		};
		msDef("gte",operator_62_61_63);
		let operator_45and=function operator_45and(){
			let args=[].slice.call(arguments,0);
			return all_63(args)
		};
		msDef("and",operator_45and);
		let operator_45or=function operator_45or(){
			let args=[].slice.call(arguments,0);
			return any_63(args)
		};
		exports.default=msDef("or",operator_45or);
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvcHJpdmF0ZS9vcGVyYXRvcnMubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFXQyxnQkFBYSxzQkFDTzs7VUFBbkIsS0FBSyxLQUFNLENBQUEsRUFBRSxJQUNDO1dBQWIsQ0FBRSxFQUFFO0dBQUE7RUFBQTtFQUNOLE1BQU8sT0FBSztFQUVaLGdCQUFhLHNCQUNPOztVQUFuQixLQUFLLEtBQU0sQ0FBQSxFQUFFLElBQ0M7V0FBYixDQUFFLEVBQUU7R0FBQTtFQUFBO0VBQ04sTUFBTyxRQUFNO0VBRWIsZ0JBQWEsc0JBQ087O1VBQW5CLEtBQUssS0FBTSxDQUFBLEVBQUUsSUFDQztXQUFiLENBQUUsRUFBRTtHQUFBO0VBQUE7RUFDTixNQUFPLFFBQU07RUFFYixnQkFBYSxzQkFDTzs7VUFBbkIsS0FBSyxLQUFNLENBQUEsRUFBRSxJQUNDO1dBQWIsQ0FBRSxFQUFFO0dBQUE7RUFBQTtFQUNOLE1BQU8sTUFBSTtFQUVYLGdCQUFhLHNCQUNPOztVQUFuQixLQUFLLEtBQU0sQ0FBQSxFQUFFLElBQ0M7V0FBYixDQUFFLEVBQUU7R0FBQTtFQUFBO0VBQ04sTUFBTyxZQUFVO0VBRWpCLG1CQUFjLHlCQUNPOztVQUFwQixLQUFLLEtBQU0sQ0FBQSxFQUFFLElBQ0M7b0JBQVYsRUFBRTtHQUFBO0VBQUE7RUFDUCxNQUFPLFdBQVM7RUFJaEIsbUJBQWdCLHdCQUFBLEtBQUssR0FDRTtHQUN0QixRQUFNLFdBQUcsS0FBSyxXQUFHLEtBQUs7R0FDbEIsUUFBQSxlQUFLLEVBQUksa0JBQ1c7SUFBaEIsS0FBQSxXQUFHLEtBQUssQ0FBRSxFQUFFLFlBQUcsS0FBSyxJQUNFO1NBQXJCO0tBQ1A7SUFBQTtHQUFBO1VBQ0Y7RUFBQTtFQUVELG1CQUFjLHlCQUNPOztVQUFwQixlQUFhLEtBQUs7RUFBQTtFQUNuQixNQUFPLFNBQU87RUFFZCxzQkFBZSw0QkFDTzs7VUFBckIsZUFBYSxLQUFLOztFQUNuQixNQUFPLFVBQVE7RUFFZixtQkFBYyx5QkFDTzs7VUFBcEIsZUFBYSxLQUFNLENBQUEsRUFBRSxJQUNDO1dBQXJCLENBQUcsRUFBRTtHQUFBO0VBQUE7RUFDUCxNQUFPLEtBQUc7RUFFVixzQkFBZSw0QkFDTzs7VUFBckIsZUFBYSxLQUFNLENBQUEsRUFBRSxJQUNDO1dBQXJCLENBQUksR0FBRTtHQUFBO0VBQUE7RUFDUixNQUFPLE1BQUk7RUFFWCxtQkFBYyx5QkFDTzs7VUFBcEIsZUFBYSxLQUFNLENBQUEsRUFBRSxJQUNDO1dBQXJCLENBQUcsRUFBRTtHQUFBO0VBQUE7RUFDUCxNQUFPLEtBQUc7RUFFVixzQkFBZSw0QkFDTzs7VUFBckIsZUFBYSxLQUFNLENBQUEsRUFBRSxJQUNDO1dBQXJCLENBQUksR0FBRTtHQUFBO0VBQUE7RUFDUixNQUFPLE1BQUk7RUFHWCxtQkFBZ0IseUJBQ087O1VBQXRCLE9BQUs7RUFBQTtFQUNOLE1BQU8sTUFBSTtFQUVYLGtCQUFlLHdCQUNPOztVQUFyQixPQUFLO0VBQUE7a0JBQ04sTUFBTyxLQUFHIiwiZmlsZSI6InByaXZhdGUvb3BlcmF0b3JzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
