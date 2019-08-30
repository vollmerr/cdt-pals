// const graph = require('@microsoft/microsoft-graph-client');

const getProjects = async (context, req) => {
  // context.log('context: ', context);
  // context.log('graph: ', graph);

  context.log('JavaScript HTTP trigger function processed a request.');

  // if (req.query.site || (req.body && req.body.site)) {
  //   const siteName = req.query.site || req.body.site;
  //   sp.setup({
  //     sp: {
  //       fetchClientFactory: () => new SPFetchClient(
  //         `${process.env.spTenantUrl}/sites/${siteName}/`,
  //         process.env.spId,
  //         process.env.spSecret,
  //       ),
  //     },
  //   });

  //   // Get the web and all the Lists
  //   const web = await sp.web.select('Title').expand('Lists').get();

  //   context.res = {
  //     // status: 200, /* Defaults to 200 */
  //     body: `All of the lists in the site ${web.Title}: ${web.Lists.map(list => list.Title).join(', ')}`,
  //   };
  // } else {
  //   context.res = {
  //     status: 400,
  //     body: 'Please pass a site on the query string or in the request body',
  //   };
  // }
};

module.exports = getProjects;
