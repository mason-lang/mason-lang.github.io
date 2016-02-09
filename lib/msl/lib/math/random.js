"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./Number"],(exports,Number_0)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(Number_0),Int=_ms.get(_$0,"Int");
		let random_45int_45upto=exports["random-int-upto"]=function random_45int_45upto(max){
			_ms.checkInstance(Int,max,"max");
			return Math.floor((Math.random()*max))
		};
		let random_45int=exports["random-int"]=function random_45int(min,max){
			_ms.checkInstance(Int,min,"min");
			_ms.checkInstance(Int,max,"max");
			let diff=(max-min);
			let random_45diff=random_45int_45upto(diff);
			return (min+random_45diff)
		};
		let random_45bool=exports["random-bool"]=function random_45bool(){
			return (Math.random()<0.5)
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvbWF0aC9yYW5kb20ubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFHQSxtREFBa0IsNkJBQUEsSUFDTztxQkFESDtVQUNyQixXQUFXLENBQUUsY0FBYztFQUFBO0VBRTVCLHVDQUFhLHNCQUFBLElBQVEsSUFDTztxQkFEWDtxQkFBUTtHQUN4QixTQUFPLENBQUUsSUFBSTtHQUNiLGtCQUFjLG9CQUFnQjtVQUM5QixDQUFFLElBQUk7RUFBQTtFQUVQLHlDQUNjLHdCQUFBO1VBQWIsQ0FBRyxjQUFjO0VBQUEiLCJmaWxlIjoibWF0aC9yYW5kb20uanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
