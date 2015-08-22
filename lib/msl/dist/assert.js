"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./compare","./at/at","./at/Map/Map","./at/Seq/Seq","./Function","./to-string","./String","./Type/Type"],(exports,compare_0,_64_1,Map_2,Seq_3,Function_4,to_45string_5,String_6,Type_7)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_64=_ms.lazy(()=>_ms.getDefaultExport(_64_1)),_$1=_ms.lazyGetModule(_64_1),_64map=_ms.lazyProp(_$1,"@map"),Map=_ms.lazy(()=>_ms.getDefaultExport(Map_2)),_$2=_ms.lazyGetModule(Seq_3),_64tail=_ms.lazyProp(_$2,"@tail"),_$3=_ms.lazyGetModule(Function_4),Pred=_ms.lazyProp(_$3,"Pred"),_$4=_ms.lazyGetModule(to_45string_5),inspect=_ms.lazyProp(_$4,"inspect"),_$5=_ms.lazyGetModule(String_6),indent=_ms.lazyProp(_$5,"indent"),_$6=_ms.lazyGetModule(Type_7),_61_62=_ms.lazyProp(_$6,"=>");
		let assert_45call_33=exports["assert-call!"]=function assert_45call_33(fun,args_45_62result){
			_ms.checkContains(Function,fun,"fun");
			_ms.checkContains(_ms.unlazy(Map),args_45_62result,"args->result");
			assert_45call_45with_33(_61_63,fun,args_45_62result)
		};
		let assert_45this_45call_33=exports["assert-this-call!"]=function assert_45this_45call_33(fun,args_45_62result){
			_ms.checkContains(Function,fun,"fun");
			_ms.checkContains(_ms.unlazy(Map),args_45_62result,"args->result");
			for(let _ of args_45_62result){
				let args=_ms.checkContains(_ms.unlazy(_64),_ms.sub(_,0),"args");
				let expected_45res=_ms.sub(_,1);
				let actual=fun.apply(_ms.sub(args,0),_ms.unlazy(_64tail)(args));
				if(! _61_63(actual,expected_45res))throw new (Error)(`${fun} of:
	${_ms.unlazy(indent)(_ms.unlazy(_61_62)(String,_ms.unlazy(_64map)(args,_ms.unlazy(inspect)),`\n`))}
Should ${_61_63}:
	${_ms.unlazy(indent)(_ms.unlazy(inspect)(expected_45res))}
Got:
	${_ms.unlazy(indent)(_ms.unlazy(inspect)(actual))}`)
			}
		};
		let assert_45call_45with_33=exports["assert-call-with!"]=function assert_45call_45with_33(equal_63,fun,args_45_62result){
			_ms.checkContains(_ms.unlazy(Pred),equal_63,"equal?");
			_ms.checkContains(Function,fun,"fun");
			_ms.checkContains(_ms.unlazy(Map),args_45_62result,"args->result");
			for(let _ of args_45_62result){
				let args=_ms.checkContains(_ms.unlazy(_64),_ms.sub(_,0),"args");
				let expected_45res=_ms.sub(_,1);
				let actual=fun(...args);
				if(! equal_63(actual,expected_45res))throw new (Error)(`${fun} of:
	${_ms.unlazy(indent)(_ms.unlazy(_61_62)(String,_ms.unlazy(_64map)(args,_ms.unlazy(inspect)),`\n`))}
Should ${equal_63}:
	${_ms.unlazy(indent)(_ms.unlazy(inspect)(expected_45res))}
Got:
	${_ms.unlazy(indent)(_ms.unlazy(inspect)(actual))}`)
			}
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvYXNzZXJ0Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBY0EsNkNBQWdCLDBCQUFBLElBQWE7cUJBQVQ7O0dBR25CLHdCQUFrQixPQUFHLElBQUk7RUFBQTtFQUUxQix5REFBcUIsaUNBQUEsSUFBYTtxQkFBVDs7R0FHcEIsUUFBQSxLQUFBLGlCQUNZO0lBQ2YsbURBQVUsRUFBQztJQUNYLDJCQUFnQixFQUFDO0lBQ2pCLFdBQVMsa0JBQVUsS0FBSyx1QkFBVTtJQUMzQixLQUFBLE9BQUcsT0FBTyxrQ0FDaEIsR0FBQyxrREFDYSwwQkFBYSwwQkFBZSxpQkFDbEMsbURBQ1csaUVBRUE7OztFQUV0Qix5REFBcUIsaUNBQUEsU0FBWSxJQUFhOztxQkFBVDs7R0FHaEMsUUFBQSxLQUFBLGlCQUNZO0lBQ2YsbURBQVUsRUFBQztJQUNYLDJCQUFnQixFQUFDO0lBQ2pCLFdBQVMsSUFBSSxHQUFHO0lBQ1QsS0FBQSxTQUFPLE9BQU8sa0NBQ3BCLEdBQUMsa0RBQ2EsMEJBQWEsMEJBQWUsaUJBQ2xDLHFEQUNXLGlFQUVBIiwiZmlsZSI6ImFzc2VydC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
