import classes from './Category.module.css'
function CategoryCard({data}){
    const isMultiGrid = Array.isArray(data.items);
    return(
        <div className={classes.category}>
            <a href="">
                <h2>{data.title}</h2>
                    {isMultiGrid ? (
                    /* --- 4-Pack Layout --- */
                    <div className={classes.grid_wrapper}>
                    {data.items.map((item, index) => (
                        <a key={index} href="" className={classes.grid_item}>
                        <img src={item.image} alt={item.title} />
                        <p className={classes.item_title}>{item.title}</p>
                        </a>
                    ))}
                    </div>
                ) : (
                    /* --- Single Image Layout --- */
                    <a href="" className={classes.single_wrapper}>
                    <img src={data.imgLink} alt="" />
                    </a>
                )}
                <p className={classes.shop_link}>{data.shop}</p>
            </a>
            

        </div>
    )
}

export default CategoryCard;