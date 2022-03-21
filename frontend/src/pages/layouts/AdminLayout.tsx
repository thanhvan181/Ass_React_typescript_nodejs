import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/admin/Header/Header'
import Sibar from '../../components/admin/Sibar/Sibar'

type Props = {}

const AdminLayout = (props: Props) => {
    return (
        <div>

            <Header />


            <div className="container-admin">

                <Sibar />
                <main className='main-content'>
                    <Outlet />
                </main>




            </div>



        </div>

    )
}

export default AdminLayout