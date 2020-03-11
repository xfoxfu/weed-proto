// package: master_pb
// file: master.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as master_pb from "./master_pb";

interface ISeaweedService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendHeartbeat: ISeaweedService_ISendHeartbeat;
    keepConnected: ISeaweedService_IKeepConnected;
    lookupVolume: ISeaweedService_ILookupVolume;
    assign: ISeaweedService_IAssign;
    statistics: ISeaweedService_IStatistics;
    collectionList: ISeaweedService_ICollectionList;
    collectionDelete: ISeaweedService_ICollectionDelete;
    volumeList: ISeaweedService_IVolumeList;
    lookupEcVolume: ISeaweedService_ILookupEcVolume;
    getMasterConfiguration: ISeaweedService_IGetMasterConfiguration;
    listMasterClients: ISeaweedService_IListMasterClients;
}

interface ISeaweedService_ISendHeartbeat extends grpc.MethodDefinition<master_pb.Heartbeat, master_pb.HeartbeatResponse> {
    path: string; // "/master_pb.Seaweed/SendHeartbeat"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<master_pb.Heartbeat>;
    requestDeserialize: grpc.deserialize<master_pb.Heartbeat>;
    responseSerialize: grpc.serialize<master_pb.HeartbeatResponse>;
    responseDeserialize: grpc.deserialize<master_pb.HeartbeatResponse>;
}
interface ISeaweedService_IKeepConnected extends grpc.MethodDefinition<master_pb.KeepConnectedRequest, master_pb.VolumeLocation> {
    path: string; // "/master_pb.Seaweed/KeepConnected"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<master_pb.KeepConnectedRequest>;
    requestDeserialize: grpc.deserialize<master_pb.KeepConnectedRequest>;
    responseSerialize: grpc.serialize<master_pb.VolumeLocation>;
    responseDeserialize: grpc.deserialize<master_pb.VolumeLocation>;
}
interface ISeaweedService_ILookupVolume extends grpc.MethodDefinition<master_pb.LookupVolumeRequest, master_pb.LookupVolumeResponse> {
    path: string; // "/master_pb.Seaweed/LookupVolume"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<master_pb.LookupVolumeRequest>;
    requestDeserialize: grpc.deserialize<master_pb.LookupVolumeRequest>;
    responseSerialize: grpc.serialize<master_pb.LookupVolumeResponse>;
    responseDeserialize: grpc.deserialize<master_pb.LookupVolumeResponse>;
}
interface ISeaweedService_IAssign extends grpc.MethodDefinition<master_pb.AssignRequest, master_pb.AssignResponse> {
    path: string; // "/master_pb.Seaweed/Assign"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<master_pb.AssignRequest>;
    requestDeserialize: grpc.deserialize<master_pb.AssignRequest>;
    responseSerialize: grpc.serialize<master_pb.AssignResponse>;
    responseDeserialize: grpc.deserialize<master_pb.AssignResponse>;
}
interface ISeaweedService_IStatistics extends grpc.MethodDefinition<master_pb.StatisticsRequest, master_pb.StatisticsResponse> {
    path: string; // "/master_pb.Seaweed/Statistics"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<master_pb.StatisticsRequest>;
    requestDeserialize: grpc.deserialize<master_pb.StatisticsRequest>;
    responseSerialize: grpc.serialize<master_pb.StatisticsResponse>;
    responseDeserialize: grpc.deserialize<master_pb.StatisticsResponse>;
}
interface ISeaweedService_ICollectionList extends grpc.MethodDefinition<master_pb.CollectionListRequest, master_pb.CollectionListResponse> {
    path: string; // "/master_pb.Seaweed/CollectionList"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<master_pb.CollectionListRequest>;
    requestDeserialize: grpc.deserialize<master_pb.CollectionListRequest>;
    responseSerialize: grpc.serialize<master_pb.CollectionListResponse>;
    responseDeserialize: grpc.deserialize<master_pb.CollectionListResponse>;
}
interface ISeaweedService_ICollectionDelete extends grpc.MethodDefinition<master_pb.CollectionDeleteRequest, master_pb.CollectionDeleteResponse> {
    path: string; // "/master_pb.Seaweed/CollectionDelete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<master_pb.CollectionDeleteRequest>;
    requestDeserialize: grpc.deserialize<master_pb.CollectionDeleteRequest>;
    responseSerialize: grpc.serialize<master_pb.CollectionDeleteResponse>;
    responseDeserialize: grpc.deserialize<master_pb.CollectionDeleteResponse>;
}
interface ISeaweedService_IVolumeList extends grpc.MethodDefinition<master_pb.VolumeListRequest, master_pb.VolumeListResponse> {
    path: string; // "/master_pb.Seaweed/VolumeList"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<master_pb.VolumeListRequest>;
    requestDeserialize: grpc.deserialize<master_pb.VolumeListRequest>;
    responseSerialize: grpc.serialize<master_pb.VolumeListResponse>;
    responseDeserialize: grpc.deserialize<master_pb.VolumeListResponse>;
}
interface ISeaweedService_ILookupEcVolume extends grpc.MethodDefinition<master_pb.LookupEcVolumeRequest, master_pb.LookupEcVolumeResponse> {
    path: string; // "/master_pb.Seaweed/LookupEcVolume"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<master_pb.LookupEcVolumeRequest>;
    requestDeserialize: grpc.deserialize<master_pb.LookupEcVolumeRequest>;
    responseSerialize: grpc.serialize<master_pb.LookupEcVolumeResponse>;
    responseDeserialize: grpc.deserialize<master_pb.LookupEcVolumeResponse>;
}
interface ISeaweedService_IGetMasterConfiguration extends grpc.MethodDefinition<master_pb.GetMasterConfigurationRequest, master_pb.GetMasterConfigurationResponse> {
    path: string; // "/master_pb.Seaweed/GetMasterConfiguration"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<master_pb.GetMasterConfigurationRequest>;
    requestDeserialize: grpc.deserialize<master_pb.GetMasterConfigurationRequest>;
    responseSerialize: grpc.serialize<master_pb.GetMasterConfigurationResponse>;
    responseDeserialize: grpc.deserialize<master_pb.GetMasterConfigurationResponse>;
}
interface ISeaweedService_IListMasterClients extends grpc.MethodDefinition<master_pb.ListMasterClientsRequest, master_pb.ListMasterClientsResponse> {
    path: string; // "/master_pb.Seaweed/ListMasterClients"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<master_pb.ListMasterClientsRequest>;
    requestDeserialize: grpc.deserialize<master_pb.ListMasterClientsRequest>;
    responseSerialize: grpc.serialize<master_pb.ListMasterClientsResponse>;
    responseDeserialize: grpc.deserialize<master_pb.ListMasterClientsResponse>;
}

