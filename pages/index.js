import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
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
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.sectionWrapper}>
        <div className={styles.flexboxClass}>
          {/* <CategoryCard /> */}
          {/* <ProductCard /> */}
          {Object.keys(brandList).length > 0 && (
            // <div className={styles.sectionWrapper}>
            //   <h2 className={styles.heading2}>Toronto stores</h2>

              <div className={styles.cardLayout}>
                {Object.keys(brandList).map((ele, index) => (
                  <ProductCard
                    key={index}
                    title={ele}
                    products={brandList[ele]}
                  />
                ))}
              </div>
            // </div>
          )}
        </div>
      </div>
     
    </div>
  )
}
