"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../compare","./../js","./../private/bootstrap","./Method","./Impl-Type"],(exports,compare_0,js_1,bootstrap_2,Method_3,Impl_45Type_4)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_$1=_ms.getModule(js_1),defined_63=_ms.get(_$1,"defined?"),exists_63=_ms.get(_$1,"exists?"),js_45sub=_ms.get(_$1,"js-sub"),_$2=_ms.getModule(bootstrap_2),addProperty=_ms.get(_$2,"addProperty"),implContains=_ms.get(_$2,"implContains"),msDef=_ms.get(_$2,"msDef"),_$3=_ms.getModule(Method_3),impl_33=_ms.get(_$3,"impl!"),propagate_45method_45down_33=_ms.get(_$3,"propagate-method-down!"),self_45impl_33=_ms.get(_$3,"self-impl!"),_$4=_ms.lazyGetModule(Impl_45Type_4),Self_45Type=_ms.lazyProp(_$4,"Self-Type");
		let Kind=exports.default=(()=>{
			let _=class Kind{
				constructor(params){
					let _this=this;
					_ms.newProperty(_this,"name",_ms.checkContains(String,params.name,"name"));
					_ms.newProperty(_this,"super-kinds",[]);
					_ms.newProperty(_this,"implementors",_ms.checkContains(Array,(()=>{
						let _=params.implementors;
						if(defined_63(_)){
							return Object.freeze(_)
						} else {
							return []
						}
					})(),"implementors"));
					_ms.newProperty(_this,"symbol-for-isa",Symbol(`isa-${_this.name}`));
					_ms.newProperty(_this,"prototype",Object.create(null));
					addProperty(_this.prototype,_this["symbol-for-isa"],true);
					for(let _ of _this.implementors){
						on_45implementor_33(_,_this)
					};
					if(defined_63(params["super-kinds"])){
						for(let _ of params["super-kinds"]){
							unchecked_45kind_33(_this,_)
						}
					}
				}
			};
			implContains(_,function(_){
				let _this=this;
				return (exists_63(_)&&Boolean(js_45sub(_,_this["symbol-for-isa"])))
			});
			return _
		})();
		msDef("kind",(_45name,super_45kinds,static_45defs,proto_45defs)=>{
			let k=new (Kind)((()=>{
				let built={};
				built.name=_45name;
				built["super-kinds"]=super_45kinds;
				return built
			})());
			return (()=>{
				let _=k;
				assign_45defs_33(_,static_45defs);
				assign_45defs_33(_.prototype,proto_45defs);
				return _
			})()
		});
		let can_45subtype_63=exports["can-subtype?"]=function can_45subtype_63(_){
			_ms.checkContains(Kind,_,"_");
			return ! Object.isFrozen(_.implementors)
		};
		let unchecked_45kind_33=exports["unchecked-kind!"]=function unchecked_45kind_33(implementor,knd){
			knd.implementors.push(implementor);
			on_45implementor_33(implementor,knd)
		};
		let concrete_45implementors=exports["concrete-implementors"]=function concrete_45implementors(knd){
			_ms.checkContains(Kind,knd,"knd");
			return (()=>{
				let built=[];
				for(let _ of knd.implementors){
					if(_ms.contains(Kind,_)){
						_ms.addMany(built,concrete_45implementors(_))
					} else {
						_ms.add(built,_)
					}
				};
				return built
			})()
		};
		let kind_33=exports["kind!"]=function kind_33(implementor,knd,method_45impls){
			_ms.checkContains(Kind,knd,"knd");
			if(! can_45subtype_63(knd))throw new (Error)(`${knd} is not open to new subtypes.`);
			_ms.assertNot(kind_63,implementor,knd);
			unchecked_45kind_33(implementor,knd);
			if(defined_63(method_45impls)){
				for(let _ of method_45impls){
					impl_33(js_45sub(_,0),implementor,js_45sub(_,1))
				}
			}
		};
		msDef("kindDo",kind_33);
		let self_45kind_33=exports["self-kind!"]=function self_45kind_33(implementor,knd,method_45impls){
			_ms.checkContains(Object,implementor,"implementor");
			_ms.checkContains(Kind,knd,"knd");
			kind_33(new (_ms.unlazy(Self_45Type))(implementor),knd);
			if(defined_63(method_45impls)){
				for(let _ of method_45impls){
					self_45impl_33(js_45sub(_,0),implementor,js_45sub(_,1))
				}
			}
		};
		let kind_63=exports["kind?"]=function kind_63(implementor,knd){
			_ms.checkContains(Kind,knd,"knd");
			return (()=>{
				let _=implementor;
				if(_ms.contains(Kind,_)){
					return _["super-kinds"].some(super_45kind=>{
						return (_61_63(super_45kind,knd)||kind_63(super_45kind,knd))
					})
				} else {
					return _ms.contains(knd,implementor.prototype)
				}
			})()
		};
		let _64p_45all=_=>Object.getOwnPropertyNames(_).concat(Object.getOwnPropertySymbols(_));
		let on_45implementor_33=function on_45implementor_33(_,knd){
			if(_ms.contains(Kind,_)){
				_["super-kinds"].push(knd)
			};
			inherit_45methods_33(_,knd)
		};
		let inherit_45methods_33=function inherit_45methods_33(implementor,knd){
			let rec_33=function rec_33(knd){
				for(let _ of _64p_45all(knd.prototype)){
					propagate_45method_45down_33(implementor,_,js_45sub(knd.prototype,_))
				};
				for(let _ of knd["super-kinds"]){
					rec_33(_)
				}
			};
			rec_33(knd)
		};
		let assign_45defs_33=function assign_45defs_33(assignee,definitions){
			for(let _ of Object.getOwnPropertyNames(definitions)){
				Object.defineProperty(assignee,_,Object.getOwnPropertyDescriptor(definitions,_))
			};
			for(let _ of Object.getOwnPropertySymbols(definitions)){
				Object.defineProperty(assignee,_,Object.getOwnPropertyDescriptor(definitions,_))
			}
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvVHlwZS9LaW5kLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBUUEseUJBQ1csS0FVUjs7SUFJUSxZQUFBO1NBRndCO3FCQUFBLCtCQUczQixPQUFTO3FCQUhrQixvQkFLbEI7cUJBTGtCLHVDQVFuQixNQUFhO01BQU0sTUFBTjtNQUMxQixHQUFBLFdBQVMsR0FDQTtjQUNSLGNBQWM7TUFBQSxPQUVYO2NBQUg7TUFBQTtLQUFBO3FCQWIrQix1QkFlZixPQUFRLE9BZk87cUJBQUEsa0JBZ0JwQixjQUFjO0tBRTNCLFlBbEJpQyx3Q0FrQk07S0FFbkMsUUFBQSxLQXBCNkIsbUJBcUJoQjtNQUFoQixvQkFBaUIsRUFyQmU7S0FBQTtLQXNCOUIsR0FBQSxXQUFTLHVCQUNrQjtNQUF6QixRQUFBLEtBQUEsc0JBQ2tCO09BQXJCLG9CQXhCK0IsTUF3QlQ7TUFBQTtLQUFBO0lBQUE7R0FBQTtHQTFCeEIsYUFBYyxFQUFJLFNBQUE7UUFFZTtXQUFoQyxDQUFJLFVBQVEsSUFBRSxRQUFTLFNBQVEsRUFBQzs7OztFQTBCbkMsTUFBTyxPQUFNLENBQUEsUUFBTSxjQUFZLGNBQVk7R0FHMUMsTUFBSSxLQUFJLE1BQ0ksS0FBQTs7ZUFBTDt5QkFDTjs7O1VBQ0ksS0FDQztVQUREO0lBQ0osaUJBQWMsRUFBQztJQUNmLGlCQUFjLFlBQVc7Ozs7RUFFM0IsNkNBQWUsMEJBQUE7cUJBQUU7VUFFaEIsRUFBSSxnQkFBaUI7O0VBR3RCLG1EQUFtQiw2QkFBQSxZQUFZO0dBRzlCLHNCQUFzQjtHQUN0QixvQkFBZ0IsWUFBWTtFQUFBO0VBRzdCLDZEQUF3QixpQ0FBQTtxQkFBSTtVQUd0Qjs7WUFBQSxLQUFBLGlCQUNnQjtLQUNoQixnQkFBRixLQUFELEdBQ0s7d0JBQUEsd0JBQXNCO0tBQUEsT0FFdkI7b0JBQUE7S0FBQTtJQUFBOzs7O0VBRVAsNkJBQVMsaUJBQUEsWUFBWSxJQUFTO3FCQUFMO0dBS2pCLEtBQUEsaUJBQWEsdUJBQVcsR0FBQztpQkFDekIsUUFBTSxZQUFZO0dBRXpCLG9CQUFnQixZQUFZO0dBQ3pCLEdBQUEsV0FBUyxnQkFDWTtJQUFuQixRQUFBLEtBQUEsZUFDWTtLQUNmLFFBQU8sU0FBUSxFQUFDLEdBQUcsWUFBYSxTQUFRLEVBQUM7SUFBQTtHQUFBO0VBQUE7RUFFNUMsTUFBTyxTQUFPO0VBRWQseUNBQWMsd0JBQUEsWUFBbUIsSUFBUztxQkFBaEI7cUJBQVc7R0FFcEMsUUFBTyw4QkFBYyxhQUFhO0dBQy9CLEdBQUEsV0FBUyxnQkFDWTtJQUFuQixRQUFBLEtBQUEsZUFDWTtLQUNmLGVBQVksU0FBUSxFQUFDLEdBQUcsWUFBYSxTQUFRLEVBQUM7SUFBQTtHQUFBO0VBQUE7RUFFakQsNkJBQVEsaUJBQUEsWUFBWTtxQkFBSTtVQUlsQjtJQUFBLE1BQUE7SUFDSixnQkFBQyxLQUFELEdBQ0s7WUFBSCxzQkFBbUI7YUFDbkIsQ0FBSSxPQUFHLGFBQVcsTUFBTSxRQUFNLGFBQVc7S0FBQTtJQUFBLE9BRXZDO3lCQUFtQixJQUF0Qjs7OztFQUdGLGtCQUFXLDJCQUEyQixVQUFRLDZCQUE2QjtFQUUzRSx3QkFBcUIsNkJBQUEsRUFBQztHQUNsQixnQkFBQyxLQUFELEdBQ0s7SUFBTixzQkFBa0I7R0FBQTtHQUNwQixxQkFBa0IsRUFBQztFQUFBO0VBRXBCLHlCQUFxQiw4QkFBQSxZQUFZO0dBQ2hDLFdBQVMsZ0JBQUE7SUFDSixRQUFBLEtBQUEsV0FBTyxlQUNhO0tBQXZCLDZCQUF1QixZQUFhLEVBQUUsU0FBTyxjQUFlO0lBQUE7SUFDekQsUUFBQSxLQUFBLG1CQUNlO0tBQWxCLE9BQU07SUFBQTtHQUFBO0dBQ1IsT0FBSztFQUFBO0VBRU4scUJBQWlCLDBCQUFBLFNBQVM7R0FFckIsUUFBQSxLQUFBLDJCQUEyQixhQUNXO0lBQXpDLHNCQUFzQixTQUFVLEVBQUUsZ0NBQWdDLFlBQWE7R0FBQTtHQUM1RSxRQUFBLEtBQUEsNkJBQTZCLGFBQ1c7SUFBM0Msc0JBQXNCLFNBQVUsRUFBRSxnQ0FBZ0MsWUFBYTtHQUFBO0VBQUEiLCJmaWxlIjoiVHlwZS9LaW5kLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
