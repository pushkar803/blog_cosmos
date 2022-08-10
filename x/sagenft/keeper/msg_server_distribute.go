package keeper

import (
	"context"
	"strconv"
	"strings"

	"blog/x/sagenft/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Distribute(goCtx context.Context, msg *types.MsgDistribute) (*types.MsgDistributeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	nftIds_arr := strings.Split(msg.NftIds, ",")
	toAddresses_arr := strings.Split(msg.ToAddresses, ",")

	for i, toAddresses := range toAddresses_arr {

		nft_id_int, err := strconv.ParseUint(nftIds_arr[i], 10, 64)
		if err != nil {
			break
		}

		if !k.HasNftItem(ctx, nft_id_int) {
			continue
		}

		item := k.GetNftItem(ctx, nft_id_int)

		if msg.Creator != item.Owner {
			continue
		}

		oldOwner := item.Owner
		newOwnder := toAddresses

		item.Owner = newOwnder

		k.SetNftItem(ctx, item)
		k.RemoveNftItemToAccount(ctx, oldOwner, nft_id_int)

	}

	return &types.MsgDistributeResponse{Status: "success"}, nil
}
