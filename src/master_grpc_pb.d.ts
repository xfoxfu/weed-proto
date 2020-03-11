// GENERATED CODE -- DO NOT EDIT!

// package: master_pb
// file: seaweedfs/weed/pb/master.proto

import * as seaweedfs_weed_pb_master_pb from "../../../seaweedfs/weed/pb/master_pb";
import * as grpc from "grpc";

interface ISeaweedService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sendHeartbeat: grpc.MethodDefinition<seaweedfs_weed_pb_master_pb.Heartbeat, seaweedfs_weed_pb_master_pb.HeartbeatResponse>;
  keepConnected: grpc.MethodDefinition<seaweedfs_weed_pb_master_pb.KeepConnectedRequest, seaweedfs_weed_pb_master_pb.VolumeLocation>;
  lookupVolume: grpc.MethodDefinition<seaweedfs_weed_pb_master_pb.LookupVolumeRequest, seaweedfs_weed_pb_master_pb.LookupVolumeResponse>;
  assign: grpc.MethodDefinition<seaweedfs_weed_pb_master_pb.AssignRequest, seaweedfs_weed_pb_master_pb.AssignResponse>;
  statistics: grpc.MethodDefinition<seaweedfs_weed_pb_master_pb.StatisticsRequest, seaweedfs_weed_pb_master_pb.StatisticsResponse>;
  collectionList: grpc.MethodDefinition<seaweedfs_weed_pb_master_pb.CollectionListRequest, seaweedfs_weed_pb_master_pb.CollectionListResponse>;
  collectionDelete: grpc.MethodDefinition<seaweedfs_weed_pb_master_pb.CollectionDeleteRequest, seaweedfs_weed_pb_master_pb.CollectionDeleteResponse>;
  volumeList: grpc.MethodDefinition<seaweedfs_weed_pb_master_pb.VolumeListRequest, seaweedfs_weed_pb_master_pb.VolumeListResponse>;
  lookupEcVolume: grpc.MethodDefinition<seaweedfs_weed_pb_master_pb.LookupEcVolumeRequest, seaweedfs_weed_pb_master_pb.LookupEcVolumeResponse>;
  getMasterConfiguration: grpc.MethodDefinition<seaweedfs_weed_pb_master_pb.GetMasterConfigurationRequest, seaweedfs_weed_pb_master_pb.GetMasterConfigurationResponse>;
  listMasterClients: grpc.MethodDefinition<seaweedfs_weed_pb_master_pb.ListMasterClientsRequest, seaweedfs_weed_pb_master_pb.ListMasterClientsResponse>;
}

export const SeaweedService: ISeaweedService;

export class SeaweedClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  sendHeartbeat(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<seaweedfs_weed_pb_master_pb.Heartbeat, seaweedfs_weed_pb_master_pb.HeartbeatResponse>;
  sendHeartbeat(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<seaweedfs_weed_pb_master_pb.Heartbeat, seaweedfs_weed_pb_master_pb.HeartbeatResponse>;
  keepConnected(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<seaweedfs_weed_pb_master_pb.KeepConnectedRequest, seaweedfs_weed_pb_master_pb.VolumeLocation>;
  keepConnected(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<seaweedfs_weed_pb_master_pb.KeepConnectedRequest, seaweedfs_weed_pb_master_pb.VolumeLocation>;
  lookupVolume(argument: seaweedfs_weed_pb_master_pb.LookupVolumeRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.LookupVolumeResponse>): grpc.ClientUnaryCall;
  lookupVolume(argument: seaweedfs_weed_pb_master_pb.LookupVolumeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.LookupVolumeResponse>): grpc.ClientUnaryCall;
  lookupVolume(argument: seaweedfs_weed_pb_master_pb.LookupVolumeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.LookupVolumeResponse>): grpc.ClientUnaryCall;
  assign(argument: seaweedfs_weed_pb_master_pb.AssignRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.AssignResponse>): grpc.ClientUnaryCall;
  assign(argument: seaweedfs_weed_pb_master_pb.AssignRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.AssignResponse>): grpc.ClientUnaryCall;
  assign(argument: seaweedfs_weed_pb_master_pb.AssignRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.AssignResponse>): grpc.ClientUnaryCall;
  statistics(argument: seaweedfs_weed_pb_master_pb.StatisticsRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.StatisticsResponse>): grpc.ClientUnaryCall;
  statistics(argument: seaweedfs_weed_pb_master_pb.StatisticsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.StatisticsResponse>): grpc.ClientUnaryCall;
  statistics(argument: seaweedfs_weed_pb_master_pb.StatisticsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.StatisticsResponse>): grpc.ClientUnaryCall;
  collectionList(argument: seaweedfs_weed_pb_master_pb.CollectionListRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.CollectionListResponse>): grpc.ClientUnaryCall;
  collectionList(argument: seaweedfs_weed_pb_master_pb.CollectionListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.CollectionListResponse>): grpc.ClientUnaryCall;
  collectionList(argument: seaweedfs_weed_pb_master_pb.CollectionListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.CollectionListResponse>): grpc.ClientUnaryCall;
  collectionDelete(argument: seaweedfs_weed_pb_master_pb.CollectionDeleteRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.CollectionDeleteResponse>): grpc.ClientUnaryCall;
  collectionDelete(argument: seaweedfs_weed_pb_master_pb.CollectionDeleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.CollectionDeleteResponse>): grpc.ClientUnaryCall;
  collectionDelete(argument: seaweedfs_weed_pb_master_pb.CollectionDeleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.CollectionDeleteResponse>): grpc.ClientUnaryCall;
  volumeList(argument: seaweedfs_weed_pb_master_pb.VolumeListRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.VolumeListResponse>): grpc.ClientUnaryCall;
  volumeList(argument: seaweedfs_weed_pb_master_pb.VolumeListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.VolumeListResponse>): grpc.ClientUnaryCall;
  volumeList(argument: seaweedfs_weed_pb_master_pb.VolumeListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.VolumeListResponse>): grpc.ClientUnaryCall;
  lookupEcVolume(argument: seaweedfs_weed_pb_master_pb.LookupEcVolumeRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.LookupEcVolumeResponse>): grpc.ClientUnaryCall;
  lookupEcVolume(argument: seaweedfs_weed_pb_master_pb.LookupEcVolumeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.LookupEcVolumeResponse>): grpc.ClientUnaryCall;
  lookupEcVolume(argument: seaweedfs_weed_pb_master_pb.LookupEcVolumeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.LookupEcVolumeResponse>): grpc.ClientUnaryCall;
  getMasterConfiguration(argument: seaweedfs_weed_pb_master_pb.GetMasterConfigurationRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.GetMasterConfigurationResponse>): grpc.ClientUnaryCall;
  getMasterConfiguration(argument: seaweedfs_weed_pb_master_pb.GetMasterConfigurationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.GetMasterConfigurationResponse>): grpc.ClientUnaryCall;
  getMasterConfiguration(argument: seaweedfs_weed_pb_master_pb.GetMasterConfigurationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.GetMasterConfigurationResponse>): grpc.ClientUnaryCall;
  listMasterClients(argument: seaweedfs_weed_pb_master_pb.ListMasterClientsRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.ListMasterClientsResponse>): grpc.ClientUnaryCall;
  listMasterClients(argument: seaweedfs_weed_pb_master_pb.ListMasterClientsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.ListMasterClientsResponse>): grpc.ClientUnaryCall;
  listMasterClients(argument: seaweedfs_weed_pb_master_pb.ListMasterClientsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_master_pb.ListMasterClientsResponse>): grpc.ClientUnaryCall;
}
