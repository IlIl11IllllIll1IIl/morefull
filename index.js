
document.addEventListener('DOMContentLoaded', function(){
  var style = `#button {
  display:none;
}
.imgb_vis {
  animation: imgb-animation 15s linear;
}
@keyframes imgb-animation {
  10% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(100px);
  }
  90% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}`;
  addStyle(style);

  var div = document.createElement('div');
  div.id = 'button';
  div.className = 'imgb';
  div.style = 'position:fixed;top:10%;left:-100px;z-index:10';
  div.innerHTML = '<a target="_blank" href="https://sites.google.com/view/pizza3x/" title="More of best Unblocked Games"><img src="https://lh3.googleusercontent.com/jbl9pPUC9J0s5ZO8N4B7BYINlNiyxEYUpU4QIyhiQzgi8UFu3B5B60gWo92y4sm_Kt1PSUZUqln6BOeq40SbhAQ7-wqMDSQL9_LzzVoLMvnEPFhNSHDECwyHOHjZi3PAKcQtnQ5gldhTZ64JeJz-fQyGJysPmE56t-rHqPbEdw7rvlx1JYUBHwjWhz-cMC-zxEzJ8TKWbQ-rgv1Zi92PP8ZmUsiWtdenIIc1bEWUtxjy86rOt8Ue4qVuq_rLsM_NBwgqAMieAj--GzeIrma73DFHasLZBnFrvVVUeedPw6tgLU6Fr-dFwE8075YwxeBEb-QhUZFnZmo22M1NyYe1w6VGn40Yy5QIbPhKDMzqXQZVkhABzkzBlxQJsEqDuwNsOFb3ivxGJDaAjay6F1jru7M823GlEnP0HgrW-HwCe_-bhBt61upkid1Ae4k63KA_JUk-J3dzQuVNskxI3f6ruQ9K5glJFRotRH50VtHglk9o0hwawANxL_qxjV_TX6LQ-4Av_B8SRMe9j1nm8cZaCQEOY1PdKO38-OTzXzcaC4k1lXtAvS9Gux3VMTn-8pH0FSf3vMW2AdSLmL5yl9z4GP1fLIYvF6tMkrWFSOgHVtSfZOixjDtrZDJw57Td8yyNNRwofdyq2ENy2lRTsrpa1b_Rr4yfCYSJoSG6SxgggemSvYvNXIY3BwHOaW-YdmgUbcRFh-yOXGCPMVsFGkCqgTwSHAXUbE7olnYKSfQwKsEcnDiHJfKRB1KLW-0g_9sQA7iGgNiBG3RLnkeFMmZwn9_R5IxfWnkKA3eaPsv0d8iNi9iGFT-g55eXnRNKW_sAN6zZ_ixyJOYJbTI37etk60eg9WG8yiRyo4i7fuht_WNO4oh4VcB7meALWzDp2MokXW36yddE4dSRJZdsOqwwBebcap0qA7iCsewoVaMTYKQ9yGXeT53IW4Jk3HKCxId48Mh5rnZwkJwumoTvt1GJLiDfq44-r4aSiamMc-9BRu2JDcWcOGuft6zHENTX2Nbn8qOdpXCbEXqQBcb2RZTLibvOuxjyfS5vpJYpuJ0-hhjv9ZRxRcVxJbKFEticrcTRmr0uYFQYFva78Qgp1eq4T1jo_5ISHYYKuFviJ1Q-gaF2Rtsx0dPrN08eXrRvGLAGVkk=w648-h81-s-no?authuser=0" width="100" height="15" style="cursor:pointer;" alt="More Unblocked Gamdes"></a>';
  document.body.appendChild(div);

  var image = document.getElementById('button');
  var i = 0;
  var s = ['block', 'none'];
  var t = [15000, 10000];
  show();

  document.querySelector('.imgb').classList.add('imgb_vis');

  function addStyle(styles) {
    var css = document.createElement('style');
    css.type = 'text/css';

    if (css.styleSheet) {
      css.styleSheet.cssText = styles;
    } else {
      css.appendChild(document.createTextNode(styles));
    }

    document.getElementsByTagName('head')[0].appendChild(css);
  }

  function show() {
    i ^= 1;
    image.style.display = s[i];
    setTimeout(show, t[i]);
  }
});
