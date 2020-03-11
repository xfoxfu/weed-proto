// package: iam_pb
// file: seaweedfs/weed/pb/iam.proto

import * as jspb from "google-protobuf";

export class S3ApiConfiguration extends jspb.Message {
  clearIdentitiesList(): void;
  getIdentitiesList(): Array<Identity>;
  setIdentitiesList(value: Array<Identity>): void;
  addIdentities(value?: Identity, index?: number): Identity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S3ApiConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: S3ApiConfiguration): S3ApiConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: S3ApiConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S3ApiConfiguration;
  static deserializeBinaryFromReader(message: S3ApiConfiguration, reader: jspb.BinaryReader): S3ApiConfiguration;
}

export namespace S3ApiConfiguration {
  export type AsObject = {
    identitiesList: Array<Identity.AsObject>,
  }
}

export class Identity extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearCredentialsList(): void;
  getCredentialsList(): Array<Credential>;
  setCredentialsList(value: Array<Credential>): void;
  addCredentials(value?: Credential, index?: number): Credential;

  clearActionsList(): void;
  getActionsList(): Array<string>;
  setActionsList(value: Array<string>): void;
  addActions(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Identity.AsObject;
  static toObject(includeInstance: boolean, msg: Identity): Identity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Identity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Identity;
  static deserializeBinaryFromReader(message: Identity, reader: jspb.BinaryReader): Identity;
}

export namespace Identity {
  export type AsObject = {
    name: string,
    credentialsList: Array<Credential.AsObject>,
    actionsList: Array<string>,
  }
}

export class Credential extends jspb.Message {
  getAccessKey(): string;
  setAccessKey(value: string): void;

  getSecretKey(): string;
  setSecretKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Credential.AsObject;
  static toObject(includeInstance: boolean, msg: Credential): Credential.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Credential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Credential;
  static deserializeBinaryFromReader(message: Credential, reader: jspb.BinaryReader): Credential;
}

export namespace Credential {
  export type AsObject = {
    accessKey: string,
    secretKey: string,
  }
}

