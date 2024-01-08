import React, {useRef, useState} from 'react';
import {Loader, Search} from 'react-feather';
import SearchResultsDialog from "./SearchResultsDialog";

function SearchComponent() {
    const [searching, setSearching] = useState(false);
    const [loading,setLoading] = useState(false)
    const input = useRef(null);
    const [text,setText] = useState('')
    const [data,setData] = useState(null)
    const search = () => {
        setLoading(true)
        fetch(`https://openart.ai/api/workflows/list?query_type=workflow&keyword=${text}&pagesSize=25`)
            .then(res=>res.json())
            .then((results)=> {
                setLoading(false)
                setData(results)
                setSearching(false)
                setText('')
            })

    }

    return (
        <>
        <div className={'bottom-4 fixed w-full flex justify-center p-2'}>
            <div className={'w-full max-w-5xl flex'}>
                <div
                    onClick={() => {
                        if (!searching) {
                            setSearching(true);
                            setTimeout(() => {
                                input.current.focus();
                            }
                            , 300);
                        }
                    }}
                    className={`bg-white ${
                        searching ? 'w-full' : 'w-10 h-10' // Set initial width here
                    } rounded-full items-center  cursor-pointer flex  flex-row space-x-2 transition-width duration-300 ease-in-out`}
                >
                    <div
                        onClick={() => searching && setSearching(false)}
                        onKeyDown={e=>e.key==='Escape' && setSearching(false)}
                        className={"flex items-center justify-center w-10 h-10"}
                    >
                        {loading ? <Loader  className={'text-black animate-spin'} />:<Search className={'text-black'} />}

                    </div>

                    {searching && <input ref={input} value={text}

                                         // search on enter
                                            onKeyDown={e=> {
                                                if(e.key === 'Enter') {
                                                    search()
                                                }
                                            }}
                                         placeholder={"Search for workflows"}

                                         onChange={e=>setText(e.target.value)}
                                         className={'w-full border-none outline-none ring-0 text-xl rounded-full'} type='text' />}
                </div>
            </div>
        </div>
            <SearchResultsDialog isOpen={data!=null} close={()=>setData(null)} data={data}/>
            </>
    );
}

export default SearchComponent;
