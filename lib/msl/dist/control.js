"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./js","./Type/Pred-Type","./at/Seq/Seq"],(exports,js_0,Pred_45Type_1,Seq_2)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(js_0),defined_63=_ms.get(_$0,"defined?"),id_61_63=_ms.get(_$0,"id=?"),js_45=_ms.get(_$0,"js-"),js_60_61=_ms.get(_$0,"js<="),_$1=_ms.getModule(Pred_45Type_1),Opt=_ms.get(_$1,"Opt"),_$2=_ms.lazyGetModule(Seq_2),_43_43_62_33=_ms.lazyProp(_$2,"++>!");
		let do_45times_33=exports["do-times!"]=function do_45times_33(n_45times,action){
			_ms.assert(js_60_61,0,n_45times);
			for(;;){
				if(id_61_63(n_45times,0)){
					break
				};
				action();
				n_45times=js_45(n_45times,1)
			}
		};
		let opr=exports.opr=function opr(_,_default){
			_ms.checkContains(Opt,_,"_");
			return (defined_63(_)?_:_ms.unlazy(_default))
		};
		let build=exports.build=function build(calls_45build){
			_ms.checkContains(Function,calls_45build,"calls-build");
			return (()=>{
				let arr=[];
				calls_45build(_=>{
					_ms.unlazy(_43_43_62_33)(arr,[_])
				});
				return arr
			})()
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvY29udHJvbC5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQU9BLHVDQUFhLHVCQUFBLFVBQVE7Y0FHYixTQUFLLEVBQUU7R0FFWCxPQUFBO0lBQUMsR0FBQSxTQUFLLFVBQVEsR0FDQztLQUFoQjtJQUFBO0lBQ0Q7Y0FDVyxNQUFJLFVBQVE7R0FBQTtFQUFBO0VBRXpCLG9CQUFNLGFBQUEsRUFBTTtxQkFBSjtVQUVGLENBQUEsV0FBUyxHQUFFOztFQUdqQix3QkFBUSxlQUFBO3FCQUFZO1VBR2QsS0FDUztZQURUO0lBQ0osY0FBZTs4QkFDVCxJQUFJLENBQUU7SUFBQSIsImZpbGUiOiJjb250cm9sLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
