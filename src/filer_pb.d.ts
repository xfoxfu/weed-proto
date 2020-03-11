// package: filer_pb
// file: filer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class LookupDirectoryEntryRequest extends jspb.Message { 
    getDirectory(): string;
    setDirectory(value: string): void;

    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LookupDirectoryEntryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LookupDirectoryEntryRequest): LookupDirectoryEntryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LookupDirectoryEntryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LookupDirectoryEntryRequest;
    static deserializeBinaryFromReader(message: LookupDirectoryEntryRequest, reader: jspb.BinaryReader): LookupDirectoryEntryRequest;
}

export namespace LookupDirectoryEntryRequest {
    export type AsObject = {
        directory: string,
        name: string,
    }
}

export class LookupDirectoryEntryResponse extends jspb.Message { 

    hasEntry(): boolean;
    clearEntry(): void;
    getEntry(): Entry | undefined;
    setEntry(value?: Entry): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LookupDirectoryEntryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LookupDirectoryEntryResponse): LookupDirectoryEntryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LookupDirectoryEntryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LookupDirectoryEntryResponse;
    static deserializeBinaryFromReader(message: LookupDirectoryEntryResponse, reader: jspb.BinaryReader): LookupDirectoryEntryResponse;
}

export namespace LookupDirectoryEntryResponse {
    export type AsObject = {
        entry?: Entry.AsObject,
    }
}

export class ListEntriesRequest extends jspb.Message { 
    getDirectory(): string;
    setDirectory(value: string): void;

    getPrefix(): string;
    setPrefix(value: string): void;

    getStartfromfilename(): string;
    setStartfromfilename(value: string): void;

    getInclusivestartfrom(): boolean;
    setInclusivestartfrom(value: boolean): void;

    getLimit(): number;
    setLimit(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEntriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListEntriesRequest): ListEntriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEntriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEntriesRequest;
    static deserializeBinaryFromReader(message: ListEntriesRequest, reader: jspb.BinaryReader): ListEntriesRequest;
}

export namespace ListEntriesRequest {
    export type AsObject = {
        directory: string,
        prefix: string,
        startfromfilename: string,
        inclusivestartfrom: boolean,
        limit: number,
    }
}

export class ListEntriesResponse extends jspb.Message { 

    hasEntry(): boolean;
    clearEntry(): void;
    getEntry(): Entry | undefined;
    setEntry(value?: Entry): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEntriesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListEntriesResponse): ListEntriesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEntriesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEntriesResponse;
    static deserializeBinaryFromReader(message: ListEntriesResponse, reader: jspb.BinaryReader): ListEntriesResponse;
}

export namespace ListEntriesResponse {
    export type AsObject = {
        entry?: Entry.AsObject,
    }
}

export class Entry extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getIsDirectory(): boolean;
    setIsDirectory(value: boolean): void;

    clearChunksList(): void;
    getChunksList(): Array<FileChunk>;
    setChunksList(value: Array<FileChunk>): void;
    addChunks(value?: FileChunk, index?: number): FileChunk;


    hasAttributes(): boolean;
    clearAttributes(): void;
    getAttributes(): FuseAttributes | undefined;
    setAttributes(value?: FuseAttributes): void;


    getExtendedMap(): jspb.Map<string, Uint8Array | string>;
    clearExtendedMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entry.AsObject;
    static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entry;
    static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
}

export namespace Entry {
    export type AsObject = {
        name: string,
        isDirectory: boolean,
        chunksList: Array<FileChunk.AsObject>,
        attributes?: FuseAttributes.AsObject,

        extendedMap: Array<[string, Uint8Array | string]>,
    }
}

export class FullEntry extends jspb.Message { 
    getDir(): string;
    setDir(value: string): void;


    hasEntry(): boolean;
    clearEntry(): void;
    getEntry(): Entry | undefined;
    setEntry(value?: Entry): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FullEntry.AsObject;
    static toObject(includeInstance: boolean, msg: FullEntry): FullEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FullEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FullEntry;
    static deserializeBinaryFromReader(message: FullEntry, reader: jspb.BinaryReader): FullEntry;
}

