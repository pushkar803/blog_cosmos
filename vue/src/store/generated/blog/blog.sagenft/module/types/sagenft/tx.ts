/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "blog.sagenft";

export interface MsgMint {
  creator: string;
  tokenURI: string;
}

export interface MsgMintResponse {
  nftId: number;
}

export interface MsgBurn {
  creator: string;
  nftId: number;
}

export interface MsgBurnResponse {
  result: boolean;
}

export interface MsgTransfer {
  creator: string;
  nftId: number;
  toAddress: string;
}

export interface MsgTransferResponse {
  status: string;
}

export interface MsgDistribute {
  creator: string;
  nftIds: string;
  toAddresses: string;
}

export interface MsgDistributeResponse {
  status: string;
}

const baseMsgMint: object = { creator: "", tokenURI: "" };

export const MsgMint = {
  encode(message: MsgMint, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tokenURI !== "") {
      writer.uint32(18).string(message.tokenURI);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMint } as MsgMint;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tokenURI = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMint {
    const message = { ...baseMsgMint } as MsgMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.tokenURI !== undefined && object.tokenURI !== null) {
      message.tokenURI = String(object.tokenURI);
    } else {
      message.tokenURI = "";
    }
    return message;
  },

  toJSON(message: MsgMint): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenURI !== undefined && (obj.tokenURI = message.tokenURI);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMint>): MsgMint {
    const message = { ...baseMsgMint } as MsgMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.tokenURI !== undefined && object.tokenURI !== null) {
      message.tokenURI = object.tokenURI;
    } else {
      message.tokenURI = "";
    }
    return message;
  },
};

const baseMsgMintResponse: object = { nftId: 0 };

export const MsgMintResponse = {
  encode(message: MsgMintResponse, writer: Writer = Writer.create()): Writer {
    if (message.nftId !== 0) {
      writer.uint32(8).uint64(message.nftId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintResponse } as MsgMintResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintResponse {
    const message = { ...baseMsgMintResponse } as MsgMintResponse;
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = Number(object.nftId);
    } else {
      message.nftId = 0;
    }
    return message;
  },

  toJSON(message: MsgMintResponse): unknown {
    const obj: any = {};
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintResponse>): MsgMintResponse {
    const message = { ...baseMsgMintResponse } as MsgMintResponse;
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = object.nftId;
    } else {
      message.nftId = 0;
    }
    return message;
  },
};

const baseMsgBurn: object = { creator: "", nftId: 0 };

export const MsgBurn = {
  encode(message: MsgBurn, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftId !== 0) {
      writer.uint32(16).uint64(message.nftId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurn } as MsgBurn;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurn {
    const message = { ...baseMsgBurn } as MsgBurn;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = Number(object.nftId);
    } else {
      message.nftId = 0;
    }
    return message;
  },

  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurn>): MsgBurn {
    const message = { ...baseMsgBurn } as MsgBurn;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = object.nftId;
    } else {
      message.nftId = 0;
    }
    return message;
  },
};

const baseMsgBurnResponse: object = { result: false };

export const MsgBurnResponse = {
  encode(message: MsgBurnResponse, writer: Writer = Writer.create()): Writer {
    if (message.result === true) {
      writer.uint32(8).bool(message.result);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnResponse } as MsgBurnResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnResponse {
    const message = { ...baseMsgBurnResponse } as MsgBurnResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = Boolean(object.result);
    } else {
      message.result = false;
    }
    return message;
  },

  toJSON(message: MsgBurnResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurnResponse>): MsgBurnResponse {
    const message = { ...baseMsgBurnResponse } as MsgBurnResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = false;
    }
    return message;
  },
};

const baseMsgTransfer: object = { creator: "", nftId: 0, toAddress: "" };

