'use strict';

import {classMentors} from '../module.js';

/**
 * Label paths - to be used by each component to configure their route.
 *
 * See src/app/components/events for example.
 *
 */
classMentors.constant('routes', {
  //home: '/events',
  home: '/events',
  aceOfCoders: '/ace-of-coders',
  events: '/events',
  newEvent: '/new-event',
  oneEvent: '/events/:eventId',
  editEvent: '/events/:eventId/edit',
  editEventTask: '/events/:eventId/task/:taskId',
  addEventTask: '/events/:eventId/new-task',
  profile: '/profile/:publicId',
  editProfile: '/profile/',
  setProfileCodeCombatId: '/profile/codeCombat'
});
