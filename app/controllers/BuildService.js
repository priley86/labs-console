'use strict';
var Build = require('../models/Build');
var common = require('../common/common');

exports.addBuild = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Body)
  **/
  // no response value expected for this operation
  var newBuild = new Build();
  newBuild.topology_id = args.body.topology.id;
  newBuild.topology_version = args.body.topology.version;
  newBuild.status = 'started';

  newBuild.save(function(err, build) {
    if (err) return common.handleError(res, err);
    res.json({ build: build });
  });
};

exports.buildsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/
  var examples = {};
  examples['application/json'] = [ {
    "topology_version" : 0,
    "ansible_tower_link" : "http://ansible.com",
    "topology" : {
      "project_templates" : [ {
        "name" : "aeiou",
        "persistent_volume_claim_templates" : [ {
          "name" : "aeiou",
          "selector" : {
            "match_label_templates" : {
              "key" : "aeiou"
            }
          },
          "id" : 123456789,
          "storage" : 123456789,
          "access_modes" : [ "aeiou" ]
        } ],
        "id" : 123456789,
        "apps" : [ {
          "scm_url" : "aeiou",
          "base_image_tag" : "aeiou",
          "environment_variables_templates" : {
            "key" : "aeiou"
          },
          "routes" : [ {
            "hostname" : "aeiou",
            "port" : "",
            "service" : {
              "name" : "aeiou",
              "ports" : [ {
                "target_port" : "",
                "protocol" : "aeiou",
                "port" : ""
              } ]
            },
            "route_type" : "aeiou",
            "name" : "aeiou",
            "id" : "aeiou"
          } ],
          "pvc_association_templates" : [ {
            "mount_path" : "aeiou",
            "name_template" : "aeiou",
            "claim_type" : {
              "kind" : "aeiou",
              "name_template" : "aeiou"
            },
            "id" : 123456789
          } ],
          "base_image" : "aeiou",
          "scm_ref" : "aeiou",
          "name" : "aeiou",
          "label_templates" : {
            "key" : "aeiou"
          },
          "id" : 123456789,
          "deploy_image_commands" : [ "aeiou" ],
          "build_application_commands" : [ "aeiou" ],
          "scm_type" : "aeiou",
          "build_image_commands" : [ "aeiou" ],
          "context_dir" : "aeiou",
          "build_tool" : "aeiou"
        } ]
      } ],
      "promotion_process" : [ {
        "application_promoters" : [ "aeiou" ],
        "name" : "aeiou",
        "index" : 123456789,
        "id" : 123456789,
        "project_role_bindings" : [ {
          "role" : "aeiou",
          "id" : 123456789,
          "user" : "aeiou"
        } ]
      } ],
      "datetime_created" : "2016-10-22T04:56:07.000+00:00",
      "datetime_modified" : "2016-10-22T04:56:07.000+00:00",
      "id" : 123456789,
      "version" : 0,
      "name": "pied-piper-topology",
      "description": "Giving the highest Weissman score known to mankind."
    },
    "datetime_started" : "2016-10-22T04:56:07.000+00:00",
    "id" : 123456789,
    "status" : "success"
  },{
    "topology_version" : 1,
    "ansible_tower_link" : "http://ansible.com",
    "topology" : {
      "project_templates" : [ {
        "name" : "aeiou",
        "persistent_volume_claim_templates" : [ {
          "name" : "aeiou",
          "selector" : {
            "match_label_templates" : {
              "key" : "aeiou"
            }
          },
          "id" : 123456789,
          "storage" : 123456789,
          "access_modes" : [ "aeiou" ]
        } ],
        "id" : 123456789,
        "apps" : [ {
          "scm_url" : "aeiou",
          "base_image_tag" : "aeiou",
          "environment_variables_templates" : {
            "key" : "aeiou"
          },
          "routes" : [ {
            "hostname" : "aeiou",
            "port" : "",
            "service" : {
              "name" : "aeiou",
              "ports" : [ {
                "target_port" : "",
                "protocol" : "aeiou",
                "port" : ""
              } ]
            },
            "route_type" : "aeiou",
            "name" : "aeiou",
            "id" : "aeiou"
          } ],
          "pvc_association_templates" : [ {
            "mount_path" : "aeiou",
            "name_template" : "aeiou",
            "claim_type" : {
              "kind" : "aeiou",
              "name_template" : "aeiou"
            },
            "id" : 123456789
          } ],
          "base_image" : "aeiou",
          "scm_ref" : "aeiou",
          "name" : "aeiou",
          "label_templates" : {
            "key" : "aeiou"
          },
          "id" : 123456789,
          "deploy_image_commands" : [ "aeiou" ],
          "build_application_commands" : [ "aeiou" ],
          "scm_type" : "aeiou",
          "build_image_commands" : [ "aeiou" ],
          "context_dir" : "aeiou",
          "build_tool" : "aeiou"
        } ]
      } ],
      "promotion_process" : [ {
        "application_promoters" : [ "aeiou" ],
        "name" : "aeiou",
        "index" : 123456789,
        "id" : 123456789,
        "project_role_bindings" : [ {
          "role" : "aeiou",
          "id" : 123456789,
          "user" : "aeiou"
        } ]
      } ],
      "datetime_created" : "2016-10-22T04:56:07.000+00:00",
      "datetime_modified" : "2016-10-22T04:56:07.000+00:00",
      "id" : 123456789,
      "version" : 1,
      "name": "hooli-topology",
      "description": "Hooli makes the world a better place."
    },
    "datetime_started" : "2016-10-22T04:56:07.000+00:00",
    "id" : 123456780,
    "status" : "error"
  },
  {
    "topology_version" : 3,
    "ansible_tower_link" : "http://ansible.com",
    "topology" : {
      "project_templates" : [ {
        "name" : "aeiou",
        "persistent_volume_claim_templates" : [ {
          "name" : "aeiou",
          "selector" : {
            "match_label_templates" : {
              "key" : "aeiou"
            }
          },
          "id" : 123456789,
          "storage" : 123456789,
          "access_modes" : [ "aeiou" ]
        } ],
        "id" : 123456789,
        "apps" : [ {
          "scm_url" : "aeiou",
          "base_image_tag" : "aeiou",
          "environment_variables_templates" : {
            "key" : "aeiou"
          },
          "routes" : [ {
            "hostname" : "aeiou",
            "port" : "",
            "service" : {
              "name" : "aeiou",
              "ports" : [ {
                "target_port" : "",
                "protocol" : "aeiou",
                "port" : ""
              } ]
            },
            "route_type" : "aeiou",
            "name" : "aeiou",
            "id" : "aeiou"
          } ],
          "pvc_association_templates" : [ {
            "mount_path" : "aeiou",
            "name_template" : "aeiou",
            "claim_type" : {
              "kind" : "aeiou",
              "name_template" : "aeiou"
            },
            "id" : 123456789
          } ],
          "base_image" : "aeiou",
          "scm_ref" : "aeiou",
          "name" : "aeiou",
          "label_templates" : {
            "key" : "aeiou"
          },
          "id" : 123456789,
          "deploy_image_commands" : [ "aeiou" ],
          "build_application_commands" : [ "aeiou" ],
          "scm_type" : "aeiou",
          "build_image_commands" : [ "aeiou" ],
          "context_dir" : "aeiou",
          "build_tool" : "aeiou"
        } ]
      } ],
      "promotion_process" : [ {
        "application_promoters" : [ "aeiou" ],
        "name" : "aeiou",
        "index" : 123456789,
        "id" : 123456789,
        "project_role_bindings" : [ {
          "role" : "aeiou",
          "id" : 123456789,
          "user" : "aeiou"
        } ]
      } ],
      "datetime_created" : "2016-10-22T04:56:07.000+00:00",
      "datetime_modified" : "2016-10-22T04:56:07.000+00:00",
      "id" : 123456789,
      "version" : 1,
      "name": "raviga-topology",
      "description": "We not only think outside the box, we think outside of the box that box is in."
    },
    "datetime_started" : "2016-10-22T04:56:07.000+00:00",
    "id" : 123456780,
    "status" : "started"
  }
  ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  // Build.find()
  //   .populate('topology')
  //   .limit(20)
  //   .sort({ datetime_started: -1 })
  //   .exec(function (err, builds) {
  //     if(err) { return common.handleError(res, err); }
  //     return res.json(200, builds);
  //   });
};

