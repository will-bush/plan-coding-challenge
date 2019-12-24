(this["webpackJsonpplan-coding-challenge"]=this["webpackJsonpplan-coding-challenge"]||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/logo.fffe9955.svg"},22:function(e,t,a){e.exports=a.p+"static/media/background.0a390081.jpg"},23:function(e,t,a){e.exports=a.p+"static/media/no_artwork.6e7204d9.png"},27:function(e,t,a){e.exports=a(43)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),o=(a(32),a(33),a(10)),s=a(5),i=a(6),u=a(8),m=a(7),h=a(9),p=(a(34),a(22)),d=a.n(p),E=a(12),f=a.n(E),g=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:d.a,alt:"Snow",style:{width:"100%"}}),l.a.createElement("div",{className:"centered"},l.a.createElement("h1",null,"Welcome!"),l.a.createElement("img",{className:"logo",src:f.a,alt:"plan.com logo"}),l.a.createElement("p",null,"This is Will Bush's submission for the coding challenge skill assessment for a Front-end Developer role at plan.com"),l.a.createElement("button",{id:"about",onClick:function(){return e.props.history.push("/home")}},"TRY THE APP")))}}]),t}(l.a.Component),v=(a(35),a(14)),b=(a(36),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.setSearchQuery(this.state.value),this.props.clearSelectedResult()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit,className:"searchForm"},l.a.createElement("label",null,l.a.createElement("strong",null,"Search: "),l.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange,placeholder:"Please enter a movie title"})),l.a.createElement("input",{type:"submit",value:"Submit",id:"submit"}))}}]),t}(l.a.Component)),y=a(26),w=function(e,t){var a=Object(n.useState)(t),l=Object(y.a)(a,2),r=l[0],c=l[1];return Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return c(e)}))}),[e]),r};var S=function(e){var t=e.MovieData,a=e.viewResult;return l.a.createElement("div",{className:"resultListItem",onClick:function(){return a(t)}},l.a.createElement("h3",null,t.Title))};var O=function(e){var t=e.viewResult,a=e.query,n=w("http://www.omdbapi.com/?apikey=a12b58ca&type=movie&s="+a,{});return l.a.createElement("div",null,l.a.createElement("h3",null,"Results:"),"False"===n.Response?l.a.createElement("p",null,n.Error," Please try again with a different search term."):null,n.Search?n.Search.map((function(e){return l.a.createElement(S,{MovieData:e,viewResult:t},l.a.createElement("h3",null,e.Title))})):null)},k=a(23),j=a.n(k);var R=function(e){var t="http://www.omdbapi.com/?apikey=a12b58ca&i="+e.movie.imdbID,a=w(t,{});return l.a.createElement("div",{className:"selected"},"N/A"===a.Poster?l.a.createElement("img",{className:"poster",src:j.a,alt:a.Title}):l.a.createElement("img",{className:"poster",src:a.Poster,alt:a.Title}),l.a.createElement("h1",null,a.Title," (",a.Year,")"),l.a.createElement("h3",null,a.Plot),l.a.createElement("p",null,l.a.createElement("strong",null,a.Genre)),l.a.createElement("p",null,l.a.createElement("strong",null,"Rated: "),a.Rated),l.a.createElement("p",null,l.a.createElement("strong",null,"Runtime: "),a.Runtime),l.a.createElement("p",null,l.a.createElement("strong",null,"IMDB Rating: "),a.imdbRating),l.a.createElement("p",null,l.a.createElement("strong",null,"Director: "),a.Director),l.a.createElement("p",null,l.a.createElement("strong",null,"Starring: "),a.Actors))},N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={selected_result:null,search_query:""},a.viewResult=function(e){a.setState({selected_result:e}),localStorage.setItem("selected_result",JSON.stringify(e))},a.setSearchQuery=function(e){a.setState({search_query:e}),localStorage.setItem("search_query",JSON.stringify(e))},a.clearSelectedResult=function(){localStorage.setItem("selected_result",null),a.setState({selected_result:null})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){if(localStorage.getItem("selected_result")){var e=localStorage.getItem("selected_result");this.setState({selected_result:JSON.parse(e)})}if(localStorage.getItem("search_query")){var t=localStorage.getItem("search_query");this.setState({search_query:JSON.parse(t)})}}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"home"},l.a.createElement("header",null,l.a.createElement("img",{className:"logo",src:f.a,alt:"plan.com logo"}),l.a.createElement(b,{search:this.search,setSearchQuery:this.setSearchQuery,clearSelectedResult:this.clearSelectedResult})),l.a.createElement("aside",null,""!==this.state.search_query?l.a.createElement(O,{query:this.state.search_query,viewResult:this.viewResult}):null),l.a.createElement("main",null,this.state.selected_result?l.a.createElement(R,{movie:this.state.selected_result}):l.a.createElement("p",null,"Please perform a search and select a movie from the results list.")),l.a.createElement("footer",null,l.a.createElement("button",{id:"about",onClick:function(){return e.props.history.push("/about")}},"ABOUT")))}}]),t}(l.a.Component),_=(a(37),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"about"},l.a.createElement("header",null,l.a.createElement("img",{className:"logo",src:f.a,alt:"plan.com logo",onClick:function(){return e.props.history.push("/home")}})),l.a.createElement("main",{className:"about"},l.a.createElement("h1",null,"About this project"),l.a.createElement("p",null,l.a.createElement("strong",null,"Overview: "),l.a.createElement("br",null),"Write a CRA (create-react-app) application that allows searching movies from https://www.omdbapi.com/ and list results and then clicking on a film to show more details."),l.a.createElement("p",null,l.a.createElement("strong",null,"Data fetching Hook: "),l.a.createElement("br",null),"Use a custom useFetch hook to fetch data from the omdbapi. The API of the hook is up to you (parameters of the hook, and shape of the object returned by the hook), but all the data must come from it."),l.a.createElement("p",null,l.a.createElement("strong",null,"Navigation: "),l.a.createElement("br",null),"The application must use react-router or reach router."),l.a.createElement("p",null,l.a.createElement("strong",null,"Detailed view: "),l.a.createElement("br",null),"Clicking on a movie in the list of search results should show a detailed view of the movie on the right hand side of the page."),l.a.createElement("p",null,l.a.createElement("strong",null,"Other things we are looking for: ")),l.a.createElement("ul",null,l.a.createElement("li",null,"The use of hooks and logic used to write the custom hook."),l.a.createElement("li",null,"A page refresh should display the same page (same list, same detailed movie)"),l.a.createElement("li",null,"Routing - how the page renders when you click a link/search or refresh"),l.a.createElement("li",null,"Forms - how data is handled from the input fields and then used to load data."),l.a.createElement("li",null,"Error handling - Handle input errors and error responses from the api."))),l.a.createElement("footer",null,l.a.createElement("button",{id:"about",onClick:function(){return e.props.history.push("/home")}},"HOME")))}}]),t}(l.a.Component));var C=Object(o.f)((function(){return l.a.createElement("div",null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0,component:function(e){return l.a.createElement(g,e)}}),l.a.createElement(o.a,{path:"/home",component:function(e){return l.a.createElement(N,e)}}),l.a.createElement(o.a,{path:"/about",component:function(e){return l.a.createElement(_,e)}})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(16);c.a.render(l.a.createElement(I.a,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.c52a48ea.chunk.js.map