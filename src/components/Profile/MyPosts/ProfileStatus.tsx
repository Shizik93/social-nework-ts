import React, {useState} from "react";


export const ProfileStatus = () => {
    const [editableMode, setEditableMod] = useState(false)
    const [status, setStatus] = useState('')
    const onChangeStatus = (e: any) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div >

            {!editableMode ?
                <span onDoubleClick={()=>setEditableMod(true)}>Status:{status}</span> :
                <input
                    autoFocus={true}
                    value={status}
                    onChange={onChangeStatus}
                    onBlur={() => setEditableMod(false)}/>}
        </div>
    )
}