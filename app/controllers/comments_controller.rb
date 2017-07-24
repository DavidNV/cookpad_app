class CommentsController < ApplicationController

  def create
    comment = Comment.new(comment_params)
    if comment.save
      respond_to do |format|
        flash[:success] = "Yoho!"
        format.json { render json:  { message: "Yoho!", picture: comment.picture.as_json_with_comments } }
       end
    else
      respond_to do |format|
        flash[:error] = "Damnit!"
        format.json { render json:  { message: "Yoho!" } }
      end
    end
  end

  private

   def comment_params
     params.require(:comment).permit(*Comment::ALLOWED_ATTRIBUTES)
   end
end
