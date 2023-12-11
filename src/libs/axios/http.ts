import env from "@/configs/env";
import axios from "axios";

export default axios.create({
  baseURL: env.BASE_API_URL,
});