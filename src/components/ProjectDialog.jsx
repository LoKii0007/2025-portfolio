import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import React from "react";

export const ProjectDialog = ({ project, open, onOpenChange }) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <img
            src={`/${project.desktopImage}`}
            alt={project.name}
            className="w-full h-auto rounded-lg object-cover"
          />
          {project.points && project.points.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {project.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}
          {project.link && (
            <div className="pt-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 underline text-sm"
              >
                Visit Project →
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
