/// <reference path="../declarations/node.d.ts" />
/// <reference path="../declarations/node-uuid.d.ts" />

var AWS     = require('aws-sdk');


export class SQSDal{
    public sqsCtx;
    queueUrl: string;
    waitTimeSeconds: number = 20;
    visibilityTimeout: number = 20;
    constructor(accessKeyId: string, secretAccessKey: string,
                queueUrl: string, region: string,
                waitTimeSeconds?:number, visibilityTimeout?: number){
        var sqsConfig = {
            'accessKeyId'     : accessKeyId,
            'secretAccessKey' : secretAccessKey,
            'region'          : region || 'us-east-1'
        };
        this.queueUrl = queueUrl;
        this.sqsCtx = new AWS.SQS(sqsConfig)
        if(waitTimeSeconds){
            this.waitTimeSeconds = waitTimeSeconds;
        }
        if(visibilityTimeout){
            this.visibilityTimeout = visibilityTimeout;
        }
    }

    public sendMessage(messageBody: string, delaySeconds:number, callback){
        var sendMsgReq: SendMessageRequest = {
            QueueUrl : this.queueUrl,
            MessageBody: messageBody,
            DelaySeconds: delaySeconds
        }
        this.sqsCtx.sendMessage(sendMsgReq, function(error, data: SendMessageResult){
            //TODO: invoke appropriate callback here
            if(error){
                console.log(error);
            }else{
                //console.log(data);
            }
        });
    }

    public receiveSingleMessage(autoAckMessage:boolean, callback){
        var recvMsgReq: ReceiveMessageRequest = {
            QueueUrl: this.queueUrl,
            MaxNumberOfMessages: 1,
            VisibilityTimeout: this.visibilityTimeout,
            WaitTimeSeconds: this.waitTimeSeconds
        }

        this.sqsCtx.receiveMessage(recvMsgReq, (error, data: ReceiveMessageResult) => {
            if(error){
                console.log(error)
            }else{
                var messageBody: string = undefined;
                console.log(data);
                if(data.Messages && data.Messages.length > 0){
                    var message: Message    = data.Messages[0];
                    var messageBody: string = message.Body;
                    var receiptId: string   = message.ReceiptHandle;
                    //TODO: delete the message if its set to auto ack, and invoke the callback on completion
                    if(autoAckMessage){
                        this.deleteSingleMessage(receiptId, function(error, data){
                            if(error){
                                console.log("Error :" + error);
                            }else{
                                console.log("deleted Message : " + message.MessageId + "," + data.toString());
                            }
                        })
                    }else{
                        //TODO: invoke callback here
                    }
                }else{
                    console.log("empty messages")
                }
            }
        });
    }

    public deleteSingleMessage = (messageReceiptId: string, callback) => {
        var delMsgReq: DeleteMessageRequest = {
            QueueUrl: this.queueUrl,
            ReceiptHandle: messageReceiptId
        }
        this.sqsCtx.deleteMessage(delMsgReq, function(error, data){
            //TODO: invoke appropriate callback here
            if(this.error){
                callback(error)
            }else{
                callback(null, data)
            }
        })
    }

}


interface SendMessageRequest {
    QueueUrl?: string;
    MessageBody?: string;
    DelaySeconds?: number;
}

interface SendMessageResult {
    MessageId: string;
    MD5OfMessageBody: string;
}

interface ReceiveMessageRequest {
    QueueUrl?: string;
    MaxNumberOfMessages?: number;
    VisibilityTimeout?: number;
    AttributeNames?: string[];
}

interface DeleteMessageRequest {
    QueueUrl?: string;
    ReceiptHandle?: string;
}

interface ResponseMetadata{
    RequestId: string;
}

interface ReceiveMessageResult {
    Messages: Message[];
}

interface Message {
    MessageId: string;
    ReceiptHandle: string;
    MD5OfBody: string;
    Body: string;
}

//=============
var fs = require('fs');
import uuid = require("node-uuid");
var awsCred = JSON.parse(fs.readFileSync('../declarations/awsCred.json', 'utf8'));
var queueUrl:string = "https://sqs.us-east-1.amazonaws.com/504921350615/CCVRender_pgore_Jobs";
var messageBody = uuid.v1();
var sqsDal = new SQSDal(awsCred.accessKeyId, awsCred.secretAccessKey, queueUrl, awsCred.region, 20);
sqsDal.sendMessage(messageBody, 0, undefined);

sqsDal.receiveSingleMessage(true, undefined);