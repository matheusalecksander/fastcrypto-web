import axios from "axios";

export const api = axios.create({

  // Creating axios conection with the nomics_api

  baseURL: `https://api.nomics.com/v1`
})