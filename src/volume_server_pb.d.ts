// package: volume_server_pb
// file: volume_server.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class BatchDeleteRequest extends jspb.Message { 
    clearFileIdsList(): void;
    getFileIdsList(): Array<string>;
    setFileIdsList(value: Array<string>): void;
    addFileIds(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchDeleteRequest): BatchDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchDeleteRequest;
    static deserializeBinaryFromReader(message: BatchDeleteRequest, reader: jspb.BinaryReader): BatchDeleteRequest;
}

export namespace BatchDeleteRequest {
    export type AsObject = {
        fileIdsList: Array<string>,
    }
}

export class BatchDeleteResponse extends jspb.Message { 
    clearResultsList(): void;
    getResultsList(): Array<DeleteResult>;
    setResultsList(value: Array<DeleteResult>): void;
    addResults(value?: DeleteResult, index?: number): DeleteResult;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BatchDeleteResponse): BatchDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchDeleteResponse;
    static deserializeBinaryFromReader(message: BatchDeleteResponse, reader: jspb.BinaryReader): BatchDeleteResponse;
}

export namespace BatchDeleteResponse {
    export type AsObject = {
        resultsList: Array<DeleteResult.AsObject>,
    }
}

export class DeleteResult extends jspb.Message { 
    getFileId(): string;
    setFileId(value: string): void;

    getStatus(): number;
    setStatus(value: number): void;

    getError(): string;
    setError(value: string): void;

    getSize(): number;
    setSize(value: number): void;

    getVersion(): number;
    setVersion(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResult.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResult): DeleteResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResult;
    static deserializeBinaryFromReader(message: DeleteResult, reader: jspb.BinaryReader): DeleteResult;
}

export namespace DeleteResult {
    export type AsObject = {
        fileId: string,
        status: number,
        error: string,
        size: number,
        version: number,
    }
}

export class FileGetRequest extends jspb.Message { 
    getFileId(): string;
    setFileId(value: string): void;

    getAcceptGzip(): boolean;
    setAcceptGzip(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileGetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FileGetRequest): FileGetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileGetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileGetRequest;
    static deserializeBinaryFromReader(message: FileGetRequest, reader: jspb.BinaryReader): FileGetRequest;
}

export namespace FileGetRequest {
    export type AsObject = {
        fileId: string,
        acceptGzip: boolean,
    }
}

export class FileGetResponse extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): void;

    getContentLength(): number;
    setContentLength(value: number): void;

    getContentType(): string;
    setContentType(value: string): void;

    getLastModified(): number;
    setLastModified(value: number): void;

    getFilename(): string;
    setFilename(value: string): void;

    getEtag(): string;
    setEtag(value: string): void;

    getIsGzipped(): boolean;
    setIsGzipped(value: boolean): void;


    getHeadersMap(): jspb.Map<string, string>;
    clearHeadersMap(): void;

    getErrorcode(): number;
    setErrorcode(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileGetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FileGetResponse): FileGetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileGetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileGetResponse;
    static deserializeBinaryFromReader(message: FileGetResponse, reader: jspb.BinaryReader): FileGetResponse;
}

export namespace FileGetResponse {
    export type AsObject = {
        data: Uint8Array | string,
        contentLength: number,
        contentType: string,
        lastModified: number,
        filename: string,
        etag: string,
        isGzipped: boolean,

        headersMap: Array<[string, string]>,
        errorcode: number,
    }
}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class VacuumVolumeCheckRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VacuumVolumeCheckRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VacuumVolumeCheckRequest): VacuumVolumeCheckRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VacuumVolumeCheckRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VacuumVolumeCheckRequest;
    static deserializeBinaryFromReader(message: VacuumVolumeCheckRequest, reader: jspb.BinaryReader): VacuumVolumeCheckRequest;
}

export namespace VacuumVolumeCheckRequest {
    export type AsObject = {
        volumeId: number,
    }
}

export class VacuumVolumeCheckResponse extends jspb.Message { 
    getGarbageRatio(): number;
    setGarbageRatio(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VacuumVolumeCheckResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VacuumVolumeCheckResponse): VacuumVolumeCheckResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VacuumVolumeCheckResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VacuumVolumeCheckResponse;
    static deserializeBinaryFromReader(message: VacuumVolumeCheckResponse, reader: jspb.BinaryReader): VacuumVolumeCheckResponse;
}

export namespace VacuumVolumeCheckResponse {
    export type AsObject = {
        garbageRatio: number,
    }
}

export class VacuumVolumeCompactRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getPreallocate(): number;
    setPreallocate(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VacuumVolumeCompactRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VacuumVolumeCompactRequest): VacuumVolumeCompactRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VacuumVolumeCompactRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VacuumVolumeCompactRequest;
    static deserializeBinaryFromReader(message: VacuumVolumeCompactRequest, reader: jspb.BinaryReader): VacuumVolumeCompactRequest;
}

export namespace VacuumVolumeCompactRequest {
    export type AsObject = {
        volumeId: number,
        preallocate: number,
    }
}

export class VacuumVolumeCompactResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VacuumVolumeCompactResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VacuumVolumeCompactResponse): VacuumVolumeCompactResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VacuumVolumeCompactResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VacuumVolumeCompactResponse;
    static deserializeBinaryFromReader(message: VacuumVolumeCompactResponse, reader: jspb.BinaryReader): VacuumVolumeCompactResponse;
}

export namespace VacuumVolumeCompactResponse {
    export type AsObject = {
    }
}

export class VacuumVolumeCommitRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VacuumVolumeCommitRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VacuumVolumeCommitRequest): VacuumVolumeCommitRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VacuumVolumeCommitRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VacuumVolumeCommitRequest;
    static deserializeBinaryFromReader(message: VacuumVolumeCommitRequest, reader: jspb.BinaryReader): VacuumVolumeCommitRequest;
}

export namespace VacuumVolumeCommitRequest {
    export type AsObject = {
        volumeId: number,
    }
}

export class VacuumVolumeCommitResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VacuumVolumeCommitResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VacuumVolumeCommitResponse): VacuumVolumeCommitResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VacuumVolumeCommitResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VacuumVolumeCommitResponse;
    static deserializeBinaryFromReader(message: VacuumVolumeCommitResponse, reader: jspb.BinaryReader): VacuumVolumeCommitResponse;
}

