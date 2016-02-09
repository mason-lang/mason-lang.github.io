"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./Function","./Type/Pred-Type","./Type/primitive","./Type/Type"],(exports,Function_0,Pred_45Type_1,primitive_2,Type_3)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(Function_0),Action=_ms.get(_$0,"Action"),_$1=_ms.getModule(Pred_45Type_1),Union=_ms.get(_$1,"Union"),_$2=_ms.getModule(primitive_2),Str=_ms.get(_$2,"Str"),Type=_ms.getDefaultExport(Type_3);
		let Success=exports.Success=class Success{
			constructor(val){
				let _this=this;
				this.val=val
			}
		};
		let try_45result=exports["try-result"]=function try_45result(tried){
			_ms.checkInstance(Action,tried,"tried");
			return (()=>{
				try {
					return new (Success)(tried())
				}catch(_){
					return _
				}
			})()
		};
		let fails_63=exports["fails?"]=function fails_63(tried){
			_ms.checkInstance(Action,tried,"tried");
			return (()=>{
				try {
					tried();
					return false
				}catch(_){
					return true
				}
			})()
		};
		let fails_45with_63=exports["fails-with?"]=function fails_45with_63(expected_45error,tried){
			_ms.checkInstance(_ms.sub(Union,Str,Type),expected_45error,"expected-error");
			_ms.checkInstance(Action,tried,"tried");
			return (()=>{
				try {
					tried();
					return false
				}catch(error){
					return (()=>{
						let _=expected_45error;
						if(_ms.hasInstance(Type,_)){
							return _ms.hasInstance(_,error)
						} else if(_ms.hasInstance(Str,_)){
							return _ms.eq(error.message,_)
						} else throw new (Error)("No branch of `case` matches.")
					})()
				}
			})()
		};
		let annotate_45errors=exports["annotate-errors"]=function annotate_45errors(annotation,tried){
			_ms.checkInstance(Action,tried,"tried");
			return (()=>{
				try {
					return tried()
				}catch(_){
					_.stack=`${_ms.unlazy(annotation)}${_.stack}`;
					_.message=`${_ms.unlazy(annotation)}${_.message}`;
					throw _
				}
			})()
		};
		let $try=exports.$try=function $try(_){
			_ms.checkInstance(Promise,_,"_");
			let success=_.then(val=>{
				return new (Success)(val)
			});
			return success.catch(err=>{
				return err
			})
		};
		let $annotate_45errors=exports["$annotate-errors"]=function $annotate_45errors(annotation,$tried){
			_ms.checkInstance(Promise,$tried,"$tried");
			return $tried.catch(_=>{
				if(_ms.hasInstance(Error,_)){
					_.stack=`${_ms.unlazy(annotation)}${_.stack}`;
					_.message=`${_ms.unlazy(annotation)}${_.message}`
				};
				throw _
			})
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvVHJ5Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBT0EsNEJBQ2M7R0FDSCxZQUFBLElBQ0k7Ozs7O0VBRWYsdUNBQWEsc0JBQUEsTUFDWTtxQkFETjtVQUdaO1FBQ0Y7WUFBRixLQUFJLFNBQVE7SUFBQSxTQUNiO1lBQ0M7SUFBQTtHQUFBO0VBQUE7RUFFSCwrQkFBUyxrQkFBQSxNQUNZO3FCQUROO1VBR1I7UUFDRjtLQUFGO1lBQ0E7SUFBQSxTQUNEO1lBRUM7SUFBQTtHQUFBO0VBQUE7RUFFSCwyQ0FBYyx5QkFBQSxpQkFBK0IsTUFDWTs2QkFENUIsTUFBTSxJQUFJO3FCQUFZO1VBRzVDO1FBQ0Y7S0FBRjtZQUNBO0lBQUEsYUFDRDtZQUNNO01BQUEsTUFBQTtNQUNKLG1CQUFDLEtBQUQsR0FDSzs4QkFBRSxFQUFOO01BQUEsT0FDRCxtQkFBQyxJQUFELEdBQ0k7cUJBQUEsY0FBYztNQUFBOzs7OztFQUV0QixpREFBa0IsMkJBQUEsV0FBZ0IsTUFDWTtxQkFETjtVQUdqQztRQUNGO1lBQUY7SUFBQSxTQUNEO0tBQ0MsUUFBWSw0QkFBYTtLQUN6QixVQUFjLDRCQUFhO0tBQzNCLE1BQU07SUFBQTtHQUFBO0VBQUE7RUFHUixzQkFBTyxjQUFBLEVBQ1M7cUJBRFA7R0FHUixZQUFVLE9BQVEsS0FDRztXQUFwQixLQUFJLFNBQVE7R0FBQTtVQUNiLGNBQWUsS0FDRztXQUFqQjtHQUFBO0VBQUE7RUFFRixtREFBbUIsNEJBQUEsV0FBZ0IsT0FDYztxQkFEUDtVQUV6QyxhQUFjLEdBQ0M7SUFBWCxtQkFBQyxNQUFELEdBQ007S0FBUixRQUFZLDRCQUFhO0tBQ3pCLFVBQWMsNEJBQWE7O0lBQzVCLE1BQU07R0FBQTtFQUFBIiwiZmlsZSI6IlRyeS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
