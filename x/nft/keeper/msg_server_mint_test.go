package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	"blog/x/nft/types"
)

func TestNftItemMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	tokenURI := "https://ddd.org"

	for i := 0; i < 5; i++ {
		resp, err := srv.Mint(ctx, &types.MsgMint{Owner: creator, TokenURI: tokenURI})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.NftId))
	}
}
