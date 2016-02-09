"use strict";
define(["exports","msl/private/boot","msl/Promise","require","./../U/dom","./compile-or-span","./cashevaluate","./make-codemirror","msl/js","msl/at/at","msl/to-string"],(exports,_boot,Promise_0,require_1,dom_2,compile_45or_45span_3,$evaluate_4,make_45codemirror_5,js_6,_64_7,to_45string_8)=>{
	_ms.getModule(_boot);
	let _$1=_ms.getModule(Promise_0),$done=_ms.get(_$1,"$done"),require=_ms.getDefaultExport(require_1),_$2=_ms.getModule(dom_2),elem=_ms.get(_$2,"elem"),on=_ms.get(_$2,"on"),set_45content_33=_ms.get(_$2,"set-content!"),compile_45or_45span=_ms.getDefaultExport(compile_45or_45span_3),$evaluate=_ms.getDefaultExport($evaluate_4),_$3=_ms.getModule(make_45codemirror_5),ms_45code_45mirror=_ms.get(_$3,"ms-code-mirror"),js_45code_45mirror=_ms.get(_$3,"js-code-mirror"),_$4=_ms.getModule(js_6),null_63=_ms.get(_$4,"null?"),_$5=_ms.getModule(_64_7),_45_33=_ms.get(_$5,"-!"),_$6=_ms.getModule(to_45string_8),inspect=_ms.get(_$6,"inspect");
	let template=elem(elem(`#link-mason-editor`).import,"template");
	let MasonEditor=class MasonEditor extends HTMLElement{
		attachedCallback(){
			let _this=this;
			_this.initialCode=_this.textContent.trim();
			set_45content_33(_this,document.importNode(template.content,true));
			let e=_ms.sub(elem,_this);
			let ms=e(`#ms`);
			_this.ms=ms_45code_45mirror(ms);
			_this.ms.setValue(_this.initialCode);
			if(null_63(_this.getAttribute("no-eval"))){
				let js=e(`#js`);
				_this.js=js_45code_45mirror(js);
				_this.statusIcon=e(`#statusIcon`);
				_this.out=e(`#out`);
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
			if(! _ms.eq("working",_this.status)){
				_this["set-status!"]("working");
				let msCode=_this.ms.getValue();
				let _$0=compile_45or_45span(msCode),success_63=_$0["success?"],result=_$0.result;
				if(success_63){
					_this.js.setValue(result);
					$done(_this["$evaluate!"](result))
				} else {
					_this["show-compile-error!"](result)
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
					_this["show-eval-error!"](_.stack)
				}
			})
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
		"show-compile-error!"(error_45elem){
			let _this=this;
			_this.js.setValue(``);
			_this["set-status!"]("error");
			set_45content_33(_this.out,error_45elem)
		}
		"show-eval-error!"(error_45elem){
			let _this=this;
			_this["set-status!"]("error");
			set_45content_33(_this.out,error_45elem)
		}
	};
	exports.default=document.registerElement("mason-editor",(()=>{
		let built={};
		let prototype=built.prototype=MasonEditor.prototype;
		return built
	})());
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFzb24tZWRpdG9yL21hc29uLWVkaXRvci5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0NBU0EsYUFBVyxLQUFNLEtBQU0sNkJBQThCO0NBRXJELGdCQUFvQiwwQkFBUTtvQkFFUjs7R0FBbEIsa0JBQWdCO0dBRWhCLGlCQUFhLE1BQU0sb0JBQW9CLGlCQUFpQjtHQUV4RCxjQUFJLEtBQUs7R0FFVCxPQUFLLEVBQUc7R0FDUixTQUFPLG1CQUFlO0dBQ3RCLGtCQUFhO0dBR1QsR0FBSCxRQUFPLG1CQUFlLFlBQ1E7SUFBN0IsT0FBSyxFQUFHO0lBQ1IsU0FBTyxtQkFBZTtJQUN0QixpQkFBZSxFQUFHO0lBQ2xCLFVBQVEsRUFBRztJQUdYLEdBQUksWUFBVSxHQUNLLElBQUE7S0FBbEIsdUJBQXdCLEdBQUcsS0FBSyxHQUFJOztJQUNyQyxHQUFJLFdBQVMsR0FDSyxJQUFBO0tBQWpCLHVCQUF3Qjs7SUFFekIscUJBQWM7SUFDZCxZQUFRLFVBQ1UsSUFBQTtLQUFqQixxQkFBYztJQUFBO0lBQ2YseUNBQXdCO1VBRXJCO0lBQUgsT0FBRyxNQUFNLEVBQUc7R0FBQTtHQUVkLHVCQUFzQjtFQUFBO2NBR1Q7O0dBQU4sWUFBSSxVQUFRLGNBQ087SUFBekIscUJBQWM7SUFDZCxXQUFTO0lBQ1QsUUFBb0Isb0JBQWdCO0lBRWhDLEdBQUgsV0FDUTtLQUFQLGtCQUFhO0tBQ2IsTUFBTyxvQkFBWTtJQUFBLE9BRWhCO0tBQUgsNkJBQXFCO0lBQUE7R0FBQTtFQUFBO2VBRVI7OytCQUNFO0lBQ1osSUFDRjtLQUFGLFFBQU0sT0FBRSxVQUFVLFFBQVE7S0FDMUIsc0JBQW9CLFFBQVE7S0FDNUIscUJBQWM7SUFBQSxTQUNmO0tBQ0MsMEJBQWtCOzs7O2dCQUVKLE9BQ007O0dBQXRCLGFBQVc7R0FDWCwyQkFBZ0M7V0FBQTtLQUMvQixLQUFDLFdBQ1E7YUFBUDs7S0FDRixLQUFDLFVBQ087YUFBTjs7S0FDRixLQUFDLFVBQ087YUFBTjs7S0FDRixLQUFDLFFBQ0s7YUFBSjs7Ozs7O3dCQUVxQixhQUNVOztHQUFsQyxrQkFBYztHQUNkLHFCQUFjO0dBQ2QsaUJBQWEsVUFBSztFQUFBO3FCQUVHLGFBQ1U7O0dBQS9CLHFCQUFjO0dBQ2QsaUJBQWEsVUFBSztFQUFBO0NBQUE7aUJBR3BCLHlCQUEwQixlQUNZLEtBQUE7O0VBQXJDLDhCQUFXIiwiZmlsZSI6Ii4vbWFzb24tZWRpdG9yLmpzIn0=