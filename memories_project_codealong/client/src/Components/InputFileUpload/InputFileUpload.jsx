import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const HiddenFileGrabber = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
    type: "file",
    // onDone={({ fileData }) => setPostData({ ...postData, selectedFile: fileData })}
});

export default function InputFileUpload() {
    return (
        <Button
            component="Upload"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            multiple={false}
            // onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
            // onClick={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
        >
            Upload file
            <HiddenFileGrabber
                type="file"
                // onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
            />
        </Button>
    );
}
