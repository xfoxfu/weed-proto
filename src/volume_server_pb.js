// source: seaweedfs/weed/pb/volume_server.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.volume_server_pb.AllocateVolumeRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.AllocateVolumeResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.BatchDeleteRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.BatchDeleteResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.CopyFileRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.CopyFileResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.DeleteCollectionRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.DeleteCollectionResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.DeleteResult', null, global);
goog.exportSymbol('proto.volume_server_pb.DiskStatus', null, global);
goog.exportSymbol('proto.volume_server_pb.Empty', null, global);
goog.exportSymbol('proto.volume_server_pb.FileGetRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.FileGetResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.MemStatus', null, global);
goog.exportSymbol('proto.volume_server_pb.QueriedStripe', null, global);
goog.exportSymbol('proto.volume_server_pb.QueryRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.QueryRequest.Filter', null, global);
goog.exportSymbol('proto.volume_server_pb.QueryRequest.InputSerialization', null, global);
goog.exportSymbol('proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput', null, global);
goog.exportSymbol('proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput', null, global);
goog.exportSymbol('proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput', null, global);
goog.exportSymbol('proto.volume_server_pb.QueryRequest.OutputSerialization', null, global);
goog.exportSymbol('proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput', null, global);
goog.exportSymbol('proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput', null, global);
goog.exportSymbol('proto.volume_server_pb.ReadVolumeFileStatusRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.ReadVolumeFileStatusResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.RemoteFile', null, global);
goog.exportSymbol('proto.volume_server_pb.VacuumVolumeCheckRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VacuumVolumeCheckResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VacuumVolumeCleanupRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VacuumVolumeCleanupResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VacuumVolumeCommitRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VacuumVolumeCommitResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VacuumVolumeCompactRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VacuumVolumeCompactResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeConfigureRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeConfigureResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeCopyRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeCopyResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeDeleteRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeDeleteResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcBlobDeleteRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcBlobDeleteResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcShardReadRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcShardReadResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcShardsCopyRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcShardsCopyResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcShardsDeleteRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcShardsDeleteResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcShardsGenerateRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcShardsGenerateResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcShardsMountRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcShardsMountResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcShardsRebuildRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcShardsRebuildResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcShardsToVolumeRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcShardsToVolumeResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcShardsUnmountRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeEcShardsUnmountResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeIncrementalCopyRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeIncrementalCopyResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeInfo', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeMarkReadonlyRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeMarkReadonlyResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeMountRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeMountResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeServerStatusRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeServerStatusResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeSyncStatusRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeSyncStatusResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeTailReceiverRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeTailReceiverResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeTailSenderRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeTailSenderResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeUnmountRequest', null, global);
goog.exportSymbol('proto.volume_server_pb.VolumeUnmountResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.BatchDeleteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.volume_server_pb.BatchDeleteRequest.repeatedFields_, null);
};
goog.inherits(proto.volume_server_pb.BatchDeleteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.BatchDeleteRequest.displayName = 'proto.volume_server_pb.BatchDeleteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.BatchDeleteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.volume_server_pb.BatchDeleteResponse.repeatedFields_, null);
};
goog.inherits(proto.volume_server_pb.BatchDeleteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.BatchDeleteResponse.displayName = 'proto.volume_server_pb.BatchDeleteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.DeleteResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.DeleteResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.DeleteResult.displayName = 'proto.volume_server_pb.DeleteResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.FileGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.FileGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.FileGetRequest.displayName = 'proto.volume_server_pb.FileGetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.FileGetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.FileGetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.FileGetResponse.displayName = 'proto.volume_server_pb.FileGetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.Empty.displayName = 'proto.volume_server_pb.Empty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VacuumVolumeCheckRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VacuumVolumeCheckRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VacuumVolumeCheckRequest.displayName = 'proto.volume_server_pb.VacuumVolumeCheckRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VacuumVolumeCheckResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VacuumVolumeCheckResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VacuumVolumeCheckResponse.displayName = 'proto.volume_server_pb.VacuumVolumeCheckResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VacuumVolumeCompactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VacuumVolumeCompactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VacuumVolumeCompactRequest.displayName = 'proto.volume_server_pb.VacuumVolumeCompactRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VacuumVolumeCompactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VacuumVolumeCompactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VacuumVolumeCompactResponse.displayName = 'proto.volume_server_pb.VacuumVolumeCompactResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VacuumVolumeCommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VacuumVolumeCommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VacuumVolumeCommitRequest.displayName = 'proto.volume_server_pb.VacuumVolumeCommitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VacuumVolumeCommitResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VacuumVolumeCommitResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VacuumVolumeCommitResponse.displayName = 'proto.volume_server_pb.VacuumVolumeCommitResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VacuumVolumeCleanupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VacuumVolumeCleanupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VacuumVolumeCleanupRequest.displayName = 'proto.volume_server_pb.VacuumVolumeCleanupRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VacuumVolumeCleanupResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VacuumVolumeCleanupResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VacuumVolumeCleanupResponse.displayName = 'proto.volume_server_pb.VacuumVolumeCleanupResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.DeleteCollectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.DeleteCollectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.DeleteCollectionRequest.displayName = 'proto.volume_server_pb.DeleteCollectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.DeleteCollectionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.DeleteCollectionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.DeleteCollectionResponse.displayName = 'proto.volume_server_pb.DeleteCollectionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.AllocateVolumeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.AllocateVolumeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.AllocateVolumeRequest.displayName = 'proto.volume_server_pb.AllocateVolumeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.AllocateVolumeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.AllocateVolumeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.AllocateVolumeResponse.displayName = 'proto.volume_server_pb.AllocateVolumeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeSyncStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeSyncStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeSyncStatusRequest.displayName = 'proto.volume_server_pb.VolumeSyncStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeSyncStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeSyncStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeSyncStatusResponse.displayName = 'proto.volume_server_pb.VolumeSyncStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeIncrementalCopyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeIncrementalCopyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeIncrementalCopyRequest.displayName = 'proto.volume_server_pb.VolumeIncrementalCopyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeIncrementalCopyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeIncrementalCopyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeIncrementalCopyResponse.displayName = 'proto.volume_server_pb.VolumeIncrementalCopyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeMountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeMountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeMountRequest.displayName = 'proto.volume_server_pb.VolumeMountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeMountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeMountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeMountResponse.displayName = 'proto.volume_server_pb.VolumeMountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeUnmountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeUnmountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeUnmountRequest.displayName = 'proto.volume_server_pb.VolumeUnmountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeUnmountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeUnmountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeUnmountResponse.displayName = 'proto.volume_server_pb.VolumeUnmountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeDeleteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeDeleteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeDeleteRequest.displayName = 'proto.volume_server_pb.VolumeDeleteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeDeleteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeDeleteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeDeleteResponse.displayName = 'proto.volume_server_pb.VolumeDeleteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeMarkReadonlyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeMarkReadonlyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeMarkReadonlyRequest.displayName = 'proto.volume_server_pb.VolumeMarkReadonlyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeMarkReadonlyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeMarkReadonlyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeMarkReadonlyResponse.displayName = 'proto.volume_server_pb.VolumeMarkReadonlyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeConfigureRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeConfigureRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeConfigureRequest.displayName = 'proto.volume_server_pb.VolumeConfigureRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeConfigureResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeConfigureResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeConfigureResponse.displayName = 'proto.volume_server_pb.VolumeConfigureResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeCopyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeCopyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeCopyRequest.displayName = 'proto.volume_server_pb.VolumeCopyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeCopyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeCopyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeCopyResponse.displayName = 'proto.volume_server_pb.VolumeCopyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.CopyFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.CopyFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.CopyFileRequest.displayName = 'proto.volume_server_pb.CopyFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.CopyFileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.CopyFileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.CopyFileResponse.displayName = 'proto.volume_server_pb.CopyFileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeTailSenderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeTailSenderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeTailSenderRequest.displayName = 'proto.volume_server_pb.VolumeTailSenderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeTailSenderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeTailSenderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeTailSenderResponse.displayName = 'proto.volume_server_pb.VolumeTailSenderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeTailReceiverRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeTailReceiverRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeTailReceiverRequest.displayName = 'proto.volume_server_pb.VolumeTailReceiverRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeTailReceiverResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeTailReceiverResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeTailReceiverResponse.displayName = 'proto.volume_server_pb.VolumeTailReceiverResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcShardsGenerateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcShardsGenerateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcShardsGenerateRequest.displayName = 'proto.volume_server_pb.VolumeEcShardsGenerateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcShardsGenerateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcShardsGenerateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcShardsGenerateResponse.displayName = 'proto.volume_server_pb.VolumeEcShardsGenerateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcShardsRebuildRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcShardsRebuildRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcShardsRebuildRequest.displayName = 'proto.volume_server_pb.VolumeEcShardsRebuildRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcShardsRebuildResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.volume_server_pb.VolumeEcShardsRebuildResponse.repeatedFields_, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcShardsRebuildResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcShardsRebuildResponse.displayName = 'proto.volume_server_pb.VolumeEcShardsRebuildResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.volume_server_pb.VolumeEcShardsCopyRequest.repeatedFields_, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcShardsCopyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcShardsCopyRequest.displayName = 'proto.volume_server_pb.VolumeEcShardsCopyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcShardsCopyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcShardsCopyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcShardsCopyResponse.displayName = 'proto.volume_server_pb.VolumeEcShardsCopyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcShardsDeleteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.volume_server_pb.VolumeEcShardsDeleteRequest.repeatedFields_, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcShardsDeleteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcShardsDeleteRequest.displayName = 'proto.volume_server_pb.VolumeEcShardsDeleteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcShardsDeleteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcShardsDeleteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcShardsDeleteResponse.displayName = 'proto.volume_server_pb.VolumeEcShardsDeleteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcShardsMountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.volume_server_pb.VolumeEcShardsMountRequest.repeatedFields_, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcShardsMountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcShardsMountRequest.displayName = 'proto.volume_server_pb.VolumeEcShardsMountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcShardsMountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcShardsMountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcShardsMountResponse.displayName = 'proto.volume_server_pb.VolumeEcShardsMountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcShardsUnmountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.volume_server_pb.VolumeEcShardsUnmountRequest.repeatedFields_, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcShardsUnmountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcShardsUnmountRequest.displayName = 'proto.volume_server_pb.VolumeEcShardsUnmountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcShardsUnmountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcShardsUnmountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcShardsUnmountResponse.displayName = 'proto.volume_server_pb.VolumeEcShardsUnmountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcShardReadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcShardReadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcShardReadRequest.displayName = 'proto.volume_server_pb.VolumeEcShardReadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcShardReadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcShardReadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcShardReadResponse.displayName = 'proto.volume_server_pb.VolumeEcShardReadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcBlobDeleteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcBlobDeleteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcBlobDeleteRequest.displayName = 'proto.volume_server_pb.VolumeEcBlobDeleteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcBlobDeleteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcBlobDeleteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcBlobDeleteResponse.displayName = 'proto.volume_server_pb.VolumeEcBlobDeleteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcShardsToVolumeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcShardsToVolumeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcShardsToVolumeRequest.displayName = 'proto.volume_server_pb.VolumeEcShardsToVolumeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeEcShardsToVolumeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeEcShardsToVolumeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeEcShardsToVolumeResponse.displayName = 'proto.volume_server_pb.VolumeEcShardsToVolumeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.ReadVolumeFileStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.ReadVolumeFileStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.ReadVolumeFileStatusRequest.displayName = 'proto.volume_server_pb.ReadVolumeFileStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.ReadVolumeFileStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.ReadVolumeFileStatusResponse.displayName = 'proto.volume_server_pb.ReadVolumeFileStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.DiskStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.DiskStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.DiskStatus.displayName = 'proto.volume_server_pb.DiskStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.MemStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.MemStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.MemStatus.displayName = 'proto.volume_server_pb.MemStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.RemoteFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.RemoteFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.RemoteFile.displayName = 'proto.volume_server_pb.RemoteFile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.volume_server_pb.VolumeInfo.repeatedFields_, null);
};
goog.inherits(proto.volume_server_pb.VolumeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeInfo.displayName = 'proto.volume_server_pb.VolumeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.displayName = 'proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse.displayName = 'proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest.displayName = 'proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse.displayName = 'proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeServerStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.VolumeServerStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeServerStatusRequest.displayName = 'proto.volume_server_pb.VolumeServerStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.VolumeServerStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.volume_server_pb.VolumeServerStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.volume_server_pb.VolumeServerStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.VolumeServerStatusResponse.displayName = 'proto.volume_server_pb.VolumeServerStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.QueryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.volume_server_pb.QueryRequest.repeatedFields_, null);
};
goog.inherits(proto.volume_server_pb.QueryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.QueryRequest.displayName = 'proto.volume_server_pb.QueryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.QueryRequest.Filter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.QueryRequest.Filter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.QueryRequest.Filter.displayName = 'proto.volume_server_pb.QueryRequest.Filter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.QueryRequest.InputSerialization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.QueryRequest.InputSerialization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.QueryRequest.InputSerialization.displayName = 'proto.volume_server_pb.QueryRequest.InputSerialization';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.displayName = 'proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput.displayName = 'proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput.displayName = 'proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.QueryRequest.OutputSerialization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.QueryRequest.OutputSerialization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.QueryRequest.OutputSerialization.displayName = 'proto.volume_server_pb.QueryRequest.OutputSerialization';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.displayName = 'proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput.displayName = 'proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.volume_server_pb.QueriedStripe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.volume_server_pb.QueriedStripe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.volume_server_pb.QueriedStripe.displayName = 'proto.volume_server_pb.QueriedStripe';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.volume_server_pb.BatchDeleteRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.BatchDeleteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.BatchDeleteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.BatchDeleteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.BatchDeleteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.BatchDeleteRequest}
 */
proto.volume_server_pb.BatchDeleteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.BatchDeleteRequest;
  return proto.volume_server_pb.BatchDeleteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.BatchDeleteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.BatchDeleteRequest}
 */
