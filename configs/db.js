'use strict'

import mongoose from 'mongoose'

export const dbConnection = async () =>{
    try {
        mongoose.connection.on('error', ()=> {
        console.log('MongoDB | no se puedo conectar a MONGODB')
        mongoose.disconnect()
        })

          mongoose.connection.on('connecting', ()=> {
        console.log('MongoDB | intentando conectar a MONGODB')
        })

          mongoose.connection.on('connected', ()=> {
        console.log('MongoDB | conectado a MONGODB')
        })

          mongoose.connection.on('open', ()=> {
        console.log('MongoDB | conectado a la base de datos')
        })
        
          mongoose.connection.on('reconnected', ()=> {
        console.log('MongoDB | reconectado a mongoDB')
        })

          mongoose.connection.on('disconnected', ()=> {
        console.log('MongoDB | desconectado de MONGODB')
        })
        
        
        
        await mongoose.connect(process.env.URI_MONGODB,{
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 10
        })
    }catch (error){
        console.log('Error al conectar la db: ${error}')
    }
}