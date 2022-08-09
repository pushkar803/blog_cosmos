package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgStartDistribution = "start_distribution"

var _ sdk.Msg = &MsgStartDistribution{}

func NewMsgStartDistribution(creator string, uris string, keys string) *MsgStartDistribution {
	return &MsgStartDistribution{
		Creator: creator,
		Uris:    uris,
		Keys:    keys,
	}
}

func (msg *MsgStartDistribution) Route() string {
	return RouterKey
}

func (msg *MsgStartDistribution) Type() string {
	return TypeMsgStartDistribution
}

func (msg *MsgStartDistribution) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgStartDistribution) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgStartDistribution) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
