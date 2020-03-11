// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var volume_server_pb = require('./volume_server_pb.js');

function serialize_volume_server_pb_AllocateVolumeRequest(arg) {
  if (!(arg instanceof volume_server_pb.AllocateVolumeRequest)) {
    throw new Error('Expected argument of type volume_server_pb.AllocateVolumeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_AllocateVolumeRequest(buffer_arg) {
  return volume_server_pb.AllocateVolumeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_AllocateVolumeResponse(arg) {
  if (!(arg instanceof volume_server_pb.AllocateVolumeResponse)) {
    throw new Error('Expected argument of type volume_server_pb.AllocateVolumeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_AllocateVolumeResponse(buffer_arg) {
  return volume_server_pb.AllocateVolumeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_BatchDeleteRequest(arg) {
  if (!(arg instanceof volume_server_pb.BatchDeleteRequest)) {
    throw new Error('Expected argument of type volume_server_pb.BatchDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_BatchDeleteRequest(buffer_arg) {
  return volume_server_pb.BatchDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_BatchDeleteResponse(arg) {
  if (!(arg instanceof volume_server_pb.BatchDeleteResponse)) {
    throw new Error('Expected argument of type volume_server_pb.BatchDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_BatchDeleteResponse(buffer_arg) {
  return volume_server_pb.BatchDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_CopyFileRequest(arg) {
  if (!(arg instanceof volume_server_pb.CopyFileRequest)) {
    throw new Error('Expected argument of type volume_server_pb.CopyFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_CopyFileRequest(buffer_arg) {
  return volume_server_pb.CopyFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_CopyFileResponse(arg) {
  if (!(arg instanceof volume_server_pb.CopyFileResponse)) {
    throw new Error('Expected argument of type volume_server_pb.CopyFileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_CopyFileResponse(buffer_arg) {
  return volume_server_pb.CopyFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_DeleteCollectionRequest(arg) {
  if (!(arg instanceof volume_server_pb.DeleteCollectionRequest)) {
    throw new Error('Expected argument of type volume_server_pb.DeleteCollectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_DeleteCollectionRequest(buffer_arg) {
  return volume_server_pb.DeleteCollectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_DeleteCollectionResponse(arg) {
  if (!(arg instanceof volume_server_pb.DeleteCollectionResponse)) {
    throw new Error('Expected argument of type volume_server_pb.DeleteCollectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_DeleteCollectionResponse(buffer_arg) {
  return volume_server_pb.DeleteCollectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_FileGetRequest(arg) {
  if (!(arg instanceof volume_server_pb.FileGetRequest)) {
    throw new Error('Expected argument of type volume_server_pb.FileGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_FileGetRequest(buffer_arg) {
  return volume_server_pb.FileGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_FileGetResponse(arg) {
  if (!(arg instanceof volume_server_pb.FileGetResponse)) {
    throw new Error('Expected argument of type volume_server_pb.FileGetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_FileGetResponse(buffer_arg) {
  return volume_server_pb.FileGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_QueriedStripe(arg) {
  if (!(arg instanceof volume_server_pb.QueriedStripe)) {
    throw new Error('Expected argument of type volume_server_pb.QueriedStripe');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_QueriedStripe(buffer_arg) {
  return volume_server_pb.QueriedStripe.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_QueryRequest(arg) {
  if (!(arg instanceof volume_server_pb.QueryRequest)) {
    throw new Error('Expected argument of type volume_server_pb.QueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_QueryRequest(buffer_arg) {
  return volume_server_pb.QueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_ReadVolumeFileStatusRequest(arg) {
  if (!(arg instanceof volume_server_pb.ReadVolumeFileStatusRequest)) {
    throw new Error('Expected argument of type volume_server_pb.ReadVolumeFileStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_ReadVolumeFileStatusRequest(buffer_arg) {
  return volume_server_pb.ReadVolumeFileStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_ReadVolumeFileStatusResponse(arg) {
  if (!(arg instanceof volume_server_pb.ReadVolumeFileStatusResponse)) {
    throw new Error('Expected argument of type volume_server_pb.ReadVolumeFileStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_ReadVolumeFileStatusResponse(buffer_arg) {
  return volume_server_pb.ReadVolumeFileStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VacuumVolumeCheckRequest(arg) {
  if (!(arg instanceof volume_server_pb.VacuumVolumeCheckRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VacuumVolumeCheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VacuumVolumeCheckRequest(buffer_arg) {
  return volume_server_pb.VacuumVolumeCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VacuumVolumeCheckResponse(arg) {
  if (!(arg instanceof volume_server_pb.VacuumVolumeCheckResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VacuumVolumeCheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VacuumVolumeCheckResponse(buffer_arg) {
  return volume_server_pb.VacuumVolumeCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VacuumVolumeCleanupRequest(arg) {
  if (!(arg instanceof volume_server_pb.VacuumVolumeCleanupRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VacuumVolumeCleanupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VacuumVolumeCleanupRequest(buffer_arg) {
  return volume_server_pb.VacuumVolumeCleanupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VacuumVolumeCleanupResponse(arg) {
  if (!(arg instanceof volume_server_pb.VacuumVolumeCleanupResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VacuumVolumeCleanupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VacuumVolumeCleanupResponse(buffer_arg) {
  return volume_server_pb.VacuumVolumeCleanupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VacuumVolumeCommitRequest(arg) {
  if (!(arg instanceof volume_server_pb.VacuumVolumeCommitRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VacuumVolumeCommitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VacuumVolumeCommitRequest(buffer_arg) {
  return volume_server_pb.VacuumVolumeCommitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VacuumVolumeCommitResponse(arg) {
  if (!(arg instanceof volume_server_pb.VacuumVolumeCommitResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VacuumVolumeCommitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VacuumVolumeCommitResponse(buffer_arg) {
  return volume_server_pb.VacuumVolumeCommitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VacuumVolumeCompactRequest(arg) {
  if (!(arg instanceof volume_server_pb.VacuumVolumeCompactRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VacuumVolumeCompactRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VacuumVolumeCompactRequest(buffer_arg) {
  return volume_server_pb.VacuumVolumeCompactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VacuumVolumeCompactResponse(arg) {
  if (!(arg instanceof volume_server_pb.VacuumVolumeCompactResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VacuumVolumeCompactResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VacuumVolumeCompactResponse(buffer_arg) {
  return volume_server_pb.VacuumVolumeCompactResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeConfigureRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeConfigureRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeConfigureRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeConfigureRequest(buffer_arg) {
  return volume_server_pb.VolumeConfigureRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeConfigureResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeConfigureResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeConfigureResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeConfigureResponse(buffer_arg) {
  return volume_server_pb.VolumeConfigureResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeCopyRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeCopyRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeCopyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeCopyRequest(buffer_arg) {
  return volume_server_pb.VolumeCopyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeCopyResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeCopyResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeCopyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeCopyResponse(buffer_arg) {
  return volume_server_pb.VolumeCopyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeDeleteRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeDeleteRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeDeleteRequest(buffer_arg) {
  return volume_server_pb.VolumeDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeDeleteResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeDeleteResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeDeleteResponse(buffer_arg) {
  return volume_server_pb.VolumeDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcBlobDeleteRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcBlobDeleteRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcBlobDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcBlobDeleteRequest(buffer_arg) {
  return volume_server_pb.VolumeEcBlobDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcBlobDeleteResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcBlobDeleteResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcBlobDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcBlobDeleteResponse(buffer_arg) {
  return volume_server_pb.VolumeEcBlobDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcShardReadRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcShardReadRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcShardReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcShardReadRequest(buffer_arg) {
  return volume_server_pb.VolumeEcShardReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcShardReadResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcShardReadResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcShardReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcShardReadResponse(buffer_arg) {
  return volume_server_pb.VolumeEcShardReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcShardsCopyRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcShardsCopyRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcShardsCopyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcShardsCopyRequest(buffer_arg) {
  return volume_server_pb.VolumeEcShardsCopyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcShardsCopyResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcShardsCopyResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcShardsCopyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcShardsCopyResponse(buffer_arg) {
  return volume_server_pb.VolumeEcShardsCopyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcShardsDeleteRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcShardsDeleteRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcShardsDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcShardsDeleteRequest(buffer_arg) {
  return volume_server_pb.VolumeEcShardsDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcShardsDeleteResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcShardsDeleteResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcShardsDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcShardsDeleteResponse(buffer_arg) {
  return volume_server_pb.VolumeEcShardsDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcShardsGenerateRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcShardsGenerateRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcShardsGenerateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcShardsGenerateRequest(buffer_arg) {
  return volume_server_pb.VolumeEcShardsGenerateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcShardsGenerateResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcShardsGenerateResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcShardsGenerateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcShardsGenerateResponse(buffer_arg) {
  return volume_server_pb.VolumeEcShardsGenerateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcShardsMountRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcShardsMountRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcShardsMountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcShardsMountRequest(buffer_arg) {
  return volume_server_pb.VolumeEcShardsMountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcShardsMountResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcShardsMountResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcShardsMountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcShardsMountResponse(buffer_arg) {
  return volume_server_pb.VolumeEcShardsMountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcShardsRebuildRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcShardsRebuildRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcShardsRebuildRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcShardsRebuildRequest(buffer_arg) {
  return volume_server_pb.VolumeEcShardsRebuildRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcShardsRebuildResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcShardsRebuildResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcShardsRebuildResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcShardsRebuildResponse(buffer_arg) {
  return volume_server_pb.VolumeEcShardsRebuildResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcShardsToVolumeRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcShardsToVolumeRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcShardsToVolumeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcShardsToVolumeRequest(buffer_arg) {
  return volume_server_pb.VolumeEcShardsToVolumeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcShardsToVolumeResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcShardsToVolumeResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcShardsToVolumeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcShardsToVolumeResponse(buffer_arg) {
  return volume_server_pb.VolumeEcShardsToVolumeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcShardsUnmountRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcShardsUnmountRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcShardsUnmountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcShardsUnmountRequest(buffer_arg) {
  return volume_server_pb.VolumeEcShardsUnmountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeEcShardsUnmountResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeEcShardsUnmountResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeEcShardsUnmountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeEcShardsUnmountResponse(buffer_arg) {
  return volume_server_pb.VolumeEcShardsUnmountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeIncrementalCopyRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeIncrementalCopyRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeIncrementalCopyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeIncrementalCopyRequest(buffer_arg) {
  return volume_server_pb.VolumeIncrementalCopyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeIncrementalCopyResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeIncrementalCopyResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeIncrementalCopyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeIncrementalCopyResponse(buffer_arg) {
  return volume_server_pb.VolumeIncrementalCopyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeMarkReadonlyRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeMarkReadonlyRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeMarkReadonlyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeMarkReadonlyRequest(buffer_arg) {
  return volume_server_pb.VolumeMarkReadonlyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeMarkReadonlyResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeMarkReadonlyResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeMarkReadonlyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeMarkReadonlyResponse(buffer_arg) {
  return volume_server_pb.VolumeMarkReadonlyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeMountRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeMountRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeMountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeMountRequest(buffer_arg) {
  return volume_server_pb.VolumeMountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeMountResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeMountResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeMountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeMountResponse(buffer_arg) {
  return volume_server_pb.VolumeMountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeServerStatusRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeServerStatusRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeServerStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeServerStatusRequest(buffer_arg) {
  return volume_server_pb.VolumeServerStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeServerStatusResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeServerStatusResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeServerStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeServerStatusResponse(buffer_arg) {
  return volume_server_pb.VolumeServerStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeSyncStatusRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeSyncStatusRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeSyncStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeSyncStatusRequest(buffer_arg) {
  return volume_server_pb.VolumeSyncStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeSyncStatusResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeSyncStatusResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeSyncStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeSyncStatusResponse(buffer_arg) {
  return volume_server_pb.VolumeSyncStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeTailReceiverRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeTailReceiverRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeTailReceiverRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeTailReceiverRequest(buffer_arg) {
  return volume_server_pb.VolumeTailReceiverRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeTailReceiverResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeTailReceiverResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeTailReceiverResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeTailReceiverResponse(buffer_arg) {
  return volume_server_pb.VolumeTailReceiverResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeTailSenderRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeTailSenderRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeTailSenderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeTailSenderRequest(buffer_arg) {
  return volume_server_pb.VolumeTailSenderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeTailSenderResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeTailSenderResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeTailSenderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeTailSenderResponse(buffer_arg) {
  return volume_server_pb.VolumeTailSenderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeTierMoveDatFromRemoteRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeTierMoveDatFromRemoteRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeTierMoveDatFromRemoteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeTierMoveDatFromRemoteRequest(buffer_arg) {
  return volume_server_pb.VolumeTierMoveDatFromRemoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeTierMoveDatFromRemoteResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeTierMoveDatFromRemoteResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeTierMoveDatFromRemoteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeTierMoveDatFromRemoteResponse(buffer_arg) {
  return volume_server_pb.VolumeTierMoveDatFromRemoteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeTierMoveDatToRemoteRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeTierMoveDatToRemoteRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeTierMoveDatToRemoteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeTierMoveDatToRemoteRequest(buffer_arg) {
  return volume_server_pb.VolumeTierMoveDatToRemoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeTierMoveDatToRemoteResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeTierMoveDatToRemoteResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeTierMoveDatToRemoteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeTierMoveDatToRemoteResponse(buffer_arg) {
  return volume_server_pb.VolumeTierMoveDatToRemoteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeUnmountRequest(arg) {
  if (!(arg instanceof volume_server_pb.VolumeUnmountRequest)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeUnmountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeUnmountRequest(buffer_arg) {
  return volume_server_pb.VolumeUnmountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_volume_server_pb_VolumeUnmountResponse(arg) {
  if (!(arg instanceof volume_server_pb.VolumeUnmountResponse)) {
    throw new Error('Expected argument of type volume_server_pb.VolumeUnmountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_volume_server_pb_VolumeUnmountResponse(buffer_arg) {
  return volume_server_pb.VolumeUnmountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ////////////////////////////////////////////////
//
var VolumeServerService = exports.VolumeServerService = {
  // Experts only: takes multiple fid parameters. This function does not propagate deletes to replicas.
batchDelete: {
    path: '/volume_server_pb.VolumeServer/BatchDelete',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.BatchDeleteRequest,
    responseType: volume_server_pb.BatchDeleteResponse,
    requestSerialize: serialize_volume_server_pb_BatchDeleteRequest,
    requestDeserialize: deserialize_volume_server_pb_BatchDeleteRequest,
    responseSerialize: serialize_volume_server_pb_BatchDeleteResponse,
    responseDeserialize: deserialize_volume_server_pb_BatchDeleteResponse,
  },
  fileGet: {
    path: '/volume_server_pb.VolumeServer/FileGet',
    requestStream: false,
    responseStream: true,
    requestType: volume_server_pb.FileGetRequest,
    responseType: volume_server_pb.FileGetResponse,
    requestSerialize: serialize_volume_server_pb_FileGetRequest,
    requestDeserialize: deserialize_volume_server_pb_FileGetRequest,
    responseSerialize: serialize_volume_server_pb_FileGetResponse,
    responseDeserialize: deserialize_volume_server_pb_FileGetResponse,
  },
  vacuumVolumeCheck: {
    path: '/volume_server_pb.VolumeServer/VacuumVolumeCheck',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VacuumVolumeCheckRequest,
    responseType: volume_server_pb.VacuumVolumeCheckResponse,
    requestSerialize: serialize_volume_server_pb_VacuumVolumeCheckRequest,
    requestDeserialize: deserialize_volume_server_pb_VacuumVolumeCheckRequest,
    responseSerialize: serialize_volume_server_pb_VacuumVolumeCheckResponse,
    responseDeserialize: deserialize_volume_server_pb_VacuumVolumeCheckResponse,
  },
  vacuumVolumeCompact: {
    path: '/volume_server_pb.VolumeServer/VacuumVolumeCompact',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VacuumVolumeCompactRequest,
    responseType: volume_server_pb.VacuumVolumeCompactResponse,
    requestSerialize: serialize_volume_server_pb_VacuumVolumeCompactRequest,
    requestDeserialize: deserialize_volume_server_pb_VacuumVolumeCompactRequest,
    responseSerialize: serialize_volume_server_pb_VacuumVolumeCompactResponse,
    responseDeserialize: deserialize_volume_server_pb_VacuumVolumeCompactResponse,
  },
  vacuumVolumeCommit: {
    path: '/volume_server_pb.VolumeServer/VacuumVolumeCommit',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VacuumVolumeCommitRequest,
    responseType: volume_server_pb.VacuumVolumeCommitResponse,
    requestSerialize: serialize_volume_server_pb_VacuumVolumeCommitRequest,
    requestDeserialize: deserialize_volume_server_pb_VacuumVolumeCommitRequest,
    responseSerialize: serialize_volume_server_pb_VacuumVolumeCommitResponse,
    responseDeserialize: deserialize_volume_server_pb_VacuumVolumeCommitResponse,
  },
  vacuumVolumeCleanup: {
    path: '/volume_server_pb.VolumeServer/VacuumVolumeCleanup',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VacuumVolumeCleanupRequest,
    responseType: volume_server_pb.VacuumVolumeCleanupResponse,
    requestSerialize: serialize_volume_server_pb_VacuumVolumeCleanupRequest,
    requestDeserialize: deserialize_volume_server_pb_VacuumVolumeCleanupRequest,
    responseSerialize: serialize_volume_server_pb_VacuumVolumeCleanupResponse,
    responseDeserialize: deserialize_volume_server_pb_VacuumVolumeCleanupResponse,
  },
  deleteCollection: {
    path: '/volume_server_pb.VolumeServer/DeleteCollection',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.DeleteCollectionRequest,
    responseType: volume_server_pb.DeleteCollectionResponse,
    requestSerialize: serialize_volume_server_pb_DeleteCollectionRequest,
    requestDeserialize: deserialize_volume_server_pb_DeleteCollectionRequest,
    responseSerialize: serialize_volume_server_pb_DeleteCollectionResponse,
    responseDeserialize: deserialize_volume_server_pb_DeleteCollectionResponse,
  },
  allocateVolume: {
    path: '/volume_server_pb.VolumeServer/AllocateVolume',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.AllocateVolumeRequest,
    responseType: volume_server_pb.AllocateVolumeResponse,
    requestSerialize: serialize_volume_server_pb_AllocateVolumeRequest,
    requestDeserialize: deserialize_volume_server_pb_AllocateVolumeRequest,
    responseSerialize: serialize_volume_server_pb_AllocateVolumeResponse,
    responseDeserialize: deserialize_volume_server_pb_AllocateVolumeResponse,
  },
  volumeSyncStatus: {
    path: '/volume_server_pb.VolumeServer/VolumeSyncStatus',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VolumeSyncStatusRequest,
    responseType: volume_server_pb.VolumeSyncStatusResponse,
    requestSerialize: serialize_volume_server_pb_VolumeSyncStatusRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeSyncStatusRequest,
    responseSerialize: serialize_volume_server_pb_VolumeSyncStatusResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeSyncStatusResponse,
  },
  volumeIncrementalCopy: {
    path: '/volume_server_pb.VolumeServer/VolumeIncrementalCopy',
    requestStream: false,
    responseStream: true,
    requestType: volume_server_pb.VolumeIncrementalCopyRequest,
    responseType: volume_server_pb.VolumeIncrementalCopyResponse,
    requestSerialize: serialize_volume_server_pb_VolumeIncrementalCopyRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeIncrementalCopyRequest,
    responseSerialize: serialize_volume_server_pb_VolumeIncrementalCopyResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeIncrementalCopyResponse,
  },
  volumeMount: {
    path: '/volume_server_pb.VolumeServer/VolumeMount',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VolumeMountRequest,
    responseType: volume_server_pb.VolumeMountResponse,
    requestSerialize: serialize_volume_server_pb_VolumeMountRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeMountRequest,
    responseSerialize: serialize_volume_server_pb_VolumeMountResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeMountResponse,
  },
  volumeUnmount: {
    path: '/volume_server_pb.VolumeServer/VolumeUnmount',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VolumeUnmountRequest,
    responseType: volume_server_pb.VolumeUnmountResponse,
    requestSerialize: serialize_volume_server_pb_VolumeUnmountRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeUnmountRequest,
    responseSerialize: serialize_volume_server_pb_VolumeUnmountResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeUnmountResponse,
  },
  volumeDelete: {
    path: '/volume_server_pb.VolumeServer/VolumeDelete',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VolumeDeleteRequest,
    responseType: volume_server_pb.VolumeDeleteResponse,
    requestSerialize: serialize_volume_server_pb_VolumeDeleteRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeDeleteRequest,
    responseSerialize: serialize_volume_server_pb_VolumeDeleteResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeDeleteResponse,
  },
  volumeMarkReadonly: {
    path: '/volume_server_pb.VolumeServer/VolumeMarkReadonly',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VolumeMarkReadonlyRequest,
    responseType: volume_server_pb.VolumeMarkReadonlyResponse,
    requestSerialize: serialize_volume_server_pb_VolumeMarkReadonlyRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeMarkReadonlyRequest,
    responseSerialize: serialize_volume_server_pb_VolumeMarkReadonlyResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeMarkReadonlyResponse,
  },
  volumeConfigure: {
    path: '/volume_server_pb.VolumeServer/VolumeConfigure',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VolumeConfigureRequest,
    responseType: volume_server_pb.VolumeConfigureResponse,
    requestSerialize: serialize_volume_server_pb_VolumeConfigureRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeConfigureRequest,
    responseSerialize: serialize_volume_server_pb_VolumeConfigureResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeConfigureResponse,
  },
  // copy the .idx .dat files, and mount this volume
volumeCopy: {
    path: '/volume_server_pb.VolumeServer/VolumeCopy',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VolumeCopyRequest,
    responseType: volume_server_pb.VolumeCopyResponse,
    requestSerialize: serialize_volume_server_pb_VolumeCopyRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeCopyRequest,
    responseSerialize: serialize_volume_server_pb_VolumeCopyResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeCopyResponse,
  },
  readVolumeFileStatus: {
    path: '/volume_server_pb.VolumeServer/ReadVolumeFileStatus',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.ReadVolumeFileStatusRequest,
    responseType: volume_server_pb.ReadVolumeFileStatusResponse,
    requestSerialize: serialize_volume_server_pb_ReadVolumeFileStatusRequest,
    requestDeserialize: deserialize_volume_server_pb_ReadVolumeFileStatusRequest,
    responseSerialize: serialize_volume_server_pb_ReadVolumeFileStatusResponse,
    responseDeserialize: deserialize_volume_server_pb_ReadVolumeFileStatusResponse,
  },
  copyFile: {
    path: '/volume_server_pb.VolumeServer/CopyFile',
    requestStream: false,
    responseStream: true,
    requestType: volume_server_pb.CopyFileRequest,
    responseType: volume_server_pb.CopyFileResponse,
    requestSerialize: serialize_volume_server_pb_CopyFileRequest,
    requestDeserialize: deserialize_volume_server_pb_CopyFileRequest,
    responseSerialize: serialize_volume_server_pb_CopyFileResponse,
    responseDeserialize: deserialize_volume_server_pb_CopyFileResponse,
  },
  volumeTailSender: {
    path: '/volume_server_pb.VolumeServer/VolumeTailSender',
    requestStream: false,
    responseStream: true,
    requestType: volume_server_pb.VolumeTailSenderRequest,
    responseType: volume_server_pb.VolumeTailSenderResponse,
    requestSerialize: serialize_volume_server_pb_VolumeTailSenderRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeTailSenderRequest,
    responseSerialize: serialize_volume_server_pb_VolumeTailSenderResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeTailSenderResponse,
  },
  volumeTailReceiver: {
    path: '/volume_server_pb.VolumeServer/VolumeTailReceiver',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VolumeTailReceiverRequest,
    responseType: volume_server_pb.VolumeTailReceiverResponse,
    requestSerialize: serialize_volume_server_pb_VolumeTailReceiverRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeTailReceiverRequest,
    responseSerialize: serialize_volume_server_pb_VolumeTailReceiverResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeTailReceiverResponse,
  },
  // erasure coding
volumeEcShardsGenerate: {
    path: '/volume_server_pb.VolumeServer/VolumeEcShardsGenerate',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VolumeEcShardsGenerateRequest,
    responseType: volume_server_pb.VolumeEcShardsGenerateResponse,
    requestSerialize: serialize_volume_server_pb_VolumeEcShardsGenerateRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeEcShardsGenerateRequest,
    responseSerialize: serialize_volume_server_pb_VolumeEcShardsGenerateResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeEcShardsGenerateResponse,
  },
  volumeEcShardsRebuild: {
    path: '/volume_server_pb.VolumeServer/VolumeEcShardsRebuild',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VolumeEcShardsRebuildRequest,
    responseType: volume_server_pb.VolumeEcShardsRebuildResponse,
    requestSerialize: serialize_volume_server_pb_VolumeEcShardsRebuildRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeEcShardsRebuildRequest,
    responseSerialize: serialize_volume_server_pb_VolumeEcShardsRebuildResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeEcShardsRebuildResponse,
  },
  volumeEcShardsCopy: {
    path: '/volume_server_pb.VolumeServer/VolumeEcShardsCopy',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VolumeEcShardsCopyRequest,
    responseType: volume_server_pb.VolumeEcShardsCopyResponse,
    requestSerialize: serialize_volume_server_pb_VolumeEcShardsCopyRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeEcShardsCopyRequest,
    responseSerialize: serialize_volume_server_pb_VolumeEcShardsCopyResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeEcShardsCopyResponse,
  },
  volumeEcShardsDelete: {
    path: '/volume_server_pb.VolumeServer/VolumeEcShardsDelete',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VolumeEcShardsDeleteRequest,
    responseType: volume_server_pb.VolumeEcShardsDeleteResponse,
    requestSerialize: serialize_volume_server_pb_VolumeEcShardsDeleteRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeEcShardsDeleteRequest,
    responseSerialize: serialize_volume_server_pb_VolumeEcShardsDeleteResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeEcShardsDeleteResponse,
  },
  volumeEcShardsMount: {
    path: '/volume_server_pb.VolumeServer/VolumeEcShardsMount',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VolumeEcShardsMountRequest,
    responseType: volume_server_pb.VolumeEcShardsMountResponse,
    requestSerialize: serialize_volume_server_pb_VolumeEcShardsMountRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeEcShardsMountRequest,
    responseSerialize: serialize_volume_server_pb_VolumeEcShardsMountResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeEcShardsMountResponse,
  },
  volumeEcShardsUnmount: {
    path: '/volume_server_pb.VolumeServer/VolumeEcShardsUnmount',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VolumeEcShardsUnmountRequest,
    responseType: volume_server_pb.VolumeEcShardsUnmountResponse,
    requestSerialize: serialize_volume_server_pb_VolumeEcShardsUnmountRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeEcShardsUnmountRequest,
    responseSerialize: serialize_volume_server_pb_VolumeEcShardsUnmountResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeEcShardsUnmountResponse,
  },
  volumeEcShardRead: {
    path: '/volume_server_pb.VolumeServer/VolumeEcShardRead',
    requestStream: false,
    responseStream: true,
    requestType: volume_server_pb.VolumeEcShardReadRequest,
    responseType: volume_server_pb.VolumeEcShardReadResponse,
    requestSerialize: serialize_volume_server_pb_VolumeEcShardReadRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeEcShardReadRequest,
    responseSerialize: serialize_volume_server_pb_VolumeEcShardReadResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeEcShardReadResponse,
  },
  volumeEcBlobDelete: {
    path: '/volume_server_pb.VolumeServer/VolumeEcBlobDelete',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VolumeEcBlobDeleteRequest,
    responseType: volume_server_pb.VolumeEcBlobDeleteResponse,
    requestSerialize: serialize_volume_server_pb_VolumeEcBlobDeleteRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeEcBlobDeleteRequest,
    responseSerialize: serialize_volume_server_pb_VolumeEcBlobDeleteResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeEcBlobDeleteResponse,
  },
  volumeEcShardsToVolume: {
    path: '/volume_server_pb.VolumeServer/VolumeEcShardsToVolume',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VolumeEcShardsToVolumeRequest,
    responseType: volume_server_pb.VolumeEcShardsToVolumeResponse,
    requestSerialize: serialize_volume_server_pb_VolumeEcShardsToVolumeRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeEcShardsToVolumeRequest,
    responseSerialize: serialize_volume_server_pb_VolumeEcShardsToVolumeResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeEcShardsToVolumeResponse,
  },
  // tiered storage
volumeTierMoveDatToRemote: {
    path: '/volume_server_pb.VolumeServer/VolumeTierMoveDatToRemote',
    requestStream: false,
    responseStream: true,
    requestType: volume_server_pb.VolumeTierMoveDatToRemoteRequest,
    responseType: volume_server_pb.VolumeTierMoveDatToRemoteResponse,
    requestSerialize: serialize_volume_server_pb_VolumeTierMoveDatToRemoteRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeTierMoveDatToRemoteRequest,
    responseSerialize: serialize_volume_server_pb_VolumeTierMoveDatToRemoteResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeTierMoveDatToRemoteResponse,
  },
  volumeTierMoveDatFromRemote: {
    path: '/volume_server_pb.VolumeServer/VolumeTierMoveDatFromRemote',
    requestStream: false,
    responseStream: true,
    requestType: volume_server_pb.VolumeTierMoveDatFromRemoteRequest,
    responseType: volume_server_pb.VolumeTierMoveDatFromRemoteResponse,
    requestSerialize: serialize_volume_server_pb_VolumeTierMoveDatFromRemoteRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeTierMoveDatFromRemoteRequest,
    responseSerialize: serialize_volume_server_pb_VolumeTierMoveDatFromRemoteResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeTierMoveDatFromRemoteResponse,
  },
  volumeServerStatus: {
    path: '/volume_server_pb.VolumeServer/VolumeServerStatus',
    requestStream: false,
    responseStream: false,
    requestType: volume_server_pb.VolumeServerStatusRequest,
    responseType: volume_server_pb.VolumeServerStatusResponse,
    requestSerialize: serialize_volume_server_pb_VolumeServerStatusRequest,
    requestDeserialize: deserialize_volume_server_pb_VolumeServerStatusRequest,
    responseSerialize: serialize_volume_server_pb_VolumeServerStatusResponse,
    responseDeserialize: deserialize_volume_server_pb_VolumeServerStatusResponse,
  },
  // <experimental> query
query: {
    path: '/volume_server_pb.VolumeServer/Query',
    requestStream: false,
    responseStream: true,
    requestType: volume_server_pb.QueryRequest,
    responseType: volume_server_pb.QueriedStripe,
    requestSerialize: serialize_volume_server_pb_QueryRequest,
    requestDeserialize: deserialize_volume_server_pb_QueryRequest,
    responseSerialize: serialize_volume_server_pb_QueriedStripe,
    responseDeserialize: deserialize_volume_server_pb_QueriedStripe,
  },
};

exports.VolumeServerClient = grpc.makeGenericClientConstructor(VolumeServerService);
