import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {

  model () {
    return this.store.findAll('organisation', {
      include: [,
        'members',
        'projects',,
        'projects.members',
        'projects.nodes',
        'projects.nodes.parent-nodes',
        'projects.nodes.child-nodes',
        'projects.nodes.child-nodes.child-nodes',
        'projects.nodes.child-nodes.child-nodes.child-nodes',
        'projects.nodes.child-nodes.child-nodes.child-nodes.child-nodes',
        'projects.nodes.child-nodes.child-nodes.child-nodes.child-nodes.child-nodes',
        // JSON:API can't handle deeply nested / recursive objects, so 5 is this demo's limit.
      ].join()
    })
  }
}
