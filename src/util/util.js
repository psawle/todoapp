
export const setCurrentUser = (currentUser) => {
    const currentUSer = localStorage.setItem("currentUser", JSON.stringify(currentUser));
    return currentUSer;
}

export const setUserDataList = (existingUserData,userDataObj) => {
    const userListData = localStorage.setItem( "userData", JSON.stringify([...existingUserData, userDataObj]) );
    return userListData;
}

export const getUserDataList = () => {
    const UserDataList = JSON.parse(localStorage.getItem("userData"));
    return UserDataList;
}