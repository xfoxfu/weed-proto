// package: master_pb
// file: seaweedfs/weed/pb/master.proto

import * as jspb from "google-protobuf";

export class Heartbeat extends jspb.Message {
  getIp(): string;
  setIp(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getPublicUrl(): string;
  setPublicUrl(value: string): void;

  getMaxVolumeCount(): number;
  setMaxVolumeCount(value: number): void;

  getMaxFileKey(): number;
  setMaxFileKey(value: number): void;

  getDataCenter(): string;
  setDataCenter(value: string): void;

  getRack(): string;
  setRack(value: string): void;

  getAdminPort(): number;
  setAdminPort(value: number): void;

  clearVolumesList(): void;
  getVolumesList(): Array<VolumeInformationMessage>;
  setVolumesList(value: Array<VolumeInformationMessage>): void;
  addVolumes(value?: VolumeInformationMessage, index?: number): VolumeInformationMessage;

  clearNewVolumesList(): void;
  getNewVolumesList(): Array<VolumeShortInformationMessage>;
  setNewVolumesList(value: Array<VolumeShortInformationMessage>): void;
  addNewVolumes(value?: VolumeShortInformationMessage, index?: number): VolumeShortInformationMessage;

  clearDeletedVolumesList(): void;
  getDeletedVolumesList(): Array<VolumeShortInformationMessage>;
  setDeletedVolumesList(value: Array<VolumeShortInformationMessage>): void;
  addDeletedVolumes(value?: VolumeShortInformationMessage, index?: number): VolumeShortInformationMessage;

  getHasNoVolumes(): boolean;
  setHasNoVolumes(value: boolean): void;

  clearEcShardsList(): void;
  getEcShardsList(): Array<VolumeEcShardInformationMessage>;
  setEcShardsList(value: Array<VolumeEcShardInformationMessage>): void;
  addEcShards(value?: VolumeEcShardInformationMessage, index?: number): VolumeEcShardInformationMessage;

  clearNewEcShardsList(): void;
  getNewEcShardsList(): Array<VolumeEcShardInformationMessage>;
  setNewEcShardsList(value: Array<VolumeEcShardInformationMessage>): void;
  addNewEcShards(value?: VolumeEcShardInformationMessage, index?: number): VolumeEcShardInformationMessage;

  clearDeletedEcShardsList(): void;
  getDeletedEcShardsList(): Array<VolumeEcShardInformationMessage>;
  setDeletedEcShardsList(value: Array<VolumeEcShardInformationMessage>): void;
  addDeletedEcShards(value?: VolumeEcShardInformationMessage, index?: number): VolumeEcShardInformationMessage;

  getHasNoEcShards(): boolean;
  setHasNoEcShards(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Heartbeat.AsObject;
  static toObject(includeInstance: boolean, msg: Heartbeat): Heartbeat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Heartbeat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Heartbeat;
  static deserializeBinaryFromReader(message: Heartbeat, reader: jspb.BinaryReader): Heartbeat;
}

export namespace Heartbeat {
  export type AsObject = {
    ip: string,
    port: number,
    publicUrl: string,
    maxVolumeCount: number,
    maxFileKey: number,
    dataCenter: string,
    rack: string,
    adminPort: number,
    volumesList: Array<VolumeInformationMessage.AsObject>,
    newVolumesList: Array<VolumeShortInformationMessage.AsObject>,
    deletedVolumesList: Array<VolumeShortInformationMessage.AsObject>,
    hasNoVolumes: boolean,
    ecShardsList: Array<VolumeEcShardInformationMessage.AsObject>,
    newEcShardsList: Array<VolumeEcShardInformationMessage.AsObject>,
    deletedEcShardsList: Array<VolumeEcShardInformationMessage.AsObject>,
    hasNoEcShards: boolean,
  }
}

export class HeartbeatResponse extends jspb.Message {
  getVolumeSizeLimit(): number;
  setVolumeSizeLimit(value: number): void;

  getLeader(): string;
  setLeader(value: string): void;

  getMetricsAddress(): string;
  setMetricsAddress(value: string): void;

  getMetricsIntervalSeconds(): number;
  setMetricsIntervalSeconds(value: number): void;

  clearStorageBackendsList(): void;
  getStorageBackendsList(): Array<StorageBackend>;
  setStorageBackendsList(value: Array<StorageBackend>): void;
  addStorageBackends(value?: StorageBackend, index?: number): StorageBackend;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeartbeatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HeartbeatResponse): HeartbeatResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeartbeatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeartbeatResponse;
  static deserializeBinaryFromReader(message: HeartbeatResponse, reader: jspb.BinaryReader): HeartbeatResponse;
}

export namespace HeartbeatResponse {
  export type AsObject = {
    volumeSizeLimit: number,
    leader: string,
    metricsAddress: string,
    metricsIntervalSeconds: number,
    storageBackendsList: Array<StorageBackend.AsObject>,
  }
}

export class VolumeInformationMessage extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getCollection(): string;
  setCollection(value: string): void;

