package cli

import (
	"strconv"

	"blog/x/sagenft/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdTransfer() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "transfer [nft-id] [to-address]",
		Short: "Broadcast message transfer",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argToAddress := args[1]

			argNftId, err := strconv.ParseUint(args[0], 10, 64)

			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgTransfer(
				clientCtx.GetFromAddress().String(),
				argNftId,
				argToAddress,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