export namespace VacuumVolumeCommitResponse {
    export type AsObject = {
    }
}

export class VacuumVolumeCleanupRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VacuumVolumeCleanupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VacuumVolumeCleanupRequest): VacuumVolumeCleanupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VacuumVolumeCleanupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VacuumVolumeCleanupRequest;
    static deserializeBinaryFromReader(message: VacuumVolumeCleanupRequest, reader: jspb.BinaryReader): VacuumVolumeCleanupRequest;
}

export namespace VacuumVolumeCleanupRequest {
    export type AsObject = {
        volumeId: number,
    }
}

export class VacuumVolumeCleanupResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VacuumVolumeCleanupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VacuumVolumeCleanupResponse): VacuumVolumeCleanupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VacuumVolumeCleanupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VacuumVolumeCleanupResponse;
    static deserializeBinaryFromReader(message: VacuumVolumeCleanupResponse, reader: jspb.BinaryReader): VacuumVolumeCleanupResponse;
}

export namespace VacuumVolumeCleanupResponse {
    export type AsObject = {
    }
}

export class DeleteCollectionRequest extends jspb.Message { 
    getCollection(): string;
    setCollection(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCollectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCollectionRequest): DeleteCollectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCollectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCollectionRequest;
    static deserializeBinaryFromReader(message: DeleteCollectionRequest, reader: jspb.BinaryReader): DeleteCollectionRequest;
}

export namespace DeleteCollectionRequest {
    export type AsObject = {
        collection: string,
    }
}

export class DeleteCollectionResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCollectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCollectionResponse): DeleteCollectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCollectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCollectionResponse;
    static deserializeBinaryFromReader(message: DeleteCollectionResponse, reader: jspb.BinaryReader): DeleteCollectionResponse;
}

export namespace DeleteCollectionResponse {
    export type AsObject = {
    }
}

export class AllocateVolumeRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getCollection(): string;
    setCollection(value: string): void;

    getPreallocate(): number;
    setPreallocate(value: number): void;

    getReplication(): string;
    setReplication(value: string): void;

    getTtl(): string;
    setTtl(value: string): void;

    getMemoryMapMaxSizeMb(): number;
    setMemoryMapMaxSizeMb(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllocateVolumeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AllocateVolumeRequest): AllocateVolumeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllocateVolumeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllocateVolumeRequest;
    static deserializeBinaryFromReader(message: AllocateVolumeRequest, reader: jspb.BinaryReader): AllocateVolumeRequest;
}

export namespace AllocateVolumeRequest {
    export type AsObject = {
        volumeId: number,
        collection: string,
        preallocate: number,
        replication: string,
        ttl: string,
        memoryMapMaxSizeMb: number,
    }
}

export class AllocateVolumeResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllocateVolumeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AllocateVolumeResponse): AllocateVolumeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllocateVolumeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllocateVolumeResponse;
    static deserializeBinaryFromReader(message: AllocateVolumeResponse, reader: jspb.BinaryReader): AllocateVolumeResponse;
}

export namespace AllocateVolumeResponse {
    export type AsObject = {
    }
}

export class VolumeSyncStatusRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeSyncStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeSyncStatusRequest): VolumeSyncStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeSyncStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeSyncStatusRequest;
    static deserializeBinaryFromReader(message: VolumeSyncStatusRequest, reader: jspb.BinaryReader): VolumeSyncStatusRequest;
}

export namespace VolumeSyncStatusRequest {
    export type AsObject = {
        volumeId: number,
    }
}

export class VolumeSyncStatusResponse extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getCollection(): string;
    setCollection(value: string): void;

    getReplication(): string;
    setReplication(value: string): void;

    getTtl(): string;
    setTtl(value: string): void;

    getTailOffset(): number;
    setTailOffset(value: number): void;

    getCompactRevision(): number;
    setCompactRevision(value: number): void;

    getIdxFileSize(): number;
    setIdxFileSize(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeSyncStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeSyncStatusResponse): VolumeSyncStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeSyncStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeSyncStatusResponse;
    static deserializeBinaryFromReader(message: VolumeSyncStatusResponse, reader: jspb.BinaryReader): VolumeSyncStatusResponse;
}

export namespace VolumeSyncStatusResponse {
    export type AsObject = {
        volumeId: number,
        collection: string,
        replication: string,
        ttl: string,
        tailOffset: number,
        compactRevision: number,
        idxFileSize: number,
    }
}

export class VolumeIncrementalCopyRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getSinceNs(): number;
    setSinceNs(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeIncrementalCopyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeIncrementalCopyRequest): VolumeIncrementalCopyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeIncrementalCopyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeIncrementalCopyRequest;
    static deserializeBinaryFromReader(message: VolumeIncrementalCopyRequest, reader: jspb.BinaryReader): VolumeIncrementalCopyRequest;
}

export namespace VolumeIncrementalCopyRequest {
    export type AsObject = {
        volumeId: number,
        sinceNs: number,
    }
}

export class VolumeIncrementalCopyResponse extends jspb.Message { 
    getFileContent(): Uint8Array | string;
    getFileContent_asU8(): Uint8Array;
    getFileContent_asB64(): string;
    setFileContent(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeIncrementalCopyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeIncrementalCopyResponse): VolumeIncrementalCopyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeIncrementalCopyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeIncrementalCopyResponse;
    static deserializeBinaryFromReader(message: VolumeIncrementalCopyResponse, reader: jspb.BinaryReader): VolumeIncrementalCopyResponse;
}

export namespace VolumeIncrementalCopyResponse {
    export type AsObject = {
        fileContent: Uint8Array | string,
    }
}

export class VolumeMountRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeMountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeMountRequest): VolumeMountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeMountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeMountRequest;
    static deserializeBinaryFromReader(message: VolumeMountRequest, reader: jspb.BinaryReader): VolumeMountRequest;
}

export namespace VolumeMountRequest {
    export type AsObject = {
        volumeId: number,
    }
}

export class VolumeMountResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeMountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeMountResponse): VolumeMountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeMountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeMountResponse;
    static deserializeBinaryFromReader(message: VolumeMountResponse, reader: jspb.BinaryReader): VolumeMountResponse;
}

