json.extract! comment, :id, :body, :user_id
json.set! :user, comment.user.username
