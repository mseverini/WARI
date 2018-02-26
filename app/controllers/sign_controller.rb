class SignController < ApplicationController
  def sign

    s3 = Aws::S3::Resource.new(region:'us-east-2')

    obj = s3.bucket('wari-development').object("user_uploads/#{params[:objectName]}")

    url = URI.parse(obj.presigned_url(:put))

    respond_to do |format|
      format.json { render json: {signedUrl: url} }
    end
  end
end