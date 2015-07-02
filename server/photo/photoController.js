var aws = require('aws-sdk');

module.exports = {
  uploadPhoto: function(req, res){
    console.log('uploadPhoto is being called');
    aws.config.update({accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_KEY});
    var s3 = new aws.S3();
    var s3_params = {
        Bucket: process.env.S3_BUCKET,
        Key: req.query.file_name,
        Expires: 60,
        ContentType: req.query.file_type,
        ACL: 'public-read'
    };
    s3.getSignedUrl('putObject', s3_params, function(err, data){
        if(err){
            console.log(err);
        }
        else{
            console.log('success');
            var return_data = {
                signed_request: data,
                url: 'https://'+process.env.S3_BUCKET+'.s3.amazonaws.com/'+req.query.file_name
            };
            res.write(JSON.stringify(return_data));
            res.end();
        }
    });
  }
};