proto.volume_server_pb.BatchDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addFileIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.BatchDeleteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.BatchDeleteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.BatchDeleteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.BatchDeleteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string file_ids = 1;
 * @return {!Array<string>}
 */
proto.volume_server_pb.BatchDeleteRequest.prototype.getFileIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.volume_server_pb.BatchDeleteRequest} returns this
 */
proto.volume_server_pb.BatchDeleteRequest.prototype.setFileIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.volume_server_pb.BatchDeleteRequest} returns this
 */
proto.volume_server_pb.BatchDeleteRequest.prototype.addFileIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.volume_server_pb.BatchDeleteRequest} returns this
 */
proto.volume_server_pb.BatchDeleteRequest.prototype.clearFileIdsList = function() {
  return this.setFileIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.volume_server_pb.BatchDeleteResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.BatchDeleteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.BatchDeleteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.BatchDeleteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.BatchDeleteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.volume_server_pb.DeleteResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.BatchDeleteResponse}
 */
proto.volume_server_pb.BatchDeleteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.BatchDeleteResponse;
  return proto.volume_server_pb.BatchDeleteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.BatchDeleteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.BatchDeleteResponse}
 */
proto.volume_server_pb.BatchDeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.volume_server_pb.DeleteResult;
      reader.readMessage(value,proto.volume_server_pb.DeleteResult.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.BatchDeleteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.BatchDeleteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.BatchDeleteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.BatchDeleteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.volume_server_pb.DeleteResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DeleteResult results = 1;
 * @return {!Array<!proto.volume_server_pb.DeleteResult>}
 */
proto.volume_server_pb.BatchDeleteResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.volume_server_pb.DeleteResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.volume_server_pb.DeleteResult, 1));
};


/**
 * @param {!Array<!proto.volume_server_pb.DeleteResult>} value
 * @return {!proto.volume_server_pb.BatchDeleteResponse} returns this
*/
proto.volume_server_pb.BatchDeleteResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.volume_server_pb.DeleteResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.volume_server_pb.DeleteResult}
 */
proto.volume_server_pb.BatchDeleteResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.volume_server_pb.DeleteResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.volume_server_pb.BatchDeleteResponse} returns this
 */
proto.volume_server_pb.BatchDeleteResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.DeleteResult.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.DeleteResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.DeleteResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.DeleteResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    error: jspb.Message.getFieldWithDefault(msg, 3, ""),
    size: jspb.Message.getFieldWithDefault(msg, 4, 0),
    version: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.DeleteResult}
 */
proto.volume_server_pb.DeleteResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.DeleteResult;
  return proto.volume_server_pb.DeleteResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.DeleteResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.DeleteResult}
 */
proto.volume_server_pb.DeleteResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSize(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.DeleteResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.DeleteResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.DeleteResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.DeleteResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional string file_id = 1;
 * @return {string}
 */
proto.volume_server_pb.DeleteResult.prototype.getFileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.DeleteResult} returns this
 */
proto.volume_server_pb.DeleteResult.prototype.setFileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 status = 2;
 * @return {number}
 */
proto.volume_server_pb.DeleteResult.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.DeleteResult} returns this
 */
proto.volume_server_pb.DeleteResult.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string error = 3;
 * @return {string}
 */
proto.volume_server_pb.DeleteResult.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.DeleteResult} returns this
 */
proto.volume_server_pb.DeleteResult.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 size = 4;
 * @return {number}
 */
proto.volume_server_pb.DeleteResult.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.DeleteResult} returns this
 */
proto.volume_server_pb.DeleteResult.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 version = 5;
 * @return {number}
 */
proto.volume_server_pb.DeleteResult.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.DeleteResult} returns this
 */
proto.volume_server_pb.DeleteResult.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.FileGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.FileGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.FileGetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.FileGetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    acceptGzip: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.FileGetRequest}
 */
proto.volume_server_pb.FileGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.FileGetRequest;
  return proto.volume_server_pb.FileGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.FileGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.FileGetRequest}
 */
proto.volume_server_pb.FileGetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAcceptGzip(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.FileGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.FileGetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.FileGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.FileGetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAcceptGzip();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string file_id = 1;
 * @return {string}
 */
proto.volume_server_pb.FileGetRequest.prototype.getFileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.FileGetRequest} returns this
 */
proto.volume_server_pb.FileGetRequest.prototype.setFileId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool accept_gzip = 2;
 * @return {boolean}
 */
proto.volume_server_pb.FileGetRequest.prototype.getAcceptGzip = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.volume_server_pb.FileGetRequest} returns this
 */
proto.volume_server_pb.FileGetRequest.prototype.setAcceptGzip = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.FileGetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.FileGetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.FileGetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.FileGetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    contentLength: jspb.Message.getFieldWithDefault(msg, 2, 0),
    contentType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastModified: jspb.Message.getFieldWithDefault(msg, 4, 0),
    filename: jspb.Message.getFieldWithDefault(msg, 5, ""),
    etag: jspb.Message.getFieldWithDefault(msg, 6, ""),
    isGzipped: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    headersMap: (f = msg.getHeadersMap()) ? f.toObject(includeInstance, undefined) : [],
    errorcode: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.FileGetResponse}
 */
proto.volume_server_pb.FileGetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.FileGetResponse;
  return proto.volume_server_pb.FileGetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.FileGetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.FileGetResponse}
 */
proto.volume_server_pb.FileGetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setContentLength(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastModified(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtag(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsGzipped(value);
      break;
    case 8:
      var value = msg.getHeadersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrorcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.FileGetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.FileGetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.FileGetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.FileGetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getContentLength();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getContentType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastModified();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEtag();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIsGzipped();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getHeadersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getErrorcode();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.volume_server_pb.FileGetResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.volume_server_pb.FileGetResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.volume_server_pb.FileGetResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.volume_server_pb.FileGetResponse} returns this
 */
proto.volume_server_pb.FileGetResponse.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint32 content_length = 2;
 * @return {number}
 */
proto.volume_server_pb.FileGetResponse.prototype.getContentLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.FileGetResponse} returns this
 */
proto.volume_server_pb.FileGetResponse.prototype.setContentLength = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string content_type = 3;
 * @return {string}
 */
proto.volume_server_pb.FileGetResponse.prototype.getContentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.FileGetResponse} returns this
 */
proto.volume_server_pb.FileGetResponse.prototype.setContentType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 last_modified = 4;
 * @return {number}
 */
proto.volume_server_pb.FileGetResponse.prototype.getLastModified = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.FileGetResponse} returns this
 */
proto.volume_server_pb.FileGetResponse.prototype.setLastModified = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string filename = 5;
 * @return {string}
 */
proto.volume_server_pb.FileGetResponse.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.FileGetResponse} returns this
 */
proto.volume_server_pb.FileGetResponse.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string etag = 6;
 * @return {string}
 */
proto.volume_server_pb.FileGetResponse.prototype.getEtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.FileGetResponse} returns this
 */
proto.volume_server_pb.FileGetResponse.prototype.setEtag = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool is_gzipped = 7;
 * @return {boolean}
 */
proto.volume_server_pb.FileGetResponse.prototype.getIsGzipped = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.volume_server_pb.FileGetResponse} returns this
 */
proto.volume_server_pb.FileGetResponse.prototype.setIsGzipped = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * map<string, string> headers = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.volume_server_pb.FileGetResponse.prototype.getHeadersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.volume_server_pb.FileGetResponse} returns this
 */
proto.volume_server_pb.FileGetResponse.prototype.clearHeadersMap = function() {
  this.getHeadersMap().clear();
  return this;};


/**
 * optional int32 errorCode = 9;
 * @return {number}
 */
proto.volume_server_pb.FileGetResponse.prototype.getErrorcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.FileGetResponse} returns this
 */
proto.volume_server_pb.FileGetResponse.prototype.setErrorcode = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.Empty}
 */
proto.volume_server_pb.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.Empty;
  return proto.volume_server_pb.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.Empty}
 */
proto.volume_server_pb.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VacuumVolumeCheckRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VacuumVolumeCheckRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VacuumVolumeCheckRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VacuumVolumeCheckRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VacuumVolumeCheckRequest}
 */
proto.volume_server_pb.VacuumVolumeCheckRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VacuumVolumeCheckRequest;
  return proto.volume_server_pb.VacuumVolumeCheckRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VacuumVolumeCheckRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VacuumVolumeCheckRequest}
 */
proto.volume_server_pb.VacuumVolumeCheckRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VacuumVolumeCheckRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VacuumVolumeCheckRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VacuumVolumeCheckRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VacuumVolumeCheckRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VacuumVolumeCheckRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VacuumVolumeCheckRequest} returns this
 */
proto.volume_server_pb.VacuumVolumeCheckRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VacuumVolumeCheckResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VacuumVolumeCheckResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VacuumVolumeCheckResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VacuumVolumeCheckResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    garbageRatio: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VacuumVolumeCheckResponse}
 */
proto.volume_server_pb.VacuumVolumeCheckResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VacuumVolumeCheckResponse;
  return proto.volume_server_pb.VacuumVolumeCheckResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VacuumVolumeCheckResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VacuumVolumeCheckResponse}
 */
proto.volume_server_pb.VacuumVolumeCheckResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setGarbageRatio(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VacuumVolumeCheckResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VacuumVolumeCheckResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VacuumVolumeCheckResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VacuumVolumeCheckResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGarbageRatio();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double garbage_ratio = 1;
 * @return {number}
 */
proto.volume_server_pb.VacuumVolumeCheckResponse.prototype.getGarbageRatio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VacuumVolumeCheckResponse} returns this
 */
proto.volume_server_pb.VacuumVolumeCheckResponse.prototype.setGarbageRatio = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VacuumVolumeCompactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VacuumVolumeCompactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VacuumVolumeCompactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VacuumVolumeCompactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    preallocate: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VacuumVolumeCompactRequest}
 */
proto.volume_server_pb.VacuumVolumeCompactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VacuumVolumeCompactRequest;
  return proto.volume_server_pb.VacuumVolumeCompactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VacuumVolumeCompactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VacuumVolumeCompactRequest}
 */
proto.volume_server_pb.VacuumVolumeCompactRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPreallocate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VacuumVolumeCompactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VacuumVolumeCompactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VacuumVolumeCompactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VacuumVolumeCompactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPreallocate();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VacuumVolumeCompactRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VacuumVolumeCompactRequest} returns this
 */
proto.volume_server_pb.VacuumVolumeCompactRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 preallocate = 2;
 * @return {number}
 */
proto.volume_server_pb.VacuumVolumeCompactRequest.prototype.getPreallocate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VacuumVolumeCompactRequest} returns this
 */
proto.volume_server_pb.VacuumVolumeCompactRequest.prototype.setPreallocate = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VacuumVolumeCompactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VacuumVolumeCompactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VacuumVolumeCompactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VacuumVolumeCompactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VacuumVolumeCompactResponse}
 */
proto.volume_server_pb.VacuumVolumeCompactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VacuumVolumeCompactResponse;
  return proto.volume_server_pb.VacuumVolumeCompactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VacuumVolumeCompactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VacuumVolumeCompactResponse}
 */
proto.volume_server_pb.VacuumVolumeCompactResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VacuumVolumeCompactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VacuumVolumeCompactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VacuumVolumeCompactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VacuumVolumeCompactResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VacuumVolumeCommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VacuumVolumeCommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VacuumVolumeCommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VacuumVolumeCommitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VacuumVolumeCommitRequest}
 */
proto.volume_server_pb.VacuumVolumeCommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VacuumVolumeCommitRequest;
  return proto.volume_server_pb.VacuumVolumeCommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VacuumVolumeCommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VacuumVolumeCommitRequest}
 */
proto.volume_server_pb.VacuumVolumeCommitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VacuumVolumeCommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VacuumVolumeCommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VacuumVolumeCommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VacuumVolumeCommitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VacuumVolumeCommitRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VacuumVolumeCommitRequest} returns this
 */
proto.volume_server_pb.VacuumVolumeCommitRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VacuumVolumeCommitResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VacuumVolumeCommitResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VacuumVolumeCommitResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VacuumVolumeCommitResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VacuumVolumeCommitResponse}
 */
proto.volume_server_pb.VacuumVolumeCommitResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VacuumVolumeCommitResponse;
  return proto.volume_server_pb.VacuumVolumeCommitResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VacuumVolumeCommitResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VacuumVolumeCommitResponse}
 */
proto.volume_server_pb.VacuumVolumeCommitResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VacuumVolumeCommitResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VacuumVolumeCommitResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VacuumVolumeCommitResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VacuumVolumeCommitResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VacuumVolumeCleanupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VacuumVolumeCleanupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VacuumVolumeCleanupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VacuumVolumeCleanupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VacuumVolumeCleanupRequest}
 */