export const SeaweedService: ISeaweedService;

export interface ISeaweedServer {
    sendHeartbeat: grpc.handleBidiStreamingCall<master_pb.Heartbeat, master_pb.HeartbeatResponse>;
    keepConnected: grpc.handleBidiStreamingCall<master_pb.KeepConnectedRequest, master_pb.VolumeLocation>;
    lookupVolume: grpc.handleUnaryCall<master_pb.LookupVolumeRequest, master_pb.LookupVolumeResponse>;
    assign: grpc.handleUnaryCall<master_pb.AssignRequest, master_pb.AssignResponse>;
    statistics: grpc.handleUnaryCall<master_pb.StatisticsRequest, master_pb.StatisticsResponse>;
    collectionList: grpc.handleUnaryCall<master_pb.CollectionListRequest, master_pb.CollectionListResponse>;
    collectionDelete: grpc.handleUnaryCall<master_pb.CollectionDeleteRequest, master_pb.CollectionDeleteResponse>;
    volumeList: grpc.handleUnaryCall<master_pb.VolumeListRequest, master_pb.VolumeListResponse>;
    lookupEcVolume: grpc.handleUnaryCall<master_pb.LookupEcVolumeRequest, master_pb.LookupEcVolumeResponse>;
    getMasterConfiguration: grpc.handleUnaryCall<master_pb.GetMasterConfigurationRequest, master_pb.GetMasterConfigurationResponse>;
    listMasterClients: grpc.handleUnaryCall<master_pb.ListMasterClientsRequest, master_pb.ListMasterClientsResponse>;
}

