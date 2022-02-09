import { useState } from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import CategoryCard from '../components/categoryCard/categoryCard'
import ProductCard from '../components/productCard/productCard'

export async function getStaticProps(){
  const response = await fetch('https://assessment-edvora.herokuapp.com/')  
  const data = await response.json();
  
  let brandCategories = {};
  data.forEach(element => {
    if(!brandCategories[element.brand_name]){
      brandCategories[element.brand_name] = [];
    }
    brandCategories[element.brand_name].push(element)
  });
 

  return {
    props: {
      brandCategories
    },
  };
}

export default function Home(props) {

  const [brandList, setBrandList] = useState(props.brandCategories)
  

  let allProducts= [], allState=[], allCity=[];
  Object.keys(brandList).forEach(item => {
    allProducts.push(brandList[item][0].product_name)
    for(let i=0;i<brandList[item].length;i++){

      if(allState.indexOf(brandList[item][i].address.state) === -1)
        allState.push(brandList[item][i].address.state)
      if(allCity.indexOf(brandList[item][i].address.city) === -1)
        allCity.push(brandList[item][i].address.city)
    }
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Edvora Products</title>
        <meta name="Edvora" content="Marketplace created by Edvora Pvt. Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.sectionWrapper}>
        <div className={styles.flexboxClass}>
          
   
          <div className={styles.categoryCardWrapper}>
            <CategoryCard allProducts={allProducts} allCity={allCity} allState={allState} />
          </div>
          <div className={styles.productCardWrapper}>
            
            <h2 className={styles.brandTitle}>Edvora</h2>

            <h2 className={styles.productTitle}>Products</h2>

            <div className={styles.listOfProductsWrapper}>

              {Object.keys(brandList).length > 0 && (

                  <div className={styles.cardLayout}>
                    {Object.keys(brandList).map((ele, index) => (
                      <ProductCard
                        key={index}
                        title={ele}
                        products={brandList[ele]}
                      />
                    ))}
                  </div>
            
              )}

            </div>

          </div>
        </div>
      </div>
     
    </div>
  )
}
