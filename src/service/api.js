import axios from 'axios';
const URL = 'http://localhost:8000';
export const addUser = async(data)=>{
    try{
        return await axios.post(`${URL}/add`,data)
    }catch(error){
        console.log("Error while calling addUser api", error);
    }
}

export const getUsers = async () => {
    try {
        const response = await axios.get(`${URL}/all`);

      return response.data; // Return the data directly, not the entire response object
    } catch (error) {
      console.log("Error while calling getUsers API", error);
      throw error; // Rethrow the error to handle it in the caller function
    }
  };
  

export const getUser = async(id)=>{
    
    try{
        
        return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log("Error while calling getUser api",error);
    }
}