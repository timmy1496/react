import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";
import {useState} from "react";

const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false);

    if (Object.keys(props.profile).length === 0 && props.profile.constructor === Object) {
        return  (
            <Preloader/>
        );
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const activateEditMode = () => {
        setEditMode(!editMode);
    };

    return (
        <div>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt=""/>
            </div>
            {editMode ? <ProfileDataForm/> : <ProfileData
                {...props}
                onMainPhotoSelected={onMainPhotoSelected}
                isOwner={props.isOwner}
                activateEditMode={activateEditMode}/>}
        </div>
    );
}

const ProfileData = (props) => {
  return (
      <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large || userPhoto} alt="" className={s.avatar}/>
          { props.isOwner && <input type="file" onChange={props.onMainPhotoSelected}/> }
          {props.isOwner &&
            <div>
                <button onClick={props.activateEditMode}>Edit</button>
            </div>
          }
          <p>
              fullName: {props.profile.fullName}
          </p>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
          <div>
              <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
          </div>
          { props.profile.lookingForAJob &&
          <div>
              <b>My professional skills:</b> {props.profile.lookingForAJobDescription ? 'yes' : 'no'}
          </div>
          }
          <p>
              userid: {props.profile.userId}
          </p>
          <p>description: {props.profile.aboutMe}</p>
          <div>
              <b>Contacts:</b>
              {Object.keys(props.profile.contacts).map((key) => (
                  <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
              ))}
          </div>
      </div>
  );
};

const ProfileDataForm = () => {
    return (
        <div>
            t
        </div>
    );
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue ? contactValue : '-'}
        </div>
    );
};

export default ProfileInfo;