export interface ISeaweedClient {
    sendHeartbeat(): grpc.ClientDuplexStream<master_pb.Heartbeat, master_pb.HeartbeatResponse>;
    sendHeartbeat(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<master_pb.Heartbeat, master_pb.HeartbeatResponse>;
    sendHeartbeat(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<master_pb.Heartbeat, master_pb.HeartbeatResponse>;
    keepConnected(): grpc.ClientDuplexStream<master_pb.KeepConnectedRequest, master_pb.VolumeLocation>;
    keepConnected(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<master_pb.KeepConnectedRequest, master_pb.VolumeLocation>;
    keepConnected(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<master_pb.KeepConnectedRequest, master_pb.VolumeLocation>;
    lookupVolume(request: master_pb.LookupVolumeRequest, callback: (error: grpc.ServiceError | null, response: master_pb.LookupVolumeResponse) => void): grpc.ClientUnaryCall;
    lookupVolume(request: master_pb.LookupVolumeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.LookupVolumeResponse) => void): grpc.ClientUnaryCall;
    lookupVolume(request: master_pb.LookupVolumeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.LookupVolumeResponse) => void): grpc.ClientUnaryCall;
    assign(request: master_pb.AssignRequest, callback: (error: grpc.ServiceError | null, response: master_pb.AssignResponse) => void): grpc.ClientUnaryCall;
    assign(request: master_pb.AssignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.AssignResponse) => void): grpc.ClientUnaryCall;
    assign(request: master_pb.AssignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.AssignResponse) => void): grpc.ClientUnaryCall;
    statistics(request: master_pb.StatisticsRequest, callback: (error: grpc.ServiceError | null, response: master_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    statistics(request: master_pb.StatisticsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    statistics(request: master_pb.StatisticsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    collectionList(request: master_pb.CollectionListRequest, callback: (error: grpc.ServiceError | null, response: master_pb.CollectionListResponse) => void): grpc.ClientUnaryCall;
    collectionList(request: master_pb.CollectionListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.CollectionListResponse) => void): grpc.ClientUnaryCall;
    collectionList(request: master_pb.CollectionListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.CollectionListResponse) => void): grpc.ClientUnaryCall;
    collectionDelete(request: master_pb.CollectionDeleteRequest, callback: (error: grpc.ServiceError | null, response: master_pb.CollectionDeleteResponse) => void): grpc.ClientUnaryCall;
    collectionDelete(request: master_pb.CollectionDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.CollectionDeleteResponse) => void): grpc.ClientUnaryCall;
    collectionDelete(request: master_pb.CollectionDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.CollectionDeleteResponse) => void): grpc.ClientUnaryCall;
    volumeList(request: master_pb.VolumeListRequest, callback: (error: grpc.ServiceError | null, response: master_pb.VolumeListResponse) => void): grpc.ClientUnaryCall;
    volumeList(request: master_pb.VolumeListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.VolumeListResponse) => void): grpc.ClientUnaryCall;
    volumeList(request: master_pb.VolumeListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.VolumeListResponse) => void): grpc.ClientUnaryCall;
    lookupEcVolume(request: master_pb.LookupEcVolumeRequest, callback: (error: grpc.ServiceError | null, response: master_pb.LookupEcVolumeResponse) => void): grpc.ClientUnaryCall;
    lookupEcVolume(request: master_pb.LookupEcVolumeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.LookupEcVolumeResponse) => void): grpc.ClientUnaryCall;
    lookupEcVolume(request: master_pb.LookupEcVolumeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.LookupEcVolumeResponse) => void): grpc.ClientUnaryCall;
    getMasterConfiguration(request: master_pb.GetMasterConfigurationRequest, callback: (error: grpc.ServiceError | null, response: master_pb.GetMasterConfigurationResponse) => void): grpc.ClientUnaryCall;
    getMasterConfiguration(request: master_pb.GetMasterConfigurationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.GetMasterConfigurationResponse) => void): grpc.ClientUnaryCall;
    getMasterConfiguration(request: master_pb.GetMasterConfigurationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.GetMasterConfigurationResponse) => void): grpc.ClientUnaryCall;
    listMasterClients(request: master_pb.ListMasterClientsRequest, callback: (error: grpc.ServiceError | null, response: master_pb.ListMasterClientsResponse) => void): grpc.ClientUnaryCall;
    listMasterClients(request: master_pb.ListMasterClientsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.ListMasterClientsResponse) => void): grpc.ClientUnaryCall;
    listMasterClients(request: master_pb.ListMasterClientsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.ListMasterClientsResponse) => void): grpc.ClientUnaryCall;
}

