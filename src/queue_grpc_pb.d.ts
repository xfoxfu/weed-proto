// GENERATED CODE -- DO NOT EDIT!

// package: queue_pb
// file: seaweedfs/weed/pb/queue.proto

import * as seaweedfs_weed_pb_queue_pb from "../../../seaweedfs/weed/pb/queue_pb";
import * as grpc from "grpc";

interface ISeaweedQueueService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  streamWrite: grpc.MethodDefinition<seaweedfs_weed_pb_queue_pb.WriteMessageRequest, seaweedfs_weed_pb_queue_pb.WriteMessageResponse>;
  streamRead: grpc.MethodDefinition<seaweedfs_weed_pb_queue_pb.ReadMessageRequest, seaweedfs_weed_pb_queue_pb.ReadMessageResponse>;
  configureTopic: grpc.MethodDefinition<seaweedfs_weed_pb_queue_pb.ConfigureTopicRequest, seaweedfs_weed_pb_queue_pb.ConfigureTopicResponse>;
  deleteTopic: grpc.MethodDefinition<seaweedfs_weed_pb_queue_pb.DeleteTopicRequest, seaweedfs_weed_pb_queue_pb.DeleteTopicResponse>;
}

export const SeaweedQueueService: ISeaweedQueueService;

export class SeaweedQueueClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  streamWrite(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<seaweedfs_weed_pb_queue_pb.WriteMessageRequest, seaweedfs_weed_pb_queue_pb.WriteMessageResponse>;
  streamWrite(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<seaweedfs_weed_pb_queue_pb.WriteMessageRequest, seaweedfs_weed_pb_queue_pb.WriteMessageResponse>;
  streamRead(argument: seaweedfs_weed_pb_queue_pb.ReadMessageRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_queue_pb.ReadMessageResponse>;
  streamRead(argument: seaweedfs_weed_pb_queue_pb.ReadMessageRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_queue_pb.ReadMessageResponse>;
  configureTopic(argument: seaweedfs_weed_pb_queue_pb.ConfigureTopicRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_queue_pb.ConfigureTopicResponse>): grpc.ClientUnaryCall;
  configureTopic(argument: seaweedfs_weed_pb_queue_pb.ConfigureTopicRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_queue_pb.ConfigureTopicResponse>): grpc.ClientUnaryCall;
  configureTopic(argument: seaweedfs_weed_pb_queue_pb.ConfigureTopicRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_queue_pb.ConfigureTopicResponse>): grpc.ClientUnaryCall;
  deleteTopic(argument: seaweedfs_weed_pb_queue_pb.DeleteTopicRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_queue_pb.DeleteTopicResponse>): grpc.ClientUnaryCall;
  deleteTopic(argument: seaweedfs_weed_pb_queue_pb.DeleteTopicRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_queue_pb.DeleteTopicResponse>): grpc.ClientUnaryCall;
  deleteTopic(argument: seaweedfs_weed_pb_queue_pb.DeleteTopicRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_queue_pb.DeleteTopicResponse>): grpc.ClientUnaryCall;
}
