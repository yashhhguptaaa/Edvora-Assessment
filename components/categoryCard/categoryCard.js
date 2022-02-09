import { useState } from "react";

import styles from "./CategoryCard.module.css";

import Image from "next/image";

const CategoryCard = ({allProducts, allCity, allState}) => {

    const [expandProducts, setExpandProducts] = useState(false)
    const [expandCity, setExpandCity] = useState(false)
    const [expandState, setExpandState] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

                <div className={styles.searchOption}>
                    
                    <span className={styles.searchTitle}>Filters</span>
                    <div className={styles.hrContainer}>
                        <hr />
                    </div>
                    
                </div>
                
                <div>

                    <div className={styles.productsDropdown}>
                        <span className={styles.productsTitle}>Products</span>
                        <div className={styles.dropDownImage}>

                            <Image
                                src={"/static/expand_more.svg"}
                                alt="Expand more icon"
                                width="24px"
                                height="24px"
                                onClick={() => setExpandProducts(!expandProducts)}
                            />

                        </div>
                        
                    </div>

                    {
                        expandProducts ?
                        (<div className={styles.dropDownWrapper}>
                            {
                                allProducts.map((x,idx) => (
                                    <div>
                                        <span key={idx} className={styles.dropdownContent}>{x.substring(0,16)}</span><br/>
                                    </div>
                                ) )
                            }
                        </div>)

                        
                        :""
                    }

                </div>

                <div>

                    <div className={styles.stateDropdown}>
                        <span className={styles.productsTitle}>State</span>
                        <div className={styles.dropDownImage}>

                            <Image
                                src={"/static/expand_more.svg"}
                                alt="Expand more icon"
                                width="24px"
                                height="24px"
                                onClick={() => setExpandState(!expandState)}
                            />

                        </div>
                    </div>

                    {
                        expandState ?
                        (<div className={styles.dropDownWrapperState}>
                            {
                                allState.map((x,idx) => (
                                    <div>
                                        <span key={idx} className={styles.dropdownContent}>{x.substring(0,17)}</span><br/>
                                    </div>
                                ) )
                            }
                        </div>)

                        
                        :""
                    }

                </div>    

                <div>

                    <div className={styles.cityDropdown}>
                        <span className={styles.productsTitle}>City</span>
                        <div className={styles.dropDownImage}>

                            <Image
                                src={"/static/expand_more.svg"}
                                alt="Expand more icon"
                                width="24px"
                                height="24px"
                                onClick={() => setExpandCity(!expandCity)}
                            />

                        </div>
                    </div>

                    {
                        expandCity ?
                        (<div className={styles.dropDownWrapperCity}>
                            {
                                allCity.filter((x,idx) => {if(idx<5) return x}).map((x,idx) => (
                                    <div>
                                        <span key={idx} className={styles.dropdownContent}>{x.substring(0,17)}</span><br/>
                                    </div>
                                ) )
                            }
                        </div>)

                        
                        :""
                    }

                </div>
            </div>
        </div>
    )
};

export default CategoryCard;