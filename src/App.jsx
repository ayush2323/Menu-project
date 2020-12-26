import React, { useState } from 'react'
import items from './Data'
import Categories from './Categories'
import Menu from './Menu'

const allCategories =['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories)

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItem = (category) => {
        if(category === 'all'){
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems);
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterItem={filterItem}/>
                <Menu items={menuItems} />
            </section>
        </main>
    )
}

export default App;
