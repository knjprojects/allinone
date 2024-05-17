"use server"; //this file is progra,mmed to use server actions with tanstack/query
//not the original way of using server actions intended by nextjs, but may be much better

//const data:any = await req.json();

// console.log('Getting ' +JSON.stringify(data) +' in the signup route')
//console.log(data.username)
/*try {
    const postData = { username: data.username, password: data.password }; // Replace with actual data
    const response = await fetch('https://workoutplannerbackend.onrender.com/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(postData),
    });
  
    if (!response.ok || response.status==400  || response.status==404  || response.status==500) {
        //throw new Error(`Failed to fetch data from the Flask server. Status code: ${response.status}`);
        return { error: 'An error occurred while fetching data from the Flask server.' };
      }
  
    const jsondata = await response.json();
    console.log(JSON.stringify(jsondata))
    return jsondata;
  } catch (error) {
    return { error: 'An error occurred while fetching data from the Flask server.' };
  }*/
// actions.ts

import axios from "axios";

export const LoginFlaskServer = async (requestData: {
  username: string;
  password: string;
}) => {
  try {
    /*
  const response = await fetch('https://workoutplannerbackend.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(postData),
    }); */
    const response = await axios.post(
      "https://workoutplannerbackend.onrender.com/login",
      requestData
    );
    return { name: response.data };
    //return response.data; // This data will be available where the function is called
  } catch (error) {
    // Handle error
    console.error("Error fetching data:", error);
    throw error;
  }
};
