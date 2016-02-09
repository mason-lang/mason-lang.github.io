"use strict";
define(["exports","msl/private/boot","mason-compile/Compiler","./../U/dom","msl/Type/primitive","msl/at/Seq/Stream"],(exports,_boot,Compiler_0,dom_1,primitive_2,Stream_3)=>{
	_ms.getModule(_boot);
	let Compiler=_ms.getDefaultExport(Compiler_0),_$0=_ms.getModule(dom_1),new_45elem=_ms.get(_$0,"new-elem"),_$1=_ms.getModule(primitive_2),Str=_ms.get(_$1,"Str"),Stream=_ms.getDefaultExport(Stream_3);
	let compiler=new (Compiler)((()=>{
		let built={};
		let includeSourceMap=built.includeSourceMap=false;
		return built
	})());
	let compile_45or_45span=exports.default=function compile_45or_45span(ms_45code){
		_ms.checkInstance(Str,ms_45code,"ms-code");
		let built={};
		let _=compiler.compile(ms_45code,`web-sample.ms`);
		let res=_.result;
		let success_63=built["success?"]=! _ms.hasInstance(Error,res);
		let result=built.result=(success_63?res.code:format(res.errorMessage,"error"));
		return built
	};
	let format=function format(errorMessage,className){
		return new_45elem("span",{
			className:className
		},(()=>{
			let built=[];
			_ms.add(built,new_45elem("span",{
				className:"loc",
				textContent:errorMessage.loc
			}));
			_ms.add(built,new_45elem("message",{
				className:"message"
			},(()=>{
				return new (Stream)(()=>{
					return errorMessage.messageParts(code=>{
						return new_45elem("span",{
							className:"code",
							textContent:code
						})
					})
				})
			})()));
			return built
		})())
	};
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFzb24tZWRpdG9yL2NvbXBpbGUtb3Itc3Bhbi5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0NBSUEsYUFBVyxLQUFJLFVBQ1EsS0FBQTs7RUFBdEIsNENBQWtCOzs7Q0FFbkIsd0NBQWtCLDZCQUFBLFVBQ1c7b0JBREg7O0VBRXpCLE1BQUksaUJBQWlCLFVBQVM7RUFDOUIsUUFBTTtFQUNOLGlDQUFVLGtCQUFRLE1BQUo7RUFDZCx3QkFBYSxDQUFBLFdBQVMsU0FBVSxPQUFPLGlCQUFrQjs7O0NBTTFELFdBQVUsZ0JBQUEsYUFBYSxVQUNTO1NBQy9CLFdBQVUsT0FBSzthQUFZO0VBQUEsRUFDVSxLQUFBOztpQkFBbEMsV0FBVSxPQUFLO2NBQWE7Z0JBQWlCOztpQkFDN0MsV0FBVSxVQUFRO2NBQWE7R0FBQSxFQUNRLEtBQUE7V0FBeEMsS0FBSSxRQUNRLElBQUE7WUFBWCwwQkFBMkIsTUFDSTthQUE5QixXQUFVLE9BQUs7aUJBQWE7bUJBQWtCO01BQUE7S0FBQTtJQUFBO0dBQUEiLCJmaWxlIjoiLi9jb21waWxlLW9yLXNwYW4uanMifQ==