  getFileCount(): number;
  setFileCount(value: number): void;

  getDeleteCount(): number;
  setDeleteCount(value: number): void;

  getDeletedByteCount(): number;
  setDeletedByteCount(value: number): void;

  getReadOnly(): boolean;
  setReadOnly(value: boolean): void;

  getReplicaPlacement(): number;
  setReplicaPlacement(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  getTtl(): number;
  setTtl(value: number): void;

  getCompactRevision(): number;
  setCompactRevision(value: number): void;

  getModifiedAtSecond(): number;
  setModifiedAtSecond(value: number): void;

  getRemoteStorageName(): string;
  setRemoteStorageName(value: string): void;

  getRemoteStorageKey(): string;
  setRemoteStorageKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeInformationMessage.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeInformationMessage): VolumeInformationMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VolumeInformationMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeInformationMessage;
  static deserializeBinaryFromReader(message: VolumeInformationMessage, reader: jspb.BinaryReader): VolumeInformationMessage;
}

export namespace VolumeInformationMessage {
  export type AsObject = {
    id: number,
    size: number,
    collection: string,
    fileCount: number,
    deleteCount: number,
    deletedByteCount: number,
    readOnly: boolean,
    replicaPlacement: number,
    version: number,
    ttl: number,
    compactRevision: number,
    modifiedAtSecond: number,
    remoteStorageName: string,
    remoteStorageKey: string,
  }
}

export class VolumeShortInformationMessage extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCollection(): string;
  setCollection(value: string): void;

  getReplicaPlacement(): number;
  setReplicaPlacement(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  getTtl(): number;
  setTtl(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeShortInformationMessage.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeShortInformationMessage): VolumeShortInformationMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VolumeShortInformationMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeShortInformationMessage;
  static deserializeBinaryFromReader(message: VolumeShortInformationMessage, reader: jspb.BinaryReader): VolumeShortInformationMessage;
}

export namespace VolumeShortInformationMessage {
  export type AsObject = {
    id: number,
    collection: string,
    replicaPlacement: number,
    version: number,
    ttl: number,
  }
}

export class VolumeEcShardInformationMessage extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCollection(): string;
  setCollection(value: string): void;

  getEcIndexBits(): number;
  setEcIndexBits(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeEcShardInformationMessage.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeEcShardInformationMessage): VolumeEcShardInformationMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VolumeEcShardInformationMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeEcShardInformationMessage;
  static deserializeBinaryFromReader(message: VolumeEcShardInformationMessage, reader: jspb.BinaryReader): VolumeEcShardInformationMessage;
}

export namespace VolumeEcShardInformationMessage {
  export type AsObject = {
    id: number,
    collection: string,
    ecIndexBits: number,
  }
}

export class StorageBackend extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getId(): string;
  setId(value: string): void;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageBackend.AsObject;
  static toObject(includeInstance: boolean, msg: StorageBackend): StorageBackend.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageBackend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageBackend;
  static deserializeBinaryFromReader(message: StorageBackend, reader: jspb.BinaryReader): StorageBackend;
}

