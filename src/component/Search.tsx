import React, {useEffect, useState} from 'react';

const Search: React.FC<PropsType> = ({value,onSubmit}) => {

    const [tempSearch, setTempSearch] = useState(value)

    useEffect(() => {
        setTempSearch(value)
    }, [value]);

    return (
            <div>
                <input
                    type="text"
                    placeholder='search'
                    onFocus={(e) => {
                        e.target.select()
                    }}
                    onChange={(e) => {
                        setTempSearch(e.target.value)
                    }}
                    value={tempSearch}/>
                <button onClick={() => {
                    onSubmit(tempSearch)
                }}>find
                </button>
            </div>
    );
};

export default Search;

interface PropsType {
    onSubmit: (value:string) => void
    value:string
}
