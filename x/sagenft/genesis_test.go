package sagenft_test

import (
	"testing"

	keepertest "blog/testutil/keeper"
	"blog/testutil/nullify"
	"blog/x/sagenft"
	"blog/x/sagenft/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.SagenftKeeper(t)
	sagenft.InitGenesis(ctx, *k, genesisState)
	got := sagenft.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