exports.buildsIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
   * id (Long)
   **/
  // var examples = {};
  // examples['application/json'] = {
  //   "topology_version" : 123456789,
  //   "ansible_tower_link" : "aeiou",
  //   "topology" : {
  //     "project_templates" : [ {
  //       "name" : "aeiou",
  //       "persistent_volume_claim_templates" : [ {
  //         "name" : "aeiou",
  //         "selector" : {
  //           "match_label_templates" : {
  //             "key" : "aeiou"
  //           }
  //         },
  //         "id" : 123456789,
  //         "storage" : 123456789,
  //         "access_modes" : [ "aeiou" ]
  //       } ],
  //       "id" : 123456789,
  //       "apps" : [ {
  //         "scm_url" : "aeiou",
  //         "base_image_tag" : "aeiou",
  //         "environment_variables_templates" : {
  //           "key" : "aeiou"
  //         },
  //         "routes" : [ {
  //           "hostname" : "aeiou",
  //           "port" : "",
  //           "service" : {
  //             "name" : "aeiou",
  //             "ports" : [ {
  //               "target_port" : "",
  //               "protocol" : "aeiou",
  //               "port" : ""
  //             } ]
  //           },
  //           "route_type" : "aeiou",
  //           "name" : "aeiou",
  //           "id" : "aeiou"
  //         } ],
  //         "pvc_association_templates" : [ {
  //           "mount_path" : "aeiou",
  //           "name_template" : "aeiou",
  //           "claim_type" : {
  //             "kind" : "aeiou",
  //             "name_template" : "aeiou"
  //           },
  //           "id" : 123456789
  //         } ],
  //         "base_image" : "aeiou",
  //         "scm_ref" : "aeiou",
  //         "name" : "aeiou",
  //         "label_templates" : {
  //           "key" : "aeiou"
  //         },
  //         "id" : 123456789,
  //         "deploy_image_commands" : [ "aeiou" ],
  //         "build_application_commands" : [ "aeiou" ],
  //         "scm_type" : "aeiou",
  //         "build_image_commands" : [ "aeiou" ],
  //         "context_dir" : "aeiou",
  //         "build_tool" : "aeiou"
  //       } ]
  //     } ],
  //     "promotion_process" : [ {
  //       "application_promoters" : [ "aeiou" ],
  //       "name" : "aeiou",
  //       "index" : 123456789,
  //       "id" : 123456789,
  //       "project_role_bindings" : [ {
  //         "role" : "aeiou",
  //         "id" : 123456789,
  //         "user" : "aeiou"
  //       } ]
  //     } ],
  //     "datetime_created" : "2016-10-22T04:56:07.000+00:00",
  //     "datetime_modified" : "2016-10-22T04:56:07.000+00:00",
  //     "id" : 123456789,
  //     "version" : 123456789
  //   },
  //   "datetime_started" : "2016-10-22T04:56:07.000+00:00",
  //   "id" : 123456789,
  //   "status" : "aeiou"
  // };
  // if(Object.keys(examples).length > 0) {
  //   res.setHeader('Content-Type', 'application/json');
  //   res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  // }
  // else {
  //   res.end();
  // }
  Build.findOne({_id: args.params.id})
    .populate('topology')
    .exec(function (err, builds) {
      if(err) { return common.handleError(res, err); }
      return res.json(200, builds);
    });
};