export namespace VolumeMountResponse {
    export type AsObject = {
    }
}

export class VolumeUnmountRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeUnmountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeUnmountRequest): VolumeUnmountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeUnmountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeUnmountRequest;
    static deserializeBinaryFromReader(message: VolumeUnmountRequest, reader: jspb.BinaryReader): VolumeUnmountRequest;
}

export namespace VolumeUnmountRequest {
    export type AsObject = {
        volumeId: number,
    }
}

export class VolumeUnmountResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeUnmountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeUnmountResponse): VolumeUnmountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeUnmountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeUnmountResponse;
    static deserializeBinaryFromReader(message: VolumeUnmountResponse, reader: jspb.BinaryReader): VolumeUnmountResponse;
}

export namespace VolumeUnmountResponse {
    export type AsObject = {
    }
}

export class VolumeDeleteRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeDeleteRequest): VolumeDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeDeleteRequest;
    static deserializeBinaryFromReader(message: VolumeDeleteRequest, reader: jspb.BinaryReader): VolumeDeleteRequest;
}

export namespace VolumeDeleteRequest {
    export type AsObject = {
        volumeId: number,
    }
}

export class VolumeDeleteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeDeleteResponse): VolumeDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeDeleteResponse;
    static deserializeBinaryFromReader(message: VolumeDeleteResponse, reader: jspb.BinaryReader): VolumeDeleteResponse;
}

export namespace VolumeDeleteResponse {
    export type AsObject = {
    }
}

export class VolumeMarkReadonlyRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeMarkReadonlyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeMarkReadonlyRequest): VolumeMarkReadonlyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeMarkReadonlyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeMarkReadonlyRequest;
    static deserializeBinaryFromReader(message: VolumeMarkReadonlyRequest, reader: jspb.BinaryReader): VolumeMarkReadonlyRequest;
}

export namespace VolumeMarkReadonlyRequest {
    export type AsObject = {
        volumeId: number,
    }
}

export class VolumeMarkReadonlyResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeMarkReadonlyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeMarkReadonlyResponse): VolumeMarkReadonlyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeMarkReadonlyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeMarkReadonlyResponse;
    static deserializeBinaryFromReader(message: VolumeMarkReadonlyResponse, reader: jspb.BinaryReader): VolumeMarkReadonlyResponse;
}

export namespace VolumeMarkReadonlyResponse {
    export type AsObject = {
    }
}

export class VolumeConfigureRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getReplication(): string;
    setReplication(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeConfigureRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeConfigureRequest): VolumeConfigureRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeConfigureRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeConfigureRequest;
    static deserializeBinaryFromReader(message: VolumeConfigureRequest, reader: jspb.BinaryReader): VolumeConfigureRequest;
}

export namespace VolumeConfigureRequest {
    export type AsObject = {
        volumeId: number,
        replication: string,
    }
}

export class VolumeConfigureResponse extends jspb.Message { 
    getError(): string;
    setError(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeConfigureResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeConfigureResponse): VolumeConfigureResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeConfigureResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeConfigureResponse;
    static deserializeBinaryFromReader(message: VolumeConfigureResponse, reader: jspb.BinaryReader): VolumeConfigureResponse;
}

export namespace VolumeConfigureResponse {
    export type AsObject = {
        error: string,
    }
}

export class VolumeCopyRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getCollection(): string;
    setCollection(value: string): void;

    getReplication(): string;
    setReplication(value: string): void;

    getTtl(): string;
    setTtl(value: string): void;

    getSourceDataNode(): string;
    setSourceDataNode(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeCopyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeCopyRequest): VolumeCopyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeCopyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeCopyRequest;
    static deserializeBinaryFromReader(message: VolumeCopyRequest, reader: jspb.BinaryReader): VolumeCopyRequest;
}

export namespace VolumeCopyRequest {
    export type AsObject = {
        volumeId: number,
        collection: string,
        replication: string,
        ttl: string,
        sourceDataNode: string,
    }
}

export class VolumeCopyResponse extends jspb.Message { 
    getLastAppendAtNs(): number;
    setLastAppendAtNs(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeCopyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeCopyResponse): VolumeCopyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeCopyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeCopyResponse;
    static deserializeBinaryFromReader(message: VolumeCopyResponse, reader: jspb.BinaryReader): VolumeCopyResponse;
}

export namespace VolumeCopyResponse {
    export type AsObject = {
        lastAppendAtNs: number,
    }
}

export class CopyFileRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getExt(): string;
    setExt(value: string): void;

    getCompactionRevision(): number;
    setCompactionRevision(value: number): void;

    getStopOffset(): number;
    setStopOffset(value: number): void;

    getCollection(): string;
    setCollection(value: string): void;

    getIsEcVolume(): boolean;
    setIsEcVolume(value: boolean): void;

    getIgnoreSourceFileNotFound(): boolean;
    setIgnoreSourceFileNotFound(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CopyFileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CopyFileRequest): CopyFileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CopyFileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CopyFileRequest;
    static deserializeBinaryFromReader(message: CopyFileRequest, reader: jspb.BinaryReader): CopyFileRequest;
}

export namespace CopyFileRequest {
    export type AsObject = {
        volumeId: number,
        ext: string,
        compactionRevision: number,
        stopOffset: number,
        collection: string,
        isEcVolume: boolean,
        ignoreSourceFileNotFound: boolean,
    }
}

export class CopyFileResponse extends jspb.Message { 
    getFileContent(): Uint8Array | string;
    getFileContent_asU8(): Uint8Array;
    getFileContent_asB64(): string;
    setFileContent(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CopyFileResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CopyFileResponse): CopyFileResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CopyFileResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CopyFileResponse;
    static deserializeBinaryFromReader(message: CopyFileResponse, reader: jspb.BinaryReader): CopyFileResponse;
}

export namespace CopyFileResponse {
    export type AsObject = {
        fileContent: Uint8Array | string,
    }
}

export class VolumeTailSenderRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getSinceNs(): number;
    setSinceNs(value: number): void;

    getIdleTimeoutSeconds(): number;
    setIdleTimeoutSeconds(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeTailSenderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeTailSenderRequest): VolumeTailSenderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeTailSenderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeTailSenderRequest;
    static deserializeBinaryFromReader(message: VolumeTailSenderRequest, reader: jspb.BinaryReader): VolumeTailSenderRequest;
}

