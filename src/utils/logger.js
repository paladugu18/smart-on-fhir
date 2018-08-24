/**
 * Defines logger for the application.
 */
import bunyan from 'bunyan';

// Creating logger for the application and configuring the log paths for
// different levels.
const logger = bunyan.createLogger({
  name: 'smart-workshop',
  level: 'info',
  serializers: {
    err: bunyan.stdSerializers.err,
  },
});

// Disabling logger if it is test environment else adding streams.
if (process.env.NODE_ENV === 'test') {
  logger.level(bunyan.FATAL + 1);
}

export default logger;