export namespace FullEntry {
    export type AsObject = {
        dir: string,
        entry?: Entry.AsObject,
    }
}

export class EventNotification extends jspb.Message { 

    hasOldEntry(): boolean;
    clearOldEntry(): void;
    getOldEntry(): Entry | undefined;
    setOldEntry(value?: Entry): void;


    hasNewEntry(): boolean;
    clearNewEntry(): void;
    getNewEntry(): Entry | undefined;
    setNewEntry(value?: Entry): void;

    getDeleteChunks(): boolean;
    setDeleteChunks(value: boolean): void;

    getNewParentPath(): string;
    setNewParentPath(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventNotification.AsObject;
    static toObject(includeInstance: boolean, msg: EventNotification): EventNotification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventNotification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventNotification;
    static deserializeBinaryFromReader(message: EventNotification, reader: jspb.BinaryReader): EventNotification;
}

export namespace EventNotification {
    export type AsObject = {
        oldEntry?: Entry.AsObject,
        newEntry?: Entry.AsObject,
        deleteChunks: boolean,
        newParentPath: string,
    }
}

export class FileChunk extends jspb.Message { 
    getFileId(): string;
    setFileId(value: string): void;

    getOffset(): number;
    setOffset(value: number): void;

    getSize(): number;
    setSize(value: number): void;

    getMtime(): number;
    setMtime(value: number): void;

    getETag(): string;
    setETag(value: string): void;

    getSourceFileId(): string;
    setSourceFileId(value: string): void;


    hasFid(): boolean;
    clearFid(): void;
    getFid(): FileId | undefined;
    setFid(value?: FileId): void;


    hasSourceFid(): boolean;
    clearSourceFid(): void;
    getSourceFid(): FileId | undefined;
    setSourceFid(value?: FileId): void;

    getCipherKey(): Uint8Array | string;
    getCipherKey_asU8(): Uint8Array;
    getCipherKey_asB64(): string;
    setCipherKey(value: Uint8Array | string): void;

    getIsGzipped(): boolean;
    setIsGzipped(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileChunk.AsObject;
    static toObject(includeInstance: boolean, msg: FileChunk): FileChunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileChunk;
    static deserializeBinaryFromReader(message: FileChunk, reader: jspb.BinaryReader): FileChunk;
}

export namespace FileChunk {
    export type AsObject = {
        fileId: string,
        offset: number,
        size: number,
        mtime: number,
        eTag: string,
        sourceFileId: string,
        fid?: FileId.AsObject,
        sourceFid?: FileId.AsObject,
        cipherKey: Uint8Array | string,
        isGzipped: boolean,
    }
}

export class FileId extends jspb.Message { 
    getVolumeId(): number;
    setVolumeId(value: number): void;

    getFileKey(): number;
    setFileKey(value: number): void;

    getCookie(): number;
    setCookie(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileId.AsObject;
    static toObject(includeInstance: boolean, msg: FileId): FileId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileId;
    static deserializeBinaryFromReader(message: FileId, reader: jspb.BinaryReader): FileId;
}

export namespace FileId {
    export type AsObject = {
        volumeId: number,
        fileKey: number,
        cookie: number,
    }
}

export class FuseAttributes extends jspb.Message { 
    getFileSize(): number;
    setFileSize(value: number): void;

    getMtime(): number;
    setMtime(value: number): void;

    getFileMode(): number;
    setFileMode(value: number): void;

    getUid(): number;
    setUid(value: number): void;

    getGid(): number;
    setGid(value: number): void;

    getCrtime(): number;
    setCrtime(value: number): void;

    getMime(): string;
    setMime(value: string): void;

    getReplication(): string;
    setReplication(value: string): void;

    getCollection(): string;
    setCollection(value: string): void;

    getTtlSec(): number;
    setTtlSec(value: number): void;

    getUserName(): string;
    setUserName(value: string): void;

