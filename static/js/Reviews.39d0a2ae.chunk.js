(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{78:function(e,t,a){e.exports={list:"reviews_list__2zrk0",item:"reviews_item__3FbUN",heading:"reviews_heading__1505l"}},80:function(e,t,a){"use strict";a.r(t);var n=a(34),i=a.n(n),r=a(35),s=a(36),c=a(37),o=a(40),h=a(39),l=a(0),u=a(38),v=a.n(u),p=a(78),d=a.n(p),m=a(1),b=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={reviewslist:null},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params,e.next=3,v.a.get("https://api.themoviedb.org/3/movie/".concat(t.movieId,"/reviews?api_key=06107a8d40ed107672c06803f6a2ba0d"));case 3:a=e.sent,this.setState({reviewslist:a.data.results});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.reviewslist;return Object(m.jsx)("div",{children:Object(m.jsx)("ul",{className:d.a.list,children:e&&e.length>0&&e.map((function(e){var t=e.id,a=e.author,n=e.content;return Object(m.jsxs)("li",{className:d.a.item,children:[Object(m.jsx)("h2",{className:d.a.heading,children:a}),Object(m.jsx)("p",{children:n})]},t)}))||"We don't have any reviews for this movie."})})}}]),a}(l.Component);t.default=b}}]);
//# sourceMappingURL=Reviews.39d0a2ae.chunk.js.map