proto.volume_server_pb.VacuumVolumeCleanupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VacuumVolumeCleanupRequest;
  return proto.volume_server_pb.VacuumVolumeCleanupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VacuumVolumeCleanupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VacuumVolumeCleanupRequest}
 */
proto.volume_server_pb.VacuumVolumeCleanupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VacuumVolumeCleanupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VacuumVolumeCleanupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VacuumVolumeCleanupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VacuumVolumeCleanupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VacuumVolumeCleanupRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VacuumVolumeCleanupRequest} returns this
 */
proto.volume_server_pb.VacuumVolumeCleanupRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VacuumVolumeCleanupResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VacuumVolumeCleanupResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VacuumVolumeCleanupResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VacuumVolumeCleanupResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VacuumVolumeCleanupResponse}
 */
proto.volume_server_pb.VacuumVolumeCleanupResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VacuumVolumeCleanupResponse;
  return proto.volume_server_pb.VacuumVolumeCleanupResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VacuumVolumeCleanupResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VacuumVolumeCleanupResponse}
 */
proto.volume_server_pb.VacuumVolumeCleanupResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VacuumVolumeCleanupResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VacuumVolumeCleanupResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VacuumVolumeCleanupResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VacuumVolumeCleanupResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.DeleteCollectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.DeleteCollectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.DeleteCollectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.DeleteCollectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    collection: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.DeleteCollectionRequest}
 */
proto.volume_server_pb.DeleteCollectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.DeleteCollectionRequest;
  return proto.volume_server_pb.DeleteCollectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.DeleteCollectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.DeleteCollectionRequest}
 */
proto.volume_server_pb.DeleteCollectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.DeleteCollectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.DeleteCollectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.DeleteCollectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.DeleteCollectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCollection();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string collection = 1;
 * @return {string}
 */
proto.volume_server_pb.DeleteCollectionRequest.prototype.getCollection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.DeleteCollectionRequest} returns this
 */
proto.volume_server_pb.DeleteCollectionRequest.prototype.setCollection = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.DeleteCollectionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.DeleteCollectionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.DeleteCollectionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.DeleteCollectionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.DeleteCollectionResponse}
 */
proto.volume_server_pb.DeleteCollectionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.DeleteCollectionResponse;
  return proto.volume_server_pb.DeleteCollectionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.DeleteCollectionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.DeleteCollectionResponse}
 */
proto.volume_server_pb.DeleteCollectionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.DeleteCollectionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.DeleteCollectionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.DeleteCollectionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.DeleteCollectionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.AllocateVolumeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.AllocateVolumeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.AllocateVolumeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.AllocateVolumeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    collection: jspb.Message.getFieldWithDefault(msg, 2, ""),
    preallocate: jspb.Message.getFieldWithDefault(msg, 3, 0),
    replication: jspb.Message.getFieldWithDefault(msg, 4, ""),
    ttl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    memoryMapMaxSizeMb: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.AllocateVolumeRequest}
 */
proto.volume_server_pb.AllocateVolumeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.AllocateVolumeRequest;
  return proto.volume_server_pb.AllocateVolumeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.AllocateVolumeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.AllocateVolumeRequest}
 */
proto.volume_server_pb.AllocateVolumeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollection(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPreallocate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplication(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTtl(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMemoryMapMaxSizeMb(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.AllocateVolumeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.AllocateVolumeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.AllocateVolumeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.AllocateVolumeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCollection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPreallocate();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getReplication();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTtl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMemoryMapMaxSizeMb();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.AllocateVolumeRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.AllocateVolumeRequest} returns this
 */
proto.volume_server_pb.AllocateVolumeRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string collection = 2;
 * @return {string}
 */
proto.volume_server_pb.AllocateVolumeRequest.prototype.getCollection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.AllocateVolumeRequest} returns this
 */
proto.volume_server_pb.AllocateVolumeRequest.prototype.setCollection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 preallocate = 3;
 * @return {number}
 */
proto.volume_server_pb.AllocateVolumeRequest.prototype.getPreallocate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.AllocateVolumeRequest} returns this
 */
proto.volume_server_pb.AllocateVolumeRequest.prototype.setPreallocate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string replication = 4;
 * @return {string}
 */
proto.volume_server_pb.AllocateVolumeRequest.prototype.getReplication = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.AllocateVolumeRequest} returns this
 */
proto.volume_server_pb.AllocateVolumeRequest.prototype.setReplication = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ttl = 5;
 * @return {string}
 */
proto.volume_server_pb.AllocateVolumeRequest.prototype.getTtl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.AllocateVolumeRequest} returns this
 */
proto.volume_server_pb.AllocateVolumeRequest.prototype.setTtl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 memory_map_max_size_mb = 6;
 * @return {number}
 */
proto.volume_server_pb.AllocateVolumeRequest.prototype.getMemoryMapMaxSizeMb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.AllocateVolumeRequest} returns this
 */
proto.volume_server_pb.AllocateVolumeRequest.prototype.setMemoryMapMaxSizeMb = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.AllocateVolumeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.AllocateVolumeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.AllocateVolumeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.AllocateVolumeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.AllocateVolumeResponse}
 */
proto.volume_server_pb.AllocateVolumeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.AllocateVolumeResponse;
  return proto.volume_server_pb.AllocateVolumeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.AllocateVolumeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.AllocateVolumeResponse}
 */
proto.volume_server_pb.AllocateVolumeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.AllocateVolumeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.AllocateVolumeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.AllocateVolumeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.AllocateVolumeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeSyncStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeSyncStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeSyncStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeSyncStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeSyncStatusRequest}
 */
proto.volume_server_pb.VolumeSyncStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeSyncStatusRequest;
  return proto.volume_server_pb.VolumeSyncStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeSyncStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeSyncStatusRequest}
 */
proto.volume_server_pb.VolumeSyncStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeSyncStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeSyncStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeSyncStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeSyncStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeSyncStatusRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeSyncStatusRequest} returns this
 */
proto.volume_server_pb.VolumeSyncStatusRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeSyncStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeSyncStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeSyncStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeSyncStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    collection: jspb.Message.getFieldWithDefault(msg, 2, ""),
    replication: jspb.Message.getFieldWithDefault(msg, 4, ""),
    ttl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    tailOffset: jspb.Message.getFieldWithDefault(msg, 6, 0),
    compactRevision: jspb.Message.getFieldWithDefault(msg, 7, 0),
    idxFileSize: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeSyncStatusResponse}
 */
proto.volume_server_pb.VolumeSyncStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeSyncStatusResponse;
  return proto.volume_server_pb.VolumeSyncStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeSyncStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeSyncStatusResponse}
 */
proto.volume_server_pb.VolumeSyncStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollection(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplication(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTtl(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTailOffset(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCompactRevision(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIdxFileSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeSyncStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeSyncStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeSyncStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeSyncStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCollection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReplication();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTtl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTailOffset();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getCompactRevision();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getIdxFileSize();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeSyncStatusResponse.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeSyncStatusResponse} returns this
 */
proto.volume_server_pb.VolumeSyncStatusResponse.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string collection = 2;
 * @return {string}
 */
proto.volume_server_pb.VolumeSyncStatusResponse.prototype.getCollection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeSyncStatusResponse} returns this
 */
proto.volume_server_pb.VolumeSyncStatusResponse.prototype.setCollection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string replication = 4;
 * @return {string}
 */
proto.volume_server_pb.VolumeSyncStatusResponse.prototype.getReplication = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeSyncStatusResponse} returns this
 */
proto.volume_server_pb.VolumeSyncStatusResponse.prototype.setReplication = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ttl = 5;
 * @return {string}
 */
proto.volume_server_pb.VolumeSyncStatusResponse.prototype.getTtl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeSyncStatusResponse} returns this
 */
proto.volume_server_pb.VolumeSyncStatusResponse.prototype.setTtl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 tail_offset = 6;
 * @return {number}
 */
proto.volume_server_pb.VolumeSyncStatusResponse.prototype.getTailOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeSyncStatusResponse} returns this
 */
proto.volume_server_pb.VolumeSyncStatusResponse.prototype.setTailOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 compact_revision = 7;
 * @return {number}
 */
proto.volume_server_pb.VolumeSyncStatusResponse.prototype.getCompactRevision = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeSyncStatusResponse} returns this
 */
proto.volume_server_pb.VolumeSyncStatusResponse.prototype.setCompactRevision = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 idx_file_size = 8;
 * @return {number}
 */
proto.volume_server_pb.VolumeSyncStatusResponse.prototype.getIdxFileSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeSyncStatusResponse} returns this
 */
proto.volume_server_pb.VolumeSyncStatusResponse.prototype.setIdxFileSize = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeIncrementalCopyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeIncrementalCopyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeIncrementalCopyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeIncrementalCopyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sinceNs: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeIncrementalCopyRequest}
 */
proto.volume_server_pb.VolumeIncrementalCopyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeIncrementalCopyRequest;
  return proto.volume_server_pb.VolumeIncrementalCopyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeIncrementalCopyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeIncrementalCopyRequest}
 */
proto.volume_server_pb.VolumeIncrementalCopyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSinceNs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeIncrementalCopyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeIncrementalCopyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeIncrementalCopyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeIncrementalCopyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSinceNs();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeIncrementalCopyRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeIncrementalCopyRequest} returns this
 */
proto.volume_server_pb.VolumeIncrementalCopyRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 since_ns = 2;
 * @return {number}
 */
proto.volume_server_pb.VolumeIncrementalCopyRequest.prototype.getSinceNs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeIncrementalCopyRequest} returns this
 */
proto.volume_server_pb.VolumeIncrementalCopyRequest.prototype.setSinceNs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeIncrementalCopyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeIncrementalCopyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeIncrementalCopyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeIncrementalCopyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileContent: msg.getFileContent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeIncrementalCopyResponse}
 */
proto.volume_server_pb.VolumeIncrementalCopyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeIncrementalCopyResponse;
  return proto.volume_server_pb.VolumeIncrementalCopyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeIncrementalCopyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeIncrementalCopyResponse}
 */
proto.volume_server_pb.VolumeIncrementalCopyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFileContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeIncrementalCopyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeIncrementalCopyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeIncrementalCopyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeIncrementalCopyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes file_content = 1;
 * @return {!(string|Uint8Array)}
 */
proto.volume_server_pb.VolumeIncrementalCopyResponse.prototype.getFileContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes file_content = 1;
 * This is a type-conversion wrapper around `getFileContent()`
 * @return {string}
 */
proto.volume_server_pb.VolumeIncrementalCopyResponse.prototype.getFileContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFileContent()));
};


/**
 * optional bytes file_content = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFileContent()`
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeIncrementalCopyResponse.prototype.getFileContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.volume_server_pb.VolumeIncrementalCopyResponse} returns this
 */
proto.volume_server_pb.VolumeIncrementalCopyResponse.prototype.setFileContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeMountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeMountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeMountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeMountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeMountRequest}
 */
proto.volume_server_pb.VolumeMountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeMountRequest;
  return proto.volume_server_pb.VolumeMountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeMountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeMountRequest}
 */
proto.volume_server_pb.VolumeMountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeMountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeMountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeMountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeMountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeMountRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeMountRequest} returns this
 */
proto.volume_server_pb.VolumeMountRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeMountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeMountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeMountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeMountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeMountResponse}
 */
proto.volume_server_pb.VolumeMountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeMountResponse;
  return proto.volume_server_pb.VolumeMountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeMountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeMountResponse}
 */
proto.volume_server_pb.VolumeMountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeMountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeMountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeMountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeMountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeUnmountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeUnmountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeUnmountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeUnmountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeUnmountRequest}
 */
proto.volume_server_pb.VolumeUnmountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeUnmountRequest;
  return proto.volume_server_pb.VolumeUnmountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeUnmountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeUnmountRequest}
 */
proto.volume_server_pb.VolumeUnmountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeUnmountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeUnmountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeUnmountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeUnmountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeUnmountRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeUnmountRequest} returns this
 */
proto.volume_server_pb.VolumeUnmountRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeUnmountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeUnmountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeUnmountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeUnmountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeUnmountResponse}
 */
proto.volume_server_pb.VolumeUnmountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeUnmountResponse;
  return proto.volume_server_pb.VolumeUnmountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeUnmountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeUnmountResponse}
 */
proto.volume_server_pb.VolumeUnmountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeUnmountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeUnmountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeUnmountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeUnmountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeDeleteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeDeleteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeDeleteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeDeleteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeDeleteRequest}
 */
proto.volume_server_pb.VolumeDeleteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeDeleteRequest;
  return proto.volume_server_pb.VolumeDeleteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeDeleteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeDeleteRequest}
 */
proto.volume_server_pb.VolumeDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeDeleteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeDeleteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeDeleteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeDeleteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeDeleteRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeDeleteRequest} returns this
 */
proto.volume_server_pb.VolumeDeleteRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeDeleteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeDeleteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeDeleteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeDeleteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeDeleteResponse}
 */
proto.volume_server_pb.VolumeDeleteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeDeleteResponse;
  return proto.volume_server_pb.VolumeDeleteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeDeleteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeDeleteResponse}
 */
proto.volume_server_pb.VolumeDeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeDeleteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeDeleteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeDeleteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeDeleteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeMarkReadonlyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeMarkReadonlyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeMarkReadonlyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeMarkReadonlyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeMarkReadonlyRequest}
 */
