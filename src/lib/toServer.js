import axios from 'axios';

const kUrl = 'http://13.124.209.117';

export function SaveTimeTable(timeTableData){

    return axios.post(`${kUrl}/api/v1/timetable/save`, timeTableData);
}

export function GetTimeTableList(access_token){

    return axios.get(`${kUrl}/api/v1/history?kakaoId=${access_token}`);
}