export namespace VolumeTailSenderRequest {
    export type AsObject = {
        volumeId: number,
        sinceNs: number,
        idleTimeoutSeconds: number,
    }
}

export class VolumeTailSenderResponse extends jspb.Message { 
    getNeedleHeader(): Uint8Array | string;
    getNeedleHeader_asU8(): Uint8Array;
    getNeedleHeader_asB64(): string;
    setNeedleHeader(value: Uint8Array | string): void;

    getNeedleBody(): Uint8Array | string;
    getNeedleBody_asU8(): Uint8Array;
    getNeedleBody_asB64(): string;
    setNeedleBody(value: Uint8Array | string): void;

    getIsLastChunk(): boolean;
    setIsLastChunk(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeTailSenderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeTailSenderResponse): VolumeTailSenderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeTailSenderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeTailSenderResponse;
    static deserializeBinaryFromReader(message: VolumeTailSenderResponse, reader: jspb.BinaryReader): VolumeTailSenderResponse;
}

export namespace VolumeTailSenderResponse {
    export type AsObject = {
        needleHeader: Uint8Array | string,
        needleBody: Uint8Array | string,
        isLastChunk: boolean,
    }
}

export class VolumeTailReceiverRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getSinceNs(): number;
    setSinceNs(value: number): void;

    getIdleTimeoutSeconds(): number;
    setIdleTimeoutSeconds(value: number): void;

    getSourceVolumeServer(): string;
    setSourceVolumeServer(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeTailReceiverRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeTailReceiverRequest): VolumeTailReceiverRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeTailReceiverRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeTailReceiverRequest;
    static deserializeBinaryFromReader(message: VolumeTailReceiverRequest, reader: jspb.BinaryReader): VolumeTailReceiverRequest;
}

export namespace VolumeTailReceiverRequest {
    export type AsObject = {
        volumeId: number,
        sinceNs: number,
        idleTimeoutSeconds: number,
        sourceVolumeServer: string,
    }
}

export class VolumeTailReceiverResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeTailReceiverResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeTailReceiverResponse): VolumeTailReceiverResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeTailReceiverResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeTailReceiverResponse;
    static deserializeBinaryFromReader(message: VolumeTailReceiverResponse, reader: jspb.BinaryReader): VolumeTailReceiverResponse;
}

export namespace VolumeTailReceiverResponse {
    export type AsObject = {
    }
}

export class VolumeEcShardsGenerateRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getCollection(): string;
    setCollection(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcShardsGenerateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcShardsGenerateRequest): VolumeEcShardsGenerateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcShardsGenerateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcShardsGenerateRequest;
    static deserializeBinaryFromReader(message: VolumeEcShardsGenerateRequest, reader: jspb.BinaryReader): VolumeEcShardsGenerateRequest;
}

export namespace VolumeEcShardsGenerateRequest {
    export type AsObject = {
        volumeId: number,
        collection: string,
    }
}

export class VolumeEcShardsGenerateResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcShardsGenerateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcShardsGenerateResponse): VolumeEcShardsGenerateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcShardsGenerateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcShardsGenerateResponse;
    static deserializeBinaryFromReader(message: VolumeEcShardsGenerateResponse, reader: jspb.BinaryReader): VolumeEcShardsGenerateResponse;
}

export namespace VolumeEcShardsGenerateResponse {
    export type AsObject = {
    }
}

export class VolumeEcShardsRebuildRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getCollection(): string;
    setCollection(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcShardsRebuildRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcShardsRebuildRequest): VolumeEcShardsRebuildRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcShardsRebuildRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcShardsRebuildRequest;
    static deserializeBinaryFromReader(message: VolumeEcShardsRebuildRequest, reader: jspb.BinaryReader): VolumeEcShardsRebuildRequest;
}

export namespace VolumeEcShardsRebuildRequest {
    export type AsObject = {
        volumeId: number,
        collection: string,
    }
}

export class VolumeEcShardsRebuildResponse extends jspb.Message { 
    clearRebuiltShardIdsList(): void;
    getRebuiltShardIdsList(): Array<number>;
    setRebuiltShardIdsList(value: Array<number>): void;
    addRebuiltShardIds(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcShardsRebuildResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcShardsRebuildResponse): VolumeEcShardsRebuildResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcShardsRebuildResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcShardsRebuildResponse;
    static deserializeBinaryFromReader(message: VolumeEcShardsRebuildResponse, reader: jspb.BinaryReader): VolumeEcShardsRebuildResponse;
}

export namespace VolumeEcShardsRebuildResponse {
    export type AsObject = {
        rebuiltShardIdsList: Array<number>,
    }
}

export class VolumeEcShardsCopyRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getCollection(): string;
    setCollection(value: string): void;

    clearShardIdsList(): void;
    getShardIdsList(): Array<number>;
    setShardIdsList(value: Array<number>): void;
    addShardIds(value: number, index?: number): number;

    getCopyEcxFile(): boolean;
    setCopyEcxFile(value: boolean): void;

    getSourceDataNode(): string;
    setSourceDataNode(value: string): void;

    getCopyEcjFile(): boolean;
    setCopyEcjFile(value: boolean): void;

    getCopyVifFile(): boolean;
    setCopyVifFile(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcShardsCopyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcShardsCopyRequest): VolumeEcShardsCopyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcShardsCopyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcShardsCopyRequest;
    static deserializeBinaryFromReader(message: VolumeEcShardsCopyRequest, reader: jspb.BinaryReader): VolumeEcShardsCopyRequest;
}

export namespace VolumeEcShardsCopyRequest {
    export type AsObject = {
        volumeId: number,
        collection: string,
        shardIdsList: Array<number>,
        copyEcxFile: boolean,
        sourceDataNode: string,
        copyEcjFile: boolean,
        copyVifFile: boolean,
    }
}

export class VolumeEcShardsCopyResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcShardsCopyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcShardsCopyResponse): VolumeEcShardsCopyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcShardsCopyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcShardsCopyResponse;
    static deserializeBinaryFromReader(message: VolumeEcShardsCopyResponse, reader: jspb.BinaryReader): VolumeEcShardsCopyResponse;
}

