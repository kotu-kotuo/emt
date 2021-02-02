import $ from 'jquery'
import axios from 'modules/axios'



document.addEventListener('DOMContentLoaded', () => {

// ロード時にいいねされていないハートを配列で取得
  $('.inactive-heart').each(function (index, element) {
    const likeData = $(element).data()
    const articleId = likeData.articleId
    axios.get(`/articles/${articleId}/like`)
      .then((response) => {
        const inActiveStatus = response.data.hasLiked
        if ( inActiveStatus === false ) {
          $(element).removeClass('hidden')
        }
      })
  })

  // ロード時にいいねされているハートを配列で取得
  $('.active-heart').each(function (index, element) {
    const likeData = $(element).data()
    const articleId = likeData.articleId
    axios.get(`/articles/${articleId}/like`)
      .then((response) => {
        const activeStatus = response.data.hasLiked
        if ( activeStatus === true) {
          $(element).removeClass('hidden')
        }
      })
  })

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


