import InfiniteScroll from 'infinite-scroll';

var $jq = jQuery.noConflict();

var elem = document.querySelector('.infinite-container');
new InfiniteScroll( elem, {
  path: 'nav.pagination a[rel=next]',
  append: '.infinite-post',
  history: false,
  hideNav: '.pagination',
  status: '.page-load-status',
});
