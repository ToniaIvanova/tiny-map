module.exports = {
  async up(db) {
    return db.collection('DoneCount').updateMany({}, { $unset: { doneCount: 1, __v: 1 } });
  },
};
