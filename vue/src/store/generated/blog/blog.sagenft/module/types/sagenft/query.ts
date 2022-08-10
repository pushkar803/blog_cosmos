/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../sagenft/params";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { NftItem } from "../sagenft/nft_item";

export const protobufPackage = "blog.sagenft";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryListNftItemRequest {
  pagination: PageRequest | undefined;
}

export interface QueryListNftItemResponse {
  NftItem: NftItem[];
  pagination: PageResponse | undefined;
}

export interface QueryShowNftItemRequest {
  nftId: number;
}

export interface QueryShowNftItemResponse {
  NftItem: NftItem | undefined;
}

export interface QueryListNftIdOfOwnerRequest {
  ownerAddress: string;
  pagination: PageRequest | undefined;
}

export interface QueryListNftIdOfOwnerResponse {
  nftIdList: number[];
  pagination: PageResponse | undefined;
}

export interface QueryNftCountOfRequest {
  ownerAddress: string;
}

export interface QueryNftCountOfResponse {
  total: number;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryListNftItemRequest: object = {};

export const QueryListNftItemRequest = {
  encode(
    message: QueryListNftItemRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryListNftItemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryListNftItemRequest,
    } as QueryListNftItemRequest;
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

  fromJSON(object: any): QueryListNftItemRequest {
    const message = {
      ...baseQueryListNftItemRequest,
    } as QueryListNftItemRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryListNftItemRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryListNftItemRequest>
  ): QueryListNftItemRequest {
    const message = {
      ...baseQueryListNftItemRequest,
    } as QueryListNftItemRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryListNftItemResponse: object = {};

export const QueryListNftItemResponse = {
  encode(
    message: QueryListNftItemResponse,
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryListNftItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryListNftItemResponse,
    } as QueryListNftItemResponse;
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

  fromJSON(object: any): QueryListNftItemResponse {
    const message = {
      ...baseQueryListNftItemResponse,
    } as QueryListNftItemResponse;
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

  toJSON(message: QueryListNftItemResponse): unknown {
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
    object: DeepPartial<QueryListNftItemResponse>
  ): QueryListNftItemResponse {
    const message = {
      ...baseQueryListNftItemResponse,
    } as QueryListNftItemResponse;
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

const baseQueryShowNftItemRequest: object = { nftId: 0 };

export const QueryShowNftItemRequest = {
  encode(
    message: QueryShowNftItemRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftId !== 0) {
      writer.uint32(8).uint64(message.nftId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryShowNftItemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShowNftItemRequest,
    } as QueryShowNftItemRequest;
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

  fromJSON(object: any): QueryShowNftItemRequest {
    const message = {
      ...baseQueryShowNftItemRequest,
    } as QueryShowNftItemRequest;
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = Number(object.nftId);
    } else {
      message.nftId = 0;
    }
    return message;
  },

  toJSON(message: QueryShowNftItemRequest): unknown {
    const obj: any = {};
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryShowNftItemRequest>
  ): QueryShowNftItemRequest {
    const message = {
      ...baseQueryShowNftItemRequest,
    } as QueryShowNftItemRequest;
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = object.nftId;
    } else {
      message.nftId = 0;
    }
    return message;
  },
};

const baseQueryShowNftItemResponse: object = {};

export const QueryShowNftItemResponse = {
  encode(
    message: QueryShowNftItemResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.NftItem !== undefined) {
      NftItem.encode(message.NftItem, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryShowNftItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShowNftItemResponse,
    } as QueryShowNftItemResponse;
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

  fromJSON(object: any): QueryShowNftItemResponse {
    const message = {
      ...baseQueryShowNftItemResponse,
    } as QueryShowNftItemResponse;
    if (object.NftItem !== undefined && object.NftItem !== null) {
      message.NftItem = NftItem.fromJSON(object.NftItem);
    } else {
      message.NftItem = undefined;
    }
    return message;
  },

  toJSON(message: QueryShowNftItemResponse): unknown {
    const obj: any = {};
    message.NftItem !== undefined &&
      (obj.NftItem = message.NftItem
        ? NftItem.toJSON(message.NftItem)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryShowNftItemResponse>
  ): QueryShowNftItemResponse {
    const message = {
      ...baseQueryShowNftItemResponse,
    } as QueryShowNftItemResponse;
    if (object.NftItem !== undefined && object.NftItem !== null) {
      message.NftItem = NftItem.fromPartial(object.NftItem);
    } else {
      message.NftItem = undefined;
    }
    return message;
  },
};

const baseQueryListNftIdOfOwnerRequest: object = { ownerAddress: "" };

export const QueryListNftIdOfOwnerRequest = {
  encode(
    message: QueryListNftIdOfOwnerRequest,
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
  ): QueryListNftIdOfOwnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryListNftIdOfOwnerRequest,
    } as QueryListNftIdOfOwnerRequest;
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

  fromJSON(object: any): QueryListNftIdOfOwnerRequest {
    const message = {
      ...baseQueryListNftIdOfOwnerRequest,
    } as QueryListNftIdOfOwnerRequest;
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

  toJSON(message: QueryListNftIdOfOwnerRequest): unknown {
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
    object: DeepPartial<QueryListNftIdOfOwnerRequest>
  ): QueryListNftIdOfOwnerRequest {
    const message = {
      ...baseQueryListNftIdOfOwnerRequest,
    } as QueryListNftIdOfOwnerRequest;
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

const baseQueryListNftIdOfOwnerResponse: object = { nftIdList: 0 };

export const QueryListNftIdOfOwnerResponse = {
  encode(
    message: QueryListNftIdOfOwnerResponse,
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
  ): QueryListNftIdOfOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryListNftIdOfOwnerResponse,
    } as QueryListNftIdOfOwnerResponse;
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

  fromJSON(object: any): QueryListNftIdOfOwnerResponse {
    const message = {
      ...baseQueryListNftIdOfOwnerResponse,
    } as QueryListNftIdOfOwnerResponse;
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

  toJSON(message: QueryListNftIdOfOwnerResponse): unknown {
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
    object: DeepPartial<QueryListNftIdOfOwnerResponse>
  ): QueryListNftIdOfOwnerResponse {
    const message = {
      ...baseQueryListNftIdOfOwnerResponse,
    } as QueryListNftIdOfOwnerResponse;
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

const baseQueryNftCountOfRequest: object = { ownerAddress: "" };

export const QueryNftCountOfRequest = {
  encode(
    message: QueryNftCountOfRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryNftCountOfRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryNftCountOfRequest } as QueryNftCountOfRequest;
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

  fromJSON(object: any): QueryNftCountOfRequest {
    const message = { ...baseQueryNftCountOfRequest } as QueryNftCountOfRequest;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
    }
    return message;
  },

  toJSON(message: QueryNftCountOfRequest): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryNftCountOfRequest>
  ): QueryNftCountOfRequest {
    const message = { ...baseQueryNftCountOfRequest } as QueryNftCountOfRequest;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
    }
    return message;
  },
};

const baseQueryNftCountOfResponse: object = { total: 0 };

export const QueryNftCountOfResponse = {
  encode(
    message: QueryNftCountOfResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.total !== 0) {
      writer.uint32(8).uint64(message.total);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryNftCountOfResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryNftCountOfResponse,
    } as QueryNftCountOfResponse;
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

  fromJSON(object: any): QueryNftCountOfResponse {
    const message = {
      ...baseQueryNftCountOfResponse,
    } as QueryNftCountOfResponse;
    if (object.total !== undefined && object.total !== null) {
      message.total = Number(object.total);
    } else {
      message.total = 0;
    }
    return message;
  },

  toJSON(message: QueryNftCountOfResponse): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = message.total);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryNftCountOfResponse>
  ): QueryNftCountOfResponse {
    const message = {
      ...baseQueryNftCountOfResponse,
    } as QueryNftCountOfResponse;
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = 0;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of ListNftItem items. */
  ListNftItem(
    request: QueryListNftItemRequest
  ): Promise<QueryListNftItemResponse>;
  /** Queries a list of ShowNftItem items. */
  ShowNftItem(
    request: QueryShowNftItemRequest
  ): Promise<QueryShowNftItemResponse>;
  /** Queries a list of ListNftIdOfOwner items. */
  ListNftIdOfOwner(
    request: QueryListNftIdOfOwnerRequest
  ): Promise<QueryListNftIdOfOwnerResponse>;
  /** Queries a list of NftCountOf items. */
  NftCountOf(request: QueryNftCountOfRequest): Promise<QueryNftCountOfResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("blog.sagenft.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  ListNftItem(
    request: QueryListNftItemRequest
  ): Promise<QueryListNftItemResponse> {
    const data = QueryListNftItemRequest.encode(request).finish();
    const promise = this.rpc.request("blog.sagenft.Query", "ListNftItem", data);
    return promise.then((data) =>
      QueryListNftItemResponse.decode(new Reader(data))
    );
  }

  ShowNftItem(
    request: QueryShowNftItemRequest
  ): Promise<QueryShowNftItemResponse> {
    const data = QueryShowNftItemRequest.encode(request).finish();
    const promise = this.rpc.request("blog.sagenft.Query", "ShowNftItem", data);
    return promise.then((data) =>
      QueryShowNftItemResponse.decode(new Reader(data))
    );
  }

  ListNftIdOfOwner(
    request: QueryListNftIdOfOwnerRequest
  ): Promise<QueryListNftIdOfOwnerResponse> {
    const data = QueryListNftIdOfOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blog.sagenft.Query",
      "ListNftIdOfOwner",
      data
    );
    return promise.then((data) =>
      QueryListNftIdOfOwnerResponse.decode(new Reader(data))
    );
  }

  NftCountOf(
    request: QueryNftCountOfRequest
  ): Promise<QueryNftCountOfResponse> {
    const data = QueryNftCountOfRequest.encode(request).finish();
    const promise = this.rpc.request("blog.sagenft.Query", "NftCountOf", data);
    return promise.then((data) =>
      QueryNftCountOfResponse.decode(new Reader(data))
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
