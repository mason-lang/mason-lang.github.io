"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../js","./../../Type/Kind","./../at","./../at-Type","./Seq"],(exports,js_0,Kind_1,_64_2,_64_45Type_3,Seq_4)=>{
	exports._get=_ms.lazy(()=>{
		let _$1=_ms.getModule(js_0),id_61_63=_ms.get(_$1,"id=?"),_$2=_ms.getModule(Kind_1),self_45kind_33=_ms.get(_$2,"self-kind!"),_64=_ms.getDefaultExport(_64_2),_$3=_ms.getModule(_64_2),_43_43=_ms.get(_$3,"++"),empty_63=_ms.get(_$3,"empty?"),iterator=_ms.get(_$3,"iterator"),_64_45Type=_ms.getDefaultExport(_64_45Type_3),_$4=_ms.getModule(_64_45Type_3),empty=_ms.get(_$4,"empty"),from_45stream=_ms.get(_$4,"from-stream"),Seq=_ms.getDefaultExport(Seq_4),_$5=_ms.getModule(Seq_4),_60_43_43_126=_ms.get(_$5,"<++~"),_64tail=_ms.get(_$5,"@tail");
		let LList=exports.default=(()=>{
			let _=class LList{
				static [_ms.symbol(empty)](){
					let _this=this;
					return empty_45LList
				}
				static [_ms.symbol(from_45stream)](_){
					let _this=this;
					return _60_43_43_126(empty_45LList,_)
				}
				constructor(head,tail){
					let _this=this;
					_ms.newProperty(this,"head",head);
					_ms.newProperty(this,"tail",tail)
				}
				*[_ms.symbol(iterator)](){
					let _this=this;
					let cur=_this;
					for(;;){
						if(empty_63(cur)){
							break
						};
						(yield cur.head);
						cur=cur.tail
					}
				}
				[_ms.symbol(empty_63)](){
					let _this=this;
					return id_61_63(_this,empty_45LList)
				}
				[_ms.symbol(_64tail)](){
					let _this=this;
					return _this.tail
				}
				[_ms.symbol(_60_43_43_126)](left_45added){
					let _this=this;
					_ms.checkContains(_64,left_45added,"left-added");
					let iter=iterator(left_45added);
					let f=function f(){
						let _$0=iter.next(),value=_$0.value,done=_$0.done;
						return (done?_this:new (LList)(value,f()))
					};
					return f()
				}
				[_ms.symbol(_43_43)](other){
					let _this=this;
					return (()=>{
						let _=other;
						if(_ms.contains(LList,_)){
							return _60_43_43_126(other,_this)
						} else {
							return _43_43.default.call(_this,other)
						}
					})()
				}
			};
			_ms.kindDo(_,Seq);
			self_45kind_33(_,_64_45Type);
			return _
		})();
		let empty_45LList=new (LList)(void 0,void 0);
		Object.defineProperty(empty_45LList,"tail",(()=>{
			let built={};
			let value=built.value=empty_45LList;
			return built
		})());
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9TZXEvTExpc3QubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFPQSwwQkFBYSxLQUlWOzt1QkFHRDtTQWlDYTtZQWhDWjtJQUFBO3VCQUNELGdCQUFjO1NBK0JEO1lBOUJaLGNBQUssY0FBYTtJQUFBO0lBRVYsWUFBQSxLQUFNO1NBNEJGOzs7O2lCQXpCZDtTQXlCYztLQXhCYixRQXdCYTtLQXRCVixPQUFBO01BQUMsR0FBQSxTQUFPLEtBQ0c7T0FBWjtNQUFBO2FBQ0s7VUFDQzs7O2dCQUVUO1NBaUJjO1lBaEJiLFNBZ0JhLE1BaEJIO0lBQUE7Z0JBRVg7U0FjYztZQUFBOztnQkFYZCxnQkFBTTtTQVdRO3VCQVhHO0tBQ2hCLFNBQU8sU0FBUztLQUNoQixNQUNLO01BQUosUUFBYTthQUNSLENBQUEsS0FPTyxNQVBHLEtBQUksT0FBTSxNQUFNO0tBQUE7WUFDaEM7SUFBQTtnQkFFRCxTQUFJO1NBSVU7WUFGUjtNQUFBLE1BQUE7TUFDSixnQkFBQyxNQUFELEdBQ007Y0FBTCxjQUFLLE1BQU07TUFBQSxPQUVSO2NBQUgsb0JBRlcsTUFFVTtNQUFBO0tBQUE7SUFBQTtHQUFBO2dCQTFDUDtHQUloQixlQUFZLEVBQUM7OztFQXdDZixrQkFBYyxLQUFJLE9BQU0sT0FBVTtFQUNsQyxzQkFBc0IsY0FBYSxPQUNJLEtBQUE7O0dBQXRDLHNCQUFPIiwiZmlsZSI6ImF0L1NlcS9MTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
