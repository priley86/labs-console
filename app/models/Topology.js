var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var validate = require('mongoose-validator');
var autoIncrement = require('mongoose-auto-increment');

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


var TopologySchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    project_templates: [ProjectSchema],
    promotion_process: {type: [Object]}
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