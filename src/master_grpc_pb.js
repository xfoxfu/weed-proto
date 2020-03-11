// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var master_pb = require('./master_pb.js');

function serialize_master_pb_AssignRequest(arg) {
  if (!(arg instanceof master_pb.AssignRequest)) {
    throw new Error('Expected argument of type master_pb.AssignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_AssignRequest(buffer_arg) {
  return master_pb.AssignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_AssignResponse(arg) {
  if (!(arg instanceof master_pb.AssignResponse)) {
    throw new Error('Expected argument of type master_pb.AssignResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_AssignResponse(buffer_arg) {
  return master_pb.AssignResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_CollectionDeleteRequest(arg) {
  if (!(arg instanceof master_pb.CollectionDeleteRequest)) {
    throw new Error('Expected argument of type master_pb.CollectionDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_CollectionDeleteRequest(buffer_arg) {
  return master_pb.CollectionDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_CollectionDeleteResponse(arg) {
  if (!(arg instanceof master_pb.CollectionDeleteResponse)) {
    throw new Error('Expected argument of type master_pb.CollectionDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_CollectionDeleteResponse(buffer_arg) {
  return master_pb.CollectionDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_CollectionListRequest(arg) {
  if (!(arg instanceof master_pb.CollectionListRequest)) {
    throw new Error('Expected argument of type master_pb.CollectionListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_CollectionListRequest(buffer_arg) {
  return master_pb.CollectionListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_CollectionListResponse(arg) {
  if (!(arg instanceof master_pb.CollectionListResponse)) {
    throw new Error('Expected argument of type master_pb.CollectionListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_CollectionListResponse(buffer_arg) {
  return master_pb.CollectionListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_GetMasterConfigurationRequest(arg) {
  if (!(arg instanceof master_pb.GetMasterConfigurationRequest)) {
    throw new Error('Expected argument of type master_pb.GetMasterConfigurationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_GetMasterConfigurationRequest(buffer_arg) {
  return master_pb.GetMasterConfigurationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_GetMasterConfigurationResponse(arg) {
  if (!(arg instanceof master_pb.GetMasterConfigurationResponse)) {
    throw new Error('Expected argument of type master_pb.GetMasterConfigurationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_GetMasterConfigurationResponse(buffer_arg) {
  return master_pb.GetMasterConfigurationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_Heartbeat(arg) {
  if (!(arg instanceof master_pb.Heartbeat)) {
    throw new Error('Expected argument of type master_pb.Heartbeat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_Heartbeat(buffer_arg) {
  return master_pb.Heartbeat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_HeartbeatResponse(arg) {
  if (!(arg instanceof master_pb.HeartbeatResponse)) {
    throw new Error('Expected argument of type master_pb.HeartbeatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_HeartbeatResponse(buffer_arg) {
  return master_pb.HeartbeatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_KeepConnectedRequest(arg) {
  if (!(arg instanceof master_pb.KeepConnectedRequest)) {
    throw new Error('Expected argument of type master_pb.KeepConnectedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_KeepConnectedRequest(buffer_arg) {
  return master_pb.KeepConnectedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_ListMasterClientsRequest(arg) {
  if (!(arg instanceof master_pb.ListMasterClientsRequest)) {
    throw new Error('Expected argument of type master_pb.ListMasterClientsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_ListMasterClientsRequest(buffer_arg) {
  return master_pb.ListMasterClientsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_ListMasterClientsResponse(arg) {
  if (!(arg instanceof master_pb.ListMasterClientsResponse)) {
    throw new Error('Expected argument of type master_pb.ListMasterClientsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_ListMasterClientsResponse(buffer_arg) {
  return master_pb.ListMasterClientsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_LookupEcVolumeRequest(arg) {
  if (!(arg instanceof master_pb.LookupEcVolumeRequest)) {
    throw new Error('Expected argument of type master_pb.LookupEcVolumeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_LookupEcVolumeRequest(buffer_arg) {
  return master_pb.LookupEcVolumeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_LookupEcVolumeResponse(arg) {
  if (!(arg instanceof master_pb.LookupEcVolumeResponse)) {
    throw new Error('Expected argument of type master_pb.LookupEcVolumeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_LookupEcVolumeResponse(buffer_arg) {
  return master_pb.LookupEcVolumeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_LookupVolumeRequest(arg) {
  if (!(arg instanceof master_pb.LookupVolumeRequest)) {
    throw new Error('Expected argument of type master_pb.LookupVolumeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_LookupVolumeRequest(buffer_arg) {
  return master_pb.LookupVolumeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_LookupVolumeResponse(arg) {
  if (!(arg instanceof master_pb.LookupVolumeResponse)) {
    throw new Error('Expected argument of type master_pb.LookupVolumeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_LookupVolumeResponse(buffer_arg) {
  return master_pb.LookupVolumeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_StatisticsRequest(arg) {
  if (!(arg instanceof master_pb.StatisticsRequest)) {
    throw new Error('Expected argument of type master_pb.StatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_StatisticsRequest(buffer_arg) {
  return master_pb.StatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_StatisticsResponse(arg) {
  if (!(arg instanceof master_pb.StatisticsResponse)) {
    throw new Error('Expected argument of type master_pb.StatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_StatisticsResponse(buffer_arg) {
  return master_pb.StatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_VolumeListRequest(arg) {
  if (!(arg instanceof master_pb.VolumeListRequest)) {
    throw new Error('Expected argument of type master_pb.VolumeListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_VolumeListRequest(buffer_arg) {
  return master_pb.VolumeListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_VolumeListResponse(arg) {
  if (!(arg instanceof master_pb.VolumeListResponse)) {
    throw new Error('Expected argument of type master_pb.VolumeListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_VolumeListResponse(buffer_arg) {
  return master_pb.VolumeListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_master_pb_VolumeLocation(arg) {
  if (!(arg instanceof master_pb.VolumeLocation)) {
    throw new Error('Expected argument of type master_pb.VolumeLocation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_master_pb_VolumeLocation(buffer_arg) {
  return master_pb.VolumeLocation.deserializeBinary(new Uint8Array(buffer_arg));
}


// ////////////////////////////////////////////////
//
var SeaweedService = exports.SeaweedService = {
  sendHeartbeat: {
    path: '/master_pb.Seaweed/SendHeartbeat',
    requestStream: true,
    responseStream: true,
    requestType: master_pb.Heartbeat,
    responseType: master_pb.HeartbeatResponse,
    requestSerialize: serialize_master_pb_Heartbeat,
    requestDeserialize: deserialize_master_pb_Heartbeat,
    responseSerialize: serialize_master_pb_HeartbeatResponse,
    responseDeserialize: deserialize_master_pb_HeartbeatResponse,
  },
  keepConnected: {
    path: '/master_pb.Seaweed/KeepConnected',
    requestStream: true,
    responseStream: true,
    requestType: master_pb.KeepConnectedRequest,
    responseType: master_pb.VolumeLocation,
    requestSerialize: serialize_master_pb_KeepConnectedRequest,
    requestDeserialize: deserialize_master_pb_KeepConnectedRequest,
    responseSerialize: serialize_master_pb_VolumeLocation,
    responseDeserialize: deserialize_master_pb_VolumeLocation,
  },
  lookupVolume: {
    path: '/master_pb.Seaweed/LookupVolume',
    requestStream: false,
    responseStream: false,
    requestType: master_pb.LookupVolumeRequest,
    responseType: master_pb.LookupVolumeResponse,
    requestSerialize: serialize_master_pb_LookupVolumeRequest,
    requestDeserialize: deserialize_master_pb_LookupVolumeRequest,
    responseSerialize: serialize_master_pb_LookupVolumeResponse,
    responseDeserialize: deserialize_master_pb_LookupVolumeResponse,
  },
  assign: {
    path: '/master_pb.Seaweed/Assign',
    requestStream: false,
    responseStream: false,
    requestType: master_pb.AssignRequest,
    responseType: master_pb.AssignResponse,
    requestSerialize: serialize_master_pb_AssignRequest,
    requestDeserialize: deserialize_master_pb_AssignRequest,
    responseSerialize: serialize_master_pb_AssignResponse,
    responseDeserialize: deserialize_master_pb_AssignResponse,
  },
  statistics: {
    path: '/master_pb.Seaweed/Statistics',
    requestStream: false,
    responseStream: false,
    requestType: master_pb.StatisticsRequest,
    responseType: master_pb.StatisticsResponse,
    requestSerialize: serialize_master_pb_StatisticsRequest,
    requestDeserialize: deserialize_master_pb_StatisticsRequest,
    responseSerialize: serialize_master_pb_StatisticsResponse,
    responseDeserialize: deserialize_master_pb_StatisticsResponse,
  },
  collectionList: {
    path: '/master_pb.Seaweed/CollectionList',
    requestStream: false,
    responseStream: false,
    requestType: master_pb.CollectionListRequest,
    responseType: master_pb.CollectionListResponse,
    requestSerialize: serialize_master_pb_CollectionListRequest,
    requestDeserialize: deserialize_master_pb_CollectionListRequest,
    responseSerialize: serialize_master_pb_CollectionListResponse,
    responseDeserialize: deserialize_master_pb_CollectionListResponse,
  },
  collectionDelete: {
    path: '/master_pb.Seaweed/CollectionDelete',
    requestStream: false,
    responseStream: false,
    requestType: master_pb.CollectionDeleteRequest,
    responseType: master_pb.CollectionDeleteResponse,
    requestSerialize: serialize_master_pb_CollectionDeleteRequest,
    requestDeserialize: deserialize_master_pb_CollectionDeleteRequest,
    responseSerialize: serialize_master_pb_CollectionDeleteResponse,
    responseDeserialize: deserialize_master_pb_CollectionDeleteResponse,
  },
  volumeList: {
    path: '/master_pb.Seaweed/VolumeList',
    requestStream: false,
    responseStream: false,
    requestType: master_pb.VolumeListRequest,
    responseType: master_pb.VolumeListResponse,
    requestSerialize: serialize_master_pb_VolumeListRequest,
    requestDeserialize: deserialize_master_pb_VolumeListRequest,
    responseSerialize: serialize_master_pb_VolumeListResponse,
    responseDeserialize: deserialize_master_pb_VolumeListResponse,
  },
  lookupEcVolume: {
    path: '/master_pb.Seaweed/LookupEcVolume',
    requestStream: false,
    responseStream: false,
    requestType: master_pb.LookupEcVolumeRequest,
    responseType: master_pb.LookupEcVolumeResponse,
    requestSerialize: serialize_master_pb_LookupEcVolumeRequest,
    requestDeserialize: deserialize_master_pb_LookupEcVolumeRequest,
    responseSerialize: serialize_master_pb_LookupEcVolumeResponse,
    responseDeserialize: deserialize_master_pb_LookupEcVolumeResponse,
  },
  getMasterConfiguration: {
    path: '/master_pb.Seaweed/GetMasterConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: master_pb.GetMasterConfigurationRequest,
    responseType: master_pb.GetMasterConfigurationResponse,
    requestSerialize: serialize_master_pb_GetMasterConfigurationRequest,
    requestDeserialize: deserialize_master_pb_GetMasterConfigurationRequest,
    responseSerialize: serialize_master_pb_GetMasterConfigurationResponse,
    responseDeserialize: deserialize_master_pb_GetMasterConfigurationResponse,
  },
  listMasterClients: {
    path: '/master_pb.Seaweed/ListMasterClients',
    requestStream: false,
    responseStream: false,
    requestType: master_pb.ListMasterClientsRequest,
    responseType: master_pb.ListMasterClientsResponse,
    requestSerialize: serialize_master_pb_ListMasterClientsRequest,
    requestDeserialize: deserialize_master_pb_ListMasterClientsRequest,
    responseSerialize: serialize_master_pb_ListMasterClientsResponse,
    responseDeserialize: deserialize_master_pb_ListMasterClientsResponse,
  },
};

exports.SeaweedClient = grpc.makeGenericClientConstructor(SeaweedService);
