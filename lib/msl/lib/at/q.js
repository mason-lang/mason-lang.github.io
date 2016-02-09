"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../control","./../Error","./../js","./../private/bootstrap","./../to-string","./../Type/Poly","./../Type/Type","./at","./Seq/Seq"],(exports,control_0,Error_1,js_2,bootstrap_3,to_45string_4,Poly_5,Type_6,_64_7,Seq_8)=>{
	exports._get=_ms.lazy(()=>{
		let _$1=_ms.getModule(control_0),opr=_ms.get(_$1,"opr"),_$2=_ms.getModule(Error_1),_45_62Error=_ms.get(_$2,"->Error"),_$3=_ms.getModule(js_2),defined_63=_ms.get(_$3,"defined?"),_$4=_ms.getModule(bootstrap_3),msDef=_ms.get(_$4,"msDef"),to_45string=_ms.getDefaultExport(to_45string_4),_$5=_ms.getModule(to_45string_4),inspect=_ms.get(_$5,"inspect"),_$6=_ms.getModule(Poly_5),self_45impl_33=_ms.get(_$6,"self-impl!"),_$7=_ms.getModule(Type_6),extract=_ms.get(_$7,"extract"),_$8=_ms.getModule(_64_7),empty=_ms.get(_$8,"empty"),empty_63=_ms.get(_$8,"empty?"),from_45stream=_ms.get(_$8,"from-stream"),iterator=_ms.get(_$8,"iterator"),Seq=_ms.getDefaultExport(Seq_8);
		let _63=exports.default=(()=>{
			let _=class _63{
				static [_ms.symbol(empty)](){
					let _this=this;
					return _63None
				}
				static [_ms.symbol(from_45stream)](_){
					let _this=this;
					let iter=iterator(_);
					let _$0=iter.next(),value=_$0.value,done=_$0.done;
					return (done?_63None:_63some(value))
				}
				constructor(val){
					let _this=this;
					this.val=val
				}
				[_ms.symbol(empty_63)](){
					let _this=this;
					return Object.is(_this,_63None)
				}
				*[_ms.symbol(iterator)](){
					let _this=this;
					if(! empty_63(_this)){
						(yield _this.val)
					}
				}
				[_ms.symbol(to_45string)](){
					let _this=this;
					return inspect(_this)
				}
				[_ms.symbol(inspect)](){
					let _this=this;
					return (()=>{
						if(empty_63(_this)){
							return "?None"
						} else {
							return `?some ${inspect(_this.val)}`
						}
					})()
				}
			};
			_ms.traitDo(_,Seq);
			return _
		})();
		let empty_45marker=(()=>{
			return {}
		})();
		let _63None=exports["?None"]=new (_63)(empty_45marker);
		let _63some=exports["?some"]=function _63some(_){
			return new (_63)(_)
		};
		self_45impl_33(extract,_63some,(_,num_45extracteds)=>{
			return _63_45_62nullable((((_ms.eq(1,num_45extracteds)&&_ms.hasInstance(_63,_))&&! empty_63(_))?_ms.some((()=>{
				return [_.val]
			})()):_ms.None))
		});
		msDef("some",_63some);
		msDef("None",_63None);
		let Opt_45_62_63=exports["Opt->?"]=function Opt_45_62_63(_){
			return (defined_63(_)?_ms.some(_):_ms.None)
		};
		let _63_45_62Opt=exports["?->Opt"]=function _63_45_62Opt(_){
			_ms.checkInstance(_63,_,"_");
			return (empty_63(_)?void 0:_.val)
		};
		let _63_45_62nullable=exports["?->nullable"]=function _63_45_62nullable(_){
			_ms.checkInstance(_63,_,"_");
			return (empty_63(_)?null:_.val)
		};
		let un_45_63=exports["un-?"]=function un_45_63(_,fail_45message){
			_ms.checkInstance(_63,_,"_");
			if(empty_63(_))throw _45_62Error(opr(_ms.unlazy(fail_45message),`Tried to force empty \`?\`.`));
			return _.val
		};
		let _63_45or=exports["?-or"]=function _63_45or(_,or_45else){
			_ms.checkInstance(_63,_,"_");
			return (empty_63(_)?_ms.unlazy(or_45else):_.val)
		};
		let _63_45cond=exports["?-cond"]=function _63_45cond(_,if_45none,if_45some){
			_ms.checkInstance(_63,_,"_");
			_ms.checkInstance(Function,if_45some,"if-some");
			return (empty_63(_)?_ms.unlazy(if_45none):if_45some(_.val))
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC8/Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBY0Esd0JBQVM7O0lBS1AsbUJBQUMsU0FDUTs7WUFBUjtJQUFBO0lBRUQsbUJBQUMsZ0JBQWMsRUFDQzs7S0FBZixTQUFPLFNBQVM7S0FDaEIsUUFBZTtZQUNWLENBQUEsS0FBSyxRQUFPLFFBQU07SUFBQTtJQUVmLFlBQUEsSUFDSTs7OztJQUVkLFlBQUMsWUFDUzs7c0JBQUwsTUFBSztJQUFBO0lBRVYsYUFBQyxZQUNhOztLQUFOLEtBQUEsU0FBTyxPQUNJO2FBQVg7OztJQUVSLFlBQUMsZUFDWTs7WUFBWixRQUFRO0lBQUE7SUFFVCxZQUFDLFdBQ1U7O1lBQ047TUFBSCxHQUFBLFNBQU8sT0FDSTtjQUFUO01BQUEsT0FFRTtjQUFGLFNBQVEsUUFBUTs7Ozs7aUJBL0JOOzs7RUFpQ2YsbUJBQ2MsS0FBQTtVQUNiO0VBQUE7RUFFRCw2QkFBTyxLQUFJLEtBQUU7RUFDYiw2QkFBUSxpQkFBQSxFQUNDO1VBQVIsS0FBSSxLQUFFO0VBQUE7RUFFUCxlQUFXLFFBQVEsUUFBTyxDQUFBLEVBQUUsbUJBQ2M7VUFBekMsa0JBQWUsQ0FBQSxTQUFRLEVBQUUsbUNBQWlCLElBQUQsS0FBRyxFQUFJLFNBQU8sa0JBQ0E7V0FBdEQsQ0FBQzs7O0VBRUgsTUFBTyxPQUFLO0VBQ1osTUFBTyxPQUFLO0VBR1gsbUNBQVMsc0JBQUEsRUFDQztVQUVOLENBQUEsV0FBUyxZQUFDOztFQUVkLG1DQUFTLHNCQUFBLEVBQ0c7cUJBREQ7VUFFTCxDQUFBLFNBQU8sR0FBQyxPQUFVOztFQUV4Qiw2Q0FBYywyQkFBQSxFQUNHO3FCQUREO1VBQ1YsQ0FBQSxTQUFPLEdBQUMsS0FBSzs7RUFHbkIsNkJBQU8sa0JBQUEsRUFBSSxlQUNhO3FCQURmO0dBRUQsR0FBQSxTQUFPLFNBQU8sWUFBUywrQkFBa0I7VUFDaEQ7O0VBRUQsNkJBQU8sa0JBQUEsRUFBSSxVQUNRO3FCQURWO1VBRUgsQ0FBQSxTQUFPLHlCQUFTOztFQUV0QixpQ0FBUyxvQkFBQSxFQUFJLFVBQVMsVUFDZ0I7cUJBRDNCO3FCQUFtQjtVQUl4QixDQUFBLFNBQU8seUJBQVUsVUFBUSIsImZpbGUiOiJhdC9xLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
