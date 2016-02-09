"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../polys","./../../Type/primitive","./../../Type/Type","./../at","./../Set/Set","./Seq","./../../math/Number"],(exports,polys_0,primitive_1,Type_2,_64_3,Set_4,Seq_5,Number_6)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(polys_0),set_45sub_33=_ms.get(_$0,"set-sub!"),_$1=_ms.getModule(primitive_1),Num=_ms.get(_$1,"Num"),_$2=_ms.getModule(Type_2),_61_62=_ms.get(_$2,"=>"),_64=_ms.getDefaultExport(_64_3),_$3=_ms.getModule(_64_3),_45_33=_ms.get(_$3,"-!"),_45_45_33=_ms.get(_$3,"--!"),count=_ms.get(_$3,"count"),each_33=_ms.get(_$3,"each!"),empty_33=_ms.get(_$3,"empty!"),empty_63=_ms.get(_$3,"empty?"),from_45stream=_ms.get(_$3,"from-stream"),Set=_ms.getDefaultExport(Set_4),Seq=_ms.getDefaultExport(Seq_5),_$4=_ms.getModule(Seq_5),_60_43_43_33=_ms.get(_$4,"<++!"),_43_43_62_33=_ms.get(_$4,"++>!"),_64indexes=_ms.get(_$4,"@indexes"),_63nth=_ms.get(_$4,"?nth"),_63_60pop_33=_ms.get(_$4,"?<pop!"),_63pop_62_33=_ms.get(_$4,"?pop>!"),_$5=_ms.lazyGetModule(Number_6),Nat=_ms.lazyProp(_$5,"Nat");
		_ms.traitWithDefs(Array,Seq,{
			[_ms.symbol(from_45stream)](stream){
				let _this=this;
				return (()=>{
					let _=[];
					each_33(stream,_ms.methodBound(_,"push"));
					return _
				})()
			}
		},{
			[_ms.symbol(count)](){
				let _this=this;
				return _this.length
			},
			[_ms.symbol(_63nth)](n){
				let _this=this;
				return ((n<count(_this))?_ms.some((()=>{
					return _this[n]
				})()):_ms.None)
			},
			[_ms.symbol(_60_43_43_33)](added){
				let _this=this;
				_ms.checkInstance(_64,added,"added");
				return _this.unshift(...added)
			},
			[_ms.symbol(_43_43_62_33)](added){
				let _this=this;
				_ms.checkInstance(_64,added,"added");
				return _this.push(...added)
			},
			[_ms.symbol(_63_60pop_33)](){
				let _this=this;
				return (empty_63(_this)?_ms.None:_ms.some((()=>{
					return _this.shift()
				})()))
			},
			[_ms.symbol(_63pop_62_33)](){
				let _this=this;
				return (empty_63(_this)?_ms.None:_ms.some((()=>{
					return _this.pop()
				})()))
			},
			[_ms.symbol(empty_33)](){
				let _this=this;
				for(;;){
					if(! _this.length){
						break
					};
					_this.pop()
				}
			},
			[_ms.symbol(set_45sub_33)](n,val){
				let _this=this;
				_ms.checkInstance(_ms.unlazy(Nat),n,"n");
				_this[n]=val
			},
			[_ms.symbol(_45_33)](em){
				let _this=this;
				for(let _ of _64indexes(_this)){
					if(_ms.eq(_ms.sub(_this,_),em)){
						_this.splice(_,1);
						break
					}
				}
			},
			[_ms.symbol(_45_45_33)](_64deleted){
				let _this=this;
				_64deleted=_61_62(Set,_64deleted);
				filter_33(_this,em=>{
					return (()=>{
						let _=_ms.hasInstance(_64deleted,em);
						if(_){
							_45_45_33(_64deleted,[em])
						};
						return _
					})()
				})
			}
		});
		let filter_33=exports["filter!"]=function filter_33(arr,keep_45if_63){
			let read_45idx=0;
			let write_45idx=0;
			for(;;){
				if((arr.length<=read_45idx)){
					break
				};
				let here=_ms.sub(arr,read_45idx);
				if(keep_45if_63(here)){
					_ms.setSub(arr,write_45idx,here);
					write_45idx=(1+write_45idx)
				};
				read_45idx=(1+read_45idx)
			};
			arr.length=write_45idx
		};
		let fill=exports.fill=function fill(count,filler){
			_ms.checkInstance(Num,count,"count");
			_ms.checkInstance(Function,filler,"filler");
			return (()=>{
				let _=new (Array)(count);
				for(let i of _64indexes(_)){
					_ms.setSub(_,i,filler(i))
				};
				return _
			})()
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9TZXEvQXJyYXkubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7b0JBWU8sTUFBTTtHQUdYLFlBQUMsZ0JBQWMsT0FDTTs7V0FBZixLQUNFO1dBREY7S0FDSixRQUFNLHVCQUFPOzs7OztHQUVoQixZQUFDLFNBQ1E7O1dBQVI7O0dBRUQsWUFBQyxTQUFPLEVBQ0M7O1dBQUwsQ0FBQSxDQUFHLEVBQUcsTUFBTSxzQkFDSztZQUFuQixNQUFNO0lBQUE7O0dBRVIsWUFBQyxlQUFPLE1BQ087O3NCQUREO1dBQ2IsaUJBQVk7R0FBQTtHQUViLFlBQUMsZUFBTyxNQUNPOztzQkFERDtXQUNiLGNBQVM7R0FBQTtHQUVWLFlBQUMsZ0JBQ1M7O1dBQUYsQ0FBQSxTQUFPLDhCQUNJO1lBQWpCOzs7R0FFRixZQUFDLGdCQUNTOztXQUFGLENBQUEsU0FBTyw4QkFDSTtZQUFqQjs7O0dBRUYsWUFBQyxZQUNVOztJQUlQLE9BQUE7S0FBSyxLQUFBLGFBQ087TUFBYjtLQUFBO0tBQ0Q7OztHQUVGLFlBQUMsZUFBWSxFQUFNLElBQ0c7OztJQUFyQixNQUFNLEdBQU07R0FBQTtHQUViLFlBQUMsU0FBTSxHQUNFOztJQUFKLFFBQUEsS0FBQSxXQUFTLE9BQ0k7S0FBYixrQkFBRyxNQUFLLEdBQUcsSUFDRTtNQUFmLGFBQVEsRUFBRTtNQUNWO0tBQUE7SUFBQTtHQUFBO0dBRUgsWUFBQyxZQUFPLFdBQ1E7O2VBQUgsT0FBRyxJQUFJO0lBQ25CLFVBQVEsTUFBTSxJQUNFO1lBQVYsS0FDVzs0QkFEUixXQUFIO01BQ0QsR0FBQSxFQUNDO09BQ0gsVUFBSSxXQUFTLENBQUM7TUFBQTs7Ozs7O0VBR25CLGlDQUFXLG1CQUFBLElBQUksYUFDUTtHQUF0QixlQUFXO0dBQ1gsZ0JBQVk7R0FHVCxPQUFBO0lBQUMsR0FBQSxDQUFJLFlBQVcsWUFDUTtLQUF6QjtJQUFBO0lBRUQsaUJBQU8sSUFBSTtJQUNSLEdBQUEsYUFBUyxNQUNJO2dCQUFmLElBQUksWUFBYztpQkFDTCxDQUFFLEVBQUU7SUFBQTtlQUVOLENBQUUsRUFBRTtHQUFBO0dBRWpCLFdBQWM7RUFBQTtFQUdmLHNCQUFPLGNBQUEsTUFBVSxPQUNlO3FCQURuQjtxQkFBVztVQUVsQixLQUNlO1VBRGYsS0FBSSxPQUFNO0lBQ1YsUUFBQSxLQUFLLFdBQVMsR0FDQTtnQkFBakIsRUFBRSxFQUFNLE9BQU87SUFBQSIsImZpbGUiOiJhdC9TZXEvQXJyYXkuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
