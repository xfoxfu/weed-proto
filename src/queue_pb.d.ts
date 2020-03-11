// package: queue_pb
// file: seaweedfs/weed/pb/queue.proto

import * as jspb from "google-protobuf";

export class WriteMessageRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  getEventNs(): number;
  setEventNs(value: number): void;

  getPartitionKey(): Uint8Array | string;
  getPartitionKey_asU8(): Uint8Array;
  getPartitionKey_asB64(): string;
  setPartitionKey(value: Uint8Array | string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WriteMessageRequest): WriteMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WriteMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteMessageRequest;
  static deserializeBinaryFromReader(message: WriteMessageRequest, reader: jspb.BinaryReader): WriteMessageRequest;
}

export namespace WriteMessageRequest {
  export type AsObject = {
    topic: string,
    eventNs: number,
    partitionKey: Uint8Array | string,
    data: Uint8Array | string,
  }
}

export class WriteMessageResponse extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  getAckNs(): number;
  setAckNs(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WriteMessageResponse): WriteMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WriteMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteMessageResponse;
  static deserializeBinaryFromReader(message: WriteMessageResponse, reader: jspb.BinaryReader): WriteMessageResponse;
}

export namespace WriteMessageResponse {
  export type AsObject = {
    error: string,
    ackNs: number,
  }
}

export class ReadMessageRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  getStartNs(): number;
  setStartNs(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadMessageRequest): ReadMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadMessageRequest;
  static deserializeBinaryFromReader(message: ReadMessageRequest, reader: jspb.BinaryReader): ReadMessageRequest;
}

export namespace ReadMessageRequest {
  export type AsObject = {
    topic: string,
    startNs: number,
  }
}

export class ReadMessageResponse extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  getEventNs(): number;
  setEventNs(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadMessageResponse): ReadMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadMessageResponse;
  static deserializeBinaryFromReader(message: ReadMessageResponse, reader: jspb.BinaryReader): ReadMessageResponse;
}

export namespace ReadMessageResponse {
  export type AsObject = {
    error: string,
    eventNs: number,
    data: Uint8Array | string,
  }
}

export class ConfigureTopicRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  getTtlSeconds(): number;
  setTtlSeconds(value: number): void;

  getPartitionCount(): number;
  setPartitionCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigureTopicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigureTopicRequest): ConfigureTopicRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigureTopicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigureTopicRequest;
  static deserializeBinaryFromReader(message: ConfigureTopicRequest, reader: jspb.BinaryReader): ConfigureTopicRequest;
}

export namespace ConfigureTopicRequest {
  export type AsObject = {
    topic: string,
    ttlSeconds: number,
    partitionCount: number,
  }
}

export class ConfigureTopicResponse extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigureTopicResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigureTopicResponse): ConfigureTopicResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigureTopicResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigureTopicResponse;
  static deserializeBinaryFromReader(message: ConfigureTopicResponse, reader: jspb.BinaryReader): ConfigureTopicResponse;
}

export namespace ConfigureTopicResponse {
  export type AsObject = {
    error: string,
  }
}

export class DeleteTopicRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTopicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTopicRequest): DeleteTopicRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTopicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTopicRequest;
  static deserializeBinaryFromReader(message: DeleteTopicRequest, reader: jspb.BinaryReader): DeleteTopicRequest;
}

export namespace DeleteTopicRequest {
  export type AsObject = {
    topic: string,
  }
}

export class DeleteTopicResponse extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTopicResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTopicResponse): DeleteTopicResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTopicResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTopicResponse;
  static deserializeBinaryFromReader(message: DeleteTopicResponse, reader: jspb.BinaryReader): DeleteTopicResponse;
}

export namespace DeleteTopicResponse {
  export type AsObject = {
    error: string,
  }
}

