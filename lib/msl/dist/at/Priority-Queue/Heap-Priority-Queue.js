"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../compare","./../../math/Number","./../../math/methods","./../../Type/Kind","./../at","./../at-Type","./Priority-Queue"],(exports,compare_0,Number_1,methods_2,Kind_3,_64_4,_64_45Type_5,Priority_45Queue_6)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_60_63=_ms.get(_$0,"<?"),_$1=_ms.getModule(Number_1),int_47=_ms.get(_$1,"int/"),_$2=_ms.getModule(methods_2),_43=_ms.get(_$2,"+"),_45=_ms.get(_$2,"-"),_42=_ms.get(_$2,"*"),_$3=_ms.getModule(Kind_3),self_45kind_33=_ms.get(_$3,"self-kind!"),_$4=_ms.getModule(_64_4),_43_43_33=_ms.get(_$4,"++!"),count=_ms.get(_$4,"count"),empty_33=_ms.get(_$4,"empty!"),empty_63=_ms.get(_$4,"empty?"),iterator=_ms.get(_$4,"iterator"),_64_45Type=_ms.getDefaultExport(_64_45Type_5),_$5=_ms.getModule(_64_45Type_5),empty=_ms.get(_$5,"empty"),Priority_45Queue=_ms.getDefaultExport(Priority_45Queue_6),_$6=_ms.getModule(Priority_45Queue_6),_63pop_33=_ms.get(_$6,"?pop!");
		let Heap_45Priority_45Queue=exports.default=(()=>{
			let _=class Heap_45Priority_45Queue{
				static [_ms.symbol(empty)](){
					let _this=this;
					return new (_this)()
				}
				constructor(){
					let _this=this;
					_ms.newProperty(_this,"array",[])
				}
				[_ms.symbol(iterator)](){
					let _this=this;
					return iterator(_this.array)
				}
				[_ms.symbol(_43_43_33)](added){
					let _this=this;
					for(let _ of added){
						add_33(_this.array,_)
					}
				}
				[_ms.symbol(_63pop_33)](){
					let _this=this;
					return (empty_63(_this)?_ms.None:_ms.some((()=>{
						return (()=>{
							let _=_ms.sub(_this.array,0);
							fix_45down_33(_this.array);
							return _
						})()
					})()))
				}
				[_ms.symbol(empty_63)](){
					let _this=this;
					return empty_63(_this.array)
				}
				[_ms.symbol(empty_33)](){
					let _this=this;
					empty_33(_this.array)
				}
			};
			_ms.kindDo(_,Priority_45Queue);
			self_45kind_33(_,_64_45Type);
			return _
		})();
		let index_45left_45child=_=>_43(1,_42(2,_));
		let index_45parent=_=>_45(int_47(_43(1,_),2),1);
		let add_33=function add_33(heap,val){
			heap.push();
			let i_45cur=count(heap);
			for(;;){
				if(_61_63(i_45cur,0)){
					_ms.setSub(heap,0,val,"mutate");
					break
				};
				let i_45parent=index_45parent(i_45cur);
				let parent=_ms.sub(heap,i_45parent);
				if(! _60_63(val,parent)){
					_ms.setSub(heap,i_45cur,val,"mutate");
					break
				};
				_ms.setSub(heap,i_45cur,parent,"mutate");
				i_45cur=i_45parent
			}
		};
		let fix_45down_33=function fix_45down_33(heap){
			let val=heap.pop();
			let size=count(heap);
			if(! _61_63(size,0)){
				let i_45cur=0;
				let go_33=function go_33(goto_45idx){
					_ms.setSub(heap,i_45cur,_ms.sub(heap,goto_45idx),"mutate");
					i_45cur=goto_45idx
				};
				let ok_45index_63=_=>_60_63(_,size);
				for(;;){
					let i_45left_45child=index_45left_45child(i_45cur);
					if(! ok_45index_63(i_45left_45child)){
						break
					};
					let left=_ms.sub(heap,i_45left_45child);
					let i_45right_45child=_43(i_45left_45child,1);
					if(! ok_45index_63(i_45right_45child)){
						if(_60_63(left,val)){
							go_33(i_45left_45child)
						};
						break
					};
					let right=_ms.sub(heap,i_45right_45child);
					if(_60_63(left,val)){
						go_33((_60_63(right,left)?i_45right_45child:i_45left_45child))
					} else if(_60_63(right,val)){
						go_33(i_45right_45child)
					} else {
						break
					}
				};
				_ms.setSub(heap,i_45cur,val,"mutate")
			}
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9Qcmlvcml0eS1RdWV1ZS9IZWFwLVByaW9yaXR5LVF1ZXVlLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBU0EsNENBQTJCLEtBSXhCOzt1QkFJRDtTQXNCTztZQXJCTixLQXFCTTtJQUFBO0lBbEJDO1NBa0JEO3FCQUFBLGNBbEJFO0lBQUE7Z0JBRVY7U0FnQlE7WUFmUCxTQWVPOztnQkFiUixZQUFNO1NBYUU7S0FaSCxRQUFBLEtBQUEsTUFDSztNQUFSLE9BV00sWUFYTztLQUFBO0lBQUE7Z0JBRWY7U0FTUTtZQVJBLENBQUEsU0FRQSw4QkFQVzthQUFaLEtBQ1M7cUJBTVIsWUFQTTtPQUNYLGNBTUs7Ozs7O2dCQUpSO1NBSVE7WUFIUCxTQUdPOztnQkFEUjtTQUNRO0tBQVAsU0FBTzs7O2dCQTlCdUI7R0FJOUIsZUFBWSxFQUFDOzs7RUErQmQsNEJBQXFCLElBQUUsRUFBRyxJQUFFLEVBQUc7RUFDL0Isc0JBQWlCLElBQUcsT0FBTSxJQUFFLEVBQUcsR0FBRSxHQUFHO0VBRXBDLFdBQVMsZ0JBQUEsS0FBSztHQUdiO0dBQ0EsWUFBUSxNQUFNO0dBRVgsT0FBQTtJQUFDLEdBQUEsT0FBRyxRQUFNLEdBQ0M7Z0JBQVosS0FBSyxFQUFNO0tBQ1g7SUFBQTtJQUNELGVBQVcsZUFBYTtJQUN4QixtQkFBUyxLQUFLO0lBQ1AsS0FBQSxPQUFHLElBQUksUUFDTTtnQkFBbkIsS0FBSyxRQUFVO0tBQ2Y7SUFBQTtlQUNELEtBQUssUUFBVTtZQUNOO0dBQUE7RUFBQTtFQUVYLGtCQUFjLHVCQUFBO0dBQ2IsUUFBTTtHQUNOLFNBQU8sTUFBTTtHQUNOLEtBQUEsT0FBRyxLQUFLLEdBQ0M7SUFJZixZQUFRO0lBQ1IsVUFBUSxlQUFBO2dCQUNQLEtBQUssZ0JBQVUsS0FBSzthQUNYO0lBQUE7SUFDVixxQkFBYyxPQUFJLEVBQUM7SUFFaEIsT0FBQTtLQUFGLHFCQUFlLHFCQUFpQjtLQUN6QixLQUFBLGNBQVUsa0JBQ1k7TUFBNUI7S0FBQTtLQUNELGlCQUFPLEtBQUs7S0FDWixzQkFBZ0IsSUFBRSxpQkFBYTtLQUN4QixLQUFBLGNBQVUsbUJBQ2E7TUFBMUIsR0FBQSxPQUFHLEtBQUssS0FDRztPQUFiLE1BQUk7TUFBQTtNQUNMO0tBQUE7S0FDRCxrQkFBUSxLQUFLO0tBRVQsR0FBSCxPQUFHLEtBQUssS0FDRztNQUFWLE1BQVMsQ0FBQyxPQUFHLE1BQU0sTUFBTSxrQkFBYztLQUFBLE9BQ3hDLEdBQUEsT0FBRyxNQUFNLEtBQ0c7TUFBWCxNQUFJO0tBQUEsT0FFRDtNQUFIO0tBQUE7SUFBQTtlQUNILEtBQUssUUFBVSIsImZpbGUiOiJhdC9Qcmlvcml0eS1RdWV1ZS9IZWFwLVByaW9yaXR5LVF1ZXVlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
