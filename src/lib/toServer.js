import axios from 'axios';

const kUrl = 'http://13.124.209.117';

export function SaveTimeTable(timeTableData){

    return axios.post(`${kUrl}/api/v1/timetable/save`, timeTableData);
}

export function GetTimeTableList(access_token){

    return axios.get(`${kUrl}/api/v1/historyFin?kakaoId=${access_token}`);
}

export function getTimeTableByUrl(url){

    return axios.get(`${kUrl}/api/v1/timetable/select/${url}`);
}

export function getKaKaoProfile(access_token){

    const authOptions = {
        method : 'GET',
        url : 'https://kapi.kakao.com/v1/user/me',
        headers: {
        'Authorization': 'Bearer ' + access_token,
        'Content-Type': 'application/x-www-form-urlencoded'
        },
    };
    return axios(authOptions);
}
