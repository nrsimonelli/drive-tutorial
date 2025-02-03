"use client"

import { useState } from "react"
import { ChevronRight, Folder, File, Upload, Trash2 } from "lucide-react"
import { mockData, type Folder as FolderType, type File as FileType } from '../mockData'
import { Button } from "~/components/ui/button"

export default function GoogleDriveClone() {
  const [currentFolder, setCurrentFolder] = useState<FolderType>(mockData[0]!)
  const [breadcrumbs, setBreadcrumbs] = useState<FolderType[]>([mockData[0]] as FolderType[])

  const navigateToFolder = (folder: FileType) => {
    const newFolder = mockData.find((f) => f.id === folder.id)
    if (newFolder) {
      setCurrentFolder(newFolder)
      setBreadcrumbs([...breadcrumbs, newFolder])
    }
  }

  const navigateToBreadcrumb = (index: number) => {
    const newBreadcrumbs = breadcrumbs.slice(0, index + 1)
    setCurrentFolder(newBreadcrumbs[newBreadcrumbs.length - 1]!)
    setBreadcrumbs(newBreadcrumbs)
  }

  const handleUpload = () => {
    alert("Upload functionality would be implemented here")
  }

  const handleDelete = (item: FileType) => {
    alert(`Delete functionality for ${item.name} would be implemented here`)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Google Drive Clone</h1>

      {/* Breadcrumbs */}
      <div className="flex items-center mb-4">
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.id} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
            <button onClick={() => navigateToBreadcrumb(index)} className="text-blue-500 hover:underline">
              {crumb.name}
            </button>
          </div>
        ))}
      </div>

      {/* Upload button */}
      <Button onClick={handleUpload} className="mb-4">
        <Upload className="w-4 h-4 mr-2" />
        Upload
      </Button>

      {/* File and folder list */}
      <div className="grid gap-4">
        {currentFolder.files.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => (item.type === "folder" ? navigateToFolder(item) : null)}
            >
              {item.type === "folder" ? (
                <Folder className="w-6 h-6 mr-2 text-yellow-500" />
              ) : (
                <File className="w-6 h-6 mr-2 text-gray-500" />
              )}
              {item.type === "file" ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {item.name}
                </a>
              ) : (
                <span>{item.name}</span>
              )}
            </div>
            <div className="flex items-center">
              {item.size && <span className="text-sm text-gray-500 mr-4">{item.size}</span>}
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation()
                  handleDelete(item)
                }}
              >
                <Trash2 className="w-4 h-4 text-red-500" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
