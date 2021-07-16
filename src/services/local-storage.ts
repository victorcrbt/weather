import AsyncStorage from '@react-native-async-storage/async-storage';

export const save = async ({ key, data }: { key: string; data: any }) => {
  await AsyncStorage.setItem(key, JSON.stringify(data));
};

export const get = async ({ key }: { key: string }) => {
  const data = await AsyncStorage.getItem(key);

  if (!data) {
    return null;
  }

  return JSON.parse(data);
};

export const remove = async ({ key }: { key: string }) => {
  await AsyncStorage.removeItem(key);
};
