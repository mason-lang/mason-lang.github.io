"use strict";
define(["exports","msl/private/boot","codemirror/lib/codemirror","mason-compile/info","msl/Type/Poly","msl/at/Set/Id-Set"],(exports,_boot,codemirror_0,info_1,Poly_2,Id_45Set_3)=>{
	_ms.getModule(_boot);
	let codemirror=_ms.getDefaultExport(codemirror_0),_$1=_ms.getModule(info_1),keywords=_ms.get(_$1,"keywords"),_$2=_ms.getModule(Poly_2),self_45impl_33=_ms.get(_$2,"self-impl!"),Id_45Set=_ms.getDefaultExport(Id_45Set_3);
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
	let next_45token=_ms.method("next-token",["state","stream"]);
	let styles=(()=>{
		let built={};
		let amp=built.amp="variable-3";
		let brace=built.brace="keyword";
		let _comment=built.comment="comment";
		let focus_45call=built["focus-call"]="variable-2";
		let _function=built.function="def";
		let invalid=built.invalid="error";
		let keyword=built.keyword="keyword";
		let local=built.local=null;
		let member=built.member="comment";
		built.number="number";
		let plain=built.plain=null;
		let ms_45region=built["ms-region"]="comment";
		let regexp=built.regexp="string";
		built.string="string";
		built.type="atom";
		return built
	})();
	let Indented_45String_45State=class Indented_45String_45State{
		constructor(indent){
			let _this=this;
			this.indent=indent
		}
		[_ms.symbol(next_45token)](stream){
			let _this=this;
			return (()=>{
				if((_this.indent<=stream.indentation())){
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
	let PlainState={};
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
					} else if(_.eat(/[\(\)\[\]\{\}]/)){
						return styles.brace
					} else if(_.match(/-?\d+(\.\d+)?/)){
						return styles.number
					} else if(_.match(/:\S+/)){
						return styles.type
					} else if(_.match(/\.?(\*|\$)?\!?\\.*/)){
						return styles.function
					} else if(_.eat(`~`)){
						return styles.lazy
					} else if(_.match(/\S+_/)){
						return styles["focus-call"]
					} else if(_.match(rgx_45id)){
						return (_ms.hasInstance(keywords_45set,stream.current().trim())?styles.keyword:styles.local)
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
	let non_45id_45characters=/\s.:()\[\]\{\}"&/;
	let rgx_45id=_ms.regexp(["[^",non_45id_45characters,"]+"],"");
	let keywords_45set=new (Id_45Set)(keywords);
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFzb24tZWRpdG9yL2NvZGVtaXJyb3ItbWFzb24tbW9kZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0NBSUEsc0JBQXVCLFFBQ08sSUFBQTs7RUFFN0IsZ0NBQ2EscUJBQUE7O0dBQVosc0JBQU87OztFQUNSLHNCQUFRLGVBQUEsT0FBTyxNQUNLO0dBQW5CLGdCQUFpQjtHQUNqQixRQUFvQixhQUFXLFlBQVk7R0FDM0MsWUFBZTtVQUNmO0VBQUE7RUFDRCxrQ0FBYzs7O0NBRWY7Q0FLQSxXQUNRLEtBQUE7O0VBQVAsa0JBQU07RUFDTixzQkFBUTtFQUNSLDJCQUFVO0VBQ1YscUNBQWE7RUFDYiw2QkFBVztFQUNYLDBCQUFVO0VBQ1YsMEJBQVU7RUFDVixzQkFBTztFQUNQLHdCQUFTO2VBQ0E7RUFDVCxzQkFBTztFQUNQLG1DQUFZO0VBQ1osd0JBQVM7ZUFDQTthQUNGOzs7Q0FFUiw4QkFDNkI7RUFBbEIsWUFBQSxPQUNPOzs7O0VBRWpCLFlBQUMsZUFBYSxPQUNNOztVQUNmO0lBQUgsR0FBQSxDQUFJLGNBQVEsc0JBQ29COztLQUEvQjtLQUNBLG1DQUFXO0tBQ1gsc0JBQU87O1dBRUo7WUFBSCxhQUFXLFdBQVc7SUFBQTtHQUFBO0VBQUE7Q0FBQTtDQUcxQixlQUFhO0NBQ2IsZUFBVyxhQUFXLFdBQWEsU0FBQSxPQUNNOztTQUNwQztHQUFILEdBQUEsYUFBYyxNQUNHOztJQUFoQixtQ0FBVyxLQUFJLDJCQUFzQjtJQUNyQyxzQkFBTzs7VUFFSjs7SUFBSCxtQ0FBVztJQUNYLHNCQUFZO0tBQUEsTUFBQTtLQUNYLEdBQUEsUUFBUyxVQUNPO01BQWY7YUFDQTtZQUNELEdBQUEsUUFBUyxVQUNPO01BQWY7YUFDQTtZQUNELEdBQUEsUUFBUyxRQUNLO2FBQWI7WUFDRCxHQUFBLFFBQVMsZ0JBQ2U7YUFBdkI7WUFDRCxHQUFBLFFBQVMsUUFDSzthQUFiO1lBQ0QsR0FBQSxNQUFPLGtCQUNlO2FBQXJCO1lBQ0QsR0FBQSxRQUFTLGlCQUNjO2FBQXRCO1lBQ0QsR0FBQSxRQUFTLFFBQ0s7YUFBYjtZQUNELEdBQUEsUUFBUyxzQkFDbUI7YUFBM0I7WUFDRCxHQUFBLE1BQU8sS0FDRTthQUFSO1lBQ0QsR0FBQSxRQUFTLFFBQ0s7YUFBYjtZQUNELEdBQUEsUUFBUSxVQUNNO2FBQVIsaUJBQXdCLGVBQXhCLHlCQUFxQyxlQUFlO1lBQzFELEdBQUEsTUFBTyxLQUNFO2FBQVI7WUFDRCxHQUFBLE1BQU8sS0FDRTthQUFSO1lBRUc7TUFBSDthQUNBOzs7Ozs7O0NBR0wsMEJBQXFCO0NBQ3JCLDhCQUFhO0NBQ2IsbUJBQWUsS0FBSSxVQUFPIiwiZmlsZSI6Ii4vY29kZW1pcnJvci1tYXNvbi1tb2RlLmpzIn0=