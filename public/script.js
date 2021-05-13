const socket = io('/')
const myPeer = new myPeer(undefined,{
    host:'/',
    port:'3001'
})

myPeer.on('open', id=>{
    socket.emit('join-room', ROOM_ID, id)
})

socket.emit('join-room', ROOM_ID, 10)

socket.on('user-joined', userId=>{
    console.log('User Joined:'+ userId)
})