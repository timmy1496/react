import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (Object.keys(props.profile).length === 0 && props.profile.constructor === Object) {
        return  (
            <Preloader/>
        );
    }

    return (
        <div>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <p>
                    fullName: {props.profile.fullName}
                </p>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <p>
                    userid: {props.profile.userId}
                </p>
                <img src={props.profile.photos.large} alt=""/>
               <p>description: {props.profile.aboutMe}</p>
                <p>
                    contacts:
                    {Object.keys(props.profile.contacts).map((key) => (
                        props.profile.contacts[key] === null ? '' : <p>{key}: {props.profile.contacts[key]}</p>
                    ))}
                </p>
            </div>
        </div>
    );
}

export default ProfileInfo;