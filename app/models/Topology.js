var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var validate = require('mongoose-validator');
var autoIncrement = require('mongoose-auto-increment');

var TopologySchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    project_templates: {type: [Object]},
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