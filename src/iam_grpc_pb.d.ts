// GENERATED CODE -- DO NOT EDIT!

// package: iam_pb
// file: seaweedfs/weed/pb/iam.proto

import * as seaweedfs_weed_pb_iam_pb from "../../../seaweedfs/weed/pb/iam_pb";
import * as grpc from "grpc";

interface ISeaweedIdentityAccessManagementService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
}

export const SeaweedIdentityAccessManagementService: ISeaweedIdentityAccessManagementService;

export class SeaweedIdentityAccessManagementClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
}