export namespace StorageBackend {
  export type AsObject = {
    type: string,
    id: string,
    propertiesMap: Array<[string, string]>,
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

export class SuperBlockExtra extends jspb.Message {
  hasErasureCoding(): boolean;
  clearErasureCoding(): void;
  getErasureCoding(): SuperBlockExtra.ErasureCoding | undefined;
  setErasureCoding(value?: SuperBlockExtra.ErasureCoding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuperBlockExtra.AsObject;
  static toObject(includeInstance: boolean, msg: SuperBlockExtra): SuperBlockExtra.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SuperBlockExtra, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuperBlockExtra;
  static deserializeBinaryFromReader(message: SuperBlockExtra, reader: jspb.BinaryReader): SuperBlockExtra;
}

export namespace SuperBlockExtra {
  export type AsObject = {
    erasureCoding?: SuperBlockExtra.ErasureCoding.AsObject,
  }

  export class ErasureCoding extends jspb.Message {
    getData(): number;
    setData(value: number): void;

    getParity(): number;
    setParity(value: number): void;

    clearVolumeIdsList(): void;
    getVolumeIdsList(): Array<number>;
    setVolumeIdsList(value: Array<number>): void;
    addVolumeIds(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErasureCoding.AsObject;
    static toObject(includeInstance: boolean, msg: ErasureCoding): ErasureCoding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErasureCoding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErasureCoding;
    static deserializeBinaryFromReader(message: ErasureCoding, reader: jspb.BinaryReader): ErasureCoding;
  }

  export namespace ErasureCoding {
    export type AsObject = {
      data: number,
      parity: number,
      volumeIdsList: Array<number>,
    }
  }
}

export class KeepConnectedRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getGrpcPort(): number;
  setGrpcPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeepConnectedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KeepConnectedRequest): KeepConnectedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeepConnectedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeepConnectedRequest;
  static deserializeBinaryFromReader(message: KeepConnectedRequest, reader: jspb.BinaryReader): KeepConnectedRequest;
}

export namespace KeepConnectedRequest {
  export type AsObject = {
    name: string,
    grpcPort: number,
  }
}

export class VolumeLocation extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getPublicUrl(): string;
  setPublicUrl(value: string): void;

  clearNewVidsList(): void;
  getNewVidsList(): Array<number>;
  setNewVidsList(value: Array<number>): void;
  addNewVids(value: number, index?: number): number;

  clearDeletedVidsList(): void;
  getDeletedVidsList(): Array<number>;
  setDeletedVidsList(value: Array<number>): void;
  addDeletedVids(value: number, index?: number): number;

  getLeader(): string;
  setLeader(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeLocation.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeLocation): VolumeLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VolumeLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeLocation;
  static deserializeBinaryFromReader(message: VolumeLocation, reader: jspb.BinaryReader): VolumeLocation;
}

export namespace VolumeLocation {
  export type AsObject = {
    url: string,
    publicUrl: string,
    newVidsList: Array<number>,
    deletedVidsList: Array<number>,
    leader: string,
  }
}

export class LookupVolumeRequest extends jspb.Message {
  clearVolumeIdsList(): void;
  getVolumeIdsList(): Array<string>;
  setVolumeIdsList(value: Array<string>): void;
  addVolumeIds(value: string, index?: number): string;

  getCollection(): string;
  setCollection(value: string): void;

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
    collection: string,
  }
}