export namespace VolumeEcShardsCopyResponse {
    export type AsObject = {
    }
}

export class VolumeEcShardsDeleteRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getCollection(): string;
    setCollection(value: string): void;

    clearShardIdsList(): void;
    getShardIdsList(): Array<number>;
    setShardIdsList(value: Array<number>): void;
    addShardIds(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcShardsDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcShardsDeleteRequest): VolumeEcShardsDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcShardsDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcShardsDeleteRequest;
    static deserializeBinaryFromReader(message: VolumeEcShardsDeleteRequest, reader: jspb.BinaryReader): VolumeEcShardsDeleteRequest;
}

export namespace VolumeEcShardsDeleteRequest {
    export type AsObject = {
        volumeId: number,
        collection: string,
        shardIdsList: Array<number>,
    }
}

export class VolumeEcShardsDeleteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcShardsDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcShardsDeleteResponse): VolumeEcShardsDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcShardsDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcShardsDeleteResponse;
    static deserializeBinaryFromReader(message: VolumeEcShardsDeleteResponse, reader: jspb.BinaryReader): VolumeEcShardsDeleteResponse;
}

export namespace VolumeEcShardsDeleteResponse {
    export type AsObject = {
    }
}

export class VolumeEcShardsMountRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getCollection(): string;
    setCollection(value: string): void;

    clearShardIdsList(): void;
    getShardIdsList(): Array<number>;
    setShardIdsList(value: Array<number>): void;
    addShardIds(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcShardsMountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcShardsMountRequest): VolumeEcShardsMountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcShardsMountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcShardsMountRequest;
    static deserializeBinaryFromReader(message: VolumeEcShardsMountRequest, reader: jspb.BinaryReader): VolumeEcShardsMountRequest;
}

export namespace VolumeEcShardsMountRequest {
    export type AsObject = {
        volumeId: number,
        collection: string,
        shardIdsList: Array<number>,
    }
}

export class VolumeEcShardsMountResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcShardsMountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcShardsMountResponse): VolumeEcShardsMountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcShardsMountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcShardsMountResponse;
    static deserializeBinaryFromReader(message: VolumeEcShardsMountResponse, reader: jspb.BinaryReader): VolumeEcShardsMountResponse;
}

export namespace VolumeEcShardsMountResponse {
    export type AsObject = {
    }
}

export class VolumeEcShardsUnmountRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    clearShardIdsList(): void;
    getShardIdsList(): Array<number>;
    setShardIdsList(value: Array<number>): void;
    addShardIds(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcShardsUnmountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcShardsUnmountRequest): VolumeEcShardsUnmountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcShardsUnmountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcShardsUnmountRequest;
    static deserializeBinaryFromReader(message: VolumeEcShardsUnmountRequest, reader: jspb.BinaryReader): VolumeEcShardsUnmountRequest;
}

export namespace VolumeEcShardsUnmountRequest {
    export type AsObject = {
        volumeId: number,
        shardIdsList: Array<number>,
    }
}

export class VolumeEcShardsUnmountResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcShardsUnmountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcShardsUnmountResponse): VolumeEcShardsUnmountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcShardsUnmountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcShardsUnmountResponse;
    static deserializeBinaryFromReader(message: VolumeEcShardsUnmountResponse, reader: jspb.BinaryReader): VolumeEcShardsUnmountResponse;
}

export namespace VolumeEcShardsUnmountResponse {
    export type AsObject = {
    }
}

export class VolumeEcShardReadRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getShardId(): number;
    setShardId(value: number): void;

    getOffset(): number;
    setOffset(value: number): void;

    getSize(): number;
    setSize(value: number): void;

    getFileKey(): number;
    setFileKey(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcShardReadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcShardReadRequest): VolumeEcShardReadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcShardReadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcShardReadRequest;
    static deserializeBinaryFromReader(message: VolumeEcShardReadRequest, reader: jspb.BinaryReader): VolumeEcShardReadRequest;
}

export namespace VolumeEcShardReadRequest {
    export type AsObject = {
        volumeId: number,
        shardId: number,
        offset: number,
        size: number,
        fileKey: number,
    }
}

export class VolumeEcShardReadResponse extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): void;

    getIsDeleted(): boolean;
    setIsDeleted(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcShardReadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcShardReadResponse): VolumeEcShardReadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcShardReadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcShardReadResponse;
    static deserializeBinaryFromReader(message: VolumeEcShardReadResponse, reader: jspb.BinaryReader): VolumeEcShardReadResponse;
}

export namespace VolumeEcShardReadResponse {
    export type AsObject = {
        data: Uint8Array | string,
        isDeleted: boolean,
    }
}

export class VolumeEcBlobDeleteRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getCollection(): string;
    setCollection(value: string): void;

    getFileKey(): number;
    setFileKey(value: number): void;

    getVersion(): number;
    setVersion(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcBlobDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcBlobDeleteRequest): VolumeEcBlobDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcBlobDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcBlobDeleteRequest;
    static deserializeBinaryFromReader(message: VolumeEcBlobDeleteRequest, reader: jspb.BinaryReader): VolumeEcBlobDeleteRequest;
}

export namespace VolumeEcBlobDeleteRequest {
    export type AsObject = {
        volumeId: number,
        collection: string,
        fileKey: number,
        version: number,
    }
}

export class VolumeEcBlobDeleteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcBlobDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcBlobDeleteResponse): VolumeEcBlobDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcBlobDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcBlobDeleteResponse;
    static deserializeBinaryFromReader(message: VolumeEcBlobDeleteResponse, reader: jspb.BinaryReader): VolumeEcBlobDeleteResponse;
}

export namespace VolumeEcBlobDeleteResponse {
    export type AsObject = {
    }
}

export class VolumeEcShardsToVolumeRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getCollection(): string;
    setCollection(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcShardsToVolumeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcShardsToVolumeRequest): VolumeEcShardsToVolumeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcShardsToVolumeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcShardsToVolumeRequest;
    static deserializeBinaryFromReader(message: VolumeEcShardsToVolumeRequest, reader: jspb.BinaryReader): VolumeEcShardsToVolumeRequest;
}

