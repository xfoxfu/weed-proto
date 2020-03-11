// GENERATED CODE -- DO NOT EDIT!

// package: volume_server_pb
// file: seaweedfs/weed/pb/volume_server.proto

import * as seaweedfs_weed_pb_volume_server_pb from "../../../seaweedfs/weed/pb/volume_server_pb";
import * as grpc from "grpc";

interface IVolumeServerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  batchDelete: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.BatchDeleteRequest, seaweedfs_weed_pb_volume_server_pb.BatchDeleteResponse>;
  fileGet: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.FileGetRequest, seaweedfs_weed_pb_volume_server_pb.FileGetResponse>;
  vacuumVolumeCheck: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCheckRequest, seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCheckResponse>;
  vacuumVolumeCompact: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCompactRequest, seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCompactResponse>;
  vacuumVolumeCommit: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCommitRequest, seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCommitResponse>;
  vacuumVolumeCleanup: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCleanupRequest, seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCleanupResponse>;
  deleteCollection: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.DeleteCollectionRequest, seaweedfs_weed_pb_volume_server_pb.DeleteCollectionResponse>;
  allocateVolume: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.AllocateVolumeRequest, seaweedfs_weed_pb_volume_server_pb.AllocateVolumeResponse>;
  volumeSyncStatus: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeSyncStatusRequest, seaweedfs_weed_pb_volume_server_pb.VolumeSyncStatusResponse>;
  volumeIncrementalCopy: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeIncrementalCopyRequest, seaweedfs_weed_pb_volume_server_pb.VolumeIncrementalCopyResponse>;
  volumeMount: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeMountRequest, seaweedfs_weed_pb_volume_server_pb.VolumeMountResponse>;
  volumeUnmount: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeUnmountRequest, seaweedfs_weed_pb_volume_server_pb.VolumeUnmountResponse>;
  volumeDelete: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeDeleteRequest, seaweedfs_weed_pb_volume_server_pb.VolumeDeleteResponse>;
  volumeMarkReadonly: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeMarkReadonlyRequest, seaweedfs_weed_pb_volume_server_pb.VolumeMarkReadonlyResponse>;
  volumeConfigure: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeConfigureRequest, seaweedfs_weed_pb_volume_server_pb.VolumeConfigureResponse>;
  volumeCopy: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeCopyRequest, seaweedfs_weed_pb_volume_server_pb.VolumeCopyResponse>;
  readVolumeFileStatus: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.ReadVolumeFileStatusRequest, seaweedfs_weed_pb_volume_server_pb.ReadVolumeFileStatusResponse>;
  copyFile: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.CopyFileRequest, seaweedfs_weed_pb_volume_server_pb.CopyFileResponse>;
  volumeTailSender: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeTailSenderRequest, seaweedfs_weed_pb_volume_server_pb.VolumeTailSenderResponse>;
  volumeTailReceiver: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeTailReceiverRequest, seaweedfs_weed_pb_volume_server_pb.VolumeTailReceiverResponse>;
  volumeEcShardsGenerate: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsGenerateRequest, seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsGenerateResponse>;
  volumeEcShardsRebuild: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsRebuildRequest, seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsRebuildResponse>;
  volumeEcShardsCopy: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsCopyRequest, seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsCopyResponse>;
  volumeEcShardsDelete: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsDeleteRequest, seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsDeleteResponse>;
  volumeEcShardsMount: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsMountRequest, seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsMountResponse>;
  volumeEcShardsUnmount: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsUnmountRequest, seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsUnmountResponse>;
  volumeEcShardRead: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardReadRequest, seaweedfs_weed_pb_volume_server_pb.VolumeEcShardReadResponse>;
  volumeEcBlobDelete: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeEcBlobDeleteRequest, seaweedfs_weed_pb_volume_server_pb.VolumeEcBlobDeleteResponse>;
  volumeEcShardsToVolume: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsToVolumeRequest, seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsToVolumeResponse>;
  volumeTierMoveDatToRemote: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeTierMoveDatToRemoteRequest, seaweedfs_weed_pb_volume_server_pb.VolumeTierMoveDatToRemoteResponse>;
  volumeTierMoveDatFromRemote: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeTierMoveDatFromRemoteRequest, seaweedfs_weed_pb_volume_server_pb.VolumeTierMoveDatFromRemoteResponse>;
  volumeServerStatus: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.VolumeServerStatusRequest, seaweedfs_weed_pb_volume_server_pb.VolumeServerStatusResponse>;
  query: grpc.MethodDefinition<seaweedfs_weed_pb_volume_server_pb.QueryRequest, seaweedfs_weed_pb_volume_server_pb.QueriedStripe>;
}

