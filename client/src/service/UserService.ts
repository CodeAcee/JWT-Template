import $api from "../http/index.ts";
import { AxiosResponse } from "axios";
import { IUser } from "../models/IUser.ts";

export default class UserService {
  static async getAllUser(): Promise<AxiosResponse<IUser[]>> {
    return $api.get("/users");
  }
}