export namespace VolumeEcShardsToVolumeRequest {
    export type AsObject = {
        volumeId: number,
        collection: string,
    }
}

export class VolumeEcShardsToVolumeResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeEcShardsToVolumeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeEcShardsToVolumeResponse): VolumeEcShardsToVolumeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeEcShardsToVolumeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeEcShardsToVolumeResponse;
    static deserializeBinaryFromReader(message: VolumeEcShardsToVolumeResponse, reader: jspb.BinaryReader): VolumeEcShardsToVolumeResponse;
}

export namespace VolumeEcShardsToVolumeResponse {
    export type AsObject = {
    }
}

export class ReadVolumeFileStatusRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadVolumeFileStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReadVolumeFileStatusRequest): ReadVolumeFileStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadVolumeFileStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadVolumeFileStatusRequest;
    static deserializeBinaryFromReader(message: ReadVolumeFileStatusRequest, reader: jspb.BinaryReader): ReadVolumeFileStatusRequest;
}

export namespace ReadVolumeFileStatusRequest {
    export type AsObject = {
        volumeId: number,
    }
}

export class ReadVolumeFileStatusResponse extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getIdxFileTimestampSeconds(): number;
    setIdxFileTimestampSeconds(value: number): void;

    getIdxFileSize(): number;
    setIdxFileSize(value: number): void;

    getDatFileTimestampSeconds(): number;
    setDatFileTimestampSeconds(value: number): void;

    getDatFileSize(): number;
    setDatFileSize(value: number): void;

    getFileCount(): number;
    setFileCount(value: number): void;

    getCompactionRevision(): number;
    setCompactionRevision(value: number): void;

    getCollection(): string;
    setCollection(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadVolumeFileStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReadVolumeFileStatusResponse): ReadVolumeFileStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadVolumeFileStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadVolumeFileStatusResponse;
    static deserializeBinaryFromReader(message: ReadVolumeFileStatusResponse, reader: jspb.BinaryReader): ReadVolumeFileStatusResponse;
}

export namespace ReadVolumeFileStatusResponse {
    export type AsObject = {
        volumeId: number,
        idxFileTimestampSeconds: number,
        idxFileSize: number,
        datFileTimestampSeconds: number,
        datFileSize: number,
        fileCount: number,
        compactionRevision: number,
        collection: string,
    }
}

export class DiskStatus extends jspb.Message { 
    getDir(): string;
    setDir(value: string): void;

    getAll(): number;
    setAll(value: number): void;

    getUsed(): number;
    setUsed(value: number): void;

    getFree(): number;
    setFree(value: number): void;

    getPercentFree(): number;
    setPercentFree(value: number): void;

    getPercentUsed(): number;
    setPercentUsed(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiskStatus.AsObject;
    static toObject(includeInstance: boolean, msg: DiskStatus): DiskStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiskStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiskStatus;
    static deserializeBinaryFromReader(message: DiskStatus, reader: jspb.BinaryReader): DiskStatus;
}

export namespace DiskStatus {
    export type AsObject = {
        dir: string,
        all: number,
        used: number,
        free: number,
        percentFree: number,
        percentUsed: number,
    }
}

export class MemStatus extends jspb.Message { 
    getGoroutines(): number;
    setGoroutines(value: number): void;

    getAll(): number;
    setAll(value: number): void;

    getUsed(): number;
    setUsed(value: number): void;

    getFree(): number;
    setFree(value: number): void;

    getSelf(): number;
    setSelf(value: number): void;

    getHeap(): number;
    setHeap(value: number): void;

    getStack(): number;
    setStack(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemStatus.AsObject;
    static toObject(includeInstance: boolean, msg: MemStatus): MemStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemStatus;
    static deserializeBinaryFromReader(message: MemStatus, reader: jspb.BinaryReader): MemStatus;
}

export namespace MemStatus {
    export type AsObject = {
        goroutines: number,
        all: number,
        used: number,
        free: number,
        self: number,
        heap: number,
        stack: number,
    }
}

export class RemoteFile extends jspb.Message { 
    getBackendType(): string;
    setBackendType(value: string): void;

    getBackendId(): string;
    setBackendId(value: string): void;

    getKey(): string;
    setKey(value: string): void;

    getOffset(): number;
    setOffset(value: number): void;

    getFileSize(): number;
    setFileSize(value: number): void;

    getModifiedTime(): number;
    setModifiedTime(value: number): void;

    getExtension(): string;
    setExtension(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoteFile.AsObject;
    static toObject(includeInstance: boolean, msg: RemoteFile): RemoteFile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoteFile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoteFile;
    static deserializeBinaryFromReader(message: RemoteFile, reader: jspb.BinaryReader): RemoteFile;
}

export namespace RemoteFile {
    export type AsObject = {
        backendType: string,
        backendId: string,
        key: string,
        offset: number,
        fileSize: number,
        modifiedTime: number,
        extension: string,
    }
}

export class VolumeInfo extends jspb.Message { 
    clearFilesList(): void;
    getFilesList(): Array<RemoteFile>;
    setFilesList(value: Array<RemoteFile>): void;
    addFiles(value?: RemoteFile, index?: number): RemoteFile;

    getVersion(): number;
    setVersion(value: number): void;

    getReplication(): string;
    setReplication(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeInfo): VolumeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeInfo;
    static deserializeBinaryFromReader(message: VolumeInfo, reader: jspb.BinaryReader): VolumeInfo;
}

export namespace VolumeInfo {
    export type AsObject = {
        filesList: Array<RemoteFile.AsObject>,
        version: number,
        replication: string,
    }
}

export class VolumeTierMoveDatToRemoteRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getCollection(): string;
    setCollection(value: string): void;

    getDestinationBackendName(): string;
    setDestinationBackendName(value: string): void;

    getKeepLocalDatFile(): boolean;
    setKeepLocalDatFile(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeTierMoveDatToRemoteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeTierMoveDatToRemoteRequest): VolumeTierMoveDatToRemoteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeTierMoveDatToRemoteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeTierMoveDatToRemoteRequest;
    static deserializeBinaryFromReader(message: VolumeTierMoveDatToRemoteRequest, reader: jspb.BinaryReader): VolumeTierMoveDatToRemoteRequest;
}

export namespace VolumeTierMoveDatToRemoteRequest {
    export type AsObject = {
        volumeId: number,
        collection: string,
        destinationBackendName: string,
        keepLocalDatFile: boolean,
    }
}

export class VolumeTierMoveDatToRemoteResponse extends jspb.Message { 
    getProcessed(): number;
    setProcessed(value: number): void;

