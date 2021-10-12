module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: "mysql",
        host: env('DATABASE_HOST', 'localhost'),
        port: env('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'news'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', '123456'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
