import axios from 'axios';

    const kUrl = 'http://13.124.209.117';

export function SaveTimeTable(timeTableData){

    return axios.post(`${kUrl}/api/v1/timetable/save`, timeTableData);
}

export function GetTimeTableList(access_token){

    return axios.get(`${kUrl}/api/v1/historyProg?kakaoId=${access_token}`);
}

export function getTimeTableByUrl(url){

    return axios.get(`${kUrl}/api/v1/timetable/find?keyUrl=${url}`);
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

export function SaveTimePickResult(keyUrl, data){

    return axios.post(`${kUrl}/api/v1/timepick/save?keyUrl=${keyUrl}`, data);
}

export function getIntersectionByUrl(url){
    return axios.get(`${kUrl}/api/v1/intersection/find?keyUrl=${url}`);
}
