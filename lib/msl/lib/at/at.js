"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../compare","./../Function","./../js","./../polys","./../to-string","./../String","./../Type/Poly","./../Type/Pred-Type","./../Type/Type","./../control","./q","./Seq/Seq","./Seq/Stream","./Set/Set"],(exports,compare_0,Function_1,js_2,polys_3,to_45string_4,String_5,Poly_6,Pred_45Type_7,Type_8,control_9,_63_10,Seq_11,Stream_12,Set_13)=>{
	exports._get=_ms.lazy(()=>{
		let _$1=_ms.getModule(compare_0),binary_61_63=_ms.get(_$1,"binary=?"),_$2=_ms.getModule(Function_1),Action=_ms.get(_$2,"Action"),identity=_ms.get(_$2,"identity"),Pred=_ms.get(_$2,"Pred"),_$3=_ms.getModule(js_2),defined_63=_ms.get(_$3,"defined?"),_$4=_ms.getModule(polys_3),sub=_ms.get(_$4,"sub"),to_45string=_ms.getDefaultExport(to_45string_4),_$5=_ms.getModule(to_45string_4),inspect=_ms.get(_$5,"inspect"),_$6=_ms.getModule(String_5),indent=_ms.get(_$6,"indent"),Poly=_ms.getDefaultExport(Poly_6),_$7=_ms.getModule(Pred_45Type_7),Any=_ms.get(_$7,"Any"),Opt=_ms.get(_$7,"Opt"),_$8=_ms.getModule(Type_8),_61_62=_ms.get(_$8,"=>"),has_45instance_63=_ms.get(_$8,"has-instance?"),type_45of=_ms.get(_$8,"type-of"),_$9=_ms.lazyGetModule(control_9),opr=_ms.lazyProp(_$9,"opr"),_$10=_ms.lazyGetModule(_63_10),Opt_45_62_63=_ms.lazyProp(_$10,"Opt->?"),_$11=_ms.lazyGetModule(Seq_11),_43_62_33=_ms.lazyProp(_$11,"+>!"),_43_43_62_33=_ms.lazyProp(_$11,"++>!"),first=_ms.lazyProp(_$11,"first"),seq_61_63=_ms.lazyProp(_$11,"seq=?"),_64tail_126=_ms.lazyProp(_$11,"@tail~"),Stream=_ms.lazy(()=>_ms.getDefaultExport(Stream_12)),Set=_ms.lazy(()=>_ms.getDefaultExport(Set_13));
		let _64=exports.default=_ms.trait("@",[],{
			[_ms.symbol(_61_62)](stream){
				let _this=this;
				return from_45stream(_this,stream)
			},
			[_ms.symbol(sub)](){
				let _this=this;
				return _this
			}
		},{
			[_ms.symbol(has_45instance_63)](em){
				let _this=this;
				_ms.checkInstance(Any,em,"em");
				return any_63(_this,em_45compare=>{
					return _ms.eq(em,em_45compare)
				})
			},
			[_ms.symbol(binary_61_63)](_64other){
				let _this=this;
				return (Object.is(type_45of(_this),type_45of(_64other))&&_ms.unlazy(seq_61_63)(_this,_64other))
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
		let iterator=exports.iterator=new (Poly)((()=>{
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
		let empty=exports.empty=_ms.method("empty",[],function(){
			let _this=this;
			return new (_this)()
		});
		let from_45stream=exports["from-stream"]=_ms.method("from-stream",[["stream",_64]],function(stream){
			let _this=this;
			_ms.checkInstance(_64,stream,"stream");
			return (()=>{
				let _=empty(_this);
				_43_43_33(_,stream);
				return _
			})()
		});
		let each_33=exports["each!"]=function each_33(_,do_45for_45each_33){
			_ms.checkInstance(_64,_,"_");
			_ms.checkInstance(Action,do_45for_45each_33,"do-for-each!");
			for(let elem of _){
				do_45for_45each_33(elem)
			}
		};
		let fold=exports.fold=function fold(_,b,c){
			_ms.checkInstance(_64,_,"_");
			let _$0=(()=>{
				return (defined_63(c)?{
					start:b,
					folder:c,
					rest:_
				}:{
					start:_ms.unlazy(first)(_),
					folder:b,
					rest:_ms.unlazy(_64tail_126)(_)
				})
			})(),start=_$0.start,folder=_$0.folder,rest=_$0.rest;
			let acc=start;
			for(let _ of rest){
				acc=folder(acc,_)
			};
			return acc
		};
		let any_63=exports["any?"]=function any_63(_,pred_63){
			_ms.checkInstance(_64,_,"_");
			_ms.checkInstance(_ms.sub(Opt,Pred),pred_63,"pred?");
			pred_63=_ms.unlazy(opr)(pred_63,identity);
			return ! empty_63(_63find(_,pred_63))
		};
		let all_63=exports["all?"]=function all_63(_,pred_63){
			_ms.checkInstance(_64,_,"_");
			_ms.checkInstance(_ms.sub(Opt,Pred),pred_63,"pred?");
			pred_63=_ms.unlazy(opr)(pred_63,identity);
			return empty_63(_63find(_,em=>{
				return ! pred_63(em)
			}))
		};
		let _63find=exports["?find"]=function _63find(_,pred_63){
			_ms.checkInstance(Pred,pred_63,"pred?");
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
			return fold(_this,0,_=>(_+1))
		});
		let _64keep=exports["@keep"]=_ms.method("@keep",[["keep-if?",Pred]],function(keep_45if_63){
			let _this=this;
			_ms.checkInstance(Pred,keep_45if_63,"keep-if?");
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
		let _64keep_126=exports["@keep~"]=function _64keep_126(_64filtered,keep_45if_63){
			_ms.checkInstance(_64,_64filtered,"@filtered");
			_ms.checkInstance(Pred,keep_45if_63,"keep-if?");
			return new (_ms.unlazy(Stream))(function*(){
				for(let _ of _64filtered){
					if(keep_45if_63(_)){
						(yield _)
					}
				}
			})
		};
		let _64toss=exports["@toss"]=function _64toss(_64filtered,toss_45if_63){
			_ms.checkInstance(_64,_64filtered,"@filtered");
			_ms.checkInstance(Pred,toss_45if_63,"toss-if?");
			return _64keep(_64filtered,_=>! toss_45if_63(_))
		};
		let _64toss_126=exports["@toss~"]=function _64toss_126(_64filtered,toss_45if_63){
			_ms.checkInstance(_64,_64filtered,"@filtered");
			_ms.checkInstance(Pred,toss_45if_63,"toss-if?");
			return _64keep_126(_64filtered,_=>! toss_45if_63(_))
		};
		let _64map=exports["@map"]=function _64map(_,mapper){
			_ms.checkInstance(_64,_,"_");
			_ms.checkInstance(Function,mapper,"mapper");
			return _61_62(type_45of(_),(()=>{
				let built=[];
				for(let elem of _){
					_ms.add(built,mapper(elem))
				};
				return built
			})())
		};
		let _64map_126=exports["@map~"]=function _64map_126(mapped,mapper){
			_ms.checkInstance(_64,mapped,"mapped");
			_ms.checkInstance(Function,mapper,"mapper");
			return new (_ms.unlazy(Stream))(function*(){
				for(let _ of mapped){
					(yield mapper(_))
				}
			})
		};
		let _64flat_45map=exports["@flat-map"]=_ms.method("@flat-map",[["mapper",_ms.sub(Function,Any,_64)]],function(mapper){
			let _this=this;
			_ms.checkInstance(_ms.sub(Function,Any,_64),mapper,"mapper");
			return _61_62(type_45of(_this),(()=>{
				let built=[];
				for(let _ of _this){
					_ms.addMany(built,mapper(_))
				};
				return built
			})())
		});
		let _64flat_45map_126=exports["@flat-map~"]=function _64flat_45map_126(mapped,mapper){
			_ms.checkInstance(_64,mapped,"mapped");
			_ms.checkInstance(_ms.sub(Function,Any,_64),mapper,"mapper");
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
			_ms.checkInstance(_64,_64other,"@other");
			return _61_62(type_45of(_this),(()=>{
				let built=[];
				_ms.addMany(built,_this);
				_ms.addMany(built,_64other);
				return built
			})())
		});
		let _43_43_126=exports["++~"]=function _43_43_126(_64a,_64b){
			return _ms.checkInstance(_ms.unlazy(Stream),new (_ms.unlazy(Stream))(function*(){
				(yield* iterator(_64a));
				(yield* iterator(_64b))
			}),"returned value")
		};
		let _45_45=exports["--"]=_ms.method("--",[["@remove",_64]],function(_64remove){
			let _this=this;
			_ms.checkInstance(_64,_64remove,"@remove");
			return _61_62(type_45of(_this),_45_45_126(_this,_64remove))
		});
		let _45_45_126=exports["--~"]=function _45_45_126(_64removed_45from,_64remove){
			_ms.checkInstance(_64,_64remove,"@remove");
			return _ms.checkInstance(_64,new (_ms.unlazy(Stream))(function*(){
				let _64remove_45remaining=_61_62(_ms.unlazy(Set),_64remove);
				for(let _ of _64removed_45from){
					if(_ms.hasInstance(_64remove_45remaining,_)){
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
			_ms.checkInstance(_64,_64added,"@added");
			_ms.unlazy(_43_43_62_33)(_this,_64added)
		});
		let _45_33=exports["-!"]=_ms.method("-!",[["@removed",_64]]);
		let _45_45_33=exports["--!"]=_ms.method("--!",[["@removed",_64]]);
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9ALm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBaUJBO0dBTUUsWUFBQyxTQUFLLE9BQ007O1dBQVgsY0FBWSxNQUFLO0dBQUE7R0FFbEIsWUFBQyxPQUNNOztXQUNOO0dBQUE7RUFBQTtHQUVGLFlBQUMsb0JBQWdCLEdBQ007O3NCQURIO1dBRW5CLE9BQUssTUFBTSxjQUNVO21CQUFqQixHQUFHO0lBQUE7R0FBQTtHQUVSLFlBQUMsZUFBVyxTQUNNOztXQUFqQixXQUFVLFVBQVEsT0FBTyxVQUFRLGtDQUFnQixNQUFLO0dBQUE7R0FFdkQsWUFBQyxlQUNZOztXQUFaLGFBQVcsTUFBSztHQUFBO0dBRWpCLFlBQUMsV0FDVTs7V0FBVixhQUFXLE1BQUs7R0FBQTtFQUFBO0VBRWxCLGlCQUFjLHNCQUFBLEVBQUUsUUFDTztVQUNsQjtJQUFILEdBQUEsU0FBTyxHQUNDO1lBQU4sU0FBUTtXQUVOO0tBQUgsWUFDUyxLQUFBO01BQ1IsZUFBVyxPQUFHLE1BQVc7O2VBQUEsTUFBTSxFQUNDO3NCQUE3QixPQUFRLFFBQVE7T0FBQTs7O2FBQ2xCLFNBQVEsZ0JBQWU7O1lBQ3hCLEdBQUUscUJBQW9COzs7O0VBRTFCLDhCQUFVLEtBQUksTUFDSSxLQUFBOztjQUNqQjtHQUNBLG9CQUFNO0dBQ04sdUNBQWE7OztFQUVkLHNEQUNjLFVBQUE7O1VBQ1osU0FBUzs7RUFHViw4Q0FDYSxVQUFBOztVQUVaLEtBQUk7RUFBQTtFQUVMLDZFQUEwQixNQUFQLFNBQUEsT0FDUTs7cUJBREQ7VUFFcEIsS0FDVTtVQURWLE1BQU07SUFDVixVQUFJLEVBQUU7Ozs7RUFHUiw2QkFBUyxpQkFBQSxFQUFJLG1CQUNtQjtxQkFEckI7cUJBQWU7R0FNckIsUUFBQSxRQUFRLEVBQ0M7SUFBWixtQkFBYTtHQUFBO0VBQUE7RUFFZixzQkFBTyxjQUFBLEVBQUksRUFBRSxFQUNDO3FCQURMO0dBS1IsUUFDcUIsS0FBQTtXQUFmLENBQUMsV0FBUyxHQUFHO1dBQVE7WUFBVTtVQUFRO0lBQUEsRUFBRzs2QkFBYztZQUFTO2tDQUFlO0lBQUE7R0FBQTtHQUN0RixRQUFNO0dBQ0YsUUFBQSxLQUFBLEtBQ0k7UUFBQSxPQUFPLElBQUk7R0FBQTtVQUNuQjtFQUFBO0VBRUQsMkJBQU8sZ0JBQUEsRUFBSSxRQUNlO3FCQURqQjs2QkFBUSxJQUFJOzJCQUVQLFFBQU07VUFDbkIsRUFBSSxTQUFRLFFBQU0sRUFBRTtFQUFBO0VBRXJCLDJCQUFPLGdCQUFBLEVBQUksUUFDZTtxQkFEakI7NkJBQVEsSUFBSTsyQkFFUCxRQUFNO1VBQ25CLFNBQVEsUUFBTSxFQUFHLElBQ0U7V0FBbEIsRUFBSSxRQUFNO0dBQUE7RUFBQTtFQUVaLDZCQUFRLGlCQUFBLEVBQUUsUUFDVTtxQkFESjttQ0FJSjtZQUFBLFFBQVEsRUFDQztLQUFoQixHQUFBLFFBQU0sTUFDSTtNQUFaLE9BQU07S0FBQTtJQUFBO0dBQUE7RUFBQTtFQUVULDhDQUNhLFVBQUE7O1VBQ1osS0FBSyxNQUFLLEtBQUksQ0FBRSxFQUFFO0VBQUE7RUFLbkIsNkRBQXNCLE9BQVQsU0FBQSxhQUNhOztxQkFESjtVQUdyQixPQUFJLFVBQVEsT0FBVzs7WUFBQSxLQUFBLE1BQ0k7S0FBdkIsR0FBQSxhQUFTLEdBQ0E7b0JBQVQ7S0FBQTtJQUFBOzs7O0VBRUwsa0NBQVMscUJBQUEsWUFBWSxhQUNhO3FCQURmO3FCQUFXO1VBRzdCLHlCQUNjLFdBQUE7SUFBVCxRQUFBLEtBQUEsWUFDUztLQUFULEdBQUEsYUFBUyxHQUNBO2FBQUw7S0FBQTtJQUFBO0dBQUE7RUFBQTtFQUVWLDZCQUFRLGlCQUFBLFlBQVksYUFDYTtxQkFEZjtxQkFBVztVQUc1QixRQUFNLGVBQVksRUFBSSxhQUFTO0VBQUE7RUFFaEMsa0NBQVMscUJBQUEsWUFBWSxhQUNhO3FCQURmO3FCQUFXO1VBRTdCLFlBQU8sZUFBWSxFQUFJLGFBQVM7RUFBQTtFQUdqQywyQkFBTyxnQkFBQSxFQUFJLE9BQ2U7cUJBRGpCO3FCQUFTO1VBR2pCLE9BQUcsVUFBUSxHQUFNOztZQUFBLFFBQVEsRUFDQzttQkFBdkIsT0FBTztJQUFBOzs7O0VBRVgsZ0NBQVEsb0JBQUEsT0FBUyxPQUNlO3FCQURqQjtxQkFBUztVQUd2Qix5QkFDYyxXQUFBO0lBQVQsUUFBQSxLQUFBLE9BQ007WUFBSCxPQUFPO0lBQUE7R0FBQTtFQUFBO0VBR2hCLGlGQUF3QixTQUFTLElBQUksT0FBcEIsU0FBQSxPQUNzQjs7NkJBRGYsU0FBUyxJQUFJO1VBR3BDLE9BQUksVUFBUSxPQUFXOztZQUFBLEtBQUEsTUFDSTt1QkFBdEIsT0FBTztJQUFBOzs7O0VBRWIsNENBQWEsMkJBQUEsT0FBUyxPQUNzQjtxQkFEeEI7NkJBQVMsU0FBUyxJQUFJO1VBR3pDLHlCQUNjLFdBQUE7SUFBVCxRQUFBLEtBQUEsT0FDTTthQUFGLFNBQVMsT0FBTztJQUFBO0dBQUE7RUFBQTtFQUUxQiw0REFDZ0IsVUFBQTs7VUFJZixPQUFJLFVBQVEsT0FBVzs7WUFBQSxLQUFBLE1BQ0k7dUJBQXRCO0lBQUE7Ozs7RUFFTix3Q0FBWSx3QkFBQSxVQUNTO1VBRXBCLHlCQUNjLFdBQUE7SUFBVCxRQUFBLEtBQUEsVUFDUzthQUFMLFNBQVM7SUFBQTtHQUFBO0VBQUE7RUFFbkIsb0RBQWlCLE1BQVAsU0FBQSxTQUNROztxQkFERDtVQUdoQixPQUFJLFVBQVEsT0FDSyxLQUFBOztzQkFBWjtzQkFDQTs7OztFQUVOLDhCQUFNLG9CQUFRLEtBQUcsS0FDRTsrQ0FFbEIseUJBQ2MsV0FBQTtZQUFOLFNBQVM7WUFDVCxTQUFTO0dBQUE7O0VBR2xCLHFEQUFrQixNQUFSLFNBQUEsVUFDUzs7cUJBREQ7VUFHakIsT0FBSSxVQUFRLE9BQU8sV0FBSSxNQUFLO0VBQUE7RUFFN0IsOEJBQU0sb0JBQUcsa0JBQWMsVUFDUztxQkFERDs0QkFBeEIsSUFHTix5QkFDYyxXQUFBO0lBQWIsMEJBQW9CLHVCQUFPO0lBQ3ZCLFFBQUEsS0FBQSxrQkFDYTtLQUNaLG1CQUFGLHNCQUFELEdBQ2tCO01BQ2pCLFVBQUksc0JBQWtCLENBQUM7S0FBQSxPQUVwQjthQUFHO0tBQUE7SUFBQTtHQUFBOztFQUdYO0VBS0EsbURBQVcsU0FBQSxNQUNLOzt5QkFDWCxNQUFLO0VBQUE7RUFFVix5REFBbUIsTUFBUCxTQUFBLFNBQ1E7O3FCQUREOzRCQUdiLE1BQUs7RUFBQTtFQUdYLHNEQUFtQjtFQUluQiwyREFBb0IiLCJmaWxlIjoiYXQvYXQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
