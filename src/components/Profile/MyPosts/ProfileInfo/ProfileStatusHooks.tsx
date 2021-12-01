import React, {useState} from "react";
type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}
export const ProfileStatusHooks = (props: ProfileStatusPropsType) => {
    const [editableMode, setEditableMod] = useState(false)
    const [status, setStatus] = useState('')
    const onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>

            {!editableMode ?
                <span onDoubleClick={() => setEditableMod(true)}>Status:{props.status}</span> :
                <input
                    autoFocus={true}
                    value={status}
                    onChange={onChangeStatus}
                    onBlur={() => {
                        props.updateStatus(status)
                        setEditableMod(false)
                    }}/>}
        </div>
    )
}