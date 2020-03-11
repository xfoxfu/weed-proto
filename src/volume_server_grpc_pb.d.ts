// package: volume_server_pb
// file: volume_server.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as volume_server_pb from "./volume_server_pb";

interface IVolumeServerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    batchDelete: IVolumeServerService_IBatchDelete;
    fileGet: IVolumeServerService_IFileGet;
    vacuumVolumeCheck: IVolumeServerService_IVacuumVolumeCheck;
    vacuumVolumeCompact: IVolumeServerService_IVacuumVolumeCompact;
    vacuumVolumeCommit: IVolumeServerService_IVacuumVolumeCommit;
    vacuumVolumeCleanup: IVolumeServerService_IVacuumVolumeCleanup;
    deleteCollection: IVolumeServerService_IDeleteCollection;
    allocateVolume: IVolumeServerService_IAllocateVolume;
    volumeSyncStatus: IVolumeServerService_IVolumeSyncStatus;
    volumeIncrementalCopy: IVolumeServerService_IVolumeIncrementalCopy;
    volumeMount: IVolumeServerService_IVolumeMount;
    volumeUnmount: IVolumeServerService_IVolumeUnmount;
    volumeDelete: IVolumeServerService_IVolumeDelete;
    volumeMarkReadonly: IVolumeServerService_IVolumeMarkReadonly;
    volumeConfigure: IVolumeServerService_IVolumeConfigure;
    volumeCopy: IVolumeServerService_IVolumeCopy;
    readVolumeFileStatus: IVolumeServerService_IReadVolumeFileStatus;
    copyFile: IVolumeServerService_ICopyFile;
    volumeTailSender: IVolumeServerService_IVolumeTailSender;
    volumeTailReceiver: IVolumeServerService_IVolumeTailReceiver;
    volumeEcShardsGenerate: IVolumeServerService_IVolumeEcShardsGenerate;
    volumeEcShardsRebuild: IVolumeServerService_IVolumeEcShardsRebuild;
    volumeEcShardsCopy: IVolumeServerService_IVolumeEcShardsCopy;
    volumeEcShardsDelete: IVolumeServerService_IVolumeEcShardsDelete;
    volumeEcShardsMount: IVolumeServerService_IVolumeEcShardsMount;
    volumeEcShardsUnmount: IVolumeServerService_IVolumeEcShardsUnmount;
    volumeEcShardRead: IVolumeServerService_IVolumeEcShardRead;
    volumeEcBlobDelete: IVolumeServerService_IVolumeEcBlobDelete;
    volumeEcShardsToVolume: IVolumeServerService_IVolumeEcShardsToVolume;
    volumeTierMoveDatToRemote: IVolumeServerService_IVolumeTierMoveDatToRemote;
    volumeTierMoveDatFromRemote: IVolumeServerService_IVolumeTierMoveDatFromRemote;
    volumeServerStatus: IVolumeServerService_IVolumeServerStatus;
    query: IVolumeServerService_IQuery;
}