proto.volume_server_pb.VolumeMarkReadonlyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeMarkReadonlyRequest;
  return proto.volume_server_pb.VolumeMarkReadonlyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeMarkReadonlyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeMarkReadonlyRequest}
 */
proto.volume_server_pb.VolumeMarkReadonlyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeMarkReadonlyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeMarkReadonlyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeMarkReadonlyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeMarkReadonlyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeMarkReadonlyRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeMarkReadonlyRequest} returns this
 */
proto.volume_server_pb.VolumeMarkReadonlyRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeMarkReadonlyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeMarkReadonlyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeMarkReadonlyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeMarkReadonlyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeMarkReadonlyResponse}
 */
proto.volume_server_pb.VolumeMarkReadonlyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeMarkReadonlyResponse;
  return proto.volume_server_pb.VolumeMarkReadonlyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeMarkReadonlyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeMarkReadonlyResponse}
 */
proto.volume_server_pb.VolumeMarkReadonlyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeMarkReadonlyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeMarkReadonlyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeMarkReadonlyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeMarkReadonlyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeConfigureRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeConfigureRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeConfigureRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeConfigureRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    replication: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeConfigureRequest}
 */
proto.volume_server_pb.VolumeConfigureRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeConfigureRequest;
  return proto.volume_server_pb.VolumeConfigureRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeConfigureRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeConfigureRequest}
 */
proto.volume_server_pb.VolumeConfigureRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplication(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeConfigureRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeConfigureRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeConfigureRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeConfigureRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getReplication();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeConfigureRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeConfigureRequest} returns this
 */
proto.volume_server_pb.VolumeConfigureRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string replication = 2;
 * @return {string}
 */
proto.volume_server_pb.VolumeConfigureRequest.prototype.getReplication = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeConfigureRequest} returns this
 */
proto.volume_server_pb.VolumeConfigureRequest.prototype.setReplication = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeConfigureResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeConfigureResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeConfigureResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeConfigureResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeConfigureResponse}
 */
proto.volume_server_pb.VolumeConfigureResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeConfigureResponse;
  return proto.volume_server_pb.VolumeConfigureResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeConfigureResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeConfigureResponse}
 */
proto.volume_server_pb.VolumeConfigureResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeConfigureResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeConfigureResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeConfigureResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeConfigureResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string error = 1;
 * @return {string}
 */
proto.volume_server_pb.VolumeConfigureResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeConfigureResponse} returns this
 */
proto.volume_server_pb.VolumeConfigureResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeCopyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeCopyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeCopyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeCopyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    collection: jspb.Message.getFieldWithDefault(msg, 2, ""),
    replication: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ttl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sourceDataNode: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeCopyRequest}
 */
proto.volume_server_pb.VolumeCopyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeCopyRequest;
  return proto.volume_server_pb.VolumeCopyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeCopyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeCopyRequest}
 */
proto.volume_server_pb.VolumeCopyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollection(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplication(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTtl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceDataNode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeCopyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeCopyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeCopyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeCopyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCollection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReplication();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTtl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSourceDataNode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeCopyRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeCopyRequest} returns this
 */
proto.volume_server_pb.VolumeCopyRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string collection = 2;
 * @return {string}
 */
proto.volume_server_pb.VolumeCopyRequest.prototype.getCollection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeCopyRequest} returns this
 */
proto.volume_server_pb.VolumeCopyRequest.prototype.setCollection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string replication = 3;
 * @return {string}
 */
proto.volume_server_pb.VolumeCopyRequest.prototype.getReplication = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeCopyRequest} returns this
 */
proto.volume_server_pb.VolumeCopyRequest.prototype.setReplication = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ttl = 4;
 * @return {string}
 */
proto.volume_server_pb.VolumeCopyRequest.prototype.getTtl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeCopyRequest} returns this
 */
proto.volume_server_pb.VolumeCopyRequest.prototype.setTtl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string source_data_node = 5;
 * @return {string}
 */
proto.volume_server_pb.VolumeCopyRequest.prototype.getSourceDataNode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeCopyRequest} returns this
 */
proto.volume_server_pb.VolumeCopyRequest.prototype.setSourceDataNode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeCopyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeCopyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeCopyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeCopyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastAppendAtNs: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeCopyResponse}
 */
proto.volume_server_pb.VolumeCopyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeCopyResponse;
  return proto.volume_server_pb.VolumeCopyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeCopyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeCopyResponse}
 */
proto.volume_server_pb.VolumeCopyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastAppendAtNs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeCopyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeCopyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeCopyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeCopyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastAppendAtNs();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 last_append_at_ns = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeCopyResponse.prototype.getLastAppendAtNs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeCopyResponse} returns this
 */
proto.volume_server_pb.VolumeCopyResponse.prototype.setLastAppendAtNs = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.CopyFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.CopyFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.CopyFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.CopyFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ext: jspb.Message.getFieldWithDefault(msg, 2, ""),
    compactionRevision: jspb.Message.getFieldWithDefault(msg, 3, 0),
    stopOffset: jspb.Message.getFieldWithDefault(msg, 4, 0),
    collection: jspb.Message.getFieldWithDefault(msg, 5, ""),
    isEcVolume: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    ignoreSourceFileNotFound: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.CopyFileRequest}
 */
proto.volume_server_pb.CopyFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.CopyFileRequest;
  return proto.volume_server_pb.CopyFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.CopyFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.CopyFileRequest}
 */
proto.volume_server_pb.CopyFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCompactionRevision(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStopOffset(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollection(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEcVolume(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreSourceFileNotFound(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.CopyFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.CopyFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.CopyFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.CopyFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getExt();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCompactionRevision();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getStopOffset();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getCollection();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIsEcVolume();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIgnoreSourceFileNotFound();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.CopyFileRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.CopyFileRequest} returns this
 */
proto.volume_server_pb.CopyFileRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string ext = 2;
 * @return {string}
 */
proto.volume_server_pb.CopyFileRequest.prototype.getExt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.CopyFileRequest} returns this
 */
proto.volume_server_pb.CopyFileRequest.prototype.setExt = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 compaction_revision = 3;
 * @return {number}
 */
proto.volume_server_pb.CopyFileRequest.prototype.getCompactionRevision = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.CopyFileRequest} returns this
 */
proto.volume_server_pb.CopyFileRequest.prototype.setCompactionRevision = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 stop_offset = 4;
 * @return {number}
 */
proto.volume_server_pb.CopyFileRequest.prototype.getStopOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.CopyFileRequest} returns this
 */
proto.volume_server_pb.CopyFileRequest.prototype.setStopOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string collection = 5;
 * @return {string}
 */
proto.volume_server_pb.CopyFileRequest.prototype.getCollection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.CopyFileRequest} returns this
 */
proto.volume_server_pb.CopyFileRequest.prototype.setCollection = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool is_ec_volume = 6;
 * @return {boolean}
 */
proto.volume_server_pb.CopyFileRequest.prototype.getIsEcVolume = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.volume_server_pb.CopyFileRequest} returns this
 */
proto.volume_server_pb.CopyFileRequest.prototype.setIsEcVolume = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool ignore_source_file_not_found = 7;
 * @return {boolean}
 */
proto.volume_server_pb.CopyFileRequest.prototype.getIgnoreSourceFileNotFound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.volume_server_pb.CopyFileRequest} returns this
 */
proto.volume_server_pb.CopyFileRequest.prototype.setIgnoreSourceFileNotFound = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.CopyFileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.CopyFileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.CopyFileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.CopyFileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileContent: msg.getFileContent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.CopyFileResponse}
 */
proto.volume_server_pb.CopyFileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.CopyFileResponse;
  return proto.volume_server_pb.CopyFileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.CopyFileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.CopyFileResponse}
 */
proto.volume_server_pb.CopyFileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFileContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.CopyFileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.CopyFileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.CopyFileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.CopyFileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes file_content = 1;
 * @return {!(string|Uint8Array)}
 */
proto.volume_server_pb.CopyFileResponse.prototype.getFileContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes file_content = 1;
 * This is a type-conversion wrapper around `getFileContent()`
 * @return {string}
 */
proto.volume_server_pb.CopyFileResponse.prototype.getFileContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFileContent()));
};


/**
 * optional bytes file_content = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFileContent()`
 * @return {!Uint8Array}
 */
proto.volume_server_pb.CopyFileResponse.prototype.getFileContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFileContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.volume_server_pb.CopyFileResponse} returns this
 */
proto.volume_server_pb.CopyFileResponse.prototype.setFileContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeTailSenderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeTailSenderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeTailSenderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeTailSenderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sinceNs: jspb.Message.getFieldWithDefault(msg, 2, 0),
    idleTimeoutSeconds: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeTailSenderRequest}
 */
proto.volume_server_pb.VolumeTailSenderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeTailSenderRequest;
  return proto.volume_server_pb.VolumeTailSenderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeTailSenderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeTailSenderRequest}
 */
proto.volume_server_pb.VolumeTailSenderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSinceNs(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIdleTimeoutSeconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeTailSenderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeTailSenderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeTailSenderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeTailSenderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSinceNs();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getIdleTimeoutSeconds();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeTailSenderRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeTailSenderRequest} returns this
 */
proto.volume_server_pb.VolumeTailSenderRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 since_ns = 2;
 * @return {number}
 */
proto.volume_server_pb.VolumeTailSenderRequest.prototype.getSinceNs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeTailSenderRequest} returns this
 */
proto.volume_server_pb.VolumeTailSenderRequest.prototype.setSinceNs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 idle_timeout_seconds = 3;
 * @return {number}
 */
proto.volume_server_pb.VolumeTailSenderRequest.prototype.getIdleTimeoutSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeTailSenderRequest} returns this
 */
proto.volume_server_pb.VolumeTailSenderRequest.prototype.setIdleTimeoutSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeTailSenderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeTailSenderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeTailSenderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeTailSenderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    needleHeader: msg.getNeedleHeader_asB64(),
    needleBody: msg.getNeedleBody_asB64(),
    isLastChunk: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeTailSenderResponse}
 */
proto.volume_server_pb.VolumeTailSenderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeTailSenderResponse;
  return proto.volume_server_pb.VolumeTailSenderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeTailSenderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeTailSenderResponse}
 */
proto.volume_server_pb.VolumeTailSenderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNeedleHeader(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNeedleBody(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLastChunk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeTailSenderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeTailSenderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeTailSenderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeTailSenderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNeedleHeader_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getNeedleBody_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getIsLastChunk();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bytes needle_header = 1;
 * @return {!(string|Uint8Array)}
 */
proto.volume_server_pb.VolumeTailSenderResponse.prototype.getNeedleHeader = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes needle_header = 1;
 * This is a type-conversion wrapper around `getNeedleHeader()`
 * @return {string}
 */
proto.volume_server_pb.VolumeTailSenderResponse.prototype.getNeedleHeader_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNeedleHeader()));
};


/**
 * optional bytes needle_header = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNeedleHeader()`
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeTailSenderResponse.prototype.getNeedleHeader_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNeedleHeader()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.volume_server_pb.VolumeTailSenderResponse} returns this
 */
proto.volume_server_pb.VolumeTailSenderResponse.prototype.setNeedleHeader = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes needle_body = 2;
 * @return {!(string|Uint8Array)}
 */
proto.volume_server_pb.VolumeTailSenderResponse.prototype.getNeedleBody = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes needle_body = 2;
 * This is a type-conversion wrapper around `getNeedleBody()`
 * @return {string}
 */
proto.volume_server_pb.VolumeTailSenderResponse.prototype.getNeedleBody_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNeedleBody()));
};


/**
 * optional bytes needle_body = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNeedleBody()`
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeTailSenderResponse.prototype.getNeedleBody_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNeedleBody()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.volume_server_pb.VolumeTailSenderResponse} returns this
 */
proto.volume_server_pb.VolumeTailSenderResponse.prototype.setNeedleBody = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bool is_last_chunk = 3;
 * @return {boolean}
 */
proto.volume_server_pb.VolumeTailSenderResponse.prototype.getIsLastChunk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.volume_server_pb.VolumeTailSenderResponse} returns this
 */
proto.volume_server_pb.VolumeTailSenderResponse.prototype.setIsLastChunk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeTailReceiverRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeTailReceiverRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeTailReceiverRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeTailReceiverRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sinceNs: jspb.Message.getFieldWithDefault(msg, 2, 0),
    idleTimeoutSeconds: jspb.Message.getFieldWithDefault(msg, 3, 0),
    sourceVolumeServer: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeTailReceiverRequest}
 */
proto.volume_server_pb.VolumeTailReceiverRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeTailReceiverRequest;
  return proto.volume_server_pb.VolumeTailReceiverRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeTailReceiverRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeTailReceiverRequest}
 */
proto.volume_server_pb.VolumeTailReceiverRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSinceNs(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIdleTimeoutSeconds(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceVolumeServer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeTailReceiverRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeTailReceiverRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeTailReceiverRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeTailReceiverRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSinceNs();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getIdleTimeoutSeconds();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getSourceVolumeServer();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeTailReceiverRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeTailReceiverRequest} returns this
 */
proto.volume_server_pb.VolumeTailReceiverRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 since_ns = 2;
 * @return {number}
 */
proto.volume_server_pb.VolumeTailReceiverRequest.prototype.getSinceNs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeTailReceiverRequest} returns this
 */
proto.volume_server_pb.VolumeTailReceiverRequest.prototype.setSinceNs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 idle_timeout_seconds = 3;
 * @return {number}
 */
