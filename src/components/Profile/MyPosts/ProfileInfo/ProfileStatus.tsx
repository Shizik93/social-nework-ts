import React from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        status: this.props.status,
        editableMode: false,


    }
    setEditableMod = (param: boolean) => {
        this.setState({
            editableMode: param
        })

    }
    onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status!=this.props.status){
            this.setState({
                status:this.props.status
            })
        }
}

    render() {
        return (
            <div>

                {!this.state.editableMode ?
                    <span onDoubleClick={() => this.setEditableMod(true)}>Status:{this.props.status}</span> :
                    <input
                        autoFocus={true}
                        value={this.state.status}
                        onChange={this.onChangeStatus}
                        onBlur={() => {
                            this.props.updateStatus(this.state.status)
                            this.setEditableMod(false)
                        }}/>}
            </div>
        )
    }
}