export class LookupVolumeResponse extends jspb.Message {
  clearVolumeIdLocationsList(): void;
  getVolumeIdLocationsList(): Array<LookupVolumeResponse.VolumeIdLocation>;
  setVolumeIdLocationsList(value: Array<LookupVolumeResponse.VolumeIdLocation>): void;
  addVolumeIdLocations(value?: LookupVolumeResponse.VolumeIdLocation, index?: number): LookupVolumeResponse.VolumeIdLocation;

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
    volumeIdLocationsList: Array<LookupVolumeResponse.VolumeIdLocation.AsObject>,
  }

  export class VolumeIdLocation extends jspb.Message {
    getVolumeId(): string;
    setVolumeId(value: string): void;

    clearLocationsList(): void;
    getLocationsList(): Array<Location>;
    setLocationsList(value: Array<Location>): void;
    addLocations(value?: Location, index?: number): Location;

    getError(): string;
    setError(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VolumeIdLocation.AsObject;
    static toObject(includeInstance: boolean, msg: VolumeIdLocation): VolumeIdLocation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VolumeIdLocation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VolumeIdLocation;
    static deserializeBinaryFromReader(message: VolumeIdLocation, reader: jspb.BinaryReader): VolumeIdLocation;
  }

  export namespace VolumeIdLocation {
    export type AsObject = {
      volumeId: string,
      locationsList: Array<Location.AsObject>,
      error: string,
    }
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

export class AssignRequest extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getReplication(): string;
  setReplication(value: string): void;

  getCollection(): string;
  setCollection(value: string): void;

  getTtl(): string;
  setTtl(value: string): void;

  getDataCenter(): string;
  setDataCenter(value: string): void;

  getRack(): string;
  setRack(value: string): void;

  getDataNode(): string;
  setDataNode(value: string): void;

  getMemoryMapMaxSizeMb(): number;
  setMemoryMapMaxSizeMb(value: number): void;

  getWritableVolumeCount(): number;
  setWritableVolumeCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssignRequest): AssignRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignRequest;
  static deserializeBinaryFromReader(message: AssignRequest, reader: jspb.BinaryReader): AssignRequest;
}

export namespace AssignRequest {
  export type AsObject = {
    count: number,
    replication: string,
    collection: string,
    ttl: string,
    dataCenter: string,
    rack: string,
    dataNode: string,
    memoryMapMaxSizeMb: number,
    writableVolumeCount: number,
  }
}

export class AssignResponse extends jspb.Message {
  getFid(): string;
  setFid(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getPublicUrl(): string;
  setPublicUrl(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  getError(): string;
  setError(value: string): void;

  getAuth(): string;
  setAuth(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssignResponse): AssignResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignResponse;
  static deserializeBinaryFromReader(message: AssignResponse, reader: jspb.BinaryReader): AssignResponse;
}

export namespace AssignResponse {
  export type AsObject = {
    fid: string,
    url: string,
    publicUrl: string,
    count: number,
    error: string,
    auth: string,
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

export class StorageType extends jspb.Message {
  getReplication(): string;
  setReplication(value: string): void;

  getTtl(): string;
  setTtl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageType.AsObject;
  static toObject(includeInstance: boolean, msg: StorageType): StorageType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageType;
  static deserializeBinaryFromReader(message: StorageType, reader: jspb.BinaryReader): StorageType;
}

export namespace StorageType {
  export type AsObject = {
    replication: string,
    ttl: string,
  }
}

export class Collection extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Collection.AsObject;
  static toObject(includeInstance: boolean, msg: Collection): Collection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Collection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Collection;
  static deserializeBinaryFromReader(message: Collection, reader: jspb.BinaryReader): Collection;
}

export namespace Collection {
  export type AsObject = {
    name: string,
  }
}

export class CollectionListRequest extends jspb.Message {
  getIncludeNormalVolumes(): boolean;
  setIncludeNormalVolumes(value: boolean): void;

  getIncludeEcVolumes(): boolean;
  setIncludeEcVolumes(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionListRequest): CollectionListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionListRequest;
  static deserializeBinaryFromReader(message: CollectionListRequest, reader: jspb.BinaryReader): CollectionListRequest;
}

export namespace CollectionListRequest {
  export type AsObject = {
    includeNormalVolumes: boolean,
    includeEcVolumes: boolean,
  }
}

export class CollectionListResponse extends jspb.Message {
  clearCollectionsList(): void;
  getCollectionsList(): Array<Collection>;
  setCollectionsList(value: Array<Collection>): void;
  addCollections(value?: Collection, index?: number): Collection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionListResponse): CollectionListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionListResponse;
  static deserializeBinaryFromReader(message: CollectionListResponse, reader: jspb.BinaryReader): CollectionListResponse;
}

export namespace CollectionListResponse {
  export type AsObject = {
    collectionsList: Array<Collection.AsObject>,
  }
}

export class CollectionDeleteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionDeleteRequest): CollectionDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionDeleteRequest;
  static deserializeBinaryFromReader(message: CollectionDeleteRequest, reader: jspb.BinaryReader): CollectionDeleteRequest;
}

