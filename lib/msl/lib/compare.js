"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./js","./private/bootstrap","./Type/Poly","./at/at","./at/q","./at/Seq/Seq","./control","./Function","./Object","./Type/Pred-Type"],(exports,js_0,bootstrap_1,Poly_2,_64_3,_63_4,Seq_5,control_6,Function_7,Object_8,Pred_45Type_9)=>{
	exports._get=_ms.lazy(()=>{
		let _$2=_ms.getModule(js_0),defined_63=_ms.get(_$2,"defined?"),_$3=_ms.getModule(bootstrap_1),msDef=_ms.get(_$3,"msDef"),Poly=_ms.getDefaultExport(Poly_2),_64=_ms.lazy(()=>_ms.getDefaultExport(_64_3)),_$4=_ms.lazyGetModule(_64_3),all_63=_ms.lazyProp(_$4,"all?"),empty_63=_ms.lazyProp(_$4,"empty?"),from_45stream=_ms.lazyProp(_$4,"from-stream"),iterator=_ms.lazyProp(_$4,"iterator"),_$5=_ms.lazyGetModule(_63_4),un_45_63=_ms.lazyProp(_$5,"un-?"),Seq=_ms.lazy(()=>_ms.getDefaultExport(Seq_5)),_$6=_ms.lazyGetModule(Seq_5),first=_ms.lazyProp(_$6,"first"),_64tail=_ms.lazyProp(_$6,"@tail"),_$7=_ms.lazyGetModule(control_6),opr=_ms.lazyProp(_$7,"opr"),_$8=_ms.lazyGetModule(Function_7),identity=_ms.lazyProp(_$8,"identity"),_$9=_ms.lazyGetModule(Object_8),object_61_63=_ms.lazyProp(_$9,"object=?"),_$10=_ms.lazyGetModule(Pred_45Type_9),Opt=_ms.lazyProp(_$10,"Opt");
		let binary_61_63=exports["binary=?"]=new (Poly)((()=>{
			let built={};
			built.name="binary=?";
			let allow_45null_63=built["allow-null?"]=true;
			let args=built.args=["other"];
			let _default=built.default=function _default(other){
				let _this=this;
				return (Object.is(_this,other)||_ms.unlazy(object_61_63)(_this,other))
			};
			return built
		})());
		msDef("eq",binary_61_63);
		let compare=exports.default=_ms.method("compare",["other"]);
		let lt_63=exports["lt?"]=function lt_63(a,b){
			return (compare(a,b)<0)
		};
		let lte_63=exports["lte?"]=function lte_63(a,b){
			return (compare(a,b)<=0)
		};
		let gt_63=exports["gt?"]=function gt_63(a,b){
			return (compare(a,b)>0)
		};
		let gte_63=exports["gte?"]=function gte_63(a,b){
			return (compare(a,b)>=0)
		};
		let same_63=exports["same?"]=function same_63(fun,a,b){
			_ms.checkInstance(Function,fun,"fun");
			return _ms.eq(fun(a),fun(b))
		};
		let all_45same_63=exports["all-same?"]=function all_45same_63(_64coll,fun){
			_ms.checkInstance(_ms.unlazy(_64),_64coll,"@coll");
			_ms.checkInstance(_ms.sub(_ms.unlazy(Opt),Function),fun,"fun");
			fun=_ms.unlazy(opr)(fun,_ms.unlazy(identity));
			return (_ms.unlazy(empty_63)(_64coll)||(()=>{
				let fst=fun(_ms.sub(_64coll,0));
				return _ms.unlazy(all_63)(_ms.unlazy(_64tail)(_64coll),_=>_ms.eq(fst,fun(_)))
			})())
		};
		let min=exports.min=function min(_){
			_ms.checkInstance(_ms.unlazy(_64),_,"_");
			return min_45by(_,_ms.unlazy(identity))
		};
		let _63min=exports["?min"]=function _63min(_){
			_ms.checkInstance(_ms.unlazy(_64),_,"_");
			return _63min_45by(_,_ms.unlazy(identity))
		};
		let min_45by=exports["min-by"]=function min_45by(_,by){
			_ms.checkInstance(_ms.unlazy(_64),_,"_");
			_ms.checkInstance(Function,by,"by");
			return _ms.unlazy(un_45_63)(_63min_45by(_,by),`Can not take min of empty.`)
		};
		let _63min_45by=exports["?min-by"]=function _63min_45by(_,by){
			_ms.checkInstance(_ms.unlazy(_64),_,"_");
			_ms.checkInstance(Function,by,"by");
			return (_ms.unlazy(empty_63)(_)?_ms.None:_ms.some((()=>{
				let iter=_ms.unlazy(iterator)(_);
				let value=iter.next().value;
				let cur_45min=value;
				let cur_45min_45by=by(value);
				return (()=>{
					for(;;){
						let _$0=iter.next(),value=_$0.value,done=_$0.done;
						if(done){
							return cur_45min
						};
						let value_45by=by(value);
						if((cur_45min_45by>value_45by)){
							cur_45min=value;
							cur_45min_45by=value_45by
						}
					}
				})()
			})()))
		};
		let max=exports.max=function max(_){
			_ms.checkInstance(_ms.unlazy(_64),_,"_");
			return max_45by(_,_ms.unlazy(identity))
		};
		let _63max=exports["?max"]=function _63max(_){
			_ms.checkInstance(_ms.unlazy(_64),_,"_");
			return _63max_45by(_,_ms.unlazy(identity))
		};
		let max_45by=exports["max-by"]=function max_45by(_,by){
			_ms.checkInstance(_ms.unlazy(_64),_,"_");
			_ms.checkInstance(Function,by,"by");
			return _ms.unlazy(un_45_63)(_63max_45by(_,by),`Can not take max of empty.`)
		};
		let _63max_45by=exports["?max-by"]=function _63max_45by(_,by){
			_ms.checkInstance(_ms.unlazy(_64),_,"_");
			_ms.checkInstance(Function,by,"by");
			return (_ms.unlazy(empty_63)(_)?_ms.None:_ms.some((()=>{
				let iter=_ms.unlazy(iterator)(_);
				let value=iter.next().value;
				let cur_45max=value;
				let cur_45max_45by=by(value);
				return (()=>{
					for(;;){
						let _$1=iter.next(),value=_$1.value,done=_$1.done;
						if(done){
							return cur_45max
						};
						let value_45by=by(value);
						if((cur_45max_45by<value_45by)){
							cur_45max=value;
							cur_45max_45by=value_45by
						}
					}
				})()
			})()))
		};
		let sorted_63=exports["sorted?"]=function sorted_63(seq,sort_45by){
			_ms.checkInstance(_ms.unlazy(Seq),seq,"seq");
			_ms.checkInstance(_ms.sub(_ms.unlazy(Opt),Function),sort_45by,"sort-by");
			sort_45by=_ms.unlazy(opr)(sort_45by,_ms.unlazy(identity));
			return (()=>{
				let _=seq;
				if(_ms.unlazy(empty_63)(_)){
					return true
				} else {
					let sb_45prev=sort_45by(_ms.unlazy(first)(_));
					return _ms.unlazy(all_63)(_ms.unlazy(_64tail)(_),em=>{
						let sb_45cur=sort_45by(em);
						return (()=>{
							let _=(sb_45prev<sb_45cur);
							sb_45prev=sb_45cur;
							return _
						})()
					})
				}
			})()
		};
		let sort=exports.sort=_ms.method("sort",["sort-by"],function(sort_45by){
			let _this=this;
			return (()=>{
				let _=_ms.unlazy(from_45stream)(Array,_this);
				_.sort((()=>{
					let _=sort_45by;
					if(defined_63(_)){
						return (a,b)=>{
							return compare(sort_45by(a),sort_45by(b))
						}
					} else {
						return compare
					}
				})());
				return _
			})()
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvY29tcGFyZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQWNBLHFDQUFVLEtBQUksTUFDSSxLQUFBOztjQVNqQjtHQUNBLHlDQUFhO0dBQ2Isb0JBQU0sQ0FBRTtHQUNSLDJCQUFXLGtCQUFBLE1BQ0s7O1dBQ2YsV0FBUSxNQUFLLGlDQUFpQixNQUFLO0dBQUE7OztFQUdyQyxNQUFPLEtBQUc7RUFFVjtFQWtCQSx5QkFBTSxlQUFBLEVBQUUsRUFDQztVQUFSLENBQUksUUFBUSxFQUFFLEdBQUc7RUFBQTtFQUVsQiwyQkFBTyxnQkFBQSxFQUFFLEVBQ0M7VUFBVCxDQUFLLFFBQVEsRUFBRSxJQUFHO0VBQUE7RUFFbkIseUJBQU0sZUFBQSxFQUFFLEVBQ0M7VUFBUixDQUFJLFFBQVEsRUFBRSxHQUFHO0VBQUE7RUFFbEIsMkJBQU8sZ0JBQUEsRUFBRSxFQUNDO1VBQVQsQ0FBSyxRQUFRLEVBQUUsSUFBRztFQUFBO0VBR2xCLDZCQUFRLGlCQUFBLElBQWEsRUFBRSxFQUNDO3FCQURaO2lCQUVQLElBQUksR0FBSSxJQUFJO0VBQUE7RUFHakIsdUNBQVksdUJBQUEsUUFBUSxJQUNpQjs7NkNBRFQ7dUJBQ2hCO1VBQ1gsc0JBQVcsVUFDTSxLQUFBO0lBQWhCLFFBQU0sWUFBSSxRQUFNO2tEQUNKLG1CQUFZLElBQUksSUFBSTtHQUFBO0VBQUE7RUFJbEMsb0JBQU0sYUFBQSxFQUNHOztVQUFSLFNBQU87O0VBRVIsMkJBQU8sZ0JBQUEsRUFDRzs7VUFBVCxZQUFROztFQUVULCtCQUFTLGtCQUFBLEVBQUksR0FDVzs7cUJBRFI7K0JBQ1QsWUFBUSxFQUFFLElBQUs7O0VBRXRCLG1DQUFVLHFCQUFBLEVBQUksR0FDVzs7cUJBRFI7VUFDVCxzQkFBTywwQkFDQTtJQUFiLDhCQUFnQjtJQUNoQixVQUFRO0lBQ1IsY0FBVTtJQUNWLG1CQUFhLEdBQUc7V0FFYjtZQUFBO01BQUYsUUFBZTtNQUNaLEdBQUEsS0FDSTtPQUFOLE9BQU07TUFBQTtNQUNQLGVBQVcsR0FBRztNQUNYLEdBQUEsQ0FBRyxlQUFXLFlBQ1E7aUJBQWI7c0JBQ0c7TUFBQTtLQUFBO0lBQUE7R0FBQTtFQUFBO0VBR2xCLG9CQUFNLGFBQUEsRUFDRzs7VUFDUixTQUFPOztFQUVSLDJCQUFPLGdCQUFBLEVBQ0c7O1VBQ1QsWUFBUTs7RUFFVCwrQkFBUyxrQkFBQSxFQUFJLEdBQ1c7O3FCQURSOytCQUdULFlBQVEsRUFBRSxJQUFLOztFQUV0QixtQ0FBVSxxQkFBQSxFQUFJLEdBQ1c7O3FCQURSO1VBRVQsc0JBQU8sMEJBQ0E7SUFBYiw4QkFBZ0I7SUFDaEIsVUFBUTtJQUNSLGNBQVU7SUFDVixtQkFBYSxHQUFHO1dBRWI7WUFBQTtNQUFGLFFBQWU7TUFDWixHQUFBLEtBQ0k7T0FBTixPQUFNO01BQUE7TUFDUCxlQUFXLEdBQUc7TUFDWCxHQUFBLENBQUcsZUFBVyxZQUNRO2lCQUFiO3NCQUNHO01BQUE7S0FBQTtJQUFBO0dBQUE7RUFBQTtFQUdsQixpQ0FBVSxtQkFBQSxJQUFRLFVBQ3FCOzs2Q0FEVDs2QkFFZDtVQUNWO0lBQUEsTUFBQTtJQUNKLHdCQUFPLEdBQ0E7WUFBTjtJQUFBLE9BRUc7S0FBSCxjQUFVLDRCQUFjO21EQUNiLEdBQUUsSUFDRTtNQUFkLGFBQVMsVUFBUTthQUNaLEtBQ2lCO2FBRGpCLENBQUcsVUFBUTtpQkFDSjs7Ozs7OztFQUdoQixvREFBWSxTQUFBLFVBQ087O1VBS2IsS0FDc0I7b0NBRFYsTUFBTTtJQUN0QixPQUFZO0tBQUEsTUFBQTtLQUNYLEdBQUEsV0FBUyxHQUNBO2FBQVAsQ0FBQSxFQUFFLElBQ0M7Y0FBSCxRQUFTLFVBQVEsR0FBSSxVQUFRO01BQUE7S0FBQSxPQUUzQjthQUFIO0tBQUE7SUFBQSIsImZpbGUiOiJjb21wYXJlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
