import {create} from 'zustand'
import {persist,devtools} from 'zustand/middleware'

const hadithStore = (set)=>({
    books : [],
    categories : [],
    addBookSub : (data)=>{
        set(()=>({
            books : data.books,
            categories : data.categories
        }))
    }
})

const useHadithStore = create(
    devtools(
        persist(
            hadithStore,
            {
                name : 'hadithStore'
            }
        )
    )
)

export default useHadithStore