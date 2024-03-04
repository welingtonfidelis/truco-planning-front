import { Task } from "./task";
import { User } from "./user";

export interface UserRoom extends User {
  vote?: number | null;
}

export interface Room {
  id: string;
  ownerUserId: string;
  isLoggedUserOwnerRoom: boolean;
  users: UserRoom[];
  showVotes: boolean;
  currentTaskId: string;
  tasks: Task[];
}