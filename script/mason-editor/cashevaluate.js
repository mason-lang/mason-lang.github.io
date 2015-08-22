"use strict";
define(["exports","msl/private/boot","msl/compare"],(exports,_boot,compare_0)=>{
	_ms.getModule(_boot);
	let _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?");
	exports.default=(_45require_45,js)=>{
		let fun=Function("define",js);
		return new (Promise)((resolve,reject)=>{
			let define=function define(required,do_45define_33){
				let exports=required.shift();
				_ms.assert(_61_63,exports,"exports");
				let successful_45require=function successful_45require(){
					let modules=[].slice.call(arguments,0);
					try {
						let exports=new (Object)();
						modules.unshift(exports);
						do_45define_33(...modules);
						let keys=Object.keys(exports);
						resolve((()=>{
							if((_61_63(1,keys.length)&&_61_63("default",_ms.sub(keys,0)))){
								return exports.default
							} else {
								return exports
							}
						})())
					}catch(err){
						reject(err)
					}
				};
				return _45require_45(required,successful_45require,reject)
			};
			return fun(define)
		})
	};
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFzb24tZWRpdG9yLyRldmFsdWF0ZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O2lCQUFDLENBQUEsY0FBVTtFQUNWLFFBQU0sU0FBVSxTQUFPO1NBQ3ZCLEtBQUksU0FBUyxDQUFBLFFBQVE7R0FDcEIsV0FBVSxnQkFBQSxTQUFTO0lBQ2xCLFlBQVU7ZUFDSCxPQUFHLFFBQVM7SUFDbkIseUJBQXVCOztLQUVoQixJQUNGO01BQUYsWUFBVSxLQUFJO01BQ2QsZ0JBQWdCO01BQ2hCLGVBQVcsR0FBRztNQUNkLFNBQU8sWUFBWTtNQUNuQixRQUNZO09BQVgsR0FBQSxDQUFLLE9BQUcsRUFBRSxjQUFjLE9BQUksa0JBQVEsS0FBSyxLQUNHO2VBQTNDO2NBRUc7ZUFBSDtPQUFBO01BQUE7S0FBQSxXQUNIO01BQ0MsT0FBTztLQUFBO0lBQUE7V0FFVixjQUFVLFNBQVMscUJBQW1CO0dBQUE7VUFFdkMsSUFBSTtFQUFBO0NBQUEiLCJmaWxlIjoiLi8kZXZhbHVhdGUuanMifQ==