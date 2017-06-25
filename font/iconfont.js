(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-browse" viewBox="0 0 1024 1024">'+""+'<path d="M812.896 528.896C812.16 530.944 730.816 736 504.16 736c-225.44 0-305.248-198.24-309.696-209.376-3.2-6.4-2.944-21.28 1.376-29.92C196.736 494.656 287.776 288 504.16 288c215.296 0 304.384 199.776 309.248 210.752 3.296 6.176 3.552 21.344-0.512 30.144m58.112-57.888C866.72 460.928 762.24 224 504.16 224 246.08 224 141.344 461.44 137.92 469.568c-12.704 24.896-13.056 60.896-1.984 82.752 0.96 2.496 98.048 247.68 368.224 247.68 270.144 0 367.552-245.696 367.552-246.016 11.712-24.832 10.912-61.6-0.704-82.976"  ></path>'+""+'<path d="M568.16 551.968a64.064 64.064 0 0 1-64 64.032c-35.296 0-64-28.704-64-64.032v-71.904c0-35.328 28.704-64.064 64-64.064s64 28.736 64 64.064v71.904z m-64-199.968c-70.592 0-128 57.44-128 128.064v71.904a128.16 128.16 0 0 0 128 128.032c70.592 0 128-57.44 128-128.032v-71.904a128.16 128.16 0 0 0-128-128.064z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-brush" viewBox="0 0 1024 1024">'+""+'<path d="M766.88 435.264l-176.608-176.64 66.72-66.752 176.544 176.704-66.656 66.688zM401.44 800.96L224.64 624.192l0.256 0.064L545.024 303.904l176.64 176.64L401.376 800.96zM224 801.92v-87.872l87.712 87.68-87.68 0.192z m655.04-478.528l-176.768-176.736A60.96 60.96 0 0 0 656.96 128a63.968 63.968 0 0 0-45.12 18.848L179.584 579.008a63.936 63.936 0 0 0-17.92 54.368c-0.768 2.688-1.696 5.312-1.696 8.256v160.288c0 35.136 28.576 63.68 63.712 63.68h160.32c2.88 0 5.504-0.896 8.192-1.632 2.976 0.416 5.952 0.832 8.96 0.832 16.416 0 32.896-6.272 45.44-18.816l432.16-432.16a64 64 0 0 0 0.224-90.432z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-enter" viewBox="0 0 1024 1024">'+""+'<path d="M693.792 498.24l-320-297.664a32 32 0 0 0-43.584 46.848l295.36 274.752-295.84 286.848a31.968 31.968 0 1 0 44.544 45.92l320-310.272a31.968 31.968 0 0 0-0.48-46.4"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-like" viewBox="0 0 1024 1024">'+""+'<path d="M797.184 518.496l-284.384 294.016-284.16-292A162.752 162.752 0 0 1 192 417.6C192 328.512 263.808 256 352 256a159.36 159.36 0 0 1 133.28 72.16L512 368.64l26.72-40.48A159.488 159.488 0 0 1 672 256c88.224 0 160 72.512 160 161.6 0 37.536-12.992 74.08-34.816 100.896M672 192a222.72 222.72 0 0 0-160 67.712A222.624 222.624 0 0 0 352 192c-123.52 0-224 101.216-224 225.6 0 52.288 18.176 103.232 52.96 145.536l285.952 293.984a62.4 62.4 0 0 0 45.088 19.168c17.12 0 33.12-6.816 45.12-19.136l287.744-296.064A226.816 226.816 0 0 0 896 417.6C896 293.216 795.52 192 672 192"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-message" viewBox="0 0 1024 1024">'+""+'<path d="M800 704v17.888h-184.128c-29.664 0-61.184 18.848-74.912 44.832L512 821.44l-28.96-54.752c-13.728-25.952-45.248-44.8-74.912-44.8H224V256h576v448z m5.312-512H218.688C186.336 192 160 219.488 160 253.248v471.392c0 33.76 26.4 61.248 58.816 61.248h189.312c5.92 0 15.712 5.728 18.368 10.752l38.048 71.968 2.912 4.544c11.168 14.528 27.392 22.848 44.544 22.848 17.152 0 33.376-8.32 44.544-22.848l40.96-76.512c2.464-4.608 11.968-10.752 18.368-10.752h189.472c32.352 0 58.656-27.488 58.656-61.248V253.248C864 219.488 837.664 192 805.312 192z"  ></path>'+""+'<path d="M336 448c-12.352 0-23.488 4.8-32 12.448A47.68 47.68 0 0 0 288 496c0 14.176 6.24 26.752 16 35.552a47.68 47.68 0 0 0 32 12.448 48 48 0 0 0 0-96M688 448a48 48 0 0 0 0 96c12.352 0 23.488-4.8 32-12.448 9.76-8.8 16-21.376 16-35.552a47.68 47.68 0 0 0-16-35.552 47.68 47.68 0 0 0-32-12.448M512 448c-12.352 0-23.488 4.8-32 12.448a47.68 47.68 0 0 0-16 35.552c0 14.176 6.24 26.752 16 35.552A47.68 47.68 0 0 0 512 544c12.352 0 23.488-4.8 32-12.448 9.76-8.8 16-21.376 16-35.552a47.68 47.68 0 0 0-16-35.552A47.68 47.68 0 0 0 512 448"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-mine" viewBox="0 0 1024 1024">'+""+'<path d="M512 832a318.432 318.432 0 0 1-215.648-84.256C351.264 729.984 443.008 704 509.952 704c68.064 0 162.048 26.976 216.608 44.704A318.24 318.24 0 0 1 512 832m0-224c-52.928 0-96-43.104-96-96.064v-95.872A96.16 96.16 0 0 1 512 320c52.928 0 96 43.104 96 96.064v95.872A96.16 96.16 0 0 1 512 608m0-416c176.448 0 320 143.552 320 320a318.016 318.016 0 0 1-59.136 184.704c-34.432-12-106.944-35.52-178.656-48.16C640.608 620.48 672 570.016 672 511.936v-95.872A160.224 160.224 0 0 0 512 256c-88.224 0-160 71.808-160 160.064v95.872c0 57.664 30.944 107.904 76.832 136.064-70.656 12.16-142.464 35.104-178.528 47.584A317.952 317.952 0 0 1 192 512c0-176.448 143.552-320 320-320m0-64C300.256 128 128 300.256 128 512s172.256 384 384 384 384-172.256 384-384S723.744 128 512 128"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-return" viewBox="0 0 1024 1024">'+""+'<path d="M694.272 809.024l-295.808-286.848 295.36-274.752a32 32 0 0 0-43.616-46.848l-320 297.696a32 32 0 0 0-0.512 46.4l320 310.304a32.032 32.032 0 0 0 44.576-45.952"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-packup" viewBox="0 0 1024 1024">'+""+'<path d="M793.024 710.272a32 32 0 1 0 45.952-44.544l-310.304-320a32 32 0 0 0-46.4 0.48l-297.696 320a32 32 0 0 0 46.848 43.584l274.752-295.328 286.848 295.808z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)