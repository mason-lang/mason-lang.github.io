"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../Function","./../../polys","./../../String","./../../Type/Type","./../at","./../../math/Number","./../../to-string","./../q","./Stream"],(exports,Function_0,polys_1,String_2,Type_3,_64_4,Number_5,to_45string_6,_63_7,Stream_8)=>{
	exports._get=_ms.lazy(()=>{
		let _$2=_ms.getModule(Function_0),Pred=_ms.get(_$2,"Pred"),_$3=_ms.getModule(polys_1),sub=_ms.get(_$3,"sub"),_$4=_ms.getModule(String_2),indent=_ms.get(_$4,"indent"),_$5=_ms.getModule(Type_3),_61_62=_ms.get(_$5,"=>"),type_45of=_ms.get(_$5,"type-of"),_64=_ms.getDefaultExport(_64_4),_$6=_ms.getModule(_64_4),_43_43=_ms.get(_$6,"++"),count=_ms.get(_$6,"count"),empty=_ms.get(_$6,"empty"),empty_63=_ms.get(_$6,"empty?"),from_45stream=_ms.get(_$6,"from-stream"),iterator=_ms.get(_$6,"iterator"),_$7=_ms.lazyGetModule(Number_5),Nat=_ms.lazyProp(_$7,"Nat"),to_45string=_ms.lazy(()=>_ms.getDefaultExport(to_45string_6)),_$8=_ms.lazyGetModule(_63_7),Opt_45_62_63=_ms.lazyProp(_$8,"Opt->?"),un_45_63=_ms.lazyProp(_$8,"un-?"),Stream=_ms.lazy(()=>_ms.getDefaultExport(Stream_8));
		let Seq=exports.default=_ms.trait("Seq",[_64],{},{
			[_ms.symbol(sub)](n){
				let _this=this;
				_ms.checkInstance(_ms.unlazy(Nat),n,"n");
				return _ms.unlazy(un_45_63)(_63nth(_this,n),_ms.lazy(()=>`No element at index ${n} for
	${indent(_ms.unlazy(to_45string)(_this))}`))
			}
		});
		let _60_43_43_126=exports["<++~"]=_ms.method("<++~",[["left-added",_64]],function(left_45added){
			let _this=this;
			_ms.checkInstance(_64,left_45added,"left-added");
			return _61_62(type_45of(_this),_43_43(left_45added,_this))
		});
		let first=exports.first=function first(_){
			return _ms.unlazy(un_45_63)(_63first(_),`Can not take first of empty.`)
		};
		let _63first=exports["?first"]=_ms.method("?first",[],function(){
			let _this=this;
			return _63nth(_this,0)
		});
		let last=exports.last=function last(_){
			return _ms.unlazy(un_45_63)(_63last(_),`Can not take last of empty.`)
		};
		let _63last=exports["?last"]=_ms.method("?last",[],function(){
			let _this=this;
			return (empty_63(_this)?_ms.None:_ms.some((()=>{
				return _ms.sub(_this,(count(_this)-1))
			})()))
		});
		let _64tail=exports["@tail"]=_ms.method("@tail",[],function(){
			let _this=this;
			return (empty_63(_this)?_this:_64drop(_this,1))
		});
		let _64tail_126=exports["@tail~"]=_=>_64drop_126(_,1);
		let _64rtail=exports["@rtail"]=_ms.method("@rtail",[],function(){
			let _this=this;
			return (empty_63(_this)?_this:(()=>{
				return _64take(_this,(count(_this)-1))
			})())
		});
		let seq_61_63=exports["seq=?"]=function seq_61_63(_64a,_64b){
			_ms.checkInstance(_64,_64a,"@a");
			_ms.checkInstance(_64,_64b,"@b");
			let iter_45a=iterator(_64a);
			let iter_45b=iterator(_64b);
			return (()=>{
				for(;;){
					let next_45a=iter_45a.next();
					let next_45b=iter_45b.next();
					if((next_45a.done||next_45b.done)){
						return _ms.eq(next_45a.done,next_45b.done)
					};
					if(! _ms.eq(next_45a.value,next_45b.value)){
						return false
					}
				}
			})()
		};
		let _63nth=exports["?nth"]=_ms.method("?nth",[["n",_ms.unlazy(Nat)]],function(n){
			let _this=this;
			_ms.checkInstance(_ms.unlazy(Nat),n,"n");
			let i=0;
			return _ms.unlazy(Opt_45_62_63)((()=>{
				for(let _ of _this){
					if(_ms.eq(i,n)){
						return _
					};
					i=(1+i)
				}
			})())
		});
		let _64slice=exports["@slice"]=_ms.method("@slice",[["start",_ms.unlazy(Nat)],["end",_ms.unlazy(Nat)]],function(start,end){
			let _this=this;
			_ms.checkInstance(_ms.unlazy(Nat),start,"start");
			_ms.checkInstance(_ms.unlazy(Nat),end,"end");
			return _61_62(type_45of(_this),_64slice_126(_this,start,end))
		});
		let _64slice_126=exports["@slice~"]=function _64slice_126(_,start,end){
			return _ms.checkInstance(_64,_64take_126(_64drop_126(_,start),(end-start)),"returned value")
		};
		let _64take=exports["@take"]=_ms.method("@take",[["count-to-take",_ms.unlazy(Nat)]],function(count_45to_45take){
			let _this=this;
			_ms.checkInstance(_ms.unlazy(Nat),count_45to_45take,"count-to-take");
			return _61_62(type_45of(_this),_64take_126(_this,count_45to_45take))
		});
		let _64take_126=exports["@take~"]=function _64take_126(_,count_45to_45take){
			_ms.checkInstance(_ms.unlazy(Nat),count_45to_45take,"count-to-take");
			return (()=>{
				if(_ms.eq(0,count_45to_45take)){
					return empty(_ms.unlazy(Stream))
				} else {
					return new (_ms.unlazy(Stream))(function*(){
						let n=count_45to_45take;
						for(let elem of _){
							(yield elem);
							n=(n-1);
							if(_ms.eq(0,n)){
								break
							}
						}
					})
				}
			})()
		};
		let _64take_45while_126=exports["@take-while~"]=function _64take_45while_126(_,while_63){
			_ms.checkInstance(Pred,while_63,"while?");
			return new (_ms.unlazy(Stream))(function*(){
				for(let elem of _){
					if(! while_63(elem)){
						break
					};
					(yield elem)
				}
			})
		};
		let _64drop=exports["@drop"]=_ms.method("@drop",[["count-to-drop",_ms.unlazy(Nat)]],function(count_45to_45drop){
			let _this=this;
			_ms.checkInstance(_ms.unlazy(Nat),count_45to_45drop,"count-to-drop");
			return _61_62(type_45of(_this),_64drop_126(_this,count_45to_45drop))
		});
		let _64drop_126=exports["@drop~"]=(()=>{
			return (_,count_45to_45drop)=>{
				return new (_ms.unlazy(Stream))(function*(){
					let iter=iterator(_);
					let i=0;
					for(;;){
						if(_ms.eq(i,count_45to_45drop)){
							break
						};
						if(iter.next().done){
							break
						};
						i=(1+i)
					};
					(yield* iter)
				})
			}
		})();
		let _64zip=exports["@zip"]=function _64zip(_64a,_64b,zipper){
			_ms.checkInstance(_64,_64a,"@a");
			_ms.checkInstance(_64,_64b,"@b");
			_ms.checkInstance(_ms.sub(Function,2),zipper,"zipper");
			return _61_62(type_45of(_64a),_64zip_126(_64a,_64b,zipper))
		};
		let _64zip_126=exports["@zip~"]=function _64zip_126(_64a,_64b,zipper){
			_ms.checkInstance(_64,_64a,"@a");
			_ms.checkInstance(_64,_64b,"@b");
			_ms.checkInstance(_ms.sub(Function,2),zipper,"zipper");
			return new (_ms.unlazy(Stream))(function*(){
				let iter_45a=iterator(_64a);
				let iter_45b=iterator(_64b);
				for(;;){
					let next_45a=iter_45a.next();
					if(next_45a.done){
						break
					};
					let next_45b=iter_45b.next();
					if(next_45b.done){
						break
					};
					(yield zipper(next_45a.value,next_45b.value))
				}
			})
		};
		let _64groups_45of_126=exports["@groups-of~"]=function _64groups_45of_126(group_45size,_){
			_ms.checkInstance(_ms.unlazy(Nat),group_45size,"group-size");
			return (()=>{
				if(_ms.eq(group_45size,0)){
					return new (_ms.unlazy(Stream))(function*(){
						for(;;){
							(yield [])
						}
					})
				} else {
					return new (_ms.unlazy(Stream))(function*(){
						let iter=iterator(_);
						for(;;){
							let next_45group=[];
							for(;;){
								let _$0=iter.next(),value=_$0.value,done=_$0.done;
								if(done){
									break
								};
								_43_43_62_33(next_45group,[value]);
								if(_ms.eq(group_45size,count(next_45group))){
									break
								}
							};
							if(! _ms.eq(group_45size,count(next_45group))){
								break
							};
							(yield next_45group)
						}
					})
				}
			})()
		};
		let _64indexes=exports["@indexes"]=function _64indexes(_){
			_ms.checkInstance(Seq,_,"_");
			return _ms.range(0,count(_),true)
		};
		let _64reverse=exports["@reverse"]=_ms.method("@reverse",[],function(){
			let _this=this;
			return from_45stream(Array,_this).reverse()
		});
		let _64reverse_126=exports["@reverse~"]=_ms.method("@reverse~",[],function(){
			let _this=this;
			let arr=_61_62(Array,_this);
			return new (_ms.unlazy(Stream))(function*(){
				for(let _ of _64reverse(_64indexes(arr))){
					(yield _ms.sub(arr,_))
				}
			})
		});
		let _64split_126=exports["@split~"]=function _64split_126(_,split_63){
			_ms.checkInstance(Pred,split_63,"split?");
			return new (_ms.unlazy(Stream))(function*(){
				let iter=iterator(_);
				let prev_45idx=0;
				let cur_45idx=0;
				for(;;){
					let _$1=iter.next(),value=_$1.value,done=_$1.done;
					let next_45idx=_ms.lazy(()=>(1+cur_45idx));
					if(done){
						(yield _64slice(_,prev_45idx,cur_45idx));
						break
					} else if(split_63(value)){
						(yield _64slice(_,prev_45idx,cur_45idx));
						prev_45idx=_ms.unlazy(next_45idx);
						cur_45idx=_ms.unlazy(next_45idx)
					} else {
						cur_45idx=_ms.unlazy(next_45idx)
					}
				}
			})
		};
		let _60_43_33=exports["<+!"]=_ms.method("<+!",["added"]);
		let _60_43_43_33=exports["<++!"]=_ms.method("<++!",[["@added",_64]],function(_64added){
			let _this=this;
			_ms.checkInstance(_64,_64added,"@added");
			for(let _ of _64reverse_126(_64added)){
				_60_43_33(_this,_)
			}
		});
		let _43_62_33=exports["+>!"]=_ms.method("+>!",["added"]);
		let _43_43_62_33=exports["++>!"]=_ms.method("++>!",[["@added",_64]],function(_64added){
			let _this=this;
			_ms.checkInstance(_64,_64added,"@added");
			for(let _ of _64added){
				_43_62_33(_this,_)
			}
		});
		let _63_60pop_33=exports["?<pop!"]=_ms.method("?<pop!",[]);
		let _63pop_62_33=exports["?pop>!"]=_ms.method("?pop>!",[]);
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9TZXEvU2VxLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBWUEseUNBQVc7R0FFVixZQUFDLE1BQU0sRUFDSzs7O2dDQUNMLE9BQUssTUFBSyxnQkFDZix1QkFBcUI7R0FDbEIsK0JBQWtCOzs7RUFJdkIsbUVBQXVCLE1BQVgsU0FBQSxhQUNZOztxQkFERDtVQUd0QixPQUFJLFVBQVEsT0FBTyxPQUFHLGFBQVc7RUFBQTtFQUdsQyx3QkFBUSxlQUFBLEVBQ0M7K0JBQ0gsU0FBTyxHQUFFOztFQUVmLHNEQUNjLFVBQUE7O1VBQ2IsT0FBSyxNQUFLO0VBQUE7RUFFWCxzQkFBTyxjQUFBLEVBQ0M7K0JBQ0YsUUFBTSxHQUFFOztFQUVkLG1EQUNhLFVBQUE7O1VBQ0wsQ0FBQSxTQUFPLDhCQUNJO21CQUFqQixNQUFLLENBQUcsTUFBTSxPQUFNO0dBQUE7RUFBQTtFQUV0QixtREFDYSxVQUFBOztVQUVQLENBQUMsU0FBTyxPQUFNLE1BQU0sUUFBTSxNQUFLO0VBQUE7RUFFckMscUNBQVUsWUFBTyxFQUFFO0VBRW5CLHNEQUNjLFVBQUE7O1VBRVIsQ0FBQyxTQUFPLE9BQU0sTUFDSSxLQUFBO1dBQXRCLFFBQU0sTUFBSyxDQUFHLE1BQU0sT0FBTTtHQUFBO0VBQUE7RUFHNUIsK0JBQVEsbUJBQUEsS0FBSyxLQUNJO3FCQUROO3FCQUFLO0dBSWYsYUFBUyxTQUFTO0dBQ2xCLGFBQVMsU0FBUztVQUVmO1dBQUE7S0FBRixhQUFTO0tBQ1QsYUFBUztLQUNOLEdBQUEsQ0FBRyxlQUFZLGVBQ1c7TUFBNUIsY0FBUyxjQUFZOztLQUNmLFlBQUcsZUFBYSxnQkFDWTtNQUFsQyxPQUFNO0tBQUE7SUFBQTtHQUFBO0VBQUE7RUFFVCxxRUFBWSxTQUFBLEVBQ0s7OztHQUVoQixNQUFJO21DQUVPO1lBQUEsS0FBQSxNQUNJO0tBQVgsVUFBRyxFQUFFLEdBQ0M7TUFBUixPQUFNO0tBQUE7T0FDRixDQUFFLEVBQUU7SUFBQTtHQUFBO0VBQUE7RUFHWCx1R0FBYyxTQUFBLE1BQVUsSUFDTzs7OztVQUc5QixPQUFJLFVBQVEsT0FBTyxhQUFRLE1BQUssTUFBTTtFQUFBO0VBRXZDLG9DQUFVLHNCQUFHLEVBQUUsTUFBTSxJQUNHOzRCQURiLElBRVYsWUFBUSxZQUFPLEVBQUUsT0FBTyxDQUFFLElBQUk7O0VBRS9CLG9GQUFhLFNBQUEsa0JBQ2lCOzs7VUFDN0IsT0FBSSxVQUFRLE9BQU8sWUFBTyxNQUFLO0VBQUE7RUFFaEMsa0NBQVMscUJBQUEsRUFBRSxrQkFDaUI7O1VBR3ZCO0lBQUgsVUFBRyxFQUFFLG1CQUNhO1lBQWpCO1dBRUc7WUFDSCx5QkFDYyxXQUFBO01BQWIsTUFBSTtNQUNBLFFBQUEsUUFBUSxFQUNDO2NBQU47U0FDRCxDQUFFLEVBQUU7T0FDTixVQUFHLEVBQUUsR0FDQztRQUFSO09BQUE7TUFBQTtLQUFBO0lBQUE7R0FBQTtFQUFBO0VBR04sZ0RBQWUsNkJBQUEsRUFBRSxTQUNXO3FCQURKO1VBR3ZCLHlCQUNjLFdBQUE7SUFBVCxRQUFBLFFBQVEsRUFDQztLQUFMLEtBQUEsU0FBTyxNQUNJO01BQWpCO0tBQUE7WUFDSztJQUFBO0dBQUE7RUFBQTtFQUVULG9GQUFhLFNBQUEsa0JBQ2lCOzs7VUFDN0IsT0FBSSxVQUFRLE9BQU8sWUFBTyxNQUFLO0VBQUE7RUFFaEMsa0NBQ08sS0FBQTtVQUNMLENBQUEsRUFBRSxvQkFDYTtXQUNmLHlCQUNjLFdBQUE7S0FBYixTQUFPLFNBQVM7S0FDaEIsTUFBSTtLQUVELE9BQUE7TUFBQyxVQUFHLEVBQUUsbUJBQ2E7T0FBcEI7TUFBQTtNQUNFLEdBQUEsaUJBQ2dCO09BQWxCO01BQUE7UUFDSSxDQUFFLEVBQUU7S0FBQTthQUNIO0lBQUE7R0FBQTtFQUFBO0VBS1YsMkJBQU8sZ0JBQUEsS0FBSyxLQUFLLE9BQ2tCO3FCQUR6QjtxQkFBSzs2QkFBUyxTQUFTO1VBR2hDLE9BQUksVUFBUSxNQUFLLFdBQU0sS0FBRyxLQUFHO0VBQUE7RUFFOUIsZ0NBQVEsb0JBQUEsS0FBSyxLQUFLLE9BQ2tCO3FCQUR6QjtxQkFBSzs2QkFBUyxTQUFTO1VBS2pDLHlCQUNjLFdBQUE7SUFBYixhQUFTLFNBQVM7SUFDbEIsYUFBUyxTQUFTO0lBRWYsT0FBQTtLQUFGLGFBQVM7S0FDTixHQUFBLGNBQ1c7TUFBYjtLQUFBO0tBQ0QsYUFBUztLQUNOLEdBQUEsY0FDVztNQUFiO0tBQUE7WUFDSyxPQUFPLGVBQWE7Ozs7RUFHN0IsOENBQWMsNEJBQUEsYUFBZSxFQUNtQjs7VUFFM0M7SUFBSCxVQUFHLGFBQVcsR0FDQztZQUNkLHlCQUNjLFdBQUE7TUFDVixPQUFBO2NBQUk7TUFBQTtLQUFBO0lBQUEsT0FFTDtZQUNILHlCQUNjLFdBQUE7TUFBYixTQUFPLFNBQVM7TUFFYixPQUFBO09BQUYsaUJBQWE7T0FFVixPQUFBO1FBQUYsUUFBZTtRQUNaLEdBQUEsS0FDSTtTQUFOO1FBQUE7UUFDRCxhQUFLLGFBQVcsQ0FBQztRQUNkLFVBQUcsYUFBWSxNQUFNLGVBQ1c7U0FBbEM7UUFBQTtPQUFBO09BQ0ssWUFBRyxhQUFZLE1BQU0sZUFDVztRQUF0QztPQUFBO2NBQ0s7TUFBQTtLQUFBO0lBQUE7R0FBQTtFQUFBO0VBRVgsbUNBQVcsb0JBQUEsRUFDSztxQkFESDtvQkFFWixFQUFJLE1BQU07O0VBRVgsNERBQ2dCLFVBQUE7O1VBQ2QsY0FBWSxNQUFNOztFQUVwQixrRUFDaUIsVUFBQTs7R0FBaEIsUUFBTSxPQUFHLE1BQU07VUFFZix5QkFDYyxXQUFBO0lBQVQsUUFBQSxLQUFBLFdBQVUsV0FBUyxNQUNJO29CQUFwQixJQUFJO0lBQUE7R0FBQTtFQUFBO0VBRWIsb0NBQVUsc0JBQUEsRUFBRSxTQUNXO3FCQURKO1VBSWxCLHlCQUNjLFdBQUE7SUFBYixTQUFPLFNBQVM7SUFDaEIsZUFBVztJQUNYLGNBQVU7SUFFUCxPQUFBO0tBQUYsUUFBZTtLQUNmLDRCQUFZLENBQUUsRUFBRTtLQUVaLEdBQUgsS0FDSTthQUFHLFNBQU8sRUFBRSxXQUFTO01BQ3hCO0tBQUEsT0FDRCxHQUFBLFNBQU8sT0FDSzthQUFMLFNBQU8sRUFBRSxXQUFTOzs7WUFJckI7Ozs7OztFQUlSO0VBSUEsOERBQW9CLE1BQVAsU0FBQSxTQUNROztxQkFERDtHQUVmLFFBQUEsS0FBQSxlQUFVLFVBQ007SUFBbkIsVUFBSSxNQUFLO0dBQUE7RUFBQTtFQUdYO0VBSUEsOERBQW9CLE1BQVAsU0FBQSxTQUNROztxQkFERDtHQUVmLFFBQUEsS0FBQSxTQUNNO0lBQVQsVUFBSSxNQUFLO0dBQUE7RUFBQTtFQUVYO0VBSUEiLCJmaWxlIjoiYXQvU2VxL1NlcS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
