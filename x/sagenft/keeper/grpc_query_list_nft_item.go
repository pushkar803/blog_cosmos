package keeper

import (
	"context"

	"blog/x/sagenft/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ListNftItem(goCtx context.Context, req *types.QueryListNftItemRequest) (*types.QueryListNftItemResponse, error) {

	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var nftItems []*types.NftItem
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	nftItemStore := prefix.NewStore(store, types.KeyPrefix(types.NftItemDataKey))

	pageRes, err := query.Paginate(nftItemStore, req.Pagination, func(key []byte, value []byte) error {
		var nftItem types.NftItem
		if err := k.cdc.Unmarshal(value, &nftItem); err != nil {
			return err
		}

		nftItems = append(nftItems, &nftItem)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryListNftItemResponse{NftItem: nftItems, Pagination: pageRes}, nil
}
