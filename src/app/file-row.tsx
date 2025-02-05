import { File as FileType, Folder as FolderType } from "../mockData";
import { ChevronRight, Folder, File, Trash2 } from "lucide-react";
import { Button } from "~/components/ui/button";

export const FileRow = ({ file }: { file: FileType }) => {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-100">
      <div className="flex cursor-pointer items-center">
        <File className="mr-2 h-6 w-6 text-gray-500" />
        <a
          href={file.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {file.name}
        </a>
      </div>
      <div className="flex items-center">
        {file.size && (
          <span className="mr-4 text-sm text-gray-500">{file.size}</span>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            // handleDelete(item)
          }}
        >
          <Trash2 className="h-4 w-4 text-red-500" />
        </Button>
      </div>
    </div>
  );
};

export const FolderRow = ({
  folder,
  handleFolderClick,
}: {
  folder: FolderType;
  handleFolderClick: () => void;
}) => {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-100">
      <div
        className="flex cursor-pointer items-center"
        onClick={handleFolderClick}
      >
        <Folder className="mr-2 h-6 w-6 text-yellow-500" />

        <span>{folder.name}</span>
      </div>
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            // handleDelete(item);
          }}
        >
          <Trash2 className="h-4 w-4 text-red-500" />
        </Button>
      </div>
    </div>
  );
};
