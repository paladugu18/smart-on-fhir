import { say } from 'cowsay';

/**
 * This script checks if the required environment variables are set before
 * starting the application. If any variables are missing then the process exits
 * with an informational message on the console.
 */

/**
 * Checks if any environment variables are missing. If any of them are missing then
 * it throws an error.
 * 
 * @param {Array} variables - An array of required environment variables. 
 */
const checkEnvironmentVariables = (variables) => {
  /* eslint-disable array-callback-return */
  /* eslint-disable consistent-return */
  const missingEnvVariables = variables.filter((variable) => {
    if (!process.env[variable]) {
      return variable;
    }
  });

  if (missingEnvVariables.length) {
    if (missingEnvVariables.length === 1) {
      throw new Error(`Missing environment variable ${missingEnvVariables[0]}`);
    }
    throw new Error(`Missing environment variables ${missingEnvVariables.join(', ')}`);
  }
};

try {
  checkEnvironmentVariables(['CLIENT_ID', 'NODE_ENV']);
} catch (err) {
  /* eslint-disable no-console */
  console.error(
    say({
      text: err.message,
    }),
  );
  process.exit(1);
}

