
import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { Link } from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';
import { useGetAboutUsQuery, useUpdateAboutUsMutation } from '../redux/Api/dashboardApi';
import { toast } from 'sonner';
const Terms = () => {
    const { data: getAbout } = useGetAboutUsQuery();
    const [updateAbout] = useUpdateAboutUsMutation()
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [isLoading, seLoading] = useState(false)
    const handleTerms = () => {
        // console.log(content)
        const data = {
            description: content
        }
        console.log(data);
        updateAbout(data).unwrap()
            .then((payload) => toast.success("Update about successfully!"))
            .catch((error) => toast.error(error?.data?.message));
    }
    const config = {
        readonly: false,
        placeholder: 'Start typings...',
        style: {
            height: 650,
        },
        buttons: [
            'image', 'fontsize', 'bold', 'italic', 'underline', '|',
            'font', 'brush',
            'align'
        ]
    }

    useEffect(()=>{
        setContent(getAbout?.data?.description)
    },[getAbout])
    return (
        <>
            <div className='start-center gap-2 mb-3 relative'>
                <div className='absolute top-6 left-2 flex items-center'>
                    <Link to={-1} className='py-1 px-2 rounded-md start-center gap-1  '><IoArrowBackSharp /></Link> <p>Terms & Condition</p>
                </div>
            </div>

            <div className="custom-jodit-editor">
                <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1}
                    onBlur={newContent => setContent(newContent)}
                    onChange={newContent => { }}
                />
            </div>
            <div className='text-center mt-3'>
                <button  onClick={handleTerms} className='px-8 py-2 rounded-sm  bg-black text-white' >Update</button>
            </div>
        </>
    )
}

export default Terms
