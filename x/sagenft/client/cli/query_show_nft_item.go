package cli

import (
	"strconv"

	"blog/x/sagenft/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdShowNftItem() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-nft-item [nft-id]",
		Short: "Query show-nft-item",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqNftId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(reqNftId, 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryShowNftItemRequest{

				NftId: id,
			}

			res, err := queryClient.ShowNftItem(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
