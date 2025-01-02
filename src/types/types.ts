// 타입 정의
export interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export type NotificationType = "info" | "success" | "warning" | "error";

export interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

// AppContext 타입 정의
export interface AppContextType {
  theme: string;
  toggleTheme: () => void;
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  notifications: Notification[];
  addNotification: (message: string, type: Notification["type"]) => void;
  removeNotification: (id: number) => void;
}
