export interface IEntry {
  id: number;
  title: string;
  author: string;
  date: string;
}

export interface IEntryList {
  entries: IEntry[];
  title: string;
}
