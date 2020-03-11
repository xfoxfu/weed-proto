// package: iam_pb
// file: iam.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as iam_pb from "./iam_pb";

interface ISeaweedIdentityAccessManagementService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
}


export const SeaweedIdentityAccessManagementService: ISeaweedIdentityAccessManagementService;

export interface ISeaweedIdentityAccessManagementServer {
}

export interface ISeaweedIdentityAccessManagementClient {
}

export class SeaweedIdentityAccessManagementClient extends grpc.Client implements ISeaweedIdentityAccessManagementClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
}
