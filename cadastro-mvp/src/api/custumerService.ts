import axiosInstance from './axiosConfig';
import { Custumer, CustumerPostSchema, CustumerDeleteSchema } from './types';

export const getCustumers = async (): Promise<Custumer[]> => {
  try {
    const response = await axiosInstance.get<Custumer[]>('/custumers');
    return response.data;
  } catch (error) {
    console.error("There was an error getting the customers!", error);
    throw error;
  }
};

export const createCustumer = async (custumerData: CustumerPostSchema): Promise<Custumer> => {
  try {
    const response = await axiosInstance.post<Custumer>('/custumers', custumerData);
    console.log(response.data)
    return response.data;


  } catch (error) {
    console.error("There was an error creating the customer!", error);
    throw error;
  }
};

export const updateCustumer = async (custumerData: CustumerPostSchema): Promise<Custumer> => {
  try {
    const response = await axiosInstance.put<Custumer>('/custumers', custumerData);
    return response.data;
  } catch (error) {
    console.error("There was an error updating the customer!", error);
    throw error;
  }
};

export const deleteCustumer = async (custumerData: CustumerDeleteSchema): Promise<{ message: string }> => {
  try {
    const response = await axiosInstance.delete<{ message: string }>('/custumers', { data: custumerData });
    return response.data;
  } catch (error) {
    console.error("There was an error deleting the customer!", error);
    throw error;
  }
};
