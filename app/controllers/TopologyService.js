'use strict';
var Topology = require('../models/Topology');
var common = require('../common/common');

exports.addTopology = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (ApplicationTopology)
  **/
  var newToplogy = new Topology();
  newToplogy.name = args.body.name;
  newToplogy.description = args.body.description || '';
  newToplogy.project_templates = args.body.project_templates || [];
  newToplogy.promotion_process = args.body.promotion_process || [];

  newToplogy.save(function(err, topology) {
    if (err) return common.handleError(res, err);
    return res.json(201, { topology: topology });
  });
};

exports.deleteTopology = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
  // no response value expected for this operation
  // res.end();
  Topology.findByIdAndRemove(args.params.id, function(err) {
    if(err) return res.send(500, err);
    return res.send(200);
  });
};

exports.topologiesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
//     var examples = {};
//   examples['application/json'] = [ {
//   "project_templates" : [ {
//     "name" : "aeiou",
//     "persistent_volume_claim_templates" : [ {
//       "name" : "aeiou",
//       "selector" : {
//         "match_label_templates" : {
//           "key" : "aeiou"
//         }
//       },
//       "id" : 123456789,
//       "storage" : 123456789,
//       "access_modes" : [ "aeiou" ]
//     } ],
//     "id" : 123456789,
//     "apps" : [ {
//       "scm_url" : "aeiou",
//       "base_image_tag" : "aeiou",
//       "environment_variables_templates" : {
//         "key" : "aeiou"
//       },
//       "routes" : [ {
//         "hostname" : "aeiou",
//         "port" : "",
//         "service" : {
//           "name" : "aeiou",
//           "ports" : [ {
//             "target_port" : "",
//             "protocol" : "aeiou",
//             "port" : ""
//           } ]
//         },
//         "route_type" : "aeiou",
//         "name" : "aeiou",
//         "id" : "aeiou"
//       } ],
//       "pvc_association_templates" : [ {
//         "mount_path" : "aeiou",
//         "name_template" : "aeiou",
//         "claim_type" : {
//           "kind" : "aeiou",
//           "name_template" : "aeiou"
//         },
//         "id" : 123456789
//       } ],
//       "base_image" : "aeiou",
//       "scm_ref" : "aeiou",
//       "name" : "aeiou",
//       "label_templates" : {
//         "key" : "aeiou"
//       },
//       "id" : 123456789,
//       "deploy_image_commands" : [ "aeiou" ],
//       "build_application_commands" : [ "aeiou" ],
//       "scm_type" : "aeiou",
//       "build_image_commands" : [ "aeiou" ],
//       "context_dir" : "aeiou",
//       "build_tool" : "aeiou"
//     } ]
//   } ],
//   "promotion_process" : [ {
//     "application_promoters" : [ "aeiou" ],
//     "name" : "aeiou",
//     "index" : 123456789,
//     "id" : 123456789,
//     "project_role_bindings" : [ {
//       "role" : "aeiou",
//       "id" : 123456789,
//       "user" : "aeiou"
//     } ]
//   } ],
//   "datetime_created" : "2000-01-23T04:56:07.000+00:00",
//   "datetime_modified" : "2000-01-23T04:56:07.000+00:00",
//   "id" : 123456789,
//   "version" : 123456789
// } ];
  // if(Object.keys(examples).length > 0) {
  //   res.setHeader('Content-Type', 'application/json');
  //   res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  // }
  // else {
  //   res.end();
  // }

  Topology.find(function (err, topologies) {
    if(err) { return common.handleError(res, err); }
    return res.json(200, topologies);
  });
};

exports.topologiesIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
//     var examples = {};
//   examples['application/json'] = {
//   "name": "Pied Piper",
//   "description": "A Middle-Out Compression Solution Making Data Storage Problems Smaller.",
//   "project_templates" : [ {
//     "name" : "pied-piper-compression",
//     "persistent_volume_claim_templates" : [ {
//       "name" : "aeiou",
//       "selector" : {
//         "match_label_templates" : {
//           "key" : "aeiou"
//         }
//       },
//       "id" : 123456789,
//       "storage" : 123456789,
//       "access_modes" : [ "aeiou" ]
//     } ],
//     "id" : 123456789,
//     "apps" : [ {
//       "scm_url" : "aeiou",
//       "base_image_tag" : "aeiou",
//       "environment_variables_templates" : {
//         "key" : "aeiou"
//       },
//       "routes" : [ {
//         "hostname" : "aeiou",
//         "port" : "",
//         "service" : {
//           "name" : "aeiou",
//           "ports" : [ {
//             "target_port" : "",
//             "protocol" : "aeiou",
//             "port" : ""
//           } ]
//         },
//         "route_type" : "aeiou",
//         "name" : "aeiou",
//         "id" : "aeiou"
//       } ],
//       "pvc_association_templates" : [ {
//         "mount_path" : "aeiou",
//         "name_template" : "aeiou",
//         "claim_type" : {
//           "kind" : "aeiou",
//           "name_template" : "aeiou"
//         },
//         "id" : 123456789
//       } ],
//       "base_image" : "aeiou",
//       "scm_ref" : "aeiou",
//       "name" : "aeiou",
//       "label_templates" : {
//         "key" : "aeiou"
//       },
//       "id" : 123456789,
//       "deploy_image_commands" : [ "aeiou" ],
//       "build_application_commands" : [ "aeiou" ],
//       "scm_type" : "aeiou",
//       "build_image_commands" : [ "aeiou" ],
//       "context_dir" : "aeiou",
//       "build_tool" : "aeiou"
//     } ]
//   } ],
//   "promotion_process" : [ {
//     "application_promoters" : [ "aeiou" ],
//     "name" : "Dev",
//     "index" : 123456789,
//     "id" : 123456789,
//     "project_role_bindings" : [ {
//       "role" : "aeiou",
//       "id" : 123456789,
//       "user" : "aeiou"
//     } ]
//   },
//     {
//       "application_promoters" : [ "aeiou" ],
//       "name" : "UAT",
//       "index" : 123456789,
//       "id" : 123456789,
//       "project_role_bindings" : [
//         {
//         "role" : "aeiou",
//         "id" : 123456789,
//         "user" : "aeiou"
//         },
//         {
//           "role" : "aeiou",
//           "id" : 123456789,
//           "user" : "aeiou"
//         }]
//     }],
//   "datetime_created" : "2000-01-23T04:56:07.000+00:00",
//   "datetime_modified" : "2000-01-23T04:56:07.000+00:00",
//   "id" : 123456789,
//   "version" : 123456789
// };
//   if(Object.keys(examples).length > 0) {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
//   }
//   else {
//     res.end();
//   }

  Topology.findById(args.params.id, function (err, topology) {
    if(err) { return common.handleError(res, err); }
    if(!topology) { return res.send(404); }
    return res.json(topology);
  });
};

exports.updateTopology = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  * body (ApplicationTopology)
  **/
  // no response value expected for this operation
  // res.end();
  Topology.findById(args.params.id, function (err, topology) {
    if(topology) {
      topology.name = args.body.name;
      topology.description = args.body.description || '';
      topology.project_templates = args.body.project_templates || [];
      topology.promotion_process = args.body.promotion_process || [];

      topology.save(function(err) {
        if (err) return common.handleError(res, err);
        res.send(200);
      });
    } else {
      res.send(404);
    }
  });
};

