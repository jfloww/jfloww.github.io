import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import Upload from './Upload';
import '../../css/pages/Posts.css'
import React, { useState, useEffect } from 'react';


function Posts() {
    const requireContext = require.context('../../posts', false, /\.md$/);
    const files = requireContext.keys();
    const newFiles = files.map((fileName) => fileName.replace('./', ''));

    const file_name = newFiles[0];
    const title = file_name.replace('.md', '');
    const [post, setPost] = useState('');

    return (
        <div className='posts'>
            <Header />
                <div className='post_container'>
                <Sidebar className='sidebar' />

                <div className='post_box'>
                    <Upload file={ file_name } title={ title } date={ new Date() }/>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Posts;
