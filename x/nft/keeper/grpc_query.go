package keeper

import (
	"blog/x/nft/types"
)

var _ types.QueryServer = Keeper{}
