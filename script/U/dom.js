"use strict";
define(["exports","msl/private/boot","msl/at/at-Type","msl/Type/Kind","msl/at/Seq/Seq","msl/Type/Method","msl/Type/Type","msl/at/at","msl/js","msl/Function","msl/Type/Pred-Type"],(exports,_boot,_64_45Type_0,Kind_1,Seq_2,Method_3,Type_4,_64_5,js_6,Function_7,Pred_45Type_8)=>{
	_ms.getModule(_boot);
	let _64_45Type=_ms.getDefaultExport(_64_45Type_0),_$0=_ms.getModule(_64_45Type_0),from_45stream=_ms.get(_$0,"from-stream"),_$1=_ms.getModule(Kind_1),kind_33=_ms.get(_$1,"kind!"),self_45kind_33=_ms.get(_$1,"self-kind!"),Seq=_ms.getDefaultExport(Seq_2),_$2=_ms.getModule(Seq_2),_43_62_33=_ms.get(_$2,"+>!"),_$3=_ms.getModule(Method_3),self_45impl_33=_ms.get(_$3,"self-impl!"),impl_33=_ms.get(_$3,"impl!"),impl_45for=_ms.get(_$3,"impl-for"),_$4=_ms.getModule(Type_4),_61_62=_ms.get(_$4,"=>"),_64=_ms.getDefaultExport(_64_5),_$5=_ms.getModule(_64_5),iterator=_ms.get(_$5,"iterator"),empty_33=_ms.get(_$5,"empty!"),_45_33=_ms.get(_$5,"-!"),_$6=_ms.getModule(js_6),defined_63=_ms.get(_$6,"defined?"),_$7=_ms.getModule(Function_7),Action=_ms.get(_$7,"Action"),_$8=_ms.getModule(Pred_45Type_8),ObjLit=_ms.get(_$8,"ObjLit");
	kind_33(NodeList,Seq);
	self_45kind_33(NodeList,_64_45Type);
	self_45impl_33(from_45stream,NodeList,stream=>{
		return _61_62(Array,stream)
	});
	impl_33(iterator,NodeList,impl_45for(iterator,Array));
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
		_ms.checkContains(String,event_45name,"event-name");
		_ms.checkContains(HTMLElement,elem,"elem");
		_ms.checkContains(Action,action,"action");
		return elem.addEventListener(event_45name,action)
	};
	let replace_45node_33=exports["replace-node!"]=function replace_45node_33(old_45node,new_45node){
		_ms.checkContains(Node,old_45node,"old-node");
		_ms.checkContains(Node,new_45node,"new-node");
		return old_45node.parentNode.replaceChild(new_45node,old_45node)
	};
	let set_45content_33=exports["set-content!"]=function set_45content_33(elem,content){
		_ms.checkContains(Node,elem,"elem");
		empty_33(elem);
		do_45set_45content_33(elem,content)
	};
	let do_45set_45content_33=function do_45set_45content_33(elem,content){
		{
			let _=content;
			if(_ms.contains(String,_)){
				elem.textContent=_
			} else if(_ms.contains(Node,_)){
				elem.appendChild(_)
			} else if(_ms.contains(_64,_)){
				for(let sub_45elem of _){
					elem.appendChild((()=>{
						let _=sub_45elem;
						if(_ms.contains(String,_)){
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
		_ms.checkContains(String,elem_45type,"elem-type");
		return (()=>{
			let elem=document.createElement(elem_45type);
			{
				let _=b;
				if(! defined_63(_)){
					_ms.assertNot(defined_63,c)
				} else if(_ms.contains(ObjLit,_)){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvVS9kb20ubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztDQU1BLFFBQU0sU0FBUztDQUNmLGVBQVcsU0FBUztDQUVwQixlQUFXLGNBQVksU0FBVTtTQUNoQyxPQUFHLE1BQU07Q0FBQTtDQUVWLFFBQU0sU0FBUyxTQUFVLFdBQVMsU0FBUztDQUUzQyxRQUFNLFNBQU8sS0FDUTtNQVVwQjtFQVJHLE9BQUE7R0FBSyxLQVFSLGlCQVBtQjtJQUFqQjtHQUFBO0dBT0Y7OztDQUpELFFBQU0sVUFBSSxLQUFRLFNBQUE7TUFJakI7U0FBQSxrQkFIYztDQUFBO0NBRWYsUUFBTSxPQUFHLEtBQVMsU0FBQTtNQUNqQjtFQUFBLGtCQUFjO0NBQUE7Q0FFZixzQkFBTyxjQUFBLEVBQUU7U0FFSjtHQUFILEdBQUEsV0FBUyxHQUNDO1dBQVQsZ0JBQWdCO0dBQUEsT0FFYjtXQUFILHVCQUF1QjtHQUFBO0VBQUE7Q0FBQTtDQUUxQiw2QkFBUSxpQkFBQSxFQUFFO1NBRUw7R0FBSCxHQUFBLFdBQVMsR0FDQztXQUFULG1CQUFtQjtHQUFBLE9BRWhCO1dBQUgsMEJBQTBCO0dBQUE7RUFBQTtDQUFBO0NBRTdCLGtCQUFLLFlBQUEsYUFBa0IsS0FBaUI7b0JBQXhCO29CQUFZO29CQUFtQjtTQUM5QyxzQkFBc0IsYUFBVztDQUFBO0NBRWxDLCtDQUFnQiwyQkFBQSxXQUFjO29CQUFMO29CQUFjO1NBQ3RDLG1DQUFpQyxXQUFTO0NBQUE7Q0FFM0MsNkNBQWdCLDBCQUFBLEtBQVU7b0JBQUw7RUFDcEIsU0FBTztFQUNQLHNCQUFnQixLQUFLO0NBQUE7Q0FFdEIsMEJBQW9CLCtCQUFBLEtBQUs7RUFDbkI7R0FBQSxNQUFBO0dBQ0osZ0JBQUMsT0FBRCxHQUNPO0lBQU4saUJBQXFCO0dBQUEsT0FDdEIsZ0JBQUMsS0FBRCxHQUNLO0lBQUosaUJBQWtCO0dBQUEsT0FDbkIsZ0JBQUMsSUFBRCxHQUNFO0lBQUcsUUFBQSxjQUFhLEVBQ0E7S0FBaEIsaUJBQXNCO01BQUEsTUFBQTtNQUNyQixnQkFBQyxPQUFELEdBQ087Y0FBTix3QkFBd0I7TUFBQSxPQUVyQjtjQUFGO01BQUE7S0FBQTtJQUFBO0dBQUE7OztDQUVQLG1DQUFXLG9CQUFBLFlBQWlCLEVBQUU7b0JBQVQ7U0FDZixLQUN3QztZQUR4Qyx1QkFBdUI7R0FDdEI7SUFBQSxNQUFBO0lBQ0osR0FBQSxFQUFJLFdBQVMsR0FDQTttQkFBTCxXQUFTO0lBQUEsT0FDakIsZ0JBQUMsT0FBRCxHQUNPO0tBQU4sY0FBYyxLQUFLO0tBQ2hCLEdBQUEsV0FBUyxHQUNDO01BQVosc0JBQWdCLEtBQUs7S0FBQTtJQUFBLE9BRW5CO0tBQUgsc0JBQWdCLEtBQUs7bUJBQ2QsV0FBUztJQUFBO0dBQUEiLCJmaWxlIjoiLi9kb20uanMifQ==