export class SeaweedClient extends grpc.Client implements ISeaweedClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sendHeartbeat(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<master_pb.Heartbeat, master_pb.HeartbeatResponse>;
    public sendHeartbeat(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<master_pb.Heartbeat, master_pb.HeartbeatResponse>;
    public keepConnected(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<master_pb.KeepConnectedRequest, master_pb.VolumeLocation>;
    public keepConnected(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<master_pb.KeepConnectedRequest, master_pb.VolumeLocation>;
    public lookupVolume(request: master_pb.LookupVolumeRequest, callback: (error: grpc.ServiceError | null, response: master_pb.LookupVolumeResponse) => void): grpc.ClientUnaryCall;
    public lookupVolume(request: master_pb.LookupVolumeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.LookupVolumeResponse) => void): grpc.ClientUnaryCall;
    public lookupVolume(request: master_pb.LookupVolumeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.LookupVolumeResponse) => void): grpc.ClientUnaryCall;
    public assign(request: master_pb.AssignRequest, callback: (error: grpc.ServiceError | null, response: master_pb.AssignResponse) => void): grpc.ClientUnaryCall;
    public assign(request: master_pb.AssignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.AssignResponse) => void): grpc.ClientUnaryCall;
    public assign(request: master_pb.AssignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.AssignResponse) => void): grpc.ClientUnaryCall;
    public statistics(request: master_pb.StatisticsRequest, callback: (error: grpc.ServiceError | null, response: master_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    public statistics(request: master_pb.StatisticsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    public statistics(request: master_pb.StatisticsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    public collectionList(request: master_pb.CollectionListRequest, callback: (error: grpc.ServiceError | null, response: master_pb.CollectionListResponse) => void): grpc.ClientUnaryCall;
    public collectionList(request: master_pb.CollectionListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.CollectionListResponse) => void): grpc.ClientUnaryCall;
    public collectionList(request: master_pb.CollectionListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.CollectionListResponse) => void): grpc.ClientUnaryCall;
    public collectionDelete(request: master_pb.CollectionDeleteRequest, callback: (error: grpc.ServiceError | null, response: master_pb.CollectionDeleteResponse) => void): grpc.ClientUnaryCall;
    public collectionDelete(request: master_pb.CollectionDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.CollectionDeleteResponse) => void): grpc.ClientUnaryCall;
    public collectionDelete(request: master_pb.CollectionDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.CollectionDeleteResponse) => void): grpc.ClientUnaryCall;
    public volumeList(request: master_pb.VolumeListRequest, callback: (error: grpc.ServiceError | null, response: master_pb.VolumeListResponse) => void): grpc.ClientUnaryCall;
    public volumeList(request: master_pb.VolumeListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.VolumeListResponse) => void): grpc.ClientUnaryCall;
    public volumeList(request: master_pb.VolumeListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.VolumeListResponse) => void): grpc.ClientUnaryCall;
    public lookupEcVolume(request: master_pb.LookupEcVolumeRequest, callback: (error: grpc.ServiceError | null, response: master_pb.LookupEcVolumeResponse) => void): grpc.ClientUnaryCall;
    public lookupEcVolume(request: master_pb.LookupEcVolumeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.LookupEcVolumeResponse) => void): grpc.ClientUnaryCall;
    public lookupEcVolume(request: master_pb.LookupEcVolumeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.LookupEcVolumeResponse) => void): grpc.ClientUnaryCall;
    public getMasterConfiguration(request: master_pb.GetMasterConfigurationRequest, callback: (error: grpc.ServiceError | null, response: master_pb.GetMasterConfigurationResponse) => void): grpc.ClientUnaryCall;
    public getMasterConfiguration(request: master_pb.GetMasterConfigurationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.GetMasterConfigurationResponse) => void): grpc.ClientUnaryCall;
    public getMasterConfiguration(request: master_pb.GetMasterConfigurationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.GetMasterConfigurationResponse) => void): grpc.ClientUnaryCall;
    public listMasterClients(request: master_pb.ListMasterClientsRequest, callback: (error: grpc.ServiceError | null, response: master_pb.ListMasterClientsResponse) => void): grpc.ClientUnaryCall;
    public listMasterClients(request: master_pb.ListMasterClientsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: master_pb.ListMasterClientsResponse) => void): grpc.ClientUnaryCall;
    public listMasterClients(request: master_pb.ListMasterClientsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: master_pb.ListMasterClientsResponse) => void): grpc.ClientUnaryCall;
}
