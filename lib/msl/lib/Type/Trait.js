"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../js","./../private/bootstrap","./Poly"],(exports,js_0,bootstrap_1,Poly_2)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(js_0),defined_63=_ms.get(_$0,"defined?"),exists_63=_ms.get(_$0,"exists?"),_$1=_ms.getModule(bootstrap_1),implContains=_ms.get(_$1,"implContains"),msDef=_ms.get(_$1,"msDef"),_$2=_ms.getModule(Poly_2),propagate_45method_45down_33=_ms.get(_$2,"propagate-method-down!"),propagate_45static_45down_33=_ms.get(_$2,"propagate-static-down!");
		let Trait=exports.default=(()=>{
			let _=class Trait{
				constructor(params){
					let _this=this;
					_this.name=params.name;
					_this["super-traits"]=[];
					_this.implementors=_ms.checkInstance(Array,(()=>{
						let _=params.implementors;
						if(defined_63(_)){
							return Object.freeze(_)
						} else {
							return []
						}
					})(),"implementors");
					_this["symbol-for-isa"]=Symbol(`isa-${_this.name}`);
					_this.prototype=Object.create(null);
					Object.defineProperty(_this.prototype,_this["symbol-for-isa"],(()=>{
						return {
							value:true,
							writable:false,
							enumerable:false,
							configurable:false
						}
					})());
					for(let _ of _this.implementors){
						on_45implementor_33(_,_this)
					};
					if(defined_63(params["super-traits"])){
						for(let _ of params["super-traits"]){
							unchecked_45trait_33(_this,_)
						}
					}
				}
			};
			implContains(_,function(_){
				let _this=this;
				return (exists_63(_)&&Boolean(_[_this["symbol-for-isa"]]))
			});
			return _
		})();
		let can_45subtype_63=exports["can-subtype?"]=function can_45subtype_63(_){
			_ms.checkInstance(Trait,_,"_");
			return ! Object.isFrozen(_.implementors)
		};
		let unchecked_45trait_33=exports["unchecked-trait!"]=function unchecked_45trait_33(implementor,trt){
			trt.implementors.push(implementor);
			on_45implementor_33(implementor,trt)
		};
		let _64concrete_45implementors=exports["@concrete-implementors"]=function _64concrete_45implementors(trt){
			_ms.checkInstance(Trait,trt,"trt");
			return (()=>{
				let built=[];
				for(let _ of trt.implementors){
					if(_ms.hasInstance(Trait,_)){
						_ms.addMany(built,_64concrete_45implementors(_))
					} else {
						_ms.add(built,_)
					}
				};
				return built
			})()
		};
		msDef("trait",(_45name,super_45traits,static_45methods,methods)=>{
			let trt=new (Trait)((()=>{
				let built={};
				built.name=_45name;
				built["super-traits"]=super_45traits;
				return built
			})());
			return (()=>{
				let _=trt;
				assign_45defs_33(_,static_45methods);
				assign_45defs_33(_.prototype,methods);
				return _
			})()
		});
		let trait_45do_33=function trait_45do_33(implementor,trt){
			_ms.checkInstance(Trait,trt,"trt");
			if(! can_45subtype_63(trt))throw new (Error)(`${trt} is not open to new subtypes.`);
			_ms.assertNot(has_45trait_63,implementor,trt);
			unchecked_45trait_33(implementor,trt)
		};
		msDef("traitDo",trait_45do_33);
		msDef("traitWithDefs",(implementor,trt,static_45methods,methods)=>{
			_ms.checkInstance(Trait,trt,"trt");
			trait_45do_33(implementor,trt);
			assign_45defs_33(implementor,static_45methods);
			assign_45defs_33(implementor.prototype,methods)
		});
		let has_45trait_63=exports["has-trait?"]=function has_45trait_63(implementor,trt){
			_ms.checkInstance(Trait,trt,"trt");
			return (()=>{
				let _=implementor;
				if(_ms.hasInstance(Trait,_)){
					return _["super-traits"].some(super_45trait=>{
						return (_ms.eq(super_45trait,trt)||has_45trait_63(super_45trait,trt))
					})
				} else {
					return _ms.hasInstance(trt,implementor.prototype)
				}
			})()
		};
		let _64p_45all=_=>Object.getOwnPropertyNames(_).concat(Object.getOwnPropertySymbols(_));
		let on_45implementor_33=function on_45implementor_33(_,trt){
			if(_ms.hasInstance(Trait,_)){
				_["super-traits"].push(trt)
			};
			inherit_45methods_33(_,trt)
		};
		let inherit_45methods_33=function inherit_45methods_33(implementor,trt){
			let rec_33=function rec_33(trt){
				for(let _ of _64p_45all(trt.prototype)){
					propagate_45method_45down_33(implementor,_,trt.prototype[_])
				};
				for(let _ of Object.keys(trt)){
					switch(_){
						case "name":
						case "super-traits":
						case "implementors":
						case "symbol-for-isa":
						case "prototype":{
							break
						}
						default:propagate_45static_45down_33(implementor,_,trt[_])
					}
				};
				for(let _ of Object.getOwnPropertySymbols(trt)){
					propagate_45static_45down_33(implementor,_,trt[_])
				};
				for(let _ of trt["super-traits"]){
					rec_33(_)
				}
			};
			rec_33(trt)
		};
		let assign_45defs_33=function assign_45defs_33(assignee,definitions){
			let def_33=function def_33(_){
				Object.defineProperty(assignee,_,Object.getOwnPropertyDescriptor(definitions,_))
			};
			for(let _ of Object.getOwnPropertyNames(definitions)){
				def_33(_)
			};
			for(let _ of Object.getOwnPropertySymbols(definitions)){
				def_33(_)
			}
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvVHlwZS9UcmFpdC5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQUtBLDBCQUNZLEtBR1Q7O0lBS1EsWUFBQSxPQUNNOztLQUNmLFdBQVM7S0FFVCxzQkFBaUI7S0FHakIscUNBQWMsTUFBYztNQUFNLE1BQU47TUFDM0IsR0FBQSxXQUFTLEdBQ0E7Y0FDUixjQUFjO01BQUEsT0FFWDtjQUFIO01BQUE7S0FBQTtLQUVGLHdCQUFtQixPQUFRLE9BQU07S0FDakMsZ0JBQWMsY0FBYztLQUU1QixzQkFBc0IsZ0JBQVcsd0JBQ2UsS0FBQTthQUEvQzthQUFRO2dCQUFlO2tCQUFrQjtvQkFBb0I7TUFBQTtLQUFBO0tBRTFELFFBQUEsS0FBQSxtQkFDYTtNQUFoQixvQkFBZ0IsRUFBRTtLQUFBO0tBQ2hCLEdBQUEsV0FBUyx3QkFDbUI7TUFBMUIsUUFBQSxLQUFBLHVCQUNtQjtPQUF0QixxQkFBaUIsTUFBSztNQUFBO0tBQUE7SUFBQTtHQUFBO0dBNUJ4QixhQUFhLEVBQUksU0FBQSxFQUNDOztXQUNqQixDQUFJLFVBQVEsSUFBRSxRQUFRLEVBQUc7Ozs7RUE0QjVCLDZDQUFlLDBCQUFBLEVBQ087cUJBREw7VUFFaEIsRUFBSSxnQkFBZ0I7O0VBR3JCLHFEQUFvQiw4QkFBQSxZQUFZLElBQ0c7R0FFbEMsc0JBQXNCO0dBQ3RCLG9CQUFnQixZQUFZO0VBQUE7RUFFN0IsaUVBQXlCLG9DQUFBLElBQ1M7cUJBREw7VUFLdkI7O1lBQUEsS0FBQSxpQkFDZ0I7S0FDaEIsbUJBQUYsTUFBRCxHQUNNO3dCQUFELDJCQUF1QjtLQUFBLE9BRXhCO29CQUFEO0tBQUE7SUFBQTs7OztFQUVOLE1BQU8sUUFBTyxDQUFBLFFBQU0sZUFBYSxpQkFBZSxVQUNPO0dBQ3RELFFBQU0sS0FBSSxPQUNLLEtBQUE7O2VBQVI7MEJBQ047OztVQUNJLEtBQ0c7VUFESDtJQUNKLGlCQUFhLEVBQUU7SUFDZixpQkFBYSxZQUFZOzs7O0VBRTNCLGtCQUFjLHVCQUFBLFlBQVksSUFDUztxQkFETDtHQUd0QixLQUFBLGlCQUFhLHVCQUFXLEdBQUM7aUJBQ3pCLGVBQVcsWUFBWTtHQUM5QixxQkFBaUIsWUFBWTtFQUFBO0VBRTlCLE1BQU8sVUFBUTtFQUVmLE1BQU8sZ0JBQWdCLENBQUEsWUFBWSxJQUFVLGlCQUFlLFVBQ087cUJBRDVCO0dBQ3RDLGNBQVUsWUFBWTtHQUN0QixpQkFBYSxZQUFZO0dBQ3pCLGlCQUFhLHNCQUFzQjtFQUFBO0VBRXBDLHlDQUFhLHdCQUFBLFlBQVksSUFDUztxQkFETDtVQUl2QjtJQUFBLE1BQUE7SUFDSixtQkFBQyxNQUFELEdBQ007WUFBTCx1QkFBcUIsZUFDVzthQUEvQixRQUFPLGNBQVksTUFBTSxlQUFXLGNBQVk7S0FBQTtJQUFBLE9BRTlDOzRCQUFtQixJQUF0Qjs7OztFQUdGLGtCQUFXLDJCQUEyQixVQUFRLDZCQUE2QjtFQUUzRSx3QkFBb0IsNkJBQUEsRUFBRSxJQUNHO0dBQXJCLG1CQUFDLE1BQUQsR0FDTTtJQUFSLHVCQUFvQjtHQUFBO0dBQ3JCLHFCQUFpQixFQUFFO0VBQUE7RUFFcEIseUJBQXFCLDhCQUFBLFlBQVksSUFDRztHQUFuQyxXQUFTLGdCQUFBLElBQ0c7SUFBUCxRQUFBLEtBQUEsV0FBTyxlQUNhO0tBQXZCLDZCQUF1QixZQUFZLEVBQUUsY0FBZTtJQUFBO0lBRWpELFFBQUEsS0FBQSxZQUFZLEtBQ0c7S0FDWCxPQUFBO01BQ04sS0FBQztNQUFELEtBQU87TUFBUCxLQUFxQjtNQUFyQixLQUFtQztNQUFuQyxLQUFtRCxZQUNTOzs7TUFFeEQsUUFBSCw2QkFBdUIsWUFBWSxFQUFFLElBQUs7S0FBQTtJQUFBO0lBR3pDLFFBQUEsS0FBQSw2QkFBNkIsS0FDRztLQUFuQyw2QkFBdUIsWUFBWSxFQUFFLElBQUs7SUFBQTtJQUN2QyxRQUFBLEtBQUEsb0JBQ2dCO0tBQW5CLE9BQUs7SUFBQTtHQUFBO0dBQ1AsT0FBSztFQUFBO0VBRU4scUJBQWlCLDBCQUFBLFNBQVMsWUFDVztHQUNwQyxXQUFTLGdCQUFBLEVBQ0M7SUFBVCxzQkFBc0IsU0FBUyxFQUFHLGdDQUFnQyxZQUFZO0dBQUE7R0FDM0UsUUFBQSxLQUFBLDJCQUEyQixhQUNXO0lBQXpDLE9BQUs7R0FBQTtHQUNGLFFBQUEsS0FBQSw2QkFBNkIsYUFDVztJQUEzQyxPQUFLO0dBQUE7RUFBQSIsImZpbGUiOiJUeXBlL1RyYWl0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
