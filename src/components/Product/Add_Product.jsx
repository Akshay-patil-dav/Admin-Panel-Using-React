import React from 'react'
import Add_product_form from './form/Add_product_form'
import Add_product_left_form from './form/Add_product_left_form'

export default function Add_Product() {
    return (
        <div className="eduler-layout" >


            <main className="eduler-main" >
                <div className="eduler-main__container">
                    {/* lkejdl */}
                    <div className='fx'>
                        <h4><b>Dashboard /</b></h4><h4><p className='mx-3'>Add Product</p></h4>
                    </div>

                    <form action="">

                        <div className='fx gap-5 form_add' >
                            <div>
                                <Add_product_form />

                            </div>
                            <Add_product_left_form />
                        </div>

                    </form>
                </div>
            </main>
        </div>
    )
}
