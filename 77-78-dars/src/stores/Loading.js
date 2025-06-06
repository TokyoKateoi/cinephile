import {create} from "zustand"

const loadingStore = create((set)=>({
    loading:true,
    loader:()=>{
        set({loading: false})
    }
}))

export default loadingStore