"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../compare","./../Function","./../js","./../math/methods","./../to-string","./../String","./../Type/Method","./../Type/Pred-Type","./../Type/Type","./../control","./q","./Seq/Seq","./Seq/Stream","./Set/Set"],(exports,compare_0,Function_1,js_2,methods_3,to_45string_4,String_5,Method_6,Pred_45Type_7,Type_8,control_9,_63_10,Seq_11,Stream_12,Set_13)=>{
	exports._get=_ms.lazy(()=>{
		let _$1=_ms.getModule(compare_0),_61_63=_ms.get(_$1,"=?"),_$2=_ms.getModule(Function_1),Action=_ms.get(_$2,"Action"),identity=_ms.get(_$2,"identity"),Pred=_ms.get(_$2,"Pred"),_$3=_ms.getModule(js_2),defined_63=_ms.get(_$3,"defined?"),id_61_63=_ms.get(_$3,"id=?"),_$4=_ms.getModule(methods_3),_43=_ms.get(_$4,"+"),to_45string=_ms.getDefaultExport(to_45string_4),_$5=_ms.getModule(to_45string_4),inspect=_ms.get(_$5,"inspect"),_$6=_ms.getModule(String_5),indent=_ms.get(_$6,"indent"),Method=_ms.getDefaultExport(Method_6),_$7=_ms.getModule(Pred_45Type_7),Any=_ms.get(_$7,"Any"),Opt=_ms.get(_$7,"Opt"),_$8=_ms.getModule(Type_8),_61_62=_ms.get(_$8,"=>"),contains_63=_ms.get(_$8,"contains?"),type_45of=_ms.get(_$8,"type-of"),_$9=_ms.lazyGetModule(control_9),opr=_ms.lazyProp(_$9,"opr"),_$10=_ms.lazyGetModule(_63_10),Opt_45_62_63=_ms.lazyProp(_$10,"Opt->?"),_$11=_ms.lazyGetModule(Seq_11),_43_62_33=_ms.lazyProp(_$11,"+>!"),_43_43_62_33=_ms.lazyProp(_$11,"++>!"),first=_ms.lazyProp(_$11,"first"),seq_61_63=_ms.lazyProp(_$11,"seq=?"),_64tail=_ms.lazyProp(_$11,"@tail"),Stream=_ms.lazy(()=>_ms.getDefaultExport(Stream_12)),Set=_ms.lazy(()=>_ms.getDefaultExport(Set_13));
		let _64=exports.default=_ms.kind("@",[],{},{
			[_ms.symbol(contains_63)](em){
				let _this=this;
				_ms.checkContains(Any,em,"em");
				return any_63(_this,em_45compare=>{
					return _61_63(em,em_45compare)
				})
			},
			[_ms.symbol(_61_63)](_64other){
				let _this=this;
				return (id_61_63(type_45of(_this),type_45of(_64other))&&_ms.unlazy(seq_61_63)(_this,_64other))
			},
			[_ms.symbol(to_45string)](){
				let _this=this;
				return do_45inspect(_this,to_45string)
			},
			[_ms.symbol(inspect)](){
				let _this=this;
				return do_45inspect(_this,inspect)
			}
		});
		let do_45inspect=function do_45inspect(_,recurse){
			return (()=>{
				if(empty_63(_)){
					return `empty ${_.constructor.name}`
				} else {
					let content=(()=>{
						let show_45ems=_61_62(Array,(()=>{
							let built=[];
							for(let em of _){
								_ms.add(built,indent(recurse(em)))
							};
							return built
						})());
						return `\n\t. ${show_45ems.join(`\n\t. `)}`
					})();
					return `${_.constructor.name}${content}`
				}
			})()
		};
		let iterator=exports.iterator=new (Method)((()=>{
			let built={};
			built.name="iterator";
			let args=built.args=[];
			let impl_45symbol=built["impl-symbol"]=Symbol.iterator;
			return built
		})());
		let empty_63=exports["empty?"]=_ms.method("empty?",[],function(){
			let _this=this;
			return iterator(_this).next().done
		});
		let each_33=exports["each!"]=function each_33(_,do_45for_45each_33){
			_ms.checkContains(_64,_,"_");
			_ms.checkContains(Action,do_45for_45each_33,"do-for-each!");
			for(let elem of _){
				do_45for_45each_33(elem)
			}
		};
		let fold=exports.fold=function fold(_,b,c){
			_ms.checkContains(_64,_,"_");
			let _$0=(()=>{
				if(defined_63(c)){
					let built={};
					let start=built.start=b;
					let folder=built.folder=c;
					let rest=built.rest=_;
					return built
				} else {
					let built={};
					let start=built.start=_ms.unlazy(first)(_);
					let folder=built.folder=b;
					let rest=built.rest=_ms.unlazy(_64tail)(_);
					return built
				}
			})(),start=_$0.start,rest=_$0.rest,folder=_$0.folder;
			let acc=start;
			for(let _ of rest){
				acc=folder(acc,_)
			};
			return acc
		};
		let any_63=exports["any?"]=function any_63(_,pred_63){
			_ms.checkContains(_64,_,"_");
			_ms.checkContains(_ms.sub(Opt,Pred),pred_63,"pred?");
			pred_63=_ms.unlazy(opr)(pred_63,identity);
			return ! empty_63(_63find(_,pred_63))
		};
		let all_63=exports["all?"]=function all_63(_,pred_63){
			_ms.checkContains(_64,_,"_");
			_ms.checkContains(_ms.sub(Opt,Pred),pred_63,"pred?");
			pred_63=_ms.unlazy(opr)(pred_63,identity);
			return empty_63(_63find(_,em=>{
				return ! pred_63(em)
			}))
		};
		let _63find=exports["?find"]=function _63find(_,pred_63){
			_ms.checkContains(Pred,pred_63,"pred?");
			return _ms.unlazy(Opt_45_62_63)((()=>{
				for(let elem of _){
					if(pred_63(elem)){
						return elem
					}
				}
			})())
		};
		let count=exports.count=_ms.method("count",[],function(){
			let _this=this;
			return fold(_this,0,_ms.sub(_43,1))
		});
		let _64keep=exports["@keep"]=_ms.method("@keep",[["keep-if?",Pred]],function(keep_45if_63){
			let _this=this;
			_ms.checkContains(Pred,keep_45if_63,"keep-if?");
			return _61_62(type_45of(_this),(()=>{
				let built=[];
				for(let _ of _this){
					if(keep_45if_63(_)){
						_ms.add(built,_)
					}
				};
				return built
			})())
		});
		let _64keep_126=exports["@keep~"]=function _64keep_126(filtered,keep_45if_63){
			_ms.checkContains(_64,filtered,"filtered");
			_ms.checkContains(Pred,keep_45if_63,"keep-if?");
			return new (_ms.unlazy(Stream))(function*(){
				for(let _ of filtered){
					if(keep_45if_63(_)){
						(yield _)
					}
				}
			})
		};
		let _64map=exports["@map"]=function _64map(_,mapper){
			_ms.checkContains(_64,_,"_");
			_ms.checkContains(Function,mapper,"mapper");
			return _61_62(type_45of(_),(()=>{
				let built=[];
				for(let elem of _){
					_ms.add(built,mapper(elem))
				};
				return built
			})())
		};
		let _64map_126=exports["@map~"]=function _64map_126(mapped,mapper){
			_ms.checkContains(_64,mapped,"mapped");
			_ms.checkContains(Function,mapper,"mapper");
			return new (_ms.unlazy(Stream))(function*(){
				for(let _ of mapped){
					(yield mapper(_))
				}
			})
		};
		let _64flat_45map=exports["@flat-map"]=_ms.method("@flat-map",[["mapper",_ms.sub(Function,Any,_64)]],function(mapper){
			let _this=this;
			_ms.checkContains(_ms.sub(Function,Any,_64),mapper,"mapper");
			return _61_62(type_45of(_this),(()=>{
				let built=[];
				for(let _ of _this){
					_ms.addMany(built,mapper(_))
				};
				return built
			})())
		});
		let _64flat_45map_126=exports["@flat-map~"]=function _64flat_45map_126(mapped,mapper){
			_ms.checkContains(_64,mapped,"mapped");
			_ms.checkContains(_ms.sub(Function,Any,_64),mapper,"mapper");
			return new (_ms.unlazy(Stream))(function*(){
				for(let _ of mapped){
					(yield* iterator(mapper(_)))
				}
			})
		};
		let _64flatten=exports["@flatten"]=_ms.method("@flatten",[],function(){
			let _this=this;
			return _61_62(type_45of(_this),(()=>{
				let built=[];
				for(let _ of _this){
					_ms.addMany(built,_)
				};
				return built
			})())
		});
		let _64flatten_126=exports["@flatten~"]=function _64flatten_126(flattened){
			return new (_ms.unlazy(Stream))(function*(){
				for(let _ of flattened){
					(yield* iterator(_))
				}
			})
		};
		let _43_43=exports["++"]=_ms.method("++",[["@other",_64]],function(_64other){
			let _this=this;
			_ms.checkContains(_64,_64other,"@other");
			return _61_62(type_45of(_this),(()=>{
				let built=[];
				_ms.addMany(built,_this);
				_ms.addMany(built,_64other);
				return built
			})())
		});
		let _43_43_126=exports["++~"]=function _43_43_126(_64a,_64b){
			return _ms.checkContains(_ms.unlazy(Stream),new (_ms.unlazy(Stream))(function*(){
				(yield* iterator(_64a));
				(yield* iterator(_64b))
			}),"returned value")
		};
		let _45_45=exports["--"]=_ms.method("--",[["@remove",_64]],function(_64remove){
			let _this=this;
			_ms.checkContains(_64,_64remove,"@remove");
			return _61_62(type_45of(_this),_45_45_126(_this,_64remove))
		});
		let _45_45_126=exports["--~"]=function _45_45_126(_64removed_45from,_64remove){
			_ms.checkContains(_64,_64remove,"@remove");
			return _ms.checkContains(_64,new (_ms.unlazy(Stream))(function*(){
				let _64remove_45remaining=_61_62(_ms.unlazy(Set),_64remove);
				for(let _ of _64removed_45from){
					if(_ms.contains(_64remove_45remaining,_)){
						_45_45_33(_64remove_45remaining,[_])
					} else {
						(yield _)
					}
				}
			}),"returned value")
		};
		let empty_33=exports["empty!"]=_ms.method("empty!",[]);
		let _43_33=exports["+!"]=_ms.method("+!",["added"],function(added){
			let _this=this;
			_ms.unlazy(_43_62_33)(_this,added)
		});
		let _43_43_33=exports["++!"]=_ms.method("++!",[["@added",_64]],function(_64added){
			let _this=this;
			_ms.checkContains(_64,_64added,"@added");
			_ms.unlazy(_43_43_62_33)(_this,_64added)
		});
		let _45_33=exports["-!"]=_ms.method("-!",[["@removed",_64]]);
		let _45_45_33=exports["--!"]=_ms.method("--!",[["@removed",_64]]);
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9ALm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBaUJBO2VBS0MsY0FBVztRQWtNTDtzQkFsTVE7V0FFYixPQWdNSyxNQWhNTTtZQUNWLE9BQUcsR0FBRztJQUFBO0dBQUE7ZUFFUixTQUFJO1FBNkxFO1dBNUxMLENBQUssU0FBTSxVQTRMTixPQTVMcUIsVUFBUSxrQ0E0TDdCLE1BNUxrRDtHQUFBO2VBRXhEO1FBMExNO1dBekxMLGFBeUxLLE1BekxXO0dBQUE7ZUFDakI7UUF3TE07V0F2TEwsYUF1TEssTUF2TFc7R0FBQTtFQUFBO0VBRWxCLGlCQUFlLHNCQUFBLEVBQUM7VUFFWDtJQUFILEdBQUEsU0FBUSxHQUNBO1lBQU4sU0FBUztXQUVQO0tBQUgsWUFDUyxLQUFBO01BQ1IsZUFBVyxPQUFHLE1BQVc7O2VBQUEsTUFBTyxFQUNBO3NCQUE3QixPQUFRLFFBQVE7T0FBQTs7O2FBQ2xCLFNBQVEsZ0JBQWU7O1lBQ3hCLEdBQUcscUJBQW1COzs7O0VBRTFCLDhCQUFVLEtBQUksUUFDTSxLQUFBOztjQUNuQjtHQUNBLG9CQUFNO0dBQ04sdUNBQWE7OztFQUVkLHNEQUNnQjtPQWtLVDtVQWpLTCxTQWlLSzs7RUE5Sk4sNkJBQVMsaUJBQUEsRUFBSTtxQkFBRjtxQkFBZTtHQU1yQixRQUFBLFFBQVMsRUFDQTtJQUFaLG1CQUFhO0dBQUE7RUFBQTtFQUVmLHNCQUFPLGNBQUEsRUFBSSxFQUFFO3FCQUFKO0dBSVIsUUFDd0I7SUFBdkIsR0FBQSxXQUFTLEdBQ0M7O0tBQVQsc0JBQU87S0FDUCx3QkFBUTtLQUNSLG9CQUFPOztXQUVKOztLQUFILHdDQUFhO0tBQ2Isd0JBQVE7S0FDUix3Q0FBWTs7OztHQUVkLFFBQU07R0FDRixRQUFBLEtBQUEsS0FDSTtRQUFBLE9BQU8sSUFBSztHQUFBO1VBQ3BCO0VBQUE7RUFFRCwyQkFBTyxnQkFBQSxFQUFJO3FCQUFGOzZCQUFRLElBQUk7MkJBRVAsUUFB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
