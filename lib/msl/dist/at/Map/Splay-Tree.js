"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../compare","./../../js","./../../methods","./../at","./../at-Type","./Map","./Sorted-Map"],(exports,compare_0,js_1,methods_2,_64_3,_64_45Type_4,Map_5,Sorted_45Map_6)=>{
	exports._get=_ms.lazy(()=>{
		let compare=_ms.getDefaultExport(compare_0),_$0=_ms.getModule(compare_0),_60_63=_ms.get(_$0,"<?"),_$1=_ms.getModule(js_1),defined_63=_ms.get(_$1,"defined?"),_$2=_ms.getModule(methods_2),del_45sub_33=_ms.get(_$2,"del-sub!"),set_45sub_33=_ms.get(_$2,"set-sub!"),_$3=_ms.getModule(_64_3),empty_33=_ms.get(_$3,"empty!"),empty_63=_ms.get(_$3,"empty?"),iterator=_ms.get(_$3,"iterator"),_$4=_ms.getModule(_64_45Type_4),empty=_ms.get(_$4,"empty"),_$5=_ms.getModule(Map_5),_63get=_ms.get(_$5,"?get"),Sorted_45Map=_ms.getDefaultExport(Sorted_45Map_6);
		let Splay_45Tree=exports.default=(()=>{
			let _=class Splay_45Tree{
				static [_ms.symbol(empty)](){
					let _this=this;
					return new (_this)()
				}
				constructor(root){
					let _this=this;
					_ms.checkContains(Splay_45Node,root,"root");
					_ms.newProperty(this,"root",root)
				}
				[_ms.symbol(iterator)](){
					let _this=this;
					let node_45iter=function* node_45iter(_){
						if(defined_63(_)){
							(yield* node_45iter(_["left!"]));
							(yield [_.key,_["val!"]]);
							(yield* node_45iter(_["right!"]))
						}
					};
					return node_45iter(_this.root)
				}
				[_ms.symbol(empty_63)](){
					let _this=this;
					return ! defined_63(_this.root)
				}
				[_ms.symbol(empty_33)](){
					let _this=this;
					_this.root=void 0
				}
				[_ms.symbol(_63get)](key){
					let _this=this;
					return ((! empty_63(_this)&&splay_33_63(_this,key))?_ms.some((()=>{
						return _this.root["val!"]
					})()):_ms.None)
				}
				[_ms.symbol(set_45sub_33)](key,val){
					let _this=this;
					if(empty_63(_this)){
						_this.root=new (Splay_45Node)(key,val,void 0,void 0)
					} else if(splay_33_63(_this,key)){
						_this.root["val!"]=val
					} else {
						let old_45root=_this.val;
						_ms.assertNot(empty_63,_this);
						_this.root=(()=>{
							if(_60_63(old_45root.key,key)){
								let old_45right=old_45root["right!"];
								old_45root["right!"]=void 0;
								return new (Splay_45Node)(key,val,old_45root,old_45right)
							} else {
								let old_45left=old_45root["left!"];
								old_45root["left!"]=void 0;
								return new (Splay_45Node)(key,val,old_45left,old_45root)
							}
						})()
					}
				}
				[_ms.symbol(del_45sub_33)](key){
					let _this=this;
					return ((! empty_63(_this)&&splay_33_63(_this,key))?_ms.some((()=>{
						let removed=_this.root;
						_this.root=(()=>{
							if(has_45left_63(removed)){
								let right=removed.right;
								let new_45root=removed.left;
								splay_33_63(_this,key);
								new_45root["right!"]=right;
								return new_45root
							} else {
								return removed.right
							}
						})();
						return removed["val!"]
					})()):_ms.None)
				}
			};
			_ms.kindDo(_,Sorted_45Map);
			return _
		})();
		let Splay_45Node=class Splay_45Node{
			constructor(key,val_33,left_33,right_33){
				let _this=this;
				_ms.newProperty(this,"key",key);
				_ms.newProperty(_this,"val!",val_33);
				_ms.newProperty(_this,"left!",left_33);
				_ms.newProperty(_this,"right!",right_33)
			}
		};
		let splay_33_63=function splay_33_63(_,key){
			let dummy=new (Splay_45Node)(void 0,void 0,void 0,void 0);
			let left=dummy;
			let right=dummy;
			let cur=_.root;
			let found=(()=>{
				for(;;){
					{
						let _=compare(key,cur.key);
						if(_60_63(_,0)){
							if(! has_45left_63(cur)){
								return false
							};
							let link_45right_33=function link_45right_33(new_45right){
								right["left!"]=new_45right;
								cur=new_45right["left!"];
								right=new_45right
							};
							if(_60_63(key,cur["left!"].key)){
								let old_45left=cur["left!"];
								cur["left!"]=old_45left["right!"];
								old_45left["right!"]=cur;
								if(! has_45left_63(old_45left)){
									cur=old_45left;
									return false
								};
								cur=old_45left;
								link_45right_33(old_45left)
							} else {
								link_45right_33(cur)
							}
						} else if(_60_63(0,_)){
							if(! has_45right_63(cur)){
								return false
							};
							let link_45left_33=function link_45left_33(new_45left){
								left["right!"]=new_45left;
								cur=new_45left["right!"];
								left=new_45left
							};
							if(_60_63(cur["right!"].key,key)){
								let tmp=cur["right!"];
								cur["right!"]=tmp["left!"];
								tmp["left!"]=cur;
								if(! has_45right_63(tmp)){
									cur=tmp;
									return false
								};
								link_45left_33(tmp)
							} else {
								link_45left_33(cur)
							}
						} else {
							return true
						}
					}
				}
			})();
			left["right!"]=cur["left!"];
			right["left!"]=cur["right!"];
			cur["left!"]=dummy["right!"];
			cur["right!"]=dummy["left!"];
			_.root=cur;
			return found
		};
		let has_45left_63=function has_45left_63(node){
			return defined_63(node["left!"])
		};
		let has_45right_63=function has_45right_63(node){
			return defined_63(node["right!"])
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9NYXAvU3BsYXktVHJlZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQVNBLGlDQUFrQjs7dUJBSWhCO1NBcUVDO1lBcEVBLEtBb0VBO0lBQUE7SUFsRVEsWUFBQTtTQWtFUjt1QkFsRWM7OztnQkFHaEI7U0ErREU7S0E5REQsZ0JBQWdCLHNCQUFBO01BQ1osR0FBQSxXQUFTLEdBQ0E7ZUFBSixZQUFXO2NBQ1osQ0FBRSxNQUFNO2VBQ1AsWUFBVzs7O1lBQ3BCLFlBeURDOztnQkF2REY7U0F1REU7WUF0REQsRUFBSSxXQXNESDs7Z0JBcERGO1NBb0RFO0tBQUEsV0FuRFE7O2dCQUVWLFNBQU07U0FpREo7WUFoREUsQ0FBQSxDQUFLLEVBQUksU0FnRFgsUUFoRHlCLFlBZ0R6QixNQWhEc0Msb0JBQ0k7YUErQzFDOzs7Z0JBNUNGLGVBQVcsSUFBSTtTQTRDYjtLQTFDRyxHQUFILFNBMENBLE9BekNXO01BeUNYLFdBekNVLEtBQUksY0FBVyxJQUFJLElBQUksT0FBVTtZQUMzQyxHQUFBLFlBd0NBLE1BeENhLEtBQ0c7TUF1Q2hCLG1CQXZDZTtLQUFBLE9BRVg7TUFBSCxlQXFDRDtvQkFwQ1EsU0FvQ1I7TUFBQSxXQWxDYztPQUFaLEdBQUEsT0FBRyxlQUFhLEtBQ0c7UUFBbEIsZ0JBQVk7UUFDWixxQkFBbUI7ZUFDbkIsS0FBSSxjQUFXLElBQUksSUFBSSxXQUFTO09BQUEsT0FFN0I7UUFBSCxlQUFXO1FBQ1gsb0JBQWtCO2VBQ2xCLEtBQUksY0FBVyxJQUFJLElBQUksV0FBUztPQUFBO01BQUE7S0FBQTtJQUFBO2dCQUdyQyxlQUFVO1NBd0JSO1lBdkJFLENBQUEsQ0FBSyxFQUFJLFNBdUJYLFFBdkJ5QixZQXVCekIsTUF2QnNDLG9CQUNJO01BQTFDLFlBc0JBO01BQUEsV0FuQmE7T0FBWixHQUFBLGNBQVUsU0FDTztRQUFoQixVQUFRO1FBQ1IsZUFBVztRQUVYLFlBZUYsTUFmZTtRQUNiLHFCQUFtQjtlQUNuQjtPQUFBLE9BRUc7ZUFDSDs7O2FBRUY7Ozs7Z0JBakVvQjs7O0VBcUV0QixpQkFDa0I7R0FBUCxZQUFBLElBQUssT0FBSyxRQUFNO1FBR3pCOztvQkFBQSxhQUZRO29CQUVSLGNBRFM7b0JBQ1QsZUFBVTtHQUFBO0VBQUE7RUFJWixnQkFBWSxxQkFBQSxFQUFDO0dBQ1osVUFBUSxLQUFJLGNBQVcsT0FBVSxPQUFVLE9BQVU7R0FDckQsU0FBTztHQUNQLFVBQVE7R0FDUixRQUFPO0dBRVAsVUFDVztXQUFBO0tBQUw7TUFBQSxNQUFBLFFBQVEsSUFBSTtNQUNoQixHQUFBLE9BQUksRUFBQyxHQUNDO09BQUUsS0FBQSxjQUFVLEtBQ0c7UUFBbkIsT0FBTTtPQUFBO09BQ1Asb0JBQWdCLHlCQUFBO1FBQ2YsZUFBZTtZQUNSO2NBQ0U7T0FBQTtPQUVOLEdBQUgsT0FBRyxJQUFJLGtCQUNhO1FBQ25CLGVBQVc7UUFDWCxhQUFhO1FBQ2IscUJBQW1CO1FBQ1osS0FBQSxjQUFVLFlBQ1E7YUFBakI7U0FDUCxPQUFNO1FBQUE7WUFDQTtRQUNQLGdCQUFZO09BQUEsT0FFVDtRQUFILGdCQUFZO09BQUE7TUFBQSxPQUNmLEdBQUEsT0FBRyxFQUFHLEdBQ0E7T0FBRSxLQUFBLGVBQVcsS0FDRztRQUFwQixPQUFNO09BQUE7T0FDUCxtQkFBZSx3QkFBQTtRQUNkLGVBQWU7WUFDUjthQUNDO09BQUE7T0FFTCxHQUFILE9BQUcsa0JBQWUsS0FDRztRQUNwQixRQUFNO1FBQ04sY0FBYztRQUNkLGFBQWE7UUFDTixLQUFBLGVBQVcsS0FDRzthQUFiO1NBQ1AsT0FBTTtRQUFBO1FBQ1AsZUFBVztPQUFBLE9BRVI7UUFBSCxlQUFXO09BQUE7TUFBQSxPQUVWO09BQUgsT0FBTTtNQUFBO0tBQUE7SUFBQTtHQUFBO0dBRVQsZUFBZTtHQUNmLGVBQWU7R0FDZixhQUFhO0dBQ2IsY0FBYztHQUNiLE9BQVM7VUFDVjtFQUFBO0VBRUQsa0JBQWEsdUJBQUE7VUFDWixXQUFTOztFQUVWLG1CQUFjLHdCQUFBO1VBQ2IsV0FBUyIsImZpbGUiOiJhdC9NYXAvU3BsYXktVHJlZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
