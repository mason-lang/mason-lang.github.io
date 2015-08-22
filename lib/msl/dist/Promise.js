"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./at/at","./control","./Function","./methods","./Type/Method","./Type/Pred-Type"],(exports,_64_0,control_1,Function_2,methods_3,Method_4,Pred_45Type_5)=>{
	exports._get=_ms.lazy(()=>{
		let _64=_ms.getDefaultExport(_64_0),_$0=_ms.getModule(control_1),opr=_ms.get(_$0,"opr"),_$1=_ms.getModule(Function_2),Action=_ms.get(_$1,"Action"),_$2=_ms.getModule(methods_3),sub=_ms.get(_$2,"sub"),_$3=_ms.getModule(Method_4),self_45impl_33=_ms.get(_$3,"self-impl!"),_$4=_ms.getModule(Pred_45Type_5),Any=_ms.get(_$4,"Any");
		self_45impl_33(sub,Promise,()=>{
			return Promise
		});
		let $do=exports.$do=function $do($act){
			_ms.checkContains(_ms.sub(Action,Promise),$act,"$act");
			return $done($act())
		};
		let $done=exports.$done=function $done(_){
			_ms.checkContains(Promise,_,"_");
			return _.catch(err=>{
				console.log(`=== error ===
${err.message}
${err.stack}
=== error ===`);
				throw err
			})
		};
		let $fail_45after_45time=exports["$fail-after-time"]=function $fail_45after_45time(_,time_45ms){
			_ms.checkContains(Promise,_,"_");
			_ms.checkContains(Number,time_45ms,"time-ms");
			return _ms.checkContains(Promise,new (Promise)((resolve,reject)=>{
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
			_ms.checkContains(Action,delayed,"delayed");
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
			_ms.checkContains(_64,keep_45some,"keep-some");
			_ms.checkContains(_ms.sub(Function,Any,_ms.sub(Promise,Boolean)),$keep_45if_63,"$keep-if?");
			return _ms.async(function*(){
				return _ms.checkContains(Array,(yield* function*(){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvUHJvbWlzZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQVNBLGVBQVcsSUFBSSxRQUNTO1VBQXZCO0VBQUE7RUFJRCxvQkFBTSxhQUFBOzZCQUFLLE9BQU87VUFFakIsTUFBTTtFQUFBO0VBRVAsd0JBQVEsZUFBQTtxQkFBRTtVQUtSLFFBQVM7SUFFVCxZQUNDLGlCQUNFLGVBQ0E7SUFHSCxNQUFNO0dBQUE7RUFBQTtFQUVSLHFEQUFtQiw4QkFBUyxFQUFVO3FCQUFSO3FCQUFnQjs0QkFBMUIsUUFFbkIsS0FBSSxTQUFVLENBQUEsUUFBUTtJQUNwQixPQUFNO0lBQ1AsWUFDWTtLQUFYLE9BQU8sS0FBSSxPQUFPLG9CQUFrQjs7SUFDckMsV0FBVyxRQUFRO0dBQUE7O0VBRXJCLGlCQUFlLElBQUksb0JBQXFCO1VBQ3ZDLFdBQVcsT0FBTztFQUFBO0VBRW5CLDBCQUFTLGdCQUFBO3FCQUFRO1VBS2hCLEtBQUksU0FBUyxDQUFBLFFBQVE7V0FDcEIsYUFDZTtLQUNSLElBQ0Y7TUFBRixRQUFRO0tBQUEsYUFDVDtNQUNDLE9BQU87S0FBQTtJQUFBO0dBQUE7RUFBQTtFQUVaLHdCQUFTLGVBQU8sWUFBWTtxQkFBRjs2QkFBWSxTQUFTLFlBQUksUUFBUTs7NkJBQWpELE1BR0o7O2FBQUEsS0FBQSxZQUNTO01BQVYsR0FBQSxPQUFFLGNBQVUsSUFDQTtxQkFBWDtNQUFBO0tBQUEiLCJmaWxlIjoiUHJvbWlzZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
