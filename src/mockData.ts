export interface File {
  id: string
  name: string
  type: "file" | "folder"
  url?: string
  size?: string
}

export interface Folder {
  id: string
  name: string
  files: File[]
}

export const mockData: Folder[] = [
  {
    id: "root",
    name: "My Drive",
    files: [
      { id: "1", name: "Documents", type: "folder" },
      { id: "2", name: "Images", type: "folder" },
      { id: "3", name: "resume.pdf", type: "file", url: "/files/resume.pdf", size: "2.1 MB" },
      { id: "4", name: "notes.txt", type: "file", url: "/files/notes.txt", size: "14 KB" },
    ],
  },
  {
    id: "1",
    name: "Documents",
    files: [
      { id: "5", name: "Work", type: "folder" },
      { id: "6", name: "Personal", type: "folder" },
      { id: "7", name: "report.docx", type: "file", url: "/files/report.docx", size: "1.8 MB" },
    ],
  },
  {
    id: "2",
    name: "Images",
    files: [
      { id: "8", name: "Vacation", type: "folder" },
      { id: "9", name: "profile.jpg", type: "file", url: "/files/profile.jpg", size: "3.2 MB" },
    ],
  },
  {
    id: "5",
    name: "Work",
    files: [{ id: "10", name: "project_plan.xlsx", type: "file", url: "/files/project_plan.xlsx", size: "5.7 MB" }],
  },
  {
    id: "6",
    name: "Personal",
    files: [],
  },
  {
    id: "8",
    name: "Vacation",
    files: [
      { id: "11", name: "beach.jpg", type: "file", url: "/files/beach.jpg", size: "4.5 MB" },
      { id: "12", name: "mountains.jpg", type: "file", url: "/files/mountains.jpg", size: "3.8 MB" },
    ],
  },
]

