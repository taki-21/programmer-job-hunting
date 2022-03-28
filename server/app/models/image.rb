require 'aws-sdk-s3'

class Image < ApplicationRecord
  Aws.config.update(
    endpoint: ENV['AWS_S3_ENDPOINT'],
    access_key_id: ENV['AWS_ACCESS_KEY_ID'],
    secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
    region: ENV['AWS_REGION'] ,
    force_path_style: true,
    credentials: Aws::Credentials.new(ENV['AWS_ACCESS_KEY_ID'], ENV['AWS_SECRET_ACCESS_KEY'])
  )
 
  def self.signed_url(filename, operation)
    # https://docs.aws.amazon.com/sdk-for-ruby/v3/api/Aws/S3/Presigner.html
    signer = Aws::S3::Presigner.new
    signer.presigned_url(operation, bucket: 'programmer-job-hunting', key: filename, expires_in: 604800)
  end
end

