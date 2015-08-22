"use strict";
define(["exports","msl/private/boot","mason-compile/Compiler","./../U/dom","msl/at/Seq/Stream"],(exports,_boot,Compiler_0,dom_1,Stream_2)=>{
	_ms.getModule(_boot);
	let Compiler=_ms.getDefaultExport(Compiler_0),_$0=_ms.getModule(dom_1),new_45elem=_ms.get(_$0,"new-elem"),Stream=_ms.getDefaultExport(Stream_2);
	let compiler=new (Compiler)((()=>{
		let built={};
		let includeSourceMap=built.includeSourceMap=false;
		return built
	})());
	let compile_45or_45span=exports.default=function compile_45or_45span(ms_45code){
		let built={};
		let _=compiler.compile(ms_45code,`web-sample.ms`);
		let res=_.result;
		let success_63=built["success?"]=! _ms.contains(Error,res);
		let result=built.result=(success_63?res:format(res.warning,"error"));
		return built
	};
	let format=function format(warning,className){
		return new_45elem("span",{
			className:className
		},(()=>{
			let built=[];
			_ms.add(built,new_45elem("span",{
				className:"loc",
				textContent:warning.loc
			}));
			_ms.add(built,new_45elem("message",{
				className:"message"
			},(()=>{
				return new (Stream)(()=>{
					return warning.messageParts(code=>{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFzb24tZWRpdG9yL2NvbXBpbGUtb3Itc3Bhbi5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0NBSUEsYUFBVyxLQUFJLFVBQ1EsS0FBQTs7RUFBdEIsNENBQWtCOzs7Q0FFbkIsd0NBQWtCLDZCQUFBOztFQUNqQixNQUFJLGlCQUFpQixVQUFTO0VBQzlCLFFBQU87RUFDUCxpQ0FBVSxlQUFRLE1BQUo7RUFDZCx3QkFBYSxDQUFBLFdBQVMsSUFBSyxPQUFPLFlBQWE7OztDQU1oRCxXQUFVLGdCQUFBLFFBQVE7U0FFakIsV0FBVSxPQUFLO2FBQVk7RUFBQSxFQUNVLEtBQUE7O2lCQUFsQyxXQUFVLE9BQUs7Y0FBYTtnQkFBaUI7O2lCQUM3QyxXQUFVLFVBQVE7Y0FBYTtHQUFBLEVBQ1EsS0FBQTtXQUF4QyxLQUFJLFFBQ1E7WUFBWCxxQkFBc0I7YUFDckIsV0FBVSxPQUFLO2lCQUFhO21CQUFrQjtNQUFBO0tBQUE7SUFBQTtHQUFBIiwiZmlsZSI6Ii4vY29tcGlsZS1vci1zcGFuLmpzIn0=