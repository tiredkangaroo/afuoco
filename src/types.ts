export interface Tasklist {
  id: string;
  title: string;
  updated: string;
  task: Task[];
}

export interface Task {
  id: string;
  title: string;
  notes?: string;
  due?: string;
}
