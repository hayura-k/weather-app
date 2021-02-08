import React  from 'react';

const SearchForm = () =>{
    return (
        <div>
            <form>
                <div className='form-group'>
                    <input type='text' className='form-control'/>
                    <button type='submit' name='search' className='btn btn-primary mt-2'>検索</button>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;
