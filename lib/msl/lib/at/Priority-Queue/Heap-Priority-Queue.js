"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../compare","./../../math/Number","./../at","./Priority-Queue"],(exports,compare_0,Number_1,_64_2,Priority_45Queue_3)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(compare_0),lt_63=_ms.get(_$0,"lt?"),_$1=_ms.getModule(Number_1),int_47=_ms.get(_$1,"int/"),_$2=_ms.getModule(_64_2),_43_43_33=_ms.get(_$2,"++!"),count=_ms.get(_$2,"count"),empty_33=_ms.get(_$2,"empty!"),empty_63=_ms.get(_$2,"empty?"),iterator=_ms.get(_$2,"iterator"),Priority_45Queue=_ms.getDefaultExport(Priority_45Queue_3),_$3=_ms.getModule(Priority_45Queue_3),_63pop_33=_ms.get(_$3,"?pop!");
		let Heap_45Priority_45Queue=exports.default=(()=>{
			let _=class Heap_45Priority_45Queue{
				constructor(){
					let _this=this;
					_this.array=[]
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
			_ms.traitDo(_,Priority_45Queue);
			return _
		})();
		let index_45left_45child=_=>(1+(2*_));
		let index_45parent=_=>(int_47((1+_),2)-1);
		let add_33=function add_33(heap,val){
			heap.push();
			let i_45cur=count(heap);
			for(;;){
				if(_ms.eq(i_45cur,0)){
					_ms.setSub(heap,0,val);
					break
				};
				let i_45parent=index_45parent(i_45cur);
				let parent=_ms.sub(heap,i_45parent);
				if(! (val<parent)){
					_ms.setSub(heap,i_45cur,val);
					break
				};
				_ms.setSub(heap,i_45cur,parent);
				i_45cur=i_45parent
			}
		};
		let fix_45down_33=function fix_45down_33(heap){
			let val=heap.pop();
			let size=count(heap);
			if(! _ms.eq(size,0)){
				let i_45cur=0;
				let go_33=function go_33(goto_45idx){
					_ms.setSub(heap,i_45cur,_ms.sub(heap,goto_45idx));
					i_45cur=goto_45idx
				};
				let ok_45index_63=_=>lt_63(_,size);
				for(;;){
					let i_45left_45child=index_45left_45child(i_45cur);
					if(! ok_45index_63(i_45left_45child)){
						break
					};
					let left=_ms.sub(heap,i_45left_45child);
					let i_45right_45child=(i_45left_45child+1);
					if(! ok_45index_63(i_45right_45child)){
						if(lt_63(left,val)){
							go_33(i_45left_45child)
						};
						break
					};
					let right=_ms.sub(heap,i_45right_45child);
					if(lt_63(left,val)){
						go_33((lt_63(right,left)?i_45right_45child:i_45left_45child))
					} else if(lt_63(right,val)){
						go_33(i_45right_45child)
					} else {
						break
					}
				};
				_ms.setSub(heap,i_45cur,val)
			}
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9Qcmlvcml0eS1RdWV1ZS9IZWFwLVByaW9yaXR5LVF1ZXVlLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBTUEsNENBQTJCOztJQUlqQixhQUFBOztLQUFSLFlBQVU7SUFBQTtJQUVYLFlBQUMsWUFDVzs7WUFBWCxTQUFTOztJQUVWLFlBQUMsWUFBTyxNQUNLOztLQUFSLFFBQUEsS0FBQSxNQUNLO01BQVIsT0FBSyxZQUFPO0tBQUE7SUFBQTtJQUVkLFlBQUMsYUFDUTs7WUFBRCxDQUFBLFNBQU8sOEJBQ0k7YUFBWixLQUNTO3FCQURULFlBQU87T0FDWCxjQUFVOzs7OztJQUViLFlBQUMsWUFDUzs7WUFBVCxTQUFPOztJQUVSLFlBQUMsWUFDVTs7S0FBVixTQUFPOzs7aUJBdEJ3Qjs7O0VBMkJoQyw0QkFBcUIsQ0FBRSxFQUFFLENBQUUsRUFBRTtFQUM3QixzQkFBaUIsQ0FBRyxPQUFNLENBQUUsRUFBRSxHQUFHLEdBQUc7RUFFcEMsV0FBUyxnQkFBQSxLQUFLLElBQ0c7R0FFaEI7R0FDQSxZQUFRLE1BQU07R0FFWCxPQUFBO0lBQUMsVUFBRyxRQUFNLEdBQ0M7Z0JBQVosS0FBSyxFQUFNO0tBQ1g7SUFBQTtJQUNELGVBQVcsZUFBYTtJQUN4QixtQkFBUyxLQUFLO0lBQ1AsS0FBQSxDQUFHLElBQUksUUFDTTtnQkFBbkIsS0FBSyxRQUFVO0tBQ2Y7SUFBQTtlQUNELEtBQUssUUFBVTtZQUNOO0dBQUE7RUFBQTtFQUVYLGtCQUFjLHVCQUFBLEtBQ0k7R0FBakIsUUFBTTtHQUNOLFNBQU8sTUFBTTtHQUNOLFlBQUcsS0FBSyxHQUNDO0lBSWYsWUFBUTtJQUNSLFVBQVEsZUFBQSxXQUNRO2dCQUFmLEtBQUssZ0JBQVUsS0FBSzthQUNYO0lBQUE7SUFDVixxQkFBYyxNQUFJLEVBQUU7SUFFakIsT0FBQTtLQUFGLHFCQUFlLHFCQUFpQjtLQUN6QixLQUFBLGNBQVUsa0JBQ1k7TUFBNUI7S0FBQTtLQUNELGlCQUFPLEtBQUs7S0FDWixzQkFBZ0IsQ0FBRSxpQkFBYTtLQUN4QixLQUFBLGNBQVUsbUJBQ2E7TUFBMUIsR0FBQSxNQUFJLEtBQUssS0FDRztPQUFkLE1BQUk7TUFBQTtNQUNMO0tBQUE7S0FDRCxrQkFBUSxLQUFLO0tBRVQsR0FBSCxNQUFJLEtBQUssS0FDRztNQUFYLE1BQVMsQ0FBQyxNQUFJLE1BQU0sTUFBTSxrQkFBYztLQUFBLE9BQ3pDLEdBQUEsTUFBSSxNQUFNLEtBQ0c7TUFBWixNQUFJO0tBQUEsT0FFRDtNQUFIO0tBQUE7SUFBQTtlQUNILEtBQUssUUFBVTtHQUFBO0VBQUEiLCJmaWxlIjoiYXQvUHJpb3JpdHktUXVldWUvSGVhcC1Qcmlvcml0eS1RdWV1ZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