interface IVolumeServerService_IBatchDelete extends grpc.MethodDefinition<volume_server_pb.BatchDeleteRequest, volume_server_pb.BatchDeleteResponse> {
    path: string; // "/volume_server_pb.VolumeServer/BatchDelete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.BatchDeleteRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.BatchDeleteRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.BatchDeleteResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.BatchDeleteResponse>;
}
interface IVolumeServerService_IFileGet extends grpc.MethodDefinition<volume_server_pb.FileGetRequest, volume_server_pb.FileGetResponse> {
    path: string; // "/volume_server_pb.VolumeServer/FileGet"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<volume_server_pb.FileGetRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.FileGetRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.FileGetResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.FileGetResponse>;
}
interface IVolumeServerService_IVacuumVolumeCheck extends grpc.MethodDefinition<volume_server_pb.VacuumVolumeCheckRequest, volume_server_pb.VacuumVolumeCheckResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VacuumVolumeCheck"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VacuumVolumeCheckRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VacuumVolumeCheckRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VacuumVolumeCheckResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VacuumVolumeCheckResponse>;
}
interface IVolumeServerService_IVacuumVolumeCompact extends grpc.MethodDefinition<volume_server_pb.VacuumVolumeCompactRequest, volume_server_pb.VacuumVolumeCompactResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VacuumVolumeCompact"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VacuumVolumeCompactRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VacuumVolumeCompactRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VacuumVolumeCompactResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VacuumVolumeCompactResponse>;
}
interface IVolumeServerService_IVacuumVolumeCommit extends grpc.MethodDefinition<volume_server_pb.VacuumVolumeCommitRequest, volume_server_pb.VacuumVolumeCommitResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VacuumVolumeCommit"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VacuumVolumeCommitRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VacuumVolumeCommitRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VacuumVolumeCommitResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VacuumVolumeCommitResponse>;
}
interface IVolumeServerService_IVacuumVolumeCleanup extends grpc.MethodDefinition<volume_server_pb.VacuumVolumeCleanupRequest, volume_server_pb.VacuumVolumeCleanupResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VacuumVolumeCleanup"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VacuumVolumeCleanupRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VacuumVolumeCleanupRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VacuumVolumeCleanupResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VacuumVolumeCleanupResponse>;
}
interface IVolumeServerService_IDeleteCollection extends grpc.MethodDefinition<volume_server_pb.DeleteCollectionRequest, volume_server_pb.DeleteCollectionResponse> {
    path: string; // "/volume_server_pb.VolumeServer/DeleteCollection"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.DeleteCollectionRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.DeleteCollectionRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.DeleteCollectionResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.DeleteCollectionResponse>;
}
interface IVolumeServerService_IAllocateVolume extends grpc.MethodDefinition<volume_server_pb.AllocateVolumeRequest, volume_server_pb.AllocateVolumeResponse> {
    path: string; // "/volume_server_pb.VolumeServer/AllocateVolume"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.AllocateVolumeRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.AllocateVolumeRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.AllocateVolumeResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.AllocateVolumeResponse>;
}
interface IVolumeServerService_IVolumeSyncStatus extends grpc.MethodDefinition<volume_server_pb.VolumeSyncStatusRequest, volume_server_pb.VolumeSyncStatusResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeSyncStatus"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VolumeSyncStatusRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeSyncStatusRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeSyncStatusResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeSyncStatusResponse>;
}
interface IVolumeServerService_IVolumeIncrementalCopy extends grpc.MethodDefinition<volume_server_pb.VolumeIncrementalCopyRequest, volume_server_pb.VolumeIncrementalCopyResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeIncrementalCopy"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<volume_server_pb.VolumeIncrementalCopyRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeIncrementalCopyRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeIncrementalCopyResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeIncrementalCopyResponse>;
}
interface IVolumeServerService_IVolumeMount extends grpc.MethodDefinition<volume_server_pb.VolumeMountRequest, volume_server_pb.VolumeMountResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeMount"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VolumeMountRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeMountRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeMountResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeMountResponse>;
}
interface IVolumeServerService_IVolumeUnmount extends grpc.MethodDefinition<volume_server_pb.VolumeUnmountRequest, volume_server_pb.VolumeUnmountResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeUnmount"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VolumeUnmountRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeUnmountRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeUnmountResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeUnmountResponse>;
}
interface IVolumeServerService_IVolumeDelete extends grpc.MethodDefinition<volume_server_pb.VolumeDeleteRequest, volume_server_pb.VolumeDeleteResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeDelete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VolumeDeleteRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeDeleteRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeDeleteResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeDeleteResponse>;
}
interface IVolumeServerService_IVolumeMarkReadonly extends grpc.MethodDefinition<volume_server_pb.VolumeMarkReadonlyRequest, volume_server_pb.VolumeMarkReadonlyResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeMarkReadonly"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VolumeMarkReadonlyRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeMarkReadonlyRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeMarkReadonlyResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeMarkReadonlyResponse>;
}
interface IVolumeServerService_IVolumeConfigure extends grpc.MethodDefinition<volume_server_pb.VolumeConfigureRequest, volume_server_pb.VolumeConfigureResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeConfigure"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VolumeConfigureRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeConfigureRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeConfigureResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeConfigureResponse>;
}
interface IVolumeServerService_IVolumeCopy extends grpc.MethodDefinition<volume_server_pb.VolumeCopyRequest, volume_server_pb.VolumeCopyResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeCopy"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VolumeCopyRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeCopyRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeCopyResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeCopyResponse>;
}
interface IVolumeServerService_IReadVolumeFileStatus extends grpc.MethodDefinition<volume_server_pb.ReadVolumeFileStatusRequest, volume_server_pb.ReadVolumeFileStatusResponse> {
    path: string; // "/volume_server_pb.VolumeServer/ReadVolumeFileStatus"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.ReadVolumeFileStatusRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.ReadVolumeFileStatusRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.ReadVolumeFileStatusResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.ReadVolumeFileStatusResponse>;
}
interface IVolumeServerService_ICopyFile extends grpc.MethodDefinition<volume_server_pb.CopyFileRequest, volume_server_pb.CopyFileResponse> {
    path: string; // "/volume_server_pb.VolumeServer/CopyFile"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<volume_server_pb.CopyFileRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.CopyFileRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.CopyFileResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.CopyFileResponse>;
}
interface IVolumeServerService_IVolumeTailSender extends grpc.MethodDefinition<volume_server_pb.VolumeTailSenderRequest, volume_server_pb.VolumeTailSenderResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeTailSender"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<volume_server_pb.VolumeTailSenderRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeTailSenderRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeTailSenderResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeTailSenderResponse>;
}
interface IVolumeServerService_IVolumeTailReceiver extends grpc.MethodDefinition<volume_server_pb.VolumeTailReceiverRequest, volume_server_pb.VolumeTailReceiverResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeTailReceiver"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VolumeTailReceiverRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeTailReceiverRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeTailReceiverResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeTailReceiverResponse>;
}
interface IVolumeServerService_IVolumeEcShardsGenerate extends grpc.MethodDefinition<volume_server_pb.VolumeEcShardsGenerateRequest, volume_server_pb.VolumeEcShardsGenerateResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeEcShardsGenerate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VolumeEcShardsGenerateRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeEcShardsGenerateRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeEcShardsGenerateResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeEcShardsGenerateResponse>;
}
interface IVolumeServerService_IVolumeEcShardsRebuild extends grpc.MethodDefinition<volume_server_pb.VolumeEcShardsRebuildRequest, volume_server_pb.VolumeEcShardsRebuildResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeEcShardsRebuild"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VolumeEcShardsRebuildRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeEcShardsRebuildRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeEcShardsRebuildResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeEcShardsRebuildResponse>;
}
interface IVolumeServerService_IVolumeEcShardsCopy extends grpc.MethodDefinition<volume_server_pb.VolumeEcShardsCopyRequest, volume_server_pb.VolumeEcShardsCopyResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeEcShardsCopy"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VolumeEcShardsCopyRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeEcShardsCopyRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeEcShardsCopyResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeEcShardsCopyResponse>;
}
interface IVolumeServerService_IVolumeEcShardsDelete extends grpc.MethodDefinition<volume_server_pb.VolumeEcShardsDeleteRequest, volume_server_pb.VolumeEcShardsDeleteResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeEcShardsDelete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VolumeEcShardsDeleteRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeEcShardsDeleteRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeEcShardsDeleteResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeEcShardsDeleteResponse>;
}
interface IVolumeServerService_IVolumeEcShardsMount extends grpc.MethodDefinition<volume_server_pb.VolumeEcShardsMountRequest, volume_server_pb.VolumeEcShardsMountResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeEcShardsMount"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VolumeEcShardsMountRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeEcShardsMountRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeEcShardsMountResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeEcShardsMountResponse>;
}
interface IVolumeServerService_IVolumeEcShardsUnmount extends grpc.MethodDefinition<volume_server_pb.VolumeEcShardsUnmountRequest, volume_server_pb.VolumeEcShardsUnmountResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeEcShardsUnmount"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VolumeEcShardsUnmountRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeEcShardsUnmountRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeEcShardsUnmountResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeEcShardsUnmountResponse>;
}
interface IVolumeServerService_IVolumeEcShardRead extends grpc.MethodDefinition<volume_server_pb.VolumeEcShardReadRequest, volume_server_pb.VolumeEcShardReadResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeEcShardRead"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<volume_server_pb.VolumeEcShardReadRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeEcShardReadRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeEcShardReadResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeEcShardReadResponse>;
}
interface IVolumeServerService_IVolumeEcBlobDelete extends grpc.MethodDefinition<volume_server_pb.VolumeEcBlobDeleteRequest, volume_server_pb.VolumeEcBlobDeleteResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeEcBlobDelete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VolumeEcBlobDeleteRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeEcBlobDeleteRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeEcBlobDeleteResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeEcBlobDeleteResponse>;
}
interface IVolumeServerService_IVolumeEcShardsToVolume extends grpc.MethodDefinition<volume_server_pb.VolumeEcShardsToVolumeRequest, volume_server_pb.VolumeEcShardsToVolumeResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeEcShardsToVolume"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VolumeEcShardsToVolumeRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeEcShardsToVolumeRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeEcShardsToVolumeResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeEcShardsToVolumeResponse>;
}
interface IVolumeServerService_IVolumeTierMoveDatToRemote extends grpc.MethodDefinition<volume_server_pb.VolumeTierMoveDatToRemoteRequest, volume_server_pb.VolumeTierMoveDatToRemoteResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeTierMoveDatToRemote"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<volume_server_pb.VolumeTierMoveDatToRemoteRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeTierMoveDatToRemoteRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeTierMoveDatToRemoteResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeTierMoveDatToRemoteResponse>;
}
interface IVolumeServerService_IVolumeTierMoveDatFromRemote extends grpc.MethodDefinition<volume_server_pb.VolumeTierMoveDatFromRemoteRequest, volume_server_pb.VolumeTierMoveDatFromRemoteResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeTierMoveDatFromRemote"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<volume_server_pb.VolumeTierMoveDatFromRemoteRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeTierMoveDatFromRemoteRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeTierMoveDatFromRemoteResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeTierMoveDatFromRemoteResponse>;
}
interface IVolumeServerService_IVolumeServerStatus extends grpc.MethodDefinition<volume_server_pb.VolumeServerStatusRequest, volume_server_pb.VolumeServerStatusResponse> {
    path: string; // "/volume_server_pb.VolumeServer/VolumeServerStatus"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<volume_server_pb.VolumeServerStatusRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.VolumeServerStatusRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.VolumeServerStatusResponse>;
    responseDeserialize: grpc.deserialize<volume_server_pb.VolumeServerStatusResponse>;
}
interface IVolumeServerService_IQuery extends grpc.MethodDefinition<volume_server_pb.QueryRequest, volume_server_pb.QueriedStripe> {
    path: string; // "/volume_server_pb.VolumeServer/Query"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<volume_server_pb.QueryRequest>;
    requestDeserialize: grpc.deserialize<volume_server_pb.QueryRequest>;
    responseSerialize: grpc.serialize<volume_server_pb.QueriedStripe>;
    responseDeserialize: grpc.deserialize<volume_server_pb.QueriedStripe>;
}

