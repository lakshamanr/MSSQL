export interface User {
  id: string;
  userName: string;
  fullName?: string;
  email: string;
  jobTitle?: string;
  phoneNumber?: string;
  configuration?: string;
  isEnabled: boolean;
  isLockedOut: boolean;
  roles?: string[];
}
