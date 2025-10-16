import User from '../src/users/user.model.js'

export const emailExists = async (email = '') => {
    const existe = await User.findOne({email})

    if(existe){
        throw new Error('El email ya esta registrado')
    }
}
export const existePost = async (_id = '') => {
    const existe = await Post.findOne({_id})
 
    if(!existe){
        throw new Error('La publicación ya no existe')
    }
}
 