export namespace CollectionDeleteRequest {
  export type AsObject = {
    name: string,
  }
}

export class CollectionDeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionDeleteResponse): CollectionDeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionDeleteResponse;
  static deserializeBinaryFromReader(message: CollectionDeleteResponse, reader: jspb.BinaryReader): CollectionDeleteResponse;
}

export namespace CollectionDeleteResponse {
  export type AsObject = {
  }
}

export class DataNodeInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getVolumeCount(): number;
  setVolumeCount(value: number): void;

  getMaxVolumeCount(): number;
  setMaxVolumeCount(value: number): void;

  getFreeVolumeCount(): number;
  setFreeVolumeCount(value: number): void;

  getActiveVolumeCount(): number;
  setActiveVolumeCount(value: number): void;

  clearVolumeInfosList(): void;
  getVolumeInfosList(): Array<VolumeInformationMessage>;
  setVolumeInfosList(value: Array<VolumeInformationMessage>): void;
  addVolumeInfos(value?: VolumeInformationMessage, index?: number): VolumeInformationMessage;

  clearEcShardInfosList(): void;
  getEcShardInfosList(): Array<VolumeEcShardInformationMessage>;
  setEcShardInfosList(value: Array<VolumeEcShardInformationMessage>): void;
  addEcShardInfos(value?: VolumeEcShardInformationMessage, index?: number): VolumeEcShardInformationMessage;

  getRemoteVolumeCount(): number;
  setRemoteVolumeCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataNodeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DataNodeInfo): DataNodeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataNodeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataNodeInfo;
  static deserializeBinaryFromReader(message: DataNodeInfo, reader: jspb.BinaryReader): DataNodeInfo;
}

export namespace DataNodeInfo {
  export type AsObject = {
    id: string,
    volumeCount: number,
    maxVolumeCount: number,
    freeVolumeCount: number,
    activeVolumeCount: number,
    volumeInfosList: Array<VolumeInformationMessage.AsObject>,
    ecShardInfosList: Array<VolumeEcShardInformationMessage.AsObject>,
    remoteVolumeCount: number,
  }
}

export class RackInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getVolumeCount(): number;
  setVolumeCount(value: number): void;

  getMaxVolumeCount(): number;
  setMaxVolumeCount(value: number): void;

  getFreeVolumeCount(): number;
  setFreeVolumeCount(value: number): void;

  getActiveVolumeCount(): number;
  setActiveVolumeCount(value: number): void;

  clearDataNodeInfosList(): void;
  getDataNodeInfosList(): Array<DataNodeInfo>;
  setDataNodeInfosList(value: Array<DataNodeInfo>): void;
  addDataNodeInfos(value?: DataNodeInfo, index?: number): DataNodeInfo;

  getRemoteVolumeCount(): number;
  setRemoteVolumeCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RackInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RackInfo): RackInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RackInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RackInfo;
  static deserializeBinaryFromReader(message: RackInfo, reader: jspb.BinaryReader): RackInfo;
}

export namespace RackInfo {
  export type AsObject = {
    id: string,
    volumeCount: number,
    maxVolumeCount: number,
    freeVolumeCount: number,
    activeVolumeCount: number,
    dataNodeInfosList: Array<DataNodeInfo.AsObject>,
    remoteVolumeCount: number,
  }
}

