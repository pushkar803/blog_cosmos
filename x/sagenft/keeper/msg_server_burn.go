package keeper

import (
	"context"
	"fmt"

	"blog/x/sagenft/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) Burn(goCtx context.Context, msg *types.MsgBurn) (*types.MsgBurnResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasNftItem(ctx, msg.NftId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.NftId))
	}
	if msg.Creator != k.GetNftItemOwner(ctx, msg.NftId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveNftItem(ctx, msg.NftId)

	k.RemoveNftItemToAccount(ctx, msg.Creator, msg.NftId)

	return &types.MsgBurnResponse{}, nil
}
