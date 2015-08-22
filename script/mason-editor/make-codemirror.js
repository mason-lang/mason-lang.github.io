"use strict";
define(["exports","msl/private/boot","codemirror/mode/javascript/javascript","./codemirror-mason-mode","codemirror/lib/codemirror","msl/Object"],(exports,_boot,javascript_0,codemirror_45mason_45mode_1,codemirror_2,Object_3)=>{
	_ms.getModule(_boot);
	_ms.getModule(javascript_0);
	_ms.getModule(codemirror_45mason_45mode_1);
	let codemirror=_ms.getDefaultExport(codemirror_2),_$0=_ms.getModule(Object_3),object_45merge=_ms.get(_$0,"object-merge");
	let common_45opts=(()=>{
		let built={};
		let autoClearEmptyLines=built.autoClearEmptyLines=true;
		let indentWithTabs=built.indentWithTabs=true;
		let lineNumbers=built.lineNumbers=true;
		let lineWrapping=built.lineWrapping=true;
		let viewportMargin=built.viewportMargin=Number.POSITIVE_INFINITY;
		return built
	})();
	let special=function special(special_45opts){
		let base_45opts=object_45merge(common_45opts,special_45opts);
		return (dom_45element,opts)=>{
			let all_45opts=object_45merge(base_45opts,opts);
			return codemirror(dom_45element,all_45opts)
		}
	};
	let ms_45code_45mirror=exports["ms-code-mirror"]=special((()=>{
		let built={};
		let mode=built.mode="mason";
		let theme=built.theme="monokai";
		return built
	})());
	let js_45code_45mirror=exports["js-code-mirror"]=special((()=>{
		let built={};
		let mode=built.mode="javascript";
		let readOnly=built.readOnly="true";
		let theme=built.theme="base16-light";
		return built
	})());
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFzb24tZWRpdG9yL21ha2UtY29kZW1pcnJvci5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Q0FPQSxrQkFDYSxLQUFBOztFQUFaLGtEQUFxQjtFQUNyQix3Q0FBZ0I7RUFDaEIsa0NBQWE7RUFDYixvQ0FBYztFQUVkLHdDQUFnQjs7O0NBRWpCLFlBQVcsaUJBQUE7RUFDVixnQkFBWSxlQUFhLGNBQVk7U0FDcEMsQ0FBQSxjQUFZO0dBQ1osZUFBVyxlQUFhLFlBQVU7VUFDbEMsV0FBVyxjQUFZO0VBQUE7Q0FBQTtDQUV6QixpREFBZ0IsUUFDTyxLQUFBOztFQUF0QixvQkFBTztFQUNQLHNCQUFROzs7Q0FFVCxpREFBZ0IsUUFDTyxLQUFBOztFQUF0QixvQkFBTztFQUNQLDRCQUFXO0VBQ1gsc0JBQVEiLCJmaWxlIjoiLi9tYWtlLWNvZGVtaXJyb3IuanMifQ==