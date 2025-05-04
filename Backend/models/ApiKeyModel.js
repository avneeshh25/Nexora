const { Schema, model } = require('../connection');

const apiKeySchema = new Schema({
  key: { type: String, required: true, unique: true },
  user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  feature: { type: String, enum: ['chat', 'video'], required: true }, // <-- add this line
  status: { type: String, enum: ['active', 'revoked'], default: 'active' },
  createdAt: { type: Date, default: Date.now },
  lastUsedAt: { type: Date }
});

module.exports = model('api_keys', apiKeySchema);