
import { atom } from "recoil";

const useratom=atom({
    key:'user',
    default:JSON.parse(localStorage.getItem('token'))
})

export default useratom