export class DataCenterInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getVolumeCount(): number;
  setVolumeCount(value: number): void;

  getMaxVolumeCount(): number;
  setMaxVolumeCount(value: number): void;

  getFreeVolumeCount(): number;
  setFreeVolumeCount(value: number): void;

  getActiveVolumeCount(): number;
  setActiveVolumeCount(value: number): void;

  clearRackInfosList(): void;
  getRackInfosList(): Array<RackInfo>;
  setRackInfosList(value: Array<RackInfo>): void;
  addRackInfos(value?: RackInfo, index?: number): RackInfo;

  getRemoteVolumeCount(): number;
  setRemoteVolumeCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataCenterInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DataCenterInfo): DataCenterInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataCenterInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataCenterInfo;
  static deserializeBinaryFromReader(message: DataCenterInfo, reader: jspb.BinaryReader): DataCenterInfo;
}

export namespace DataCenterInfo {
  export type AsObject = {
    id: string,
    volumeCount: number,
    maxVolumeCount: number,
    freeVolumeCount: number,
    activeVolumeCount: number,
    rackInfosList: Array<RackInfo.AsObject>,
    remoteVolumeCount: number,
  }
}

export class TopologyInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getVolumeCount(): number;
  setVolumeCount(value: number): void;

  getMaxVolumeCount(): number;
  setMaxVolumeCount(value: number): void;

  getFreeVolumeCount(): number;
  setFreeVolumeCount(value: number): void;

  getActiveVolumeCount(): number;
  setActiveVolumeCount(value: number): void;

  clearDataCenterInfosList(): void;
  getDataCenterInfosList(): Array<DataCenterInfo>;
  setDataCenterInfosList(value: Array<DataCenterInfo>): void;
  addDataCenterInfos(value?: DataCenterInfo, index?: number): DataCenterInfo;

  getRemoteVolumeCount(): number;
  setRemoteVolumeCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopologyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TopologyInfo): TopologyInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopologyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopologyInfo;
  static deserializeBinaryFromReader(message: TopologyInfo, reader: jspb.BinaryReader): TopologyInfo;
}

export namespace TopologyInfo {
  export type AsObject = {
    id: string,
    volumeCount: number,
    maxVolumeCount: number,
    freeVolumeCount: number,
    activeVolumeCount: number,
    dataCenterInfosList: Array<DataCenterInfo.AsObject>,
    remoteVolumeCount: number,
  }
}

export class VolumeListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeListRequest): VolumeListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VolumeListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeListRequest;
  static deserializeBinaryFromReader(message: VolumeListRequest, reader: jspb.BinaryReader): VolumeListRequest;
}

export namespace VolumeListRequest {
  export type AsObject = {
  }
}

export class VolumeListResponse extends jspb.Message {
  hasTopologyInfo(): boolean;
  clearTopologyInfo(): void;
  getTopologyInfo(): TopologyInfo | undefined;
  setTopologyInfo(value?: TopologyInfo): void;

  getVolumeSizeLimitMb(): number;
  setVolumeSizeLimitMb(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VolumeListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VolumeListResponse): VolumeListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VolumeListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VolumeListResponse;
  static deserializeBinaryFromReader(message: VolumeListResponse, reader: jspb.BinaryReader): VolumeListResponse;
}

export namespace VolumeListResponse {
  export type AsObject = {
    topologyInfo?: TopologyInfo.AsObject,
    volumeSizeLimitMb: number,
  }
}

export class LookupEcVolumeRequest extends jspb.Message {
  getVolumeId(): number;
  setVolumeId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupEcVolumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LookupEcVolumeRequest): LookupEcVolumeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LookupEcVolumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupEcVolumeRequest;
  static deserializeBinaryFromReader(message: LookupEcVolumeRequest, reader: jspb.BinaryReader): LookupEcVolumeRequest;
}