    getProcessedpercentage(): number;
    setProcessedpercentage(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeTierMoveDatToRemoteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeTierMoveDatToRemoteResponse): VolumeTierMoveDatToRemoteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeTierMoveDatToRemoteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeTierMoveDatToRemoteResponse;
    static deserializeBinaryFromReader(message: VolumeTierMoveDatToRemoteResponse, reader: jspb.BinaryReader): VolumeTierMoveDatToRemoteResponse;
}

export namespace VolumeTierMoveDatToRemoteResponse {
    export type AsObject = {
        processed: number,
        processedpercentage: number,
    }
}

export class VolumeTierMoveDatFromRemoteRequest extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getCollection(): string;
    setCollection(value: string): void;

    getKeepRemoteDatFile(): boolean;
    setKeepRemoteDatFile(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeTierMoveDatFromRemoteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeTierMoveDatFromRemoteRequest): VolumeTierMoveDatFromRemoteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeTierMoveDatFromRemoteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeTierMoveDatFromRemoteRequest;
    static deserializeBinaryFromReader(message: VolumeTierMoveDatFromRemoteRequest, reader: jspb.BinaryReader): VolumeTierMoveDatFromRemoteRequest;
}

export namespace VolumeTierMoveDatFromRemoteRequest {
    export type AsObject = {
        volumeId: number,
        collection: string,
        keepRemoteDatFile: boolean,
    }
}

export class VolumeTierMoveDatFromRemoteResponse extends jspb.Message { 
    getProcessed(): number;
    setProcessed(value: number): void;

    getProcessedpercentage(): number;
    setProcessedpercentage(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeTierMoveDatFromRemoteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeTierMoveDatFromRemoteResponse): VolumeTierMoveDatFromRemoteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeTierMoveDatFromRemoteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeTierMoveDatFromRemoteResponse;
    static deserializeBinaryFromReader(message: VolumeTierMoveDatFromRemoteResponse, reader: jspb.BinaryReader): VolumeTierMoveDatFromRemoteResponse;
}

export namespace VolumeTierMoveDatFromRemoteResponse {
    export type AsObject = {
        processed: number,
        processedpercentage: number,
    }
}

export class VolumeServerStatusRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeServerStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeServerStatusRequest): VolumeServerStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeServerStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeServerStatusRequest;
    static deserializeBinaryFromReader(message: VolumeServerStatusRequest, reader: jspb.BinaryReader): VolumeServerStatusRequest;
}

export namespace VolumeServerStatusRequest {
    export type AsObject = {
    }
}

export class VolumeServerStatusResponse extends jspb.Message { 
    clearDiskStatusesList(): void;
    getDiskStatusesList(): Array<DiskStatus>;
    setDiskStatusesList(value: Array<DiskStatus>): void;
    addDiskStatuses(value?: DiskStatus, index?: number): DiskStatus;


    hasMemoryStatus(): boolean;
    clearMemoryStatus(): void;
    getMemoryStatus(): MemStatus | undefined;
    setMemoryStatus(value?: MemStatus): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeServerStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeServerStatusResponse): VolumeServerStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeServerStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeServerStatusResponse;
    static deserializeBinaryFromReader(message: VolumeServerStatusResponse, reader: jspb.BinaryReader): VolumeServerStatusResponse;
}

export namespace VolumeServerStatusResponse {
    export type AsObject = {
        diskStatusesList: Array<DiskStatus.AsObject>,
        memoryStatus?: MemStatus.AsObject,
    }
}

export class QueryRequest extends jspb.Message { 
    clearSelectionsList(): void;
    getSelectionsList(): Array<string>;
    setSelectionsList(value: Array<string>): void;
    addSelections(value: string, index?: number): string;

    clearFromFileIdsList(): void;
    getFromFileIdsList(): Array<string>;
    setFromFileIdsList(value: Array<string>): void;
    addFromFileIds(value: string, index?: number): string;


    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): QueryRequest.Filter | undefined;
    setFilter(value?: QueryRequest.Filter): void;


    hasInputSerialization(): boolean;
    clearInputSerialization(): void;
    getInputSerialization(): QueryRequest.InputSerialization | undefined;
    setInputSerialization(value?: QueryRequest.InputSerialization): void;


    hasOutputSerialization(): boolean;
    clearOutputSerialization(): void;
    getOutputSerialization(): QueryRequest.OutputSerialization | undefined;
    setOutputSerialization(value?: QueryRequest.OutputSerialization): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryRequest): QueryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryRequest;
    static deserializeBinaryFromReader(message: QueryRequest, reader: jspb.BinaryReader): QueryRequest;
}

export namespace QueryRequest {
    export type AsObject = {
        selectionsList: Array<string>,
        fromFileIdsList: Array<string>,
        filter?: QueryRequest.Filter.AsObject,
        inputSerialization?: QueryRequest.InputSerialization.AsObject,
        outputSerialization?: QueryRequest.OutputSerialization.AsObject,
    }


    export class Filter extends jspb.Message { 
        getField(): string;
        setField(value: string): void;

        getOperand(): string;
        setOperand(value: string): void;

        getValue(): string;
        setValue(value: string): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Filter.AsObject;
        static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Filter;
        static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
    }

    export namespace Filter {
        export type AsObject = {
            field: string,
            operand: string,
            value: string,
        }
    }

    export class InputSerialization extends jspb.Message { 
        getCompressionType(): string;
        setCompressionType(value: string): void;


        hasCsvInput(): boolean;
        clearCsvInput(): void;
        getCsvInput(): QueryRequest.InputSerialization.CSVInput | undefined;
        setCsvInput(value?: QueryRequest.InputSerialization.CSVInput): void;


        hasJsonInput(): boolean;
        clearJsonInput(): void;
        getJsonInput(): QueryRequest.InputSerialization.JSONInput | undefined;
        setJsonInput(value?: QueryRequest.InputSerialization.JSONInput): void;


