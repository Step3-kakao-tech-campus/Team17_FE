import { instance } from './index';

export const walkingStart = (matchingId: number) => {
  return instance.post(`api/walk/start/${matchingId}`);
};

export const walkingEnd = (matchingId: number) => {
  return instance.post(`api/walk/end/${matchingId}`);
};

export const partTimeLocationSave = (postData: {
  matchingId: number;
  location: { lat: number; lng: number };
}) => {
  return instance.post(`api/walkRoad/${postData.matchingId}`, {
    lat: postData.location.lat,
    lng: postData.location.lng,
  });
};

export const dogOwnerLookMap = (matchingId: number) => {
  return instance.get(`api/walkRoad/${matchingId}`);
};

export const walkingStatus = (matchingId: number) => {
  return instance.get(`api/walk/status/${matchingId}`);
};