proto.volume_server_pb.VolumeTailReceiverRequest.prototype.getIdleTimeoutSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeTailReceiverRequest} returns this
 */
proto.volume_server_pb.VolumeTailReceiverRequest.prototype.setIdleTimeoutSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string source_volume_server = 4;
 * @return {string}
 */
proto.volume_server_pb.VolumeTailReceiverRequest.prototype.getSourceVolumeServer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeTailReceiverRequest} returns this
 */
proto.volume_server_pb.VolumeTailReceiverRequest.prototype.setSourceVolumeServer = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeTailReceiverResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeTailReceiverResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeTailReceiverResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeTailReceiverResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeTailReceiverResponse}
 */
proto.volume_server_pb.VolumeTailReceiverResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeTailReceiverResponse;
  return proto.volume_server_pb.VolumeTailReceiverResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeTailReceiverResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeTailReceiverResponse}
 */
proto.volume_server_pb.VolumeTailReceiverResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeTailReceiverResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeTailReceiverResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeTailReceiverResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeTailReceiverResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcShardsGenerateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcShardsGenerateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcShardsGenerateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsGenerateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    collection: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcShardsGenerateRequest}
 */
proto.volume_server_pb.VolumeEcShardsGenerateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcShardsGenerateRequest;
  return proto.volume_server_pb.VolumeEcShardsGenerateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcShardsGenerateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcShardsGenerateRequest}
 */
proto.volume_server_pb.VolumeEcShardsGenerateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcShardsGenerateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcShardsGenerateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcShardsGenerateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsGenerateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCollection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeEcShardsGenerateRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeEcShardsGenerateRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsGenerateRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string collection = 2;
 * @return {string}
 */
proto.volume_server_pb.VolumeEcShardsGenerateRequest.prototype.getCollection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeEcShardsGenerateRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsGenerateRequest.prototype.setCollection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcShardsGenerateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcShardsGenerateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcShardsGenerateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsGenerateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcShardsGenerateResponse}
 */
proto.volume_server_pb.VolumeEcShardsGenerateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcShardsGenerateResponse;
  return proto.volume_server_pb.VolumeEcShardsGenerateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcShardsGenerateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcShardsGenerateResponse}
 */
proto.volume_server_pb.VolumeEcShardsGenerateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcShardsGenerateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcShardsGenerateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcShardsGenerateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsGenerateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcShardsRebuildRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcShardsRebuildRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcShardsRebuildRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsRebuildRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    collection: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcShardsRebuildRequest}
 */
proto.volume_server_pb.VolumeEcShardsRebuildRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcShardsRebuildRequest;
  return proto.volume_server_pb.VolumeEcShardsRebuildRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcShardsRebuildRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcShardsRebuildRequest}
 */
proto.volume_server_pb.VolumeEcShardsRebuildRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcShardsRebuildRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcShardsRebuildRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcShardsRebuildRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsRebuildRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCollection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeEcShardsRebuildRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeEcShardsRebuildRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsRebuildRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string collection = 2;
 * @return {string}
 */
proto.volume_server_pb.VolumeEcShardsRebuildRequest.prototype.getCollection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeEcShardsRebuildRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsRebuildRequest.prototype.setCollection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.volume_server_pb.VolumeEcShardsRebuildResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcShardsRebuildResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcShardsRebuildResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcShardsRebuildResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsRebuildResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rebuiltShardIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcShardsRebuildResponse}
 */
proto.volume_server_pb.VolumeEcShardsRebuildResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcShardsRebuildResponse;
  return proto.volume_server_pb.VolumeEcShardsRebuildResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcShardsRebuildResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcShardsRebuildResponse}
 */
proto.volume_server_pb.VolumeEcShardsRebuildResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setRebuiltShardIdsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcShardsRebuildResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcShardsRebuildResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcShardsRebuildResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsRebuildResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRebuiltShardIdsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      1,
      f
    );
  }
};


/**
 * repeated uint32 rebuilt_shard_ids = 1;
 * @return {!Array<number>}
 */
proto.volume_server_pb.VolumeEcShardsRebuildResponse.prototype.getRebuiltShardIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.volume_server_pb.VolumeEcShardsRebuildResponse} returns this
 */
proto.volume_server_pb.VolumeEcShardsRebuildResponse.prototype.setRebuiltShardIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.volume_server_pb.VolumeEcShardsRebuildResponse} returns this
 */
proto.volume_server_pb.VolumeEcShardsRebuildResponse.prototype.addRebuiltShardIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.volume_server_pb.VolumeEcShardsRebuildResponse} returns this
 */
proto.volume_server_pb.VolumeEcShardsRebuildResponse.prototype.clearRebuiltShardIdsList = function() {
  return this.setRebuiltShardIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcShardsCopyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcShardsCopyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    collection: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shardIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    copyEcxFile: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    sourceDataNode: jspb.Message.getFieldWithDefault(msg, 5, ""),
    copyEcjFile: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    copyVifFile: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcShardsCopyRequest}
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcShardsCopyRequest;
  return proto.volume_server_pb.VolumeEcShardsCopyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcShardsCopyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcShardsCopyRequest}
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollection(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setShardIdsList(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCopyEcxFile(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceDataNode(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCopyEcjFile(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCopyVifFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcShardsCopyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcShardsCopyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCollection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShardIdsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      3,
      f
    );
  }
  f = message.getCopyEcxFile();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getSourceDataNode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCopyEcjFile();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getCopyVifFile();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeEcShardsCopyRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string collection = 2;
 * @return {string}
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.getCollection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeEcShardsCopyRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.setCollection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated uint32 shard_ids = 3;
 * @return {!Array<number>}
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.getShardIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.volume_server_pb.VolumeEcShardsCopyRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.setShardIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.volume_server_pb.VolumeEcShardsCopyRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.addShardIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.volume_server_pb.VolumeEcShardsCopyRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.clearShardIdsList = function() {
  return this.setShardIdsList([]);
};


/**
 * optional bool copy_ecx_file = 4;
 * @return {boolean}
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.getCopyEcxFile = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.volume_server_pb.VolumeEcShardsCopyRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.setCopyEcxFile = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string source_data_node = 5;
 * @return {string}
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.getSourceDataNode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeEcShardsCopyRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.setSourceDataNode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool copy_ecj_file = 6;
 * @return {boolean}
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.getCopyEcjFile = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.volume_server_pb.VolumeEcShardsCopyRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.setCopyEcjFile = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool copy_vif_file = 7;
 * @return {boolean}
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.getCopyVifFile = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.volume_server_pb.VolumeEcShardsCopyRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsCopyRequest.prototype.setCopyVifFile = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcShardsCopyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcShardsCopyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcShardsCopyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsCopyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcShardsCopyResponse}
 */
proto.volume_server_pb.VolumeEcShardsCopyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcShardsCopyResponse;
  return proto.volume_server_pb.VolumeEcShardsCopyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcShardsCopyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcShardsCopyResponse}
 */
proto.volume_server_pb.VolumeEcShardsCopyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcShardsCopyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcShardsCopyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcShardsCopyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsCopyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.volume_server_pb.VolumeEcShardsDeleteRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcShardsDeleteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcShardsDeleteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcShardsDeleteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsDeleteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    collection: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shardIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcShardsDeleteRequest}
 */
proto.volume_server_pb.VolumeEcShardsDeleteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcShardsDeleteRequest;
  return proto.volume_server_pb.VolumeEcShardsDeleteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcShardsDeleteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcShardsDeleteRequest}
 */
proto.volume_server_pb.VolumeEcShardsDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollection(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setShardIdsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcShardsDeleteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcShardsDeleteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcShardsDeleteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsDeleteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCollection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShardIdsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeEcShardsDeleteRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeEcShardsDeleteRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsDeleteRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string collection = 2;
 * @return {string}
 */
proto.volume_server_pb.VolumeEcShardsDeleteRequest.prototype.getCollection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeEcShardsDeleteRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsDeleteRequest.prototype.setCollection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated uint32 shard_ids = 3;
 * @return {!Array<number>}
 */
proto.volume_server_pb.VolumeEcShardsDeleteRequest.prototype.getShardIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.volume_server_pb.VolumeEcShardsDeleteRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsDeleteRequest.prototype.setShardIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.volume_server_pb.VolumeEcShardsDeleteRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsDeleteRequest.prototype.addShardIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.volume_server_pb.VolumeEcShardsDeleteRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsDeleteRequest.prototype.clearShardIdsList = function() {
  return this.setShardIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcShardsDeleteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcShardsDeleteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcShardsDeleteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsDeleteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcShardsDeleteResponse}
 */
proto.volume_server_pb.VolumeEcShardsDeleteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcShardsDeleteResponse;
  return proto.volume_server_pb.VolumeEcShardsDeleteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcShardsDeleteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcShardsDeleteResponse}
 */
proto.volume_server_pb.VolumeEcShardsDeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcShardsDeleteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcShardsDeleteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcShardsDeleteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsDeleteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.volume_server_pb.VolumeEcShardsMountRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcShardsMountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcShardsMountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcShardsMountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsMountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    collection: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shardIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcShardsMountRequest}
 */
proto.volume_server_pb.VolumeEcShardsMountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcShardsMountRequest;
  return proto.volume_server_pb.VolumeEcShardsMountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcShardsMountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcShardsMountRequest}
 */
proto.volume_server_pb.VolumeEcShardsMountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollection(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setShardIdsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcShardsMountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcShardsMountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcShardsMountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsMountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCollection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShardIdsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeEcShardsMountRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeEcShardsMountRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsMountRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string collection = 2;
 * @return {string}
 */
proto.volume_server_pb.VolumeEcShardsMountRequest.prototype.getCollection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeEcShardsMountRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsMountRequest.prototype.setCollection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated uint32 shard_ids = 3;
 * @return {!Array<number>}
 */
proto.volume_server_pb.VolumeEcShardsMountRequest.prototype.getShardIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.volume_server_pb.VolumeEcShardsMountRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsMountRequest.prototype.setShardIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.volume_server_pb.VolumeEcShardsMountRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsMountRequest.prototype.addShardIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.volume_server_pb.VolumeEcShardsMountRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsMountRequest.prototype.clearShardIdsList = function() {
  return this.setShardIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcShardsMountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcShardsMountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcShardsMountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsMountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcShardsMountResponse}
 */
proto.volume_server_pb.VolumeEcShardsMountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcShardsMountResponse;
  return proto.volume_server_pb.VolumeEcShardsMountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcShardsMountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcShardsMountResponse}
 */
proto.volume_server_pb.VolumeEcShardsMountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcShardsMountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcShardsMountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcShardsMountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsMountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.volume_server_pb.VolumeEcShardsUnmountRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcShardsUnmountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcShardsUnmountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcShardsUnmountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsUnmountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    shardIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcShardsUnmountRequest}
 */
proto.volume_server_pb.VolumeEcShardsUnmountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcShardsUnmountRequest;
  return proto.volume_server_pb.VolumeEcShardsUnmountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcShardsUnmountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcShardsUnmountRequest}
 */
proto.volume_server_pb.VolumeEcShardsUnmountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setShardIdsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcShardsUnmountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcShardsUnmountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcShardsUnmountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsUnmountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getShardIdsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeEcShardsUnmountRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeEcShardsUnmountRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsUnmountRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated uint32 shard_ids = 3;
 * @return {!Array<number>}
 */
proto.volume_server_pb.VolumeEcShardsUnmountRequest.prototype.getShardIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.volume_server_pb.VolumeEcShardsUnmountRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsUnmountRequest.prototype.setShardIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.volume_server_pb.VolumeEcShardsUnmountRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsUnmountRequest.prototype.addShardIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.volume_server_pb.VolumeEcShardsUnmountRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsUnmountRequest.prototype.clearShardIdsList = function() {
  return this.setShardIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcShardsUnmountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcShardsUnmountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcShardsUnmountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsUnmountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcShardsUnmountResponse}
 */
proto.volume_server_pb.VolumeEcShardsUnmountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcShardsUnmountResponse;
  return proto.volume_server_pb.VolumeEcShardsUnmountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcShardsUnmountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcShardsUnmountResponse}
 */
proto.volume_server_pb.VolumeEcShardsUnmountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcShardsUnmountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcShardsUnmountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcShardsUnmountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsUnmountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcShardReadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcShardReadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcShardReadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardReadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    shardId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0),
    size: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fileKey: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcShardReadRequest}
 */
proto.volume_server_pb.VolumeEcShardReadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcShardReadRequest;
  return proto.volume_server_pb.VolumeEcShardReadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcShardReadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcShardReadRequest}
 */
proto.volume_server_pb.VolumeEcShardReadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setShardId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFileKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcShardReadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcShardReadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcShardReadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardReadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getShardId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getFileKey();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeEcShardReadRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeEcShardReadRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardReadRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 shard_id = 2;
 * @return {number}
 */
proto.volume_server_pb.VolumeEcShardReadRequest.prototype.getShardId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeEcShardReadRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardReadRequest.prototype.setShardId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 offset = 3;
 * @return {number}
 */
proto.volume_server_pb.VolumeEcShardReadRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeEcShardReadRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardReadRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 size = 4;
 * @return {number}
 */
proto.volume_server_pb.VolumeEcShardReadRequest.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeEcShardReadRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardReadRequest.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 file_key = 5;
 * @return {number}
 */
