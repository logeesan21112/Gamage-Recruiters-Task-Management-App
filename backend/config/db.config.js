import mongoose from 'mongoose'

export const ConnectDB = async() => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mernproject')
    console.log(`the db is connect with ${mongoose.connection.host}`);
  } catch (error) {
    await mongoose.disconnect()
    process.exit(1)
  }
}