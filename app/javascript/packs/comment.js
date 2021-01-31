import $ from 'jquery'
import axios from 'modules/axios'


const handleCommentForm = () => {
  $('.show-comment-form').on('click', () => {
    $('.show-comment-form').addClass('hidden')
    $('.comment-text-area').removeClass('hidden')
  })
}

const appendNewComment = (comment) => {
  $('.comments-container').append(
    `<div class="article-comment">
    <img class='article-comment-avatar' src='${comment.user.avatar_with_image}'>
      <div class='article-comment-text'>
        <p class='article-comment-username'>${comment.user.username}</p>
          <div class='article-comment-content'>
            <p>${comment.content}</p>
          </div>
      </div>
    </div>`
  )
}

document.addEventListener('DOMContentLoaded', () => {

handleCommentForm()

const dataset = $('#article-show').data()
  const articleId = dataset.id

  axios.get(`/articles/${articleId}/comments`)
    .then((response) => {

      const comments = response.data
      comments.forEach((comment) => {
        appendNewComment(comment)
      })
    })

  $('.add-comment-button').on('click', () => {
    const content = $('#comment_content').val()
    if (!content) {
      window.alert('コメントを入力してください')
    } else {
      axios.post(`/articles/${articleId}/comments`, {
        comment: {content: content}
      })
        .then((res) => {
          const comment = res.data
          appendNewComment(comment)
          $('#comment_content').val('')
          $('.comment-text-area').addClass('hidden')
          $('.show-comment-form').removeClass('hidden')
        })
    }
  })
  })