proto.volume_server_pb.VolumeEcShardReadRequest.prototype.getFileKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeEcShardReadRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardReadRequest.prototype.setFileKey = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcShardReadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcShardReadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcShardReadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardReadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    isDeleted: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcShardReadResponse}
 */
proto.volume_server_pb.VolumeEcShardReadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcShardReadResponse;
  return proto.volume_server_pb.VolumeEcShardReadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcShardReadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcShardReadResponse}
 */
proto.volume_server_pb.VolumeEcShardReadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDeleted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcShardReadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcShardReadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcShardReadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardReadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getIsDeleted();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.volume_server_pb.VolumeEcShardReadResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.volume_server_pb.VolumeEcShardReadResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcShardReadResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.volume_server_pb.VolumeEcShardReadResponse} returns this
 */
proto.volume_server_pb.VolumeEcShardReadResponse.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bool is_deleted = 2;
 * @return {boolean}
 */
proto.volume_server_pb.VolumeEcShardReadResponse.prototype.getIsDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.volume_server_pb.VolumeEcShardReadResponse} returns this
 */
proto.volume_server_pb.VolumeEcShardReadResponse.prototype.setIsDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcBlobDeleteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcBlobDeleteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcBlobDeleteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcBlobDeleteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    collection: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fileKey: jspb.Message.getFieldWithDefault(msg, 3, 0),
    version: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcBlobDeleteRequest}
 */
proto.volume_server_pb.VolumeEcBlobDeleteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcBlobDeleteRequest;
  return proto.volume_server_pb.VolumeEcBlobDeleteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcBlobDeleteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcBlobDeleteRequest}
 */
proto.volume_server_pb.VolumeEcBlobDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollection(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFileKey(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcBlobDeleteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcBlobDeleteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcBlobDeleteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcBlobDeleteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCollection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFileKey();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeEcBlobDeleteRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeEcBlobDeleteRequest} returns this
 */
proto.volume_server_pb.VolumeEcBlobDeleteRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string collection = 2;
 * @return {string}
 */
proto.volume_server_pb.VolumeEcBlobDeleteRequest.prototype.getCollection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeEcBlobDeleteRequest} returns this
 */
proto.volume_server_pb.VolumeEcBlobDeleteRequest.prototype.setCollection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 file_key = 3;
 * @return {number}
 */
proto.volume_server_pb.VolumeEcBlobDeleteRequest.prototype.getFileKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeEcBlobDeleteRequest} returns this
 */
proto.volume_server_pb.VolumeEcBlobDeleteRequest.prototype.setFileKey = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 version = 4;
 * @return {number}
 */
proto.volume_server_pb.VolumeEcBlobDeleteRequest.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeEcBlobDeleteRequest} returns this
 */
proto.volume_server_pb.VolumeEcBlobDeleteRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcBlobDeleteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcBlobDeleteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcBlobDeleteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcBlobDeleteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcBlobDeleteResponse}
 */
proto.volume_server_pb.VolumeEcBlobDeleteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcBlobDeleteResponse;
  return proto.volume_server_pb.VolumeEcBlobDeleteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcBlobDeleteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcBlobDeleteResponse}
 */
proto.volume_server_pb.VolumeEcBlobDeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcBlobDeleteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcBlobDeleteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcBlobDeleteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcBlobDeleteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcShardsToVolumeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcShardsToVolumeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcShardsToVolumeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsToVolumeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    collection: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcShardsToVolumeRequest}
 */
proto.volume_server_pb.VolumeEcShardsToVolumeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcShardsToVolumeRequest;
  return proto.volume_server_pb.VolumeEcShardsToVolumeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcShardsToVolumeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcShardsToVolumeRequest}
 */
proto.volume_server_pb.VolumeEcShardsToVolumeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcShardsToVolumeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcShardsToVolumeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcShardsToVolumeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsToVolumeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCollection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeEcShardsToVolumeRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeEcShardsToVolumeRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsToVolumeRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string collection = 2;
 * @return {string}
 */
proto.volume_server_pb.VolumeEcShardsToVolumeRequest.prototype.getCollection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeEcShardsToVolumeRequest} returns this
 */
proto.volume_server_pb.VolumeEcShardsToVolumeRequest.prototype.setCollection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeEcShardsToVolumeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeEcShardsToVolumeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeEcShardsToVolumeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsToVolumeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeEcShardsToVolumeResponse}
 */
proto.volume_server_pb.VolumeEcShardsToVolumeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeEcShardsToVolumeResponse;
  return proto.volume_server_pb.VolumeEcShardsToVolumeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeEcShardsToVolumeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeEcShardsToVolumeResponse}
 */
proto.volume_server_pb.VolumeEcShardsToVolumeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeEcShardsToVolumeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeEcShardsToVolumeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeEcShardsToVolumeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeEcShardsToVolumeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.ReadVolumeFileStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.ReadVolumeFileStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.ReadVolumeFileStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.ReadVolumeFileStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.ReadVolumeFileStatusRequest}
 */
proto.volume_server_pb.ReadVolumeFileStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.ReadVolumeFileStatusRequest;
  return proto.volume_server_pb.ReadVolumeFileStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.ReadVolumeFileStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.ReadVolumeFileStatusRequest}
 */
proto.volume_server_pb.ReadVolumeFileStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.ReadVolumeFileStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.ReadVolumeFileStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.ReadVolumeFileStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.ReadVolumeFileStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.ReadVolumeFileStatusRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.ReadVolumeFileStatusRequest} returns this
 */
proto.volume_server_pb.ReadVolumeFileStatusRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.ReadVolumeFileStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.ReadVolumeFileStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    idxFileTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 2, 0),
    idxFileSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    datFileTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 4, 0),
    datFileSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    fileCount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    compactionRevision: jspb.Message.getFieldWithDefault(msg, 7, 0),
    collection: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.ReadVolumeFileStatusResponse}
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.ReadVolumeFileStatusResponse;
  return proto.volume_server_pb.ReadVolumeFileStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.ReadVolumeFileStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.ReadVolumeFileStatusResponse}
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIdxFileTimestampSeconds(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIdxFileSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDatFileTimestampSeconds(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDatFileSize(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFileCount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCompactionRevision(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.ReadVolumeFileStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.ReadVolumeFileStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getIdxFileTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getIdxFileSize();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getDatFileTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getDatFileSize();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getFileCount();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getCompactionRevision();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getCollection();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.ReadVolumeFileStatusResponse} returns this
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 idx_file_timestamp_seconds = 2;
 * @return {number}
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.getIdxFileTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.ReadVolumeFileStatusResponse} returns this
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.setIdxFileTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 idx_file_size = 3;
 * @return {number}
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.getIdxFileSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.ReadVolumeFileStatusResponse} returns this
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.setIdxFileSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 dat_file_timestamp_seconds = 4;
 * @return {number}
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.getDatFileTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.ReadVolumeFileStatusResponse} returns this
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.setDatFileTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 dat_file_size = 5;
 * @return {number}
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.getDatFileSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.ReadVolumeFileStatusResponse} returns this
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.setDatFileSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 file_count = 6;
 * @return {number}
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.getFileCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.ReadVolumeFileStatusResponse} returns this
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.setFileCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 compaction_revision = 7;
 * @return {number}
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.getCompactionRevision = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.ReadVolumeFileStatusResponse} returns this
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.setCompactionRevision = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string collection = 8;
 * @return {string}
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.getCollection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.ReadVolumeFileStatusResponse} returns this
 */
proto.volume_server_pb.ReadVolumeFileStatusResponse.prototype.setCollection = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.DiskStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.DiskStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.DiskStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.DiskStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    dir: jspb.Message.getFieldWithDefault(msg, 1, ""),
    all: jspb.Message.getFieldWithDefault(msg, 2, 0),
    used: jspb.Message.getFieldWithDefault(msg, 3, 0),
    free: jspb.Message.getFieldWithDefault(msg, 4, 0),
    percentFree: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    percentUsed: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.DiskStatus}
 */
proto.volume_server_pb.DiskStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.DiskStatus;
  return proto.volume_server_pb.DiskStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.DiskStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.DiskStatus}
 */
proto.volume_server_pb.DiskStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDir(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAll(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUsed(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFree(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPercentFree(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPercentUsed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.DiskStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.DiskStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.DiskStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.DiskStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDir();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAll();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getUsed();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getFree();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getPercentFree();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getPercentUsed();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
};


/**
 * optional string dir = 1;
 * @return {string}
 */
proto.volume_server_pb.DiskStatus.prototype.getDir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.DiskStatus} returns this
 */
proto.volume_server_pb.DiskStatus.prototype.setDir = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 all = 2;
 * @return {number}
 */
proto.volume_server_pb.DiskStatus.prototype.getAll = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.DiskStatus} returns this
 */
proto.volume_server_pb.DiskStatus.prototype.setAll = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 used = 3;
 * @return {number}
 */
proto.volume_server_pb.DiskStatus.prototype.getUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.DiskStatus} returns this
 */
proto.volume_server_pb.DiskStatus.prototype.setUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 free = 4;
 * @return {number}
 */
proto.volume_server_pb.DiskStatus.prototype.getFree = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.DiskStatus} returns this
 */
proto.volume_server_pb.DiskStatus.prototype.setFree = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional float percent_free = 5;
 * @return {number}
 */
proto.volume_server_pb.DiskStatus.prototype.getPercentFree = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.DiskStatus} returns this
 */
proto.volume_server_pb.DiskStatus.prototype.setPercentFree = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float percent_used = 6;
 * @return {number}
 */
proto.volume_server_pb.DiskStatus.prototype.getPercentUsed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.DiskStatus} returns this
 */
proto.volume_server_pb.DiskStatus.prototype.setPercentUsed = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.MemStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.MemStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.MemStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.MemStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    goroutines: jspb.Message.getFieldWithDefault(msg, 1, 0),
    all: jspb.Message.getFieldWithDefault(msg, 2, 0),
    used: jspb.Message.getFieldWithDefault(msg, 3, 0),
    free: jspb.Message.getFieldWithDefault(msg, 4, 0),
    self: jspb.Message.getFieldWithDefault(msg, 5, 0),
    heap: jspb.Message.getFieldWithDefault(msg, 6, 0),
    stack: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.MemStatus}
 */
proto.volume_server_pb.MemStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.MemStatus;
  return proto.volume_server_pb.MemStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.MemStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.MemStatus}
 */
proto.volume_server_pb.MemStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGoroutines(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAll(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUsed(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFree(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSelf(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeap(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStack(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.MemStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.MemStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.MemStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.MemStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGoroutines();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAll();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getUsed();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getFree();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getSelf();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getHeap();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getStack();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional int32 goroutines = 1;
 * @return {number}
 */
proto.volume_server_pb.MemStatus.prototype.getGoroutines = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.MemStatus} returns this
 */
proto.volume_server_pb.MemStatus.prototype.setGoroutines = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 all = 2;
 * @return {number}
 */
proto.volume_server_pb.MemStatus.prototype.getAll = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.MemStatus} returns this
 */
proto.volume_server_pb.MemStatus.prototype.setAll = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 used = 3;
 * @return {number}
 */
proto.volume_server_pb.MemStatus.prototype.getUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.MemStatus} returns this
 */
proto.volume_server_pb.MemStatus.prototype.setUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 free = 4;
 * @return {number}
 */
proto.volume_server_pb.MemStatus.prototype.getFree = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.MemStatus} returns this
 */
proto.volume_server_pb.MemStatus.prototype.setFree = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 self = 5;
 * @return {number}
 */
proto.volume_server_pb.MemStatus.prototype.getSelf = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.MemStatus} returns this
 */
proto.volume_server_pb.MemStatus.prototype.setSelf = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 heap = 6;
 * @return {number}
 */
proto.volume_server_pb.MemStatus.prototype.getHeap = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.MemStatus} returns this
 */
proto.volume_server_pb.MemStatus.prototype.setHeap = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 stack = 7;
 * @return {number}
 */
proto.volume_server_pb.MemStatus.prototype.getStack = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.MemStatus} returns this
 */
proto.volume_server_pb.MemStatus.prototype.setStack = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.RemoteFile.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.RemoteFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.RemoteFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.RemoteFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    backendType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    backendId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    key: jspb.Message.getFieldWithDefault(msg, 3, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fileSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    modifiedTime: jspb.Message.getFieldWithDefault(msg, 6, 0),
    extension: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.RemoteFile}
 */
proto.volume_server_pb.RemoteFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.RemoteFile;
  return proto.volume_server_pb.RemoteFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.RemoteFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.RemoteFile}
 */
proto.volume_server_pb.RemoteFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackendType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackendId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFileSize(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setModifiedTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtension$(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.RemoteFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.RemoteFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.RemoteFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.RemoteFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBackendType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBackendId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getFileSize();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getModifiedTime();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getExtension$();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string backend_type = 1;
 * @return {string}
 */
proto.volume_server_pb.RemoteFile.prototype.getBackendType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.RemoteFile} returns this
 */
proto.volume_server_pb.RemoteFile.prototype.setBackendType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string backend_id = 2;
 * @return {string}
 */
proto.volume_server_pb.RemoteFile.prototype.getBackendId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.RemoteFile} returns this
 */
proto.volume_server_pb.RemoteFile.prototype.setBackendId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string key = 3;
 * @return {string}
 */
proto.volume_server_pb.RemoteFile.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.RemoteFile} returns this
 */
proto.volume_server_pb.RemoteFile.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 offset = 4;
 * @return {number}
 */
proto.volume_server_pb.RemoteFile.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.RemoteFile} returns this
 */
