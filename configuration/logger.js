const { createLogger, transports, transport}= require('winston')

const infoLogger=createLogger({
    transports:[
        new transports.File({
            filename:'./logs/loggerinfo.log',
            level:'info'
        })
    ]
})

module.exports=infoLogger