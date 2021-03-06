/**
 * Red Hat Open Innovation Labs Console API
 * Specification for interaction between the Labs Console front-end and back-end. Additionally, this API will be used to experiment with new concepts in order to allow the Automation API (https://github.com/rht-labs/automation-api) to remain stable.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: rhc-open-innovation-labs@redhat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(factory) {
  if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ApplicationTemplate'), require('./model/ApplicationTopology'), require('./model/Body'), require('./model/Build'), require('./model/ClaimType'), require('./model/ErrorModel'), require('./model/LabelSelectorTemplate'), require('./model/PVCAssociationTemplate'), require('./model/PersistentVolumeClaimTemplate'), require('./model/Port'), require('./model/ProjectTemplate'), require('./model/RoleBinding'), require('./model/Route'), require('./model/Service'), require('./model/Stage'), require('./model/Job'), require('./model/User'), require('./api/BuildApi'), require('./api/TopologyApi'), require('./api/UserApi'), require('./api/JobApi'));
  }
}(function(ApiClient, ApplicationTemplate, ApplicationTopology, Body, Build, ClaimType, ErrorModel, LabelSelectorTemplate, PVCAssociationTemplate, PersistentVolumeClaimTemplate, Port, ProjectTemplate, RoleBinding, Route, Service, Stage, Job, User, BuildApi, TopologyApi, UserApi, JobApi){
  'use strict';

  /**
   * Specification_for_interaction_between_the_Labs_Console_front_end_and_back_end__Additionally_this_API_will_be_used_to_experiment_with_new_concepts_in_order_to_allow_the_Automation_API__httpsgithub_comrht_labsautomation_api_to_remain_stable_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var RedHatOpenInnovationLabsConsoleApi = require('index'); // See note below*.
   * var xxxSvc = new RedHatOpenInnovationLabsConsoleApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new RedHatOpenInnovationLabsConsoleApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new RedHatOpenInnovationLabsConsoleApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new RedHatOpenInnovationLabsConsoleApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ApplicationTemplate model constructor.
     * @property {module:model/ApplicationTemplate}
     */
    ApplicationTemplate: ApplicationTemplate,
    /**
     * The ApplicationTopology model constructor.
     * @property {module:model/ApplicationTopology}
     */
    ApplicationTopology: ApplicationTopology,
    /**
     * The Body model constructor.
     * @property {module:model/Body}
     */
    Body: Body,
    /**
     * The Build model constructor.
     * @property {module:model/Build}
     */
    Build: Build,
    /**
     * The ClaimType model constructor.
     * @property {module:model/ClaimType}
     */
    ClaimType: ClaimType,
    /**
     * The ErrorModel model constructor.
     * @property {module:model/ErrorModel}
     */
    ErrorModel: ErrorModel,
    /**
     * The LabelSelectorTemplate model constructor.
     * @property {module:model/LabelSelectorTemplate}
     */
    LabelSelectorTemplate: LabelSelectorTemplate,
    /**
     * The PVCAssociationTemplate model constructor.
     * @property {module:model/PVCAssociationTemplate}
     */
    PVCAssociationTemplate: PVCAssociationTemplate,
    /**
     * The PersistentVolumeClaimTemplate model constructor.
     * @property {module:model/PersistentVolumeClaimTemplate}
     */
    PersistentVolumeClaimTemplate: PersistentVolumeClaimTemplate,
    /**
     * The Port model constructor.
     * @property {module:model/Port}
     */
    Port: Port,
    /**
     * The ProjectTemplate model constructor.
     * @property {module:model/ProjectTemplate}
     */
    ProjectTemplate: ProjectTemplate,
    /**
     * The RoleBinding model constructor.
     * @property {module:model/RoleBinding}
     */
    RoleBinding: RoleBinding,
    /**
     * The Route model constructor.
     * @property {module:model/Route}
     */
    Route: Route,
    /**
     * The Service model constructor.
     * @property {module:model/Service}
     */
    Service: Service,
    /**
     * The Stage model constructor.
     * @property {module:model/Stage}
     */
    Stage: Stage,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The BuildApi service constructor.
     * @property {module:api/BuildApi}
     */
    BuildApi: BuildApi,
    /**
     * The TopologyApi service constructor.
     * @property {module:api/TopologyApi}
     */
    TopologyApi: TopologyApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi,
    /**
     * The JobApi service constructor
     * @property {module: api/JobApi}
     */
    JobApi: JobApi
  };

  return exports;
}));
