// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require jquery3
//= require popper
//= require bootstrap

Rails.start()
// Turbolinks.start()
ActiveStorage.start()


import Rails from "@rails/ujs"
// import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import $ from 'jquery'
import axios from 'modules/axios'
// import {
//   listenInactiveHeartEvent,
//   listenActiveHeartEvent
// } from 'modules/handle_heart'



// const handleHeartDisplay = (hasLiked) => {
//   if (hasLiked) {
//     $('.active-heart').removeClass('hidden')
//   } else {
//     $('.inactive-heart').removeClass('hidden')
//   }
// }

// const handleCommentForm = () => {
//   $('.show-comment-form').on('click', () => {
//     $('.show-comment-form').addClass('hidden')
//     $('.comment-text-area').removeClass('hidden')
//   })
// }

// const appendNewComment = (comment) => {
//   $('.comments-container').append(
//     `<div class="article_comment"><p>${escape(comment.content)}</p></div>`
//   )
// }

document.addEventListener('DOMContentLoaded', () => {
  // #create いいねをつけたいときの処理
  $('.inactive-heart').on('click', (e) => {
    e.preventDefault();
    const dataset = $(e.currentTarget).data()
    // クリックした要素のidを取得
    const articleId = dataset.articleId
    // articleIdを使いPOSTリクエストを送る
    axios.post(`/articles/${articleId}/like`)
    .then((response) => {
      // リクエスト成功なら処理を行う
      if (response.data.status === 'ok') {
        $(`#inactive-heart${articleId}`).addClass('hidden');
        $(`#active-heart${articleId}`).removeClass('hidden');
      }
    })
    // エラー時の処理
    .catch((e) => {
      window.alert('Error')
      console.log(e)
    })

  })

  // #destroy いいねを外したいときの処理
  $('.active-heart').on('click', (e) => {
    e.preventDefault();
    const dataset = $(e.currentTarget).data()
    // クリックした要素のidを取得
    const articleId = dataset.articleId
    // articleIdを使いdeleteメソッドを使う
    axios.delete(`/articles/${articleId}/like`)
    .then((response) => {
      // リクエスト成功なら処理を行う
      if (response.data.status === 'ok') {
        $(`#active-heart${articleId}`).addClass('hidden');
        $(`#inactive-heart${articleId}`).removeClass('hidden');
      }
    })
    // エラー時の処理
    .catch((e) => {
      window.alert('Error')
      console.log(e)
    })
  })

  // axios.get(`/articles/${articleId}/like`)
  //   .then((response) => {
  //     const hasLiked = response.data.hasLiked
  //     handleHeartDisplay(hasLiked)
  //   })

//   const listenInactiveHeartEvent = (articleId) => {
//   $('.inactive-heart').on('click', () => {
//     axios.post(`/articles/${articleId}/like`)
//       .then((response) => {
//         if (response.data.status === 'ok') {
//           $('.active-heart').removeClass('hidden')
//           $('.inactive-heart').addClass('hidden')
//         }
//       })
//       .catch((e) => {
//         window.alert('Error')
//         console.log(e)
//       })
//   })
// }

// const listenActiveHeartEvent = (articleId) => {
//   $('.active-heart').on('click', () => {
//     axios.delete(`/articles/${articleId}/like`)
//       .then((response) => {
//         if (response.data.status === 'ok') {
//           $('.active-heart').addClass('hidden')
//           $('.inactive-heart').removeClass('hidden')
//         }
//       })
//       .catch((e) => {
//         window.alert('Error')
//         console.log(e)
//       })
//   })
// }

//   listenInactiveHeartEvent(articleId)
//   listenActiveHeartEvent(articleId)

  // axios.get(`/articles/${articleId}/comments`)
  //   .then((response) => {
  //     const comments = response.data
  //     comments.forEach((comment) => {
  //       appendNewComment(comment)
  //     })
  //   })
  //   .catch((error) => {
  //     window.alert('失敗！')
  //   })

  // handleCommentForm()

  // $('.add-comment-button').on('click', () => {
  //   const content = $('#comment_content').val()
  //   if (!content) {
  //     window.alert('コメントを入力してください')
  //   } else {
  //     axios.post(`/articles/${articleId}/comments`, {
  //       comment: {content: content}
  //     })
  //       .then((res) => {
  //         const comment = res.data
  //         appendNewComment(comment)
  //         $('#comment_content').val('')
  //       })
  //   }
  // })
})
