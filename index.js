import{a as c,S as u,i as l}from"./assets/vendor-C5l2yoAn.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const f="58335449-1ad808a4bb40cd38f6ceeb973",m="https://pixabay.com/api/",d=e=>{const s={key:f,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return c.get(m,{params:s}).then(o=>o.data)},n={galleryList:document.querySelector(".gallery"),loaderElement:document.querySelector(".loader")},p=new u(".gallery-link",{captionsData:"alt",captionDelay:250});function g(e){return`
<li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info">
        <p class="info-item"><span class="info-value">Likes</span>${e.likes}</p>
        <p class="info-item"><span class="info-value">Views</span>${e.views}</p>
        <p class="info-item"><span class="info-value">Comments</span>${e.comments}</p>
        <p class="info-item"><span class="info-value">Downloads</span>${e.downloads}</p>
      </div>
    </li>
  `}function y(e){return e.map(g).join("")}function h(e){n.galleryList.innerHTML=y(e),p.refresh()}function L(){n.galleryList.innerHTML=""}function v(){n.loaderElement.classList.remove("is-hidden")}function b(){n.loaderElement.classList.add("is-hidden")}const w=document.querySelector(".form");w.addEventListener("submit",e=>{e.preventDefault();const o=new FormData(e.target).get("search-text").trim();if(!o){l.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(),v(),d(o).then(({hits:a})=>{if(a.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(a)}).catch(a=>{console.error("Error fetching images:",a)}).finally(()=>{b()}),e.target.reset()});
//# sourceMappingURL=index.js.map