export const VolumeServerService: IVolumeServerService;

export class VolumeServerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  batchDelete(argument: seaweedfs_weed_pb_volume_server_pb.BatchDeleteRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.BatchDeleteResponse>): grpc.ClientUnaryCall;
  batchDelete(argument: seaweedfs_weed_pb_volume_server_pb.BatchDeleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.BatchDeleteResponse>): grpc.ClientUnaryCall;
  batchDelete(argument: seaweedfs_weed_pb_volume_server_pb.BatchDeleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.BatchDeleteResponse>): grpc.ClientUnaryCall;
  fileGet(argument: seaweedfs_weed_pb_volume_server_pb.FileGetRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_volume_server_pb.FileGetResponse>;
  fileGet(argument: seaweedfs_weed_pb_volume_server_pb.FileGetRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_volume_server_pb.FileGetResponse>;
  vacuumVolumeCheck(argument: seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCheckRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCheckResponse>): grpc.ClientUnaryCall;
  vacuumVolumeCheck(argument: seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCheckRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCheckResponse>): grpc.ClientUnaryCall;
  vacuumVolumeCheck(argument: seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCheckRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCheckResponse>): grpc.ClientUnaryCall;
  vacuumVolumeCompact(argument: seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCompactRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCompactResponse>): grpc.ClientUnaryCall;
  vacuumVolumeCompact(argument: seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCompactRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCompactResponse>): grpc.ClientUnaryCall;
  vacuumVolumeCompact(argument: seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCompactRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCompactResponse>): grpc.ClientUnaryCall;
  vacuumVolumeCommit(argument: seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCommitRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCommitResponse>): grpc.ClientUnaryCall;
  vacuumVolumeCommit(argument: seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCommitRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCommitResponse>): grpc.ClientUnaryCall;
  vacuumVolumeCommit(argument: seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCommitRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCommitResponse>): grpc.ClientUnaryCall;
  vacuumVolumeCleanup(argument: seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCleanupRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCleanupResponse>): grpc.ClientUnaryCall;
  vacuumVolumeCleanup(argument: seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCleanupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCleanupResponse>): grpc.ClientUnaryCall;
  vacuumVolumeCleanup(argument: seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCleanupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VacuumVolumeCleanupResponse>): grpc.ClientUnaryCall;
  deleteCollection(argument: seaweedfs_weed_pb_volume_server_pb.DeleteCollectionRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.DeleteCollectionResponse>): grpc.ClientUnaryCall;
  deleteCollection(argument: seaweedfs_weed_pb_volume_server_pb.DeleteCollectionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.DeleteCollectionResponse>): grpc.ClientUnaryCall;
  deleteCollection(argument: seaweedfs_weed_pb_volume_server_pb.DeleteCollectionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.DeleteCollectionResponse>): grpc.ClientUnaryCall;
  allocateVolume(argument: seaweedfs_weed_pb_volume_server_pb.AllocateVolumeRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.AllocateVolumeResponse>): grpc.ClientUnaryCall;
  allocateVolume(argument: seaweedfs_weed_pb_volume_server_pb.AllocateVolumeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.AllocateVolumeResponse>): grpc.ClientUnaryCall;
  allocateVolume(argument: seaweedfs_weed_pb_volume_server_pb.AllocateVolumeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.AllocateVolumeResponse>): grpc.ClientUnaryCall;
  volumeSyncStatus(argument: seaweedfs_weed_pb_volume_server_pb.VolumeSyncStatusRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeSyncStatusResponse>): grpc.ClientUnaryCall;
  volumeSyncStatus(argument: seaweedfs_weed_pb_volume_server_pb.VolumeSyncStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeSyncStatusResponse>): grpc.ClientUnaryCall;
  volumeSyncStatus(argument: seaweedfs_weed_pb_volume_server_pb.VolumeSyncStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeSyncStatusResponse>): grpc.ClientUnaryCall;
  volumeIncrementalCopy(argument: seaweedfs_weed_pb_volume_server_pb.VolumeIncrementalCopyRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_volume_server_pb.VolumeIncrementalCopyResponse>;
  volumeIncrementalCopy(argument: seaweedfs_weed_pb_volume_server_pb.VolumeIncrementalCopyRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_volume_server_pb.VolumeIncrementalCopyResponse>;
  volumeMount(argument: seaweedfs_weed_pb_volume_server_pb.VolumeMountRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeMountResponse>): grpc.ClientUnaryCall;
  volumeMount(argument: seaweedfs_weed_pb_volume_server_pb.VolumeMountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeMountResponse>): grpc.ClientUnaryCall;
  volumeMount(argument: seaweedfs_weed_pb_volume_server_pb.VolumeMountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeMountResponse>): grpc.ClientUnaryCall;
  volumeUnmount(argument: seaweedfs_weed_pb_volume_server_pb.VolumeUnmountRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeUnmountResponse>): grpc.ClientUnaryCall;
  volumeUnmount(argument: seaweedfs_weed_pb_volume_server_pb.VolumeUnmountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeUnmountResponse>): grpc.ClientUnaryCall;
  volumeUnmount(argument: seaweedfs_weed_pb_volume_server_pb.VolumeUnmountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeUnmountResponse>): grpc.ClientUnaryCall;
  volumeDelete(argument: seaweedfs_weed_pb_volume_server_pb.VolumeDeleteRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeDeleteResponse>): grpc.ClientUnaryCall;
  volumeDelete(argument: seaweedfs_weed_pb_volume_server_pb.VolumeDeleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeDeleteResponse>): grpc.ClientUnaryCall;
  volumeDelete(argument: seaweedfs_weed_pb_volume_server_pb.VolumeDeleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeDeleteResponse>): grpc.ClientUnaryCall;
  volumeMarkReadonly(argument: seaweedfs_weed_pb_volume_server_pb.VolumeMarkReadonlyRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeMarkReadonlyResponse>): grpc.ClientUnaryCall;
  volumeMarkReadonly(argument: seaweedfs_weed_pb_volume_server_pb.VolumeMarkReadonlyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeMarkReadonlyResponse>): grpc.ClientUnaryCall;
  volumeMarkReadonly(argument: seaweedfs_weed_pb_volume_server_pb.VolumeMarkReadonlyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeMarkReadonlyResponse>): grpc.ClientUnaryCall;
  volumeConfigure(argument: seaweedfs_weed_pb_volume_server_pb.VolumeConfigureRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeConfigureResponse>): grpc.ClientUnaryCall;
  volumeConfigure(argument: seaweedfs_weed_pb_volume_server_pb.VolumeConfigureRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeConfigureResponse>): grpc.ClientUnaryCall;
  volumeConfigure(argument: seaweedfs_weed_pb_volume_server_pb.VolumeConfigureRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeConfigureResponse>): grpc.ClientUnaryCall;
  volumeCopy(argument: seaweedfs_weed_pb_volume_server_pb.VolumeCopyRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeCopyResponse>): grpc.ClientUnaryCall;
  volumeCopy(argument: seaweedfs_weed_pb_volume_server_pb.VolumeCopyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeCopyResponse>): grpc.ClientUnaryCall;
  volumeCopy(argument: seaweedfs_weed_pb_volume_server_pb.VolumeCopyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeCopyResponse>): grpc.ClientUnaryCall;
  readVolumeFileStatus(argument: seaweedfs_weed_pb_volume_server_pb.ReadVolumeFileStatusRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.ReadVolumeFileStatusResponse>): grpc.ClientUnaryCall;
  readVolumeFileStatus(argument: seaweedfs_weed_pb_volume_server_pb.ReadVolumeFileStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.ReadVolumeFileStatusResponse>): grpc.ClientUnaryCall;
  readVolumeFileStatus(argument: seaweedfs_weed_pb_volume_server_pb.ReadVolumeFileStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.ReadVolumeFileStatusResponse>): grpc.ClientUnaryCall;
  copyFile(argument: seaweedfs_weed_pb_volume_server_pb.CopyFileRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_volume_server_pb.CopyFileResponse>;
  copyFile(argument: seaweedfs_weed_pb_volume_server_pb.CopyFileRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_volume_server_pb.CopyFileResponse>;
  volumeTailSender(argument: seaweedfs_weed_pb_volume_server_pb.VolumeTailSenderRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_volume_server_pb.VolumeTailSenderResponse>;
  volumeTailSender(argument: seaweedfs_weed_pb_volume_server_pb.VolumeTailSenderRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_volume_server_pb.VolumeTailSenderResponse>;
  volumeTailReceiver(argument: seaweedfs_weed_pb_volume_server_pb.VolumeTailReceiverRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeTailReceiverResponse>): grpc.ClientUnaryCall;
  volumeTailReceiver(argument: seaweedfs_weed_pb_volume_server_pb.VolumeTailReceiverRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeTailReceiverResponse>): grpc.ClientUnaryCall;
  volumeTailReceiver(argument: seaweedfs_weed_pb_volume_server_pb.VolumeTailReceiverRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeTailReceiverResponse>): grpc.ClientUnaryCall;
  volumeEcShardsGenerate(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsGenerateRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsGenerateResponse>): grpc.ClientUnaryCall;
  volumeEcShardsGenerate(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsGenerateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsGenerateResponse>): grpc.ClientUnaryCall;
  volumeEcShardsGenerate(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsGenerateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsGenerateResponse>): grpc.ClientUnaryCall;
  volumeEcShardsRebuild(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsRebuildRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsRebuildResponse>): grpc.ClientUnaryCall;
  volumeEcShardsRebuild(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsRebuildRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsRebuildResponse>): grpc.ClientUnaryCall;
  volumeEcShardsRebuild(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsRebuildRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsRebuildResponse>): grpc.ClientUnaryCall;
  volumeEcShardsCopy(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsCopyRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsCopyResponse>): grpc.ClientUnaryCall;
  volumeEcShardsCopy(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsCopyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsCopyResponse>): grpc.ClientUnaryCall;
  volumeEcShardsCopy(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsCopyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsCopyResponse>): grpc.ClientUnaryCall;
  volumeEcShardsDelete(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsDeleteRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsDeleteResponse>): grpc.ClientUnaryCall;
  volumeEcShardsDelete(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsDeleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsDeleteResponse>): grpc.ClientUnaryCall;
  volumeEcShardsDelete(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsDeleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsDeleteResponse>): grpc.ClientUnaryCall;
  volumeEcShardsMount(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsMountRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsMountResponse>): grpc.ClientUnaryCall;
  volumeEcShardsMount(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsMountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsMountResponse>): grpc.ClientUnaryCall;
  volumeEcShardsMount(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsMountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsMountResponse>): grpc.ClientUnaryCall;
  volumeEcShardsUnmount(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsUnmountRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsUnmountResponse>): grpc.ClientUnaryCall;
  volumeEcShardsUnmount(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsUnmountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsUnmountResponse>): grpc.ClientUnaryCall;
  volumeEcShardsUnmount(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsUnmountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsUnmountResponse>): grpc.ClientUnaryCall;
  volumeEcShardRead(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardReadRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardReadResponse>;
  volumeEcShardRead(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardReadRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardReadResponse>;
  volumeEcBlobDelete(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcBlobDeleteRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcBlobDeleteResponse>): grpc.ClientUnaryCall;
  volumeEcBlobDelete(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcBlobDeleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcBlobDeleteResponse>): grpc.ClientUnaryCall;
  volumeEcBlobDelete(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcBlobDeleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcBlobDeleteResponse>): grpc.ClientUnaryCall;
  volumeEcShardsToVolume(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsToVolumeRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsToVolumeResponse>): grpc.ClientUnaryCall;
  volumeEcShardsToVolume(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsToVolumeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsToVolumeResponse>): grpc.ClientUnaryCall;
  volumeEcShardsToVolume(argument: seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsToVolumeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeEcShardsToVolumeResponse>): grpc.ClientUnaryCall;
  volumeTierMoveDatToRemote(argument: seaweedfs_weed_pb_volume_server_pb.VolumeTierMoveDatToRemoteRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_volume_server_pb.VolumeTierMoveDatToRemoteResponse>;
  volumeTierMoveDatToRemote(argument: seaweedfs_weed_pb_volume_server_pb.VolumeTierMoveDatToRemoteRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_volume_server_pb.VolumeTierMoveDatToRemoteResponse>;
  volumeTierMoveDatFromRemote(argument: seaweedfs_weed_pb_volume_server_pb.VolumeTierMoveDatFromRemoteRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_volume_server_pb.VolumeTierMoveDatFromRemoteResponse>;
  volumeTierMoveDatFromRemote(argument: seaweedfs_weed_pb_volume_server_pb.VolumeTierMoveDatFromRemoteRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_volume_server_pb.VolumeTierMoveDatFromRemoteResponse>;
  volumeServerStatus(argument: seaweedfs_weed_pb_volume_server_pb.VolumeServerStatusRequest, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeServerStatusResponse>): grpc.ClientUnaryCall;
  volumeServerStatus(argument: seaweedfs_weed_pb_volume_server_pb.VolumeServerStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeServerStatusResponse>): grpc.ClientUnaryCall;
  volumeServerStatus(argument: seaweedfs_weed_pb_volume_server_pb.VolumeServerStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<seaweedfs_weed_pb_volume_server_pb.VolumeServerStatusResponse>): grpc.ClientUnaryCall;
  query(argument: seaweedfs_weed_pb_volume_server_pb.QueryRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_volume_server_pb.QueriedStripe>;
  query(argument: seaweedfs_weed_pb_volume_server_pb.QueryRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<seaweedfs_weed_pb_volume_server_pb.QueriedStripe>;
}
