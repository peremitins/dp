/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
//bg
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-setclasses !*/
 !function(n,e,s){function o(n,e){return typeof n===e}function a(){var n,e,s,a,i,l,r;for(var c in f)if(f.hasOwnProperty(c)){if(n=[],e=f[c],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(s=0;s<e.options.aliases.length;s++)n.push(e.options.aliases[s].toLowerCase());for(a=o(e.fn,"function")?e.fn():e.fn,i=0;i<n.length;i++)l=n[i],r=l.split("."),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),t.push((a?"":"no-")+r.join("-"))}}function i(n){var e=r.className,s=Modernizr._config.classPrefix||"";if(c&&(e=e.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");e=e.replace(o,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(e+=" "+s+n.join(" "+s),c?r.className.baseVal=e:r.className=e)}var t=[],f=[],l={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var s=this;setTimeout(function(){e(s[n])},0)},addTest:function(n,e,s){f.push({name:n,fn:e,options:s})},addAsyncTest:function(n){f.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var r=e.documentElement,c="svg"===r.nodeName.toLowerCase();a(),i(t),delete l.addTest,delete l.addAsyncTest;for(var u=0;u<Modernizr._q.length;u++)Modernizr._q[u]();n.Modernizr=Modernizr}(window,document);

 (function(window) {
  'use strict';

  window.addEventListener('load', function() {
      var videos = document.querySelectorAll('video.header__bg');
      for (var i = 0; i < videos.length; i++) {
          setVideoSource(videos[i]);
          addListeners(videos[i]);
          setPosterImage(videos[i]);

      }
  });

  // Set source urls
  function setVideoSource(video) {
      var sources = video.getElementsByTagName('source');
      if (window.Modernizr && window.Modernizr.on) {
          window.Modernizr.on('videoautoplay', function() {
              for (var j = 0; j < sources.length; j++) {
                  var source = sources[j];
                  if (source.dataset.src !== undefined) {
                      var newSource = document.createElement("source");
                      newSource.setAttribute("src", source.dataset.src);
                      video.appendChild(newSource);
                  }
              }
          });
      }
  }

  // Add event listeners
  function addListeners(video) {
      if (video.readyState == 4) {
          video.play();
      } else {
          video.addEventListener('canplay', function() {
              this.play();
              this.classList.add('load-complete');
          });
      }
  }

  // Set poster image
  function setPosterImage(video) {
      var posters = [];
      var posterImages = video.getElementsByTagName('poster-source');
      var devicePixelRatio = window.devicePixelRatio ||
          Math.round(window.screen.availWidth / document.documentElement.clientWidth);

      for (var k = 0; k < posterImages.length; k++) {
          var poster = posterImages[k];
          var media = poster.getAttribute("media");
          if (!media || (window.matchMedia && window.matchMedia(media).matches)) {
              posters.push(poster);
          }
      }

      // if poster defined
      if (posters.length > 0) {
          var sourcesets = posters[0].getAttribute('srcset').split(",");
          var url;
          var pixelRatio = 0;
          if (sourcesets.length > 0) {
              for (var l = 0; l < sourcesets.length; l++) {
                  var sourceDef = sourcesets[l].trim().split(" ");
                  var targetDensity = (sourceDef[1] !== undefined) ? parseFloat(sourceDef[1].replace('x', '')) :
                      1;
                  if (Math.abs(window.devicePixelRatio - targetDensity) <= Math.abs(devicePixelRatio -
                          pixelRatio) ||
                      pixelRatio === 0) {
                      pixelRatio = targetDensity;
                      url = sourceDef[0].trim();
                  }
              }
          }
      }

      // Load poster image
      var posterImage = new Image();
      posterImage.setAttribute("src", url);
      posterImage.addEventListener('load', function() {
          video.classList.add('poster-loaded');
      })

      // Replace existing poster image
      video.setAttribute("poster", url);
  }
}(window));

// btn-anim
const menuBtn = document.querySelector('.header__btn');
const asideMenu = document.querySelector('.aside-menu');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  asideMenu.classList.toggle('active');
  
  if (menuBtn.classList.contains('active')) {
    header.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    header.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});



//bg-hexagon

function createHexagon() {
  let main = document.querySelector('.main');
  let mainBg = document.querySelector('.main__bg');
  let row = document.createElement('div');
  let hexagon = document.createElement('div');

  row.classList.add('row');
  hexagon.classList.add('hexagon');

  let widthWindow = document.body.clientWidth;
  let heightWindow = main.offsetHeight;

  let quantityWidth = Math.ceil(widthWindow / 150);
  let quantityHeight = Math.ceil(heightWindow / 136);

  mainBg.style.opacity = '1';
  
  for (k = 0;k < quantityWidth + 1;k++) {
    row.appendChild(hexagon.cloneNode(true));
  }
  for (let i = 0;i < quantityHeight + 1;i++) {
    mainBg.appendChild(row.cloneNode(true));
  }
}

setTimeout(createHexagon, 5000);

// animation-footer

const heightFull = document.body.scrollHeight;
const footer = document.querySelector('.footer');

window.addEventListener('scroll', function() {
  if (pageYOffset >= heightFull - footer.scrollHeight) {
    
    footer.classList.add('active');
    console.log('sdgf');
    
  }
})

//body overflow-hidden

if (asideMenu.classList.contains('active')) {
  console.log('sdfg');
  
  document.body.style.overflow = 'hidden';
}
//# sourceMappingURL=main.js.map
