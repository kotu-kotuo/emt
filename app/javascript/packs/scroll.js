import $ from 'jquery'
// import jscroll from 'jscroll'

var $jq = jQuery.noConflict();

$(window).on('scroll', function() {
    var scrollHeight = document.body.clientHeight;
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ( (scrollHeight - scrollPosition) / scrollHeight <= 0.05) {

    $('.jscroll').jscroll({
      contentSelector: '.article-list-index',
      nextSelector: 'span.next:last a'
    });

    }
});
// jQuery(function($){
// });
// document.addEventListener('DOMContentLoaded', () => {


// })

// $('#toggle').on('click', function() {
//   $('#target').toggle("slow");
//   $('#target').css("background","red");
// });





// window.addEventListener('DOMContentLoaded', function(){
//   $('.jscroll').jscroll({
//     // 無限に追加する要素は、どこに入れる？
//     contentSelector: '.jscroll',
//     // 次のページにいくためのリンクの場所は？ ＞aタグの指定
//     nextSelector: 'a.next',
//     // 読み込み中の表示はどうする？
//     loadingHtml: '読み込み中'
//   });
// });
