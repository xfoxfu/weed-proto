// package: queue_pb
// file: queue.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as queue_pb from "./queue_pb";

interface ISeaweedQueueService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    streamWrite: ISeaweedQueueService_IStreamWrite;
    streamRead: ISeaweedQueueService_IStreamRead;
    configureTopic: ISeaweedQueueService_IConfigureTopic;
    deleteTopic: ISeaweedQueueService_IDeleteTopic;
}

interface ISeaweedQueueService_IStreamWrite extends grpc.MethodDefinition<queue_pb.WriteMessageRequest, queue_pb.WriteMessageResponse> {
    path: string; // "/queue_pb.SeaweedQueue/StreamWrite"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<queue_pb.WriteMessageRequest>;
    requestDeserialize: grpc.deserialize<queue_pb.WriteMessageRequest>;
    responseSerialize: grpc.serialize<queue_pb.WriteMessageResponse>;
    responseDeserialize: grpc.deserialize<queue_pb.WriteMessageResponse>;
}
interface ISeaweedQueueService_IStreamRead extends grpc.MethodDefinition<queue_pb.ReadMessageRequest, queue_pb.ReadMessageResponse> {
    path: string; // "/queue_pb.SeaweedQueue/StreamRead"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<queue_pb.ReadMessageRequest>;
    requestDeserialize: grpc.deserialize<queue_pb.ReadMessageRequest>;
    responseSerialize: grpc.serialize<queue_pb.ReadMessageResponse>;
    responseDeserialize: grpc.deserialize<queue_pb.ReadMessageResponse>;
}
interface ISeaweedQueueService_IConfigureTopic extends grpc.MethodDefinition<queue_pb.ConfigureTopicRequest, queue_pb.ConfigureTopicResponse> {
    path: string; // "/queue_pb.SeaweedQueue/ConfigureTopic"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<queue_pb.ConfigureTopicRequest>;
    requestDeserialize: grpc.deserialize<queue_pb.ConfigureTopicRequest>;
    responseSerialize: grpc.serialize<queue_pb.ConfigureTopicResponse>;
    responseDeserialize: grpc.deserialize<queue_pb.ConfigureTopicResponse>;
}
interface ISeaweedQueueService_IDeleteTopic extends grpc.MethodDefinition<queue_pb.DeleteTopicRequest, queue_pb.DeleteTopicResponse> {
    path: string; // "/queue_pb.SeaweedQueue/DeleteTopic"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<queue_pb.DeleteTopicRequest>;
    requestDeserialize: grpc.deserialize<queue_pb.DeleteTopicRequest>;
    responseSerialize: grpc.serialize<queue_pb.DeleteTopicResponse>;
    responseDeserialize: grpc.deserialize<queue_pb.DeleteTopicResponse>;
}

export const SeaweedQueueService: ISeaweedQueueService;

export interface ISeaweedQueueServer {
    streamWrite: grpc.handleBidiStreamingCall<queue_pb.WriteMessageRequest, queue_pb.WriteMessageResponse>;
    streamRead: grpc.handleServerStreamingCall<queue_pb.ReadMessageRequest, queue_pb.ReadMessageResponse>;
    configureTopic: grpc.handleUnaryCall<queue_pb.ConfigureTopicRequest, queue_pb.ConfigureTopicResponse>;
    deleteTopic: grpc.handleUnaryCall<queue_pb.DeleteTopicRequest, queue_pb.DeleteTopicResponse>;
}

export interface ISeaweedQueueClient {
    streamWrite(): grpc.ClientDuplexStream<queue_pb.WriteMessageRequest, queue_pb.WriteMessageResponse>;
    streamWrite(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<queue_pb.WriteMessageRequest, queue_pb.WriteMessageResponse>;
    streamWrite(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<queue_pb.WriteMessageRequest, queue_pb.WriteMessageResponse>;
    streamRead(request: queue_pb.ReadMessageRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<queue_pb.ReadMessageResponse>;
    streamRead(request: queue_pb.ReadMessageRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<queue_pb.ReadMessageResponse>;
    configureTopic(request: queue_pb.ConfigureTopicRequest, callback: (error: grpc.ServiceError | null, response: queue_pb.ConfigureTopicResponse) => void): grpc.ClientUnaryCall;
    configureTopic(request: queue_pb.ConfigureTopicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: queue_pb.ConfigureTopicResponse) => void): grpc.ClientUnaryCall;
    configureTopic(request: queue_pb.ConfigureTopicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: queue_pb.ConfigureTopicResponse) => void): grpc.ClientUnaryCall;
    deleteTopic(request: queue_pb.DeleteTopicRequest, callback: (error: grpc.ServiceError | null, response: queue_pb.DeleteTopicResponse) => void): grpc.ClientUnaryCall;
    deleteTopic(request: queue_pb.DeleteTopicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: queue_pb.DeleteTopicResponse) => void): grpc.ClientUnaryCall;
    deleteTopic(request: queue_pb.DeleteTopicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: queue_pb.DeleteTopicResponse) => void): grpc.ClientUnaryCall;
}

export class SeaweedQueueClient extends grpc.Client implements ISeaweedQueueClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public streamWrite(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<queue_pb.WriteMessageRequest, queue_pb.WriteMessageResponse>;
    public streamWrite(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<queue_pb.WriteMessageRequest, queue_pb.WriteMessageResponse>;
    public streamRead(request: queue_pb.ReadMessageRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<queue_pb.ReadMessageResponse>;
    public streamRead(request: queue_pb.ReadMessageRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<queue_pb.ReadMessageResponse>;
    public configureTopic(request: queue_pb.ConfigureTopicRequest, callback: (error: grpc.ServiceError | null, response: queue_pb.ConfigureTopicResponse) => void): grpc.ClientUnaryCall;
    public configureTopic(request: queue_pb.ConfigureTopicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: queue_pb.ConfigureTopicResponse) => void): grpc.ClientUnaryCall;
    public configureTopic(request: queue_pb.ConfigureTopicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: queue_pb.ConfigureTopicResponse) => void): grpc.ClientUnaryCall;
    public deleteTopic(request: queue_pb.DeleteTopicRequest, callback: (error: grpc.ServiceError | null, response: queue_pb.DeleteTopicResponse) => void): grpc.ClientUnaryCall;
    public deleteTopic(request: queue_pb.DeleteTopicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: queue_pb.DeleteTopicResponse) => void): grpc.ClientUnaryCall;
    public deleteTopic(request: queue_pb.DeleteTopicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: queue_pb.DeleteTopicResponse) => void): grpc.ClientUnaryCall;
}
