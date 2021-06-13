
export const authenticationChanged = ({ prop, value }) => {

    return {

    type: "AUTHENTICATION_UPDATED_INFO",
    payload: { prop,value }
    }
   
};


