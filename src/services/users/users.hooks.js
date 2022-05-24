const { authenticate } = require("@feathersjs/authentication").hooks;

const { hashPassword, protect } =
  require("@feathersjs/authentication-local").hooks;

module.exports = {
  before: {
    all: [],
    find: [authenticate("jwt")], // Lấy hết
    get: [authenticate("jwt")], // Lấy theo id
    create: [hashPassword("password")], // Thêm
    update: [hashPassword("password"), authenticate("jwt")], // Sửa
    patch: [hashPassword("password"), authenticate("jwt")], // Sửa
    remove: [authenticate("jwt")], // Xóa
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect("password"),
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