    clearGroupNameList(): void;
    getGroupNameList(): Array<string>;
    setGroupNameList(value: Array<string>): void;
    addGroupName(value: string, index?: number): string;

    getSymlinkTarget(): string;
    setSymlinkTarget(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FuseAttributes.AsObject;
    static toObject(includeInstance: boolean, msg: FuseAttributes): FuseAttributes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FuseAttributes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FuseAttributes;
    static deserializeBinaryFromReader(message: FuseAttributes, reader: jspb.BinaryReader): FuseAttributes;
}

export namespace FuseAttributes {
    export type AsObject = {
        fileSize: number,
        mtime: number,
        fileMode: number,
        uid: number,
        gid: number,
        crtime: number,
        mime: string,
        replication: string,
        collection: string,
        ttlSec: number,
        userName: string,
        groupNameList: Array<string>,
        symlinkTarget: string,
    }
}

export class CreateEntryRequest extends jspb.Message { 
    getDirectory(): string;
    setDirectory(value: string): void;


    hasEntry(): boolean;
    clearEntry(): void;
    getEntry(): Entry | undefined;
    setEntry(value?: Entry): void;

    getOExcl(): boolean;
    setOExcl(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEntryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEntryRequest): CreateEntryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEntryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEntryRequest;
    static deserializeBinaryFromReader(message: CreateEntryRequest, reader: jspb.BinaryReader): CreateEntryRequest;
}

export namespace CreateEntryRequest {
    export type AsObject = {
        directory: string,
        entry?: Entry.AsObject,
        oExcl: boolean,
    }
}

export class CreateEntryResponse extends jspb.Message { 
    getError(): string;
    setError(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEntryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEntryResponse): CreateEntryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEntryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEntryResponse;
    static deserializeBinaryFromReader(message: CreateEntryResponse, reader: jspb.BinaryReader): CreateEntryResponse;
}

export namespace CreateEntryResponse {
    export type AsObject = {
        error: string,
    }
}

export class UpdateEntryRequest extends jspb.Message { 
    getDirectory(): string;
    setDirectory(value: string): void;


    hasEntry(): boolean;
    clearEntry(): void;
    getEntry(): Entry | undefined;
    setEntry(value?: Entry): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateEntryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateEntryRequest): UpdateEntryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateEntryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateEntryRequest;
    static deserializeBinaryFromReader(message: UpdateEntryRequest, reader: jspb.BinaryReader): UpdateEntryRequest;
}

export namespace UpdateEntryRequest {
    export type AsObject = {
        directory: string,
        entry?: Entry.AsObject,
    }
}

export class UpdateEntryResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateEntryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateEntryResponse): UpdateEntryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateEntryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateEntryResponse;
    static deserializeBinaryFromReader(message: UpdateEntryResponse, reader: jspb.BinaryReader): UpdateEntryResponse;
}

export namespace UpdateEntryResponse {
    export type AsObject = {
    }
}

export class DeleteEntryRequest extends jspb.Message { 
    getDirectory(): string;
    setDirectory(value: string): void;

    getName(): string;
    setName(value: string): void;

    getIsDeleteData(): boolean;
    setIsDeleteData(value: boolean): void;

    getIsRecursive(): boolean;
    setIsRecursive(value: boolean): void;

    getIgnoreRecursiveError(): boolean;
    setIgnoreRecursiveError(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteEntryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteEntryRequest): DeleteEntryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteEntryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteEntryRequest;
    static deserializeBinaryFromReader(message: DeleteEntryRequest, reader: jspb.BinaryReader): DeleteEntryRequest;
}

export namespace DeleteEntryRequest {
    export type AsObject = {
        directory: string,
        name: string,
        isDeleteData: boolean,
        isRecursive: boolean,
        ignoreRecursiveError: boolean,
    }
}

export class DeleteEntryResponse extends jspb.Message { 
    getError(): string;
    setError(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteEntryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteEntryResponse): DeleteEntryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteEntryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteEntryResponse;
    static deserializeBinaryFromReader(message: DeleteEntryResponse, reader: jspb.BinaryReader): DeleteEntryResponse;
}

export namespace DeleteEntryResponse {
    export type AsObject = {
        error: string,
    }
}

export class AtomicRenameEntryRequest extends jspb.Message { 
    getOldDirectory(): string;
    setOldDirectory(value: string): void;

