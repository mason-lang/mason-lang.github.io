"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../math/Number","./../private/bootstrap","./../Type/primitive","./at","./Seq/Seq"],(exports,Number_0,bootstrap_1,primitive_2,_64_3,Seq_4)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(Number_0),Nat=_ms.get(_$0,"Nat"),_$1=_ms.getModule(bootstrap_1),msDef=_ms.get(_$1,"msDef"),_$2=_ms.getModule(primitive_2),Num=_ms.get(_$2,"Num"),_64=_ms.getDefaultExport(_64_3),_$3=_ms.getModule(_64_3),count=_ms.get(_$3,"count"),empty=_ms.get(_$3,"empty"),from_45stream=_ms.get(_$3,"from-stream"),iterator=_ms.get(_$3,"iterator"),_$4=_ms.getModule(Seq_4),_63nth=_ms.get(_$4,"?nth"),_64reverse=_ms.get(_$4,"@reverse");
		let Range=exports.default=(()=>{
			let _=class Range{
				static [_ms.symbol(empty)](){
					let _this=this;
					return _ms.range(0,0,true)
				}
				static [_ms.symbol(from_45stream)](_){
					let _this=this;
					return _
				}
				constructor(start,end,step){
					this.start=_ms.checkInstance(Num,start,"start");
					this.end=_ms.checkInstance(Num,end,"end");
					this.step=_ms.checkInstance(Num,step,"step");
					Object.freeze(this)
				}
				by(step){
					let _this=this;
					return new (Range)(_this.start,_this.end,step)
				}
				get length(){
					let _this=this;
					return (_this.end-_this.start)
				}
				*[_ms.symbol(iterator)](){
					let _this=this;
					let cur=_this.start;
					for(;;){
						let break_45cond=(yield* function*(){
							if((0<_this.step)){
								return (cur>=_this.end)
							} else {
								return (cur<=_this.end)
							}
						}());
						if(break_45cond){
							break
						};
						(yield cur);
						cur=(cur+_this.step)
					}
				}
				[_ms.symbol(_63nth)](n){
					let _this=this;
					_ms.checkInstance(Nat,n,"n");
					let it=(_this.start+(_this.step*n));
					return ((it<_this.end)?_ms.some((()=>{
						return it
					})()):_ms.None)
				}
				[_ms.symbol(count)](){
					let _this=this;
					return Math.floor((_this.length/_this.step))
				}
				[_ms.symbol(_64reverse)](){
					let _this=this;
					let new_45step=- _this.step;
					let rem=((_this.end-_this.start)%_this.step);
					return (()=>{
						switch(rem){
							case 0:{
								return new (Range)((_this.end-_this.step),(_this.start-_this.step),new_45step)
							}
							default:return new (Range)((_this.end-rem),_this.start,new_45step)
						}
					})()
				}
			};
			_ms.beRecord(_,["start","end","step"]);
			_ms.traitDo(_,_64);
			return _
		})();
		msDef("range",(start,end,exclusive_63)=>{
			if(! exclusive_63){
				end=(end+Math.sign((end-start)))
			};
			let step=Math.sign((end-start));
			return new (Range)(start,end,step)
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9SYW5nZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQU9BLDBCQUFhOztJQUtYLG1CQUFDLFNBQ1E7O3NCQUFSLEVBQUk7O0lBRUwsbUJBQUMsZ0JBQWMsRUFDQzs7WUFHZjtJQUFBOztrQ0FaZ0I7Z0NBQVE7aUNBQVM7OztPQWUvQixLQUNJOztZQUFQLEtBQUksT0FBTSxZQUFPLFVBQUs7SUFBQTtJQUV2QixZQUNVOztZQUFULENBQUUsVUFBSzs7SUFFUixhQUFDLFlBQ2E7O0tBQWIsUUFBTTtLQUVILE9BQUE7TUFBRixpQkFDaUI7T0FBaEIsR0FBQSxDQUFHLEVBQUUsWUFDSztlQUFULENBQUksS0FBSTtjQUVMO2VBQUgsQ0FBSSxLQUFJOzs7TUFDUCxHQUFBLGFBQ1U7T0FBWjtNQUFBO2FBRUs7VUFDQyxDQUFFLElBQUk7OztJQUlmLFlBQUMsU0FBTyxFQUNLOzt1QkFESDtLQUVULE9BQUssQ0FBRSxZQUFPLENBQUUsV0FBTTtZQUNuQixDQUFBLENBQUcsR0FBRyx5QkFDSTthQUFaO0tBQUE7O0lBRUYsWUFBQyxTQUNROztZQUFSLFdBQVcsQ0FBRSxhQUFROztJQUV0QixZQUFDLGNBQ1c7O0tBQVgsZUFBVyxFQUFJO0tBQ2YsUUFBTSxDQUFHLENBQUUsVUFBSyxhQUFRO1lBQ2pCO2FBQUE7T0FDTixLQUFBLEVBQ0M7ZUFBQSxLQUFJLE9BQU8sQ0FBRSxVQUFLLFlBQVEsQ0FBRSxZQUFPLFlBQU87T0FBQTtPQUV2QyxlQUFILEtBQUksT0FBTyxDQUFFLFVBQUssS0FBSyxZQUFPO01BQUE7S0FBQTtJQUFBO0dBQUE7O2lCQXJEWTs7O0VBdUQ5QyxNQUFPLFFBQU8sQ0FBQSxNQUFNLElBQUksZUFDVTtHQUExQixLQUFBLGFBQ1U7UUFBVCxDQUFFLElBQUssVUFBVSxDQUFFLElBQUk7R0FBQTtHQUMvQixTQUFPLFVBQVUsQ0FBRSxJQUFJO1VBQ3ZCLEtBQUksT0FBTSxNQUFNLElBQUk7RUFBQSIsImZpbGUiOiJhdC9SYW5nZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
