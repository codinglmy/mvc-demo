import './app2.css'
import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click','li',(e)=>{
    // console.log(e.target)
    // console.log(e.currentTarget)
    const $li = $(e.currentTarget)

    $li.addClass('selected').siblings().removeClass('selected')

    const index = $li.index()
    console.log(index)
    $tabContent.children()
    .eq(index).addClass('active')//.show()//.css({display:'block'})
    .siblings().removeClass('active')//.hide()//.css({display:'none'})
    // css({display:'block'}) = show()
    // css({display:'none'}) = hide()
    // 但是永远不用这三个API,为什么？因为：
    // “行为和样式分离思想”:
    // JS就是用来管行为的,你样式什么样跟我没关系
    // CSS就是用来管样式的,你行为功能什么样跟我没关系
    // 以后改也好改 ---→ 通过addClass()和removeClass()来实现
})

$tabBar.children().eq(0).trigger('click')
// 网页第一次打开,或者刷新网页后,既不显示内容1,也不现实内容2
// 1. 可以直接在html里改：<li class="selected">1</li> 和 <li class="active">内容1</li>
// 2. 也能像上面这样用JS改,trigger就是触发的意思，这里代表触发一次点击事件