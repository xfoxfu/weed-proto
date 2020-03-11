// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var seaweedfs_weed_pb_filer_pb = require('../../../seaweedfs/weed/pb/filer_pb.js');

function serialize_filer_pb_AssignVolumeRequest(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.AssignVolumeRequest)) {
    throw new Error('Expected argument of type filer_pb.AssignVolumeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_AssignVolumeRequest(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.AssignVolumeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_AssignVolumeResponse(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.AssignVolumeResponse)) {
    throw new Error('Expected argument of type filer_pb.AssignVolumeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_AssignVolumeResponse(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.AssignVolumeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_AtomicRenameEntryRequest(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.AtomicRenameEntryRequest)) {
    throw new Error('Expected argument of type filer_pb.AtomicRenameEntryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_AtomicRenameEntryRequest(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.AtomicRenameEntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_AtomicRenameEntryResponse(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.AtomicRenameEntryResponse)) {
    throw new Error('Expected argument of type filer_pb.AtomicRenameEntryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_AtomicRenameEntryResponse(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.AtomicRenameEntryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_CreateEntryRequest(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.CreateEntryRequest)) {
    throw new Error('Expected argument of type filer_pb.CreateEntryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_CreateEntryRequest(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.CreateEntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_CreateEntryResponse(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.CreateEntryResponse)) {
    throw new Error('Expected argument of type filer_pb.CreateEntryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_CreateEntryResponse(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.CreateEntryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_DeleteCollectionRequest(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.DeleteCollectionRequest)) {
    throw new Error('Expected argument of type filer_pb.DeleteCollectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_DeleteCollectionRequest(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.DeleteCollectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_DeleteCollectionResponse(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.DeleteCollectionResponse)) {
    throw new Error('Expected argument of type filer_pb.DeleteCollectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_DeleteCollectionResponse(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.DeleteCollectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_DeleteEntryRequest(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.DeleteEntryRequest)) {
    throw new Error('Expected argument of type filer_pb.DeleteEntryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_DeleteEntryRequest(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.DeleteEntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_DeleteEntryResponse(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.DeleteEntryResponse)) {
    throw new Error('Expected argument of type filer_pb.DeleteEntryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_DeleteEntryResponse(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.DeleteEntryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_GetFilerConfigurationRequest(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.GetFilerConfigurationRequest)) {
    throw new Error('Expected argument of type filer_pb.GetFilerConfigurationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_GetFilerConfigurationRequest(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.GetFilerConfigurationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_GetFilerConfigurationResponse(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.GetFilerConfigurationResponse)) {
    throw new Error('Expected argument of type filer_pb.GetFilerConfigurationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_GetFilerConfigurationResponse(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.GetFilerConfigurationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_ListEntriesRequest(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.ListEntriesRequest)) {
    throw new Error('Expected argument of type filer_pb.ListEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_ListEntriesRequest(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.ListEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_ListEntriesResponse(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.ListEntriesResponse)) {
    throw new Error('Expected argument of type filer_pb.ListEntriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_ListEntriesResponse(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.ListEntriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_LookupDirectoryEntryRequest(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.LookupDirectoryEntryRequest)) {
    throw new Error('Expected argument of type filer_pb.LookupDirectoryEntryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_LookupDirectoryEntryRequest(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.LookupDirectoryEntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_LookupDirectoryEntryResponse(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.LookupDirectoryEntryResponse)) {
    throw new Error('Expected argument of type filer_pb.LookupDirectoryEntryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_LookupDirectoryEntryResponse(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.LookupDirectoryEntryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_LookupVolumeRequest(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.LookupVolumeRequest)) {
    throw new Error('Expected argument of type filer_pb.LookupVolumeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_LookupVolumeRequest(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.LookupVolumeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_LookupVolumeResponse(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.LookupVolumeResponse)) {
    throw new Error('Expected argument of type filer_pb.LookupVolumeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_LookupVolumeResponse(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.LookupVolumeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_StatisticsRequest(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.StatisticsRequest)) {
    throw new Error('Expected argument of type filer_pb.StatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_StatisticsRequest(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.StatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_StatisticsResponse(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.StatisticsResponse)) {
    throw new Error('Expected argument of type filer_pb.StatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_StatisticsResponse(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.StatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_UpdateEntryRequest(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.UpdateEntryRequest)) {
    throw new Error('Expected argument of type filer_pb.UpdateEntryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_UpdateEntryRequest(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.UpdateEntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filer_pb_UpdateEntryResponse(arg) {
  if (!(arg instanceof seaweedfs_weed_pb_filer_pb.UpdateEntryResponse)) {
    throw new Error('Expected argument of type filer_pb.UpdateEntryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filer_pb_UpdateEntryResponse(buffer_arg) {
  return seaweedfs_weed_pb_filer_pb.UpdateEntryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ////////////////////////////////////////////////
//
var SeaweedFilerService = exports.SeaweedFilerService = {
  lookupDirectoryEntry: {
    path: '/filer_pb.SeaweedFiler/LookupDirectoryEntry',
    requestStream: false,
    responseStream: false,
    requestType: seaweedfs_weed_pb_filer_pb.LookupDirectoryEntryRequest,
    responseType: seaweedfs_weed_pb_filer_pb.LookupDirectoryEntryResponse,
    requestSerialize: serialize_filer_pb_LookupDirectoryEntryRequest,
    requestDeserialize: deserialize_filer_pb_LookupDirectoryEntryRequest,
    responseSerialize: serialize_filer_pb_LookupDirectoryEntryResponse,
    responseDeserialize: deserialize_filer_pb_LookupDirectoryEntryResponse,
  },
  listEntries: {
    path: '/filer_pb.SeaweedFiler/ListEntries',
    requestStream: false,
    responseStream: true,
    requestType: seaweedfs_weed_pb_filer_pb.ListEntriesRequest,
    responseType: seaweedfs_weed_pb_filer_pb.ListEntriesResponse,
    requestSerialize: serialize_filer_pb_ListEntriesRequest,
    requestDeserialize: deserialize_filer_pb_ListEntriesRequest,
    responseSerialize: serialize_filer_pb_ListEntriesResponse,
    responseDeserialize: deserialize_filer_pb_ListEntriesResponse,
  },
  createEntry: {
    path: '/filer_pb.SeaweedFiler/CreateEntry',
    requestStream: false,
    responseStream: false,
    requestType: seaweedfs_weed_pb_filer_pb.CreateEntryRequest,
    responseType: seaweedfs_weed_pb_filer_pb.CreateEntryResponse,
    requestSerialize: serialize_filer_pb_CreateEntryRequest,
    requestDeserialize: deserialize_filer_pb_CreateEntryRequest,
    responseSerialize: serialize_filer_pb_CreateEntryResponse,
    responseDeserialize: deserialize_filer_pb_CreateEntryResponse,
  },
  updateEntry: {
    path: '/filer_pb.SeaweedFiler/UpdateEntry',
    requestStream: false,
    responseStream: false,
    requestType: seaweedfs_weed_pb_filer_pb.UpdateEntryRequest,
    responseType: seaweedfs_weed_pb_filer_pb.UpdateEntryResponse,
    requestSerialize: serialize_filer_pb_UpdateEntryRequest,
    requestDeserialize: deserialize_filer_pb_UpdateEntryRequest,
    responseSerialize: serialize_filer_pb_UpdateEntryResponse,
    responseDeserialize: deserialize_filer_pb_UpdateEntryResponse,
  },
  deleteEntry: {
    path: '/filer_pb.SeaweedFiler/DeleteEntry',
    requestStream: false,
    responseStream: false,
    requestType: seaweedfs_weed_pb_filer_pb.DeleteEntryRequest,
    responseType: seaweedfs_weed_pb_filer_pb.DeleteEntryResponse,
    requestSerialize: serialize_filer_pb_DeleteEntryRequest,
    requestDeserialize: deserialize_filer_pb_DeleteEntryRequest,
    responseSerialize: serialize_filer_pb_DeleteEntryResponse,
    responseDeserialize: deserialize_filer_pb_DeleteEntryResponse,
  },
  streamDeleteEntries: {
    path: '/filer_pb.SeaweedFiler/StreamDeleteEntries',
    requestStream: true,
    responseStream: true,
    requestType: seaweedfs_weed_pb_filer_pb.DeleteEntryRequest,
    responseType: seaweedfs_weed_pb_filer_pb.DeleteEntryResponse,
    requestSerialize: serialize_filer_pb_DeleteEntryRequest,
    requestDeserialize: deserialize_filer_pb_DeleteEntryRequest,
    responseSerialize: serialize_filer_pb_DeleteEntryResponse,
    responseDeserialize: deserialize_filer_pb_DeleteEntryResponse,
  },
  atomicRenameEntry: {
    path: '/filer_pb.SeaweedFiler/AtomicRenameEntry',
    requestStream: false,
    responseStream: false,
    requestType: seaweedfs_weed_pb_filer_pb.AtomicRenameEntryRequest,
    responseType: seaweedfs_weed_pb_filer_pb.AtomicRenameEntryResponse,
    requestSerialize: serialize_filer_pb_AtomicRenameEntryRequest,
    requestDeserialize: deserialize_filer_pb_AtomicRenameEntryRequest,
    responseSerialize: serialize_filer_pb_AtomicRenameEntryResponse,
    responseDeserialize: deserialize_filer_pb_AtomicRenameEntryResponse,
  },
  assignVolume: {
    path: '/filer_pb.SeaweedFiler/AssignVolume',
    requestStream: false,
    responseStream: false,
    requestType: seaweedfs_weed_pb_filer_pb.AssignVolumeRequest,
    responseType: seaweedfs_weed_pb_filer_pb.AssignVolumeResponse,
    requestSerialize: serialize_filer_pb_AssignVolumeRequest,
    requestDeserialize: deserialize_filer_pb_AssignVolumeRequest,
    responseSerialize: serialize_filer_pb_AssignVolumeResponse,
    responseDeserialize: deserialize_filer_pb_AssignVolumeResponse,
  },
  lookupVolume: {
    path: '/filer_pb.SeaweedFiler/LookupVolume',
    requestStream: false,
    responseStream: false,
    requestType: seaweedfs_weed_pb_filer_pb.LookupVolumeRequest,
    responseType: seaweedfs_weed_pb_filer_pb.LookupVolumeResponse,
    requestSerialize: serialize_filer_pb_LookupVolumeRequest,
    requestDeserialize: deserialize_filer_pb_LookupVolumeRequest,
    responseSerialize: serialize_filer_pb_LookupVolumeResponse,
    responseDeserialize: deserialize_filer_pb_LookupVolumeResponse,
  },
  deleteCollection: {
    path: '/filer_pb.SeaweedFiler/DeleteCollection',
    requestStream: false,
    responseStream: false,
    requestType: seaweedfs_weed_pb_filer_pb.DeleteCollectionRequest,
    responseType: seaweedfs_weed_pb_filer_pb.DeleteCollectionResponse,
    requestSerialize: serialize_filer_pb_DeleteCollectionRequest,
    requestDeserialize: deserialize_filer_pb_DeleteCollectionRequest,
    responseSerialize: serialize_filer_pb_DeleteCollectionResponse,
    responseDeserialize: deserialize_filer_pb_DeleteCollectionResponse,
  },
  statistics: {
    path: '/filer_pb.SeaweedFiler/Statistics',
    requestStream: false,
    responseStream: false,
    requestType: seaweedfs_weed_pb_filer_pb.StatisticsRequest,
    responseType: seaweedfs_weed_pb_filer_pb.StatisticsResponse,
    requestSerialize: serialize_filer_pb_StatisticsRequest,
    requestDeserialize: deserialize_filer_pb_StatisticsRequest,
    responseSerialize: serialize_filer_pb_StatisticsResponse,
    responseDeserialize: deserialize_filer_pb_StatisticsResponse,
  },
  getFilerConfiguration: {
    path: '/filer_pb.SeaweedFiler/GetFilerConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: seaweedfs_weed_pb_filer_pb.GetFilerConfigurationRequest,
    responseType: seaweedfs_weed_pb_filer_pb.GetFilerConfigurationResponse,
    requestSerialize: serialize_filer_pb_GetFilerConfigurationRequest,
    requestDeserialize: deserialize_filer_pb_GetFilerConfigurationRequest,
    responseSerialize: serialize_filer_pb_GetFilerConfigurationResponse,
    responseDeserialize: deserialize_filer_pb_GetFilerConfigurationResponse,
  },
};

exports.SeaweedFilerClient = grpc.makeGenericClientConstructor(SeaweedFilerService);
