(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d394c86c"],{"0bf5":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"photo"},["undefined"!==typeof this.user.id?r("router-link",{staticClass:"link",attrs:{to:{name:"OtherUser",params:{id:this.user.id}}}},[r("img",{attrs:{src:e.user.avatar,alt:""}})]):e._e()],1),r("div",{staticClass:"UserAccount"},["undefined"!==typeof this.user.id?r("router-link",{staticClass:"name",attrs:{to:{name:"OtherUser",params:{id:this.user.id}}}},[e._v(" "+e._s(e._f("ellipsis")(e.user.name))+" ")]):e._e(),r("label",{staticClass:"account"},[e._v("@"+e._s(e._f("ellipsis")(e.user.account)))])],1),r("div",[e.user.isFollowing?r("button",{staticClass:"followingBtn",attrs:{disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.unFollow(e.user.id)}}},[e._v(" 正在跟隨 ")]):r("button",{attrs:{disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFollow(e.user.id)}}},[e._v(" 跟隨 ")])])])},a=[],n=r("5530"),i=r("1da1"),o=(r("96cf"),r("fb6a"),r("d9e2"),r("4cce")),c=r("2fa3"),l={props:{initialUser:{type:Object,required:!0}},data:function(){return{user:this.initialUser,isProcessing:!1}},filters:{ellipsis:function(e){return e?e.length>15?e.slice(0,15)+"...":e:""}},methods:{addFollow:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,o["a"].addFollow({id:e});case 4:if(s=r.sent,a=s.data,"success"===a.status){r.next=8;break}throw new Error(a.message);case 8:t.user=Object(n["a"])(Object(n["a"])({},t.user),{},{isFollowing:!0}),t.isProcessing=!1,r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](0),t.isProcessing=!1,c["a"].fire({icon:"error",title:"請稍後再試"});case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))()},unFollow:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,o["a"].unFollow({userId:e});case 4:if(s=r.sent,a=s.data,"success"===a.status){r.next=8;break}throw new Error(a.message);case 8:t.user=Object(n["a"])(Object(n["a"])({},t.user),{},{isFollowing:!1}),t.isProcessing=!1,r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](0),t.isProcessing=!1,c["a"].fire({icon:"error",title:"請稍後再試"});case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))()}}},u=l,d=(r("7f7e"),r("2877")),f=Object(d["a"])(u,s,a,!1,null,"4cf46a8c",null);t["a"]=f.exports},2375:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"spinner"},[r("div",{staticClass:"bouncing-loader"},[r("div"),r("div"),r("div")])])}],n=(r("b36b"),r("2877")),i={},o=Object(n["a"])(i,s,a,!1,null,"162d61b1",null);t["a"]=o.exports},"4a78":function(e,t,r){"use strict";r("ab9f")},"669f":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"follow-container"},[r("NavBar"),r("TweetModal"),e.isLoading?r("Spinner"):[r("div",{staticClass:"main"},[r("FollowerListHeader",{attrs:{"initial-user":e.user}}),r("div",[r("ul",{staticClass:"nav nav-tabs"},[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link at"},[e._v("跟隨者")])]),r("li",{staticClass:"nav-item"},["undefined"!==typeof this.userId?r("router-link",{staticClass:"nav-link",attrs:{to:{name:"followingList",params:{id:this.userId}}}},[e._v("正在跟隨")]):e._e()],1)])]),r("div",{staticClass:"UserFollow"},[e._l(e.followers,(function(e){return r("UserFollower",{key:e.id,attrs:{"initial-follower":e}})})),e.followers.length<1?r("div",{staticClass:"substitute"},[e._v(" 目前尚無跟隨者 ")]):e._e()],2)],1),r("div",{staticClass:"PopularUser"},[r("h3",[e._v("Popular")]),e._l(e.users,(function(e){return r("PopularUser",{key:e.id,attrs:{"initial-user":e}})}))],2)]],2)},a=[],n=r("1da1"),i=(r("96cf"),r("d9e2"),r("d000")),o=r("0bf5"),c=r("d0fc"),l=r("4287"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"following"},[r("div",{staticClass:"UserPhoto"},[r("img",{attrs:{src:e.follower.avatar,alt:""}})]),r("div",{staticClass:"TweetsContent"},[r("div",{staticClass:"TweetsContent-top"},[r("div",{staticClass:"UserAccount"},[r("label",{staticClass:"name"},[e._v(e._s(e.follower.name))]),r("label",{staticClass:"account"},[e._v("@"+e._s(e.follower.account))])]),r("div",{staticClass:"btn"},[e.follower.isFollowed?r("button",{staticClass:"followingBtn",attrs:{disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.unFollow(e.follower.id)}}},[e._v(" 正在跟隨 ")]):r("button",{attrs:{disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFollow(e.follower.id)}}},[e._v(" 跟隨 ")])])]),r("div",{staticClass:"article"},[r("p",[e._v(" "+e._s(e.follower.introduction)+" ")])])])])},d=[],f=r("5530"),v=r("4cce"),w={props:{initialFollower:{type:Object,required:!0}},data:function(){return{follower:this.initialFollower,isProcessing:!1}},methods:{addFollow:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,v["a"].addFollow({id:e});case 4:if(s=r.sent,a=s.data,"success"===a.status){r.next=8;break}throw new Error(a.message);case 8:t.follower=Object(f["a"])(Object(f["a"])({},t.follower),{},{isFollowed:!0}),t.isProcessing=!1,r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),t.isProcessing=!1;case 15:case"end":return r.stop()}}),r,null,[[0,12]])})))()},unFollow:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,v["a"].unFollow({userId:e});case 4:if(s=r.sent,a=s.data,"success"===a.status){r.next=8;break}throw new Error(a.message);case 8:t.follower=Object(f["a"])(Object(f["a"])({},t.follower),{},{isFollowed:!1}),t.isProcessing=!1,r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),t.isProcessing=!1;case 15:case"end":return r.stop()}}),r,null,[[0,12]])})))()}}},p=w,h=(r("7572"),r("2877")),b=Object(h["a"])(p,u,d,!1,null,"729fb18c",null),g=b.exports,m=r("2375"),A={components:{NavBar:i["a"],PopularUser:o["a"],FollowerListHeader:c["a"],TweetModal:l["a"],UserFollower:g,Spinner:m["a"]},data:function(){return{users:[],user:[],followers:[],userId:"",isLoading:!0}},created:function(){this.fetchPopularUsers();var e=this.$route.params.id;this.fetchUser(e),this.fetchFollower(e),this.userId=this.$route.params.id},beforeRouteUpdate:function(e,t,r){var s=e.params.id;this.fetchUser(s),this.fetchFollower(s),this.userId=s,r()},methods:{fetchUser:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v["a"].getUser({userId:e});case 3:if(s=r.sent,"OK"===s.statusText){r.next=6;break}throw new Error(s.statusText);case 6:t.user=s.data.data.user,t.isLoading=!1,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),t.isLoading=!1,console.log("error");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},fetchPopularUsers:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v["a"].getPopular();case 3:if(r=t.sent,"OK"===r.statusText){t.next=6;break}throw new Error(r.statusText);case 6:e.users=r.data.data.users,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log("error");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},fetchFollower:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v["a"].getFollowers({userId:e});case 3:if(s=r.sent,"OK"===s.statusText){r.next=6;break}throw new Error(s.statusText);case 6:t.followers=s.data.data.users,r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),console.log("error");case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()}}},C=A,x=(r("4a78"),Object(h["a"])(C,s,a,!1,null,"e60aacb6",null));t["default"]=x.exports},7572:function(e,t,r){"use strict";r("c704")},"7f7e":function(e,t,r){"use strict";r("e8e1")},"858b":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB5SURBVHgB7dfBCYAwEETR0Qoswc6SzreEpAPNQg5R4kGFnct8GMnNBwoi8L7UVtqsnyn5jY9hBYTuCJ8huBnClxGYEEIIIcRXRNTMDUs/7OBW13bZwK/6JYP7aAqGd/EJk0AoQxhhhBEmHkP5r5lhDMRyB1y+EX87AdxCwzt7prpuAAAAAElFTkSuQmCC"},"8e8f":function(e,t,r){},a85b:function(e,t,r){"use strict";r("e4b2")},ab9f:function(e,t,r){},b36b:function(e,t,r){"use strict";r("8e8f")},c704:function(e,t,r){},d0fc:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{lass:"Follower"}},[s("div",{staticClass:"header"},[s("label",{staticClass:"return",attrs:{for:"return-btn"}},[s("img",{attrs:{src:r("858b"),alt:""}}),s("button",{attrs:{type:"button",id:"return-btn"},on:{click:function(t){return e.$router.back()}}})]),s("div",{staticClass:"account"},[s("label",{staticClass:"name"},[e._v(e._s(e.initialUser.name))]),s("label",{staticClass:"tweets"},[e._v(e._s(e.initialUser.tweetCount)+"推文")])])])])},a=[],n={props:{initialUser:{type:[Array,Object],required:!0}}},i=n,o=(r("a85b"),r("2877")),c=Object(o["a"])(i,s,a,!1,null,"7e9700f3",null);t["a"]=c.exports},e4b2:function(e,t,r){},e8e1:function(e,t,r){},fb6a:function(e,t,r){"use strict";var s=r("23e7"),a=r("da84"),n=r("e8b5"),i=r("68ee"),o=r("861d"),c=r("23cb"),l=r("07fa"),u=r("fc6a"),d=r("8418"),f=r("b622"),v=r("1dde"),w=r("f36a"),p=v("slice"),h=f("species"),b=a.Array,g=Math.max;s({target:"Array",proto:!0,forced:!p},{slice:function(e,t){var r,s,a,f=u(this),v=l(f),p=c(e,v),m=c(void 0===t?v:t,v);if(n(f)&&(r=f.constructor,i(r)&&(r===b||n(r.prototype))?r=void 0:o(r)&&(r=r[h],null===r&&(r=void 0)),r===b||void 0===r))return w(f,p,m);for(s=new(void 0===r?b:r)(g(m-p,0)),a=0;p<m;p++,a++)p in f&&d(s,a,f[p]);return s.length=a,s}})}}]);
//# sourceMappingURL=chunk-d394c86c.dc06453d.js.map