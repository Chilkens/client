import axios from 'axios';

const kUrl = 'http://13.124.209.117';

export function saveTimeTable(timeTableData){

    return axios.post(`${kUrl}/api/v1/timetable/save`, timeTableData);
}

export function getTimeTableList(){

    return axios.get(`${kUrl}/api/v1/timetable`);
}
