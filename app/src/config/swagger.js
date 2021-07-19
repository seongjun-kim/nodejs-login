const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    info: {
      title: "node js test app",
      version: "1.0.0",
      description: "Make For node js test.",
    },
    host: "localhost:3000",
    basePath: "/",
    contact: { email: "lewisel@naver.com" },
    components: {
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer" },
      },
    },
    schemes: ["http", "https"],
    definitions: {
      CommonResponse: {
        type: "object",
        required: ["code", "message"],
        properties: {
          code: { type: "string", description: "결과코드" },
          message: { type: "string", description: "개발용 메시지" },
        },
      },
    },
  },
  apis: ["./src/routes/*/*.js"],
};

const specs = swaggereJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