    getOldName(): string;
    setOldName(value: string): void;

    getNewDirectory(): string;
    setNewDirectory(value: string): void;

    getNewName(): string;
    setNewName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AtomicRenameEntryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AtomicRenameEntryRequest): AtomicRenameEntryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AtomicRenameEntryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AtomicRenameEntryRequest;
    static deserializeBinaryFromReader(message: AtomicRenameEntryRequest, reader: jspb.BinaryReader): AtomicRenameEntryRequest;
}

export namespace AtomicRenameEntryRequest {
    export type AsObject = {
        oldDirectory: string,
        oldName: string,
        newDirectory: string,
        newName: string,
    }
}

export class AtomicRenameEntryResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AtomicRenameEntryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AtomicRenameEntryResponse): AtomicRenameEntryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AtomicRenameEntryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AtomicRenameEntryResponse;
    static deserializeBinaryFromReader(message: AtomicRenameEntryResponse, reader: jspb.BinaryReader): AtomicRenameEntryResponse;
}

export namespace AtomicRenameEntryResponse {
    export type AsObject = {
    }
}

export class AssignVolumeRequest extends jspb.Message { 
    getCount(): number;
    setCount(value: number): void;

    getCollection(): string;
    setCollection(value: string): void;

    getReplication(): string;
    setReplication(value: string): void;

    getTtlSec(): number;
    setTtlSec(value: number): void;

    getDataCenter(): string;
    setDataCenter(value: string): void;

    getParentPath(): string;
    setParentPath(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssignVolumeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AssignVolumeRequest): AssignVolumeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssignVolumeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssignVolumeRequest;
    static deserializeBinaryFromReader(message: AssignVolumeRequest, reader: jspb.BinaryReader): AssignVolumeRequest;
}

export namespace AssignVolumeRequest {
    export type AsObject = {
        count: number,
        collection: string,
        replication: string,
        ttlSec: number,
        dataCenter: string,
        parentPath: string,
    }
}

export class AssignVolumeResponse extends jspb.Message { 
    getFileId(): string;
    setFileId(value: string): void;

    getUrl(): string;
    setUrl(value: string): void;

    getPublicUrl(): string;
    setPublicUrl(value: string): void;

    getCount(): number;
    setCount(value: number): void;

    getAuth(): string;
    setAuth(value: string): void;

    getCollection(): string;
    setCollection(value: string): void;

    getReplication(): string;
    setReplication(value: string): void;

    getError(): string;
    setError(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssignVolumeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AssignVolumeResponse): AssignVolumeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssignVolumeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssignVolumeResponse;
    static deserializeBinaryFromReader(message: AssignVolumeResponse, reader: jspb.BinaryReader): AssignVolumeResponse;
}

export namespace AssignVolumeResponse {
    export type AsObject = {
        fileId: string,
        url: string,
        publicUrl: string,
        count: number,
        auth: string,
        collection: string,
        replication: string,
        error: string,
    }
}

export class LookupVolumeRequest extends jspb.Message { 
    clearVolumeIdsList(): void;
    getVolumeIdsList(): Array<string>;
    setVolumeIdsList(value: Array<string>): void;
    addVolumeIds(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LookupVolumeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LookupVolumeRequest): LookupVolumeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LookupVolumeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LookupVolumeRequest;
    static deserializeBinaryFromReader(message: LookupVolumeRequest, reader: jspb.BinaryReader): LookupVolumeRequest;
}

export namespace LookupVolumeRequest {
    export type AsObject = {
        volumeIdsList: Array<string>,
    }
}

