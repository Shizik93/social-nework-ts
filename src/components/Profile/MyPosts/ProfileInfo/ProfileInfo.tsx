import React from "react";
import m from './ProfileInfo.module.css'

function ProfileInfo () {
  return (

    <div>
      <div>
        <img className={m.img}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'/>
      </div>
      <div className={m.descriptionBlock}>
        Ava+description
      </div>


    </div>
  )
}
export default ProfileInfo