export const VolumeServerService: IVolumeServerService;

export interface IVolumeServerServer {
    batchDelete: grpc.handleUnaryCall<volume_server_pb.BatchDeleteRequest, volume_server_pb.BatchDeleteResponse>;
    fileGet: grpc.handleServerStreamingCall<volume_server_pb.FileGetRequest, volume_server_pb.FileGetResponse>;
    vacuumVolumeCheck: grpc.handleUnaryCall<volume_server_pb.VacuumVolumeCheckRequest, volume_server_pb.VacuumVolumeCheckResponse>;
    vacuumVolumeCompact: grpc.handleUnaryCall<volume_server_pb.VacuumVolumeCompactRequest, volume_server_pb.VacuumVolumeCompactResponse>;
    vacuumVolumeCommit: grpc.handleUnaryCall<volume_server_pb.VacuumVolumeCommitRequest, volume_server_pb.VacuumVolumeCommitResponse>;
    vacuumVolumeCleanup: grpc.handleUnaryCall<volume_server_pb.VacuumVolumeCleanupRequest, volume_server_pb.VacuumVolumeCleanupResponse>;
    deleteCollection: grpc.handleUnaryCall<volume_server_pb.DeleteCollectionRequest, volume_server_pb.DeleteCollectionResponse>;
    allocateVolume: grpc.handleUnaryCall<volume_server_pb.AllocateVolumeRequest, volume_server_pb.AllocateVolumeResponse>;
    volumeSyncStatus: grpc.handleUnaryCall<volume_server_pb.VolumeSyncStatusRequest, volume_server_pb.VolumeSyncStatusResponse>;
    volumeIncrementalCopy: grpc.handleServerStreamingCall<volume_server_pb.VolumeIncrementalCopyRequest, volume_server_pb.VolumeIncrementalCopyResponse>;
    volumeMount: grpc.handleUnaryCall<volume_server_pb.VolumeMountRequest, volume_server_pb.VolumeMountResponse>;
    volumeUnmount: grpc.handleUnaryCall<volume_server_pb.VolumeUnmountRequest, volume_server_pb.VolumeUnmountResponse>;
    volumeDelete: grpc.handleUnaryCall<volume_server_pb.VolumeDeleteRequest, volume_server_pb.VolumeDeleteResponse>;
    volumeMarkReadonly: grpc.handleUnaryCall<volume_server_pb.VolumeMarkReadonlyRequest, volume_server_pb.VolumeMarkReadonlyResponse>;
    volumeConfigure: grpc.handleUnaryCall<volume_server_pb.VolumeConfigureRequest, volume_server_pb.VolumeConfigureResponse>;
    volumeCopy: grpc.handleUnaryCall<volume_server_pb.VolumeCopyRequest, volume_server_pb.VolumeCopyResponse>;
    readVolumeFileStatus: grpc.handleUnaryCall<volume_server_pb.ReadVolumeFileStatusRequest, volume_server_pb.ReadVolumeFileStatusResponse>;
    copyFile: grpc.handleServerStreamingCall<volume_server_pb.CopyFileRequest, volume_server_pb.CopyFileResponse>;
    volumeTailSender: grpc.handleServerStreamingCall<volume_server_pb.VolumeTailSenderRequest, volume_server_pb.VolumeTailSenderResponse>;
    volumeTailReceiver: grpc.handleUnaryCall<volume_server_pb.VolumeTailReceiverRequest, volume_server_pb.VolumeTailReceiverResponse>;
    volumeEcShardsGenerate: grpc.handleUnaryCall<volume_server_pb.VolumeEcShardsGenerateRequest, volume_server_pb.VolumeEcShardsGenerateResponse>;
    volumeEcShardsRebuild: grpc.handleUnaryCall<volume_server_pb.VolumeEcShardsRebuildRequest, volume_server_pb.VolumeEcShardsRebuildResponse>;
    volumeEcShardsCopy: grpc.handleUnaryCall<volume_server_pb.VolumeEcShardsCopyRequest, volume_server_pb.VolumeEcShardsCopyResponse>;
    volumeEcShardsDelete: grpc.handleUnaryCall<volume_server_pb.VolumeEcShardsDeleteRequest, volume_server_pb.VolumeEcShardsDeleteResponse>;
    volumeEcShardsMount: grpc.handleUnaryCall<volume_server_pb.VolumeEcShardsMountRequest, volume_server_pb.VolumeEcShardsMountResponse>;
    volumeEcShardsUnmount: grpc.handleUnaryCall<volume_server_pb.VolumeEcShardsUnmountRequest, volume_server_pb.VolumeEcShardsUnmountResponse>;
    volumeEcShardRead: grpc.handleServerStreamingCall<volume_server_pb.VolumeEcShardReadRequest, volume_server_pb.VolumeEcShardReadResponse>;
    volumeEcBlobDelete: grpc.handleUnaryCall<volume_server_pb.VolumeEcBlobDeleteRequest, volume_server_pb.VolumeEcBlobDeleteResponse>;
    volumeEcShardsToVolume: grpc.handleUnaryCall<volume_server_pb.VolumeEcShardsToVolumeRequest, volume_server_pb.VolumeEcShardsToVolumeResponse>;
    volumeTierMoveDatToRemote: grpc.handleServerStreamingCall<volume_server_pb.VolumeTierMoveDatToRemoteRequest, volume_server_pb.VolumeTierMoveDatToRemoteResponse>;
    volumeTierMoveDatFromRemote: grpc.handleServerStreamingCall<volume_server_pb.VolumeTierMoveDatFromRemoteRequest, volume_server_pb.VolumeTierMoveDatFromRemoteResponse>;
    volumeServerStatus: grpc.handleUnaryCall<volume_server_pb.VolumeServerStatusRequest, volume_server_pb.VolumeServerStatusResponse>;
    query: grpc.handleServerStreamingCall<volume_server_pb.QueryRequest, volume_server_pb.QueriedStripe>;
}

