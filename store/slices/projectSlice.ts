import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

// Định nghĩa kiểu dữ liệu cho Project
export interface Project {
  id: number;
  title: string;
  category: string;
  image: StaticImageData;
  description: string;
  demoLink: string;
  githubLink: string;
}

// Định nghĩa kiểu dữ liệu cho state
interface ProjectState {
  selectedProject: Project | null;
}

const initialState: ProjectState = {
  selectedProject: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setSelectedProject: (state, action: PayloadAction<Project>) => {
      state.selectedProject = action.payload;
    },
    resetSelectedProject: (state) => {
      state.selectedProject = null;
    },
  },
});

export const { setSelectedProject, resetSelectedProject } =
  projectSlice.actions;
export default projectSlice.reducer;
