import diaries from '../../data/diaries';

import { 
    DiaryEntry, 
    NonSensitiveDiaryEntry,
    NewDiaryEntry,
} from '../types';

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
};

const addDiary = (entry: NewDiaryEntry):DiaryEntry =>{
    const newDiaryEntry = {
        id : Math.max(...diaries.map(diary => diary.id))+1,
        ...entry,
    };
    diaries.push(newDiaryEntry);
    return newDiaryEntry;
};

const findById = (id:number):DiaryEntry | undefined =>{
    return diaries.find(diary => diary.id === id);
};

export default {
    getEntries,
    addDiary,
    getNonSensitiveEntries,
    findById,
};