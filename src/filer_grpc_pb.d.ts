// package: filer_pb
// file: filer.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as filer_pb from "./filer_pb";

interface ISeaweedFilerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    lookupDirectoryEntry: ISeaweedFilerService_ILookupDirectoryEntry;
    listEntries: ISeaweedFilerService_IListEntries;
    createEntry: ISeaweedFilerService_ICreateEntry;
    updateEntry: ISeaweedFilerService_IUpdateEntry;
    deleteEntry: ISeaweedFilerService_IDeleteEntry;
    streamDeleteEntries: ISeaweedFilerService_IStreamDeleteEntries;
    atomicRenameEntry: ISeaweedFilerService_IAtomicRenameEntry;
    assignVolume: ISeaweedFilerService_IAssignVolume;
    lookupVolume: ISeaweedFilerService_ILookupVolume;
    deleteCollection: ISeaweedFilerService_IDeleteCollection;
    statistics: ISeaweedFilerService_IStatistics;
    getFilerConfiguration: ISeaweedFilerService_IGetFilerConfiguration;
}

interface ISeaweedFilerService_ILookupDirectoryEntry extends grpc.MethodDefinition<filer_pb.LookupDirectoryEntryRequest, filer_pb.LookupDirectoryEntryResponse> {
    path: string; // "/filer_pb.SeaweedFiler/LookupDirectoryEntry"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<filer_pb.LookupDirectoryEntryRequest>;
    requestDeserialize: grpc.deserialize<filer_pb.LookupDirectoryEntryRequest>;
    responseSerialize: grpc.serialize<filer_pb.LookupDirectoryEntryResponse>;
    responseDeserialize: grpc.deserialize<filer_pb.LookupDirectoryEntryResponse>;
}
interface ISeaweedFilerService_IListEntries extends grpc.MethodDefinition<filer_pb.ListEntriesRequest, filer_pb.ListEntriesResponse> {
    path: string; // "/filer_pb.SeaweedFiler/ListEntries"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<filer_pb.ListEntriesRequest>;
    requestDeserialize: grpc.deserialize<filer_pb.ListEntriesRequest>;
    responseSerialize: grpc.serialize<filer_pb.ListEntriesResponse>;
    responseDeserialize: grpc.deserialize<filer_pb.ListEntriesResponse>;
}
interface ISeaweedFilerService_ICreateEntry extends grpc.MethodDefinition<filer_pb.CreateEntryRequest, filer_pb.CreateEntryResponse> {
    path: string; // "/filer_pb.SeaweedFiler/CreateEntry"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<filer_pb.CreateEntryRequest>;
    requestDeserialize: grpc.deserialize<filer_pb.CreateEntryRequest>;
    responseSerialize: grpc.serialize<filer_pb.CreateEntryResponse>;
    responseDeserialize: grpc.deserialize<filer_pb.CreateEntryResponse>;
}
interface ISeaweedFilerService_IUpdateEntry extends grpc.MethodDefinition<filer_pb.UpdateEntryRequest, filer_pb.UpdateEntryResponse> {
    path: string; // "/filer_pb.SeaweedFiler/UpdateEntry"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<filer_pb.UpdateEntryRequest>;
    requestDeserialize: grpc.deserialize<filer_pb.UpdateEntryRequest>;
    responseSerialize: grpc.serialize<filer_pb.UpdateEntryResponse>;
    responseDeserialize: grpc.deserialize<filer_pb.UpdateEntryResponse>;
}
interface ISeaweedFilerService_IDeleteEntry extends grpc.MethodDefinition<filer_pb.DeleteEntryRequest, filer_pb.DeleteEntryResponse> {
    path: string; // "/filer_pb.SeaweedFiler/DeleteEntry"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<filer_pb.DeleteEntryRequest>;
    requestDeserialize: grpc.deserialize<filer_pb.DeleteEntryRequest>;
    responseSerialize: grpc.serialize<filer_pb.DeleteEntryResponse>;
    responseDeserialize: grpc.deserialize<filer_pb.DeleteEntryResponse>;
}
interface ISeaweedFilerService_IStreamDeleteEntries extends grpc.MethodDefinition<filer_pb.DeleteEntryRequest, filer_pb.DeleteEntryResponse> {
    path: string; // "/filer_pb.SeaweedFiler/StreamDeleteEntries"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<filer_pb.DeleteEntryRequest>;
    requestDeserialize: grpc.deserialize<filer_pb.DeleteEntryRequest>;
    responseSerialize: grpc.serialize<filer_pb.DeleteEntryResponse>;
    responseDeserialize: grpc.deserialize<filer_pb.DeleteEntryResponse>;
}
interface ISeaweedFilerService_IAtomicRenameEntry extends grpc.MethodDefinition<filer_pb.AtomicRenameEntryRequest, filer_pb.AtomicRenameEntryResponse> {
    path: string; // "/filer_pb.SeaweedFiler/AtomicRenameEntry"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<filer_pb.AtomicRenameEntryRequest>;
    requestDeserialize: grpc.deserialize<filer_pb.AtomicRenameEntryRequest>;
    responseSerialize: grpc.serialize<filer_pb.AtomicRenameEntryResponse>;
    responseDeserialize: grpc.deserialize<filer_pb.AtomicRenameEntryResponse>;
}
interface ISeaweedFilerService_IAssignVolume extends grpc.MethodDefinition<filer_pb.AssignVolumeRequest, filer_pb.AssignVolumeResponse> {
    path: string; // "/filer_pb.SeaweedFiler/AssignVolume"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<filer_pb.AssignVolumeRequest>;
    requestDeserialize: grpc.deserialize<filer_pb.AssignVolumeRequest>;
    responseSerialize: grpc.serialize<filer_pb.AssignVolumeResponse>;
    responseDeserialize: grpc.deserialize<filer_pb.AssignVolumeResponse>;
}
interface ISeaweedFilerService_ILookupVolume extends grpc.MethodDefinition<filer_pb.LookupVolumeRequest, filer_pb.LookupVolumeResponse> {
    path: string; // "/filer_pb.SeaweedFiler/LookupVolume"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<filer_pb.LookupVolumeRequest>;
    requestDeserialize: grpc.deserialize<filer_pb.LookupVolumeRequest>;
    responseSerialize: grpc.serialize<filer_pb.LookupVolumeResponse>;
    responseDeserialize: grpc.deserialize<filer_pb.LookupVolumeResponse>;
}
interface ISeaweedFilerService_IDeleteCollection extends grpc.MethodDefinition<filer_pb.DeleteCollectionRequest, filer_pb.DeleteCollectionResponse> {
    path: string; // "/filer_pb.SeaweedFiler/DeleteCollection"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<filer_pb.DeleteCollectionRequest>;
    requestDeserialize: grpc.deserialize<filer_pb.DeleteCollectionRequest>;
    responseSerialize: grpc.serialize<filer_pb.DeleteCollectionResponse>;
    responseDeserialize: grpc.deserialize<filer_pb.DeleteCollectionResponse>;
}
interface ISeaweedFilerService_IStatistics extends grpc.MethodDefinition<filer_pb.StatisticsRequest, filer_pb.StatisticsResponse> {
    path: string; // "/filer_pb.SeaweedFiler/Statistics"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<filer_pb.StatisticsRequest>;
    requestDeserialize: grpc.deserialize<filer_pb.StatisticsRequest>;
    responseSerialize: grpc.serialize<filer_pb.StatisticsResponse>;
    responseDeserialize: grpc.deserialize<filer_pb.StatisticsResponse>;
}
interface ISeaweedFilerService_IGetFilerConfiguration extends grpc.MethodDefinition<filer_pb.GetFilerConfigurationRequest, filer_pb.GetFilerConfigurationResponse> {
    path: string; // "/filer_pb.SeaweedFiler/GetFilerConfiguration"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<filer_pb.GetFilerConfigurationRequest>;
    requestDeserialize: grpc.deserialize<filer_pb.GetFilerConfigurationRequest>;
    responseSerialize: grpc.serialize<filer_pb.GetFilerConfigurationResponse>;
    responseDeserialize: grpc.deserialize<filer_pb.GetFilerConfigurationResponse>;
}

