"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../compare","./../../math/Number","./../../math/methods","./../../methods","./../../Type/Kind","./../../Type/Pred-Type","./../at","./../at-Type","./../q","./Seq"],(exports,compare_0,Number_1,methods_2,methods_3,Kind_4,Pred_45Type_5,_64_6,_64_45Type_7,_63_8,Seq_9)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_60_63=_ms.get(_$0,"<?"),_$1=_ms.getModule(Number_1),modulo=_ms.get(_$1,"modulo"),Nat=_ms.get(_$1,"Nat"),_$2=_ms.getModule(methods_2),_43=_ms.get(_$2,"+"),_45=_ms.get(_$2,"-"),_42=_ms.get(_$2,"*"),_$3=_ms.getModule(methods_3),set_45sub_33=_ms.get(_$3,"set-sub!"),_$4=_ms.getModule(Kind_4),self_45kind_33=_ms.get(_$4,"self-kind!"),_$5=_ms.getModule(Pred_45Type_5),Any=_ms.get(_$5,"Any"),_64=_ms.getDefaultExport(_64_6),_$6=_ms.getModule(_64_6),_43_43_126=_ms.get(_$6,"++~"),count=_ms.get(_$6,"count"),empty_33=_ms.get(_$6,"empty!"),empty_63=_ms.get(_$6,"empty?"),iterator=_ms.get(_$6,"iterator"),_64map=_ms.get(_$6,"@map"),_64_45Type=_ms.getDefaultExport(_64_45Type_7),_$7=_ms.getModule(_64_45Type_7),empty=_ms.get(_$7,"empty"),_$8=_ms.getModule(_63_8),un_45_63=_ms.get(_$8,"un-?"),Seq=_ms.getDefaultExport(Seq_9),_$9=_ms.getModule(Seq_9),_60_43_43_33=_ms.get(_$9,"<++!"),_43_43_62_33=_ms.get(_$9,"++>!"),_63nth=_ms.get(_$9,"?nth"),_63_60pop_33=_ms.get(_$9,"?<pop!"),_63pop_62_33=_ms.get(_$9,"?pop>!"),_64reverse=_ms.get(_$9,"@reverse");
		let Deque=exports.default=(()=>{
			let _=class Deque{
				static [_ms.symbol(empty)](){
					let _this=this;
					return new (_this)()
				}
				constructor(){
					let _this=this;
					_ms.newProperty(_this,"data!",Array(8));
					_ms.newProperty(_this,"start-index!",0);
					_ms.newProperty(_this,"end-index!",0)
				}
				*[_ms.symbol(iterator)](){
					let _this=this;
					let indices=(yield* function*(){
						if(_60_63(_this["end-index!"],_this["start-index!"])){
							return _43_43_126(_ms.range(_this["start-index!"],count(_this["data!"]),true),_ms.range(0,_this["end-index!"],true))
						} else {
							return _ms.range(_this["start-index!"],_this["end-index!"],true)
						}
					}());
					for(let _ of indices){
						(yield _ms.sub(_this["data!"],_))
					}
				}
				[_ms.symbol(_60_43_43_33)](ems){
					let _this=this;
					_ms.checkContains(_64,ems,"ems");
					for(let _ of _64reverse(ems)){
						let new_45start=prev_45index(_this,_this["start-index!"]);
						if(_61_63(new_45start,_this["end-index!"])){
							expand_33(_this);
							_60_43_43_33(_this,[_])
						} else {
							_this["start-index!"]=new_45start;
							_ms.setSub(_this["data!"],_this["start-index!"],_,"mutate")
						}
					}
				}
				[_ms.symbol(_43_43_62_33)](ems){
					let _this=this;
					_ms.checkContains(_64,ems,"ems");
					for(let _ of ems){
						let new_45end=next_45index(_this,_this["end-index!"]);
						if(_61_63(new_45end,_this["start-index!"])){
							expand_33(_this);
							_43_43_62_33(_this,[_])
						} else {
							_ms.setSub(_this["data!"],_this["end-index!"],_,"mutate");
							_this["end-index!"]=new_45end
						}
					}
				}
				[_ms.symbol(_63_60pop_33)](){
					let _this=this;
					return (empty_63(_this)?_ms.None:_ms.some((()=>{
						return (()=>{
							let _=_ms.sub(_this["data!"],_this["start-index!"]);
							_this["start-index!"]=next_45index(_this,_this["start-index!"]);
							return _
						})()
					})()))
				}
				[_ms.symbol(_63pop_62_33)](){
					let _this=this;
					return (empty_63(_this)?_ms.None:_ms.some((()=>{
						let new_45end=prev_45index(_this,_this["end-index!"]);
						_this["end-index!"]=new_45end;
						return _ms.sub(_this["data!"],new_45end)
					})()))
				}
				[_ms.symbol(_63nth)](index){
					let _this=this;
					_ms.checkContains(Nat,index,"index");
					return _64map(_63data_45index(_this,index),_=>{
						return _ms.sub(_this["data!"],_)
					})
				}
				[_ms.symbol(set_45sub_33)](index,set_45to){
					let _this=this;
					_ms.checkContains(Nat,index,"index");
					_ms.checkContains(Any,set_45to,"set-to");
					let data_45index=un_45_63(_63data_45index(_this,index),_ms.lazy(()=>`Can't set at index ${index}; count is ${count(_this)}.`));
					_ms.setSub(_this["data!"],data_45index,set_45to,"mutate")
				}
				[_ms.symbol(empty_33)](){
					let _this=this;
					empty_33(_this["data!"]);
					_this["start-index!"]=0;
					_this["end-index!"]=0
				}
			};
			_ms.kindDo(_,Seq);
			self_45kind_33(_,_64_45Type);
			return _
		})();
		let capacity=function capacity(_){
			return count(_["data!"])
		};
		let expand_33=function expand_33(_){
			let old_45data=_["data!"];
			let old_45capacity=capacity(_);
			let new_45capacity=_42(2,old_45capacity);
			let new_45data=Array(new_45capacity);
			for(let index of _ms.range(0,old_45capacity,true)){
				_ms.setSub(new_45data,index,_ms.sub(old_45data,index),"init")
			};
			_["data!"]=new_45data
		};
		let wrap_45index=function wrap_45index(_,index){
			return modulo(index,capacity(_))
		};
		let next_45index=function next_45index(_,index){
			_ms.checkContains(Nat,index,"index");
			return wrap_45index(_,_43(index,1))
		};
		let prev_45index=function prev_45index(_,index){
			_ms.checkContains(Nat,index,"index");
			return wrap_45index(_,_45(index,1))
		};
		let _63data_45index=function _63data_45index(_,index){
			_ms.checkContains(Nat,index,"index");
			let a=_43(_["start-index!"],index);
			return (()=>{
				if(_60_63(a,capacity(_))){
					return ((_60_63(_["end-index!"],_["start-index!"])||_60_63(a,_["end-index!"]))?_ms.some((()=>{
						return a
					})()):_ms.None)
				} else {
					let b=wrap_45index(_,a);
					return ((_60_63(_["end-index!"],_["start-index!"])&&_60_63(b,_["end-index!"]))?_ms.some((()=>{
						return b
					})()):_ms.None)
				}
			})()
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9TZXEvRGVxdWUubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFZQSwwQkFBYSxLQUlWOzt1QkFJRDtTQWdFQTtZQS9EQyxLQStERDtJQUFBO0lBNURRO1NBNERSO3FCQUFBLGNBNURTLE1BQU07cUJBNERmLHFCQTNEZ0I7cUJBMkRoQixtQkExRGM7SUFBQTtpQkFFZjtTQXdEQztLQXZEQSxZQUNjO01BQWIsR0FBQSxPQXNERCwyQ0FyRDZCO2NBQTNCLHFCQXFERixzQkFyRHVCLE1BcUR2QixnQ0FyRHFDLEVBcURyQzthQW5ESzt3QkFtREw7OztLQWxESSxRQUFBLEtBQUEsUUFDTztxQkFpRFgsZUFqRGU7S0FBQTtJQUFBO2dCQUVoQixlQUFPO1NBK0NOO3VCQS9DVTtLQUNOLFFBQUEsS0FBQSxXQUFTLEtBQ0c7TUFBZixnQkFBWSxhQTZDYjtNQTNDSyxHQUFILE9BQUcsWUEyQ0wscUJBMUMwQjtPQUF2QixVQTBDSDtPQXpDRyxhQXlDSCxNQXpDYSxDQUFFO01BQUEsT0FFVDtPQXVDTixzQkF2Q29CO2tCQXVDcEIscUNBdEM2Qjs7OztnQkFFOUIsZUFBTztTQW9DTjt1QkFwQ1U7S0FDTixRQUFBLEtBQUEsSUFDRztNQUFOLGNBQVUsYUFrQ1g7TUFoQ0ssR0FBSCxPQUFHLFVBZ0NMLHVCQS9CMEI7T0FBdkIsVUErQkg7T0E5QkcsYUE4QkgsTUE5QmEsQ0FBRTtNQUFBLE9BRVQ7a0JBNEJOLG1DQTVCMkI7T0E0QjNCLG9CQTNCa0I7TUFBQTtLQUFBO0lBQUE7Z0JBSW5CO1NBdUJDO1lBdEJPLENBQUEsU0FzQlAsOEJBckJrQjthQUFaLEtBQ3FCO3FCQW9CM0I7T0FBQSxzQkFwQm1CLGFBb0JuQjs7Ozs7Z0JBbEJEO1NBa0JDO1lBakJPLENBQUEsU0FpQlAsOEJBaEJrQjtNQUFqQixjQUFVLGFBZ0JYO01BQUEsb0JBZmdCO3FCQWVoQixlQWRRO0tBQUE7SUFBQTtnQkFFVCxTQUFNO1NBWUw7dUJBWlc7WUFFWCxPQUFNLGdCQVVOLE1BVnVCLE9BQVM7cUJBVWhDLGVBVFM7S0FBQTtJQUFBO2dCQUVWLGVBQVcsTUFBVTtTQU9wQjt1QkFQZ0I7dUJBQVc7S0FDM0IsaUJBQWEsU0FBTSxnQkFNbkIsTUFOb0Msb0JBQVMsc0JBQW9CLG1CQUFrQixNQU1uRjtnQkFBQSxlQUxPLGFBQWU7O2dCQUV2QjtTQUdDO0tBRkEsU0FFQTtLQUFBLHNCQURpQjtLQUNqQixvQkFBZTtJQUFBO0dBQUE7Z0JBeEVDO0dBSWhCLGVBQVksRUFBQzs7O0VBdUVkLGFBQWEsa0JBQUE7VUFDWixNQUFPOztFQUVSLGNBQWEsbUJBQUE7R0FDWixlQUFZO0dBQ1osbUJBQWUsU0FBUztHQUN4QixtQkFBZSxJQUFFLEVBQUU7R0FDbkIsZUFBVyxNQUFNO0dBQ2IsUUFBQSxtQkFBUyxFQUFJLHFCQUNZO2VBQTVCLFdBQVMsY0FBUyxXQUFTOztHQUMzQixXQUFVO0VBQUE7RUFFWixpQkFBZSxzQkFBQSxFQUFDO1VBQ2YsT0FBTyxNQUFNLFNBQVM7RUFBQTtFQUV2QixpQkFBZSxzQkFBQSxFQUFDO3FCQUFNO1VBQ3JCLGFBQVksRUFBRSxJQUFFLE1BQU07RUFBQTtFQUV2QixpQkFBZSxzQkFBQSxFQUFDO3FCQUFNO1VBQ3JCLGFBQVksRUFBRSxJQUFFLE1BQU07RUFBQTtFQUV2QixvQkFBZ0IseUJBQUEsRUFBQztxQkFBTTtHQUN0QixNQUFJLElBQUcsa0JBQWM7VUFFakI7SUFBSCxHQUFBLE9BQUcsRUFBRSxTQUFTLElBQ0E7WUFBVixDQUFBLENBQUksT0FBSSxnQkFBYSxvQkFBZ0IsT0FBRyxFQUFHLGdDQUNZO2FBQXpEO0tBQUE7V0FFRTtLQUFILE1BQUksYUFBWSxFQUFDO1lBQ2QsQ0FBQSxDQUFLLE9BQUksZ0JBQWEsb0JBQWdCLE9BQUcsRUFBRyxnQ0FDWTthQUExRDtLQUFBIiwiZmlsZSI6ImF0L1NlcS9EZXF1ZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
