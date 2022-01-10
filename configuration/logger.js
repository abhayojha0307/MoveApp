const { createLogger, transports, transport, info}= require('winston')

const infoLogger=createLogger({
    transports:[
        new transports.File({
            filename:'./logs/loggerinfo.log',
            level:'info'
        })
    ]
})

infoLogger.stream={
    write: (message,encoding)=>{
        infoLogger.info(message)
    }
}

module.exports=infoLogger