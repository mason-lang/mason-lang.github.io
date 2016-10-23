"use strict";
define(["exports","msl/private/boot","msl/at/at","msl/at/Seq/Seq","msl/Type/Poly","msl/Type/Type","msl/at/at","msl/js","msl/Type/primitive","msl/Function","msl/Type/Pred-Type"],(exports,_boot,_64_0,Seq_1,Poly_2,Type_3,_64_4,js_5,primitive_6,Function_7,Pred_45Type_8)=>{
	_ms.getModule(_boot);
	let _$0=_ms.getModule(_64_0),from_45stream=_ms.get(_$0,"from-stream"),Seq=_ms.getDefaultExport(Seq_1),_$1=_ms.getModule(Seq_1),_43_62_33=_ms.get(_$1,"+>!"),_$2=_ms.getModule(Poly_2),self_45impl_33=_ms.get(_$2,"self-impl!"),impl_33=_ms.get(_$2,"impl!"),_$3=_ms.getModule(Type_3),_61_62=_ms.get(_$3,"=>"),_64=_ms.getDefaultExport(_64_4),_$4=_ms.getModule(_64_4),empty_33=_ms.get(_$4,"empty!"),_45_33=_ms.get(_$4,"-!"),_$5=_ms.getModule(js_5),defined_63=_ms.get(_$5,"defined?"),_$6=_ms.getModule(primitive_6),Str=_ms.get(_$6,"Str"),_$7=_ms.getModule(Function_7),Action=_ms.get(_$7,"Action"),_$8=_ms.getModule(Pred_45Type_8),ObjLit=_ms.get(_$8,"ObjLit");
	_ms.traitWithDefs(NodeList,Seq,{},{});
	self_45impl_33(from_45stream,NodeList,stream=>{
		return _61_62(Array,stream)
	});
	impl_33(empty_33,Node,function(){
		let _this=this;
		for(;;){
			if(! _this.firstChild){
				break
			};
			_this.removeChild(_this.firstChild)
		}
	});
	impl_33(_43_62_33,Node,function(_){
		let _this=this;
		return _this.appendChild(_)
	});
	impl_33(_45_33,Node,function(_){
		let _this=this;
		_this.removeChild(_)
	});
	let elem=exports.elem=function elem(a,b){
		return (()=>{
			if(defined_63(b)){
				return a.querySelector(b)
			} else {
				return document.querySelector(a)
			}
		})()
	};
	let _64elem=exports["@elem"]=function _64elem(a,b){
		return (()=>{
			if(defined_63(b)){
				return a.querySelectorAll(b)
			} else {
				return document.querySelectorAll(a)
			}
		})()
	};
	let on=exports.on=function on(event_45name,elem,action){
		_ms.checkInstance(Str,event_45name,"event-name");
		_ms.checkInstance(HTMLElement,elem,"elem");
		_ms.checkInstance(Action,action,"action");
		return elem.addEventListener(event_45name,action)
	};
	let replace_45node_33=exports["replace-node!"]=function replace_45node_33(old_45node,new_45node){
		_ms.checkInstance(Node,old_45node,"old-node");
		_ms.checkInstance(Node,new_45node,"new-node");
		return old_45node.parentNode.replaceChild(new_45node,old_45node)
	};
	let set_45content_33=exports["set-content!"]=function set_45content_33(elem,content){
		_ms.checkInstance(Node,elem,"elem");
		empty_33(elem);
		do_45set_45content_33(elem,content)
	};
	let do_45set_45content_33=function do_45set_45content_33(elem,content){
		{
			let _=content;
			if(_ms.hasInstance(Str,_)){
				elem.textContent=_
			} else if(_ms.hasInstance(Node,_)){
				elem.appendChild(_)
			} else if(_ms.hasInstance(_64,_)){
				for(let sub_45elem of _){
					elem.appendChild((()=>{
						let _=sub_45elem;
						if(_ms.hasInstance(Str,_)){
							return document.createTextNode(_)
						} else {
							return _
						}
					})())
				}
			} else throw new (Error)("No branch of `case` matches.")
		}
	};
	let new_45elem=exports["new-elem"]=function new_45elem(elem_45type,b,c){
		_ms.checkInstance(Str,elem_45type,"elem-type");
		return (()=>{
			let elem=document.createElement(elem_45type);
			{
				let _=b;
				if(! defined_63(_)){
					_ms.assertNot(defined_63,c)
				} else if(_ms.hasInstance(ObjLit,_)){
					Object.assign(elem,b);
					if(defined_63(c)){
						do_45set_45content_33(elem,c)
					}
				} else {
					do_45set_45content_33(elem,b);
					_ms.assertNot(defined_63,c)
				}
			};
			return elem
		})()
	};
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvVS9kb20ubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzttQkFNTyxTQUFTO0NBRWhCLGVBQVcsY0FBWSxTQUFVLFFBQ007U0FBdEMsT0FBRyxNQUFNO0NBQUE7Q0FFVixRQUFNLFNBQU8sS0FDUSxVQUFBOztFQUVqQixPQUFBO0dBQUssS0FBQSxpQkFDVztJQUFqQjtHQUFBO0dBQ0Qsa0JBQWE7OztDQUVmLFFBQU0sVUFBSSxLQUFPLFNBQUEsRUFDQzs7U0FBakIsa0JBQWE7Q0FBQTtDQUVkLFFBQU0sT0FBRyxLQUFRLFNBQUEsRUFDQzs7RUFBakIsa0JBQWE7Q0FBQTtDQUVkLHNCQUFPLGNBQUEsRUFBRSxFQUNDO1NBQ0w7R0FBSCxHQUFBLFdBQVMsR0FDQztXQUFULGdCQUFnQjtHQUFBLE9BRWI7V0FBSCx1QkFBdUI7R0FBQTtFQUFBO0NBQUE7Q0FFMUIsNkJBQVEsaUJBQUEsRUFBRSxFQUNDO1NBQ047R0FBSCxHQUFBLFdBQVMsR0FDQztXQUFULG1CQUFtQjtHQUFBLE9BRWhCO1dBQUgsMEJBQTBCO0dBQUE7RUFBQTtDQUFBO0NBRTdCLGtCQUFLLFlBQUEsYUFBZSxLQUFpQixPQUNhO29CQURsQztvQkFBUztvQkFBbUI7U0FDM0Msc0JBQXNCLGFBQVc7Q0FBQTtDQUVsQywrQ0FBZ0IsMkJBQUEsV0FBYyxXQUNhO29CQURsQjtvQkFBYztTQUN0QyxtQ0FBaUMsV0FBUztDQUFBO0NBRTNDLDZDQUFnQiwwQkFBQSxLQUFVLFFBQ087b0JBRFo7RUFDcEIsU0FBTztFQUNQLHNCQUFnQixLQUFLO0NBQUE7Q0FFdEIsMEJBQW9CLCtCQUFBLEtBQUssUUFDTztFQUExQjtHQUFBLE1BQUE7R0FDSixtQkFBQyxJQUFELEdBQ0k7SUFBSCxpQkFBb0I7R0FBQSxPQUNyQixtQkFBQyxLQUFELEdBQ0s7SUFBSixpQkFBaUI7R0FBQSxPQUNsQixtQkFBQyxJQUFELEdBQ0U7SUFBRyxRQUFBLGNBQVksRUFDQztLQUFoQixpQkFBc0I7TUFBQSxNQUFBO01BQ3JCLG1CQUFDLElBQUQsR0FDSTtjQUFILHdCQUF1QjtNQUFBLE9BRXBCO2NBQUg7TUFBQTtLQUFBO0lBQUE7R0FBQTs7O0NBRU4sbUNBQVcsb0JBQUEsWUFBYyxFQUFFLEVBQ0M7b0JBRFA7U0FDZixLQUN3QztZQUR4Qyx1QkFBdUI7R0FDdEI7SUFBQSxNQUFBO0lBQ0osR0FBQSxFQUFJLFdBQVEsR0FDQzttQkFBTCxXQUFTO0lBQUEsT0FDakIsbUJBQUMsT0FBRCxHQUNPO0tBQU4sY0FBYyxLQUFLO0tBQ2hCLEdBQUEsV0FBUyxHQUNDO01BQVosc0JBQWdCLEtBQUs7S0FBQTtJQUFBLE9BRW5CO0tBQUgsc0JBQWdCLEtBQUs7bUJBQ2QsV0FBUztJQUFBO0dBQUEiLCJmaWxlIjoiLi9kb20uanMifQ==