export const MsgTransfer = {
  encode(message: MsgTransfer, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftId !== 0) {
      writer.uint32(16).uint64(message.nftId);
    }
    if (message.toAddress !== "") {
      writer.uint32(26).string(message.toAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransfer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransfer } as MsgTransfer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.toAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransfer {
    const message = { ...baseMsgTransfer } as MsgTransfer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = Number(object.nftId);
    } else {
      message.nftId = 0;
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = String(object.toAddress);
    } else {
      message.toAddress = "";
    }
    return message;
  },

  toJSON(message: MsgTransfer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTransfer>): MsgTransfer {
    const message = { ...baseMsgTransfer } as MsgTransfer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = object.nftId;
    } else {
      message.nftId = 0;
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = object.toAddress;
    } else {
      message.toAddress = "";
    }
    return message;
  },
};

const baseMsgTransferResponse: object = { status: "" };

export const MsgTransferResponse = {
  encode(
    message: MsgTransferResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransferResponse } as MsgTransferResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferResponse {
    const message = { ...baseMsgTransferResponse } as MsgTransferResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgTransferResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTransferResponse>): MsgTransferResponse {
    const message = { ...baseMsgTransferResponse } as MsgTransferResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgDistribute: object = { creator: "", nftIds: "", toAddresses: "" };

export const MsgDistribute = {
  encode(message: MsgDistribute, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftIds !== "") {
      writer.uint32(18).string(message.nftIds);
    }
    if (message.toAddresses !== "") {
      writer.uint32(26).string(message.toAddresses);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDistribute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDistribute } as MsgDistribute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftIds = reader.string();
          break;
        case 3:
          message.toAddresses = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDistribute {
    const message = { ...baseMsgDistribute } as MsgDistribute;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.nftIds !== undefined && object.nftIds !== null) {
      message.nftIds = String(object.nftIds);
    } else {
      message.nftIds = "";
    }
    if (object.toAddresses !== undefined && object.toAddresses !== null) {
      message.toAddresses = String(object.toAddresses);
    } else {
      message.toAddresses = "";
    }
    return message;
  },

  toJSON(message: MsgDistribute): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftIds !== undefined && (obj.nftIds = message.nftIds);
    message.toAddresses !== undefined &&
      (obj.toAddresses = message.toAddresses);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDistribute>): MsgDistribute {
    const message = { ...baseMsgDistribute } as MsgDistribute;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.nftIds !== undefined && object.nftIds !== null) {
      message.nftIds = object.nftIds;
    } else {
      message.nftIds = "";
    }
    if (object.toAddresses !== undefined && object.toAddresses !== null) {
      message.toAddresses = object.toAddresses;
    } else {
      message.toAddresses = "";
    }
    return message;
  },
};

const baseMsgDistributeResponse: object = { status: "" };

export const MsgDistributeResponse = {
  encode(
    message: MsgDistributeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDistributeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDistributeResponse } as MsgDistributeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDistributeResponse {
    const message = { ...baseMsgDistributeResponse } as MsgDistributeResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgDistributeResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDistributeResponse>
  ): MsgDistributeResponse {
    const message = { ...baseMsgDistributeResponse } as MsgDistributeResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Mint(request: MsgMint): Promise<MsgMintResponse>;
  Burn(request: MsgBurn): Promise<MsgBurnResponse>;
  Transfer(request: MsgTransfer): Promise<MsgTransferResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Distribute(request: MsgDistribute): Promise<MsgDistributeResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("blog.sagenft.Msg", "Mint", data);
    return promise.then((data) => MsgMintResponse.decode(new Reader(data)));
  }

  Burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("blog.sagenft.Msg", "Burn", data);
    return promise.then((data) => MsgBurnResponse.decode(new Reader(data)));
  }

  Transfer(request: MsgTransfer): Promise<MsgTransferResponse> {
    const data = MsgTransfer.encode(request).finish();
    const promise = this.rpc.request("blog.sagenft.Msg", "Transfer", data);
    return promise.then((data) => MsgTransferResponse.decode(new Reader(data)));
  }

  Distribute(request: MsgDistribute): Promise<MsgDistributeResponse> {
    const data = MsgDistribute.encode(request).finish();
    const promise = this.rpc.request("blog.sagenft.Msg", "Distribute", data);
    return promise.then((data) =>
      MsgDistributeResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
