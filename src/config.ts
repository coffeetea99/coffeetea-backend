const defaultConfig = {
  SERVER_PORT: '3009',

  SQLITE_LOGGING: 'true',
  SQLITE_SYNCHRONIZE: 'true', // must set false on real service
};

export default defaultConfig;

for (const key in defaultConfig) {
  const assertedKey = key as keyof typeof defaultConfig;
  const env = process.env[assertedKey];
  if (env !== undefined) {
    defaultConfig[assertedKey] = env;
  }
}
