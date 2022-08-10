package keeper

import (
	"context"
	"fmt"

	"blog/x/sagenft/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) NftCountOf(goCtx context.Context, req *types.QueryNftCountOfRequest) (*types.QueryNftCountOfResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OwnerOfNftTotalKey))
	accountStore := prefix.NewStore(store, []byte(req.OwnerAddress))

	fmt.Println("0")
	byteKey := types.KeyPrefix(types.OwnerOfNftTotalKey)
	byteTotal := accountStore.Get(byteKey)

	// Count doesn't exist: no element
	if byteTotal == nil {
		return &types.QueryNftCountOfResponse{Total: uint64(0)}, nil
	}

	count := GetUInt64FromBytes(byteTotal)
	return &types.QueryNftCountOfResponse{Total: uint64(count)}, nil
}
