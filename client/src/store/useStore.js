import {create} from 'zustand'
import {persist,devtools} from 'zustand/middleware'

const hadithStore = (set)=>({
    books : [],
    categories : [],
    chapters : [],
    addBookSub : (data)=>{
        set(()=>({
            books : data.books,
            categories : data.categories
        }))
    },
    addChapters : (data)=>{
        set(()=>({
            chapters : data,
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