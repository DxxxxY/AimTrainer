const authSchema = new mongoose.Schema({
    user: String,
    pass: String
});

const Auth = mongoose.model('Auth', authSchema);