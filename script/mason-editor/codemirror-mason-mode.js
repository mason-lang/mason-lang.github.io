"use strict";
define(["exports","msl/private/boot","codemirror/lib/codemirror","mason-compile/info","msl/Type/Method","msl/compare","msl/at/Set/Id-Set"],(exports,_boot,codemirror_0,info_1,Method_2,compare_3,Id_45Set_4)=>{
	_ms.getModule(_boot);
	let codemirror=_ms.getDefaultExport(codemirror_0),_$1=_ms.getModule(info_1),keywords=_ms.get(_$1,"keywords"),Method=_ms.getDefaultExport(Method_2),_$2=_ms.getModule(Method_2),self_45impl_33=_ms.get(_$2,"self-impl!"),_$3=_ms.getModule(compare_3),_60_61_63=_ms.get(_$3,"<=?"),Id_45Set=_ms.getDefaultExport(Id_45Set_4);
	codemirror.defineMode("mason",()=>{
		let built={};
		let startState=built.startState=function startState(){
			let built={};
			let state=built.state=PlainState;
			return built
		};
		let token=built.token=function token(stream,state){
			stream.eatWhile(/\s/);
			let _$0=next_45token(state.state,stream),new_45state=_$0["new-state"],style=_$0.style;
			state.state=new_45state;
			return style
		};
		let lineComment=built.lineComment=`|\s`;
		return built
	});
	let next_45token=new (Method)((()=>{
		let built={};
		built.name="next-token";
		let args=built.args=["state","stream"];
		return built
	})());
	let styles=(()=>{
		let built={};
		let amp=built.amp="variable-3";
		let assign_45local=built["assign-local"]="atom";
		let brace=built.brace="keyword";
		let _comment=built.comment="comment";
		let focus_45call=built["focus-call"]="variable-2";
		let _function=built.function="def";
		let invalid=built.invalid="error";
		let keyword=built.keyword="keyword";
		let local=built.local=null;
		let member=built.member="comment";
		let number=built.number="number";
		let plain=built.plain=null;
		let ms_45region=built["ms-region"]="comment";
		let regexp=built.regexp="string";
		let string=built.string="string";
		built.type="atom";
		return built
	})();
	let Indented_45String_45State=class Indented_45String_45State{
		constructor(current_45indent){
			let _this=this;
			_ms.newProperty(_this,"indent",current_45indent)
		}
		[_ms.symbol(next_45token)](stream){
			let _this=this;
			return (()=>{
				if(_60_61_63(_this.indent,stream.indentation())){
					let built={};
					stream.skipToEnd();
					let new_45state=built["new-state"]=_this;
					let style=built.style=styles.string;
					return built
				} else {
					return next_45token(PlainState,stream)
				}
			})()
		}
	};
	let PlainState=new (Object)();
	self_45impl_33(next_45token,PlainState,function(stream){
		let _this=this;
		return (()=>{
			if(stream.match(/"$/)){
				let built={};
				let new_45state=built["new-state"]=new (Indented_45String_45State)(stream.indentation());
				let style=built.style=styles.string;
				return built
			} else {
				let built={};
				let new_45state=built["new-state"]=_this;
				let style=built.style=(()=>{
					let _=stream;
					if(_.match(/\|?\| /)){
						_.skipToEnd();
						return styles.comment
					} else if(_.match(/region/)){
						_.skipToEnd();
						return styles["ms-region"]
					} else if(_.match(/".*"/)){
						return styles.string
					} else if(_.match(/`.*`g?i?m?y?/)){
						return styles.regexp
					} else if(_.match(/'\S+/)){
						return styles.string
					} else if(_.match(/\S+\.\s/)){
						return styles["assign-local"]
					} else if(_.eat(/[\(\)\[\]\{\}]/)){
						return styles.brace
					} else if(_.match(/-?\d+(\.\d+)?/)){
						return styles.number
					} else if(_.match(/:\S+/)){
						return styles.type
					} else if(_.match(/\.?(\*|\$)?\!?\|.*/)){
						return styles.function
					} else if(_.eat(`~`)){
						return styles.lazy
					} else if(_.match(/\S+_/)){
						return styles["focus-call"]
					} else if(_.match(rgx_45id)){
						return (_ms.contains(keywords_45set,stream.current().trim())?styles.keyword:styles.local)
					} else if(_.eat(`.`)){
						return styles.member
					} else if(_.eat(`&`)){
						return styles.amp
					} else {
						stream.next();
						return styles.plain
					}
				})();
				return built
			}
		})()
	});
	let non_45id_45characters=/\s.:()\[\]"&/;
	let rgx_45id=_ms.regexp(["[^",non_45id_45characters,"]+"],"");
	let keywords_45set=new (Id_45Set)(keywords);
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFzb24tZWRpdG9yL2NvZGVtaXJyb3ItbWFzb24tbW9kZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0NBSUEsc0JBQXVCLFFBQ087O0VBRTdCLGdDQUNhOztHQUFaLHNCQUFPOzs7RUFDUixzQkFBUSxlQUFBLE9BQU87R0FDZCxnQkFBaUI7R0FDakIsUUFBa0IsYUFBVyxZQUFZO0dBQ3pDLFlBQWU7VUFDZjtFQUFBO0VBQ0Qsa0NBQWM7OztDQUVmLGlCQUFhLEtBQUksUUFDTSxLQUFBOzthQUF0QjtFQUNBLG9CQUFNLENBQUUsUUFBTzs7O0NBSWhCLFdBQ1EsS0FBQTs7RUFBUCxrQkFBTTtFQUNOLHlDQUFlO0VBQ2Ysc0JBQVE7RUFDUiwyQkFBVTtFQUNWLHFDQUFhO0VBQ2IsNkJBQVc7RUFDWCwwQkFBVTtFQUNWLDBCQUFVO0VBQ1Ysc0JBQU87RUFDUCx3QkFBUztFQUNULHdCQUFTO0VBQ1Qsc0JBQU87RUFDUCxtQ0FBWTtFQUNaLHdCQUFTO0VBQ1Qsd0JBQVM7YUFDRjs7O0NBRVIsOEJBQzZCO0VBQWxCLFlBQUE7T0FvQkc7bUJBQUEsZUFuQkY7RUFBQTtjQUVYLGVBQVk7T0FpQkM7VUFmUjtJQUFILEdBQUEsVUFlVyxhQWZDLHNCQUNvQjs7S0FBL0I7S0FDQSxtQ0FhVTtLQVpWLHNCQUFPOztXQUVKO1lBQUgsYUFBVyxXQUFXO0lBQUE7R0FBQTtFQUFBO0NBQUE7Q0FHMUIsZUFBYSxLQUFJO0NBQ2pCLGVBQVcsYUFBVyxXQUFhLFNBQUE7TUFNckI7U0FKVDtHQUFILEdBQUEsYUFBYyxNQUNHOztJQUFoQixtQ0FBVyxLQUFJLDJCQUFzQjtJQUNyQyxzQkFBTzs7VUFFSjs7SUFBSCxtQ0FBVztJQUNYLHNCQUFZO0tBQUEsTUFBQTtLQUNYLEdBQUMsUUFBUSxVQUNPO01BQWQ7YUFDRDtZQUNELEdBQUMsUUFBUSxVQUNPO01BQWQ7YUFDRDtZQUNELEdBQUMsUUFBUSxRQUNLO2FBQWI7WUFDRCxHQUFDLFFBQVEsZ0JBQ2U7YUFBdkI7WUFDRCxHQUFDLFFBQVEsUUFDSzthQUFiO1lBQ0QsR0FBQyxRQUFRLFdBQ1E7YUFBaEI7WUFDRCxHQUFDLE1BQU0sa0JBQ2U7YUFBckI7WUFDRCxHQUFDLFFBQVEsaUJBQ2M7YUFBdEI7WUFDRCxHQUFDLFFBQVEsUUFDSzthQUFiO1lBQ0QsR0FBQyxRQUFRLHNCQUNtQjthQUEzQjtZQUNELEdBQUMsTUFBTSxLQUNFO2FBQVI7WUFDRCxHQUFDLFFBQVEsUUFDSzthQUFiO1lBQ0QsR0FBQyxRQUFPLFVBQ007YUFBUixjQUF3QixlQUF4Qix5QkFBcUMsZUFBZTtZQUMxRCxHQUFDLE1BQU0sS0FDRTthQUFSO1lBQ0QsR0FBQyxNQUFNLEtBQ0U7YUFBUjtZQUVHO01BQUg7YUFDQTs7Ozs7OztDQUdMLDBCQUFxQjtDQUNyQiw4QkFBYTtDQUNiLG1CQUFlLEtBQUksVUFBTyIsImZpbGUiOiIuL2NvZGVtaXJyb3ItbWFzb24tbW9kZS5qcyJ9