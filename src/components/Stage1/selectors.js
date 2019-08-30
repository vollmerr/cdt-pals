import { createSelector } from 'reselect';

export const selectDomain = state => state.stage1Reducer;
export const selectProjects = state => selectDomain(state).projects;

export const getVisits = () => createSelector(
  selectProjects,
  projects => Object.values(projects),
);

export const getProjectById = projectId => createSelector(
  selectProjects,
  projects => projects[projectId] || {},
);

export const getExecSponsors = projectId => createSelector(
  selectProjects,
  (projects) => {
    const project = projects[projectId];

    if (project) {
      return project.execSponsors;
    }

    return [];
  },
);
