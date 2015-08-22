"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports"],exports=>{
	exports._get=_ms.lazy(()=>{
		let $sleep=exports.$sleep=function $sleep(time_45ms){
			_ms.checkContains(Number,time_45ms,"time-ms");
			return new (Promise)(resolve=>{
				setTimeout(resolve,time_45ms)
			})
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvaW8vdGltZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0VBR0EsMEJBQVMsZ0JBQUE7cUJBQVE7VUFDaEIsS0FBSSxTQUFVO0lBQ2IsV0FBVyxRQUFRO0dBQUE7RUFBQSIsImZpbGUiOiJpby90aW1lLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
