const sponsorArray = {
  title: {
    name: 'title',
    label: 'Title',
  },
  firstName: {
    name: 'firstName',
    label: 'First Name',
  },
  lastName: {
    name: 'lastName',
    label: 'Last Name',
  },
  programArea: {
    name: 'programArea',
    label: 'Business Program Area',
  },
};

const section1 = {
  orgName: {
    name: 'orgName',
    label: 'Agency or State Entity Name',
  },
  orgCode: {
    name: 'orgCode',
    label: 'Organization Code',
  },
  agencyName: {
    name: 'agencyName',
    label: 'Agency Name',
  },
  agencyCode: {
    name: 'agencyCode',
    label: 'Agency Code',
  },
  projectName: {
    name: 'projectName',
    label: 'Proposal Name',
  },
  projectDesc: {
    name: 'projectDesc',
    label: 'Proposal Description',
    tag: 'textarea',
  },
  projectStartDate: {
    name: 'projectStartDate',
    label: 'Proposed Start Date',
  },
  costThreshold: {
    name: 'costThreshold',
    label: 'Delegated Cost Threshold',
    options: [
      { value: 'Over', label: 'Over' },
      { value: 'Under', label: 'Under' },
    ],
  },
  projectNumber: {
    name: 'projectNumber',
    label: 'Department of Technology Project Number',
  },
};

const section2 = {

};

const section3 = {
  area1: {

  },
  area2: {

  },
};

const section4 = {
  execSponsors: {
    arrayName: 'execSponsors',
    title: 'Executive Sponsors',
    fields: sponsorArray,
  },
  businessOwners: {
    arrayName: 'businessOwners',
    title: 'Business Owners',
    fields: sponsorArray,
  },
  stakeHolders: {
    arrayName: 'stakeHolders',
    title: 'Key Stakeholders',
    fields: sponsorArray,
  },
};

const schema = {
  section1,
  section2,
  section3,
  section4,
};

export default schema;
