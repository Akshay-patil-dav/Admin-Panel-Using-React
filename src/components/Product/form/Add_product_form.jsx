import React from 'react'

export default function Add_product_form() {
    return (
        <div className='rightform'>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>

            <div className='fx gap-5'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
            </div>

            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <textarea type="email" className="form-control" id="exampleFormControlTextarea1" rows="6"> </textarea>
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>


            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <div>
                    <input type="file" />
                </div>
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>

        </div>
    )
}