export const SeaweedFilerService: ISeaweedFilerService;

export interface ISeaweedFilerServer {
    lookupDirectoryEntry: grpc.handleUnaryCall<filer_pb.LookupDirectoryEntryRequest, filer_pb.LookupDirectoryEntryResponse>;
    listEntries: grpc.handleServerStreamingCall<filer_pb.ListEntriesRequest, filer_pb.ListEntriesResponse>;
    createEntry: grpc.handleUnaryCall<filer_pb.CreateEntryRequest, filer_pb.CreateEntryResponse>;
    updateEntry: grpc.handleUnaryCall<filer_pb.UpdateEntryRequest, filer_pb.UpdateEntryResponse>;
    deleteEntry: grpc.handleUnaryCall<filer_pb.DeleteEntryRequest, filer_pb.DeleteEntryResponse>;
    streamDeleteEntries: grpc.handleBidiStreamingCall<filer_pb.DeleteEntryRequest, filer_pb.DeleteEntryResponse>;
    atomicRenameEntry: grpc.handleUnaryCall<filer_pb.AtomicRenameEntryRequest, filer_pb.AtomicRenameEntryResponse>;
    assignVolume: grpc.handleUnaryCall<filer_pb.AssignVolumeRequest, filer_pb.AssignVolumeResponse>;
    lookupVolume: grpc.handleUnaryCall<filer_pb.LookupVolumeRequest, filer_pb.LookupVolumeResponse>;
    deleteCollection: grpc.handleUnaryCall<filer_pb.DeleteCollectionRequest, filer_pb.DeleteCollectionResponse>;
    statistics: grpc.handleUnaryCall<filer_pb.StatisticsRequest, filer_pb.StatisticsResponse>;
    getFilerConfiguration: grpc.handleUnaryCall<filer_pb.GetFilerConfigurationRequest, filer_pb.GetFilerConfigurationResponse>;
}

