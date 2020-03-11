// GENERATED CODE -- DO NOT EDIT!

// package: filer_pb
// file: seaweedfs/weed/pb/filer.proto

import * as seaweedfs_weed_pb_filer_pb from "../../../seaweedfs/weed/pb/filer_pb";
import * as grpc from "grpc";

interface ISeaweedFilerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  lookupDirectoryEntry: grpc.MethodDefinition<seaweedfs_weed_pb_filer_pb.LookupDirectoryEntryRequest, seaweedfs_weed_pb_filer_pb.LookupDirectoryEntryResponse>;
  listEntries: grpc.MethodDefinition<seaweedfs_weed_pb_filer_pb.ListEntriesRequest, seaweedfs_weed_pb_filer_pb.ListEntriesResponse>;
  createEntry: grpc.MethodDefinition<seaweedfs_weed_pb_filer_pb.CreateEntryRequest, seaweedfs_weed_pb_filer_pb.CreateEntryResponse>;
  updateEntry: grpc.MethodDefinition<seaweedfs_weed_pb_filer_pb.UpdateEntryRequest, seaweedfs_weed_pb_filer_pb.UpdateEntryResponse>;
  deleteEntry: grpc.MethodDefinition<seaweedfs_weed_pb_filer_pb.DeleteEntryRequest, seaweedfs_weed_pb_filer_pb.DeleteEntryResponse>;
  streamDeleteEntries: grpc.MethodDefinition<seaweedfs_weed_pb_filer_pb.DeleteEntryRequest, seaweedfs_weed_pb_filer_pb.DeleteEntryResponse>;
  atomicRenameEntry: grpc.MethodDefinition<seaweedfs_weed_pb_filer_pb.AtomicRenameEntryRequest, seaweedfs_weed_pb_filer_pb.AtomicRenameEntryResponse>;
  assignVolume: grpc.MethodDefinition<seaweedfs_weed_pb_filer_pb.AssignVolumeRequest, seaweedfs_weed_pb_filer_pb.AssignVolumeResponse>;
  lookupVolume: grpc.MethodDefinition<seaweedfs_weed_pb_filer_pb.LookupVolumeRequest, seaweedfs_weed_pb_filer_pb.LookupVolumeResponse>;
  deleteCollection: grpc.MethodDefinition<seaweedfs_weed_pb_filer_pb.DeleteCollectionRequest, seaweedfs_weed_pb_filer_pb.DeleteCollectionResponse>;
  statistics: grpc.MethodDefinition<seaweedfs_weed_pb_filer_pb.StatisticsRequest, seaweedfs_weed_pb_filer_pb.StatisticsResponse>;
  getFilerConfiguration: grpc.MethodDefinition<seaweedfs_weed_pb_filer_pb.GetFilerConfigurationRequest, seaweedfs_weed_pb_filer_pb.GetFilerConfigurationResponse>;
}

export const SeaweedFilerService: ISeaweedFilerService;

