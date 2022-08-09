/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { NftItem } from "../nft/nft_item";

export const protobufPackage = "blog.nft";

export interface QueryNftIdListOfOwnerRequest {
  ownerAddress: string;
  pagination: PageRequest | undefined;
}

export interface QueryNftIdListOfOwnerResponse {
  nftIdList: number[];
  pagination: PageResponse | undefined;
}

export interface QueryBalanceOfRequest {
  ownerAddress: string;
}

export interface QueryBalanceOfResponse {
  total: number;
}

export interface QueryGetNftItemRequest {
  id: number;
}

export interface QueryGetNftItemResponse {
  NftItem: NftItem | undefined;
}

export interface QueryAllNftItemRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllNftItemResponse {
  NftItem: NftItem[];
  pagination: PageResponse | undefined;
}

const baseQueryNftIdListOfOwnerRequest: object = { ownerAddress: "" };

export const QueryNftIdListOfOwnerRequest = {
  encode(
    message: QueryNftIdListOfOwnerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryNftIdListOfOwnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryNftIdListOfOwnerRequest,
    } as QueryNftIdListOfOwnerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNftIdListOfOwnerRequest {
    const message = {
      ...baseQueryNftIdListOfOwnerRequest,
    } as QueryNftIdListOfOwnerRequest;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryNftIdListOfOwnerRequest): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryNftIdListOfOwnerRequest>
  ): QueryNftIdListOfOwnerRequest {
    const message = {
      ...baseQueryNftIdListOfOwnerRequest,
    } as QueryNftIdListOfOwnerRequest;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryNftIdListOfOwnerResponse: object = { nftIdList: 0 };

export const QueryNftIdListOfOwnerResponse = {
  encode(
    message: QueryNftIdListOfOwnerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).fork();
    for (const v of message.nftIdList) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryNftIdListOfOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryNftIdListOfOwnerResponse,
    } as QueryNftIdListOfOwnerResponse;
    message.nftIdList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.nftIdList.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.nftIdList.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNftIdListOfOwnerResponse {
    const message = {
      ...baseQueryNftIdListOfOwnerResponse,
    } as QueryNftIdListOfOwnerResponse;
    message.nftIdList = [];
    if (object.nftIdList !== undefined && object.nftIdList !== null) {
      for (const e of object.nftIdList) {
        message.nftIdList.push(Number(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryNftIdListOfOwnerResponse): unknown {
    const obj: any = {};
    if (message.nftIdList) {
      obj.nftIdList = message.nftIdList.map((e) => e);
    } else {
      obj.nftIdList = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryNftIdListOfOwnerResponse>
  ): QueryNftIdListOfOwnerResponse {
    const message = {
      ...baseQueryNftIdListOfOwnerResponse,
    } as QueryNftIdListOfOwnerResponse;
    message.nftIdList = [];
    if (object.nftIdList !== undefined && object.nftIdList !== null) {
      for (const e of object.nftIdList) {
        message.nftIdList.push(e);
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryBalanceOfRequest: object = { ownerAddress: "" };

export const QueryBalanceOfRequest = {
  encode(
    message: QueryBalanceOfRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBalanceOfRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBalanceOfRequest } as QueryBalanceOfRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceOfRequest {
    const message = { ...baseQueryBalanceOfRequest } as QueryBalanceOfRequest;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
    }
    return message;
  },

  toJSON(message: QueryBalanceOfRequest): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBalanceOfRequest>
  ): QueryBalanceOfRequest {
    const message = { ...baseQueryBalanceOfRequest } as QueryBalanceOfRequest;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
    }
    return message;
  },
};

const baseQueryBalanceOfResponse: object = { total: 0 };

export const QueryBalanceOfResponse = {
  encode(
    message: QueryBalanceOfResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.total !== 0) {
      writer.uint32(8).uint64(message.total);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBalanceOfResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBalanceOfResponse } as QueryBalanceOfResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceOfResponse {
    const message = { ...baseQueryBalanceOfResponse } as QueryBalanceOfResponse;
    if (object.total !== undefined && object.total !== null) {
      message.total = Number(object.total);
    } else {
      message.total = 0;
    }
    return message;
  },

  toJSON(message: QueryBalanceOfResponse): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = message.total);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBalanceOfResponse>
  ): QueryBalanceOfResponse {
    const message = { ...baseQueryBalanceOfResponse } as QueryBalanceOfResponse;
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = 0;
    }
    return message;
  },
};

const baseQueryGetNftItemRequest: object = { id: 0 };

export const QueryGetNftItemRequest = {
  encode(
    message: QueryGetNftItemRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNftItemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetNftItemRequest } as QueryGetNftItemRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNftItemRequest {
    const message = { ...baseQueryGetNftItemRequest } as QueryGetNftItemRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetNftItemRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNftItemRequest>
  ): QueryGetNftItemRequest {
    const message = { ...baseQueryGetNftItemRequest } as QueryGetNftItemRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetNftItemResponse: object = {};

export const QueryGetNftItemResponse = {
  encode(
    message: QueryGetNftItemResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.NftItem !== undefined) {
      NftItem.encode(message.NftItem, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNftItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNftItemResponse,
    } as QueryGetNftItemResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.NftItem = NftItem.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNftItemResponse {
    const message = {
      ...baseQueryGetNftItemResponse,
    } as QueryGetNftItemResponse;
    if (object.NftItem !== undefined && object.NftItem !== null) {
      message.NftItem = NftItem.fromJSON(object.NftItem);
    } else {
      message.NftItem = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetNftItemResponse): unknown {
    const obj: any = {};
    message.NftItem !== undefined &&
      (obj.NftItem = message.NftItem
        ? NftItem.toJSON(message.NftItem)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNftItemResponse>
  ): QueryGetNftItemResponse {
    const message = {
      ...baseQueryGetNftItemResponse,
    } as QueryGetNftItemResponse;
    if (object.NftItem !== undefined && object.NftItem !== null) {
      message.NftItem = NftItem.fromPartial(object.NftItem);
    } else {
      message.NftItem = undefined;
    }
    return message;
  },
};

const baseQueryAllNftItemRequest: object = {};

export const QueryAllNftItemRequest = {
  encode(
    message: QueryAllNftItemRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllNftItemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllNftItemRequest } as QueryAllNftItemRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNftItemRequest {
    const message = { ...baseQueryAllNftItemRequest } as QueryAllNftItemRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllNftItemRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllNftItemRequest>
  ): QueryAllNftItemRequest {
    const message = { ...baseQueryAllNftItemRequest } as QueryAllNftItemRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllNftItemResponse: object = {};

export const QueryAllNftItemResponse = {
  encode(
    message: QueryAllNftItemResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.NftItem) {
      NftItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllNftItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllNftItemResponse,
    } as QueryAllNftItemResponse;
    message.NftItem = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.NftItem.push(NftItem.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNftItemResponse {
    const message = {
      ...baseQueryAllNftItemResponse,
    } as QueryAllNftItemResponse;
    message.NftItem = [];
    if (object.NftItem !== undefined && object.NftItem !== null) {
      for (const e of object.NftItem) {
        message.NftItem.push(NftItem.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllNftItemResponse): unknown {
    const obj: any = {};
    if (message.NftItem) {
      obj.NftItem = message.NftItem.map((e) =>
        e ? NftItem.toJSON(e) : undefined
      );
    } else {
      obj.NftItem = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllNftItemResponse>
  ): QueryAllNftItemResponse {
    const message = {
      ...baseQueryAllNftItemResponse,
    } as QueryAllNftItemResponse;
    message.NftItem = [];
    if (object.NftItem !== undefined && object.NftItem !== null) {
      for (const e of object.NftItem) {
        message.NftItem.push(NftItem.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of NftListOfOwner items. */
  NftIdListOfOwner(
    request: QueryNftIdListOfOwnerRequest
  ): Promise<QueryNftIdListOfOwnerResponse>;
  /** Queries a list of balanceOf items. */
  BalanceOf(request: QueryBalanceOfRequest): Promise<QueryBalanceOfResponse>;
  /** Queries a nftItem by id. */
  NftItem(request: QueryGetNftItemRequest): Promise<QueryGetNftItemResponse>;
  /** Queries a list of nftItem items. */
  NftItemAll(request: QueryAllNftItemRequest): Promise<QueryAllNftItemResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  NftIdListOfOwner(
    request: QueryNftIdListOfOwnerRequest
  ): Promise<QueryNftIdListOfOwnerResponse> {
    const data = QueryNftIdListOfOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blog.nft.Query",
      "NftIdListOfOwner",
      data
    );
    return promise.then((data) =>
      QueryNftIdListOfOwnerResponse.decode(new Reader(data))
    );
  }

  BalanceOf(request: QueryBalanceOfRequest): Promise<QueryBalanceOfResponse> {
    const data = QueryBalanceOfRequest.encode(request).finish();
    const promise = this.rpc.request("blog.nft.Query", "BalanceOf", data);
    return promise.then((data) =>
      QueryBalanceOfResponse.decode(new Reader(data))
    );
  }

  NftItem(request: QueryGetNftItemRequest): Promise<QueryGetNftItemResponse> {
    const data = QueryGetNftItemRequest.encode(request).finish();
    const promise = this.rpc.request("blog.nft.Query", "NftItem", data);
    return promise.then((data) =>
      QueryGetNftItemResponse.decode(new Reader(data))
    );
  }

  NftItemAll(
    request: QueryAllNftItemRequest
  ): Promise<QueryAllNftItemResponse> {
    const data = QueryAllNftItemRequest.encode(request).finish();
    const promise = this.rpc.request("blog.nft.Query", "NftItemAll", data);
    return promise.then((data) =>
      QueryAllNftItemResponse.decode(new Reader(data))
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