package keeper

import (
	"context"

	"blog/x/sagenft/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ShowNftItem(goCtx context.Context, req *types.QueryShowNftItemRequest) (*types.QueryShowNftItemResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var nftItem types.NftItem
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasNftItem(ctx, req.NftId) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NftItemDataKey))
	k.cdc.MustUnmarshal(store.Get(GetBytesFromUInt64(req.NftId)), &nftItem)

	return &types.QueryShowNftItemResponse{NftItem: &nftItem}, nil
}
