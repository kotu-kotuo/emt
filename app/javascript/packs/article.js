import $ from 'jquery'
import axios from 'modules/axios'


$(function () {
  $(window).on('scroll', function () {

    // #create いいねをつけたいときの処理
    $('.inactive-heart').off('click');
    $('.inactive-heart').on('click', (e) => {
    e.preventDefault();
    const dataset = $(e.currentTarget).data()
    const articleId = dataset.articleId
    axios.post(`/articles/${articleId}/like`)
    .then((response) => {
      if (response.data.status === 'ok') {
        $(`#inactive-heart${articleId}`).addClass('hidden');
        $(`#active-heart${articleId}`).removeClass('hidden');
      }
    })
    .catch((e) => {
      window.alert('Error')
      console.log(e)
    })
  })

  // #destroy いいねを外したいときの処理
  $('.active-heart').off('click');
  $('.active-heart').on('click', (e) => {
    e.preventDefault();
    const dataset = $(e.currentTarget).data()
    const articleId = dataset.articleId
    axios.delete(`/articles/${articleId}/like`)
    .then((response) => {
      if (response.data.status === 'ok') {
        $(`#active-heart${articleId}`).addClass('hidden');
        $(`#inactive-heart${articleId}`).removeClass('hidden');
      }
    })
    .catch((e) => {
      window.alert('Error')
      console.log(e)
    })
  })
  })
})


document.addEventListener('DOMContentLoaded', () => {

    // #create いいねをつけたいときの処理
  $('.inactive-heart').on('click', (e) => {
    e.preventDefault();
    const dataset = $(e.currentTarget).data()
    const articleId = dataset.articleId
    axios.post(`/articles/${articleId}/like`)
    .then((response) => {
      if (response.data.status === 'ok') {
        $(`#inactive-heart${articleId}`).addClass('hidden');
        $(`#active-heart${articleId}`).removeClass('hidden');
      }
    })
    .catch((e) => {
      window.alert('Error')
      console.log(e)
    })
  })

  // #destroy いいねを外したいときの処理
  $('.active-heart').on('click', (e) => {
    e.preventDefault();
    const dataset = $(e.currentTarget).data()
    const articleId = dataset.articleId
    axios.delete(`/articles/${articleId}/like`)
    .then((response) => {
      if (response.data.status === 'ok') {
        $(`#active-heart${articleId}`).addClass('hidden');
        $(`#inactive-heart${articleId}`).removeClass('hidden');
      }
    })
    .catch((e) => {
      window.alert('Error')
      console.log(e)
    })
  })
})



// $(function () {
//   // #create いいねをつけたいときの処理
//    $('.inactive-heart').on('click', (e) => {
//      e.preventDefault();
//      const dataset = $(e.currentTarget).data()
//      const articleId = dataset.articleId
//      axios.post(`/articles/${articleId}/like`)
//      .then((response) => {
//        if (response.data.status === 'ok') {
//          $(`#inactive-heart${articleId}`).addClass('hidden');
//          $(`#active-heart${articleId}`).removeClass('hidden');
//          console.log('11記事以降ハート')
//        }
//      })
//      .catch((e) => {
//        window.alert('Error')
//        console.log(e)
//      })
//    })

//    // #destroy いいねを外したいときの処理
//    $('.active-heart').on('click', (e) => {
//      e.preventDefault();
//      const dataset = $(e.currentTarget).data()
//      const articleId = dataset.articleId
//      axios.delete(`/articles/${articleId}/like`)
//      .then((response) => {
//        if (response.data.status === 'ok') {
//          $(`#active-heart${articleId}`).addClass('hidden');
//          $(`#inactive-heart${articleId}`).removeClass('hidden');
//          console.log('11記事以降削除')
//        }
//      })
//      .catch((e) => {
//        window.alert('Error')
//        console.log(e)
//      })
//    })
// })

// $(function () {
//   $(window).on('scroll', function () {
//     // #create いいねをつけたいときの処理
//     $('.inactive-heart').off('click');
//     $('.inactive-heart').on('click', function() {
//       console.log($(this));
//     })
//   })
// })









// $(function(){
//   $(window).on('scroll', function (){
//       //$(".article").each(function(){
//       // var ePos = $(this).offset().top;
//       var scroll = $(window).scrollTop();
//       // var windowHeight = $(window).height();
//       if (scroll % 30 < 1){

//       $('.inactive-heart').each(function (index, element) {
//         const likeData = $(element).data()
//         const articleId = likeData.articleId
//         axios.get(`/articles/${articleId}/like`)
//           .then((response) => {
//             const inActiveStatus = response.data.hasLiked
//             if ( inActiveStatus === false ) {
//               $(element).removeClass('hidden')
//             }
//           })
//       })

//       // ロード時にいいねされているハートを配列で取得
//       $('.active-heart').each(function (index, element) {
//         const likeData = $(element).data()
//         const articleId = likeData.articleId
//         axios.get(`/articles/${articleId}/like`)
//           .then((response) => {
//             const activeStatus = response.data.hasLiked
//             if ( activeStatus === true) {
//               $(element).removeClass('hidden')
//             }
//           })
//       })

//       }
//   //   });
//   });
// });


// $(function(){
//     setInterval(function(){
//         $('.inactive-heart').each(function (index, element) {
//         const likeData = $(element).data()
//         const articleId = likeData.articleId
//         axios.get(`/articles/${articleId}/like`)
//           .then((response) => {
//             const inActiveStatus = response.data.hasLiked
//             if ( inActiveStatus === false ) {
//               $(element).removeClass('hidden')
//             }
//           })
//       })

//       // ロード時にいいねされているハートを配列で取得
//       $('.active-heart').each(function (index, element) {
//         const likeData = $(element).data()
//         const articleId = likeData.articleId
//         axios.get(`/articles/${articleId}/like`)
//           .then((response) => {
//             const activeStatus = response.data.hasLiked
//             if ( activeStatus === true) {
//               $(element).removeClass('hidden')
//             }
//           })
//       })
//     },1000);
// });



// $(function(){
//   $(window).on('scroll', function (){
//     $(".article").each(function () {
//       if ($('.article').find('.active-heart').css('display') == 'none' && $('.article').find('.inactive-heart').css('display') == 'none') {

//         $('.inactive-heart').each(function (index, element) {
//           const likeData = $(element).data()
//           const articleId = likeData.articleId
//           axios.get(`/articles/${articleId}/like`)
//             .then((response) => {
//               const inActiveStatus = response.data.hasLiked
//               if ( inActiveStatus === false ) {
//                 $(element).removeClass('hidden')
//               }
//             })
//         })

//         // ロード時にいいねされているハートを配列で取得
//         $('.active-heart').each(function (index, element) {
//           const likeData = $(element).data()
//           const articleId = likeData.articleId
//           axios.get(`/articles/${articleId}/like`)
//             .then((response) => {
//               const activeStatus = response.data.hasLiked
//               if ( activeStatus === true) {
//                 $(element).removeClass('hidden')
//               }
//             })
//         })
//     }




//     });
//   });
// });
