import $ from 'jquery'
import axios from 'modules/axios'

document.addEventListener('DOMContentLoaded', () => {

  const dataset = $('#account-show').data()
  const accountId = dataset.id

  // フォロー読み込み
  axios.get(`/accounts/${accountId}/follows`)
    .then((response) => {
      const hasFollowed = response.data.hasFollowed
      if (hasFollowed) {
        $('.unfollow-btn').removeClass('hidden');
      } else {
        $('.follow-btn').removeClass('hidden');
      }
    })

  // フォロー機能
  $('.follow-btn').on('click', (e) => {
    e.preventDefault();
    axios.post(`/accounts/${accountId}/follows`)
    .then((response) => {
      if (response.data.status === 'ok') {
        $(`.follow-btn`).addClass('hidden');
        $(`.unfollow-btn`).removeClass('hidden');
        $('.number-followers').text(`${response.data.followCount}`);
      }
    })
    .catch((e) => {
      window.alert('Error')
      console.log(e)
    })

  })

  // アンフォロー機能
  $('.unfollow-btn').on('click', (e) => {
    e.preventDefault();
    axios.post(`/accounts/${accountId}/unfollows`)
    .then((response) => {
      if (response.data.status === 'ok') {
        $(`.unfollow-btn`).addClass('hidden');
        $(`.follow-btn`).removeClass('hidden');
        $('.number-followers').text(`${response.data.followCount}`);
      }
    })
    .catch((e) => {
      window.alert('Error')
      console.log(e)
    })
  })

  })
