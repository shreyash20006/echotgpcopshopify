/* Echo Merch theme JS: shatter hero, countdown, counter, reveal, gallery, name field */
(function(){
 var q=function(s,r){return(r||document).querySelector(s)},qa=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
 var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
 /* reveal on scroll */
 var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12}):null;
 qa('.card,.ed,.how div,.moq,.pd,.row').forEach(function(e){e.classList.add('rv');io?io.observe(e):e.classList.add('in')});
 /* name field: A-Z, space, dot only */
 qa('[data-name]').forEach(function(i){i.addEventListener('input',function(){i.value=i.value.toUpperCase().replace(/[^A-Z .]/g,'')})});
 /* gallery thumbs */
 qa('.thumbs button').forEach(function(b){b.addEventListener('click',function(){var im=q('#bigimg');if(im){im.src=b.dataset.full;im.removeAttribute('srcset')}qa('.thumbs button').forEach(function(x){x.classList.toggle('on',x===b)})})});
 /* countdown */
 var cd=q('[data-countdown]');
 if(cd){var dl=new Date(cd.dataset.countdown).getTime();var tick=function(){var s=Math.max(0,Math.floor((dl-Date.now())/1e3));if(isNaN(dl)){cd.innerHTML='';return}
  if(s<=0){cd.innerHTML='<div><b>00</b><small>Closed</small></div>';return}
  cd.innerHTML=[['Days',s/86400],['Hours',s%86400/3600],['Mins',s%3600/60],['Secs',s%60]].map(function(a){return '<div><b>'+String(Math.floor(a[1])).padStart(2,'0')+'</b><small>'+a[0]+'</small></div>'}).join('')};tick();setInterval(tick,1000)}
 /* progress counter + bar */
 var moq=q('.moq');
 if(moq){var run=function(){var c=q('[data-counter]',moq),f=q('[data-fill]',moq),to=+c.dataset.counter||0,t0=performance.now();
  var go=function(x){var k=reduce?1:Math.min(1,(x-t0)/1500);c.textContent=Math.round(to*k);if(k<1)requestAnimationFrame(go)};requestAnimationFrame(go);f.style.width=f.dataset.fill+'%'};
  if(io&&'IntersectionObserver' in window){var o=new IntersectionObserver(function(es){if(es[0].isIntersecting){o.disconnect();run()}},{threshold:.4});o.observe(moq)}else run()}
 /* logo shatter on scroll */
 var sh=q('[data-shatter]');
 if(sh&&!reduce){
  var stg=q('.stage',sh),lb=q('[data-lb]',sh),tx=q('[data-stx]',sh),hn=q('[data-hint]',sh),W=8,R=7,T=[];
  var rd=function(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)},sm=function(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)};
  lb.style.setProperty('--lg','url("'+sh.dataset.logo+'")');
  for(var r=0;r<R;r++)for(var c=0;c<W;c++){var e=document.createElement('div'),i=r*W+c,cx=(c+.5)/W-.5,cy=(r+.5)/R-.5;e.className='tile';
   e.style.cssText='left:'+c*100/W+'%;top:'+r*100/R+'%;width:calc('+100/W+'% + 1px);height:calc('+100/R+'% + 1px);background-size:'+W*100+'% '+R*100+'%;background-position:'+c/(W-1)*100+'% '+r/(R-1)*100+'%';
   lb.appendChild(e);T.push({e:e,cx:cx,cy:cy,rx:rd(i+1)-.5,ry:rd(i+50)-.5,ro:rd(i+99)-.5,d:Math.hypot(cx,cy)*.35+rd(i+7)*.12})}
  var busy=0,go=function(){busy=0;var p=Math.max(0,Math.min(1,(70-sh.getBoundingClientRect().top)/(sh.offsetHeight-stg.offsetHeight))),k=lb.offsetWidth/560;
   T.forEach(function(t){var e=sm((p-.03-t.d*.3)/.6);t.e.style.transform='translate3d('+((t.cx*1400+t.rx*500)*e*k).toFixed(1)+'px,'+((t.cy*1000+t.ry*400)*e*k+e*e*420*k).toFixed(1)+'px,0) rotate('+(t.ro*760*e).toFixed(1)+'deg) scale('+(1-.45*e).toFixed(3)+')';t.e.style.opacity=(1-sm((e-.5)/.5)).toFixed(3)});
   tx.style.opacity=sm((p-.55)/.3);hn.style.opacity=Math.max(0,1-p*8)};
  var rq=function(){if(!busy){busy=1;requestAnimationFrame(go)}};addEventListener('scroll',rq,{passive:true});addEventListener('resize',rq);go()}
})();
