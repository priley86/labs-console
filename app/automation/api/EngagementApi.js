/**
 * Red Hat Open Innovation Labs API
 * A generic model to support automation at all levels of the application and infrastructure lifecycle.
 *
 * OpenAPI spec version: 0.3.0-alpha
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Engagement', 'model/ErrorModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Engagement'), require('../model/ErrorModel'));
  } else {
    // Browser globals (root is window)
    if (!root.RedHatOpenInnovationLabsApi) {
      root.RedHatOpenInnovationLabsApi = {};
    }
    root.RedHatOpenInnovationLabsApi.EngagementApi = factory(root.RedHatOpenInnovationLabsApi.ApiClient, root.RedHatOpenInnovationLabsApi.Engagement, root.RedHatOpenInnovationLabsApi.ErrorModel);
  }
}(this, function(ApiClient, Engagement, ErrorModel) {
  'use strict';

  /**
   * Engagement service.
   * @module api/EngagementApi
   * @version 0.3.0-alpha
   */

  /**
   * Constructs a new EngagementApi.
   * @alias module:api/EngagementApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addEngagement operation.
     * @callback module:api/EngagementApi~addEngagementCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new engagement
     *
     * @param {Object} opts Optional parameters
     * @param {module:model/Engagement} opts.body Engagement object that needs to be added to the store
     * @param {module:api/EngagementApi~addEngagementCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addEngagement = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/engagements', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteEngagement operation.
     * @callback module:api/EngagementApi~deleteEngagementCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an engagement
     *
     * @param {Number} id Engagement id to delete
     * @param {module:api/EngagementApi~deleteEngagementCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteEngagement = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteEngagement");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/engagements/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the engagementsGet operation.
     * @callback module:api/EngagementApi~engagementsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Engagement>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets &#x60;Engagement&#x60; objects. Optional query param of **size** determines size of returned array
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size number of results to return
     * @param {Number} opts.offset offset in list
     * @param {module:api/EngagementApi~engagementsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Engagement>}
     */
    this.engagementsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'size': opts['size'],
        'offset': opts['offset']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [Engagement];

      return this.apiClient.callApi(
        '/engagements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the engagementsIdGet operation.
     * @callback module:api/EngagementApi~engagementsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Engagement} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets an &#x60;Engagement&#x60; object by ID.
     * @param {Number} id Engagement ID
     * @param {module:api/EngagementApi~engagementsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Engagement}
     */
    this.engagementsIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling engagementsIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Engagement;

      return this.apiClient.callApi(
        '/engagements/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEngagement operation.
     * @callback module:api/EngagementApi~updateEngagementCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing engagement
     *
     * @param {Number} id Engagement ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Engagement} opts.body Engagement object that needs to be updated in the store
     * @param {module:api/EngagementApi~updateEngagementCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateEngagement = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateEngagement");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/engagements/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