export class Locations extends jspb.Message { 
    clearLocationsList(): void;
    getLocationsList(): Array<Location>;
    setLocationsList(value: Array<Location>): void;
    addLocations(value?: Location, index?: number): Location;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Locations.AsObject;
    static toObject(includeInstance: boolean, msg: Locations): Locations.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Locations, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Locations;
    static deserializeBinaryFromReader(message: Locations, reader: jspb.BinaryReader): Locations;
}

export namespace Locations {
    export type AsObject = {
        locationsList: Array<Location.AsObject>,
    }
}

export class Location extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): void;

    getPublicUrl(): string;
    setPublicUrl(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Location.AsObject;
    static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Location;
    static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
    export type AsObject = {
        url: string,
        publicUrl: string,
    }
}

export class LookupVolumeResponse extends jspb.Message { 

    getLocationsMapMap(): jspb.Map<string, Locations>;
    clearLocationsMapMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LookupVolumeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LookupVolumeResponse): LookupVolumeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LookupVolumeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LookupVolumeResponse;
    static deserializeBinaryFromReader(message: LookupVolumeResponse, reader: jspb.BinaryReader): LookupVolumeResponse;
}

export namespace LookupVolumeResponse {
    export type AsObject = {

        locationsMapMap: Array<[string, Locations.AsObject]>,
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

export class StatisticsRequest extends jspb.Message { 
    getReplication(): string;
    setReplication(value: string): void;

    getCollection(): string;
    setCollection(value: string): void;

    getTtl(): string;
    setTtl(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatisticsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StatisticsRequest): StatisticsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatisticsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatisticsRequest;
    static deserializeBinaryFromReader(message: StatisticsRequest, reader: jspb.BinaryReader): StatisticsRequest;
}

export namespace StatisticsRequest {
    export type AsObject = {
        replication: string,
        collection: string,
        ttl: string,
    }
}

export class StatisticsResponse extends jspb.Message { 
    getReplication(): string;
    setReplication(value: string): void;

    getCollection(): string;
    setCollection(value: string): void;

    getTtl(): string;
    setTtl(value: string): void;

    getTotalSize(): number;
    setTotalSize(value: number): void;

    getUsedSize(): number;
    setUsedSize(value: number): void;

    getFileCount(): number;
    setFileCount(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatisticsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StatisticsResponse): StatisticsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatisticsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatisticsResponse;
    static deserializeBinaryFromReader(message: StatisticsResponse, reader: jspb.BinaryReader): StatisticsResponse;
}

export namespace StatisticsResponse {
    export type AsObject = {
        replication: string,
        collection: string,
        ttl: string,
        totalSize: number,
        usedSize: number,
        fileCount: number,
    }
}

export class GetFilerConfigurationRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFilerConfigurationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFilerConfigurationRequest): GetFilerConfigurationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFilerConfigurationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFilerConfigurationRequest;
    static deserializeBinaryFromReader(message: GetFilerConfigurationRequest, reader: jspb.BinaryReader): GetFilerConfigurationRequest;
}

export namespace GetFilerConfigurationRequest {
    export type AsObject = {
    }
}

export class GetFilerConfigurationResponse extends jspb.Message { 
    clearMastersList(): void;
    getMastersList(): Array<string>;
    setMastersList(value: Array<string>): void;
    addMasters(value: string, index?: number): string;

    getReplication(): string;
    setReplication(value: string): void;

    getCollection(): string;
    setCollection(value: string): void;

    getMaxMb(): number;
    setMaxMb(value: number): void;

    getDirBuckets(): string;
    setDirBuckets(value: string): void;

    getDirQueues(): string;
    setDirQueues(value: string): void;

    getCipher(): boolean;
    setCipher(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFilerConfigurationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetFilerConfigurationResponse): GetFilerConfigurationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFilerConfigurationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFilerConfigurationResponse;
    static deserializeBinaryFromReader(message: GetFilerConfigurationResponse, reader: jspb.BinaryReader): GetFilerConfigurationResponse;
}

export namespace GetFilerConfigurationResponse {
    export type AsObject = {
        mastersList: Array<string>,
        replication: string,
        collection: string,
        maxMb: number,
        dirBuckets: string,
        dirQueues: string,
        cipher: boolean,
    }
}
