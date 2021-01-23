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

  
})
