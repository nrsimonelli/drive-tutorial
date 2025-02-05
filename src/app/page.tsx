"use client";

import { useMemo, useState } from "react";
import { ChevronRight, Folder, File, Upload, Trash2 } from "lucide-react";
import {
  mockFolders,
  mockFiles,
  type Folder as FolderType,
  type File as FileType,
} from "../mockData";
import { Button } from "~/components/ui/button";
import { FileRow, FolderRow } from "./file-row";

export default function GoogleDriveClone() {
  const [currentFolder, setCurrentFolder] = useState<string>("root");
  // const [breadcrumbs, setBreadcrumbs] = useState<FolderType[]>([mockData[0]] as FolderType[])

  const getCurrentFiles = () => {
    return mockFiles.filter((file) => file.parent === currentFolder);
  };
  const getCurrentFolders = () => {
    return mockFolders.filter((folder) => folder.parent === currentFolder);
  };
  const handleFolderClick = (folderId: string) => {
    setCurrentFolder(folderId);
  };

  const breadcrumbs = useMemo(() => {
    const breadcrumbs = [];
    let currentId = currentFolder;

    while (currentId !== "root") {
      const folder = mockFolders.find((file) => file.id === currentId);
      if (folder) {
        breadcrumbs.unshift(folder);
        currentId = folder.parent ?? "root";
      } else {
        break;
      }
    }
    return breadcrumbs;
  }, [currentFolder]);

  const handleUpload = () => {
    alert("Upload functionality would be implemented here");
  };

  const handleDelete = (item: FileType) => {
    alert(`Delete functionality for ${item.name} would be implemented here`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Google Drive Clone</h1>

      {/* Breadcrumbs */}
      <div className="mb-4 flex items-center">
        <div className="flex items-center">
          <button
            onClick={() => handleFolderClick("root")}
            className="text-blue-500 hover:underline"
          >
            Root
          </button>
        </div>
        {breadcrumbs.length > 0 && <ChevronRight className="mx-2 h-4 w-4" />}

        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.id} className="flex items-center">
            {index > 0 && <ChevronRight className="mx-2 h-4 w-4" />}
            <button
              onClick={() => handleFolderClick(crumb.id)}
              className="text-blue-500 hover:underline"
            >
              {crumb.name}
            </button>
          </div>
        ))}
      </div>

      {/* Upload button */}
      <Button onClick={handleUpload} className="mb-4">
        <Upload className="mr-2 h-4 w-4" />
        Upload
      </Button>

      {/* File and folder list */}
      <div className="grid gap-4">
        {getCurrentFolders().map((folder) => (
          <FolderRow
            key={folder.id}
            folder={folder}
            handleFolderClick={() => handleFolderClick(folder.id)}
          />
        ))}
        {getCurrentFiles().map((file) => (
          <FileRow key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
}
