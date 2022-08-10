package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgDistribute = "distribute"

var _ sdk.Msg = &MsgDistribute{}

func NewMsgDistribute(creator string, nftIds string, toAddresses string) *MsgDistribute {
	return &MsgDistribute{
		Creator:     creator,
		NftIds:      nftIds,
		ToAddresses: toAddresses,
	}
}

func (msg *MsgDistribute) Route() string {
	return RouterKey
}

func (msg *MsgDistribute) Type() string {
	return TypeMsgDistribute
}

func (msg *MsgDistribute) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDistribute) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDistribute) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
