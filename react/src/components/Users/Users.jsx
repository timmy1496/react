import classes from './Users.module.css';

const Users = (props) => {

    let users = [
        {
            id: 1,
            followed: false,
            fullName: 'Dmitry K.',
            location: {
                country: 'Belarus',
                city: 'Minsk',
            },
            status: 'I am looking for great job now',
            avatar: 'https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_DE/viacom-358518-Full-Image_GalleryBackground-de-DE-1501272675282._V7ea3c5f3b475ec3e9224ddb482756b00_SX1080_.jpg',
        },
        {
            id: 2,
            followed: true,
            fullName: 'Svetlana D.',
            location: {
                country: 'Belarus',
                city: 'Pinsk',
            },
            status: 'I am so pretty',
            avatar: 'https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_DE/viacom-358518-Full-Image_GalleryBackground-de-DE-1501272675282._V7ea3c5f3b475ec3e9224ddb482756b00_SX1080_.jpg',
        },
        {
            id: 3,
            followed: false,
            fullName: 'Sergei S.',
            location: {
                country: 'Ukraine',
                city: 'Kiev',
            },
            status: 'I am the best',
            avatar: 'https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_DE/viacom-358518-Full-Image_GalleryBackground-de-DE-1501272675282._V7ea3c5f3b475ec3e9224ddb482756b00_SX1080_.jpg',
        },
        {
            id: 4,
            followed: false,
            fullName: 'Andrew T.',
            location: {
                country: 'Ukraine',
                city: 'Dnipro',
            },
            status: 'hah. rofl',
            avatar: 'https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_DE/viacom-358518-Full-Image_GalleryBackground-de-DE-1501272675282._V7ea3c5f3b475ec3e9224ddb482756b00_SX1080_.jpg',
        }
    ];

    if (props.users.length === 0) {
        props.setUsers(users);
    }

    const follow = (userID) => {
        props.follow(userID)
    }

    const unfollow = (userID) => {
        props.unfollow(userID)
    }

    return (
        <div className={classes}>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.avatar} alt="" className={classes.avatar}/>
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={ () => unfollow(u.id) }>Unfollow</button> :
                                    <button onClick={ () => follow(u.id) }>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.city}</div>
                                <div>{u.location.country}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    );
}

export default Users;