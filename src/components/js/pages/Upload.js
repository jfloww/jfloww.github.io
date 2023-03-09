import React, { useState, useEffect } from 'react';
import MarkDown from 'markdown-to-jsx';
import { Link } from 'react-router-dom';
import useFetch from './Fetch';


function Upload( { file, title, date } ) {

    const file_name = file;
    const [post, setPost] = useState('');
    useFetch(`/posts/${ title }`);

    useEffect(() => {
        import(`../../posts/${file_name}`)
        .then((res) => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setPost(res));
        })
        .catch((err) => console.log(err));
    });

    return (
        <div>
            {/* <MarkDown> { post } </MarkDown> */}
            <Link to={`/posts/${ title }`}>Test Post 
            
            </Link>
        </div>
    );
}

export default Upload;
