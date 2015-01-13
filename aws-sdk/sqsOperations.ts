/// <reference path="../declarations/aws-sdk.d.ts" />
/// <reference path="../declarations/node-uuid.d.ts" />

import AWS  = require("aws-sdk");
import uuid = require("node-uuid");

AWS.config.region = "us-east-1";

var awsCredentialsPath : string = "../declarations/awsCred.json";
var queueUrl: string        = "https://sqs.us-east-1.amazonaws.com/504921350615/CCVRender_pgore_Jobs";
var messageBody: string     = "This is a sample app: " + uuid.v1();
var delaySeconds: number    = 0;

AWS.config.loadFromPath(awsCredentialsPath);
var sqs = new AWS.SQS();


var sendMessageRequest = {
    QueueUrl    : queueUrl,
    MessageBody : messageBody,
    DelaySeconds: delaySeconds
};

sqs.sendMessage(sendMessageRequest, onRequestComplete);

function onRequestComplete(err: any, result: AWS.Sqs.SendMessageResult){
    if(err){
        console.log(err)
    }else{
        console.log(result);
    }
}
