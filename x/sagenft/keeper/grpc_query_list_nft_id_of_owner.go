package keeper

import (
	"context"
	"encoding/binary"

	"blog/x/sagenft/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ListNftIdOfOwner(goCtx context.Context, req *types.QueryListNftIdOfOwnerRequest) (*types.QueryListNftIdOfOwnerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var nftIdList []uint64

	nftItemStore := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.OwnerOfNftKey))
	accountStore := prefix.NewStore(nftItemStore, []byte(req.OwnerAddress))

	pageRes, err := query.Paginate(accountStore, req.Pagination, func(key []byte, value []byte) error {

		// key : nft ID
		// value : count (always set 1)

		id := GetUInt64FromBytes(key)

		nftIdList = append(nftIdList, id)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryListNftIdOfOwnerResponse{NftIdList: nftIdList, Pagination: pageRes}, nil
}

func GetIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
