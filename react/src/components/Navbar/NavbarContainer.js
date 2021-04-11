import Navbar from "./Navbar";
import {connect} from "react-redux";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";

// const NavbarContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//
//                     return <Navbar state={state}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        state: state.sideBar,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {};
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;