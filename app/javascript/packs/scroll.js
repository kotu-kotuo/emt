import $ from 'jquery'


// var $jq = jQuery.noConflict();


document.addEventListener('DOMContentLoaded', () => {
  jQuery(function($){
  $(window).on('scroll', function() {
      var scrollHeight = $(document).height();
      var scrollPosition = $(window).height() + $(window).scrollTop();
      if ( (scrollHeight - scrollPosition) / scrollHeight <= 0.05) {

      $('.jscroll').jscroll({
        contentSelector: '.article-list-index',
        nextSelector: 'span.next:last a'
      });

      }
  });
  });


})



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
