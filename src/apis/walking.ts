import { instance } from './index';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const walkingStart = (matchingId: number) => {
  return instance.post(`${BASE_URL}/api/walk/${matchingId}`);
};

export const walkingEnd = (matchingId: number) => {
  return instance.post(`${BASE_URL}/api/walk/end/${matchingId}`);
};

export const partTimeLocationSave = (postData: {
  matchingId: number;
  location: { lat: number; lng: number };
}) => {
  return instance.post(
    `${BASE_URL}/api/walk/walkRoad/${postData.matchingId}`,
    postData.location,
  );
};

export const dogOwnerLookMap = (matchingId: number) => {
  return instance.get(`${BASE_URL}/api/walk/walkRoad/${matchingId}`);
};
