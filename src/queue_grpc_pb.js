// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var queue_pb = require('./queue_pb.js');

function serialize_queue_pb_ConfigureTopicRequest(arg) {
  if (!(arg instanceof queue_pb.ConfigureTopicRequest)) {
    throw new Error('Expected argument of type queue_pb.ConfigureTopicRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_queue_pb_ConfigureTopicRequest(buffer_arg) {
  return queue_pb.ConfigureTopicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_queue_pb_ConfigureTopicResponse(arg) {
  if (!(arg instanceof queue_pb.ConfigureTopicResponse)) {
    throw new Error('Expected argument of type queue_pb.ConfigureTopicResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_queue_pb_ConfigureTopicResponse(buffer_arg) {
  return queue_pb.ConfigureTopicResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_queue_pb_DeleteTopicRequest(arg) {
  if (!(arg instanceof queue_pb.DeleteTopicRequest)) {
    throw new Error('Expected argument of type queue_pb.DeleteTopicRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_queue_pb_DeleteTopicRequest(buffer_arg) {
  return queue_pb.DeleteTopicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_queue_pb_DeleteTopicResponse(arg) {
  if (!(arg instanceof queue_pb.DeleteTopicResponse)) {
    throw new Error('Expected argument of type queue_pb.DeleteTopicResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_queue_pb_DeleteTopicResponse(buffer_arg) {
  return queue_pb.DeleteTopicResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_queue_pb_ReadMessageRequest(arg) {
  if (!(arg instanceof queue_pb.ReadMessageRequest)) {
    throw new Error('Expected argument of type queue_pb.ReadMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_queue_pb_ReadMessageRequest(buffer_arg) {
  return queue_pb.ReadMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_queue_pb_ReadMessageResponse(arg) {
  if (!(arg instanceof queue_pb.ReadMessageResponse)) {
    throw new Error('Expected argument of type queue_pb.ReadMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_queue_pb_ReadMessageResponse(buffer_arg) {
  return queue_pb.ReadMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_queue_pb_WriteMessageRequest(arg) {
  if (!(arg instanceof queue_pb.WriteMessageRequest)) {
    throw new Error('Expected argument of type queue_pb.WriteMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_queue_pb_WriteMessageRequest(buffer_arg) {
  return queue_pb.WriteMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_queue_pb_WriteMessageResponse(arg) {
  if (!(arg instanceof queue_pb.WriteMessageResponse)) {
    throw new Error('Expected argument of type queue_pb.WriteMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_queue_pb_WriteMessageResponse(buffer_arg) {
  return queue_pb.WriteMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ////////////////////////////////////////////////
//
var SeaweedQueueService = exports.SeaweedQueueService = {
  streamWrite: {
    path: '/queue_pb.SeaweedQueue/StreamWrite',
    requestStream: true,
    responseStream: true,
    requestType: queue_pb.WriteMessageRequest,
    responseType: queue_pb.WriteMessageResponse,
    requestSerialize: serialize_queue_pb_WriteMessageRequest,
    requestDeserialize: deserialize_queue_pb_WriteMessageRequest,
    responseSerialize: serialize_queue_pb_WriteMessageResponse,
    responseDeserialize: deserialize_queue_pb_WriteMessageResponse,
  },
  streamRead: {
    path: '/queue_pb.SeaweedQueue/StreamRead',
    requestStream: false,
    responseStream: true,
    requestType: queue_pb.ReadMessageRequest,
    responseType: queue_pb.ReadMessageResponse,
    requestSerialize: serialize_queue_pb_ReadMessageRequest,
    requestDeserialize: deserialize_queue_pb_ReadMessageRequest,
    responseSerialize: serialize_queue_pb_ReadMessageResponse,
    responseDeserialize: deserialize_queue_pb_ReadMessageResponse,
  },
  configureTopic: {
    path: '/queue_pb.SeaweedQueue/ConfigureTopic',
    requestStream: false,
    responseStream: false,
    requestType: queue_pb.ConfigureTopicRequest,
    responseType: queue_pb.ConfigureTopicResponse,
    requestSerialize: serialize_queue_pb_ConfigureTopicRequest,
    requestDeserialize: deserialize_queue_pb_ConfigureTopicRequest,
    responseSerialize: serialize_queue_pb_ConfigureTopicResponse,
    responseDeserialize: deserialize_queue_pb_ConfigureTopicResponse,
  },
  deleteTopic: {
    path: '/queue_pb.SeaweedQueue/DeleteTopic',
    requestStream: false,
    responseStream: false,
    requestType: queue_pb.DeleteTopicRequest,
    responseType: queue_pb.DeleteTopicResponse,
    requestSerialize: serialize_queue_pb_DeleteTopicRequest,
    requestDeserialize: deserialize_queue_pb_DeleteTopicRequest,
    responseSerialize: serialize_queue_pb_DeleteTopicResponse,
    responseDeserialize: deserialize_queue_pb_DeleteTopicResponse,
  },
};

exports.SeaweedQueueClient = grpc.makeGenericClientConstructor(SeaweedQueueService);