export class SeaweedFilerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  lookupDirectoryEntry(argument: seaweedfs_weed_pb_filer_pb.LookupDirectoryEntryRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.LookupDirectoryEntryResponse>): grpc.ClientUnaryCall;
  lookupDirectoryEntry(argument: seaweedfs_weed_pb_filer_pb.LookupDirectoryEntryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.LookupDirectoryEntryResponse>): grpc.ClientUnaryCall;
  lookupDirectoryEntry(argument: seaweedfs_weed_pb_filer_pb.LookupDirectoryEntryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.LookupDirectoryEntryResponse>): grpc.ClientUnaryCall;
  listEntries(argument: seaweedfs_weed_pb_filer_pb.ListEntriesRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_filer_pb.ListEntriesResponse>;
  listEntries(argument: seaweedfs_weed_pb_filer_pb.ListEntriesRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_filer_pb.ListEntriesResponse>;
  createEntry(argument: seaweedfs_weed_pb_filer_pb.CreateEntryRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.CreateEntryResponse>): grpc.ClientUnaryCall;
  createEntry(argument: seaweedfs_weed_pb_filer_pb.CreateEntryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.CreateEntryResponse>): grpc.ClientUnaryCall;
  createEntry(argument: seaweedfs_weed_pb_filer_pb.CreateEntryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.CreateEntryResponse>): grpc.ClientUnaryCall;
  updateEntry(argument: seaweedfs_weed_pb_filer_pb.UpdateEntryRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.UpdateEntryResponse>): grpc.ClientUnaryCall;
  updateEntry(argument: seaweedfs_weed_pb_filer_pb.UpdateEntryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.UpdateEntryResponse>): grpc.ClientUnaryCall;
  updateEntry(argument: seaweedfs_weed_pb_filer_pb.UpdateEntryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.UpdateEntryResponse>): grpc.ClientUnaryCall;
  deleteEntry(argument: seaweedfs_weed_pb_filer_pb.DeleteEntryRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.DeleteEntryResponse>): grpc.ClientUnaryCall;
  deleteEntry(argument: seaweedfs_weed_pb_filer_pb.DeleteEntryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.DeleteEntryResponse>): grpc.ClientUnaryCall;
  deleteEntry(argument: seaweedfs_weed_pb_filer_pb.DeleteEntryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.DeleteEntryResponse>): grpc.ClientUnaryCall;
  streamDeleteEntries(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<seaweedfs_weed_pb_filer_pb.DeleteEntryRequest, seaweedfs_weed_pb_filer_pb.DeleteEntryResponse>;
  streamDeleteEntries(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<seaweedfs_weed_pb_filer_pb.DeleteEntryRequest, seaweedfs_weed_pb_filer_pb.DeleteEntryResponse>;
  atomicRenameEntry(argument: seaweedfs_weed_pb_filer_pb.AtomicRenameEntryRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.AtomicRenameEntryResponse>): grpc.ClientUnaryCall;
  atomicRenameEntry(argument: seaweedfs_weed_pb_filer_pb.AtomicRenameEntryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.AtomicRenameEntryResponse>): grpc.ClientUnaryCall;
  atomicRenameEntry(argument: seaweedfs_weed_pb_filer_pb.AtomicRenameEntryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.AtomicRenameEntryResponse>): grpc.ClientUnaryCall;
  assignVolume(argument: seaweedfs_weed_pb_filer_pb.AssignVolumeRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.AssignVolumeResponse>): grpc.ClientUnaryCall;
  assignVolume(argument: seaweedfs_weed_pb_filer_pb.AssignVolumeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.AssignVolumeResponse>): grpc.ClientUnaryCall;
  assignVolume(argument: seaweedfs_weed_pb_filer_pb.AssignVolumeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.AssignVolumeResponse>): grpc.ClientUnaryCall;
  lookupVolume(argument: seaweedfs_weed_pb_filer_pb.LookupVolumeRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.LookupVolumeResponse>): grpc.ClientUnaryCall;
  lookupVolume(argument: seaweedfs_weed_pb_filer_pb.LookupVolumeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.LookupVolumeResponse>): grpc.ClientUnaryCall;
  lookupVolume(argument: seaweedfs_weed_pb_filer_pb.LookupVolumeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.LookupVolumeResponse>): grpc.ClientUnaryCall;
  deleteCollection(argument: seaweedfs_weed_pb_filer_pb.DeleteCollectionRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.DeleteCollectionResponse>): grpc.ClientUnaryCall;
  deleteCollection(argument: seaweedfs_weed_pb_filer_pb.DeleteCollectionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.DeleteCollectionResponse>): grpc.ClientUnaryCall;
  deleteCollection(argument: seaweedfs_weed_pb_filer_pb.DeleteCollectionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.DeleteCollectionResponse>): grpc.ClientUnaryCall;
  statistics(argument: seaweedfs_weed_pb_filer_pb.StatisticsRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.StatisticsResponse>): grpc.ClientUnaryCall;
  statistics(argument: seaweedfs_weed_pb_filer_pb.StatisticsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.StatisticsResponse>): grpc.ClientUnaryCall;
  statistics(argument: seaweedfs_weed_pb_filer_pb.StatisticsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.StatisticsResponse>): grpc.ClientUnaryCall;
  getFilerConfiguration(argument: seaweedfs_weed_pb_filer_pb.GetFilerConfigurationRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.GetFilerConfigurationResponse>): grpc.ClientUnaryCall;
  getFilerConfiguration(argument: seaweedfs_weed_pb_filer_pb.GetFilerConfigurationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.GetFilerConfigurationResponse>): grpc.ClientUnaryCall;
  getFilerConfiguration(argument: seaweedfs_weed_pb_filer_pb.GetFilerConfigurationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_filer_pb.GetFilerConfigurationResponse>): grpc.ClientUnaryCall;
}
