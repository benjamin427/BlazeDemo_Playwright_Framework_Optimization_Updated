import {createLogger, format, transports} from 'winston'
import path from 'path'

const logFormat = format.printf(({level, message, timestamp}) => {
    return `${message} [${level.toUpperCase()}] ${timestamp}`
})

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({format: 'YYYY-DD-MM HH:mm:ss'}),
        logFormat
    ),
    transports: [
        new transports.Console(
            format.combine(
                format.colorize({all: true})
            ),
            logFormat
        ),
        new transports.File({
            filename: 'logs/execution.log',
            options: {flags: 'w'}
        })
    ]
})

export default logger;

