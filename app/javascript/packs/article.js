import $ from 'jquery'
import axios from 'modules/axios'

document.addEventListener('DOMContentLoaded', () => {

// ロード時にいいねされていないハートを配列で取得
  $('.inactive-heart').each(function (index, element) {
    // テンプレートで記述したカスタムデータを取得
    const likeData = $(element).data()
    // カスタムデータからチームIDを取得
    const articleId = likeData.articleId
    // カスタムデータを入れてGETリクエストを送る
    axios.get(`/articles/${articleId}/like`)
      // リクエストを送ったらレスポンスが返ってくる
      .then((response) => {
        // responseでrenderされたlikeの状態を取得(true or false)
        const inActiveStatus = response.data.hasLiked
        // falseであればいいねされていない => 白いハートを表示するために、'hidden'を取り外す
        if ( inActiveStatus === false ) {
          $(element).removeClass('hidden')
        }
      })
  })

  // ロード時にいいねされているハートを配列で取得
  $('.active-heart').each(function (index, element) {
    // テンプレートで記述したカスタムデータを取得
    const likeData = $(element).data()
    // カスタムデータからチームIDを取得
    const articleId = likeData.articleId
    // カスタムデータを入れてGETリクエストを送る
    axios.get(`/articles/${articleId}/like`)
      // リクエストを送ったらレスポンスが返ってくる
      .then((response) => {
        // responseでrenderされたlikeの状態を取得(true or false)
        const activeStatus = response.data.hasLiked
        // trueであればいいねされている => 赤色いハートを表示するために、'hidden'を取り外す
        if ( activeStatus === true) {
          $(element).removeClass('hidden')
        }
      })
  })

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
