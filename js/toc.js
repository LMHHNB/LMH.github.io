const tocEl = document.querySelector('#toc')
const contentEl = document.querySelector('#postBody')

window.addEventListener('scroll', adjustToc)
window.addEventListener('resize', adjustToc)
window.addEventListener('resize', updateData)
window.addEventListener('load', updateData)


let tocOffsetTop = getOffsetTop(tocEl)
let articleHeight = contentEl.offsetHeight;
let tocHeight = tocEl.offsetHeight;

let breakPoint1 = tocOffsetTop
let breakPoint2 = articleHeight + tocOffsetTop - tocHeight

function updateData() {
  tocOffsetTop = getOffsetTop(tocEl)
  articleHeight = contentEl.offsetHeight;
  tocHeight = tocEl.offsetHeight;

  breakPoint1 = tocOffsetTop
  breakPoint2 = articleHeight + tocOffsetTop - tocHeight
}

function getOffsetTop(el) {
  let offsetTop = 0
  while (el != null) {
    offsetTop += el.offsetTop
    el = el.offsetParent
  }
  return offsetTop
}


function adjustToc() {
  if (window.scrollY < breakPoint1) {
    tocEl.className = 'post-toc'
    tocEl.style.top = '0'
  } else if (window.scrollY < breakPoint2) {
    tocEl.className = 'post-toc--attached'
    tocEl.style.top = '0'
  } else {
    tocEl.className = 'post-toc--bottom'
    tocEl.style.top = articleHeight - tocHeight + 'px'
  }
}

    // 深色模式设置
    function switchNightMode() {
        var body = document.body;
        if(body.classList.contains('dark')){
        document.body.classList.remove('dark');
        localStorage.setItem('dark','0');
        $('#nightMode').removeClass("fa-lightbulb-o").addClass("fa-moon-o");
        return;
        } else {
        document.body.classList.add('dark');
        localStorage.setItem('dark','1');
        $('#nightMode').removeClass("fa-moon-o").addClass("fa-lightbulb-o");
        return;
        }
    }

    /* 深色模式设置 */
    /* 字体颜色变灰白色 */ 
    body.dark .fas,
    body.dark .title,
    body.dark .row .text,
    body.dark article .article-content .summary,
    body.dark .card .card-image .card-title,
    body.dark .fa-moon-o:before,
    body.dark .fa-lightbulb-o:before,
    body.dark article .article-tags .chip,
    body.dark .chip-container .tag-title,
    body.dark div.jqcloud a,
    body.dark .friends-container .tag-title,
    body.dark .frind-ship .title h1,
    body.dark .card .card-content p,
    body.dark .v[data-class=v] .vcount,
    body.dark .v[data-class=v] .vcount .vnum,
    body.dark pre code,
    body.dark h1,
    body.dark h2,
    body.dark h3,
    body.dark h4,
    body.dark h5,
    body.dark h6,
    body.dark li,
    body.dark p,
    body.dark header .side-nav .mobile-head .logo-name,
    body.dark header .side-nav .mobile-head .logo-desc,
    body.dark header .side-nav .menu-list a,
    body.dark .bg-cover .post-title,
    body.dark a
    {
        color: rgba(255, 255, 255, 0.6);
    }

    /* 背景颜色变灰色 */
    body.dark .card,
    body.dark .block-with-text:after
    {
        background-color: #282c34;
    }

    /* 背景颜色变黑色 */
    body.dark,
    body.dark .v[data-class=v] .vcount,
    body.dark #rewardModal .modal-content,
    body.dark .modal,
    body.dark header .side-nav,
    body.dark header .side-nav .menu-list .m-nav-show
    {
        background-color: #12121c;
    }

    /* 改变透明度 */
    body.dark .aplayer{background: #2f3742!important;}
    body.dark img, body.dark strong {
        filter: brightness(.7);
    }
