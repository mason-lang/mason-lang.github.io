"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./compare","./Type/Poly","./Type/Pred-Type","./Type/primitive","./Type/Trait","./at/at"],(exports,compare_0,Poly_1,Pred_45Type_2,primitive_3,Trait_4,_64_5)=>{
	exports._get=_ms.lazy(()=>{
		let compare=_ms.getDefaultExport(compare_0),_$0=_ms.getModule(Poly_1),impl_33=_ms.get(_$0,"impl!"),Pred_45Type=_ms.getDefaultExport(Pred_45Type_2),_$1=_ms.getModule(primitive_3),Str=_ms.get(_$1,"Str"),Trait=_ms.getDefaultExport(Trait_4),_$2=_ms.lazyGetModule(_64_5),count=_ms.lazyProp(_$2,"count");
		let String_45Test=exports["String-Test"]=new (Trait)((()=>{
			let built={};
			built.name="String-Test";
			let implementors=built.implementors=[String,RegExp];
			return built
		})());
		let Char=exports.Char=new (Pred_45Type)((()=>{
			let built={};
			built.name="Char";
			let predicate=built.predicate=function predicate(_){
				return (_ms.hasInstance(Str,_)&&_ms.eq(_ms.unlazy(count)(_),1))
			};
			return built
		})());
		let indent=exports.indent=function indent(_){
			_ms.checkInstance(Str,_,"_");
			return _.replace(new (RegExp)(`\n`,"g"),`\n\t`)
		};
		impl_33(compare,String,function(other){
			let _this=this;
			return _this.localeCompare(other)
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvU3RyaW5nLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBU0EseUNBQWEsS0FBSSxPQUNLLEtBQUE7O2NBQ3JCO0dBQ0Esb0NBQWMsQ0FBQyxPQUFPOzs7RUFFdkIsc0JBQU0sS0FBSSxhQUNTLEtBQUE7O2NBQ2xCO0dBQ0EsOEJBQVksbUJBQUEsRUFDQztXQUFaLGlCQUFLLElBQUQsNkJBQWMsR0FBQztHQUFBOzs7RUFFckIsMEJBQVMsZ0JBQUEsRUFDSztxQkFESDtVQUdWLFVBQVcsS0FBSSxRQUFRLEtBQUssS0FBSTs7RUFFakMsUUFBTSxRQUFRLE9BQVMsU0FBQSxNQUNLOztVQUEzQixvQkFBZTtFQUFBIiwiZmlsZSI6IlN0cmluZy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
