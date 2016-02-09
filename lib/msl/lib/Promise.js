"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./at/at","./control","./Function","./polys","./Type/Poly","./Type/Pred-Type","./Type/primitive"],(exports,_64_0,control_1,Function_2,polys_3,Poly_4,Pred_45Type_5,primitive_6)=>{
	exports._get=_ms.lazy(()=>{
		let _64=_ms.getDefaultExport(_64_0),_$0=_ms.getModule(control_1),opr=_ms.get(_$0,"opr"),_$1=_ms.getModule(Function_2),Action=_ms.get(_$1,"Action"),_$2=_ms.getModule(polys_3),sub=_ms.get(_$2,"sub"),_$3=_ms.getModule(Poly_4),self_45impl_33=_ms.get(_$3,"self-impl!"),_$4=_ms.getModule(Pred_45Type_5),Any=_ms.get(_$4,"Any"),_$5=_ms.getModule(primitive_6),Num=_ms.get(_$5,"Num");
		self_45impl_33(sub,Promise,()=>{
			return Promise
		});
		let $do=exports.$do=function $do($act){
			_ms.checkInstance(_ms.sub(Action,Promise),$act,"$act");
			return $done($act())
		};
		let $done=exports.$done=function $done(_){
			_ms.checkInstance(Promise,_,"_");
			return _.catch(err=>{
				console.log(`=== error ===
${err.message}
${err.stack}
=== error ===`);
				throw err
			})
		};
		let $fail_45after_45time=exports["$fail-after-time"]=function $fail_45after_45time(_,time_45ms){
			_ms.checkInstance(Promise,_,"_");
			_ms.checkInstance(Num,time_45ms,"time-ms");
			return _ms.checkInstance(Promise,new (Promise)((resolve,reject)=>{
				_.then(resolve);
				let timeout=function timeout(){
					reject(new (Error)(`Took longer than ${time_45ms} milliseconds.`))
				};
				setTimeout(timeout,time_45ms)
			}),"returned value")
		};
		let setImmediate=opr(global.setImmediate,action=>{
			return setTimeout(action,0)
		});
		let $delay=exports.$delay=function $delay(delayed){
			_ms.checkInstance(Action,delayed,"delayed");
			return new (Promise)((resolve,reject)=>{
				return setImmediate(()=>{
					try {
						resolve(delayed())
					}catch(error){
						reject(error)
					}
				})
			})
		};
		let $keep=exports.$keep=function $keep(keep_45some,$keep_45if_63){
			_ms.checkInstance(_64,keep_45some,"keep-some");
			_ms.checkInstance(_ms.sub(Function,Any,_ms.sub(Promise,Boolean)),$keep_45if_63,"$keep-if?");
			return _ms.async(function*(){
				return _ms.checkInstance(Array,(yield* function*(){
					let built=[];
					for(let _ of keep_45some){
						if((yield $keep_45if_63(_))){
							_ms.add(built,_)
						}
					};
					return built
				}()),"returned value")
			})
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvUHJvbWlzZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQVVBLGVBQVcsSUFBSSxRQUNTLElBQUE7VUFBdkI7RUFBQTtFQUlELG9CQUFNLGFBQUEsS0FDb0I7NkJBRGYsT0FBTztVQUVqQixNQUFNO0VBQUE7RUFFUCx3QkFBUSxlQUFBLEVBQ1M7cUJBRFA7VUFLVCxRQUFVLEtBQ0c7SUFDWixZQUNDO0VBQ0U7RUFDQTs7SUFHSCxNQUFNO0dBQUE7RUFBQTtFQUVSLHFEQUFtQiw4QkFBUyxFQUFVLFVBQ1c7cUJBRG5CO3FCQUFnQjs0QkFBMUIsUUFFbkIsS0FBSSxTQUFVLENBQUEsUUFBUSxTQUNNO0lBQTNCLE9BQU87SUFDUCxZQUNZLGtCQUFBO0tBQVgsT0FBTyxLQUFJLE9BQU8sb0JBQWtCOztJQUNyQyxXQUFXLFFBQVE7R0FBQTs7RUFFckIsaUJBQWUsSUFBSSxvQkFBcUIsUUFDTTtVQUE3QyxXQUFXLE9BQU87RUFBQTtFQUVuQiwwQkFBUyxnQkFBQSxRQUNjO3FCQUROO1VBS2hCLEtBQUksU0FBUyxDQUFBLFFBQVEsU0FDTTtXQUExQixhQUNlLElBQUE7S0FDUixJQUNGO01BQUYsUUFBUTtLQUFBLGFBQ1Q7TUFDQyxPQUFPO0tBQUE7SUFBQTtHQUFBO0VBQUE7RUFFWix3QkFBUyxlQUFPLFlBQVk7cUJBQUY7NkJBQVksU0FBUyxZQUFJLFFBQVE7K0JBQ1M7NkJBRDFELE1BR0o7O2FBQUEsS0FBQSxZQUNTO01BQVYsR0FBQSxPQUFFLGNBQVUsSUFDQTtxQkFBWjtNQUFBO0tBQUEiLCJmaWxlIjoiUHJvbWlzZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
