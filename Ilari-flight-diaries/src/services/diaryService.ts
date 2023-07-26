import diaries from '../../data/diaries';

import { DiaryEntry, NonSensitiveDiaryEntry } from '../types';

const getEntries = (): DiaryEntry[] => {
    return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility,
    }));
}

const addDiary = () => {
    return null;
};

const findById = (id:number):DiaryEntry | undefined =>{
    return diaries.find(diary => diary.id === id);
}

export default {
    getEntries,
    addDiary,
    getNonSensitiveEntries,
    findById,
};