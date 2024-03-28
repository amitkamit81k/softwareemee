import React from 'react';
import Layout from '../../components/Layout/layout';
import './Home.scss';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
function Home() {
  return (
    <>
       <Layout>
           {/* Banner Section Start  */} 
           <Section1/>
           {/* Banner Section End  */} 

           {/* Features Section Start */}
           <Section2/>
           {/* Features Section End */}

            {/* Install Section Start */} 
               <Section6/>
            {/* Install Section End */} 

           {/* Product Section Start */}
           <Section3/>
           {/* Product Section End */}

           {/* Trust Section Start */}
           <Section4/>
           {/* Trust Section End */}

            {/* Contact Section Start */}
            <Section5/>
            {/* Contact Section End */}
        </Layout> 
    </>
  )
}

export default Home