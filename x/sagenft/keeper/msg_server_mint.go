package keeper

import (
	"context"
	"strconv"

	"blog/x/sagenft/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Mint(goCtx context.Context, msg *types.MsgMint) (*types.MsgMintResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var nftItem = types.NftItem{
		Owner:    msg.Creator,
		TokenURI: msg.TokenURI,
	}

	id := k.AppendNftItem(
		ctx,
		nftItem,
	)

	//k.AddNftItemToAccount(ctx, msg.Owner, id)

	// write nftID info to transaction event log
	ctx.EventManager().EmitEvent(sdk.NewEvent(
		sdk.EventTypeMessage,
		sdk.NewAttribute("Owner", msg.Creator),
		sdk.NewAttribute("nftID", strconv.FormatUint(id, 10)),
	))

	return &types.MsgMintResponse{NftId: id}, nil
}