export interface ISeaweedFilerClient {
    lookupDirectoryEntry(request: filer_pb.LookupDirectoryEntryRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.LookupDirectoryEntryResponse) => void): grpc.ClientUnaryCall;
    lookupDirectoryEntry(request: filer_pb.LookupDirectoryEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.LookupDirectoryEntryResponse) => void): grpc.ClientUnaryCall;
    lookupDirectoryEntry(request: filer_pb.LookupDirectoryEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.LookupDirectoryEntryResponse) => void): grpc.ClientUnaryCall;
    listEntries(request: filer_pb.ListEntriesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filer_pb.ListEntriesResponse>;
    listEntries(request: filer_pb.ListEntriesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filer_pb.ListEntriesResponse>;
    createEntry(request: filer_pb.CreateEntryRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.CreateEntryResponse) => void): grpc.ClientUnaryCall;
    createEntry(request: filer_pb.CreateEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.CreateEntryResponse) => void): grpc.ClientUnaryCall;
    createEntry(request: filer_pb.CreateEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.CreateEntryResponse) => void): grpc.ClientUnaryCall;
    updateEntry(request: filer_pb.UpdateEntryRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.UpdateEntryResponse) => void): grpc.ClientUnaryCall;
    updateEntry(request: filer_pb.UpdateEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.UpdateEntryResponse) => void): grpc.ClientUnaryCall;
    updateEntry(request: filer_pb.UpdateEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.UpdateEntryResponse) => void): grpc.ClientUnaryCall;
    deleteEntry(request: filer_pb.DeleteEntryRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.DeleteEntryResponse) => void): grpc.ClientUnaryCall;
    deleteEntry(request: filer_pb.DeleteEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.DeleteEntryResponse) => void): grpc.ClientUnaryCall;
    deleteEntry(request: filer_pb.DeleteEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.DeleteEntryResponse) => void): grpc.ClientUnaryCall;
    streamDeleteEntries(): grpc.ClientDuplexStream<filer_pb.DeleteEntryRequest, filer_pb.DeleteEntryResponse>;
    streamDeleteEntries(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<filer_pb.DeleteEntryRequest, filer_pb.DeleteEntryResponse>;
    streamDeleteEntries(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<filer_pb.DeleteEntryRequest, filer_pb.DeleteEntryResponse>;
    atomicRenameEntry(request: filer_pb.AtomicRenameEntryRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.AtomicRenameEntryResponse) => void): grpc.ClientUnaryCall;
    atomicRenameEntry(request: filer_pb.AtomicRenameEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.AtomicRenameEntryResponse) => void): grpc.ClientUnaryCall;
    atomicRenameEntry(request: filer_pb.AtomicRenameEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.AtomicRenameEntryResponse) => void): grpc.ClientUnaryCall;
    assignVolume(request: filer_pb.AssignVolumeRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.AssignVolumeResponse) => void): grpc.ClientUnaryCall;
    assignVolume(request: filer_pb.AssignVolumeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.AssignVolumeResponse) => void): grpc.ClientUnaryCall;
    assignVolume(request: filer_pb.AssignVolumeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.AssignVolumeResponse) => void): grpc.ClientUnaryCall;
    lookupVolume(request: filer_pb.LookupVolumeRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.LookupVolumeResponse) => void): grpc.ClientUnaryCall;
    lookupVolume(request: filer_pb.LookupVolumeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.LookupVolumeResponse) => void): grpc.ClientUnaryCall;
    lookupVolume(request: filer_pb.LookupVolumeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.LookupVolumeResponse) => void): grpc.ClientUnaryCall;
    deleteCollection(request: filer_pb.DeleteCollectionRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.DeleteCollectionResponse) => void): grpc.ClientUnaryCall;
    deleteCollection(request: filer_pb.DeleteCollectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.DeleteCollectionResponse) => void): grpc.ClientUnaryCall;
    deleteCollection(request: filer_pb.DeleteCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.DeleteCollectionResponse) => void): grpc.ClientUnaryCall;
    statistics(request: filer_pb.StatisticsRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    statistics(request: filer_pb.StatisticsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    statistics(request: filer_pb.StatisticsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    getFilerConfiguration(request: filer_pb.GetFilerConfigurationRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.GetFilerConfigurationResponse) => void): grpc.ClientUnaryCall;
    getFilerConfiguration(request: filer_pb.GetFilerConfigurationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.GetFilerConfigurationResponse) => void): grpc.ClientUnaryCall;
    getFilerConfiguration(request: filer_pb.GetFilerConfigurationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.GetFilerConfigurationResponse) => void): grpc.ClientUnaryCall;
}