        hasParquetInput(): boolean;
        clearParquetInput(): void;
        getParquetInput(): QueryRequest.InputSerialization.ParquetInput | undefined;
        setParquetInput(value?: QueryRequest.InputSerialization.ParquetInput): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): InputSerialization.AsObject;
        static toObject(includeInstance: boolean, msg: InputSerialization): InputSerialization.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: InputSerialization, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): InputSerialization;
        static deserializeBinaryFromReader(message: InputSerialization, reader: jspb.BinaryReader): InputSerialization;
    }

    export namespace InputSerialization {
        export type AsObject = {
            compressionType: string,
            csvInput?: QueryRequest.InputSerialization.CSVInput.AsObject,
            jsonInput?: QueryRequest.InputSerialization.JSONInput.AsObject,
            parquetInput?: QueryRequest.InputSerialization.ParquetInput.AsObject,
        }


        export class CSVInput extends jspb.Message { 
            getFileHeaderInfo(): string;
            setFileHeaderInfo(value: string): void;

            getRecordDelimiter(): string;
            setRecordDelimiter(value: string): void;

            getFieldDelimiter(): string;
            setFieldDelimiter(value: string): void;

            getQuoteCharactoer(): string;
            setQuoteCharactoer(value: string): void;

            getQuoteEscapeCharacter(): string;
            setQuoteEscapeCharacter(value: string): void;

            getComments(): string;
            setComments(value: string): void;

            getAllowQuotedRecordDelimiter(): boolean;
            setAllowQuotedRecordDelimiter(value: boolean): void;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): CSVInput.AsObject;
            static toObject(includeInstance: boolean, msg: CSVInput): CSVInput.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: CSVInput, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): CSVInput;
            static deserializeBinaryFromReader(message: CSVInput, reader: jspb.BinaryReader): CSVInput;
        }

        export namespace CSVInput {
            export type AsObject = {
                fileHeaderInfo: string,
                recordDelimiter: string,
                fieldDelimiter: string,
                quoteCharactoer: string,
                quoteEscapeCharacter: string,
                comments: string,
                allowQuotedRecordDelimiter: boolean,
            }
        }

        export class JSONInput extends jspb.Message { 
            getType(): string;
            setType(value: string): void;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): JSONInput.AsObject;
            static toObject(includeInstance: boolean, msg: JSONInput): JSONInput.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: JSONInput, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): JSONInput;
            static deserializeBinaryFromReader(message: JSONInput, reader: jspb.BinaryReader): JSONInput;
        }

        export namespace JSONInput {
            export type AsObject = {
                type: string,
            }
        }

        export class ParquetInput extends jspb.Message { 

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): ParquetInput.AsObject;
            static toObject(includeInstance: boolean, msg: ParquetInput): ParquetInput.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: ParquetInput, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): ParquetInput;
            static deserializeBinaryFromReader(message: ParquetInput, reader: jspb.BinaryReader): ParquetInput;
        }

        export namespace ParquetInput {
            export type AsObject = {
            }
        }

    }

    export class OutputSerialization extends jspb.Message { 

        hasCsvOutput(): boolean;
        clearCsvOutput(): void;
        getCsvOutput(): QueryRequest.OutputSerialization.CSVOutput | undefined;
        setCsvOutput(value?: QueryRequest.OutputSerialization.CSVOutput): void;


        hasJsonOutput(): boolean;
        clearJsonOutput(): void;
        getJsonOutput(): QueryRequest.OutputSerialization.JSONOutput | undefined;
        setJsonOutput(value?: QueryRequest.OutputSerialization.JSONOutput): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OutputSerialization.AsObject;
        static toObject(includeInstance: boolean, msg: OutputSerialization): OutputSerialization.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OutputSerialization, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OutputSerialization;
        static deserializeBinaryFromReader(message: OutputSerialization, reader: jspb.BinaryReader): OutputSerialization;
    }

    export namespace OutputSerialization {
        export type AsObject = {
            csvOutput?: QueryRequest.OutputSerialization.CSVOutput.AsObject,
            jsonOutput?: QueryRequest.OutputSerialization.JSONOutput.AsObject,
        }


        export class CSVOutput extends jspb.Message { 
            getQuoteFields(): string;
            setQuoteFields(value: string): void;

            getRecordDelimiter(): string;
            setRecordDelimiter(value: string): void;

            getFieldDelimiter(): string;
            setFieldDelimiter(value: string): void;

            getQuoteCharactoer(): string;
            setQuoteCharactoer(value: string): void;

            getQuoteEscapeCharacter(): string;
            setQuoteEscapeCharacter(value: string): void;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): CSVOutput.AsObject;
            static toObject(includeInstance: boolean, msg: CSVOutput): CSVOutput.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: CSVOutput, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): CSVOutput;
            static deserializeBinaryFromReader(message: CSVOutput, reader: jspb.BinaryReader): CSVOutput;
        }

        export namespace CSVOutput {
            export type AsObject = {
                quoteFields: string,
                recordDelimiter: string,
                fieldDelimiter: string,
                quoteCharactoer: string,
                quoteEscapeCharacter: string,
            }
        }

        export class JSONOutput extends jspb.Message { 
            getRecordDelimiter(): string;
            setRecordDelimiter(value: string): void;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): JSONOutput.AsObject;
            static toObject(includeInstance: boolean, msg: JSONOutput): JSONOutput.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: JSONOutput, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): JSONOutput;
            static deserializeBinaryFromReader(message: JSONOutput, reader: jspb.BinaryReader): JSONOutput;
        }

        export namespace JSONOutput {
            export type AsObject = {
                recordDelimiter: string,
            }
        }

    }

}

export class QueriedStripe extends jspb.Message { 
    getRecords(): Uint8Array | string;
    getRecords_asU8(): Uint8Array;
    getRecords_asB64(): string;
    setRecords(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueriedStripe.AsObject;
    static toObject(includeInstance: boolean, msg: QueriedStripe): QueriedStripe.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueriedStripe, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueriedStripe;
    static deserializeBinaryFromReader(message: QueriedStripe, reader: jspb.BinaryReader): QueriedStripe;
}

export namespace QueriedStripe {
    export type AsObject = {
        records: Uint8Array | string,
    }
}
