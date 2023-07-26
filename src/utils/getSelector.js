
export const AUTH_STATE = "auth";
export const getSelector = (state, selector) => {
    switch (state) {
        case AUTH_STATE:
            return selector(state => state.auth)
    }
}
export const getFeatureMonth = () => {
    const months = [];
    const currentMonth = new Date().getMonth() + 1;
    for (let i = 1; i <= 12; i++) {
        if (i >= currentMonth) {
            let text = getTextOfMonth(i)
            months.push({month: i, text})
        }
    }
    return months;
}
export const isTrue = (ratio, total) => {
    const num = Math.floor(Math.random() * total);
    return ratio > num;
}
export const getDateOfWeek = (date, month) => {
    const currentDate = new Date(2023, month, date);
    switch (currentDate.getDay()) {
        case 1:
            return 'Mon';
        case 2:
            return 'Tue';
        case 3:
            return 'Wed';
        case 4:
            return 'Thu';
        case 5:
            return 'Fri';
        case 6:
            return 'Sat';
        case 7:
            return 'Sun';
    }
}
export const getTextOfMonth = (month) => {
    switch (month) {
        case 1:
            return 'Jan';
        case 2:
            return 'Feb';
        case 3:
            return 'Mat';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'Ang';
        case 9:
            return 'Sep';
        case 10:
            return 'Oct';
        case 11:
            return 'Nov';
        case 12:
            return 'Dec'
    }
}