proto.volume_server_pb.RemoteFile.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 file_size = 5;
 * @return {number}
 */
proto.volume_server_pb.RemoteFile.prototype.getFileSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.RemoteFile} returns this
 */
proto.volume_server_pb.RemoteFile.prototype.setFileSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 modified_time = 6;
 * @return {number}
 */
proto.volume_server_pb.RemoteFile.prototype.getModifiedTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.RemoteFile} returns this
 */
proto.volume_server_pb.RemoteFile.prototype.setModifiedTime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string extension = 7;
 * @return {string}
 */
proto.volume_server_pb.RemoteFile.prototype.getExtension$ = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.RemoteFile} returns this
 */
proto.volume_server_pb.RemoteFile.prototype.setExtension$ = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.volume_server_pb.VolumeInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    filesList: jspb.Message.toObjectList(msg.getFilesList(),
    proto.volume_server_pb.RemoteFile.toObject, includeInstance),
    version: jspb.Message.getFieldWithDefault(msg, 2, 0),
    replication: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeInfo}
 */
proto.volume_server_pb.VolumeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeInfo;
  return proto.volume_server_pb.VolumeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeInfo}
 */
proto.volume_server_pb.VolumeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.volume_server_pb.RemoteFile;
      reader.readMessage(value,proto.volume_server_pb.RemoteFile.deserializeBinaryFromReader);
      msg.addFiles(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplication(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.volume_server_pb.RemoteFile.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getReplication();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated RemoteFile files = 1;
 * @return {!Array<!proto.volume_server_pb.RemoteFile>}
 */
proto.volume_server_pb.VolumeInfo.prototype.getFilesList = function() {
  return /** @type{!Array<!proto.volume_server_pb.RemoteFile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.volume_server_pb.RemoteFile, 1));
};


/**
 * @param {!Array<!proto.volume_server_pb.RemoteFile>} value
 * @return {!proto.volume_server_pb.VolumeInfo} returns this
*/
proto.volume_server_pb.VolumeInfo.prototype.setFilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.volume_server_pb.RemoteFile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.volume_server_pb.RemoteFile}
 */
proto.volume_server_pb.VolumeInfo.prototype.addFiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.volume_server_pb.RemoteFile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.volume_server_pb.VolumeInfo} returns this
 */
proto.volume_server_pb.VolumeInfo.prototype.clearFilesList = function() {
  return this.setFilesList([]);
};


/**
 * optional uint32 version = 2;
 * @return {number}
 */
proto.volume_server_pb.VolumeInfo.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeInfo} returns this
 */
proto.volume_server_pb.VolumeInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string replication = 3;
 * @return {string}
 */
proto.volume_server_pb.VolumeInfo.prototype.getReplication = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeInfo} returns this
 */
proto.volume_server_pb.VolumeInfo.prototype.setReplication = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    collection: jspb.Message.getFieldWithDefault(msg, 2, ""),
    destinationBackendName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    keepLocalDatFile: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest}
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest;
  return proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest}
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollection(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationBackendName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKeepLocalDatFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCollection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDestinationBackendName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKeepLocalDatFile();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest} returns this
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string collection = 2;
 * @return {string}
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.prototype.getCollection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest} returns this
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.prototype.setCollection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string destination_backend_name = 3;
 * @return {string}
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.prototype.getDestinationBackendName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest} returns this
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.prototype.setDestinationBackendName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool keep_local_dat_file = 4;
 * @return {boolean}
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.prototype.getKeepLocalDatFile = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest} returns this
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteRequest.prototype.setKeepLocalDatFile = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    processed: jspb.Message.getFieldWithDefault(msg, 1, 0),
    processedpercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse}
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse;
  return proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse}
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setProcessed(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setProcessedpercentage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessed();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getProcessedpercentage();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional int64 processed = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse.prototype.getProcessed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse} returns this
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse.prototype.setProcessed = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float processedPercentage = 2;
 * @return {number}
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse.prototype.getProcessedpercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse} returns this
 */
proto.volume_server_pb.VolumeTierMoveDatToRemoteResponse.prototype.setProcessedpercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    collection: jspb.Message.getFieldWithDefault(msg, 2, ""),
    keepRemoteDatFile: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest}
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest;
  return proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest}
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolumeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollection(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKeepRemoteDatFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolumeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCollection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKeepRemoteDatFile();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional uint32 volume_id = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest.prototype.getVolumeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest} returns this
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest.prototype.setVolumeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string collection = 2;
 * @return {string}
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest.prototype.getCollection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest} returns this
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest.prototype.setCollection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool keep_remote_dat_file = 3;
 * @return {boolean}
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest.prototype.getKeepRemoteDatFile = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest} returns this
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteRequest.prototype.setKeepRemoteDatFile = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    processed: jspb.Message.getFieldWithDefault(msg, 1, 0),
    processedpercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse}
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse;
  return proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse}
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setProcessed(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setProcessedpercentage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessed();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getProcessedpercentage();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional int64 processed = 1;
 * @return {number}
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse.prototype.getProcessed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse} returns this
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse.prototype.setProcessed = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float processedPercentage = 2;
 * @return {number}
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse.prototype.getProcessedpercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse} returns this
 */
proto.volume_server_pb.VolumeTierMoveDatFromRemoteResponse.prototype.setProcessedpercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeServerStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeServerStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeServerStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeServerStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeServerStatusRequest}
 */
proto.volume_server_pb.VolumeServerStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeServerStatusRequest;
  return proto.volume_server_pb.VolumeServerStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeServerStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeServerStatusRequest}
 */
proto.volume_server_pb.VolumeServerStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeServerStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeServerStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeServerStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeServerStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.volume_server_pb.VolumeServerStatusResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.VolumeServerStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.VolumeServerStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.VolumeServerStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeServerStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    diskStatusesList: jspb.Message.toObjectList(msg.getDiskStatusesList(),
    proto.volume_server_pb.DiskStatus.toObject, includeInstance),
    memoryStatus: (f = msg.getMemoryStatus()) && proto.volume_server_pb.MemStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.VolumeServerStatusResponse}
 */
proto.volume_server_pb.VolumeServerStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.VolumeServerStatusResponse;
  return proto.volume_server_pb.VolumeServerStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.VolumeServerStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.VolumeServerStatusResponse}
 */
proto.volume_server_pb.VolumeServerStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.volume_server_pb.DiskStatus;
      reader.readMessage(value,proto.volume_server_pb.DiskStatus.deserializeBinaryFromReader);
      msg.addDiskStatuses(value);
      break;
    case 2:
      var value = new proto.volume_server_pb.MemStatus;
      reader.readMessage(value,proto.volume_server_pb.MemStatus.deserializeBinaryFromReader);
      msg.setMemoryStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.VolumeServerStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.VolumeServerStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.VolumeServerStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.VolumeServerStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDiskStatusesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.volume_server_pb.DiskStatus.serializeBinaryToWriter
    );
  }
  f = message.getMemoryStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.volume_server_pb.MemStatus.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DiskStatus disk_statuses = 1;
 * @return {!Array<!proto.volume_server_pb.DiskStatus>}
 */
proto.volume_server_pb.VolumeServerStatusResponse.prototype.getDiskStatusesList = function() {
  return /** @type{!Array<!proto.volume_server_pb.DiskStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.volume_server_pb.DiskStatus, 1));
};


/**
 * @param {!Array<!proto.volume_server_pb.DiskStatus>} value
 * @return {!proto.volume_server_pb.VolumeServerStatusResponse} returns this
*/
proto.volume_server_pb.VolumeServerStatusResponse.prototype.setDiskStatusesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.volume_server_pb.DiskStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.volume_server_pb.DiskStatus}
 */
proto.volume_server_pb.VolumeServerStatusResponse.prototype.addDiskStatuses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.volume_server_pb.DiskStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.volume_server_pb.VolumeServerStatusResponse} returns this
 */
proto.volume_server_pb.VolumeServerStatusResponse.prototype.clearDiskStatusesList = function() {
  return this.setDiskStatusesList([]);
};


/**
 * optional MemStatus memory_status = 2;
 * @return {?proto.volume_server_pb.MemStatus}
 */
proto.volume_server_pb.VolumeServerStatusResponse.prototype.getMemoryStatus = function() {
  return /** @type{?proto.volume_server_pb.MemStatus} */ (
    jspb.Message.getWrapperField(this, proto.volume_server_pb.MemStatus, 2));
};


/**
 * @param {?proto.volume_server_pb.MemStatus|undefined} value
 * @return {!proto.volume_server_pb.VolumeServerStatusResponse} returns this
*/
proto.volume_server_pb.VolumeServerStatusResponse.prototype.setMemoryStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.volume_server_pb.VolumeServerStatusResponse} returns this
 */
proto.volume_server_pb.VolumeServerStatusResponse.prototype.clearMemoryStatus = function() {
  return this.setMemoryStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.volume_server_pb.VolumeServerStatusResponse.prototype.hasMemoryStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.volume_server_pb.QueryRequest.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.QueryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.QueryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.QueryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    selectionsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    fromFileIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    filter: (f = msg.getFilter()) && proto.volume_server_pb.QueryRequest.Filter.toObject(includeInstance, f),
    inputSerialization: (f = msg.getInputSerialization()) && proto.volume_server_pb.QueryRequest.InputSerialization.toObject(includeInstance, f),
    outputSerialization: (f = msg.getOutputSerialization()) && proto.volume_server_pb.QueryRequest.OutputSerialization.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.QueryRequest}
 */
proto.volume_server_pb.QueryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.QueryRequest;
  return proto.volume_server_pb.QueryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.QueryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.QueryRequest}
 */
proto.volume_server_pb.QueryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSelections(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addFromFileIds(value);
      break;
    case 3:
      var value = new proto.volume_server_pb.QueryRequest.Filter;
      reader.readMessage(value,proto.volume_server_pb.QueryRequest.Filter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 4:
      var value = new proto.volume_server_pb.QueryRequest.InputSerialization;
      reader.readMessage(value,proto.volume_server_pb.QueryRequest.InputSerialization.deserializeBinaryFromReader);
      msg.setInputSerialization(value);
      break;
    case 5:
      var value = new proto.volume_server_pb.QueryRequest.OutputSerialization;
      reader.readMessage(value,proto.volume_server_pb.QueryRequest.OutputSerialization.deserializeBinaryFromReader);
      msg.setOutputSerialization(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.QueryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.QueryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.QueryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelectionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getFromFileIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.volume_server_pb.QueryRequest.Filter.serializeBinaryToWriter
    );
  }
  f = message.getInputSerialization();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.volume_server_pb.QueryRequest.InputSerialization.serializeBinaryToWriter
    );
  }
  f = message.getOutputSerialization();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.volume_server_pb.QueryRequest.OutputSerialization.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.QueryRequest.Filter.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.QueryRequest.Filter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.QueryRequest.Filter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.Filter.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operand: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.QueryRequest.Filter}
 */
proto.volume_server_pb.QueryRequest.Filter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.QueryRequest.Filter;
  return proto.volume_server_pb.QueryRequest.Filter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.QueryRequest.Filter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.QueryRequest.Filter}
 */
proto.volume_server_pb.QueryRequest.Filter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperand(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.QueryRequest.Filter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.QueryRequest.Filter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.QueryRequest.Filter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.Filter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperand();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string field = 1;
 * @return {string}
 */
proto.volume_server_pb.QueryRequest.Filter.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.QueryRequest.Filter} returns this
 */
proto.volume_server_pb.QueryRequest.Filter.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string operand = 2;
 * @return {string}
 */
proto.volume_server_pb.QueryRequest.Filter.prototype.getOperand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.QueryRequest.Filter} returns this
 */
proto.volume_server_pb.QueryRequest.Filter.prototype.setOperand = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.volume_server_pb.QueryRequest.Filter.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.QueryRequest.Filter} returns this
 */
