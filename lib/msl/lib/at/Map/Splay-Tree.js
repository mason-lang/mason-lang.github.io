"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../compare","./../../js","./../../polys","./../at","./Map","./Sorted-Map"],(exports,compare_0,js_1,polys_2,_64_3,Map_4,Sorted_45Map_5)=>{
	exports._get=_ms.lazy(()=>{
		let compare=_ms.getDefaultExport(compare_0),_$0=_ms.getModule(compare_0),less_63=_ms.get(_$0,"less?"),_$1=_ms.getModule(js_1),defined_63=_ms.get(_$1,"defined?"),_$2=_ms.getModule(polys_2),del_45sub_33=_ms.get(_$2,"del-sub!"),set_45sub_33=_ms.get(_$2,"set-sub!"),_$3=_ms.getModule(_64_3),empty=_ms.get(_$3,"empty"),empty_33=_ms.get(_$3,"empty!"),empty_63=_ms.get(_$3,"empty?"),iterator=_ms.get(_$3,"iterator"),_$4=_ms.getModule(Map_4),_63get=_ms.get(_$4,"?get"),Sorted_45Map=_ms.getDefaultExport(Sorted_45Map_5);
		let Splay_45Tree=exports.default=(()=>{
			let _=class Splay_45Tree{
				static [_ms.symbol(empty)](){
					let _this=this;
					return new (_this)(void 0)
				}
				constructor(root){
					let _this=this;
					_ms.checkInstance(Splay_45Node,root,"root");
					this.root=root
				}
				[_ms.symbol(iterator)](){
					let _this=this;
					let node_45iter=function* node_45iter(_){
						if(defined_63(_)){
							(yield* node_45iter(_.left));
							(yield [_.key,_.val]);
							(yield* node_45iter(_.right))
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
					return ((! empty_63(_this)&&_this["splay!?"](key))?_ms.some((()=>{
						return _this.root.val
					})()):_ms.None)
				}
				[_ms.symbol(set_45sub_33)](key,val){
					let _this=this;
					if(empty_63(_this)){
						_this.root=new (Splay_45Node)(key,val,void 0,void 0)
					} else if(_this["splay!?"](key)){
						_this.root.val=val
					} else {
						let old_45root=_this.val;
						_ms.assertNot(empty_63,_this);
						_this.root=(()=>{
							if((old_45root.key<key)){
								let old_45right=old_45root.right;
								old_45root.right=void 0;
								return new (Splay_45Node)(key,val,old_45root,old_45right)
							} else {
								let old_45left=old_45root.left;
								old_45root.left=void 0;
								return new (Splay_45Node)(key,val,old_45left,old_45root)
							}
						})()
					}
				}
				[_ms.symbol(del_45sub_33)](key){
					let _this=this;
					return ((! empty_63(_this)&&_this["splay!?"](key))?_ms.some((()=>{
						let removed=_this.root;
						_this.root=(()=>{
							if(removed["has-left?"]){
								let right=removed.right;
								let new_45root=removed.left;
								_this["splay!?"](key);
								new_45root.right=right;
								return new_45root
							} else {
								return removed.right
							}
						})();
						return removed.val
					})()):_ms.None)
				}
				"splay!?"(key){
					let _this=this;
					let dummy=new (Splay_45Node)(void 0,void 0,void 0,void 0);
					let left=dummy;
					let right=dummy;
					let cur=_this.root;
					let found=(()=>{
						for(;;){
							{
								let _=compare(key,cur.key);
								if((_<0)){
									if(! cur["has-left?"]){
										return false
									};
									let link_45right_33=function link_45right_33(new_45right){
										right.left=new_45right;
										cur=new_45right.left;
										right=new_45right
									};
									if(less_63(key,cur.left.key)){
										let old_45left=cur.left;
										cur.left=old_45left.right;
										old_45left.right=cur;
										if(! old_45left["has-left?"]){
											cur=old_45left;
											return false
										};
										cur=old_45left;
										link_45right_33(old_45left)
									} else {
										link_45right_33(cur)
									}
								} else if((0<_)){
									if(! cur["has-right?"]){
										return false
									};
									let link_45left_33=function link_45left_33(new_45left){
										left.right=new_45left;
										cur=new_45left.right;
										left=new_45left
									};
									if(less_63(cur.right.key,key)){
										let tmp=cur.right;
										cur.right=tmp.left;
										tmp.left=cur;
										if(! tmp["has-right?"]){
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
					left.right=cur.left;
					right.left=cur.right;
					cur.left=dummy.right;
					cur.right=dummy.left;
					_this.root=cur;
					return found
				}
			};
			_ms.traitDo(_,Sorted_45Map);
			return _
		})();
		let Splay_45Node=class Splay_45Node{
			constructor(key,val,left,right){
				let _this=this;
				this.key=key;
				this.val=val;
				this.left=left;
				this.right=right
			}
			get "has-left?"(){
				let _this=this;
				return defined_63(_this.left)
			}
			get "has-right?"(){
				let _this=this;
				return defined_63(_this.right)
			}
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9NYXAvU3BsYXktVHJlZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQVFBLGlDQUFrQjs7SUFJaEIsbUJBQUMsU0FDUTs7WUFBUixLQUFJLE9BQUs7O0lBRUQsWUFBQSxLQUNnQjs7dUJBRFY7OztJQUdoQixZQUFDLFlBQ1c7O0tBQVgsZ0JBQWUsc0JBQUEsRUFDQztNQUFaLEdBQUEsV0FBUyxHQUNBO2VBQUosWUFBVTtjQUNYLENBQUMsTUFBTTtlQUNOLFlBQVU7OztZQUNuQixZQUFVOztJQUVYLFlBQUMsWUFDUzs7WUFBVCxFQUFJLFdBQVM7O0lBRWQsWUFBQyxZQUNVOztLQUFWLFdBQVM7O0lBRVYsWUFBQyxTQUFPLElBQ0c7O1lBQVAsQ0FBQSxDQUFLLEVBQUksU0FBTyxRQUFPLGlCQUFTLG9CQUNJO2FBQXRDOzs7SUFHRixZQUFDLGVBQVksSUFBSSxJQUNHOztLQUNmLEdBQUgsU0FBTyxPQUNJO01BQVYsV0FBUyxLQUFJLGNBQVcsSUFBSSxJQUFJLE9BQVU7WUFDM0MsR0FBQSxpQkFBUyxLQUNHO01BQVgsZUFBYTtLQUFBLE9BRVY7TUFBSCxlQUFXO29CQUNKLFNBQU87TUFDZCxXQUNhO09BQVosR0FBQSxDQUFHLGVBQWEsS0FDRztRQUFsQixnQkFBWTtRQUNaLGlCQUFrQjtlQUNsQixLQUFJLGNBQVcsSUFBSSxJQUFJLFdBQVM7T0FBQSxPQUU3QjtRQUFILGVBQVc7UUFDWCxnQkFBaUI7ZUFDakIsS0FBSSxjQUFXLElBQUksSUFBSSxXQUFTO09BQUE7TUFBQTtLQUFBO0lBQUE7SUFHckMsWUFBQyxlQUFXLElBQ0c7O1lBQVgsQ0FBQSxDQUFLLEVBQUksU0FBTyxRQUFPLGlCQUFTLG9CQUNJO01BQXRDLFlBQVU7TUFFVixXQUNhO09BQVosR0FBQSxxQkFDaUI7UUFBaEIsVUFBUTtRQUNSLGVBQVc7UUFFWCxpQkFBUztRQUNULGlCQUFrQjtlQUNsQjtPQUFBLE9BRUc7ZUFDSDs7O2FBRUY7OztjQUlVLElBQ0c7O0tBQWQsVUFBUSxLQUFJLGNBQVcsT0FBVSxPQUFVLE9BQVU7S0FDckQsU0FBTztLQUNQLFVBQVE7S0FDUixRQUFNO0tBRU4sVUFDVzthQUFBO09BQUw7UUFBQSxNQUFBLFFBQVEsSUFBSTtRQUNoQixHQUFBLENBQUcsRUFBRSxHQUNDO1NBQUUsS0FBQSxpQkFDYTtVQUFuQixPQUFNO1NBQUE7U0FDUCxvQkFBZ0IseUJBQUEsWUFDUztVQUF4QixXQUFjO2NBQ1A7Z0JBQ0U7U0FBQTtTQUVOLEdBQUgsUUFBTSxJQUFJLGNBQ1k7VUFDckIsZUFBVztVQUNYLFNBQVk7VUFDWixpQkFBa0I7VUFDWCxLQUFBLHdCQUNrQjtlQUFqQjtXQUNQLE9BQU07VUFBQTtjQUNBO1VBQ1AsZ0JBQVk7U0FBQSxPQUVUO1VBQUgsZ0JBQVk7U0FBQTtRQUFBLE9BQ2YsR0FBQSxDQUFHLEVBQUUsR0FDQztTQUFFLEtBQUEsa0JBQ2M7VUFBcEIsT0FBTTtTQUFBO1NBQ1AsbUJBQWUsd0JBQUEsV0FDUTtVQUF0QixXQUFjO2NBQ1A7ZUFDQztTQUFBO1NBRUwsR0FBSCxRQUFNLGNBQWMsS0FDRztVQUN0QixRQUFNO1VBQ04sVUFBYTtVQUNiLFNBQVk7VUFDTCxLQUFBLGtCQUNjO2VBQWI7V0FDUCxPQUFNO1VBQUE7VUFDUCxlQUFXO1NBQUEsT0FFUjtVQUFILGVBQVc7U0FBQTtRQUFBLE9BRVY7U0FBSCxPQUFNO1FBQUE7T0FBQTtNQUFBO0tBQUE7S0FFVCxXQUFjO0tBQ2QsV0FBYztLQUNkLFNBQVk7S0FDWixVQUFhO0tBQ2IsV0FBUztZQUNUO0lBQUE7R0FBQTtpQkE1SHNCOzs7RUFnSXZCLGlCQUNrQjtHQUFQLFlBQUEsSUFBSyxJQUFLLEtBQU0sTUFDTTs7Ozs7OztHQUVoQyxpQkFDYTs7V0FBWixXQUFTOztHQUVWLGtCQUNjOztXQUFiLFdBQVMiLCJmaWxlIjoiYXQvTWFwL1NwbGF5LVRyZWUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
