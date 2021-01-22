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
  })