export namespace LookupEcVolumeRequest {
  export type AsObject = {
    volumeId: number,
  }
}

export class LookupEcVolumeResponse extends jspb.Message {
  getVolumeId(): number;
  setVolumeId(value: number): void;

  clearShardIdLocationsList(): void;
  getShardIdLocationsList(): Array<LookupEcVolumeResponse.EcShardIdLocation>;
  setShardIdLocationsList(value: Array<LookupEcVolumeResponse.EcShardIdLocation>): void;
  addShardIdLocations(value?: LookupEcVolumeResponse.EcShardIdLocation, index?: number): LookupEcVolumeResponse.EcShardIdLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupEcVolumeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LookupEcVolumeResponse): LookupEcVolumeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LookupEcVolumeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupEcVolumeResponse;
  static deserializeBinaryFromReader(message: LookupEcVolumeResponse, reader: jspb.BinaryReader): LookupEcVolumeResponse;
}

export namespace LookupEcVolumeResponse {
  export type AsObject = {
    volumeId: number,
    shardIdLocationsList: Array<LookupEcVolumeResponse.EcShardIdLocation.AsObject>,
  }

  export class EcShardIdLocation extends jspb.Message {
    getShardId(): number;
    setShardId(value: number): void;

    clearLocationsList(): void;
    getLocationsList(): Array<Location>;
    setLocationsList(value: Array<Location>): void;
    addLocations(value?: Location, index?: number): Location;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EcShardIdLocation.AsObject;
    static toObject(includeInstance: boolean, msg: EcShardIdLocation): EcShardIdLocation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EcShardIdLocation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EcShardIdLocation;
    static deserializeBinaryFromReader(message: EcShardIdLocation, reader: jspb.BinaryReader): EcShardIdLocation;
  }

  export namespace EcShardIdLocation {
    export type AsObject = {
      shardId: number,
      locationsList: Array<Location.AsObject>,
    }
  }
}

export class GetMasterConfigurationRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMasterConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMasterConfigurationRequest): GetMasterConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMasterConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMasterConfigurationRequest;
  static deserializeBinaryFromReader(message: GetMasterConfigurationRequest, reader: jspb.BinaryReader): GetMasterConfigurationRequest;
}

export namespace GetMasterConfigurationRequest {
  export type AsObject = {
  }
}

export class GetMasterConfigurationResponse extends jspb.Message {
  getMetricsAddress(): string;
  setMetricsAddress(value: string): void;

  getMetricsIntervalSeconds(): number;
  setMetricsIntervalSeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMasterConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMasterConfigurationResponse): GetMasterConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMasterConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMasterConfigurationResponse;
  static deserializeBinaryFromReader(message: GetMasterConfigurationResponse, reader: jspb.BinaryReader): GetMasterConfigurationResponse;
}

export namespace GetMasterConfigurationResponse {
  export type AsObject = {
    metricsAddress: string,
    metricsIntervalSeconds: number,
  }
}

export class ListMasterClientsRequest extends jspb.Message {
  getClientType(): string;
  setClientType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMasterClientsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMasterClientsRequest): ListMasterClientsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMasterClientsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMasterClientsRequest;
  static deserializeBinaryFromReader(message: ListMasterClientsRequest, reader: jspb.BinaryReader): ListMasterClientsRequest;
}

export namespace ListMasterClientsRequest {
  export type AsObject = {
    clientType: string,
  }
}

export class ListMasterClientsResponse extends jspb.Message {
  clearGrpcAddressesList(): void;
  getGrpcAddressesList(): Array<string>;
  setGrpcAddressesList(value: Array<string>): void;
  addGrpcAddresses(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMasterClientsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMasterClientsResponse): ListMasterClientsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMasterClientsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMasterClientsResponse;
  static deserializeBinaryFromReader(message: ListMasterClientsResponse, reader: jspb.BinaryReader): ListMasterClientsResponse;
}

export namespace ListMasterClientsResponse {
  export type AsObject = {
    grpcAddressesList: Array<string>,
  }
}

