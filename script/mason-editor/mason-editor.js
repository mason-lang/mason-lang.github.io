"use strict";
define(["exports","msl/private/boot","msl/Promise","require","./../U/dom","./compile-or-span","./cashevaluate","./make-codemirror","msl/js","msl/at/at","msl/compare","msl/to-string"],(exports,_boot,Promise_0,require_1,dom_2,compile_45or_45span_3,$evaluate_4,make_45codemirror_5,js_6,_64_7,compare_8,to_45string_9)=>{
	_ms.getModule(_boot);
	let _$1=_ms.getModule(Promise_0),$done=_ms.get(_$1,"$done"),require=_ms.getDefaultExport(require_1),_$2=_ms.getModule(dom_2),elem=_ms.get(_$2,"elem"),on=_ms.get(_$2,"on"),set_45content_33=_ms.get(_$2,"set-content!"),compile_45or_45span=_ms.getDefaultExport(compile_45or_45span_3),$evaluate=_ms.getDefaultExport($evaluate_4),_$3=_ms.getModule(make_45codemirror_5),ms_45code_45mirror=_ms.get(_$3,"ms-code-mirror"),js_45code_45mirror=_ms.get(_$3,"js-code-mirror"),_$4=_ms.getModule(js_6),null_63=_ms.get(_$4,"null?"),_$5=_ms.getModule(_64_7),_45_33=_ms.get(_$5,"-!"),_$6=_ms.getModule(compare_8),_61_63=_ms.get(_$6,"=?"),_$7=_ms.getModule(to_45string_9),inspect=_ms.get(_$7,"inspect");
	let template=elem(elem(`#link-mason-editor`).import,"template");
	let MasonEditor=class MasonEditor extends HTMLElement{
		attachedCallback(){
			let _this=this;
			_this.initialCode=_this.textContent.trim();
			set_45content_33(_this,document.importNode(template.content,true));
			let e=_ms.sub(elem,_this);
			let ms=e(`#ms`);
			_ms.newProperty(_this,"ms",ms_45code_45mirror(ms));
			_this.ms.setValue(_this.initialCode);
			if(null_63(_this.getAttribute("no-eval"))){
				let js=e(`#js`);
				_ms.newProperty(_this,"js",js_45code_45mirror(js));
				_ms.newProperty(_this,"statusIcon",e(`#statusIcon`));
				_ms.newProperty(_this,"out",e(`#out`));
				on("mouseover",js,()=>{
					js.style["max-height"]=`${elem(js,`.CodeMirror`).offsetHeight}px`
				});
				on("mouseout",js,()=>{
					js.style["max-height"]=`0.5em`
				});
				_this["set-status!"]("writing");
				_this.ms.on("changes",()=>{
					_this["set-status!"]("writing")
				});
				_this.statusIcon.onclick=_ms.methodBound(_this,"compile!")
			} else {
				_45_33(_this,e("output"))
			};
			_this.style.visibility="visible"
		}
		"compile!"(){
			let _this=this;
			if(! _61_63("working",_this.status)){
				_this["set-status!"]("working");
				let msCode=_this.ms.getValue();
				let _$0=compile_45or_45span(msCode),success_63=_$0["success?"],result=_$0.result;
				if(success_63){
					_this.js.setValue(result);
					$done(_this["$evaluate!"](result))
				} else {
					_this["-show-compile-error"](result)
				}
			}
		}
		"$evaluate!"(js){
			let _this=this;
			return _ms.async(function*(){
				try {
					let val=(yield $evaluate(require,js));
					_this.out.textContent=inspect(val);
					_this["set-status!"]("compiled")
				}catch(_){
					_this["-show-eval-error"](_.stack)
				}
			})
		}
		"-show-compile-error"(error_45elem){
			let _this=this;
			_this.js.setValue("");
			_this["set-status!"]("error");
			set_45content_33(_this.out,error_45elem)
		}
		"-show-eval-error"(error_45elem){
			let _this=this;
			_this["set-status!"]("error");
			set_45content_33(_this.out,error_45elem)
		}
		"set-status!"(status){
			let _this=this;
			_this.status=status;
			_this.statusIcon.className=(()=>{
				switch(status){
					case "compiled":{
						return `fa fa-check`
					}
					case "writing":{
						return `fa fa-refresh`
					}
					case "working":{
						return `fa fa-refresh spinning`
					}
					case "error":{
						return `fa fa-exclamation`
					}
					default:throw new (Error)("No branch of `switch` matches.")
				}
			})()
		}
	};
	exports.default=document.registerElement("mason-editor",(()=>{
		let built={};
		let prototype=built.prototype=MasonEditor.prototype;
		return built
	})());
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFzb24tZWRpdG9yL21hc29uLWVkaXRvci5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0NBU0EsYUFBVyxLQUFNLEtBQU0sNkJBQThCO0NBRXJELGdCQUFvQiwwQkFBQTs7T0FrRWxCO0dBQUE7R0E5REEsaUJBOERBLE1BOURtQixvQkFBb0IsaUJBQWlCO0dBRXhELGNBQUksS0E0REo7R0ExREEsT0FBSyxFQUFHO21CQTBEUixXQXpETSxtQkFBZTtHQXlEckI7R0FyREksR0FBSCxRQXFERCxtQkFyRHVCLFlBQ1E7SUFBN0IsT0FBSyxFQUFHO29CQW9EVixXQW5EUSxtQkFBZTtvQkFtRHZCLG1CQWxEZ0IsRUFBRztvQkFrRG5CLFlBakRTLEVBQUc7SUFHVixHQUFJLFlBQVUsR0FDSztLQUFsQix1QkFBd0IsR0FBRyxLQUFLLEdBQUk7O0lBQ3JDLEdBQUksV0FBUyxHQUNLO0tBQWpCLHVCQUF3Qjs7SUEyQzNCLHFCQXpDZ0I7SUF5Q2hCLFlBeENVLFVBQ1U7S0F1Q3BCLHFCQXZDaUI7SUFBQTtJQXVDakI7VUFwQ0s7SUFBSCxPQW9DRixNQXBDVyxFQUFHO0dBQUE7R0FvQ2QsdUJBbENzQjtFQUFBOztPQWtDdEI7R0EvQk8sS0FBQSxPQUFJLFVBK0JYLGNBOUIwQjtJQThCMUIscUJBOUJlO0lBQ2QsV0E2QkQ7SUE1QkMsUUFBa0Isb0JBQWdCO0lBRTlCLEdBQUgsV0FDUTtLQXlCVixrQkF6QmdCO0tBQ2IsTUF3Qkgsb0JBeEJzQjtJQUFBLE9BRWhCO0tBc0JOLDZCQXRCd0I7SUFBQTtHQUFBO0VBQUE7ZUFFVjtPQW9CZDs7SUFsQk0sSUFDRjtLQUFGLFFBQU0sT0FBRSxVQUFVLFFBQVE7S0FpQjVCLHNCQWhCc0IsUUFBUTtLQWdCOUIscUJBZmdCO0lBQUEsU0FDZjtLQWNELDBCQWJxQjs7Ozt3QkFFQztPQVd0QjtHQUFBLGtCQVZjO0dBVWQscUJBVGM7R0FDZCxpQkFRQSxVQVJrQjtFQUFBO3FCQUVDO09BTW5CO0dBQUEscUJBTGM7R0FDZCxpQkFJQSxVQUprQjtFQUFBO2dCQUVKO09BRWQ7R0FBQSxhQURXO0dBQ1gsMkJBQWdDO1dBQUE7VUFDOUIsV0FDUTthQUFQOztVQUNELFVBQ087YUFBTjs7VUFDRCxVQUNPO2FBQU47O1VBQ0QsUUFDSzthQUFKOzs7Ozs7O2lCQUVMLHlCQUEwQixlQUNZLEtBQUE7O0VBQXJDLDhCQUFXIiwiZmlsZSI6Ii4vbWFzb24tZWRpdG9yLmpzIn0=