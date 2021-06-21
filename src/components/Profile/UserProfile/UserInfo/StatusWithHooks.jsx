import React, {useEffect, useState} from 'react';



const Status = (props) => {


    let [editMode,setEditMode] =  useState(false);
    let [status,setStatus] =  useState(props.status);


    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let activateMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
        debugger
        props.updateUserProfileStatus(status)

    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }






return(
    <div>

        {!editMode && <div onClick={activateMode}>{props.status}</div>}
       {editMode && < input onChange={onStatusChange}
                            autoFocus={true}
                            onBlur={deactivateEditMode}
                            value={status}/>}
    </div>
    )



   
}

export default Status;