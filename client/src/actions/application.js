import * as api from "../api"; 

export const extractEmpPosts = async(userId) => { 
   
    try{ 
      const {data} = await api.extractEmpPosts({userId}); 
      return data;
    } catch(error){
      return error?.response?.data;
    }
 }

export const fetchAppn = async (userId) => {
  try {
    const {data} = await api.fetchAppn({userId}); 
    return data;
  } catch (error) {
    return error?.response?.data;
  }
}