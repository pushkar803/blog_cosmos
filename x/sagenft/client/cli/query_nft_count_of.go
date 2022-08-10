package cli

import (
	"strconv"

	"blog/x/sagenft/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdNftCountOf() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "nft-count-of [owner-address]",
		Short: "Query nft-count-of",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqOwnerAddress := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryNftCountOfRequest{

				OwnerAddress: reqOwnerAddress,
			}

			res, err := queryClient.NftCountOf(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
