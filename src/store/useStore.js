import {create} from 'zustand'
import {persist,devtools} from 'zustand/middleware'

const hadithStore = (set)=>({
    books : [],
    categories : [],
    categoriesSub : [],
    chapters : [],
    writers : [],
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
    },
    addCategoriesSub : (data)=>{
        set(()=>({
            categoriesSub : data,
        }))
    },
    addWriters : (data)=>{
        set(()=>({
            writers : data,
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