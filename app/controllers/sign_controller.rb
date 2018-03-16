class SignController < ApplicationController
  before_action :cors_set_access_control_header

  def sign

    s3 = Aws::S3::Resource.new(region:'us-east-2')

    obj = s3.bucket('wari-development').object("user_uploads/#{params[:objectName]}")

    url = URI.parse(obj.presigned_url(:put))

    respond_to do |format|
      format.json { render json: {signedUrl: url} }
    end
  end

  private
  def cors_set_access_control_header
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  end
end