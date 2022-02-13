import React from 'react';
import Layout from '../../components/layout/Layout';


function About() {
    return(
        <div>
            <Layout>
                <div className="text-center mx-auto py-5 my-5 container-fluid d-flex flex-column justify-content-around" style={{width: "92%"}}> 

                    <div className=''>
                        <h1 className='display-5 font-weight-bold'>Cine suntem</h1>
                        <p className='font-italic h4'>Suntem o echipa de experti si distribuitori neautorizati ai brandului Apple</p>
                    </div>
                    
                    <div className=''>
                        <h1 className='display-5 font-weight-bold'>Misiunea noastra</h1>
                        <p className='font-italic h4'>Am infiintat acest magazin online cu dorinta de a oferi clientilor oportunitatea de a achizitiona produse Apple de cea mai buna calitate</p>
                    </div>

                </div>
            </Layout>
        </div>
    );
}

export default About;