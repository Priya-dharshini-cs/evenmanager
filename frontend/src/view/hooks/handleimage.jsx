// import { useToast } from "@chakra-ui/react"
import { useState } from "react"
import { toast } from "react-toastify"

const handleimage=()=>{
   const [imgurl,setimgurl]=useState()

   const handlechangeimage=(e)=>{
    const file=e.target.files[0]

    if (file && file.type.startsWith('image/'))
    {
        const reader=new FileReader()

        reader.onloadend=(e)=>{
            setimgurl(reader.result)
        }
        reader.readAsDataURL(file)
    }
    else
    {
        toast.error('Invalid file type')
        setimgurl(null)
    }
   }

    return {imgurl,setimgurl,handlechangeimage}
}

export default handleimage