const Resume = () => {
    return (
        <div id="content">
            <h1>Resume</h1>
            {/* Make the ids differ so that the css can be different. */}
            <div id="desktop_only">
                <h3>The resume displayed here might be outdated. Please email me at bernicojc113@gmail.com for my up to date resume. Thank you!</h3>
            </div>
            <div id="mobile_only">
                <h3>The resume can't be displayed on your device! Please open this website on your desktop, or email me at bernicojc113@gmail.com for my up to date resume. Thank you!</h3>
            </div>
            <div id="pdf_container">
                <object data="other_files/resume_bernico.pdf" type="application/pdf">
                    <p>Your browser does not support PDFs. <a href="resume_bernico.pdf">Download the PDF</a>.</p>
                </object>
            </div>
        </div>
    )
}

export default Resume