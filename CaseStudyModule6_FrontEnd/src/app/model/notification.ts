import {User} from "./user";

export interface Notification {
  id?: number;
  title?: string;
  content?: string;
  url?: string;
  receiver?: User[]
}
