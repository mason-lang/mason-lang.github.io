"use strict";
define(["exports","msl/private/boot"],(exports,_boot)=>{
	_ms.getModule(_boot);
	exports.default=(_45require_45,js)=>{
		let fun=Function("define",js);
		return new (Promise)((resolve,reject)=>{
			let define=function define(required,do_45define_33){
				let exports=required.shift();
				if(! _ms.eq(exports,"exports"))throw new (Error)("Assertion failed.");
				let successful_45require=function successful_45require(){
					let modules=[].slice.call(arguments,0);
					try {
						let exports={};
						modules.unshift(exports);
						do_45define_33(...modules);
						let keys=Object.keys(exports);
						resolve((()=>{
							if((_ms.eq(1,keys.length)&&_ms.eq("default",_ms.sub(keys,0)))){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFzb24tZWRpdG9yLyRldmFsdWF0ZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7aUJBQUMsQ0FBQSxjQUFVLEtBQ0U7RUFBWixRQUFNLFNBQVUsU0FBTztTQUN2QixLQUFJLFNBQVMsQ0FBQSxRQUFRLFNBQ007R0FBMUIsV0FBVSxnQkFBQSxTQUFTLGVBQ1U7SUFBNUIsWUFBVTtJQUNILFlBQUcsUUFBUztJQUNuQix5QkFBdUIsK0JBQ1U7O0tBQzFCLElBQ0Y7TUFBRixZQUFVO01BQ1YsZ0JBQWdCO01BQ2hCLGtCQUFjO01BQ2QsU0FBTyxZQUFZO01BQ25CLFFBQ1k7T0FBWCxHQUFBLFFBQVEsRUFBRSxxQkFBaUIsa0JBQVEsS0FBSyxLQUNFO2VBQXpDO2NBRUc7ZUFBSDtPQUFBO01BQUE7S0FBQSxXQUNIO01BQ0MsT0FBTztLQUFBO0lBQUE7V0FFVixjQUFVLFNBQVMscUJBQW1CO0dBQUE7VUFFdkMsSUFBSTtFQUFBO0NBQUEiLCJmaWxlIjoiLi8kZXZhbHVhdGUuanMifQ==