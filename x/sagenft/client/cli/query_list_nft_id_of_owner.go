package cli

import (
	"strconv"

	"blog/x/sagenft/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdListNftIdOfOwner() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-nft-id-of-owner [owner-address]",
		Short: "Query list-nft-id-of-owner",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqOwnerAddress := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryListNftIdOfOwnerRequest{

				OwnerAddress: reqOwnerAddress,
			}

			res, err := queryClient.ListNftIdOfOwner(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
