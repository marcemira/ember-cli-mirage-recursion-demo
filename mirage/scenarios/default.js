export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);

  /**
   * Let's start by creating some organisations, these would be
   * our base to start feeding this scenario's data */
  const organisations = server.createList('organisation', 3);

  for (const organisation of organisations) {
    /**
     * Let's create 5 users per organisation, these would be the ones
     * we'll use to bind to projects and nodes */
    let users = server.createList('user', 5);

    /**
     * We'll use the inverse relationship strategy, by making the user *belongTo*
     * this organisation, organisation.members collection should be automatically be updated */
    users = users.map(user => user.update('organisation', organisation));

    /**
     * We'll randomly chose one of the members as the creator */
    organisation.update('createdBy', organisation.members.models[getRandom(organisation.members.length - 1)]);

    /**
     * Now let's create a random amount of max 10 projects (but at least 1) for this organisation */
    const projects = server.createList('project', getRandom(4) || 1);

    /**
     * We'll use the inverse relationship strategy again, by adding this organisation on random users,
     * organisation.members collection should be automatically be updated */
    for (const projectUser of users) {
      if (getRandom(4)) {
        projectUser.update('projects', [...projectUser.projects.models, projects[getRandom(projects.length - 1)]]);
      }
    }

    for (const project of projects) {
      /**
       * Let's make sure we have at least one creator user,
       * then by using the inverse strategy again, we'll make sure
       * this user is a member on this project */
      let creator = users[getRandom(users.length -1)];
      project.update('createdBy', creator);
      creator.update('projects', [...creator.projects.models, project]);

      /**
       * Now, let's create some random nodes for this project */
      let nodes = server.createList('node', getRandom(2) || 1, {
        parentNode: null,
        createdBy: getRandomProjectMember(project)
      });

      /**
       * And for my last trick, some random recessiveness.
       * There's a chance of getting a lot of deeply nested nodes,
       * we only display up to 4 nested nodes because of JSON:API.
       * *** THIS IS BY NO MEANS PRODUCTION OPTIMIZED CODE *** */
      nodes = generateNodeRecursion(nodes, project, server);

      /**
       * Updated the project with the entire node tree */
      project.update('nodes', nodes);

      /**
       * Updated the organization with the updated projects */
      organisation.update('projects', [...organisation.projects.models, project])
    }
  }
}

function getRandom (max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomProjectMember(project) {
  return project.members.models[getRandom(project.members.length)]
}

function generateNodeRecursion (nodes, project, server) {
  for (const node of nodes) {
    const randomAmount = getRandom(4);

    if (randomAmount) {
      let childNodes = server.createList('node', randomAmount, {
        parentNode: node,
        createdBy: getRandomProjectMember(project)
      });

      if (getRandom(2)) {
        childNodes = generateNodeRecursion(childNodes, project, server);
      }

      node.update('childNodes', childNodes);
    }
  }

  return nodes
}
