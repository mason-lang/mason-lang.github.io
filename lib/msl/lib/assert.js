"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./at/at","./at/Map/Map","./at/Seq/Seq","./Function","./to-string","./String","./Type/Type"],(exports,_64_0,Map_1,Seq_2,Function_3,to_45string_4,String_5,Type_6)=>{
	exports._get=_ms.lazy(()=>{
		let _64=_ms.lazy(()=>_ms.getDefaultExport(_64_0)),_$0=_ms.lazyGetModule(_64_0),_64map=_ms.lazyProp(_$0,"@map"),Map=_ms.lazy(()=>_ms.getDefaultExport(Map_1)),_$1=_ms.lazyGetModule(Seq_2),_64tail=_ms.lazyProp(_$1,"@tail"),_$2=_ms.lazyGetModule(Function_3),Pred=_ms.lazyProp(_$2,"Pred"),_$3=_ms.lazyGetModule(to_45string_4),inspect=_ms.lazyProp(_$3,"inspect"),_$4=_ms.lazyGetModule(String_5),indent=_ms.lazyProp(_$4,"indent"),_$5=_ms.lazyGetModule(Type_6),_61_62=_ms.lazyProp(_$5,"=>");
		let assert_45call_33=exports["assert-call!"]=function assert_45call_33(fun,args_45_62result){
			_ms.checkInstance(Function,fun,"fun");
			_ms.checkInstance(_ms.unlazy(Map),args_45_62result,"args->result");
			assert_45call_45with_33(_ms.eqMany,fun,args_45_62result)
		};
		let assert_45this_45call_33=exports["assert-this-call!"]=function assert_45this_45call_33(fun,args_45_62result){
			_ms.checkInstance(Function,fun,"fun");
			_ms.checkInstance(_ms.unlazy(Map),args_45_62result,"args->result");
			for(let _ of args_45_62result){
				let args=_ms.checkInstance(_ms.unlazy(_64),_ms.sub(_,0),"args");
				let expected_45res=_ms.sub(_,1);
				let actual=fun.apply(_ms.sub(args,0),_ms.unlazy(_64tail)(args));
				if(! _ms.eq(actual,expected_45res))throw new (Error)(`${fun.name} of:
	${_ms.unlazy(indent)(_ms.unlazy(_61_62)(String,_ms.unlazy(_64map)(args,_ms.unlazy(inspect)),`\n`))}
Should =?:
	${_ms.unlazy(indent)(_ms.unlazy(inspect)(expected_45res))}
Got:
	${_ms.unlazy(indent)(_ms.unlazy(inspect)(actual))}`)
			}
		};
		let assert_45call_45with_33=exports["assert-call-with!"]=function assert_45call_45with_33(equal_63,fun,args_45_62result){
			_ms.checkInstance(_ms.unlazy(Pred),equal_63,"equal?");
			_ms.checkInstance(Function,fun,"fun");
			_ms.checkInstance(_ms.unlazy(Map),args_45_62result,"args->result");
			for(let _ of args_45_62result){
				let args=_ms.checkInstance(_ms.unlazy(_64),_ms.sub(_,0),"args");
				let expected_45res=_ms.sub(_,1);
				let actual=fun(...args);
				if(! equal_63(actual,expected_45res))throw new (Error)(`${fun.name} of:
	${_ms.unlazy(indent)(_ms.unlazy(_61_62)(String,_ms.unlazy(_64map)(args,_ms.unlazy(inspect)),`\n`))}
Should ${equal_63.name}:
	${_ms.unlazy(indent)(_ms.unlazy(inspect)(expected_45res))}
Got:
	${_ms.unlazy(indent)(_ms.unlazy(inspect)(actual))}`)
			}
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvYXNzZXJ0Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBWUEsNkNBQWdCLDBCQUFBLElBQWEsaUJBQ2dCO3FCQUR6Qjs7R0FHbkIsbUNBQXNCLElBQUk7RUFBQTtFQUUzQix5REFBcUIsaUNBQUEsSUFBYSxpQkFDZ0I7cUJBRHpCOztHQUdwQixRQUFBLEtBQUEsaUJBQ1k7SUFDZixtREFBUyxFQUFFO0lBQ1gsMkJBQWUsRUFBRTtJQUNqQixXQUFTLGtCQUFVLEtBQUssdUJBQVU7SUFDM0IsWUFBRyxPQUFPLGtDQUNoQixHQUFFO3lDQUNZLDBCQUFhLDBCQUFlOzswQ0FFdkI7OzBDQUVBOzs7RUFFdEIseURBQXFCLGlDQUFBLFNBQVksSUFBYSxpQkFDZ0I7O3FCQUR6Qjs7R0FHaEMsUUFBQSxLQUFBLGlCQUNZO0lBQ2YsbURBQVMsRUFBRTtJQUNYLDJCQUFlLEVBQUU7SUFDakIsV0FBUyxPQUFPO0lBQ1QsS0FBQSxTQUFPLE9BQU8sa0NBQ3BCLEdBQUU7eUNBQ1ksMEJBQWEsMEJBQWU7U0FDakM7MENBQ1U7OzBDQUVBIiwiZmlsZSI6ImFzc2VydC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