export interface IVolumeServerClient {
    batchDelete(request: volume_server_pb.BatchDeleteRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.BatchDeleteResponse) => void): grpc.ClientUnaryCall;
    batchDelete(request: volume_server_pb.BatchDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.BatchDeleteResponse) => void): grpc.ClientUnaryCall;
    batchDelete(request: volume_server_pb.BatchDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.BatchDeleteResponse) => void): grpc.ClientUnaryCall;
    fileGet(request: volume_server_pb.FileGetRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.FileGetResponse>;
    fileGet(request: volume_server_pb.FileGetRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.FileGetResponse>;
    vacuumVolumeCheck(request: volume_server_pb.VacuumVolumeCheckRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCheckResponse) => void): grpc.ClientUnaryCall;
    vacuumVolumeCheck(request: volume_server_pb.VacuumVolumeCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCheckResponse) => void): grpc.ClientUnaryCall;
    vacuumVolumeCheck(request: volume_server_pb.VacuumVolumeCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCheckResponse) => void): grpc.ClientUnaryCall;
    vacuumVolumeCompact(request: volume_server_pb.VacuumVolumeCompactRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCompactResponse) => void): grpc.ClientUnaryCall;
    vacuumVolumeCompact(request: volume_server_pb.VacuumVolumeCompactRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCompactResponse) => void): grpc.ClientUnaryCall;
    vacuumVolumeCompact(request: volume_server_pb.VacuumVolumeCompactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCompactResponse) => void): grpc.ClientUnaryCall;
    vacuumVolumeCommit(request: volume_server_pb.VacuumVolumeCommitRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCommitResponse) => void): grpc.ClientUnaryCall;
    vacuumVolumeCommit(request: volume_server_pb.VacuumVolumeCommitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCommitResponse) => void): grpc.ClientUnaryCall;
    vacuumVolumeCommit(request: volume_server_pb.VacuumVolumeCommitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCommitResponse) => void): grpc.ClientUnaryCall;
    vacuumVolumeCleanup(request: volume_server_pb.VacuumVolumeCleanupRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCleanupResponse) => void): grpc.ClientUnaryCall;
    vacuumVolumeCleanup(request: volume_server_pb.VacuumVolumeCleanupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCleanupResponse) => void): grpc.ClientUnaryCall;
    vacuumVolumeCleanup(request: volume_server_pb.VacuumVolumeCleanupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCleanupResponse) => void): grpc.ClientUnaryCall;
    deleteCollection(request: volume_server_pb.DeleteCollectionRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.DeleteCollectionResponse) => void): grpc.ClientUnaryCall;
    deleteCollection(request: volume_server_pb.DeleteCollectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.DeleteCollectionResponse) => void): grpc.ClientUnaryCall;
    deleteCollection(request: volume_server_pb.DeleteCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.DeleteCollectionResponse) => void): grpc.ClientUnaryCall;
    allocateVolume(request: volume_server_pb.AllocateVolumeRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.AllocateVolumeResponse) => void): grpc.ClientUnaryCall;
    allocateVolume(request: volume_server_pb.AllocateVolumeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.AllocateVolumeResponse) => void): grpc.ClientUnaryCall;
    allocateVolume(request: volume_server_pb.AllocateVolumeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.AllocateVolumeResponse) => void): grpc.ClientUnaryCall;
    volumeSyncStatus(request: volume_server_pb.VolumeSyncStatusRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeSyncStatusResponse) => void): grpc.ClientUnaryCall;
    volumeSyncStatus(request: volume_server_pb.VolumeSyncStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeSyncStatusResponse) => void): grpc.ClientUnaryCall;
    volumeSyncStatus(request: volume_server_pb.VolumeSyncStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeSyncStatusResponse) => void): grpc.ClientUnaryCall;
    volumeIncrementalCopy(request: volume_server_pb.VolumeIncrementalCopyRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeIncrementalCopyResponse>;
    volumeIncrementalCopy(request: volume_server_pb.VolumeIncrementalCopyRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeIncrementalCopyResponse>;
    volumeMount(request: volume_server_pb.VolumeMountRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeMountResponse) => void): grpc.ClientUnaryCall;
    volumeMount(request: volume_server_pb.VolumeMountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeMountResponse) => void): grpc.ClientUnaryCall;
    volumeMount(request: volume_server_pb.VolumeMountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeMountResponse) => void): grpc.ClientUnaryCall;
    volumeUnmount(request: volume_server_pb.VolumeUnmountRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeUnmountResponse) => void): grpc.ClientUnaryCall;
    volumeUnmount(request: volume_server_pb.VolumeUnmountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeUnmountResponse) => void): grpc.ClientUnaryCall;
    volumeUnmount(request: volume_server_pb.VolumeUnmountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeUnmountResponse) => void): grpc.ClientUnaryCall;
    volumeDelete(request: volume_server_pb.VolumeDeleteRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeDeleteResponse) => void): grpc.ClientUnaryCall;
    volumeDelete(request: volume_server_pb.VolumeDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeDeleteResponse) => void): grpc.ClientUnaryCall;
    volumeDelete(request: volume_server_pb.VolumeDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeDeleteResponse) => void): grpc.ClientUnaryCall;
    volumeMarkReadonly(request: volume_server_pb.VolumeMarkReadonlyRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeMarkReadonlyResponse) => void): grpc.ClientUnaryCall;
    volumeMarkReadonly(request: volume_server_pb.VolumeMarkReadonlyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeMarkReadonlyResponse) => void): grpc.ClientUnaryCall;
    volumeMarkReadonly(request: volume_server_pb.VolumeMarkReadonlyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeMarkReadonlyResponse) => void): grpc.ClientUnaryCall;
    volumeConfigure(request: volume_server_pb.VolumeConfigureRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeConfigureResponse) => void): grpc.ClientUnaryCall;
    volumeConfigure(request: volume_server_pb.VolumeConfigureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeConfigureResponse) => void): grpc.ClientUnaryCall;
    volumeConfigure(request: volume_server_pb.VolumeConfigureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeConfigureResponse) => void): grpc.ClientUnaryCall;
    volumeCopy(request: volume_server_pb.VolumeCopyRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeCopyResponse) => void): grpc.ClientUnaryCall;
    volumeCopy(request: volume_server_pb.VolumeCopyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeCopyResponse) => void): grpc.ClientUnaryCall;
    volumeCopy(request: volume_server_pb.VolumeCopyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeCopyResponse) => void): grpc.ClientUnaryCall;
    readVolumeFileStatus(request: volume_server_pb.ReadVolumeFileStatusRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.ReadVolumeFileStatusResponse) => void): grpc.ClientUnaryCall;
    readVolumeFileStatus(request: volume_server_pb.ReadVolumeFileStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.ReadVolumeFileStatusResponse) => void): grpc.ClientUnaryCall;
    readVolumeFileStatus(request: volume_server_pb.ReadVolumeFileStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.ReadVolumeFileStatusResponse) => void): grpc.ClientUnaryCall;
    copyFile(request: volume_server_pb.CopyFileRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.CopyFileResponse>;
    copyFile(request: volume_server_pb.CopyFileRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.CopyFileResponse>;
    volumeTailSender(request: volume_server_pb.VolumeTailSenderRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeTailSenderResponse>;
    volumeTailSender(request: volume_server_pb.VolumeTailSenderRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeTailSenderResponse>;
    volumeTailReceiver(request: volume_server_pb.VolumeTailReceiverRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeTailReceiverResponse) => void): grpc.ClientUnaryCall;
    volumeTailReceiver(request: volume_server_pb.VolumeTailReceiverRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeTailReceiverResponse) => void): grpc.ClientUnaryCall;
    volumeTailReceiver(request: volume_server_pb.VolumeTailReceiverRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeTailReceiverResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsGenerate(request: volume_server_pb.VolumeEcShardsGenerateRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsGenerateResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsGenerate(request: volume_server_pb.VolumeEcShardsGenerateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsGenerateResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsGenerate(request: volume_server_pb.VolumeEcShardsGenerateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsGenerateResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsRebuild(request: volume_server_pb.VolumeEcShardsRebuildRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsRebuildResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsRebuild(request: volume_server_pb.VolumeEcShardsRebuildRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsRebuildResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsRebuild(request: volume_server_pb.VolumeEcShardsRebuildRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsRebuildResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsCopy(request: volume_server_pb.VolumeEcShardsCopyRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsCopyResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsCopy(request: volume_server_pb.VolumeEcShardsCopyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsCopyResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsCopy(request: volume_server_pb.VolumeEcShardsCopyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsCopyResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsDelete(request: volume_server_pb.VolumeEcShardsDeleteRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsDeleteResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsDelete(request: volume_server_pb.VolumeEcShardsDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsDeleteResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsDelete(request: volume_server_pb.VolumeEcShardsDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsDeleteResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsMount(request: volume_server_pb.VolumeEcShardsMountRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsMountResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsMount(request: volume_server_pb.VolumeEcShardsMountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsMountResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsMount(request: volume_server_pb.VolumeEcShardsMountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsMountResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsUnmount(request: volume_server_pb.VolumeEcShardsUnmountRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsUnmountResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsUnmount(request: volume_server_pb.VolumeEcShardsUnmountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsUnmountResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsUnmount(request: volume_server_pb.VolumeEcShardsUnmountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsUnmountResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardRead(request: volume_server_pb.VolumeEcShardReadRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeEcShardReadResponse>;
    volumeEcShardRead(request: volume_server_pb.VolumeEcShardReadRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeEcShardReadResponse>;
    volumeEcBlobDelete(request: volume_server_pb.VolumeEcBlobDeleteRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcBlobDeleteResponse) => void): grpc.ClientUnaryCall;
    volumeEcBlobDelete(request: volume_server_pb.VolumeEcBlobDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcBlobDeleteResponse) => void): grpc.ClientUnaryCall;
    volumeEcBlobDelete(request: volume_server_pb.VolumeEcBlobDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcBlobDeleteResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsToVolume(request: volume_server_pb.VolumeEcShardsToVolumeRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsToVolumeResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsToVolume(request: volume_server_pb.VolumeEcShardsToVolumeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsToVolumeResponse) => void): grpc.ClientUnaryCall;
    volumeEcShardsToVolume(request: volume_server_pb.VolumeEcShardsToVolumeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsToVolumeResponse) => void): grpc.ClientUnaryCall;
    volumeTierMoveDatToRemote(request: volume_server_pb.VolumeTierMoveDatToRemoteRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeTierMoveDatToRemoteResponse>;
    volumeTierMoveDatToRemote(request: volume_server_pb.VolumeTierMoveDatToRemoteRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeTierMoveDatToRemoteResponse>;
    volumeTierMoveDatFromRemote(request: volume_server_pb.VolumeTierMoveDatFromRemoteRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeTierMoveDatFromRemoteResponse>;
    volumeTierMoveDatFromRemote(request: volume_server_pb.VolumeTierMoveDatFromRemoteRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeTierMoveDatFromRemoteResponse>;
    volumeServerStatus(request: volume_server_pb.VolumeServerStatusRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeServerStatusResponse) => void): grpc.ClientUnaryCall;
    volumeServerStatus(request: volume_server_pb.VolumeServerStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeServerStatusResponse) => void): grpc.ClientUnaryCall;
    volumeServerStatus(request: volume_server_pb.VolumeServerStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeServerStatusResponse) => void): grpc.ClientUnaryCall;
    query(request: volume_server_pb.QueryRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.QueriedStripe>;
    query(request: volume_server_pb.QueryRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.QueriedStripe>;
}

export class VolumeServerClient extends grpc.Client implements IVolumeServerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public batchDelete(request: volume_server_pb.BatchDeleteRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.BatchDeleteResponse) => void): grpc.ClientUnaryCall;
    public batchDelete(request: volume_server_pb.BatchDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.BatchDeleteResponse) => void): grpc.ClientUnaryCall;
    public batchDelete(request: volume_server_pb.BatchDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.BatchDeleteResponse) => void): grpc.ClientUnaryCall;
    public fileGet(request: volume_server_pb.FileGetRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.FileGetResponse>;
    public fileGet(request: volume_server_pb.FileGetRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.FileGetResponse>;
    public vacuumVolumeCheck(request: volume_server_pb.VacuumVolumeCheckRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCheckResponse) => void): grpc.ClientUnaryCall;
    public vacuumVolumeCheck(request: volume_server_pb.VacuumVolumeCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCheckResponse) => void): grpc.ClientUnaryCall;
    public vacuumVolumeCheck(request: volume_server_pb.VacuumVolumeCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCheckResponse) => void): grpc.ClientUnaryCall;
    public vacuumVolumeCompact(request: volume_server_pb.VacuumVolumeCompactRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCompactResponse) => void): grpc.ClientUnaryCall;
    public vacuumVolumeCompact(request: volume_server_pb.VacuumVolumeCompactRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCompactResponse) => void): grpc.ClientUnaryCall;
    public vacuumVolumeCompact(request: volume_server_pb.VacuumVolumeCompactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCompactResponse) => void): grpc.ClientUnaryCall;
    public vacuumVolumeCommit(request: volume_server_pb.VacuumVolumeCommitRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCommitResponse) => void): grpc.ClientUnaryCall;
    public vacuumVolumeCommit(request: volume_server_pb.VacuumVolumeCommitRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCommitResponse) => void): grpc.ClientUnaryCall;
    public vacuumVolumeCommit(request: volume_server_pb.VacuumVolumeCommitRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCommitResponse) => void): grpc.ClientUnaryCall;
    public vacuumVolumeCleanup(request: volume_server_pb.VacuumVolumeCleanupRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCleanupResponse) => void): grpc.ClientUnaryCall;
    public vacuumVolumeCleanup(request: volume_server_pb.VacuumVolumeCleanupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCleanupResponse) => void): grpc.ClientUnaryCall;
    public vacuumVolumeCleanup(request: volume_server_pb.VacuumVolumeCleanupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VacuumVolumeCleanupResponse) => void): grpc.ClientUnaryCall;
    public deleteCollection(request: volume_server_pb.DeleteCollectionRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.DeleteCollectionResponse) => void): grpc.ClientUnaryCall;
    public deleteCollection(request: volume_server_pb.DeleteCollectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.DeleteCollectionResponse) => void): grpc.ClientUnaryCall;
    public deleteCollection(request: volume_server_pb.DeleteCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.DeleteCollectionResponse) => void): grpc.ClientUnaryCall;
    public allocateVolume(request: volume_server_pb.AllocateVolumeRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.AllocateVolumeResponse) => void): grpc.ClientUnaryCall;
    public allocateVolume(request: volume_server_pb.AllocateVolumeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.AllocateVolumeResponse) => void): grpc.ClientUnaryCall;
    public allocateVolume(request: volume_server_pb.AllocateVolumeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.AllocateVolumeResponse) => void): grpc.ClientUnaryCall;
    public volumeSyncStatus(request: volume_server_pb.VolumeSyncStatusRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeSyncStatusResponse) => void): grpc.ClientUnaryCall;
    public volumeSyncStatus(request: volume_server_pb.VolumeSyncStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeSyncStatusResponse) => void): grpc.ClientUnaryCall;
    public volumeSyncStatus(request: volume_server_pb.VolumeSyncStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeSyncStatusResponse) => void): grpc.ClientUnaryCall;
    public volumeIncrementalCopy(request: volume_server_pb.VolumeIncrementalCopyRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeIncrementalCopyResponse>;
    public volumeIncrementalCopy(request: volume_server_pb.VolumeIncrementalCopyRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeIncrementalCopyResponse>;
    public volumeMount(request: volume_server_pb.VolumeMountRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeMountResponse) => void): grpc.ClientUnaryCall;
    public volumeMount(request: volume_server_pb.VolumeMountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeMountResponse) => void): grpc.ClientUnaryCall;
    public volumeMount(request: volume_server_pb.VolumeMountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeMountResponse) => void): grpc.ClientUnaryCall;
    public volumeUnmount(request: volume_server_pb.VolumeUnmountRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeUnmountResponse) => void): grpc.ClientUnaryCall;
    public volumeUnmount(request: volume_server_pb.VolumeUnmountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeUnmountResponse) => void): grpc.ClientUnaryCall;
    public volumeUnmount(request: volume_server_pb.VolumeUnmountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeUnmountResponse) => void): grpc.ClientUnaryCall;
    public volumeDelete(request: volume_server_pb.VolumeDeleteRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeDeleteResponse) => void): grpc.ClientUnaryCall;
    public volumeDelete(request: volume_server_pb.VolumeDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeDeleteResponse) => void): grpc.ClientUnaryCall;
    public volumeDelete(request: volume_server_pb.VolumeDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeDeleteResponse) => void): grpc.ClientUnaryCall;
    public volumeMarkReadonly(request: volume_server_pb.VolumeMarkReadonlyRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeMarkReadonlyResponse) => void): grpc.ClientUnaryCall;
    public volumeMarkReadonly(request: volume_server_pb.VolumeMarkReadonlyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeMarkReadonlyResponse) => void): grpc.ClientUnaryCall;
    public volumeMarkReadonly(request: volume_server_pb.VolumeMarkReadonlyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeMarkReadonlyResponse) => void): grpc.ClientUnaryCall;
    public volumeConfigure(request: volume_server_pb.VolumeConfigureRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeConfigureResponse) => void): grpc.ClientUnaryCall;
    public volumeConfigure(request: volume_server_pb.VolumeConfigureRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeConfigureResponse) => void): grpc.ClientUnaryCall;
    public volumeConfigure(request: volume_server_pb.VolumeConfigureRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeConfigureResponse) => void): grpc.ClientUnaryCall;
    public volumeCopy(request: volume_server_pb.VolumeCopyRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeCopyResponse) => void): grpc.ClientUnaryCall;
    public volumeCopy(request: volume_server_pb.VolumeCopyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeCopyResponse) => void): grpc.ClientUnaryCall;
    public volumeCopy(request: volume_server_pb.VolumeCopyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeCopyResponse) => void): grpc.ClientUnaryCall;
    public readVolumeFileStatus(request: volume_server_pb.ReadVolumeFileStatusRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.ReadVolumeFileStatusResponse) => void): grpc.ClientUnaryCall;
    public readVolumeFileStatus(request: volume_server_pb.ReadVolumeFileStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.ReadVolumeFileStatusResponse) => void): grpc.ClientUnaryCall;
    public readVolumeFileStatus(request: volume_server_pb.ReadVolumeFileStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.ReadVolumeFileStatusResponse) => void): grpc.ClientUnaryCall;
    public copyFile(request: volume_server_pb.CopyFileRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.CopyFileResponse>;
    public copyFile(request: volume_server_pb.CopyFileRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.CopyFileResponse>;
    public volumeTailSender(request: volume_server_pb.VolumeTailSenderRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeTailSenderResponse>;
    public volumeTailSender(request: volume_server_pb.VolumeTailSenderRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeTailSenderResponse>;
    public volumeTailReceiver(request: volume_server_pb.VolumeTailReceiverRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeTailReceiverResponse) => void): grpc.ClientUnaryCall;
    public volumeTailReceiver(request: volume_server_pb.VolumeTailReceiverRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeTailReceiverResponse) => void): grpc.ClientUnaryCall;
    public volumeTailReceiver(request: volume_server_pb.VolumeTailReceiverRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeTailReceiverResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsGenerate(request: volume_server_pb.VolumeEcShardsGenerateRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsGenerateResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsGenerate(request: volume_server_pb.VolumeEcShardsGenerateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsGenerateResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsGenerate(request: volume_server_pb.VolumeEcShardsGenerateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsGenerateResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsRebuild(request: volume_server_pb.VolumeEcShardsRebuildRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsRebuildResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsRebuild(request: volume_server_pb.VolumeEcShardsRebuildRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsRebuildResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsRebuild(request: volume_server_pb.VolumeEcShardsRebuildRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsRebuildResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsCopy(request: volume_server_pb.VolumeEcShardsCopyRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsCopyResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsCopy(request: volume_server_pb.VolumeEcShardsCopyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsCopyResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsCopy(request: volume_server_pb.VolumeEcShardsCopyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsCopyResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsDelete(request: volume_server_pb.VolumeEcShardsDeleteRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsDeleteResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsDelete(request: volume_server_pb.VolumeEcShardsDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsDeleteResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsDelete(request: volume_server_pb.VolumeEcShardsDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsDeleteResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsMount(request: volume_server_pb.VolumeEcShardsMountRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsMountResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsMount(request: volume_server_pb.VolumeEcShardsMountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsMountResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsMount(request: volume_server_pb.VolumeEcShardsMountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsMountResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsUnmount(request: volume_server_pb.VolumeEcShardsUnmountRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsUnmountResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsUnmount(request: volume_server_pb.VolumeEcShardsUnmountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsUnmountResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsUnmount(request: volume_server_pb.VolumeEcShardsUnmountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsUnmountResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardRead(request: volume_server_pb.VolumeEcShardReadRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeEcShardReadResponse>;
    public volumeEcShardRead(request: volume_server_pb.VolumeEcShardReadRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeEcShardReadResponse>;
    public volumeEcBlobDelete(request: volume_server_pb.VolumeEcBlobDeleteRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcBlobDeleteResponse) => void): grpc.ClientUnaryCall;
    public volumeEcBlobDelete(request: volume_server_pb.VolumeEcBlobDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcBlobDeleteResponse) => void): grpc.ClientUnaryCall;
    public volumeEcBlobDelete(request: volume_server_pb.VolumeEcBlobDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcBlobDeleteResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsToVolume(request: volume_server_pb.VolumeEcShardsToVolumeRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsToVolumeResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsToVolume(request: volume_server_pb.VolumeEcShardsToVolumeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsToVolumeResponse) => void): grpc.ClientUnaryCall;
    public volumeEcShardsToVolume(request: volume_server_pb.VolumeEcShardsToVolumeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeEcShardsToVolumeResponse) => void): grpc.ClientUnaryCall;
    public volumeTierMoveDatToRemote(request: volume_server_pb.VolumeTierMoveDatToRemoteRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeTierMoveDatToRemoteResponse>;
    public volumeTierMoveDatToRemote(request: volume_server_pb.VolumeTierMoveDatToRemoteRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeTierMoveDatToRemoteResponse>;
    public volumeTierMoveDatFromRemote(request: volume_server_pb.VolumeTierMoveDatFromRemoteRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeTierMoveDatFromRemoteResponse>;
    public volumeTierMoveDatFromRemote(request: volume_server_pb.VolumeTierMoveDatFromRemoteRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.VolumeTierMoveDatFromRemoteResponse>;
    public volumeServerStatus(request: volume_server_pb.VolumeServerStatusRequest, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeServerStatusResponse) => void): grpc.ClientUnaryCall;
    public volumeServerStatus(request: volume_server_pb.VolumeServerStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeServerStatusResponse) => void): grpc.ClientUnaryCall;
    public volumeServerStatus(request: volume_server_pb.VolumeServerStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: volume_server_pb.VolumeServerStatusResponse) => void): grpc.ClientUnaryCall;
    public query(request: volume_server_pb.QueryRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.QueriedStripe>;
    public query(request: volume_server_pb.QueryRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<volume_server_pb.QueriedStripe>;
}
