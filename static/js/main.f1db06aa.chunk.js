(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,a,t){e.exports=t(66)},39:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(13),i=t.n(c),s=(t(39),t(9)),o=t(10),l=t(30),m=t(4),u="[animeStreaming] show all top animes",d="[animeStreaming] show list with genero animes",f="[animeStreaming] show list with staff",p="[animeStreaming] show list promotional cover",v="[animeStreaming] show promotional trailer",E="[animeStreaming] show list with episodes",h="[animeStreaming] show list with news",b="[animeStreaming] show more information of this anime",g="[animeStreaming] get name of the anime and date by tarjeta",N="[animeStreaming] show list with anime by names",y="[animeStreaming] show mame list",w="[animeStreaming] clear all boxes containing the anime details",j="[animeStreaming] add anime at favorite list",k="[animeStreaming] remove anime at favorite list",O={nameList:[],animeList:[],nombreyFecha:[],personajesYDirectores:[],fotos:[],videos:[],episodes:[],news:[],moreInfo:[],buscarAnime:[]},x=t(33),_={listaDeFavoritors:[]},S=Object(o.b)({animeStreaming:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u:case d:return Object(m.a)({},e,{animeList:a.payload});case g:return Object(m.a)({},e,{nombreyFecha:a.payload});case f:return Object(m.a)({},e,{personajesYDirectores:a.payload});case p:return Object(m.a)({},e,{fotos:a.payload});case v:return Object(m.a)({},e,{videos:a.payload});case E:return Object(m.a)({},e,{episodes:a.payload});case h:return Object(m.a)({},e,{news:a.payload});case b:return Object(m.a)({},e,{moreInfo:a.payload});case N:return Object(m.a)({},e,{buscarAnime:a.payload});case y:return Object(m.a)({},e,{nameList:a.payload});case w:return console.log("getClearAllDetail reducerAnime:",O),Object(m.a)({},e,{nombreyFecha:O.nombreyFecha,personajesYDirectores:O.personajesYDirectores,fotos:O.fotos,videos:O.videos,episodes:O.episodes,news:O.news,moreInfo:O.moreInfo});default:return e}},listaDeFavoritors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case j:return Object(m.a)({},e,{listaDeFavoritors:[].concat(Object(x.a)(e.listaDeFavoritors),[a.payload])});case k:return Object(m.a)({},e,{listaDeFavoritors:e.listaDeFavoritors.filter(function(e){return e.id!==a.payload})});default:return e}}}),G=t(17),D=t(29),A={key:"persist-key",storage:t.n(D).a},C=Object(G.a)(A,S),F="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,L=Object(o.d)(C,F(Object(o.a)(l.a))),M=Object(G.b)(L),T=t(8),I=t(0),B=t(2),V=t.n(B),P=t(11),R=t(31),Y=t.n(R).a.create({baseURL:"https://api.jikan.moe/v3"}),H={getTop:function(e){return Y({method:"GET",url:"/top/anime/1/".concat(e)})},getGenre:function(e){return Y({method:"GET",url:"search/anime?genre=".concat(e)})},getCharactersStaff:function(e){return Y({method:"GET",url:"/anime/".concat(e,"/characters_staff")})},getPictures:function(e){return Y({method:"GET",url:"/anime/".concat(e,"/pictures")})},getVideos:function(e){return Y({method:"GET",url:"/anime/".concat(e,"/videos")})},getEpisodes:function(e){return Y({method:"GET",url:"/anime/".concat(e,"/episodes")})},getNews:function(e){return Y({method:"GET",url:"/anime/".concat(e,"/news")})},getMoreInfo:function(e){return Y({method:"GET",url:"/anime/".concat(e,"/moreinfo")})},getbuscarAnimeByName:function(e){return Y({method:"GET",url:"search/anime?q=".concat(e,"&limit=5")})}},U=H.getTop,W=H.getGenre,q=H.getCharactersStaff,z=H.getPictures,J=H.getVideos,X=H.getEpisodes,K=H.getNews,Q=H.getMoreInfo,Z=H.getbuscarAnimeByName,$=function(e){return function(){var a=Object(P.a)(V.a.mark(function a(t){var n,r;return V.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,U(e);case 3:n=a.sent,r=n.data.top,t({type:u,payload:r}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}},a,null,[[0,8]])}));return function(e){return a.apply(this,arguments)}}()},ee=function(e){return function(){var a=Object(P.a)(V.a.mark(function a(t){var n,r;return V.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,W(e);case 3:n=a.sent,r=n.data.results,t({type:d,payload:r}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}},a,null,[[0,8]])}));return function(e){return a.apply(this,arguments)}}()},ae=function(e){return function(){var a=Object(P.a)(V.a.mark(function a(t){var n,r,c,i,s,o;return V.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,q(e);case 3:n=a.sent,r=n.data,c=r.characters,i=r.staff,s=c.slice(0,40),o=i.slice(0,40),t({type:f,payload:{charactersLimit:s,staffLimit:o}}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0);case 13:case"end":return a.stop()}},a,null,[[0,10]])}));return function(e){return a.apply(this,arguments)}}()},te=function(e){return function(){var a=Object(P.a)(V.a.mark(function a(t){var n,r;return V.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,z(e);case 3:n=a.sent,r=n.data.pictures,t({type:p,payload:r}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}},a,null,[[0,8]])}));return function(e){return a.apply(this,arguments)}}()},ne=function(e){return function(){var a=Object(P.a)(V.a.mark(function a(t){var n,r;return V.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,J(e);case 3:n=a.sent,r=n.data.promo,t({type:v,payload:r}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}},a,null,[[0,8]])}));return function(e){return a.apply(this,arguments)}}()},re=function(e){return function(){var a=Object(P.a)(V.a.mark(function a(t){var n,r;return V.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,X(e);case 3:n=a.sent,r=n.data.episodes,t({type:E,payload:r}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}},a,null,[[0,8]])}));return function(e){return a.apply(this,arguments)}}()},ce=function(e){return function(){var a=Object(P.a)(V.a.mark(function a(t){var n,r;return V.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,K(e);case 3:n=a.sent,r=n.data.articles,t({type:h,payload:r}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}},a,null,[[0,8]])}));return function(e){return a.apply(this,arguments)}}()},ie=function(e){return function(){var a=Object(P.a)(V.a.mark(function a(t){var n,r;return V.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Q(e);case 3:n=a.sent,r=n.data.moreinfo,t({type:b,payload:r}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}},a,null,[[0,8]])}));return function(e){return a.apply(this,arguments)}}()},se=function(e){return function(){var a=Object(P.a)(V.a.mark(function a(t){var n,r;return V.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Z(e);case 3:n=a.sent,r=n.data.results,t({type:N,payload:r}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}},a,null,[[0,8]])}));return function(e){return a.apply(this,arguments)}}()},oe=function(e,a,t){return function(n){n({type:g,payload:{name:e,date:a,id:t}})}},le=function(e){return function(a){a({type:y,payload:e})}},me=function(){return function(e){e({type:w})}},ue=function(e,a,t,n){return function(r){r({type:j,payload:{id:e,img:a,name:t,date:n}})}},de=function(e){return function(a){a({type:k,payload:e})}},fe=function(){return{actGetTop:$,actGetGenre:ee,actGetCharactersStaff:ae,actGetPictures:te,actGetVideos:ne,actGetEpisodes:re,actGetNews:ce,actGetMoreInfo:ie,actGetbuscarAnimeByName:se,actGetNameAndDate:oe,actGetNameList:le,actgetClearAllDetail:me,actGetAddAnimeFavorite:ue,actGetRemoveAnimeFavorite:de}},pe=function(){var e=Object(I.g)(),a=Object(s.b)(),t=Object(s.c)(function(e){return e.animeStreaming}),n=t.nombreyFecha,r=t.personajesYDirectores,c=t.fotos,i=t.videos,o=t.episodes,l=t.news,m=t.moreInfo,u=Object(s.c)(function(e){return e.listaDeFavoritors}).listaDeFavoritors,d=fe(),f=d.actGetNameAndDate,p=d.actGetCharactersStaff,v=d.actGetPictures,E=d.actGetVideos,h=d.actGetEpisodes,b=d.actGetNews,g=d.actGetMoreInfo,N=d.actgetClearAllDetail,y=d.actGetAddAnimeFavorite,w=d.actGetRemoveAnimeFavorite,j=u.find(function(e){return e.id===n.id});return{nombreyFecha:n,personajesYDirectores:r,fotos:c,videos:i,episodes:o,news:l,moreInfo:m,listaDeFavoritors:u,handleNameAndDate:function(t,n,r){a(N()),a(f(t,n,r)),a(p(r)),a(v(r)),a(E(r)),a(h(r)),setTimeout(function(){a(b(r)),a(g(r)),e("/".concat(r))},600)},handleFavoriteList:function(e,t,n,r,c){console.log("hola maria"),e.preventDefault();var i=u.find(function(e){return e.id===t});console.log(i),a(i?w(t):y(t,n,r,c))},buscarEnlaLista:j}},ve=function(e){var a=pe().handleNameAndDate;return r.a.createElement("div",{onClick:function(){return a(e.title,e.start_date,e.mal_id)},className:"tarjeta"},r.a.createElement("div",null,r.a.createElement("div",{className:"img1",style:{backgroundImage:"url(".concat(e.image_url,")")}}),r.a.createElement("div",{className:"img2",style:{backgroundImage:"url(".concat(e.image_url,")")}}),r.a.createElement("div",{className:"title"},e.title),r.a.createElement("div",{className:"text-tarjeta"},"Start date: ",e.start_date,r.a.createElement("br",null),"Start date: ",e.end_date?e.end_date:"Unknown date"),r.a.createElement("div",{className:"score"},e.score),r.a.createElement("div",{className:"rank"},e.rank),r.a.createElement("div",{className:"catagory"},e.type),r.a.createElement("div",{className:"views"},e.members)))},Ee=t(6),he=function(){var e=Object(s.b)(),a=Object(s.c)(function(e){return e.animeStreaming}),t=a.animeList,r=a.nameList,c=fe(),i=c.actGetTop,o=c.actGetGenre,l=c.actGetNameList,m=Object(n.useState)(!1),u=Object(Ee.a)(m,2),d=u[0],f=u[1],p=Object(n.useState)(!1),v=Object(Ee.a)(p,2),E=v[0],h=v[1];Object(n.useEffect)(function(){0===t.length&&(e(l("TV")),e(i("tv")))},[]);return{click:d,handleClick:function(){return f(!d)},closeMobileMenu:function(){return f(!1)},dropdown:E,onMouseEnter:function(){window.innerWidth<960?h(!1):h(!0)},onMouseLeave:function(){window.innerWidth,h(!1)},animeList:t,nameList:r,handleAnimeList:function(a,t){e(i(a)),e(l(t))},handleAnimeByGenre:function(a,t){e(o(a)),e(l(t))}}},be=function(){var e=he(),a=e.animeList,t=e.nameList;return r.a.createElement("div",{className:"anime_contenedor"},r.a.createElement("h3",null," ",t," "),r.a.createElement("div",{className:"container_card"},a.map(function(e,a){return r.a.createElement(ve,Object.assign({key:a},e))})))},ge=function(){var e=pe(),a=e.nombreyFecha,t=e.personajesYDirectores,n=e.fotos,c=e.videos,i=e.episodes,s=e.news,o=e.moreInfo,l=e.handleFavoriteList,m=e.buscarEnlaLista;return r.a.createElement("div",{className:"detail_contenedor"},r.a.createElement("div",{className:"detail_main"},r.a.createElement("div",{className:"fotos"},r.a.createElement("img",{src:n[0].large,alt:"anime cover"})),r.a.createElement("div",{className:"text"},r.a.createElement("div",{className:"text_title1"},r.a.createElement("h2",null,a.name),r.a.createElement("h3",null,a.date)),r.a.createElement("div",{className:"text_title2"},r.a.createElement("h2",null,"M\xe1s informacion"),r.a.createElement("button",{style:m&&{color:"#e63946"},className:"css-button-3d--red",onClick:function(e){return l(e,a.id,n[0].large,a.name,a.date)}},"Agregar a Favoritos")),r.a.createElement("div",{className:"text_content"},r.a.createElement("h3",null,o||"Lo lamento capo, no tengo mucha informacion de este animu")),r.a.createElement("div",{className:"text_character"},r.a.createElement("div",{className:"text_characters"},r.a.createElement("h3",null,"Personajes:"),r.a.createElement("div",{className:"avatar-group"},t.charactersLimit.map(function(e,a){return r.a.createElement("div",{key:a,className:"avatar "},r.a.createElement("span",{className:"tooltiptext"},e.name),r.a.createElement("img",{src:e.image_url,alt:"avatar"}))}))),r.a.createElement("div",{className:"text_staff"},r.a.createElement("h3",null,"Directores:"),r.a.createElement("div",{className:"avatar-group"},t.staffLimit.map(function(e,a){return r.a.createElement("div",{key:a,className:"avatar"},r.a.createElement("span",{className:"tooltiptext"},e.name),r.a.createElement("img",{src:e.image_url,alt:"avatar"}))})))),c[0]&&r.a.createElement("a",{style:{textDecoration:"none"},href:c[0].video_url,className:"btn btn-trailer"},"Trailer del anime"))),r.a.createElement("div",{className:"detail_episodes"},r.a.createElement("h3",{className:"detail_episodes_title"},a.name,r.a.createElement("span",{style:{marginLeft:"8px"}},"Lista de Episodios")),r.a.createElement("div",{className:"cards_episodes"},i.map(function(e,a){return r.a.createElement("div",{key:a,className:"card_episode"},r.a.createElement("a",{style:{textDecoration:"none"},href:e.video_url}),"Ep-",e.episode_id)}))),r.a.createElement("div",{className:"detail_new"},r.a.createElement("h3",null," NOTICIAS DE ESTE ANIME! "),r.a.createElement("div",{className:"detail_new_deck"},s.map(function(e,a){return r.a.createElement("div",{key:a,className:"deck"},r.a.createElement("a",{style:{textDecoration:"none"},href:e.url},r.a.createElement("div",{className:"tarjeta-new"},r.a.createElement("header",{className:"cardHeader"},r.a.createElement("span",{className:"cardHeader_account"},"@",e.title),r.a.createElement("span",{className:"cardHeader_date"},e.date)),r.a.createElement("div",{className:"cardBody"},r.a.createElement("p",{className:"cardText"},e.intro),r.a.createElement("section",{className:"cardStats"},r.a.createElement("span",{className:"cardStats_stat cardStats_stat-comments"},e.comments))))))}))))},Ne=function(){return r.a.createElement("div",{className:"img-notFound"},r.a.createElement("img",{src:"https://testbuzz.in/static/media/IMG-20421.00469e5f.png",alt:"EROR404"}),r.a.createElement("div",{className:"text-notFound"},"tu lista de preferidos esta vacia, te recomiendo agregar algunos  ",r.a.createElement(T.b,{to:"/"},"Click aqui para volver al menu")))},ye=function(e){var a=pe().handleNameAndDate;return r.a.createElement("div",{onClick:function(){return a(e.name,e.start_date,e.id)},className:"favorite_card",style:{marginTop:"20px"}},r.a.createElement("div",{className:"favorite_img"},r.a.createElement("img",{src:e.img,alt:"img_favorite"})),r.a.createElement("div",{className:"favorite_text"},r.a.createElement("h2",null,e.name)))},we=function(){var e=pe().listaDeFavoritors;return r.a.createElement("div",{className:"favorite_contenedor"},r.a.createElement("h3",null," Tu lista de animes favoritos "),r.a.createElement("div",{className:"container_card",style:{marginTop:"20px"}},e.length>0?e.map(function(e,a){return r.a.createElement(ye,Object.assign({key:a},e))}):r.a.createElement(Ne,null)))},je=t(14),ke=function(){var e=Object(s.b)(),a=fe().actGetbuscarAnimeByName,t=Object(s.c)(function(e){return e.animeStreaming}).buscarAnime,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(n.useState)(e),t=Object(Ee.a)(a,2),r=t[0],c=t[1];return[r,function(e){var a=e.target;c(Object(m.a)({},r,Object(je.a)({},a.name,a.value)))},function(){c(e)}]}({animeName:""}),c=Object(Ee.a)(r,2),i=c[0],o=c[1],l=i.animeName;Object(n.useEffect)(function(){e(a(l))},[a,l,e]);var u=Object(n.useState)(!1),d=Object(Ee.a)(u,2),f=d[0],p=d[1],v=Object(n.useRef)(null);return{animeName:l,handleInputChange:o,buscarAnime:t,searchContainer:v,showSearchDiv:f,onMouseEnterSearch:function(){p(!0)},onMouseLeaveSearch:function(){p(!1)}}},Oe=function(){var e=ke().buscarAnime;return r.a.createElement("div",{className:"searchWindow_contenedor"},e.map(function(e,a){return r.a.createElement("div",{key:a,className:"search-tarjeta"},r.a.createElement("img",{src:e.image_url,alt:"art"}),r.a.createElement("div",{className:"search-content"},r.a.createElement("div",{className:"search-header"},r.a.createElement("h1",{className:"search-title"},e.title),r.a.createElement("h4",{className:"search-info"},"score: ",e.score)),r.a.createElement("p",{className:"search-desc"},e.synopsis),r.a.createElement("div",{style:{marginTop:"15px"}},r.a.createElement("a",{href:e.url,style:{textDecoration:"none",textAlign:"end"},className:"btn btn-more-infor"},"Ver Mas"))))}))},xe=function(){var e=ke(),a=e.animeName,t=e.handleInputChange,n=e.showSearchDiv,c=e.onMouseEnterSearch,i=e.onMouseLeaveSearch;return r.a.createElement("div",{className:"search-toggle"},r.a.createElement("input",{onFocus:c,onBlur:i,type:"text",placeholder:"Buscar un anime",name:"animeName",onChange:t,value:a,autoComplete:"off"}),n&&a.length>3&&r.a.createElement(Oe,null))},_e=[{name:"Accion",number:1},{name:"Aventura",number:2},{name:"Comedia",number:4},{name:"Misterio",number:7},{name:"Drama",number:8},{name:"Terror",number:14}],Se=function(){var e=he(),a=e.click,t=e.handleClick,n=e.closeMobileMenu,c=e.handleAnimeByGenre;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{onClick:t,className:a?"dropdown-menu clicked":"dropdown-menu"},_e.map(function(e,a){return r.a.createElement("li",{onClick:function(){return c(e.number,e.name)},key:a},r.a.createElement(T.b,{to:"/",className:"dropdown-link",onClick:n},e.name))})))},Ge=function(){var e=he(),a=e.click,t=e.handleClick,n=e.closeMobileMenu,c=e.dropdown,i=e.onMouseEnter,s=e.onMouseLeave,o=e.handleAnimeList;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement(T.b,{onClick:function(){return o("tv","TV")},to:"/",className:"navbar-logo"},r.a.createElement("span",null,"IMDB"),"VERSION-ANIME"),r.a.createElement("div",{className:"menu-icon",onClick:t}),r.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},r.a.createElement("li",{onClick:function(){return o("upcoming","Proximamente...")},className:"nav-item"},r.a.createElement(T.b,{to:"/",className:"nav-links",onClick:n},"Por venir...")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(T.b,{to:"/listaFavoritos",className:"nav-links",onClick:n},"Mis preferidos")),r.a.createElement("li",{onClick:function(){return o("airing","Mas Famosos..")},className:"nav-item"},r.a.createElement(T.b,{to:"/",className:"nav-links",onClick:n},"Mas Famoso")),r.a.createElement("li",{className:"nav-item",onMouseEnter:i,onMouseLeave:s},r.a.createElement("div",{className:"nav-links",onClick:n},"Genero"),c&&r.a.createElement(Se,null)))))},De=function(){return r.a.createElement("div",null,r.a.createElement(T.a,null,r.a.createElement("div",{className:"covertor"},r.a.createElement(Ge,null),r.a.createElement("div",{className:"stream"},r.a.createElement(xe,null),r.a.createElement(I.d,null,r.a.createElement(I.b,{path:"/",element:r.a.createElement(be,null)}),r.a.createElement(I.b,{path:"/listaFavoritos",element:r.a.createElement(we,null)}),r.a.createElement(I.b,{path:"/:id",element:r.a.createElement(ge,null)}),r.a.createElement(I.b,{element:r.a.createElement(I.a,{to:"/"})}))))))},Ae=t(32);var Ce=function(){return r.a.createElement(s.a,{store:L},r.a.createElement(Ae.a,{persistor:M},r.a.createElement(De,null)))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ce,null)),document.getElementById("root"))}},[[34,2,1]]]);
//# sourceMappingURL=main.f1db06aa.chunk.js.map