proto.volume_server_pb.QueryRequest.Filter.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.QueryRequest.InputSerialization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.QueryRequest.InputSerialization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.InputSerialization.toObject = function(includeInstance, msg) {
  var f, obj = {
    compressionType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    csvInput: (f = msg.getCsvInput()) && proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.toObject(includeInstance, f),
    jsonInput: (f = msg.getJsonInput()) && proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput.toObject(includeInstance, f),
    parquetInput: (f = msg.getParquetInput()) && proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.QueryRequest.InputSerialization;
  return proto.volume_server_pb.QueryRequest.InputSerialization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.QueryRequest.InputSerialization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompressionType(value);
      break;
    case 2:
      var value = new proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput;
      reader.readMessage(value,proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.deserializeBinaryFromReader);
      msg.setCsvInput(value);
      break;
    case 3:
      var value = new proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput;
      reader.readMessage(value,proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput.deserializeBinaryFromReader);
      msg.setJsonInput(value);
      break;
    case 4:
      var value = new proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput;
      reader.readMessage(value,proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput.deserializeBinaryFromReader);
      msg.setParquetInput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.QueryRequest.InputSerialization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.QueryRequest.InputSerialization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.InputSerialization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompressionType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCsvInput();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.serializeBinaryToWriter
    );
  }
  f = message.getJsonInput();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput.serializeBinaryToWriter
    );
  }
  f = message.getParquetInput();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileHeaderInfo: jspb.Message.getFieldWithDefault(msg, 1, ""),
    recordDelimiter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fieldDelimiter: jspb.Message.getFieldWithDefault(msg, 3, ""),
    quoteCharactoer: jspb.Message.getFieldWithDefault(msg, 4, ""),
    quoteEscapeCharacter: jspb.Message.getFieldWithDefault(msg, 5, ""),
    comments: jspb.Message.getFieldWithDefault(msg, 6, ""),
    allowQuotedRecordDelimiter: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput;
  return proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileHeaderInfo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecordDelimiter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldDelimiter(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteCharactoer(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteEscapeCharacter(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setComments(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowQuotedRecordDelimiter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileHeaderInfo();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecordDelimiter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFieldDelimiter();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQuoteCharactoer();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getQuoteEscapeCharacter();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getComments();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAllowQuotedRecordDelimiter();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string file_header_info = 1;
 * @return {string}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.prototype.getFileHeaderInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput} returns this
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.prototype.setFileHeaderInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string record_delimiter = 2;
 * @return {string}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.prototype.getRecordDelimiter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput} returns this
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.prototype.setRecordDelimiter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string field_delimiter = 3;
 * @return {string}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.prototype.getFieldDelimiter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput} returns this
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.prototype.setFieldDelimiter = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string quote_charactoer = 4;
 * @return {string}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.prototype.getQuoteCharactoer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput} returns this
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.prototype.setQuoteCharactoer = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string quote_escape_character = 5;
 * @return {string}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.prototype.getQuoteEscapeCharacter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput} returns this
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.prototype.setQuoteEscapeCharacter = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string comments = 6;
 * @return {string}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.prototype.getComments = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput} returns this
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.prototype.setComments = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool allow_quoted_record_delimiter = 7;
 * @return {boolean}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.prototype.getAllowQuotedRecordDelimiter = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput} returns this
 */
proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput.prototype.setAllowQuotedRecordDelimiter = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput;
  return proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput} returns this
 */
proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput;
  return proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional string compression_type = 1;
 * @return {string}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.prototype.getCompressionType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization} returns this
 */
proto.volume_server_pb.QueryRequest.InputSerialization.prototype.setCompressionType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CSVInput csv_input = 2;
 * @return {?proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.prototype.getCsvInput = function() {
  return /** @type{?proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput} */ (
    jspb.Message.getWrapperField(this, proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput, 2));
};


/**
 * @param {?proto.volume_server_pb.QueryRequest.InputSerialization.CSVInput|undefined} value
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization} returns this
*/
proto.volume_server_pb.QueryRequest.InputSerialization.prototype.setCsvInput = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization} returns this
 */
proto.volume_server_pb.QueryRequest.InputSerialization.prototype.clearCsvInput = function() {
  return this.setCsvInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.prototype.hasCsvInput = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional JSONInput json_input = 3;
 * @return {?proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.prototype.getJsonInput = function() {
  return /** @type{?proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput} */ (
    jspb.Message.getWrapperField(this, proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput, 3));
};


/**
 * @param {?proto.volume_server_pb.QueryRequest.InputSerialization.JSONInput|undefined} value
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization} returns this
*/
proto.volume_server_pb.QueryRequest.InputSerialization.prototype.setJsonInput = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization} returns this
 */
proto.volume_server_pb.QueryRequest.InputSerialization.prototype.clearJsonInput = function() {
  return this.setJsonInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.prototype.hasJsonInput = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ParquetInput parquet_input = 4;
 * @return {?proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.prototype.getParquetInput = function() {
  return /** @type{?proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput} */ (
    jspb.Message.getWrapperField(this, proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput, 4));
};


/**
 * @param {?proto.volume_server_pb.QueryRequest.InputSerialization.ParquetInput|undefined} value
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization} returns this
*/
proto.volume_server_pb.QueryRequest.InputSerialization.prototype.setParquetInput = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.volume_server_pb.QueryRequest.InputSerialization} returns this
 */
proto.volume_server_pb.QueryRequest.InputSerialization.prototype.clearParquetInput = function() {
  return this.setParquetInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.volume_server_pb.QueryRequest.InputSerialization.prototype.hasParquetInput = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.QueryRequest.OutputSerialization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.QueryRequest.OutputSerialization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.toObject = function(includeInstance, msg) {
  var f, obj = {
    csvOutput: (f = msg.getCsvOutput()) && proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.toObject(includeInstance, f),
    jsonOutput: (f = msg.getJsonOutput()) && proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.QueryRequest.OutputSerialization}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.QueryRequest.OutputSerialization;
  return proto.volume_server_pb.QueryRequest.OutputSerialization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.QueryRequest.OutputSerialization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.QueryRequest.OutputSerialization}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput;
      reader.readMessage(value,proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.deserializeBinaryFromReader);
      msg.setCsvOutput(value);
      break;
    case 3:
      var value = new proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput;
      reader.readMessage(value,proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput.deserializeBinaryFromReader);
      msg.setJsonOutput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.QueryRequest.OutputSerialization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.QueryRequest.OutputSerialization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCsvOutput();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.serializeBinaryToWriter
    );
  }
  f = message.getJsonOutput();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.toObject = function(includeInstance, msg) {
  var f, obj = {
    quoteFields: jspb.Message.getFieldWithDefault(msg, 1, ""),
    recordDelimiter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fieldDelimiter: jspb.Message.getFieldWithDefault(msg, 3, ""),
    quoteCharactoer: jspb.Message.getFieldWithDefault(msg, 4, ""),
    quoteEscapeCharacter: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput;
  return proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteFields(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecordDelimiter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldDelimiter(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteCharactoer(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteEscapeCharacter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuoteFields();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecordDelimiter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFieldDelimiter();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQuoteCharactoer();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getQuoteEscapeCharacter();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string quote_fields = 1;
 * @return {string}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.prototype.getQuoteFields = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput} returns this
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.prototype.setQuoteFields = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string record_delimiter = 2;
 * @return {string}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.prototype.getRecordDelimiter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput} returns this
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.prototype.setRecordDelimiter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string field_delimiter = 3;
 * @return {string}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.prototype.getFieldDelimiter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput} returns this
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.prototype.setFieldDelimiter = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string quote_charactoer = 4;
 * @return {string}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.prototype.getQuoteCharactoer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput} returns this
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.prototype.setQuoteCharactoer = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string quote_escape_character = 5;
 * @return {string}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.prototype.getQuoteEscapeCharacter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput} returns this
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput.prototype.setQuoteEscapeCharacter = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordDelimiter: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput;
  return proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecordDelimiter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordDelimiter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string record_delimiter = 1;
 * @return {string}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput.prototype.getRecordDelimiter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput} returns this
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput.prototype.setRecordDelimiter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CSVOutput csv_output = 2;
 * @return {?proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.prototype.getCsvOutput = function() {
  return /** @type{?proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput} */ (
    jspb.Message.getWrapperField(this, proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput, 2));
};


/**
 * @param {?proto.volume_server_pb.QueryRequest.OutputSerialization.CSVOutput|undefined} value
 * @return {!proto.volume_server_pb.QueryRequest.OutputSerialization} returns this
*/
proto.volume_server_pb.QueryRequest.OutputSerialization.prototype.setCsvOutput = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.volume_server_pb.QueryRequest.OutputSerialization} returns this
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.prototype.clearCsvOutput = function() {
  return this.setCsvOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.prototype.hasCsvOutput = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional JSONOutput json_output = 3;
 * @return {?proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.prototype.getJsonOutput = function() {
  return /** @type{?proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput} */ (
    jspb.Message.getWrapperField(this, proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput, 3));
};


/**
 * @param {?proto.volume_server_pb.QueryRequest.OutputSerialization.JSONOutput|undefined} value
 * @return {!proto.volume_server_pb.QueryRequest.OutputSerialization} returns this
*/
proto.volume_server_pb.QueryRequest.OutputSerialization.prototype.setJsonOutput = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.volume_server_pb.QueryRequest.OutputSerialization} returns this
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.prototype.clearJsonOutput = function() {
  return this.setJsonOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.volume_server_pb.QueryRequest.OutputSerialization.prototype.hasJsonOutput = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string selections = 1;
 * @return {!Array<string>}
 */
proto.volume_server_pb.QueryRequest.prototype.getSelectionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.volume_server_pb.QueryRequest} returns this
 */
proto.volume_server_pb.QueryRequest.prototype.setSelectionsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.volume_server_pb.QueryRequest} returns this
 */
proto.volume_server_pb.QueryRequest.prototype.addSelections = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.volume_server_pb.QueryRequest} returns this
 */
proto.volume_server_pb.QueryRequest.prototype.clearSelectionsList = function() {
  return this.setSelectionsList([]);
};


/**
 * repeated string from_file_ids = 2;
 * @return {!Array<string>}
 */
proto.volume_server_pb.QueryRequest.prototype.getFromFileIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.volume_server_pb.QueryRequest} returns this
 */
proto.volume_server_pb.QueryRequest.prototype.setFromFileIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.volume_server_pb.QueryRequest} returns this
 */
proto.volume_server_pb.QueryRequest.prototype.addFromFileIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.volume_server_pb.QueryRequest} returns this
 */
proto.volume_server_pb.QueryRequest.prototype.clearFromFileIdsList = function() {
  return this.setFromFileIdsList([]);
};


/**
 * optional Filter filter = 3;
 * @return {?proto.volume_server_pb.QueryRequest.Filter}
 */
proto.volume_server_pb.QueryRequest.prototype.getFilter = function() {
  return /** @type{?proto.volume_server_pb.QueryRequest.Filter} */ (
    jspb.Message.getWrapperField(this, proto.volume_server_pb.QueryRequest.Filter, 3));
};


/**
 * @param {?proto.volume_server_pb.QueryRequest.Filter|undefined} value
 * @return {!proto.volume_server_pb.QueryRequest} returns this
*/
proto.volume_server_pb.QueryRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.volume_server_pb.QueryRequest} returns this
 */
proto.volume_server_pb.QueryRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.volume_server_pb.QueryRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional InputSerialization input_serialization = 4;
 * @return {?proto.volume_server_pb.QueryRequest.InputSerialization}
 */
proto.volume_server_pb.QueryRequest.prototype.getInputSerialization = function() {
  return /** @type{?proto.volume_server_pb.QueryRequest.InputSerialization} */ (
    jspb.Message.getWrapperField(this, proto.volume_server_pb.QueryRequest.InputSerialization, 4));
};


/**
 * @param {?proto.volume_server_pb.QueryRequest.InputSerialization|undefined} value
 * @return {!proto.volume_server_pb.QueryRequest} returns this
*/
proto.volume_server_pb.QueryRequest.prototype.setInputSerialization = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.volume_server_pb.QueryRequest} returns this
 */
proto.volume_server_pb.QueryRequest.prototype.clearInputSerialization = function() {
  return this.setInputSerialization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.volume_server_pb.QueryRequest.prototype.hasInputSerialization = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional OutputSerialization output_serialization = 5;
 * @return {?proto.volume_server_pb.QueryRequest.OutputSerialization}
 */
proto.volume_server_pb.QueryRequest.prototype.getOutputSerialization = function() {
  return /** @type{?proto.volume_server_pb.QueryRequest.OutputSerialization} */ (
    jspb.Message.getWrapperField(this, proto.volume_server_pb.QueryRequest.OutputSerialization, 5));
};


/**
 * @param {?proto.volume_server_pb.QueryRequest.OutputSerialization|undefined} value
 * @return {!proto.volume_server_pb.QueryRequest} returns this
*/
proto.volume_server_pb.QueryRequest.prototype.setOutputSerialization = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.volume_server_pb.QueryRequest} returns this
 */
proto.volume_server_pb.QueryRequest.prototype.clearOutputSerialization = function() {
  return this.setOutputSerialization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.volume_server_pb.QueryRequest.prototype.hasOutputSerialization = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.volume_server_pb.QueriedStripe.prototype.toObject = function(opt_includeInstance) {
  return proto.volume_server_pb.QueriedStripe.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.volume_server_pb.QueriedStripe} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueriedStripe.toObject = function(includeInstance, msg) {
  var f, obj = {
    records: msg.getRecords_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.volume_server_pb.QueriedStripe}
 */
proto.volume_server_pb.QueriedStripe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.volume_server_pb.QueriedStripe;
  return proto.volume_server_pb.QueriedStripe.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.volume_server_pb.QueriedStripe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.volume_server_pb.QueriedStripe}
 */
proto.volume_server_pb.QueriedStripe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRecords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.volume_server_pb.QueriedStripe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.volume_server_pb.QueriedStripe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.volume_server_pb.QueriedStripe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.volume_server_pb.QueriedStripe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecords_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes records = 1;
 * @return {!(string|Uint8Array)}
 */
proto.volume_server_pb.QueriedStripe.prototype.getRecords = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes records = 1;
 * This is a type-conversion wrapper around `getRecords()`
 * @return {string}
 */
proto.volume_server_pb.QueriedStripe.prototype.getRecords_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRecords()));
};


/**
 * optional bytes records = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRecords()`
 * @return {!Uint8Array}
 */
proto.volume_server_pb.QueriedStripe.prototype.getRecords_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRecords()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.volume_server_pb.QueriedStripe} returns this
 */
proto.volume_server_pb.QueriedStripe.prototype.setRecords = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


goog.object.extend(exports, proto.volume_server_pb);
