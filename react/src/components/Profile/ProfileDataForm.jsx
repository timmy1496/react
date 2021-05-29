import s from "./Profileinfo/ProfileInfo.module.css";
import userPhoto from "../../assets/images/user.jpg";
import ProfileStatusWithHooks from "./Profileinfo/ProfileStatusWithHooks";
import {createField, Input, Textarea} from "../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../common/FormsControls/FormsControl.module.css";

const ProfileDataForm = (props) => {
    return (
        <div>
             <form className={s.descriptionBlock} onSubmit={props.handleSubmit}>
                 {props.error && <div className={style.formSummaryError}>{props.error}</div>}
                 <img src={props.profile.photos.large || userPhoto} alt="" className={s.avatar}/>
                 {props.isOwner && <input type="file" onChange={props.onMainPhotoSelected}/>}
                 {props.isOwner &&
                 <div>
                     <button>save</button>
                 </div>
                 }
                 <p>
                     fullName: {createField(Input, 'fullName', 'Full Name', [])}
                 </p>
                 <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                 <div>
                     <b>Looking for a job:</b>
                     {createField(Input, 'lookingForAJob', '', [], {type: 'checkbox'})}
                 </div>
                 <div>
                     <b>My professional skills:</b>
                     {createField(Textarea, 'lookingForAJobDescription', 'My professional skills', [])}
                 </div>
                 <p>
                     userid: {props.profile.userId}
                 </p>
                 <p>
                     description: {props.profile.aboutMe}
                     {createField(Textarea, 'aboutMe', 'About me', [])}
                 </p>
                 <div>
                     <b>Contacts:</b>
                     {Object.keys(props.profile.contacts).map((key) => (
                         <div className={s.contact} key={key}>
                             <b>{key}</b>:
                             {createField(Input, `contacts.${key}`, '', [])}
                         </div>
                     ))}
                 </div>
             </form>
        </div>
    );
}

const ProfileDataReduxForm = reduxForm({
    form: 'editProfile'
})(ProfileDataForm);

export default ProfileDataReduxForm;