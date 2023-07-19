export const AUTH_STATE = "auth";
export const getSelector = (state, selector) => {
    switch (state) {
        case AUTH_STATE:
            return selector(state => state.auth)
    }
}