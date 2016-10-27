var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var validate = require('mongoose-validator');
var autoIncrement = require('mongoose-auto-increment');

/**
 * Project Schema
 * @type {mongoose.Schema}
 */
var ProjectSchema = new Schema({
  name: {type: String, required: true},
  type: {type: String },
  apps: { type : Array , "default" : [] },
  persistent_volume_claim_templates: { type : Array , "default" : [] }
});

ProjectSchema.virtual('id').get(function(){
  return this._id;
});

ProjectSchema.set('toJSON', {
  virtuals: true
});
ProjectSchema.plugin(autoIncrement.plugin, 'Project');


/**
 * RoleBindingSchema
 * @type {mongoose.Schema}
 */
var RoleBindingSchema = new Schema({
  user: {type: Object, required: true},
  role: {type: String, required: true}
});

RoleBindingSchema.virtual('id').get(function(){
  return this._id;
});

RoleBindingSchema.set('toJSON', {
  virtuals: true
});

RoleBindingSchema.plugin(autoIncrement.plugin, 'RoleBinding');

/**
 * StageSchema
 * @type {mongoose.Schema}
 */
var StageSchema = new Schema({
  name: {type: String, required: true},
  index: {type: Number },
  project_role_bindings: [RoleBindingSchema],
  application_promoters: []
});

StageSchema.virtual('id').get(function(){
  return this._id;
});

StageSchema.set('toJSON', {
  virtuals: true
});
StageSchema.plugin(autoIncrement.plugin, 'Stage');

/**
 * Topology Schema
 * @type {mongoose.Schema}
 */
var TopologySchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    project_templates: [ProjectSchema],
    promotion_process: [StageSchema]
  },
  {
    //http://mongoosejs.com/docs/guide.html#timestamps
    timestamps: { createdAt: 'datetime_created', updatedAt: 'datetime_modified' },
    //http://mongoosejs.com/docs/guide.html#versionKey
    versionKey: 'version'
  }
);

TopologySchema.virtual('id').get(function(){
  return this._id;
});

TopologySchema.set('toJSON', {
  virtuals: true
});

TopologySchema.plugin(autoIncrement.plugin, 'Topology');
module.exports = mongoose.model('Topology', TopologySchema);