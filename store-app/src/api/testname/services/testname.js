'use strict';

/**
 * testname service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testname.testname');