export class SeaweedFilerClient extends grpc.Client implements ISeaweedFilerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public lookupDirectoryEntry(request: filer_pb.LookupDirectoryEntryRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.LookupDirectoryEntryResponse) => void): grpc.ClientUnaryCall;
    public lookupDirectoryEntry(request: filer_pb.LookupDirectoryEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.LookupDirectoryEntryResponse) => void): grpc.ClientUnaryCall;
    public lookupDirectoryEntry(request: filer_pb.LookupDirectoryEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.LookupDirectoryEntryResponse) => void): grpc.ClientUnaryCall;
    public listEntries(request: filer_pb.ListEntriesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filer_pb.ListEntriesResponse>;
    public listEntries(request: filer_pb.ListEntriesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<filer_pb.ListEntriesResponse>;
    public createEntry(request: filer_pb.CreateEntryRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.CreateEntryResponse) => void): grpc.ClientUnaryCall;
    public createEntry(request: filer_pb.CreateEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.CreateEntryResponse) => void): grpc.ClientUnaryCall;
    public createEntry(request: filer_pb.CreateEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.CreateEntryResponse) => void): grpc.ClientUnaryCall;
    public updateEntry(request: filer_pb.UpdateEntryRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.UpdateEntryResponse) => void): grpc.ClientUnaryCall;
    public updateEntry(request: filer_pb.UpdateEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.UpdateEntryResponse) => void): grpc.ClientUnaryCall;
    public updateEntry(request: filer_pb.UpdateEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.UpdateEntryResponse) => void): grpc.ClientUnaryCall;
    public deleteEntry(request: filer_pb.DeleteEntryRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.DeleteEntryResponse) => void): grpc.ClientUnaryCall;
    public deleteEntry(request: filer_pb.DeleteEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.DeleteEntryResponse) => void): grpc.ClientUnaryCall;
    public deleteEntry(request: filer_pb.DeleteEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.DeleteEntryResponse) => void): grpc.ClientUnaryCall;
    public streamDeleteEntries(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<filer_pb.DeleteEntryRequest, filer_pb.DeleteEntryResponse>;
    public streamDeleteEntries(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<filer_pb.DeleteEntryRequest, filer_pb.DeleteEntryResponse>;
    public atomicRenameEntry(request: filer_pb.AtomicRenameEntryRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.AtomicRenameEntryResponse) => void): grpc.ClientUnaryCall;
    public atomicRenameEntry(request: filer_pb.AtomicRenameEntryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.AtomicRenameEntryResponse) => void): grpc.ClientUnaryCall;
    public atomicRenameEntry(request: filer_pb.AtomicRenameEntryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.AtomicRenameEntryResponse) => void): grpc.ClientUnaryCall;
    public assignVolume(request: filer_pb.AssignVolumeRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.AssignVolumeResponse) => void): grpc.ClientUnaryCall;
    public assignVolume(request: filer_pb.AssignVolumeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.AssignVolumeResponse) => void): grpc.ClientUnaryCall;
    public assignVolume(request: filer_pb.AssignVolumeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.AssignVolumeResponse) => void): grpc.ClientUnaryCall;
    public lookupVolume(request: filer_pb.LookupVolumeRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.LookupVolumeResponse) => void): grpc.ClientUnaryCall;
    public lookupVolume(request: filer_pb.LookupVolumeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.LookupVolumeResponse) => void): grpc.ClientUnaryCall;
    public lookupVolume(request: filer_pb.LookupVolumeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.LookupVolumeResponse) => void): grpc.ClientUnaryCall;
    public deleteCollection(request: filer_pb.DeleteCollectionRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.DeleteCollectionResponse) => void): grpc.ClientUnaryCall;
    public deleteCollection(request: filer_pb.DeleteCollectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.DeleteCollectionResponse) => void): grpc.ClientUnaryCall;
    public deleteCollection(request: filer_pb.DeleteCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.DeleteCollectionResponse) => void): grpc.ClientUnaryCall;
    public statistics(request: filer_pb.StatisticsRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    public statistics(request: filer_pb.StatisticsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    public statistics(request: filer_pb.StatisticsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    public getFilerConfiguration(request: filer_pb.GetFilerConfigurationRequest, callback: (error: grpc.ServiceError | null, response: filer_pb.GetFilerConfigurationResponse) => void): grpc.ClientUnaryCall;
    public getFilerConfiguration(request: filer_pb.GetFilerConfigurationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filer_pb.GetFilerConfigurationResponse) => void): grpc.ClientUnaryCall;
    public getFilerConfiguration(request: filer_pb.GetFilerConfigurationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filer_pb.GetFilerConfigurationResponse) => void): grpc.ClientUnaryCall;
}
